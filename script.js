const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo')
const numeroCapitulos = 10;
let taTocando = 0;
function tocarFaixa(){
  audioCapitulo.play()
}

function pausarCapitulo(){
  audioCapitulo.pause()
}

function tocarOupausar(){
  if(taTocando === 0){
    tocarFaixa();
    taTocando = 1
  } else {
    pausarCapitulo();
    taTocando = 0
  }
}

botaoPlayPause.addEventListener('click', tocarOupausar)
