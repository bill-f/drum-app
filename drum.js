var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

  document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
  });
}

document.addEventListener("keypress", function(event) {
  sound(event.key);
  animation(event.key);
});


function playAudio(url) {
  new Audio(url).play();
}



function sound(key) {
  switch (key) {
    case "w":
      var sound1 = new Audio("music/test.mp3");
      sound1.play();
      break;

    case "a":
      var sound2 = new Audio("music/cymbal.mp3");
      sound2.play();
      break;

    case "s":
      var sound3 = new Audio('music/floor.mp3');
      sound3.play();
      break;

    case "d":
      var sound4 = new Audio('music/sticks.mp3');
      sound4.play();
      break;

    case "q":
      var sound5 = new Audio('music/snare.mp3');
      sound5.play();
      break;

    case "e":
      var sound6 = new Audio('music/hihat.mp3');
      sound6.play();
      break;

    default: console.log(key);
  }
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("animation");

  setTimeout(function() {
    activeButton.classList.remove("animation");
  }, 100);
}
