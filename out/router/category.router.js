"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_controller_1 = require("../controller/category.controller");
var routeCategory = express_1.Router()
    .get('/categories', category_controller_1.CategoryController.GetAll);
exports.default = routeCategory;
