/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender, NewPatient } from '../types/patientTypes';

const isString = (value: any): value is string => {
  return typeof value === 'string' || value instanceof String;
};

const validateString = (value: any, valueName: string): string => {
  if (!(value || isString(value))) {
    throw new Error(`Missing attribute or invalid value for: ${valueName}.`);
  }

  return value;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const validateDate = (date: any): string => {
  if (!(date || isString(date) || isDate(date))) {
    throw new Error(`Missing attribute or invalid value for date.`);
  }

  return date;
};

const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender);
};

const validateGender = (value: any): Gender => {
  if (!(value || isGender(value))) {
    throw new Error('Invalid value for gender.');
  }

  return value;
};

export const toNewPatient = (obj: any): NewPatient => {
  return {
    name: validateString(obj.name, 'name'),
    dateOfBirth: validateDate(obj.dateOfBirth),
    ssn: validateString(obj.ssn, 'ssn'),
    gender: validateGender(obj.gender),
    occupation: validateString(obj.occupation, 'occupation')
  };
};
