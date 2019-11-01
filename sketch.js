
let autumnBtn;
let autumnImage;
let matchSound;
let song;

function preload(){
  soundFormats('mp3','ogg');
  matchSound = loadSound('assets/air.mp3');
  song = loadSound('assets/bell.mp3');
}

function setup() {
  noCanvas();
autumnBtn= select('#autumnButton');
autumnBtn.mousePressed(yellowAutumn);
candleImage= select ('#autumn');

}

function draw() {
  background(250);
}


function yellowAutumn(){
matchSound.setVolume(0.1);
matchSound.play();
song.setVolume(0.3);
song.play();
//setTimeout(showAutumn, 1500);



}

function showAutumn(){
  autumnImage.show();
}
