 import dotenv from 'dotenv'
import {Server} from './server'
 import {DB} from './database/connection'
(()=>{
    dotenv.config()
    DB.Connection()
    const server = new Server()
    server.Run()
})()

// import {BookModel} from './model/book.model'

// (async()=>{
//     dotenv.config()
//     DB.Connection()
//     const result = await BookModel.GetAll()
//     console.log(result)
// })()