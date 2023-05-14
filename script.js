//Setting js file to strict mode:
"use strict";
//===============================

//Reassigning buttons to be useable in js.
const buttons = document.querySelectorAll("button");
const checkVinyl = document.querySelector("#vinyl-check");
const vinyl = document.querySelector(".vinyl");

//Giving audiofiles useable names by making them into variables.
const kickSample = new Audio("sounds/kick.wav");
const snareSample = new Audio("sounds/snare.wav");
const hhSample = new Audio("sounds/hatClosed.wav");
const ohSample = new Audio("sounds/hatOpen.wav");
const percSample = new Audio("sounds/perc.wav");
const vinylSample = new Audio("sounds/vinylRain.wav");
vinylSample.volume = 0.4;

//Array that holds the specified keyboard keys and also the samples.
const sampleLibrary = [
  { key: "f", sample: kickSample },
  { key: "g", sample: snareSample },
  { key: "h", sample: hhSample },
  { key: "j", sample: ohSample },
  { key: "r", sample: percSample },
];

//

//Vinylnoise on / off Using "change" event to let the checkbox be affected.
function clickVinyl() {
  checkVinyl.addEventListener("change", () => {
    //If checkbox is checked, Play. Else, stop.
    if (checkVinyl.checked) {
      //Animation
      vinyl.classList.add("spin");
      vinylSample.loop = Infinity;
      //Audio
      vinylSample.play();
    } else {
      //Animation
      vinyl.classList.remove("spin");
      //Audio
      vinylSample.pause();
    }
  });
}
document.addEventListener("click", clickVinyl);

//

//The function that both mouseclick and keypress uses.
function playSample(key) {
  //Use find method to loop through the sampleLibrary to check each sample if they match the given key.
  const sound = sampleLibrary.find((eachSample) => eachSample.key === key);
  //If match aka true, code executes.
  if (sound) {
    sound.sample.currentTime = 0;
    sound.sample.play();
  }
}

//

//Listening for keys being pressed to then call a function that runs a toLowerCase method and plays audio.
document.addEventListener("keydown", function (press) {
  //toLowerCase makes sure the key input can be both upper and lowercase and still work.
  const keyPress = press.key.toLowerCase();
  playSample(keyPress);
});

//Click trigger:
buttons.forEach(function (button) {
  //Listening for clicks that will call an anonymous function that runs a block of code.
  button.addEventListener("click", function () {
    //looks for buttons with the data-key and retrieves it to proceed and play the sample.
    const mouseClick = this.getAttribute("data-key");
    playSample(mouseClick);
  });
});
