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
const implementaciones_1 = require("../dao/implementaciones");
const router = express_1.default.Router();
router.get('/getAll', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const opClasifi = new implementaciones_1.OperClasificacionesIm();
    const resBD = yield opClasifi.getAll();
    res.json(resBD);
}));
router.get('/get/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    const opClasifi = new implementaciones_1.OperClasificacionesIm();
    const resBD = yield opClasifi.get(id);
    res.json(resBD);
}));
exports.routes = router;
//# sourceMappingURL=clasificaciones.js.map