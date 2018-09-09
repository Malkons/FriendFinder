// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express configuration
var app = express();

// Sets initial port
var PORT = process.env.PORT || 8080;

// Sets express app to use the bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});