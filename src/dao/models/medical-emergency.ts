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

    @AllowNull(false)
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
    priority: string;

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

    @Column(DataType.FLOAT)
    coordLat: number;

    @Column(DataType.FLOAT)
    coordLong: number;
}