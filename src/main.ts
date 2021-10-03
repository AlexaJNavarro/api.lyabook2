 import dotenv from 'dotenv'
import {Server} from './server'
 import {DB} from './database/connection'
(()=>{
    dotenv.config()
    DB.Connection()
    const server = new Server()
    server.Run()
})()

