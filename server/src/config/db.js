import mysql from 'mysql2/promise';
//creamos un pool de conexiones utilizando las variables de entorno
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306, // Puerto por defecto de MySQL
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
//Prueba la conexion
try{
    const connection = await pool.getConnection();
    console.log('Conexión a la base de datos establecida correctamente.');
    connection.release(); // Liberar la conexión después de la prueba
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);  
}   
export default pool;