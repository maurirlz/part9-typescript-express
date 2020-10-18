import { getDiagnoses } from './../services/diagnoseService';
import express from 'express';
import { Diagnose } from '../types/diagnoseTypes';

const router = express.Router();

router.get('/', (_req, res) => {
  const diagnoses: Diagnose[] = getDiagnoses();

  res.json(diagnoses);
});

export default router;
