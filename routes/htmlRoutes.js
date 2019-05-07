var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        Users: dbUsers
      });
    });
  });

  // Load User page and pass in an User by id
  // app.get("/User/:id", function(req, res) {
  //   db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
  //     res.render("User", {
  //       User: dbUser
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
