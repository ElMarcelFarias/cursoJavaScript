// aula Intervalos ou timers
// Intervalos 1/2


/*
let timer;
function comecar() {
   timer = setInterval(showTime, 1000);
}

function parar(){
  clearInterval(timer);
}


function showTime() {
  let d = new Date(); 
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  let txt = h+':'+m+':'+s;

  document.querySelector('.demo').innerHTML = txt;

}
*/

//Intervalos 2/2
let timer;

function rodar() {
  timer = setTimeout(function() {
    document.querySelector('.demo').innerHTML = 'Rodou!';
  }, 2000);
}

function stop() {
  clearTimeout(timer);
}









