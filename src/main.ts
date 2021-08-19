 import dotenv from 'dotenv'
// import {Server} from './server'
 import {DB} from './database/connection'
// (()=>{
//     dotenv.config()
//     DB.Connection()
//     const server = new Server()
//     server.Run()
// })()

import {CategoryModel} from './model/category.model'

(async()=>{
    dotenv.config()
    DB.Connection()
    const result = await CategoryModel.GetAll()
    console.log(result)
})()