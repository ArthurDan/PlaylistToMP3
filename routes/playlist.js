const google = require('googleapis');
const youtube = google.youtube('v3');
const horizon = require('horizon-youtube-mp3');

var downloadPlaylist = function(uri, nextPageToken) {
	var splitUri = uri.split('=');
	var playlistId = splitUri[1];
  youtube.playlistItems.list({
    key: 'AIzaSyBhdyqcuYOaQcFqruYM0lnS8xrrkxqN2L4',
    part: 'id, snippet',
    playlistId: playlistId,
    maxResult: 20,
    pageToken: nextPageToken,
  }, (err, results) => {
    //console.log(err ? err.message : results.data);
    results.data.items.forEach(function(element){
      console.log(err ? err.message : element.snippet.resourceId.videoId);
      horizon.downloadToLocal(
      "https://www.youtube.com/watch?v=" + element.snippet.resourceId.videoId,
      'C:/Users/falle/Music/yt2mp3',
      null,
      null,
      null,
      onConvertVideoComplete,
      onConvertVideoProgress
      );
    });
    console.log(results.data);
    if (results.data.nextPageToken) {
      downloadPlaylist(uri, results.data.nextPageToken);
    }
  });
}

var downloadVideo = function(uri) {
	 horizon.downloadToLocal(
      uri,
      'C:/Users/falle/Music/yt2mp3',
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