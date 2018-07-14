const axios = require('axios');
const YTSearch = require('youtube-api-search');
const yargs = require('yargs');
const fs = require('fs');
const config = require('./config');
var YoutubeMp3Downloader = require('youtube-mp3-downloader');



var YD = new YoutubeMp3Downloader({
    "ffmpegPath": "./ffmpeg/bin/ffmpeg.exe",        
    "outputPath": "./downloads",    
    "youtubeVideoQuality": "highest",      
    "queueParallelism": 2,                  
    "progressTimeout": 10000                 
});

const argv = yargs.options({

	a: {

		demand: true,
		alias: 'name',
		string: true
	}

}).help().argv;

var arr = new Array();

arr = argv.name.split(',');

arr.forEach(function (res)  {

	YTSearch({ key: config.API_KEY, term: `${res} lyrics` }, (data) => {

		var url = `https://www.youtube.com/watch?v=${data[0].id.videoId}`;
		//return console.log(url);
		
		YD.download(data[0].id.videoId, `${res}.mp3`);

		YD.on('finished', function(err, data) {

			console.log(JSON.stringify(data));
		});

		YD.on('error', function(error) {

			console.log(error);
		});

		YD.on('progress', function(progress) {

			console.log(JSON.stringify(progress));
		});

	});
});

