import {Router} from 'express'
import {BookController} from '../controller/book.controller'
import {MiddlewareRoles} from '../middleware/roles.middleware'
const routerBook = Router()

routerBook
    .get('/books',MiddlewareRoles.UserMiddleware, BookController.GetAll)
    .get('/books/:SLUG', BookController.GetBySlug)

export default routerBook