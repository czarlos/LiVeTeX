var express = require('express');
var router = express.Router();
var qs = require('querystring');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {title: 'LiVeTeX'});
});

router.post('/', function(req, res) {
	var l = req.param('latex');
	console.log(l);
	if (l!== undefined) {
		myFile = fs.createWriteStream('public/myOutput.pdf');
		var buffer = require('latex')(l).on('error', function(err) {
			console.log("oops");
			return;
		});
		buffer.pipe(myFile);
		buffer.on('end', function() {
			myFile.end();
			res.json({completed: true});
		});
	}
	else {
		res.status(400).json({msg: 'you are fool'});
	}
});

module.exports = router;
