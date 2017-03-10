var express = require("express");
var flickrApi=require('./routes/flickrApi');
var mongo=require('./routes/mongodb');
var app = express(); 
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;


app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/flickr/:termino/:cant',flickrApi.getTermino);
app.get('/mongo/:cant',mongo.finByTop);
app.listen(port, function () {
  console.log('Example app listening on port'+port);
});
