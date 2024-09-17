const TicketsDAO = require('../daos/tickets.dao');

class TicketsRepository {
  async getAllTickets() {
    return await TicketsDAO.getAllTickets();
  }

  async getTicketById(ticketId) {
    return await TicketsDAO.getTicketById(ticketId);
  }

  async createTicket(ticketData) {
    return await TicketsDAO.createTicket(ticketData);
  }

  async updateTicket(ticketId, ticketData) {
    return await TicketsDAO.updateTicket(ticketId, ticketData);
  }

  async deleteTicket(ticketId) {
    return await TicketsDAO.deleteTicket(ticketId);
  }
}

module.exports = new TicketsRepository();
