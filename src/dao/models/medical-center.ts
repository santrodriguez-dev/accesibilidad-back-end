import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType, HasMany } from 'sequelize-typescript';
import { DoctorMedicalCenter } from './doctor-medical.center';
import { MedicalEmergency } from './medical-emergency';

@Table({ modelName: 'medical_center' })
export class MedicalCenter extends Model<MedicalCenter> {

    @HasMany(() => DoctorMedicalCenter)
    doctorMedicalCenters: DoctorMedicalCenter[];

    @HasMany(() => MedicalEmergency)
    medicalEmergencies: MedicalEmergency[];

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

    @Column(DataType.FLOAT)
    coordLat: number;

    @Column(DataType.FLOAT)
    coordLong: number;
}
