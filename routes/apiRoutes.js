const fs = require("fs");
const router = require("express").Router();
let dbData = require("../db/db.json");

router.get("/notes", function (req, res) {
    fs.readFile('./db/db.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        let parsedNotes = [].concat(JSON.parse(jsonString));
        res.json(parsedNotes)

    })

});

router.post("/notes", function (req, res) {

    let newNote = {
        "title": req.body.title,
        "text": req.body.text
    }
    dbData.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(dbData), function (err) {
        if (err) throw err;
    });

    console.log("working");
});

module.exports = router;