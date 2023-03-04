function currentTime() {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let seconds = date.getSeconds();
	document.getElementById('watch').innerText = hour + ":" + minute + ":" + seconds;
	setTimeout(currentTime, 1000) 
}
function plusZero(number) {
	if (number < 10) {
		return '0' + number;
	}
	else {
		return number;
	}

}
currentTime();