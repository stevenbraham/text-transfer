/**
 * Created by stevenbraham on 03-03-17.
 */
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var tmp = require('tmp');
var open = require('open');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.listen(20755);
console.log("TextTransfer is active");
app.get('/', (req, res) => {
    res.send("text transfer");
});

app.post('/message', (req, res) => {
    console.log("Received new post");
    //read message content from post
    let content = req.body.content;
    if (content !== undefined) {
        //received a non empty body, lets create a temp file
        let tempFile = tmp.fileSync({postfix: '.txt'}).name;
        fs.writeFile(tempFile, content, () => {
            console.log("Wrote content to " + tempFile);
            open(tempFile);
        });
    } else {
        //empty message
        console.log("Invalid content");
        res.status(400);
    }
    res.end();
});