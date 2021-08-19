"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    // created_at: {
    //     type: Date,
    //     default: new Date()
    // },
    // updated_at: {
    //     type: Date,
    // },
    // deleted_at: {
    //     type: Date,
    // },
    active: {
        type: Boolean,
        require: true
    }
});
exports.default = mongoose_1.model('categories', categorySchema);
