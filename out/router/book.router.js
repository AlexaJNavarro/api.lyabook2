"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var book_controller_1 = require("../controller/book.controller");
var roles_middleware_1 = require("../middleware/roles.middleware");
var routerBook = express_1.Router();
routerBook
    .get('/books', roles_middleware_1.MiddlewareRoles.UserMiddleware, book_controller_1.BookController.GetAll)
    .get('/books/:SLUG', book_controller_1.BookController.GetBySlug);
exports.default = routerBook;
