"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientService_1 = require("./../services/patientService");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const patients = patientService_1.getPatients();
    res.send(patients);
});
router.post('/', (_req, _res) => {
    // const newPatient: NewPatient = toNewPatient(req.body);
    // const addedPatient: Patient = addPatient(newPatient);
    // res.status(201).send(addedPatient);
});
exports.default = router;
