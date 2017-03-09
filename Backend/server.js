var express = require("express");
var flickrApi=require('./routes/flickrApi');
var app = express(); 
var cors = require('cors');

var port = process.env.PORT || 3000;


app.use(cors({origin: '*'}));


app.get('/flickr/:termino',flickrApi.getTermino);
app.listen(port, function () {
  console.log('Example app listening on port'+port);
});
