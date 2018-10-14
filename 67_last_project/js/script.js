class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		this.happiness++;
		return this.happiness;
	}
	hasRest() {
		this.happiness++;
		return this.happiness;
	}
	hasMoney() {
		this.happiness++;
		return this.happiness;
	}
	isSunny() {
			const APIKey = '6a8b438461759bc4cf73bcfd6076b059';
			const city = "Moscow, ru";
			const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url, false);
			xhr.send();
			if (xhr.status != 200) {
				console.log(xhr.status + ' ' + xhr.statusText);					
			} else {
				var DATA = JSON.parse(xhr.responseText);
				if ((DATA.main.temp - 273) > 15) {this.happiness++;}				
			}
	return this.happiness;		
	}
}

const form = document.forms[0];

const pName = document.querySelector('.personName');
const icon = document.querySelector('.icon');
form.calc.onclick = function(e) {
  e.preventDefault();
  var name = form.elements.name.value;
  var cat = form.elements.cat.value;
  var rest = form.elements.rest.value;
  var money = form.elements.money.value;
	var pers = new Person(name);	
	if (cat === "yes") pers.hasCat();
	if (rest === "yes") pers.hasRest();
	if (money === "yes") pers.hasMoney();
	pers.isSunny();
	pName.innerHTML = pers.name +':';
	if (pers.happiness > 3) {
		icon.innerHTML = "<img src= 'img/grinning-face-with-smiling-eyes.png'>";
	} 
	else if (pers.happiness < 2) {
		icon.innerHTML = "<img src= 'img/slightly-frowning-face.png'>";	
	}
	else {
		icon.innerHTML = "<img src= 'img/neutral-face.png'>";
	}



}

