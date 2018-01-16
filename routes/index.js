var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YTPlaylistToMP3' });
});

router.post('/', function(req, res){
	console.log(req.body.youtubeURI);
});

module.exports = router;
