const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const UserDTO = require('../dtos/user.dto');

router.get('/current', authMiddleware(), (req, res) => {
  const userDTO = new UserDTO(req.user);
  res.json(userDTO);
});

module.exports = router;
