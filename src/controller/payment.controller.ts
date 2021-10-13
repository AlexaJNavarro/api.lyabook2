import {Request, Response} from 'express'
import { Answer } from '../helper/answer.helper'
import { PaymentInterface } from '../interface/payment.interface'
import {PaymentModel} from '../model/payment.model'
export class PaymentController{
    public static async GetByClient(req: Request, res: Response): Promise<Response>{
        try {
            const id = req.params.ID
            const payment = await PaymentModel.GetByClient(id)
            return res.status(200).json(new Answer('Mensaje', 'Listado de ventas', false, payment)) 
        } catch (error) {
            return res.status(400).json(new Answer('Error', error, true, null))
        }
    }

    public static async Create(req: Request, res: Response): Promise<Response>{
        try {
            const body: PaymentInterface = req.body
            const payment = await PaymentModel.Create(body)
            return res.status(201).json(new Answer('Mensaje','Se agrego correctamente el pago', false, payment))
        } catch (error) {
            return res.status(400).json(new Answer('Error', error, true, null))
        }
    }
}