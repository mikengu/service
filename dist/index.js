"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateEnv_1 = require("./utils/validateEnv");
const typeorm_1 = require("typeorm");
const ormconfig_1 = require("./ormconfig");
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
validateEnv_1.validateEnv();
(async () => {
    try {
        const connection = await typeorm_1.createConnection(ormconfig_1.config);
    }
    catch (err) {
        console.log('Error connecting to database', err);
        return err;
    }
    const app = new app_1.default();
    app.listen();
})();
