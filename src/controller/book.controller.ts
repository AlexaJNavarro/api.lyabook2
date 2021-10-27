import {Request, response, Response} from 'express'
import { Answer } from '../helper/answer.helper'
import {BookModel} from '../model/book.model'
import {BookInterface} from '../interface/book.interface'

export class BookController{
    public static async GetAll(req: Request, res: Response): Promise<Response>{
        try {
            const books = await BookModel.GetAll()
            const response = new Answer("Mensaje", "Listado de libros", false, books)
            return res.status(200).json(response)

        } catch (error) {
            const response = new Answer("Error", error, true, null)
            return res.status(404).json(response)
        }
    }

    public static async GetBySlug(req: Request, res: Response): Promise<Response>{
        try {

            const slug = req.params.SLUG
            const book = await BookModel.GetBySlug(slug.toLocaleLowerCase())
            const response = new Answer("Mensaje", "Listado de libro", false, book)

            if(response.data == null){
                return res.status(404).json(new Answer("Error",`El libro con el slug <${slug.toLocaleLowerCase()}> no exite o no se encontró`, true, null))
            }
            return res.status(200).json(response)

        } catch (error) {
            const response = new Answer("Error", error, true, null)
            return res.status(404).json(response)
        }
    }
    public static async GetByName(req: Request, res: Response): Promise<Response>{
        try {

            const name = req.params.NAME
            console.log(name)
            const book = await BookModel.GetByName(name)
            console.log('********************************++')
            console.log(book)
            const response = new Answer("Mensaje", "Listado de libro", false, book)

            if(response.data == null){
                return res.status(404).json(new Answer("Error",`El libro con el nombre <${name.toLocaleLowerCase()}> no exite o no se encontró`, true, null))
            }
            return res.status(200).json(response)

        } catch (error) {
            const response = new Answer("Error", error, true, null)
            return res.status(404).json(response)
        }
    }
    public static async Update(req: Request, res: Response): Promise<Response>{
        try {
            const id = req.params.ID
            const body = req.body
            var comentary = {
                name: body.commentaries.name,
                comentary: body.commentaries.comentary,
                star: body.commentaries.star
            }
            const book = await BookModel.Update(id,comentary)
            return res.status(200).json(new Answer('Mensaje','El libro fue actualizado', false, book))

        } catch (error) {
            return res.status(400).json(new Answer('Error',error, true, null))
        }
    }
    public static async UpdateStockByName(req: Request, res: Response): Promise<Response>{
        try {
            const body = req.body
            const name = req.params.NAME
            console.log('*******************UPDATE BY NAME*******************')
            console.log(body)
            console.log(body.stock)
            const book = await BookModel.UpdateStockByName(name, body.stock)
            console.log('*******************RESPONSE UPDATE BY NAME*******************')
            console.log(book)

            return res.status(200).json(new Answer('Mensaje', 'El libro fue actualizado', false, book))
        } catch (error) {
            return res.status(400).json(new Answer('Error',error, true, null))
        }
    }
    
}