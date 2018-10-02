var moneys = Number(prompt('Сколько у вас с собой есть денег?'));
var amountApples = Number(prompt('Cколько вы купили яблок?'));
var amountBreads = Number(prompt('Сколько вы купили батонов хлеба?'));
var moneyApple = Number(prompt('Сколько стоит одно яблоко'));
var moneyBread = Number(prompt('Сколько стоит один батон хлеба'));
var trueMoneys = (moneys >= (amountApples*moneyApple+amountBreads*moneyBread));
document.body.innerHTML = trueMoneys;



