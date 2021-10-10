import {Router} from 'express'
import {OrderController} from '../controller/order.controller'

const routerOrder = Router()

routerOrder
    .post('/orders',OrderController.GenerateOrder)

export default routerOrder