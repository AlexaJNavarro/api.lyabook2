import {Schema, model} from 'mongoose'
import { CategoryInterface } from '../interface/category.interface'

const categorySchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
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

export default model<CategoryInterface>('categories',categorySchema)