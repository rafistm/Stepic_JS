const body = document.body;
var arr = [];
for (var i = 0; i <= 100000; i++) {
	if (i%6 === 0) arr.push(i);
}
body.innerHTML = arr.join(', ');