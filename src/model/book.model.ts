import bookEntity from '../entity/book.entity'

export class BookModel{
    public static GetAll(){
        const book = bookEntity.find()
        return book
    }
    
}