let mode = false; //true = currently playing, false = not playing
let src, snd, audioSrc;

https://stackoverflow.com/questions/49314151/how-to-switch-between-two-different-colors-with-one-button-using-javascript
function start() {
	var buttonColor = document.getElementById("buttonOnOff");
	buttonColor.addEventListener("click", toggle);
  };
  
  function toggle() {
	var color = document.getElementById("buttonOnOff");
	var backColor = color.style.backgroundColor;
	color.style.backgroundColor = backColor === "black" ? "red" : "black";
  };
  
  start();
function streamMusic(clicked_id) {
	console.log("id: ", clicked_id);

	$.getJSON("assets/data/stations.json", grabbed);

	let streamURL;
	
	function grabbed(data) {

		//checks to see if mode exists. if so, we are already playing sound, so pause
		if (mode) {
			snd.pause();
	
		}

		// load some sound
		console.log("title: ", data.stations[clicked_id].title);

		streamURL = data.stations[clicked_id].streamUrl;

		source = document.getElementsByTagName("source");
		source.src = streamURL;

		console.log("source is ", document.getElementsByTagName("source").src);

		snd = document.createElement("audio");

		audioSrc = document.createElement("source");
		snd.appendChild(audioSrc);

		audioSrc.src = source.src;

		snd.play();

		mode = true;
	}
}
