import {Document} from 'mongoose'

export interface BookInterface extends Document{
    name: string,
    slug: string,
    author: string,
    editorial: string,
    price_current: Number,
    price_before: Number,
    stars: number,
    description: string,
    commentaries: [
        {
            id_client: string,
            message: string
        }
    ],
    type:{
        digital:{
            format:string,
            src: string,
            details:[string],
            active: boolean
        },
        fisico:{
            format: string,
            log: string,
            lat: string,
            stock:number,
            details : [string],
            active: boolean
        }
    },
    categories:[{
        name: string,
        comentary: string,
        star: number
    }],
    images_src: [string],
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
    active: boolean
}