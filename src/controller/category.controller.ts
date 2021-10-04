import {Request, Response} from 'express'
import {CategoryModel} from '../model/category.model'
import {Answer} from '../helper/answer.helper'

export class CategoryController{

   public static async GetAll(req: Request, res:Response): Promise<Response>{
        try {
            const category = await CategoryModel.GetAll()
            const response = new Answer("Mensaje", "Listado de Categorias" , false, category)
            return res.status(200).json(response)

        } catch (error) {
            const response = new Answer("Error", error.message, true, null)
            return res.status(404).json(response)
        }   
    }


    public static async GetAllSlug(req: Request, res:Response): Promise<Response>{
        try{
            const slug = req.params.SLUG 
            const categories = await CategoryModel.GetAllSlug(slug)
            const response = new Answer('Mensaje', 'Listado de la Categoria', false, categories)
            return res.status(200).json(response)
        } catch (error) {
            const response = new Answer('Error', error.message, true, null)
            return res.status(400).json(response)
        }
    }

}