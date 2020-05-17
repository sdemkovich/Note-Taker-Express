const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// app.get("/notes", function(req, res) {
//     return res.json(reservations);
// });

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });