const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'YTPlaylistToMP3' });
});

router.post('/', (req, res) => {
  console.log(req.body.youtubeURI);
});

module.exports = router;
