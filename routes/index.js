var fs = require('fs');
const express = require('express');
const router = express.Router();
var downloader = require('./downloader');
var dl = new downloader;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'YTPlaylistToMP3' });
});

router.post('/', function(req, res){
	console.log(req.body.youtubeURI);
	var uri = req.body.youtubeURI;
	var splitUri = uri.split('=');
	var videoId = splitUri[1];
	dl.getMP3({videoId: "9fWxCIi5PIw", name: "Rauuul Gillette"}, function(err,res){
    if(err)
        throw err;
    else{
        console.log("Song "+ i + " was downloaded: " + res.file);
    }
	res.render('download', { title: 'Downloading...' });
});

module.exports = router;
