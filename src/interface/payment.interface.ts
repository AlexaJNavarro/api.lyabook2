import {Document} from 'mongoose'
export interface PaymentInterface extends Document{
    id_client: string,
    products:[{
        id_payment: string,
        title: string,
        unit_price: number,
        quantity: number,
        description: string
    }],
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    active: boolean
}