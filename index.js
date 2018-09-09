const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/rsvp")

app.listen(port, () => {
    console.log("Listening on port " + port);
})