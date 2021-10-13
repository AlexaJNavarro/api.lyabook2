import express, {Application} from 'express'
import cors from 'cors'
import routerCategory from './router/category.router'
import routerBook from './router/book.router'
import routerEditorial from './router/editorial.router'
import routerOrder from './router/order.router'
import routerPayment from './router/payment.router'

import {Server as SocketIo}  from 'socket.io'

export class Server{
    private app :Application
    private socketIO: SocketIo
    constructor(){
        this.app = express()
        this.socketIO = new SocketIo()
    }

    public Run(){
        this.Settings()
        this.Router()
        this.SocketIO()
    }

    private Settings(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    private Router(){
        this.app.use('/api/v1', routerCategory)
        this.app.use('/api/v1', routerBook)
        this.app.use('/api/v1', routerEditorial)
        this.app.use('/api/v1', routerOrder)
        this.app.use('/api/v1', routerPayment)

    }

    private SocketIO(){
        const io = this.socketIO.listen(this.Listening())
        io.on('connection', ()=>{
            console.log('new connection')
        })
    }

    private Listening(){
        console.log(process.env.PORT)
        return this.app.listen(process.env.PORT)
    }
}