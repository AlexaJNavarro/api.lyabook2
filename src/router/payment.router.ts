import {Router} from 'express'
import {PaymentController} from '../controller/payment.controller'

const routerPayment = Router()

routerPayment
    .get('/payments/:ID', PaymentController.GetByClient)
    .post('/payments', PaymentController.Create)
    .put('/payments/:ID', PaymentController.Update)


export default routerPayment