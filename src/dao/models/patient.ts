import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, AllowNull, Unique } from 'sequelize-typescript';
import { ClinicHistory } from './clinic-history';
import { MedicalEmergency } from './medical-emergency';

@Table({ modelName: 'patient' })
export class Patient extends Model<Patient> {

    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @HasMany(() => ClinicHistory)
    clinicHistories: ClinicHistory[];

    @HasMany(() => MedicalEmergency)
    medicalEmergencies: MedicalEmergency[];

    @Unique
    @Column
    email: string;

    @Column
    password: string;

    @Column
    identification: string;

    @Column
    name: string;

    @Column
    birthdate: Date;

    @Column
    phone: string;

    @Column
    address: string;

    @Column
    photo: string;

    @Column
    isLoggedIn: boolean;
}