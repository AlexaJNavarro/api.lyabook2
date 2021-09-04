import {Router} from 'express'
import {CategoryController} from '../controller/category.controller'
import { MiddlewareRoles } from '../middleware/roles.middleware'

const routeCategory = Router()
    .get('/categories', CategoryController.GetAll)

export default routeCategory
