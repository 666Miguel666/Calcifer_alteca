import express from 'express';
import fichaRoutes from './routes/fichaRoutes.js';
import inventarioRoutes from './routes/inventarioRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/fichas', fichaRoutes);
app.use('/api/productos', inventarioRoutes);

export default app;
