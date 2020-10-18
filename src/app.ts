import express from 'express';
import pingRouter from './routes/pingRoutes';
import diagnosesRouter from './routes/diagnoseRoutes';
import patientsRouter from './routes/patientRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/ping', pingRouter);
app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

export default app;
