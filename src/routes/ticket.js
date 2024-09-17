const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// Rutas de tickets
router.get('/', ticketController.getAllTickets); // Obtener todos los tickets
router.get('/:id', ticketController.getTicketById); // Obtener un ticket por su ID
router.post('/', ticketController.createTicket); // Crear un nuevo ticket
router.put('/:id', ticketController.updateTicket); // Actualizar un ticket por su ID
router.delete('/:id', ticketController.deleteTicket); // Eliminar un ticket por su ID

module.exports = router;
