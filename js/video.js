// kms/
var video;
// Initialize the video element and turn off autoplay and turn off looping.
// 5 + 6 came w starter code
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// console.log will print the message in the console of the browser
	video = document.querySelector("player1");
	// video is the variable that is assigned to the video element
	// player1 is the id of the video element in the html file
	video.autoplay = false;
	// autoplay is set to false so the video does not play automatically
	video.loop = false;
	// loop is set to false so the video does not loop
}
);
// play the video
document.querySelector("#play").addEventListener("click", function() {
	// document.querySelector("#play") is the play button
	console.log("Play Video");
	// write this obvi
	document.querySelector("#player1").play();
	// play the video
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	// volume is set to the volume of the video
	// volume is displayed as a percentage thats the * 100 thing + %
});
// pause the video
document.querySelector("#pause").addEventListener("click", function() {
	// document.querySelector("#pause") is the pause button
	console.log("Pause Video");
	// write this obvi
	document.querySelector("#player1").pause();
	// pause the video
});
// slow down the video
document.querySelector("#slower").addEventListener("click", function() {
	// document.querySelector("#slower") is the slower button
	console.log("Slow Down");
	// write this obvi
	document.querySelector("#player1").video.playbackRate *= 0.95;
	// playbackRate is set to 95% of the current playbackRate
	// i guess *= means multiply by? ***********ask************?
	console.log("New speed is " + video.playbackRate);
	// write this obvi
});
// speed up the video
document.querySelector("#faster").addEventListener("click", function() {
	// document.querySelector("#faster") is the faster button
	console.log("Speed Up");
	// write this obvi
	document.querySelector("#player1").video.playbackRate /= 0.95;
	// playbackRate is set to 95% of the current playbackRate
	//  /= means divide by
	console.log("New speed is " + video.playbackRate);
	// write this obvi
});
// skip ahead 15 seconds
document.querySelector("#skip").addEventListener("click", function() {
	// document.querySelector("#skip") is the skip button
	console.log("Skip Ahead");
	// write this obvi
	if (video.currentTime < video.duration - 10) {
		// if the current time of the video is less than the duration of the video minus 10 seconds
		video.currentTime += 10;
		// the current time of the video is set to the current time of the video plus 10 seconds
	} else {
		video.currentTime = 0;
		// otherwise the current time of the video is set to 0
		console.log("Going back to beginning");
		// write this obvi
	}
});
// mute the video
document.querySelector("#mute").addEventListener("click", function() {
	// document.querySelector("#mute") is the mute button
	console.log("Mute Video");
	// write this obvi
	if (video.muted == false) {
		// if the video is not muted
		video.muted = true;
		// the video is muted
		document.querySelector("#mute").innerHTML = "Unmute";
		// the text of the mute button is set to unmute
	} else {
		video.muted = false;
		// otherwise the video is not muted
		document.querySelector("#mute").innerHTML = "Mute";
		// the text of the mute button is set to mute
	}
});
// change the volume of the video
document.querySelector("#slider").addEventListener("change", function() {
	// document.querySelector("#slider") is the slider
	console.log(this.value);
	// write this obvi
	video.volume = this.value / 100;
	// the volume of the video is set to the value of the slider divided by 100
	document.querySelector("#volume").innerHTML = this.value + "%";
	// the volume is displayed as a percentage
});
// utilize oldSchool class for video
document.querySelector("#vintage").addEventListener("click", function() {
	// document.querySelector("#vintage") is the vintage button // old school
	console.log("Old School");
	// write this obvi
	video.classList.add("oldSchool");
	// the video class is set to oldSchool
});
// remove oldSchool class for video
document.querySelector("#orig").addEventListener("click", function() {
	// document.querySelector("#orig") is the orig button // original
	console.log("Original");
	// write this obvi
	video.classList.remove("oldSchool");
	// the video class is removed
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

