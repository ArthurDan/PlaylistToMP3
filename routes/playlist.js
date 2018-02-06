const google = require('googleapis');
const youtube = google.youtube('v3');
const horizon = require('horizon-youtube-mp3');

var list = function(listId, nextPageToken) {
  youtube.playlistItems.list({
    key: 'AIzaSyBhdyqcuYOaQcFqruYM0lnS8xrrkxqN2L4',
    part: 'id, snippet',
    playlistId: listId,
    maxResult: 20,
    pageToken: nextPageToken,
  }, (err, results) => {
    //console.log(err ? err.message : results.data);
    results.data.items.forEach(function(element){
      console.log(err ? err.message : element.snippet.resourceId.videoId);
      horizon.downloadToLocal(
      "https://www.youtube.com/watch?v=" + element.snippet.resourceId.videoId,
      'D:/Users/Whiteyeas/FreeMusic',
      null,
      null,
      null,
      onConvertVideoComplete,
      onConvertVideoProgress
      );
    });
    if (results.data.nextPageToken) {
      list(listId, results.data.nextPageToken);
    }
  });
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

module.exports = list;