
function tempFunc() {
	const city = document.getElementById("st").value;

const APIKey = '6a8b438461759bc4cf73bcfd6076b059';
//const city = "Salavat,ru";
const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if (xhr.status != 200) {
	console.log(xhr.status + ' ' + xhr.statusText);	
} else {
	var DATA = JSON.parse(xhr.responseText);
	//console.log(DATA);
	const temp = document.getElementById("tmp");
	temp.innerHTML = Math.round(DATA.main.temp) - 273;
}
}

