import { Op } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Patient } from './patient';
import { ClinicHistory } from './clinic-history';
import { Doctor } from './doctor';
import { MedicalCenter } from './medical-center';
import { UserAdministrator } from './user-administrator';
import { DoctorMedicalCenter } from './doctor-medical.center';
import { MedicalEmergency } from './medical-emergency';


const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "./../../config/config.json")[env];

export const sequelizeBD = new Sequelize({
    database: config.database,
    dialect: config.dialect,
    operatorsAliases: Op,
    username: config.username,
    password: config.password,
    storage: ':memory:',
    // modelPaths: [__dirname + '/models']
});

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