const bodyParser = require('body-parser');
const request = require('request');
const uuid = require('uuid');
const apiai = require('apiai');
const fs = require('fs');

const config = require('./config.js');//Module that returns the tokens.

//------------------------------------------------------------------- SERVER WORKING...
const express = require('express');
const app = express();

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
    console.log("funciona------> get", __dirname);
});

app.get('/', (req, res) => {
    console.log("get /----->");
    //res.status(200).send("correcto");
    res.send(':DDDDD');
});

//-------------------------------------------------------------------

const userMap = new Map();
var sessionIds = new Map();

var chatBot_ = require("./chatBot_class.js");
let chatBot = new chatBot_();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('resources'));