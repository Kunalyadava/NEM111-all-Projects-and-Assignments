
// write the logic for validation middleware.

const validationMiddleware = (req, res, next) => {
    const { password, role } = req.query;
  
    if ((req.method === "PATCH" || req.method === "DELETE") && password === "7877" && (role === "admin" || role === "instructor")) {
      next();
    } else {
      res.status(401).send("You are not authorised to do this operation");
    }
  };
  
  module.exports = validationMiddleware;
  