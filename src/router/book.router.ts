import {Router} from 'express'
import {BookController} from '../controller/book.controller'
const routerBook = Router()

routerBook
    .get('/books', BookController.GetAll)

export default routerBook