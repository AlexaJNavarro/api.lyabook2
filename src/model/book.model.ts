import bookEntity from '../entity/book.entity'
import {BookInterface} from '../interface/book.interface'

export class BookModel{
    public static GetAll(){
        const book = bookEntity.find()
        return book
    }

    public static GetBySlug(slug: string){
        const book = bookEntity.findOne({ slug : slug}).exec()
        return book
    }
    
    public static async Update(id: string, body: object){
        const book = bookEntity.findByIdAndUpdate(id,  {$push:{commentaries: body}}, {useFindAndModify: false})
        return book
    }
}