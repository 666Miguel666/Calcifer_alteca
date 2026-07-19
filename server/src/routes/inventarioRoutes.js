import { Router } from 'express';
import {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} from '../controllers/inventarioControllers.js';

const router = Router();

// Endpoints de inventario para CRUD de productos
router.get('/', obtenerProductos);
router.post('/', crearProducto);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;
