"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementations_1 = require("../dao/implementations");
const router = express_1.default.Router();
const opClinicHistory = new implementations_1.ClinicHistoryIm();
router.get('/getAll', async (req, res, next) => {
    try {
        const resBD = await opClinicHistory.getAll();
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/get/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opClinicHistory.get(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/getByPatientId/:id', async (req, res, next) => {
    try {
        const patientId = req.params.id;
        const resBD = await opClinicHistory.getByPatientId(patientId);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.post('/save', async (req, res, next) => {
    try {
        const clinicHist = req.body;
        let resBD;
        if (clinicHist.id) {
            resBD = await opClinicHistory.update(clinicHist);
        }
        else {
            resBD = await opClinicHistory.create(clinicHist);
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
        const resBD = await opClinicHistory.deleteP(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
exports.routes = router;
//# sourceMappingURL=clinic-history.js.map