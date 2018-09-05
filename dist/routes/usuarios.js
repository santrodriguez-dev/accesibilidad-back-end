"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OperUsuariosIm_1 = require("../dao/implementaciones/OperUsuariosIm");
const router = express_1.default.Router();
router.post('/login', async (req, res) => {
    const crede = req.body;
    const opUsuarios = new OperUsuariosIm_1.OperUsuariosIm();
    const resBD = await opUsuarios.login(crede);
    res.json(resBD);
});
exports.routes = router;
