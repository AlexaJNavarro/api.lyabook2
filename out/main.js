"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var server_1 = require("./server");
var connection_1 = require("./database/connection");
(function () {
    dotenv_1.default.config();
    connection_1.DB.Connection();
    var server = new server_1.Server();
    server.Run();
})();
// import {BookModel} from './model/book.model'
// (async()=>{
//     dotenv.config()
//     DB.Connection()
//     const result = await BookModel.GetAll()
//     console.log(result)
// })()
