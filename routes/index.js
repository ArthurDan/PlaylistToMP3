var express = require('express');
var router = express.Router();

router.use(function test(req, res, next) {
  console.log("Je suis ici caca");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'YTPlaylistToMP3' });
});

//Test bastien lister tous les liens d'une playlist
router.get('/list_url', function(req, res) {
  list_url.test(auth, requestData);
  res.render('index', { title: 'Liste des URL' });
});

module.exports = router;
