//upload de arquivos js

async function enviar(){
  let arquivo = document.getElementById('arquivo').files[0];
  
  let body = new FormData();
  body.append('title', 'blabla');
  body.append('arquivo', arquivo);

  let req = await fetch('https://www.google.com/upload',{
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'muiltipart/form-data'
    }
  });
}