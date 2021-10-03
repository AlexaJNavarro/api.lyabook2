import categoryEntity from '../entity/category.entity'

export class CategoryModel{
    public static GetAll(){
        const category = categoryEntity.find()
        return category
    }

    public static GetAllSlug(slug: string){
        const category = categoryEntity.findOne({slug: slug}).exec()
        return category
    }
}