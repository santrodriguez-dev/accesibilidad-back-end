import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, AllowNull, ForeignKey, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Patient } from './patient';

@Table({ modelName: 'clinic_history' })
export class ClinicHistory extends Model<ClinicHistory> {

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

    @Column
    diagnosis: string;

    @Column
    severity_level: string;

    @Column
    description: string;

    @Column
    date: Date;
}

// export interface ClinicHostory {
//     id: string,
//     patient_id: string,
//     diagnosis: string,
//     severity_level: string,
//     description: string,
//     date: Date;
// }