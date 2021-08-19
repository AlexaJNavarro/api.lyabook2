"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
var category_entity_1 = __importDefault(require("../entity/category.entity"));
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
    }
    CategoryModel.GetAll = function () {
        var category = category_entity_1.default.find();
        return category;
    };
    return CategoryModel;
}());
exports.CategoryModel = CategoryModel;
