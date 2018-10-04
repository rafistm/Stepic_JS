//console.log("Мы находимся по адресу" + window.location);
var absNum = prompt("Ввведите число");
var result;
if (absNum >= 0) {
	result = absNum;
}
else {
	result = absNum/-1;
}
console.log(result);