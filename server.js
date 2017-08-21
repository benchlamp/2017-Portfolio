var express = require("express"),
    path = require("path"),
    fs = require("fs");


var app = express()
var staticPath = path.join(__dirname, "public");
var images = path.join(__dirname, "public/images");
    



app.use(express.static(staticPath));



app.use(function(req, res, next) {
    res.status(404);
    res.send("File not found!");
})

app.listen(process.env.PORT, function() {
    console.log("App started on port 'process.env.PORT'");
});