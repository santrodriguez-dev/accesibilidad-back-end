"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OperUsuariosIm_1 = require("../dao/implementaciones/OperUsuariosIm");
const router = express_1.default.Router();
router.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const crede = req.body;
    const opUsuarios = new OperUsuariosIm_1.OperUsuariosIm();
    const resBD = yield opUsuarios.login(crede);
    res.json(resBD);
}));
exports.routes = router;
//# sourceMappingURL=usuarios.js.map