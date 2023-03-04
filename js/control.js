const video = document.getElementById('myVideo');
const btnPlay = document.querySelector('#play');
const voiceOn = document.getElementById('mute')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const videoTitle = document.querySelector('.video__title')
const videoDesc = document.querySelector('.video__description')

const playList = ['ya_geniy_Axueikae','ya_geniy_Axueikae2']
const playListTitle = ["Zero Two Edit","Evolve-rp edit"]
const playListDesc = ["01","02"]

let number = 0;
function play() {
	if (video.paused) {
		video.play();
		btnPlay.innerHTML = "||"
	} else {
		video.pause();
        btnPlay.innerHTML = "&#128898;"
	}
}

function mute() {
	if (video.muted) {
		video.muted = false;
		voiceOn.innerHTML = "OFF"
	} else {
		video.muted = true
		voiceOn.innerHTML = "ON"
	}
}

function next() {
	if(number < playList.length - 1) {
		number++;
	} else {
		number = 0
	}
	video.src = `video/${playList[number]}.mp4`
	videoTitle.innerHTML = playListTitle[number]
	videoDesc.innerHTML = playListDesc[number]
}
function prev() {
	if(number != 0) {
	     number--;
	} else {
		number = playList.length - 1
	}
	video.src = `video/${playList[number]}.mp4`
	videoTitle.innerHTML = playListTitle[number]
	videoDesc.innerHTML = playListDesc[number]
}