const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const User = require('../models/User');

// Ruta para registrar un nuevo usuario
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'El email ya existe' });
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// Ruta para el login de usuario
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Encontrar al usuario por email
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: 'El email no existe' });
    }

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.cookie('jwt', token, { httpOnly: true });
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Contraseña incorrecta' });
      }
    });
  });
});

module.exports = router;
