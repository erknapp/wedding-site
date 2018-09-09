const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

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

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(port, () => {
    console.log("Listening on port " + port);
})