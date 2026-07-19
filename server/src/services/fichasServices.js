import pool from '../config/db.js';// importamos el pool de conexiones
//Metodo GET
export const obtenerFichas = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM fichas');
        return rows;
    } catch (error) {
        throw error;
    }
};
//metodo POST
export const crearFicha = async (datosFicha) => {
    const{numeroFicha,programa} = datosFicha;
    try {
        const [result] = await pool.query(
            'INSERT INTO fichas (numeroFicha, programa) VALUES (?, ?)',
             [numeroFicha, programa]
            );
            //retornamos el registro recien creado
        return {id: result.insertId, numeroFicha, programa,tieneAlerta: false};
    } catch (error) {
        throw new Error('Error al crear la ficha: ' + error.message);
    }
};