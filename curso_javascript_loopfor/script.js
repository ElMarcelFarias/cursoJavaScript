// FOR LOOP


/*let texto = ''; 

for(let i = 0; i < 50; i++) {
  texto = texto + i + '</br>';
} 

document.getElementById('demo').innerHTML = texto;*/


// FOR LOOP ARRAY

let carros = [ 'Ferrari', 'Corsa', 'Gol', 'Saveiro Cross'];

let html = '<ul>';

for(let i in carros) {
  html += '<li>' + carros[i] + '</li>'
}

html += '</ul>';

document.getElementById('demo').innerHTML = html;