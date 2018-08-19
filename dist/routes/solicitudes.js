"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementaciones_1 = require("../dao/implementaciones");
const router = express_1.default.Router();
router.get('/getAll', (req, res) => {
    console.log(req.body);
    const opSolicitudes = new implementaciones_1.OperSolicitudesIm();
    res.json(opSolicitudes.getAll());
});
router.get('/getSolicitud/:id', (req, res) => {
    console.log(req.params);
    const opSolicitudes = new implementaciones_1.OperSolicitudesIm();
    res.json(opSolicitudes.getAll());
});
exports.routes = router;
//# sourceMappingURL=solicitudes.js.map