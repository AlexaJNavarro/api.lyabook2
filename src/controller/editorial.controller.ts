import {Request, Response} from 'express'
import { Answer } from '../helper/answer.helper'
import {BookModel} from '../model/book.model'

export class EditorialController{
    public static async GetAll(req: Request, res: Response): Promise<Response>{
       try {
            const books = await BookModel.GetAll()
            const listEditorial = new Array
            const editorial = new Array

            books.forEach((book)=>{
                listEditorial.push(book.editorial)
            })

            listEditorial.forEach((listE)=>{
                const value = editorial.includes(listE)
                if(!value){
                    editorial.push(listE)
                }
            })

            const response = new Answer("Mensaje", "Listado de Editoriales", false, editorial)
            return res.status(200).json(response)

       } catch (error) {
            const response = new Answer("Error", error, true, null)
            return res.status(400).json(response)
       }
        
    }
}