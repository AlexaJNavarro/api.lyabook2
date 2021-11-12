import {Router} from 'express'
import {BookController} from '../controller/book.controller'
import {MiddlewareRoles} from '../middleware/roles.middleware'
const routerBook = Router()

routerBook
    .get('/books', BookController.GetAll)
    .get('/books/property/:PROPERTY', BookController.GetByProperty)
    .get('/books/:SLUG', BookController.GetBySlug)
    .get('/books/name/:NAME', BookController.GetByName)
    .put('/books/:ID', BookController.Update)
    .put('/books/name/:NAME', BookController.UpdateStockByName)
    .post('/books/', BookController.Create)
    .put('/books/public/:ID', BookController.UpdatePublic)




export default routerBook