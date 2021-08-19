import categoryEntity from '../entity/category.entity'

export class CategoryModel{
    public static GetAll(){
        const category = categoryEntity.find()
        return category
    }
}