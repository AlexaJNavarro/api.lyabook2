import {model, Schema} from 'mongoose'
import {PaymentInterface} from '../interface/payment.interface'

const paymentSchema : Schema = new Schema({
    id_client: {
        type: String,
        require: true
    },
    products: [
        {
            id_payment: {
                type: String,
                require: true
            },
            title: {
                type: String,
                require: true
            },
            unit_price: {
                type: Number,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            },
            description: {
                type: String,
                require: true
            }
        }
    ],
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
    },
    deleted_at: {
        type: Date,
    },
    active: {
        type: Boolean,
        require: true
    }
})

export default model<PaymentInterface>('payments', paymentSchema)