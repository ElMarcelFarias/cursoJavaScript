//Métodos de Arrays (1/4)

//let lista = ['Ovo', 'farinha', 'corante', 'Massa'];

//let res = lista.toString();
//let res = lista.join(', ');
//let res = lista.indexOf('corante'); //posicao do array

// remove o ultimo item lista.pop();
// remove o primeiro item lista.shift();
// Adiciona itens no array lista.push('Prato');
// alterar um array lista[0] = 'Ovos';

//let res = lista.length;

//console.log(res);




//Métodos de Arrays (2/4)

//let lista = ['ovo', 'farinha', 'corante', 'massa'];
//let lista2 = ['Prato', 'Liquidificador', 'Forno'];
//lista.splice(3, 1); //dentro do splice (x,y) x = qual lugar do array, 1 pra remover


//Ordem alfabetica lista.sort();
// reverse da ordem lista.reverse();
//let res = lista;


//Juntar dois arrays let res = lista.concat(lista2);

//console.log(res);




//Métodos de Arrays (3/4)


//let lista = [45, 4, 9, 16, 25];
//let lista2 = [];

/*lista2 = lista.map(function(item){
  return item * 2;
}); */

/*
for(let i in lista) {
  lista2.push(lista[i] * 2);
} */ 

/*
lista2 = lista.filter(function(item){
  if(item < 20) {
    return true
  } else {
    return false
  }
});
*/

/*
lista2 = lista.every(function(item){
  if(item > 20){
    return true
  } else {
    return false
  }

  return (item > 10)? true : false; em apenas uma linha de codigo
});
*/


/*
lista2 = lista.some(function(item){
  if(item > 20){
    return true
  } else {
    return false
  }
});
*/

//let res = lista2;

//console.log(res);



//Métodos de Arrays (4/4)

let lista = [
  {id:1, nome:'Marcel', sobrenome:'Leite de Farias'},
  {id:2, nome:'Paulo', sobrenome:'XYZ'},
  {id:3, nome:'Fulano', sobrenome:'Da Silva'}
];

let pessoa = lista.find(function(item){
  return (item.id == 3)? true : false;
});


/*
let pessoa = lista.findIndex(function(item){
  return (item.sobrenome == 'XYZ')? true : false;
});
*/

let res = pessoa

console.log(res); 