import paymentEntity from '../entity/payment.entity'
import {PaymentInterface} from '../interface/payment.interface'

export class PaymentModel{
    public static GetByClient(id: string){
        const payment = paymentEntity.find({ id_client : id}).exec()
        return payment
    }

    public static Create(body: PaymentInterface){
        const payment = new paymentEntity(body)
        const paying = payment.save()
        return paying
    }
}