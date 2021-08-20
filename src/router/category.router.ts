import {Router} from 'express'
import {CategoryController} from '../controller/category.controller'

const routeCategory = Router()
    .get('/categories', CategoryController.GetAll)

export default routeCategory
