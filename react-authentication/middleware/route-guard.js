// Route Guard Middleware
// This piece of middleware is going to check if a user is authenticated
// If not, it sends the request to the custom error handler with a message
module.exports = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    next(new Error('User has no permission to visit that page.'));
  }
};
