"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
var book_entity_1 = __importDefault(require("../entity/book.entity"));
var BookModel = /** @class */ (function () {
    function BookModel() {
    }
    BookModel.GetAll = function () {
        var book = book_entity_1.default.find();
        return book;
    };
    BookModel.GetBySlug = function (slug) {
        var book = book_entity_1.default.findOne({ slug: slug }).exec();
        return book;
    };
    return BookModel;
}());
exports.BookModel = BookModel;
