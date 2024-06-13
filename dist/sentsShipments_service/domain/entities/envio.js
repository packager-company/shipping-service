"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Envio = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../../database/database");
class Envio extends sequelize_1.Model {
}
exports.Envio = Envio;
Envio.init({
    uuid: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
    },
    user_uuid: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    origin: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    destination: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    weight: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    base_price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    additional_charge: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    total_price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status_uuid: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
}, {
    sequelize: database_1.sequelize,
    tableName: 'db_sents.shipments',
});
