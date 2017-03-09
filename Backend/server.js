var express = require("express");
var flickrApi=require('./routes/flickrApi');
var app = express(); 
var cors = require('cors');



app.use(cors({origin: '*'}));


app.get('/flickr/:termino',flickrApi.getTermino);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
