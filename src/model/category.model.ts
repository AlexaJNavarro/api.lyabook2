import categoryEntity from '../entity/category.entity'

export class CategoryModel{
    public static async GetAll(){
        // const category = categoryEntity.find()
        // return category
        const data = new categoryEntity()
        data.name = "ale"
        data.slug = "ale_tu_amorcito"
        data.active= true
        const category = categoryEntity.create(data)
        console.log(category)

    
    }
}