let info = [ 'Marcel Leite de Farias', 'Marcel', 'Leite de Farias', '@farias.marcell'];

//let [nomeCompleto, nome, sobrenome, instagram] = info;

//console.log(`Meu nome completo é ${nomeCompleto}, apenas meu nome é ${nome} sobrenome ${sobrenome} instagram ${instagram} `)

//Irei desconstruir apenas o primeiro e o ultimo item do array

let [nomeCompleto, , ,instagram] = info;
console.log(`Meu nome é ${nomeCompleto} e meu instagram é ${instagram}`);