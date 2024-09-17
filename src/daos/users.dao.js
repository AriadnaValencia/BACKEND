class UsersDAO {
    async getAllUsers() {
      return await UserModel.find();
    }
  
    async getUserById(userId) {
      return await UserModel.findById(userId);
    }
  
    async createUser(userData) {
      return await UserModel.create(userData);
    }
  
    async updateUser(userId, userData) {
      return await UserModel.findByIdAndUpdate(userId, userData, { new: true });
    }
  
    async deleteUser(userId) {
      return await UserModel.findByIdAndDelete(userId);
    }
  }
  
  module.exports = new UsersDAO();