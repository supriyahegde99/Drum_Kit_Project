var audio;
let prevButton = null;
const wrapper = document.getElementById("set");


wrapper.addEventListener('click', (e) => {

  const isButton = e.target.nodeName === 'BUTTON';

  if (!isButton) {
    return;
  }

  console.log(e.target);
  e.target.classList.add('pressed'); // Add .active CSS Class

  if (prevButton !== null) {
    prevButton.classList.remove('pressed');  // Remove .active CSS Class
  }

  var instanceLetter = e.target.innerHTML;
  makeSound(instanceLetter);
  prevButton = e.target;
});


document.addEventListener("keydown", function (e) {
    
    var keyLetter = document.querySelector("."+e.key);
    keyLetter.classList.add("pressed");
    makeSound(e.key);
    if (prevButton !== null) {
        prevButton.classList.remove('pressed');  // Remove .active CSS Class
      }
      prevButton=keyLetter;
  });

  


  function makeSound(buttonLetter)
  {
    if (buttonLetter === "w") {
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      }
      if (buttonLetter === "a") {
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    
      }
      if (buttonLetter === "s") {
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      }
      if (buttonLetter === "d") {
        audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      }
      if (buttonLetter === "j") {
        audio = new Audio("sounds/crash.mp3");
        audio.play();
      }
      if (buttonLetter === "k") {
        audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      }
      if (buttonLetter === "l") {
        audio = new Audio("sounds/snare.mp3");
        audio.play();
      }
    
  }
 
 

