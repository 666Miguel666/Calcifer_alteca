import {Router} from 'express';
import{getFichas, createFicha} from '../controllers/fichaControlers.js';
const router = Router();
//definimos los endpoints apuntando a sus controladores correspondientes
router.get('/', getFichas);
router.post('/', createFicha);
export default router;
