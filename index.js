var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Detecting Button Press

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

/*
function anotherAddEventListener(typeOfEvent, callback) {
  // Detect Event Code...

  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2,
  };

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherAddEventListener("keypress", function (event) {
  console.log(event);
});
*/
/*
this.style.color = "white";
*/

/* Higher Order Functions and Passing Functions as Arguments 
function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
calculator(4, 5, add);
calculator(4, 5, multiply);
calculator(6, 3, substract);

debugger;
calculator(3, 4, multiply);
*/

/*
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
*/
/* Javascript Objects
var houseKeeper1 = {
  yearsofExperience: 12,
  name: "Jane",
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
};

console.log(houseKeeper1.name);
*/

/*
function HouseKeeper(yearsofExperience, name, cleaningRepertoire) {
  this.yearsofExperience = yearsofExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

houseKeeper1 = new HouseKeeper(12, "Jane", [
  "bathroom",
  "lobby",
  "bedroom",
]);

var houseKeeper2 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);

console.log(houseKeeper1.name, houseKeeper1.clean);
*/
