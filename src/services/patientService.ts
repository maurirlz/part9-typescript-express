import data from '../data/patients.json';
import { NewPatient, Patient, PublicPatient } from '../types/patientTypes';
import { randomBytes } from 'crypto';
import { toNewPatient } from '../utils/common';

export const getPatients = (): Array<Patient> => {
  return data.map((jsonPatient) => {
    const object = toNewPatient(jsonPatient);

    return {
      ...object,
      id: jsonPatient.id
    };
  });
};

export const getPatientById = (patientId: string): PublicPatient => {
  const foundPatient = data.find((jsonPatient) => jsonPatient.id === patientId);

  if (!foundPatient) {
    throw new Error('Could not find patient with given ID.');
  }

  const validatedPatient = toNewPatient(foundPatient);

  return {
    ...validatedPatient,
    id: foundPatient.id
  };
};

export const addPatient = (newPatient: NewPatient): Patient => {
  const createdPatient: Patient = {
    ...newPatient,
    id: randomBytes(24).toString('hex')
  };

  data.push(createdPatient);

  return createdPatient;
};
