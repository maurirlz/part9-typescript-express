import { getPatients } from './../services/patientService';
import express from 'express';
import { Patient } from '../types/patientTypes';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients: Patient[] = getPatients();

  res.send(patients);
});
