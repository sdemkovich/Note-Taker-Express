var express = require("express");
var fs = require('fs');
var bodyParser = require('body-parser')

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Create express app instance.
var app = express();
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

// require route modules
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });