"use strict";
// import express from "express";
// import path from "path";
// const router = express.Router();
// import SocketIO from "socket.io";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientRouter = __importStar(require("./patient"));
const clinicHistoryRouter = __importStar(require("./clinic-history"));
const medicalCenterRouter = __importStar(require("./medical-center"));
const medicalEmergencyRouter = __importStar(require("./medical-emergency"));
const userAdminRouter = __importStar(require("./user-admin"));
function registerRoutes(app) {
    app.use('/patient', patientRouter.routes);
    app.use('/clinic-history', clinicHistoryRouter.routes);
    app.use('/medical-center', medicalCenterRouter.routes);
    app.use('/medical-emergency', medicalEmergencyRouter.routes);
    app.use('/user-admin', userAdminRouter.routes);
    // app.use('patient')
    // app.use('patient')
}
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map