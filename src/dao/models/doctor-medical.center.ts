import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType, ForeignKey } from 'sequelize-typescript';
import { Doctor } from './doctor';
import { MedicalCenter } from './medical-center';

@Table({ modelName: 'doctor_medical_center' })
export class DoctorMedicalCenter extends Model<DoctorMedicalCenter> {

    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @ForeignKey(() => Doctor)
    @Column
    doctor_id: number;

    @ForeignKey(() => MedicalCenter)
    @Column
    medical_center_id: number;
}
