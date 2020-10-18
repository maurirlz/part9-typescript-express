"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewPatient = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
const patientTypes_1 = require("../types/patientTypes");
const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};
const validateString = (value, valueName) => {
    if (!(value || isString(value))) {
        throw new Error(`Missing attribute or invalid value for: ${valueName}.`);
    }
    return value;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const validateDate = (date) => {
    if (!(date || isString(date) || isDate(date))) {
        throw new Error(`Missing attribute or invalid value for date.`);
    }
    return date;
};
const isGender = (gender) => {
    return Object.values(patientTypes_1.Gender).includes(gender);
};
const validateGender = (value) => {
    if (!(value || isGender(value))) {
        throw new Error('Invalid value for gender.');
    }
    return value;
};
exports.toNewPatient = (obj) => {
    return {
        name: validateString(obj.name, 'name'),
        dateOfBirth: validateDate(obj.dateOfBirth),
        ssn: validateString(obj.ssn, 'ssn'),
        gender: validateGender(obj.gender),
        occupation: validateString(obj.occupation, 'occupation')
    };
};
