module.exports = (roles = []) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Asumiendo que `req.user` tiene la información del usuario autenticado
  
      if (!roles.includes(userRole)) {
        return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta' });
      }
  
      next();
    };
  };
  