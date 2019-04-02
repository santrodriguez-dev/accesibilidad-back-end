"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const implementations_1 = require("../dao/implementations");
const router = express_1.default.Router();
const opMedicalEmergency = new implementations_1.MedicalEmergencyIm();
router.get('/getAll', async (req, res, next) => {
    try {
        const resBD = await opMedicalEmergency.getAll();
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/get/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opMedicalEmergency.get(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/getByPatientId/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opMedicalEmergency.getByPatientId(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.get('/getByMedicalCenter/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resBD = await opMedicalEmergency.getByMedicalCenter(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
router.post('/save', async (req, res, next) => {
    try {
        const medicalEm = req.body;
        let resBD;
        if (medicalEm.id) {
            resBD = await opMedicalEmergency.update(medicalEm);
        }
        else {
            const io = req.app.get('socketio');
            resBD = await opMedicalEmergency.create(medicalEm, io);
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
        const resBD = await opMedicalEmergency.delete(id);
        res.json(resBD);
    }
    catch (e) {
        next(e);
    }
});
exports.routes = router;
//# sourceMappingURL=medical-emergency.js.map