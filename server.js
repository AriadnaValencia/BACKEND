require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const users = require('./routes/users');
const sessions = require('./routes/sessions');
const keys = require('./config/keys');
const app = express();

// Middleware de Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const connection = mongoose.connect(`mongodb+srv://ariadnavalencia1999:<password>@cluster0.qjsg3ii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  
// Passport middleware
app.use(passport.initialize());

// Passport configuración
require('./config/passport')(passport);

// Rutas
app.use('/api/users', users);
app.use('/api/sessions', sessions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
