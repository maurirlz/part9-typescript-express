import express from 'express';
import pingRouter from './routes/pingRoutes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/ping', pingRouter);

export default app;
