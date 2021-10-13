import {Router} from 'express'
import {PaymentController} from '../controller/payment.controller'

const routerPayment = Router()

routerPayment
    .post('/payments', PaymentController.Create)

export default routerPayment