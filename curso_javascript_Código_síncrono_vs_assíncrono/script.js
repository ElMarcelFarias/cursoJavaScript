//Código SÍNCRONO (ele lê linha por linha até ser rodada)
let nome = 'Marcel';
let sobrenome = 'Leite de Farias';
let nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

//Código ASSÍNCRONO (ele lê linha por linha, mas não espera ela ser rodada)

let nome = 'Marcel';
let sobrenome = 'Leite de Farias';
let temperatura = Maquininha.pegarTemperatura();  //ASSINCRONA
let nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);