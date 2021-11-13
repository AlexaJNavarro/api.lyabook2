import bookEntity from '../entity/book.entity'
import {BookInterface} from '../interface/book.interface'

export class BookModel{
    public static GetAll(){
        const book = bookEntity.find()
        return book
    }

    public static GetByName(name: string){
        const book = bookEntity.findOne({ name : name}).exec()
        return book
    }

    public static GetBySlug(slug: string){
        const book = bookEntity.findOne({ slug : slug}).exec()
        return book
    }

    public static GetByProperty(property: string){
        const book = bookEntity.find({ property : property})
        return book
    }

    public static async Create(body:{}){
        const book = new bookEntity(body)
        const save = await book.save()
        return save
    }
    
    public static Update(id: string, body: object){
        const book = bookEntity.findByIdAndUpdate(id,  {$push:{commentaries: body}}, {useFindAndModify: false})
        return book
    }

    public static UpdateStockByName(name: string, stock: number){
        const book = bookEntity.updateOne({name: name}, {$set: {'type.fisico.stock': stock}}, {useFindAndModify: false})
        return book
    }
    public static UpdatePublic(id: string, body: BookInterface){
        const book = bookEntity.updateOne({_id: id}, body, {useFindAndModify: false})
        return book
    }
    public static DeletePublic(id: string){
        const book = bookEntity.remove({_id: id})
        return book
    }
}