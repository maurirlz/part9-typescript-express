import data from '../data/patients.json';
import { Patient } from '../types/patientTypes';

export const getPatients = (): Patient[] => {
  return data;
};
