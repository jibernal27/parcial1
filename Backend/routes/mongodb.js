	var MongoClient = require('mongodb').MongoClient,
	    assert = require('assert');

	var url = 'mongodb://{user}:{pass}@ds145299.mlab.com:45299/proyecto2'.replace('{user}',process.env.DATBASEUSER).replace('{pass}',process.env.DATABASEPASSWROD);

		function getPalabras(query, callback) {
	    MongoClient.connect(url, function(err, db) {
	        assert.equal(null, err);
	        console.log("Connected successfully to Mongo");
	        var imagenes = db.collection("palabras");
	        var l=parseInt(query);
	        imagenes.find({}).sort({total:-1}).limit(l).toArray(function(err, docs) {
	            assert.equal(err, null);
	            //console.log("Found the following records");
	            console.log(docs);
	            callback(docs);
	            db.close();
	        });
	    });
	};

		

		exports.finByTop = function(req, res) {
				    getPalabras(req.params.cant,
	        function(imagenes) {
	            res.json(imagenes);
	        });

	};



	