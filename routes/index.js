const express = require('express');
const router = express.Router();
const horizon = require('horizon-youtube-mp3');
const list = require('./playlist.js');

router.use(function test(req, res, next) {
  next();
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'YTPlaylistToMP3' });
});

//Test bastien lister tous les liens d'une playlist
router.get('/list_url', function(req, res) {
  list_url.test(auth, requestData);
  res.render('index', { title: 'Liste des URL' });
});

router.post('/', function(req, res){
	console.log(req.body.youtubeURI);
	var uri = req.body.youtubeURI;
	var splitUri = uri.split('=');
	var videoId = splitUri[1];
	list(videoId);

	res.render('download', { title: 'Downloading...' });
});

module.exports = router;
