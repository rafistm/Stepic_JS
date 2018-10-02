const body = document.body;
var colorBody = prompt("Какой будет фон у страницы?");
body.style.backgroundColor = colorBody;
var colorText = prompt("Какой будет цвет текста на странице?");
const page = document.querySelector(".page")
page.style.color = colorText;
var name = prompt("Как зовут человека, который вас вдохновляет");
const byName = document.querySelector(".name");
byName.innerHTML = name;
var path = prompt("Введите адрес картинки");
const image = document.querySelector("img");
image.setAttribute("src", path);
var txt = prompt("Введите текст страницы");
const byShortBio = document.querySelector(".shortBio");
byShortBio.innerHTML = txt;
const anime = document.querySelector(".shortBio");
anime.className += " animated";