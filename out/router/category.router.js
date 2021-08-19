"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_model_1 = require("../model/category.model");
var routeCategory = express_1.Router()
    .get('/categories', category_model_1.CategoryModel.GetAll);
exports.default = routeCategory;
