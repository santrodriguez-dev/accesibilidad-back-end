"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "./../../config/config.json")[env];
exports.sequelize = new sequelize_1.default(config.database, config.username, config.password, config);
//# sourceMappingURL=index.js.map