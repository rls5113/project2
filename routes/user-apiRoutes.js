var db = require("../models");

module.exports = function(app) {
  // Get all Users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(users) {
      res.json(users);
    });
  });

  // Create a new User
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an User by id
  // app.delete("/api/Users/:id", function(req, res) {
  //   db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
};
