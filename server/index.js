import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
//SIMULAR DATOS O REGISTROS
let fichasSena = [
    { id: 1, numeroFicha: '2874012', programa: 'ADSO', tieneAlerta: false},
    { id: 2, numeroFicha: '2901345', programa: 'ADSO', tieneAlerta: true}
];

app.get('/api/fichas', (req, res) => {
    console.log('!Han consultado el servivio Get de fichas');
    res.status(200).json({
        mensaje: 'Lista de fichas recuperadas con éxito',
        total: fichasSena.length,
        datos: fichasSena
    });
});

app.post('/api/fichas', (req, res) => {
    console.log('!Han enviado un registro al servicio Post de fichas,req.body:', req.body);
    const nuevaFicha = {
        id: fichasSena.length + 1,
        numeroFicha: req.body.numeroFicha,
        programa: req.body.programa,
        tieneAlerta: false
    };

    fichasSena.push(nuevaFicha);

    res.status(201).json({
    mensaje: 'Ficha creada con éxito',
    fichaCreada: nuevaFicha
    });
});

    
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});