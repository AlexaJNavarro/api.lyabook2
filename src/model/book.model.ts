import bookEntity from '../entity/book.entity'

export class BookModel{
    public static GetAll(){
        const book = bookEntity.find()
        return book
    }

    public static GetBySlug(slug: string){
        const book = bookEntity.findOne({ slug : slug}).exec()
        return book
    }
    
}