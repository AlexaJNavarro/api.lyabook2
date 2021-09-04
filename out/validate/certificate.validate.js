"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCertificate = void 0;
var fs_1 = __importDefault(require("fs"));
var ValidateCertificate = /** @class */ (function () {
    function ValidateCertificate() {
    }
    ValidateCertificate.GetCertificatePublic = function () {
        return fs_1.default.readFileSync(process.env.PWD + "/certificates/app.rsa.pub", {
            encoding: "utf8",
            flag: "r",
        });
    };
    return ValidateCertificate;
}());
exports.ValidateCertificate = ValidateCertificate;
