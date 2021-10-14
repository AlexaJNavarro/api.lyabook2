import {Document} from 'mongoose'
export interface PaymentInterface extends Document{
    id_client: string,
    payment_id: number,
    status: string,
    products:[{
        id_payment: string,
        title: string,
        unit_price: number,
        quantity: number,
        description: string,
        picture_url: string,
        category_id: string
    }],
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    active: boolean
}