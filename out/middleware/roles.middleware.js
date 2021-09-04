"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareRoles = void 0;
var certificate_validate_1 = require("../validate/certificate.validate");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var answer_helper_1 = require("../helper/answer.helper");
var rol_helper_1 = require("../helper/rol.helper");
var MiddlewareRoles = /** @class */ (function () {
    function MiddlewareRoles() {
    }
    MiddlewareRoles.GerenteMiddleware = function (req, res, next) {
        var certificate = certificate_validate_1.ValidateCertificate.GetCertificatePublic();
        if (certificate != undefined || certificate != null || certificate != "") {
            var header = req.headers['authorization'];
            if (header != undefined || header != null) {
                jsonwebtoken_1.default.verify(header, certificate, function (err, data) {
                    if (err) {
                        return res.status(403).json(new answer_helper_1.Answer('Error', 'el token debe ser proporcionada', true, null));
                    }
                    if (data != null) {
                        if (String(data.rol).toUpperCase() == rol_helper_1.RolHelper.Manager) {
                            next();
                        }
                        else {
                            return res.status(401).json(new answer_helper_1.Answer('Error', data.name + ", no posee autorizaci\u00F3n porque su rol es " + data.rol, true, null));
                        }
                    }
                });
            }
        }
        else {
            return res.status(500).json(new answer_helper_1.Answer('Error', 'No se pudo leer el certificado.', true, null));
        }
    };
    MiddlewareRoles.AdminMiddleware = function (req, res, next) {
        var certificate = certificate_validate_1.ValidateCertificate.GetCertificatePublic();
        if (certificate != undefined || certificate != null || certificate != "") {
            var header = req.headers['authorization'];
            if (header != undefined || header != null) {
                jsonwebtoken_1.default.verify(header, certificate, function (err, data) {
                    if (err) {
                        return res.status(403).json(new answer_helper_1.Answer('Error', 'el token debe ser proporcionada', true, null));
                    }
                    if (data != null) {
                        if (String(data.rol).toUpperCase() == rol_helper_1.RolHelper.Admin) {
                            next();
                        }
                        else {
                            return res.status(401).json(new answer_helper_1.Answer('Error', data.name + ", no posee autorizaci\u00F3n porque su rol es " + data.rol, true, null));
                        }
                    }
                });
            }
        }
        else {
            return res.status(500).json(new answer_helper_1.Answer('Error', 'No se pudo leer el certificado.', true, null));
        }
    };
    MiddlewareRoles.UserMiddleware = function (req, res, next) {
        var certificate = certificate_validate_1.ValidateCertificate.GetCertificatePublic();
        if (certificate != undefined || certificate != null || certificate != "") {
            var header = req.headers['authorization'];
            if (header != undefined || header != null) {
                jsonwebtoken_1.default.verify(header, certificate, function (err, data) {
                    if (err) {
                        return res.status(403).json(new answer_helper_1.Answer('Error', 'el token debe ser proporcionada', true, null));
                    }
                    if (data != null) {
                        if (String(data.rol).toUpperCase() == rol_helper_1.RolHelper.Client) {
                            next();
                        }
                        else {
                            return res.status(401).json(new answer_helper_1.Answer('Error', data.name + ", no posee autorizaci\u00F3n porque su rol es " + data.rol, true, null));
                        }
                    }
                });
            }
        }
        else {
            return res.status(500).json(new answer_helper_1.Answer('Error', 'No se pudo leer el certificado.', true, null));
        }
    };
    MiddlewareRoles.AdminUserMiddleware = function (req, res, next) {
        var certificate = certificate_validate_1.ValidateCertificate.GetCertificatePublic();
        if (certificate != undefined || certificate != null || certificate != "") {
            var header = req.headers['authorization'];
            if (header != undefined || header != null) {
                jsonwebtoken_1.default.verify(header, certificate, function (err, data) {
                    if (err) {
                        return res.status(403).json(new answer_helper_1.Answer('Error', 'el token debe ser proporcionada', true, null));
                    }
                    if (data != null) {
                        if (String(data.rol).toUpperCase() == rol_helper_1.RolHelper.Admin || String(data.rol).toUpperCase() == rol_helper_1.RolHelper.Client) {
                            next();
                        }
                        else {
                            return res.status(401).json(new answer_helper_1.Answer('Error', data.name + ", no posee autorizaci\u00F3n porque su rol es " + data.rol, true, null));
                        }
                    }
                });
            }
        }
        else {
            return res.status(500).json(new answer_helper_1.Answer('Error', 'No se pudo leer el certificado.', true, null));
        }
    };
    return MiddlewareRoles;
}());
exports.MiddlewareRoles = MiddlewareRoles;
