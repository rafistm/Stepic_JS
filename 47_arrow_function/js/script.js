var moneys = Number(prompt('Сколько у вас с собой есть денег?'));
var amountApples = Number(prompt('Cколько вы купили яблок?'));
var amountBreads = Number(prompt('Сколько вы купили батонов хлеба?'));
var moneyApple = Number(prompt('Сколько стоит одно яблоко'));
var moneyBread = Number(prompt('Сколько стоит один батон хлеба'));
var control = (moneys, amountApples, amountBreads, moneyApple, moneyBread) =>{
	(moneys >= (amountApples*moneyApple+amountBreads*moneyBread)) ? console.log('Вам хватает денег на покупки') : console.log('Вам не хватает денег');	
}

//control(moneys, amountApples, amountBreads, moneyApple, moneyBread);
