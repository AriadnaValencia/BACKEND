const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();

// Configuración de la base de datos
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://ariadnavalencia1999:2112Aria@cluster0.qjsg3ii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

