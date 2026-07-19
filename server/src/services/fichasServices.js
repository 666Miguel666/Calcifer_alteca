// Base de datos temporal en memoria(simulación)
let fichasSena = [
    { id: 1, numeroFicha: '2874011', programa: 'ADSO', tieneAlerta: false},
    { id: 2, numeroFicha: '2901345', programa: 'ADSO', tieneAlerta: true}
];
// servicio: Obtener todas las fichas
export const obtenerFichas = (req, res) => {
    return fichasSena;
};
// servicio: Crear una nueva ficha
export const crearFicha = (datosFicha) => { 
    const nuevaFicha = {
        id: fichasSena.length + 1,
        numeroFicha: datosFicha.numeroFicha,
        programa: datosFicha.programa,
        tieneAlerta: false // Por defecto, la nueva ficha no tiene alerta
    };
    fichasSena.push(nuevaFicha);
    return nuevaFicha;
    };