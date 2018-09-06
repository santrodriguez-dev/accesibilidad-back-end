"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementaciones_1 = require("../dao/implementaciones");
const router = express_1.default.Router();
router.get('/getAll', async (req, res, next) => {
    const opCatego = new implementaciones_1.OperCategoriasIm();
    const resBD = await opCatego.getAll();
    res.json(resBD);
});
router.get('/get/:id', async (req, res, next) => {
    const id = req.params.id;
    const opCatego = new implementaciones_1.OperCategoriasIm();
    const resBD = await opCatego.get(id);
    res.json(resBD);
});
exports.routes = router;
