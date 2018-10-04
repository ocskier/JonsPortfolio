// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");

var exphbs = require("express-handlebars");

var projects = require("../data/projects");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.get("/", function(req, res) {
    
    res.render("index",{projects});

  });

  app.get("/contact", function(req, res) {

    res.render("contact",{});

  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render("index",{projects});
  });
};
