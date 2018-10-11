let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
]
let all = [];
for (i=0;i<names.length;i++) {
	for (j=0;j<names[i].length;j++) {
		for (k=0; k<names[i][j].length;k++) {
			all.push(names[i][j][k]);	
		}
		
	}
}
console.log(all.join(', '));