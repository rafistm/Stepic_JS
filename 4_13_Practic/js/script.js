const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const close = document.querySelector('.closePopup');
const opMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const clMenu = document.querySelector('.closeMenu');

button.onclick = function() {	
	
	popup.style.display = 'flex';
}
close.onclick = function() {
	
	popup.style.display = 'none';
}

opMenu.onclick = function() {
	console.log(this);
	menu.style.left = '0';
}

clMenu.onclick = function() {
	console.log(this);
	menu.style.left = '-50vw';
}