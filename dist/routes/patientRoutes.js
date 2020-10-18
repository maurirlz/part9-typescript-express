"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientService_1 = require("./../services/patientService");
const express_1 = __importDefault(require("express"));
const common_1 = require("../utils/common");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const patients = patientService_1.getPatients();
    res.send(patients);
});
router.post('/', (req, res) => {
    const newPatient = common_1.toNewPatient(req.body);
    const addedPatient = patientService_1.addPatient(newPatient);
    res.status(201).send(addedPatient);
});
exports.default = router;
