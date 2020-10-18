import { addPatient, getPatients } from './../services/patientService';
import express from 'express';
import { NewPatient, Patient } from '../types/patientTypes';
import { toNewPatient } from '../utils/common';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients: Patient[] = getPatients();

  res.send(patients);
});

router.post('/', (req, res) => {
  const newPatient: NewPatient = toNewPatient(req.body);
  const addedPatient: Patient = addPatient(newPatient);

  res.status(201).send(addedPatient);
});

export default router;
