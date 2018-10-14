class Custumer {
	constructor (name){
		this.name = name;
	}
	buy() {
		console.log("Куплено");
	}
}

class childCustumer extends Custumer {
	getPresent() {
		console.log("Шарик в подарок");
	}
}

var cust = new childCustumer("Иван");
cust.getPresent();
cust.buy();
console.log(cust.name);

