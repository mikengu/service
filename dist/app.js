"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = express_1.default();
        this.initializeMiddlewares();
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    }
    initializeMiddlewares() {
        this.app.use(body_parser_1.default.json());
    }
}
exports.default = App;
