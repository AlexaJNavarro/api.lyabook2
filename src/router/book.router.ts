import {Router} from 'express'
import {BookController} from '../controller/book.controller'
import {MiddlewareRoles} from '../middleware/roles.middleware'
const routerBook = Router()

routerBook
    .get('/books', BookController.GetAll)
    .get('/books/:SLUG', BookController.GetBySlug)
    .put('/books/:ID', BookController.Update)
    .put('/books/name/:NAME', BookController.UpdateByName)


export default routerBook