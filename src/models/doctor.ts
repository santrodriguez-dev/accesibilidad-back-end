import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, AllowNull, DataType } from 'sequelize-typescript';
import { DoctorMedicalCenter } from './doctor-medical.center';

@Table({ modelName: 'doctor' })
export class Doctor extends Model<Doctor> {

    @HasMany(() => DoctorMedicalCenter)
    doctorMedicalCenters: DoctorMedicalCenter[];

    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    email: string;

    @Column
    name: string;

    @Column
    speciality: string;

    @Column
    phone: string;

    @Column
    photo: string;
}


// export interface Doctor {
//     id: string;
//     email: string,
//     name: string,
//     speciality: string,
//     phone: string,
//     photo: string
// }