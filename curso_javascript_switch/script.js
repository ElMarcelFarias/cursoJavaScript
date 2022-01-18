let dia = 7;
let diaNome = '';

/*switch(dia) {
  case 1:
    diaNome = 'Segunda-feira';
    break;
  case 2:
    diaNome = 'terça-feira';
    break;
  case 3:
    diaNome = 'Quarta-feira';
    break
  case 4:
    diaNome = 'Quinta-feira';
    break
  case 5:
    diaNome = 'Sexta-feira';
    break;
  case 6:
    diaNome = 'Sabado';
    break;
  case 7:
    diaNome = 'Domingo'
    break;
}*/

switch(dia) {
  case 6:
  case 7:
    diaNome = "Final de semana";
    break;

  default:
    diaNome = "Dia de semana";
    break;
}

document.getElementById('dia').innerHTML = "Hoje é: " + diaNome;