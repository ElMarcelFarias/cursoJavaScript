/*
document.getElementById('');
document.getElementsByClassName('');
document.getElementsByTagName('');
document.getElementsByName('');
*/

/*
function verde() {
  document.querySelector('#exemplo').classList.remove('vermelho');
  document.querySelector('#exemplo').classList.remove('azul');
  document.querySelector('#exemplo').classList.add('verde');
}

function vermelho() {
  document.querySelector('#exemplo').classList.add('vermelho');
  document.querySelector('#exemplo').classList.remove('verde');
  document.querySelector('#exemplo').classList.remove('azul');
}

function azul() {
  document.querySelector('#exemplo').classList.add('azul');
  document.querySelector('#exemplo').classList.remove('verde');
  document.querySelector('#exemplo').classList.remove('vermelho');
}
*/
/*
function trocar() {
  if(document.querySelector('button').classList.contains('preto')) {
    document.querySelector('button').classList.remove('preto')
    document.querySelector('button').classList.add('verde')
  } else {
    document.querySelector('button').classList.remove('verde');
    document.querySelector('button').classList.add('preto');
  }

}

*/

/*function alterar(titulo) {
  document.getElementById("titulo").innerHTML = titulo;
  document.getElementById("campo").value = titulo;
}

alterar("Titulo de exemplo");

function somar(x,y) {
  let total = x + y;

  document.getElementById("campo").value = total;

  return total;
}

var resultado = somar(10, 15);

console.log(resultado);  */


/*
function trocarImagem(filename, animalname) {
  document.querySelector('.imagem').setAttribute('src', 'images/' + filename);
  document.querySelector('.imagem').setAttribute('data-animal', animalname);
}


function pegarAnimal() {
  let animal = document.querySelector('.imagem').getAttribute('data-animal');
  alert("O animal é: " + animal);
}
*/

/* Scroll suave*/ 
function subirTela() {
  window.scrollTo ({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


/*Functions para remover o botao quando o site estiver na posição Y === 0 e aparecer quando não estiver*/ 
function decidirBotaoScroll() {
  if(window.scrollY === 0) {
    //Ocultar o botao
    document.querySelector('.scrollbutton').style.display = 'none';
  } else {
    // Mostrar o botao
    document.querySelector('.scrollbutton').style.display = 'block';
  }
}

/* para monitor o scroll*/
window.addEventListener('scroll', decidirBotaoScroll);

function clicou() {
  document.getElementById("titulo").innerHTML = "Obrigado"
}

function digitou(e) {
  if(e.keyCode == 13 && e.ctrlKey == true) { // Enter
    let texto = document.getElementById('campo').value;

    console.log(texto);
  }
}

function azul() {
  limpar();
  document.getElementById('titulo').classList.add('azul');
}

function vermelho() {
  limpar();
  document.getElementById('titulo').classList.add('vermelho');
}

function verde() {
  limpar();
  document.getElementById('titulo').classList.add('verde');
}

function limpar() {
  document.getElementById('titulo').classList.remove('azul');
  document.getElementById('titulo').classList.remove('vermelho');
  document.getElementById('titulo').classList.remove('verde');
}

function mostrarTelefone(elemento) {
  elemento.style.display = 'none';
  document.getElementById('telefone').style.display = 'block'
}

//let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari' ]; 

//console.log(carros[0]);

let carros = [
  'Palio',
  'Uno',
  'Corolla',
  'Ferrari',
  function() {
    //console.log('Testando 1,2,3...');
  }
]

carros[4]();

let ingredientes = [
  ['uva', 'pera', 'melancia'],
  ['arroz', 'miojo']
]

//console.log(ingredientes [1] [0]);

//objetos
let carro = {
  nome:'Fiat',
  modelo:'Uno',
  Peso:'800kg',
  ligado:false,
  ligar: function() {
    this.ligado = true;
    console.log('vrum vrum');
  },
  acelerar: function(){
    if(this.ligado == true) {
      console.log('RIIIIIIIIIH');
   } else {
     console.log(this.nome + ' ' + this.modelo + ' não está ligado');
   }
  }
}

//console.log(carro[nome]); 
console.log("Modelo: " + carro.modelo);
carro.ligar();
carro.acelerar();

let carros1 = [
  {nome: 'Fiat', modelo: 'Palio'},
  {nome: 'BMW', modelo: '320i'},
  {nome: 'Volvo', modelo: 'vc60'},
  {nome: 'honda', modelo: 'Civic'}
]

console.log(carros1);

console.log(carros1[1].modelo); //array 1, modelo 320i