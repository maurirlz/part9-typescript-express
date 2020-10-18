import express from 'express';
import pingRouter from './routes/pingRoutes';

const app = express();

app.use(express.json());
app.use('/ping', pingRouter);

export default app;
