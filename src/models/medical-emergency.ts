import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Patient } from './patient';
import { Doctor } from './doctor';
import { MedicalCenter } from './medical-center';

@Table({ modelName: 'medical_emergency' })
export class MedicalEmergency extends Model<MedicalEmergency> {

    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @ForeignKey(() => Patient)
    @Column
    patient_id: number;

    @BelongsTo(() => Patient)
    patient: Patient;

    @ForeignKey(() => Doctor)
    @AllowNull(true)
    @Column
    doctor_id: number;

    @BelongsTo(() => Doctor)
    doctor: Doctor;

    @ForeignKey(() => MedicalCenter)
    @AllowNull(true)
    @Column
    medical_center_id: number;

    @BelongsTo(() => MedicalCenter)
    medicalCenter: MedicalCenter;

    @Column
    priority: Date;

    @Column
    state: string;

    @Column
    photo: string;
    @Column
    patient_description: string;

    @Column
    doctor_description: string;

    @Column
    address: string;

    @Column
    coordLat: string;

    @Column
    coordLong: string;
}


// export interface MedicalEmergency {
//     id: string,
//     patient_id: string,
//     doctor_id: string,
//     medical_center_id: string,
//     date: string,
//     priority: string,
//     state: string,
//     photo: string,
//     patient_description: string,
//     doctor_description: string,
//     address: string,
//     coordLat: string,
//     coordLong: string
// }