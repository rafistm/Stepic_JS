function powAbs(num) {
	let rand = Math.round(Math.random()*(10-1)+1);
	console.log(rand);
	let poww = Math.pow(num,rand);
	return Math.abs(poww);
}

