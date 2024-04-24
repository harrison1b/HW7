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
// 3: Video not slowing down by 10%
document.querySelector("#slower").addEventListener("click", function() {
	// document.querySelector("#slower") is the slower button
	rate = video.playbackRate;
	// rate is the playbackRate of the video for time
	document.querySelector("#player1").playbackRate = (rate - .1);
// subtract .1 from the rate is subtracint 10%  from the rate
	console.log("New speed is " + video.playbackRate);
	// write this obvi
});
// speed up the video
document.querySelector("#faster").addEventListener("click", function() {
	// document.querySelector("#faster") is the faster button
	console.log("Speed Up");
	// write this obvi
	rate = video.playbackRate;
	// rate is the playbackRate of the video for time
	document.querySelector("#player1").playbackRate = (rate + 0.1);
	// playbackRate is set to 95% of the current playbackRate
	// that did not work
	// switch rate + .1 because I am adding 10 seconds to the rate which is cthe surrent time
	//  /= means divide by
	console.log("New speed is " + video.playbackRate);
	// write this obvi
});
// skip ahead 15 seconds
document.querySelector("#skip").addEventListener("click", function() {
	// document.querySelector("#skip") is the skip button
	console.log("Skip Ahead");
	// write this obvi
	skip = video.currentTime;
	// skip is the current time of the video
	if (skip >= video.duration) {
	// if time is greater than or equal to the duration of the video  then skip to restart
		document.querySelector("#player1").play;
		// the current time of the video is set to the current time of the video plus 10 seconds
	}
	else {
		document.querySelector("#player1").currentTime = (skip + 10);
		// the current time of the video is set to the current time of the video plus 10 seconds
		//should this be 15? check gw 
		console.log("skip ahead");
		// write this obvi
	}
});


// revisit so far just used copilot / one sweep over //
//for mute video:
// w3 code
// document.getElementById("myAudio").muted = true;
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
// change the volume of the video-3: Video volume [ after ] play is not displaying correctly. Do you have the correct number? Did you remember the % sign?
document.querySelector("#slider").addEventListener("change", function() {
	// document.querySelector("#slider") is the slider
	console.log(this.value);
	// write this obvi check the value of the slider
	video.volume = this.value / 100;
	// the volume of the video is set to the value of the slider divided by 100
	document.querySelector("#volume").innerHTML = this.value + "%";
	// the volume is displayed as a percentage
});


// old school ?????????????/
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

