var Flickr = require('flickr-sdk');



var flickr = new Flickr({
    "apiKey": process.env.CONSUMER_KEY
});


function getUrl(photo)
{
	return 'https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg'.replace('{farm-id}', photo.farm).replace('{server-id}', photo.server).replace('{id}', photo.id).replace('{secret}', photo.secret);
}

exports.getMedia=function (req, res) {
	flickr
.request()
.media(req.params.id)
.get()
.then(function (response) {
var photosHTML = '';
var photo = response.body.photo;
photosHTML += getUrl(photo);
	console.log(photosHTML)
	response.body.photo['url']=photosHTML;
	res.json(response);
});
  
};


exports.getTags=function (req, res) {

	flickr
.request()
.media()
.search()
.get({
	page: 1,
    per_page: parseInt(req.params.num),
    tags:req.params.tags
})
.then(function (response) {
	
  res.json(response);
});
};


exports.getTermino=function (req, res) {
	console.log("Pide"+ req.params.cant);
	flickr
.request()
.media()
.search(req.params.termino)
.get({
	sort:"relevance",
    per_page: parseInt(req.params.cant)
})
.then(function (response) {

  res.json(response);
});
};