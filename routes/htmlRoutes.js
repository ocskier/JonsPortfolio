// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");

var quests = require("../data/questions");
// var match = require("../data/matchListData");

var exphbs = require("express-handlebars");


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

  app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });

  app.get("/questions", function(req, res) {

    res.render("questions",{quests});

  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.render("index",quests);
  });
};
