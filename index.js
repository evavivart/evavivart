// SOUNDS ON HOVER
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

// NIGHT MODE

const nightModeToggle = document.querySelector('#nightmode');
const body = document.querySelector('main');
const NIGHT_MODE_KEY = 'nightModeEnabled';

// Check if night mode was enabled in a previous session
const isNightModeEnabled = localStorage.getItem(NIGHT_MODE_KEY) === 'true';
if (isNightModeEnabled) {
  body.classList.add('night-mode');
}

// Toggle night mode on button click
nightModeToggle.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  
  // Store the night mode state
  const isNightModeEnabled = body.classList.contains('night-mode');
  localStorage.setItem(NIGHT_MODE_KEY, isNightModeEnabled);
});

// progress bar 
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

