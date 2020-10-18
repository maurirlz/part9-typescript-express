import { getPatients } from './../services/patientService';
import express from 'express';
import { Patient } from '../types/patientTypes';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients: Patient[] = getPatients();

  res.send(patients);
});

router.post('/', (_req, _res) => {
  // const newPatient: NewPatient = toNewPatient(req.body);
  // const addedPatient: Patient = addPatient(newPatient);
  // res.status(201).send(addedPatient);
});

export default router;
