import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType, HasMany } from 'sequelize-typescript';
import { DoctorMedicalCenter } from './doctor-medical.center';

@Table({ modelName: 'medical_center' })
export class MedicalCenter extends Model<MedicalCenter> {

    @HasMany(() => DoctorMedicalCenter)
    doctorMedicalCenters: DoctorMedicalCenter[];

    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    name: string;

    @Column
    city: string;

    @Column
    address: string;

    @Column
    phone: string;

    @Column
    photo: string;

    @Column
    description: string;

    @Column
    coordLat: string;

    @Column
    coordLong: string;
}
