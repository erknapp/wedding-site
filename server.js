const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/location", function(req, res){
    res.sendFile(__dirname + "/public/location.html");
});

app.get("/rsvp", function(req, res){
    res.sendFile(__dirname + "/public/rsvp.html");
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/public/contact.html");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
})