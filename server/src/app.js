import express from 'express';
import fichaRoutes from './routes/fichaRoutes.js';
const app = express();
app.use(express.json());
app.use("/api/fichas",fichaRoutes);
export default app;