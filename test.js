const mongoose = require('mongoose');

// Carga las variables de entorno
require('dotenv').config();
 
const mongoURI = process.env.MONGO_URI;

//CONEXION A MONGODB
function testMongoConnection() {
    mongoose.connect('mongodb://localhost:27017/',)
        .then(() => console.log('Conexión exitosa a MongoDB'))
        .catch(err => console.log('Error al conectar a MongoDB:', err));
}

testMongoConnection();

