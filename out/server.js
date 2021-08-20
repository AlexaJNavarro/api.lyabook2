"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var category_router_1 = __importDefault(require("./router/category.router"));
var book_router_1 = __importDefault(require("./router/book.router"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
    }
    Server.prototype.Run = function () {
        this.Settings();
        this.Router();
        this.Listening();
    };
    Server.prototype.Settings = function () {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    };
    Server.prototype.Router = function () {
        this.app.use('/api/v1', category_router_1.default);
        this.app.use('/api/v1', book_router_1.default);
    };
    Server.prototype.Listening = function () {
        this.app.listen(process.env.PORT);
        console.log(process.env.PORT);
    };
    return Server;
}());
exports.Server = Server;
