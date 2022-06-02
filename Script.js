function carregar()
{
    var mensagem = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
     
     mensagem.innerHTML = `agora sao ${hora} horas`;
     if(hora >= 0 && hora < 12)
     {
      img.src = 'imagem/manha.png';
         document.body.style.background = "#DAA520"
     }
    else if (hora > 12 && hora < 18) {
         img.src = 'imagem/tarde.png';
         document.body.style.background = "#FF8C00"
     } else {
         img.src = 'imagem/noite.png';
         document.body.style.background = "#00008B"
     }
}
