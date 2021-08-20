import express, {Application} from 'express'
import cors from 'cors'
import routerCategory from './router/category.router'
import routerBook from './router/book.router'

export class Server{
    private app :Application

    constructor(){
        this.app = express()
    }

    public Run(){
        this.Settings()
        this.Router()
        this.Listening()
    }

    private Settings(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    private Router(){
        this.app.use('/api/v1', routerCategory)
        this.app.use('/api/v1', routerBook)
    }

    private Listening(){
        this.app.listen(process.env.PORT)
        console.log(process.env.PORT)
    }
}