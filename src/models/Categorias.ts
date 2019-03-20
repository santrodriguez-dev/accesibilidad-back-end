// import * as Sequelize from "sequelize";

import Sequelize from "sequelize";
import { sequelizeBD } from ".";
interface ProductAttributes {
    id?: string;
    name: string;
    price: string;
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

// type ProductInstance = ProductAttributes;

export const UserFactory = (sequalize: Sequelize.Sequelize) => {
    const attributes = {
        id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        name: { type: Sequelize.STRING, allowNull: false },
        price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
        archived: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    };
    const model = sequalize.define("Product", attributes);
    return model;
};



// import Sequelize, { DefineModelAttributes } from "sequelize";
// import { sequelize } from ".";
// import { Categoria } from "../dto";

// const attributes: DefineModelAttributes<Categoria> = {
//     id: { type: Sequelize.NUMBER, allowNull: false, primaryKey: true, unique: true },
//     nombre: Sequelize.STRING,
//     descripcion: Sequelize.STRING,
// }

// const categoriasM = sequelize.define<Categoria, Categoria>('categorias', attributes)
// // categoriasM.hasOne(ClasificacionesModel, { as: 'categoria', foreignKey: 'categoria_id' });

// export const CategoriasModel = categoriasM;