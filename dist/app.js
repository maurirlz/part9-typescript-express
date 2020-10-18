"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pingRoutes_1 = __importDefault(require("./routes/pingRoutes"));
const diagnoseRoutes_1 = __importDefault(require("./routes/diagnoseRoutes"));
const patientRoutes_1 = __importDefault(require("./routes/patientRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/api/ping', pingRoutes_1.default);
app.use('/api/diagnoses', diagnoseRoutes_1.default);
app.use('/api/patients', patientRoutes_1.default);
exports.default = app;
