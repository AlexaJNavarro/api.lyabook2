import {Request, Response ,NextFunction, json } from 'express'
import {ValidateCertificate} from '../validate/certificate.validate' 
import jwt from 'jsonwebtoken'
import { Answer } from "../helper/answer.helper"
import { RolHelper } from '../helper/rol.helper'

export class MiddlewareRoles{

    public static GerenteMiddleware(req: Request, res: Response, next:NextFunction){
        const certificate = ValidateCertificate.GetCertificatePublic()
        if(certificate != undefined || certificate != null || certificate != ""){
            const header = req.headers['authorization']
            if(header != undefined || header != null){
                jwt.verify(header, certificate, (err, data)=>{
                    if(err){
                        return res.status(403).json(new Answer('Error', 'el token debe ser proporcionada', true, null))
                    }
                    if(data != null){
                        if(String(data.rol).toUpperCase() == RolHelper.Manager){
                            next()
                        }else{
                            return res.status(401).json(new Answer('Error',`${data.name}, no posee autorización porque su rol es ${data.rol}`, true, null))
                        }
                    }
                    
                })
            }
        }else{
            return res.status(500).json(new Answer('Error', 'No se pudo leer el certificado.', true, null))
        }
    }

    public static AdminMiddleware(req: Request, res: Response, next:NextFunction){
        const certificate = ValidateCertificate.GetCertificatePublic()
        if(certificate != undefined || certificate != null || certificate != ""){
            const header = req.headers['authorization']
            if(header != undefined || header != null){
                jwt.verify(header, certificate, (err, data)=>{
                    if(err){
                        return res.status(403).json(new Answer('Error', 'el token debe ser proporcionada', true, null))
                    }
                    if(data != null){
                        if(String(data.rol).toUpperCase() == RolHelper.Admin){
                            next()
                        }else{
                            return res.status(401).json(new Answer('Error',`${data.name}, no posee autorización porque su rol es ${data.rol}`, true, null))
                        }
                    }
                    
                })
            }
        }else{
            return res.status(500).json(new Answer('Error', 'No se pudo leer el certificado.', true, null))
        }
    }

    public static UserMiddleware(req: Request, res: Response, next:NextFunction){
        const certificate = ValidateCertificate.GetCertificatePublic()
        if(certificate != undefined || certificate != null || certificate != ""){
            const header = req.headers['authorization']
            if(header != undefined || header != null){
                jwt.verify(header, certificate, (err, data)=>{
                    if(err){
                        return res.status(403).json(new Answer('Error', 'el token debe ser proporcionada', true, null))
                    }
                    if(data != null){
                        if(String(data.rol).toUpperCase() == RolHelper.Client){
                            next()
                        }else{
                            return res.status(401).json(new Answer('Error',`${data.name}, no posee autorización porque su rol es ${data.rol}`, true, null))
                        }
                    }
                    
                })
            }
        }else{
            return res.status(500).json(new Answer('Error', 'No se pudo leer el certificado.', true, null))
        }
    }

    public static AdminUserMiddleware(req: Request, res: Response, next:NextFunction){
        const certificate = ValidateCertificate.GetCertificatePublic()
        if(certificate != undefined || certificate != null || certificate != ""){
            const header = req.headers['authorization']
            if(header != undefined || header != null){
                jwt.verify(header, certificate, (err, data)=>{
                    if(err){
                        return res.status(403).json(new Answer('Error', 'el token debe ser proporcionada', true, null))
                    }
                    if(data != null){
                        if(String(data.rol).toUpperCase() == RolHelper.Admin || String(data.rol).toUpperCase() == RolHelper.Client){
                            next()
                        }else{
                            return res.status(401).json(new Answer('Error',`${data.name}, no posee autorización porque su rol es ${data.rol}`, true, null))
                        }
                    }
                    
                })
            }
        }else{
            return res.status(500).json(new Answer('Error', 'No se pudo leer el certificado.', true, null))
        }
    }
    

     
}