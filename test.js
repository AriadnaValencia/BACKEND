const mongoose = require('mongoose');

// Carga las variables de entorno
require('dotenv').config();

// Conexión a MongoDB 
const mongoURI = process.env.MONGO_URI;

// Función de prueba para conectar a la base de datos
async function testMongoConnection() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    } finally {
        mongoose.connection.close();
    }
}

testMongoConnection();

