import {Document} from 'mongoose'
export interface CategoryInterface extends Document{
    name: string,
    slug: string,
    // created_at: Date,
    // updated_at: Date,
    // deleted_at: Date,
    active: boolean
}