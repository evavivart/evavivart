var audioDo = document.getElementById("notado") 
var audioRe = document.getElementById("notare")
var audioMi = document.getElementById("notami")
var audioFa = document.getElementById("notafa")
var audioSol = document.getElementById("notasol")
var audioLa = document.getElementById("notala")
var audioSi = document.getElementById("notasi")
var audioDoOitava = document.getElementById("do-oitava")
var audioPiano = document.getElementById("piano")

function playSomDo(){
  audioDo.play();
}

function playSomRe(){
 audioRe.play();
}
function playSomMi(){
 audioMi.play();
}
function playSomFa(){
 audioFa.play();
}
function playSomSol(){
 audioSol.play();
}
function playSomLa(){
 audioLa.play();
}
function playSomSi(){
  audioSi.play();
}
function playSomDoOitava(){
 audioDoOitava.play();
}
function playSomPiano(){
  audioPiano.play();
  // audioPiano.volume(0.1);
}

function TesteJS(){
  document.getElementsByClassName("musica").innerHTML ="EITA"
}

audioPiano.volume = 0.1;