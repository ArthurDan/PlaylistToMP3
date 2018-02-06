const google = require('googleapis');
const youtube = google.youtube('v3');
const horizon = require('horizon-youtube-mp3');
const config = require('./config.json');

var downloadPlaylist = function(uri, nextPageToken) { // télécharge toutes les vidéos de la playlist
	var splitUri = uri.split('=');
	var playlistId = splitUri[1];  // récupère l'id de l'url
  youtube.playlistItems.list({  //récurèpe tout les les élèments de la playlist
    key: config.AUTH,
    part: 'id, snippet',
    playlistId: playlistId,
    maxResult: 20,
    pageToken: nextPageToken,
  }, (err, results) => {
    //console.log(err ? err.message : results.data);
    results.data.items.forEach(function(element){
      //console.log(err ? err.message : element.snippet.resourceId.videoId);
      horizon.downloadToLocal(  //télécharge une vidéo sous format mp3
      "https://www.youtube.com/watch?v=" + element.snippet.resourceId.videoId,
      config.pathDownload,
      null,
      null,
      null,
      onConvertVideoComplete,
      onConvertVideoProgress
      );
    });
    if (results.data.nextPageToken) {   // si il y a d'autres éléments sur la liste suivante
      downloadPlaylist(uri, results.data.nextPageToken);
    }
  });
}

var downloadVideo = function(uri) {   // télécharge une vidéo sous format mp3 avec une url
	 horizon.downloadToLocal(
      uri,
      config.pathDownload,
      null,
      null,
      null,
      onConvertVideoComplete,
      onConvertVideoProgress
    );
}

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

exports.downloadPlaylist = downloadPlaylist;
exports.downloadVideo = downloadVideo;