var db = require("../models");
// requring the custom middleware to check if the user is logged in.
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    if (req.user) {
      return res.redirect("/home")
    }
    res.render("index", {
      msg: "Welcome!",
      title: "Home",
    });
  });


  // Sign in page
  app.get("/signup", function (req, res) {
    // If the user already has an accout send them to the inventory page
    if (req.user) {
      return res.redirect("/home");
    }
    res.render("signup", {
      title: "Sign Up",
      customcss: `<link rel="stylesheet" href="/styles/form.css"></link>`,
      customjs: `<script type="text/javascript" src="/js/signup.js"></script>`
    });
  });


  app.get("/login", function (req, res) {
    // if user already has an account send them to inventory page
    if (req.user) {
      return res.redirect("/home");
    }
    res.render("login", {
      title: "Log In",
      customcss: `<link rel="stylesheet" href="/styles/form.css"></link>`,
      customjs: `<script type="text/javascript" src="/js/login.js"></script>`
    });

  });


  // This is where the user will have access to the google API
  // User will be given option to change the time left on timer and then start the timer
  app.get("/home", isAuthenticated, function (req, res) {
    res.render("home", {
      title: "",
      customjs: `<script type="text/javascript" src="/js/home.js"></script>\n<script src="/js/maps.js"></script>\n<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0N9-tpLZLryr1_wcWc2EGbNcqnwRbQG0&libraries=places"></script>`
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
