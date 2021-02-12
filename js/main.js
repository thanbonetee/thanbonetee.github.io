window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

var audio = document.getElementById("audio");
var tbtImg = document.getElementById("tbtImg");
var volUpButton = document.getElementById("vol-up-btn");
var volDownButton = document.getElementById("vol-down-btn");
let volumeSlider = document.getElementById("volume-slider");

function play() {
        tbtImg.innerHTML = "<img src=\"images/play.gif\">";
        audio.play();
    audio.loop=true;
      }

function pause() {
        tbtImg.innerHTML = "<img src=\"images/pausegif.png\">";
        audio.pause();
      }

function setvolume(){
      audio.volume = volumeSlider.value;
}

volumeSlider.addEventListener("mousemove", setvolume);

function volUp(){
    audio.volume+=0.1;
    volumeSlider.value = audio.volume;
    audio.volume = volumeSlider.value;

}

function volDown(){
    audio.volume-=0.1;
    volumeSlider.value = audio.volume;
    audio.volume = volumeSlider.value;

}

plyr.setup(document.querySelectorAll('.js-plyr'), {});
