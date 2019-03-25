"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medicalCenterIm_1 = require("../dao/implementations/medicalCenterIm");
const router = express_1.default.Router();
const opMedicalCenter = new medicalCenterIm_1.MedicalCenterIm();
router.get('/getAll', async (req, res, next) => {
    try {
        const resBD = await opMedicalCenter.getAll();
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/get/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opMedicalCenter.get(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.post('/save', async (req, res, next) => {
    try {
        const medicalCenter = req.body;
        let resBD;
        if (medicalCenter.id) {
            resBD = await opMedicalCenter.update(medicalCenter);
        }
        else {
            resBD = await opMedicalCenter.create(medicalCenter);
        }
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.delete('/delete/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opMedicalCenter.delete(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
exports.routes = router;
//# sourceMappingURL=medical-center.js.map