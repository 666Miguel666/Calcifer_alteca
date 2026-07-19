import * as fichasServices from '../services/fichasServices.js';

export const getFichas = (req, res) => {
    try{
        console.log("Controlador: haan solicitado la lista de fichas");
        //llamar al servicio para que nos de los datos de las fichas
        const fichas = fichasServices.obtenerFichas();
        res.status(200).json({
            mensaje: 'Lista de fichas recuperadas con éxito',
            total: fichas.length,
            datos: fichas
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: 'Error en el servidor al obtener las fichas',
            error: error.message
        });
    }
};

export const createFicha = (req, res) => {
    try{
        console.log("Controlador: han enviado un registro al servicio Post de fichas, req.body:", req.body);
        //validamos que vengan los datos necesarios para crear la ficha
        const nuevaFicha = fichasServices.crearFicha(req.body);
        res.status(201).json({
            mensaje: 'Ficha creada con éxito',
            fichaCreada: nuevaFicha
        });
    }catch(error){
        res.status(500).json({mensaje: 'Error en el servidor al crear la ficha', error: error.message});
    }   
};