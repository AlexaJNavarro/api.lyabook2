import {Router} from 'express'
import {EditorialController} from '../controller/editorial.controller'

const routerEditorial = Router()
routerEditorial
    .get('/editorial', EditorialController.GetAll)

export default routerEditorial