import app from './src/app.js';// importamos la app creada en app.js
const PORT = process.env.PORT || 3000; // definimos el puerto en el que correrá el servidor
// inicia el servidor y escucha en el puerto definido 
app.listen(PORT, () => {  
    // mensaje en consola indicando que el servidor está corriendo  
    console.log(`Servidor de clase corriendo en http://localhost:${PORT}`);
});