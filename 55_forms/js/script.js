const form = document.forms[0].elements; const result = document.querySelector('.result');

form.calculate.onclick = function(e) {
  e.preventDefault();
  const rad = parseInt(form.degree.value) * Math.PI / 180;
  result.innerHTML = Math.sin(rad);
}