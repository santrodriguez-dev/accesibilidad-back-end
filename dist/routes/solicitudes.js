"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementaciones_1 = require("../dao/implementaciones");
const router = express_1.default.Router();
router.get('/getAll', async (req, res) => {
    const opSolicitudes = new implementaciones_1.OperSolicitudesIm();
    const resBD = await opSolicitudes.getAll();
    res.json(resBD);
});
router.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    const opSolicitudes = new implementaciones_1.OperSolicitudesIm();
    const resBD = await opSolicitudes.get(id);
    res.json(resBD);
});
exports.routes = router;
//# sourceMappingURL=solicitudes.js.map