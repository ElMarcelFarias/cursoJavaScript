let c = 0;
let html = '';

while(c <= 10) {
  html += 'Numero: ' + c + '<br/>';
  c = c + 2
}

document.getElementById('demo').innerHTML = html;