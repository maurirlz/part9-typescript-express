"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnoseService_1 = require("./../services/diagnoseService");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const diagnoses = diagnoseService_1.getDiagnoses();
    res.json(diagnoses);
});
exports.default = router;
