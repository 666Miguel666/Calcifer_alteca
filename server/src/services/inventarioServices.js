import pool from '../config/db.js';

export const obtenerProductos = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM productos');
    return rows;
  } catch (error) {
    throw new Error('Error al obtener productos: ' + error.message);
  }
};

export const crearProducto = async (datosProducto) => {
  const {
    nombre,
    descripcion = null,
    cantidad = 0,
    precio_compra = 0,
    precio_venta = 0,
    marca = null,
    ubicacion = null,
    categoria = null,
    stock_minimo = 0,
  } = datosProducto;

  try {
    const [result] = await pool.query(
      'INSERT INTO productos (nombre, descripcion, cantidad, precio_compra, precio_venta, marca, ubicacion, categoria, stock_minimo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nombre, descripcion, cantidad, precio_compra, precio_venta, marca, ubicacion, categoria, stock_minimo]
    );

    return {
      id: result.insertId,
      nombre,
      descripcion,
      cantidad,
      precio_compra,
      precio_venta,
      marca,
      ubicacion,
      categoria,
      stock_minimo,
    }; 
  } catch (error) {
    throw new Error('Error al crear producto: ' + error.message);
  }
};

export const actualizarProducto = async (id, datosProducto) => {
  const {
    nombre,
    descripcion,
    cantidad,
    precio_compra,
    precio_venta,
    marca,
    ubicacion,
    categoria,
    stock_minimo,
  } = datosProducto;

  try {
    const [result] = await pool.query(
      'UPDATE productos SET nombre = ?, descripcion = ?, cantidad = ?, precio_compra = ?, precio_venta = ?, marca = ?, ubicacion = ?, categoria = ?, stock_minimo = ? WHERE id = ?',
      [nombre, descripcion, cantidad, precio_compra, precio_venta, marca, ubicacion, categoria, stock_minimo, id]
    );

    if (result.affectedRows === 0) {
      return null;
    }

    const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0] || null;
  } catch (error) {
    throw new Error('Error al actualizar producto: ' + error.message);
  }
};

export const eliminarProducto = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error('Error al eliminar producto: ' + error.message);
  }
};
