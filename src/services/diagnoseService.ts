import data from '../data/diagnoses.json';
import { Diagnose } from '../types/diagnoseTypes';

export const getDiagnoses = (): Diagnose[] => {
  return data;
};
