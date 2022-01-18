//Descontruindo Objetos (1/2)

let  pessoa = {
  nome: 'Marcel',
  sobrenome: 'Leite de Farias',
  idade: 18,
  social: {
    facebook:'Marcel Farias',
    instagram:{
      url: '@farias.marcell',
      seguidor: 9000
    }
  },
  /*nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`;
  }*/
};

//console.log(pessoa.nomeCompleto());

//let idade = pessoa.idade;
//let {nome:pessoaNome, sobrenome, idade} = pessoa;
//console.log(`Meu nome é ${pessoaNome} ${sobrenome}, e tenho ${idade} anos`);

//Descontruindo Objetos (2/2)

//let {facebook, instagram} = pessoa.social;

let {nome, idade, social:{instagram:{url:instagram, seguidor}}} = pessoa;

console.log(`Meu nome é ${nome}, eu tenho ${idade} anos, e meu instagram é ${instagram}, tenho ${seguidor} seguidores.`);


/*function pegarNomeCompleto (obj) {
  let nome = obj.nome;
  let sobrenome = obj.sobrenome

  return `${nome} ${sobrenome}`;
}*/


function pegarNomeCompleto ({nome, sobrenome, social:{instagram:{url:instagram}}}) {
  return `${nome} ${sobrenome} (Siga em ${instagram})`;
}

console.log(pegarNomeCompleto(pessoa));