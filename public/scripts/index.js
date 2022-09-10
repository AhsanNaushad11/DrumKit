let drums = document.querySelectorAll(".drum");
let numberOfDrumButtons = drums.length;

// for (let i = 0; i < numberOfDrumButtons; i++) {
//      //   Better way to assign functions to the objects is in javascript, not HTML.
//      drums[i].addEventListener("click", function () {
//           let audio = new Audio("./sounds/kick-bass.mp3");
//           audio.play();
//      });
// }

// document.querySelector("#wkey").addEventListener("click", handleClick);

for (let i = 0; i < numberOfDrumButtons; i++) {
  //   Better way to assign functions to the objects is in javascript, not HTML.
  drums[i].addEventListener("click", function () {
    switch (this.innerHTML) {
      case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;

      default:
        console.log("Invalid key");
        break;
    }
  });
}
