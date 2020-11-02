import { addPatient, getPatientById, getPatients } from './../services/patientService';
import express from 'express';
import { NewPatient, Patient } from '../types/patientTypes';
import { toNewPatient } from '../utils/common';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients: Patient[] = getPatients();

  res.send(patients);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).send({ error: true, msg: 'ID is invalid.' });
  }

  const requestedPatient = getPatientById(id);

  res.json({ success: true, data: requestedPatient });
});

router.post('/', (req, res) => {
  const newPatient: NewPatient = toNewPatient(req.body);
  const addedPatient: Patient = addPatient(newPatient);

  res.status(201).send(addedPatient);
});

export default router;
