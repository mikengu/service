"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
        POSTGRES_HOST: envalid_1.str(),
        POSTGRES_PORT: envalid_1.port(),
        POSTGRES_USER: envalid_1.str(),
        POSTGRES_PASSWORD: envalid_1.str(),
        POSTGRES_DB: envalid_1.str()
    });
}
exports.validateEnv = validateEnv;
