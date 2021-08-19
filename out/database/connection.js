"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.Connection = function () {
        try {
            if (typeof process.env.MONGO_URI !== 'undefined') {
                mongoose_1.default.connect(process.env.MONGO_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
                console.log("Base de datos conectada exitosamente");
            }
            else {
                throw new Error("No se logro conectar la BD");
            }
        }
        catch (error) {
            throw error;
        }
    };
    return DB;
}());
exports.DB = DB;
