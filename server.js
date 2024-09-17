const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();

//routers
const productRouter = require('./routes/product');
const cartRouter = require('./routes/carts');
const userRouter = require('./routes/users');
const ticketRouter = require('./routes/ticket');

// Configuración de la base de datos
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://ariadnavalencia1999:RsEJmsXOB06e3rmx@cluster0.qjsg3ii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

  mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));


app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/users', userRouter);
app.use('/api/ticket', ticketRouter);

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

