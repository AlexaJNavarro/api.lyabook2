import {model, Schema} from 'mongoose'
import {BookInterface} from '../interface/book.interface'

const bookSchema : Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    editorial: {
        type: String,
        require: true
    },
    price_current: {
        type: Number,
        require: true
    },
    price_before: {
        type: Number,
        require: true
    },
    stars: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    commentaries: [
        {
            id_client: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            comentary: {
                type: String,
                require: true
            },
            star: {
                type: Number,
                require: true
            }
        }
    ],
    type:{
        digital:{
            format:{
                type: String
            },
            src: {
                type: String
            },
            details:[
                String
            ],
            active: {
                type: Boolean
            }
        },
        fisico:{
            format: {
                type: String
            },
            log: {
                type: String
            },
            lat: {
                type: String
            },
            stock: { 
                type: Number
            },
            details : [
                String
            ],
            active: {
                type: Boolean
            }
        }
    },
    categories:[String],
    images_src: [String],
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

export default model<BookInterface>('books', bookSchema)