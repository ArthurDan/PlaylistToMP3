const express = require('express');
const router = express.Router();
const horizon = require('horizon-youtube-mp3');

router.use(function test(req, res, next) {
  console.log("Je suis ici caca");
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
	horizon.downloadToLocal(
		uri,
		'D:/Users/Whiteyeas/FreeMusic',
		null,
		null,
		null,
		onConvertVideoComplete,
		onConvertVideoProgress
	);
	res.render('download', { title: 'Downloading...' });
});

function onConvertVideoComplete(err, result) {
  console.log(err, result);
  // Will return...
  //null, conversionFileComplete
}

function onConvertVideoProgress(percent, timemark, targetSize) {
  console.log('Progress:', percent, 'Timemark:', timemark, 'Target Size:', targetSize);
  // Will return...
  // Progress: 90.45518257038955 Timemark: 00:02:20.04 Target Size: 2189
  // Progress: 93.73001672942894 Timemark: 00:02:25.11 Target Size: 2268
  // Progress: 100.0083970106642 Timemark: 00:02:34.83 Target Size: 2420
}

>>>>>>> youtube-to-mp3
module.exports = router;
