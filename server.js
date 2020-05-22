const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


// const noteData = require("./db/db.json");

// let dbJSON = noteData;


const app = express();
const PORT = process.env.PORT || 3000


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Static router and API connection
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// // POST:
// app.post("/api/notes", function (req, res) {
//     let newNote = req.body;
//     dbJSON.push(newNote);

//     fs.writeFile("./db/db.json", JSON.stringify(dbJSON), function (err) {
//         if (err) throw err;
//     });

//     res.send(console.log("Successfully ADDED data to db.json"));
// });

// // DELETE: 
// app.delete("/api/notes/:id", function (req, res) {
//     var noteURLID = req.params.id;
    
//     // Loop through the notes array, when the ID is reached, remove the item at that index, re-write the edited JSON to db.json
//     dbJSON.forEach(element => {
//         if (noteURLID === element.id) {
//             dbJSON.splice(dbJSON.indexOf(element), 1);

//             fs.writeFile("./db/db.json", JSON.stringify(dbJSON), function (err) {
//                 if (err) throw err;
//             });
//         } 
//     });

//     res.send(console.log("Successfully REMOVED data from db.json"));
// });

// Catch all, must be declared after other routes
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// app.get("/notes", function(req, res) {
//     return res.json(reservations);
// });

// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });