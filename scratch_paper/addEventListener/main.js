var x = document.getElementById("mybtn");
var y = document.getElementById("mybtn2");
var z = 0;

function click() {
	document.getElementById("demo").innerHTML = "what's good?";
	this.style.backgroundColor = "green";
}

function mouseover() {
	document.getElementById("demo").innerHTML = "are you going to click it?";
	this.style.backgroundColor = "coral";
}

function mouseout() {
	document.getElementById("demo").innerHTML = "try out the button buddy";
	document.querySelector("body").style.backgroundColor = "grey";
	this.style.backgroundColor = "white";
}

function click2() {
	document.getElementById("demo2").innerHTML = "i'm a dog";
	this.style.backgroundColor = "dodgerblue";
}

function mouseover2() {
	document.getElementById("demo2").innerHTML = "ROOF!";
	this.style.backgroundColor = "pink";
}

function mouseout2() {
	document.getElementById("demo2").innerHTML = "GRRRR!";
	document.querySelector("body").style.backgroundColor = "salmon";
	this.style.backgroundColor = "red";
}

function increment() {
	document.getElementById("increment").innerHTML = z;
	z++;
}

x.addEventListener("mouseover", mouseover);
x.addEventListener("click", click);
x.addEventListener("mouseout", mouseout);

y.addEventListener("click", click2);
y.addEventListener("mouseout", mouseout2);
y.addEventListener("mouseover", mouseover2);

setInterval(increment, 1000);
