var meowmix = document.getElementsByClassName('meowmix');
var woofmix = document.getElementsByClassName('woofmix');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var querymeow = document.querySelector('.meowmix');
var querywoof = document.querySelector('.woofmix');
var paragraphs = document.querySelectorAll('p');

var text = "hello";
div2.innerHTML = text;

for (i = 0; i < paragraphs.length; ++i) {
	paragraphs[i].innerHTML = "apple";
	paragraphs[i].style.cssText = "color: red;";
}
querymeow.innerHTML = text;
querywoof.innerHTML = "woof";
div1.style.cssText = "border: 3px solid dodgerblue";
// div2.setAttribute("style", "border: 3px solid green");
div2.style.cssText = "border: 3px solid green;";

//change body background with button
function btn(obj) {
	document.querySelector('body').style.background = "Peru";
}
//change color of text by click
function changeTextColor(obj) {
	obj.style.color = "Purple";
}
//change text of text by click
function changeText(obj) {
	obj.innerHTML = "Waffle";
}
//create box with onmousevoer/onmouseout
function mouseover() {
	document.querySelector('.box').style.backgroundColor = "dodgerblue";
	document.querySelector('.box').innerHTML = "Get off bruh!";
}

function mouseout() {
	document.querySelector('.box').style.backgroundColor = "blue";
	document.querySelector('.box').innerHTML = "Thanks";
}
//input to delete h1 text
function remove() {
	var h1 = document.querySelector('h1');
	h1.textContent = h1.textContent.slice(0, -1);
}
