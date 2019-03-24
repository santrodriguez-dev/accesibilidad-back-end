"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userAdminIm_1 = require("../dao/implementations/userAdminIm");
const router = express_1.default.Router();
const opUserAdmin = new userAdminIm_1.UserAdminIm();
router.get('/getAll', async (req, res, next) => {
    try {
        const resBD = await opUserAdmin.getAll();
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/get/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opUserAdmin.get(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.post('/login', async (req, res, next) => {
    try {
        const credentials = req.body;
        const resBD = await opUserAdmin.login(credentials.user, credentials.password);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
exports.routes = router;
//# sourceMappingURL=user-admin.js.map