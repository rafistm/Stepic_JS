let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const body = document.body;
var txt = ''; // Строка, которая пойдет в body
var maxWidth=0; //Переменная для хранения максимального курса криптовалют
var color = ['red', 'blue', 'green'];
for (i=0;i<crypto.length;i++) { 
    maxWidth = (crypto[i].price>maxWidth)?crypto[i].price:maxWidth; 
    crypto[i].color = color[i];
}

crypto.forEach(function(item) {
  item.percent = Math.round(item.price/maxWidth*100);
  txt += '<h1>'+item.name+'</h1>'+'<p>'+item.price+'</p>'+'<div style = "background-color: ' + item.color + '; width: ' + item.percent + '%">.</div>'+'<br><br>'; 
  

})

body.innerHTML = txt;
