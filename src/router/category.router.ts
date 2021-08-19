import {Router} from 'express'
import {CategoryController} from '../controller/category.controller'
import {CategoryModel} from '../model/category.model'

const routeCategory = Router()
    .get('/categories', CategoryModel.GetAll)

export default routeCategory
