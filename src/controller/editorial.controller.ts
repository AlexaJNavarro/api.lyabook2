import {Request, Response} from 'express'
import { Answer } from '../helper/answer.helper'
import {BookModel} from '../model/book.model'

export class EditorialController{
    public static async GetAll(req: Request, res: Response): Promise<Response>{
       try {
            const books = await BookModel.GetAll()
            var editoriales = new Array()
            let listBooks = books.filter(book => book.active == true)
            let contador = new Array()

            listBooks.forEach((book)=>{
                const value = contador.includes(book.editorial)
                if(!value){
                    var editorial = {
                        name: book.editorial,
                        status: book.active
                    }
                    editoriales.push(editorial)
                    contador.push(book.editorial)
                }
                
            })
            

            const response = new Answer("Mensaje", "Listado de Editoriales", false, editoriales)
            return res.status(200).json(response)

       } catch (error) {
            const response = new Answer("Error", error, true, null)
            return res.status(400).json(response)
       }
        
    }
}