"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const autenticacionRouter = __importStar(require("./autenticacion"));
const solicitudesRouter = __importStar(require("./solicitudes"));
const usuariosRouter = __importStar(require("./usuarios"));
const pacientesRouter = __importStar(require("./pacientes"));
exports.default = (app) => {
    app.use('/', index);
    app.use('/autenticacion', autenticacionRouter.routes);
    app.use('/solicitudes', solicitudesRouter.routes);
    app.use('/usuarios', usuariosRouter.getAll);
    app.use('/pacientes', pacientesRouter.getAll);
};
const index = router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Express'
    });
});
//# sourceMappingURL=index.js.map