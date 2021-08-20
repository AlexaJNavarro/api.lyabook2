import {Request, Response} from 'express'
import { Answer } from '../helper/answer.helper'
import {BookModel} from '../model/book.model'

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
}