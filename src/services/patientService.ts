import data from '../data/patients.json';
import { NewPatient, Patient } from '../types/patientTypes';
import { randomBytes } from 'crypto';
import { toNewPatient } from '../utils/common';

export const getPatients = (): Patient[] => {
  const patients: Patient[] = data.map((jsonPatient) => {
    const object = toNewPatient(jsonPatient);

    return {
      ...object,
      id: jsonPatient.id
    };
  });

  return patients;
};

export const addPatient = (newPatient: NewPatient): Patient => {
  const createdPatient: Patient = {
    ...newPatient,
    id: randomBytes(24).toString('hex')
  };

  data.push(createdPatient);

  return createdPatient;
};
