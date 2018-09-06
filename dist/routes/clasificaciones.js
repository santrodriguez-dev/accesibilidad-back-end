"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementaciones_1 = require("../dao/implementaciones");
const router = express_1.default.Router();
router.get('/getAll', async (req, res, next) => {
    const opClasifi = new implementaciones_1.OperClasificacionesIm();
    const resBD = await opClasifi.getAll();
    res.json(resBD);
});
router.get('/get/:id', async (req, res, next) => {
    const id = req.params.id;
    const opClasifi = new implementaciones_1.OperClasificacionesIm();
    const resBD = await opClasifi.get(id);
    res.json(resBD);
});
exports.routes = router;
