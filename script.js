var circle = document.getElementById("circle");
var nightmodebtn = document.getElementById("nightmode");
var nav = document.getElementById('navbar');
var buttons = document.getElementsByTagName('button');

function submit() {
	circle.classList.add("start");
	circle.classList.add("default");
}

function remove() {
	circle.classList.remove("start");
}

function nightmode() {
    document.body.classList.toggle('dark');
	nav.classList.toggle('dark');
    buttons.classList.toggle('dark');
}


function changes() {
	let speedSelected = document.getElementById('speed').value;
	let colourSelected = document.getElementById('colour').value;

	document.getElementById('circle').className = '';

	// Modify speed:
	if (speedSelected == "" || speedSelected == "default") {
		circle.classList.add("default");
	}
	else if (speedSelected == "veryslow") {
		circle.classList.add("veryslow");
	}
	else if (speedSelected == "medium") {
		circle.classList.add("medium");
	}
	else if (speedSelected == "fast") {
		circle.classList.add("fast");
	}

	// Modify color:
	if (colourSelected == "" || colourSelected == "green") {
		circle.classList.add("green");
	}
	else if (colourSelected == "red") {
		circle.classList.add("red");
	}
	else if (colourSelected == "orange") {
		circle.classList.add("orange");
	}
	else if (colourSelected == "yellow") {
		circle.classList.add("yellow");
	}
	else if (colourSelected == "blue") {
		circle.classList.add("blue");
	}
	else if (colourSelected == "indigo") {
		circle.classList.add("indigo");
	}
	else if (colourSelected == "violet") {
		circle.classList.add("violet");
	}

	circle.classList.add("start");
}