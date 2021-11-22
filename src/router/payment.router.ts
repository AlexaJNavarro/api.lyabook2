import {Router} from 'express'
import {PaymentController} from '../controller/payment.controller'

const routerPayment = Router()

routerPayment
    .get('/payments/', PaymentController.GetAll)
    .get('/payments/:ID', PaymentController.GetByClient)
    .post('/payments', PaymentController.Create)
    .put('/payments/:ID', PaymentController.Update)
    .put('/payments/active/:ID', PaymentController.UpdateActive)


export default routerPayment