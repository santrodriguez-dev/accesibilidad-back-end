import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType, Unique } from 'sequelize-typescript';

@Table({ modelName: 'user_administrator' })
export class UserAdministrator extends Model<UserAdministrator> {

    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

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
    phone: string;

    @Column
    address: string;

    @Column
    photo: string;
}

// export interface UserAdministrator {
//     email: string,
//     password: string,
//     identification: string,
//     name: string,
//     phone: string,
//     address: string,
//     photo: string
// }