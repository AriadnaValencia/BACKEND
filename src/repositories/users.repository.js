const UsersDAO = require('../daos/users.dao');

class UsersRepository {
  async getAllUsers() {
    return await UsersDAO.getAllUsers();
  }

  async getUserById(userId) {
    return await UsersDAO.getUserById(userId);
  }

  async createUser(userData) {
    return await UsersDAO.createUser(userData);
  }

  async updateUser(userId, userData) {
    return await UsersDAO.updateUser(userId, userData);
  }

  async deleteUser(userId) {
    return await UsersDAO.deleteUser(userId);
  }
}

module.exports = new UsersRepository();
