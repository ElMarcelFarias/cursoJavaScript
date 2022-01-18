//Operador Spread (Normalmente usamos quando queremos complementar alguma coisa)
/*
//Arrays
let numeros = [1,2,3,4];
let outros = [...numeros, 5,6,7,8];
*/

/*
//Objetos
let info = {
  nome: 'Marcel',
  sobrenome: 'Leite de Farias',
  idade: 18
}

let novaInfo = {
  ...info,
  cidade: 'Joinville',
  estado: 'Paraiba',
  UF: 'SC'
}
console.log(novaInfo);
*/


function adicionarInfo(info){
  let novasInfo = {
    ...info,
    status:0,
    token:'dadwadaw',
    data_cadastro: '17/12/2003'
  };

  return novasInfo;
}

console.log(adicionarInfo({nome:'Marcel',sobrenome:'Leite de Farias'}));