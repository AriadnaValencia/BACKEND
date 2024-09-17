class TicketsDAO {
    async getAllTickets() {
      return await TicketModel.find();
    }
  
    async getTicketById(ticketId) {
      return await TicketModel.findById(ticketId);
    }
  
    async createTicket(ticketData) {
      return await TicketModel.create(ticketData);
    }
  
    async updateTicket(ticketId, ticketData) {
      return await TicketModel.findByIdAndUpdate(ticketId, ticketData, { new: true });
    }
  
    async deleteTicket(ticketId) {
      return await TicketModel.findByIdAndDelete(ticketId);
    }
  }
  
  module.exports = new TicketsDAO();