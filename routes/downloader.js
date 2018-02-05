var YoutubeMp3Downloader = require("youtube-mp3-downloader");

var Downloader = function() {
    
    //Configure YoutubeMp3Downloader with your settings
    this.YD = new YoutubeMp3Downloader({
        "ffmpegPath": "D:/Cours/ffmpeg-3.4.1",        // Where is the FFmpeg binary located?
        "outputPath": "C:/Users/falle/Music/yt2mp3",    // Where should the downloaded and encoded files be stored?
        "youtubeVideoQuality": "highest",       // What video quality should be used?
        "queueParallelism": 15,                  // How many parallel downloads/encodes should be started?
        "progressTimeout": 1000                 // How long should be the interval of the progress reports
    });

    this.callbacks = {};

    this.YD.on("finished", function(error, data) {
		
        if (this.callbacks[data.videoId]) {
            this.callbacks[data.videoId](error, data);
        } else {
            console.log("Error: No callback for videoId!");
        }
    
    });

    this.YD.on("error", function(error, data) {
	
        console.error(error + " on videoId " + data.videoId);
    
        if (this.callbacks[data.videoId]) {
            this.callbacks[data.videoId](error, data);
        } else {
            console.log("Error: No callback for videoId!");
        }
     
    });

};

Downloader.prototype.getMP3 = function(track, callback){
	
    // Register callback
    this.callbacks[track.videoId] = callback;
    // Trigger download
    this.YD.download(track.videoId, track.name);

};

module.exports = Downloader;