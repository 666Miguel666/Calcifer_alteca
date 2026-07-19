import * as inventarioServices from '../services/inventarioServices.js';

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await inventarioServices.obtenerProductos();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

export const crearProducto = async (req, res) => {
  const datosProducto = req.body;
  try {
    const productoCreado = await inventarioServices.crearProducto(datosProducto);
    res.status(201).json(productoCreado);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const datosProducto = req.body;

  try {
    const productoActualizado = await inventarioServices.actualizarProducto(id, datosProducto);
    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(productoActualizado);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const eliminado = await inventarioServices.eliminarProducto(id);
    if (!eliminado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
