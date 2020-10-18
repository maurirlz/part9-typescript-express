"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPatient = exports.getPatients = void 0;
const patients_json_1 = __importDefault(require("../data/patients.json"));
const crypto_1 = require("crypto");
const common_1 = require("../utils/common");
exports.getPatients = () => {
    const patients = patients_json_1.default.map((jsonPatient) => {
        const object = common_1.toNewPatient(jsonPatient);
        return {
            ...object,
            id: jsonPatient.id
        };
    });
    return patients;
};
exports.addPatient = (newPatient) => {
    const createdPatient = {
        ...newPatient,
        id: crypto_1.randomBytes(24).toString('hex')
    };
    patients_json_1.default.push(createdPatient);
    return createdPatient;
};
