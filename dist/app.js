"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pingRoutes_1 = __importDefault(require("./routes/pingRoutes"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/ping', pingRoutes_1.default);
exports.default = app;
