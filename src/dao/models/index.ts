import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Patient } from './patient';
import { ClinicHistory } from './clinic-history';
import { Doctor } from './doctor';
import { MedicalCenter } from './medical-center';
import { UserAdministrator } from './user-administrator';
import { DoctorMedicalCenter } from './doctor-medical.center';
import { MedicalEmergency } from './medical-emergency';


const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../../config/config.json")[env];

export const sequelizeBD = new Sequelize(config.database, config.username, config.password, config);

const models = [
    Patient,
    ClinicHistory,
    Doctor,
    UserAdministrator,
    MedicalCenter,
    DoctorMedicalCenter,
    MedicalEmergency
]

sequelizeBD.addModels(models);