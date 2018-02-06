const express = require('express');
const router = express.Router();
const horizon = require('horizon-youtube-mp3');
const download = require('./playlist.js');

router.use(function test(req, res, next) {
  next();
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'YTPlaylistToMP3' });
});

router.post('/', function(req, res){
	console.log(req.body.youtubeURI);
	download.downloadPlaylist(req.body.youtubeURI)
	res.render('download', { title: 'Downloading...' });
});

router.post('/video', function(req, res){
	console.log(req.body.youtubeURI);
	download.downloadVideo(req.body.youtubeURI);
	res.render('download', { title: 'Downloading...' });
})

module.exports = router;
