import * as fichaServices from '../services/fichasServices.js';

// Controlador para obtener todas las fichas
export const getFichas = async (req, res) => {
    try {
        const fichas = await fichaServices.obtenerFichas();
        res.json(fichas);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener las fichas'
        });
    }
};

// Controlador para crear una nueva ficha
export const createFicha = async (req, res) => {
    const datosFicha = req.body;

    try {
        const nuevaFicha = await fichaServices.crearFicha(datosFicha);
        res.status(201).json(nuevaFicha);
    } catch (error) {
        res.status(500).json({
            error: 'Error al crear la ficha'
        });
    }
};