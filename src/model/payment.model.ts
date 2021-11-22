import paymentEntity from '../entity/payment.entity'
import {PaymentInterface} from '../interface/payment.interface'

export class PaymentModel{
    public static GetByClient(id: string){
        const payment = paymentEntity.find({ id_client : id, active: true}).exec()
        return payment
    }

    public static Create(body: PaymentInterface){
        const payment = new paymentEntity(body)
        const paying = payment.save()
        return paying
    }

    public static Update(id:string, status: string){
        const payment = paymentEntity.findByIdAndUpdate({_id: id}, {status: status}, {useFindAndModify: false})
        return payment
    }

    public static UpdateActive(id:string){
        const payment = paymentEntity.findByIdAndUpdate({_id: id}, {active: false}, {useFindAndModify: false})
        return payment
    }
}