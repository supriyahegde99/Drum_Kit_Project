
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function()
//     {
//        var audio; 
//        var buttonLetter= this.innerHTML;
//        this.style.color="white"; 
//        // to change the color of drums as n when they are clicked
//        //other buttons remain in their original color unless they are clicked
//        if(buttonLetter==="w")
//        {
//          audio= new Audio("sounds/tom-1.mp3");
//          audio.play();

//        }
//         if(buttonLetter==="a" )
//        {
//         audio= new Audio("sounds/tom-2.mp3");
//         audio.play();

//        }
//        if(buttonLetter==="s")
//        {
//         audio= new Audio("sounds/tom-3.mp3");
//         audio.play();
//        }
//        if(buttonLetter==="d")
//        {
//         audio= new Audio("sounds/tom-4.mp3");
//         audio.play();
//        }
//        if(buttonLetter==="j")
//        {
//         audio= new Audio("sounds/crash.mp3");
//         audio.play();
//        }
//        if(buttonLetter==="k")
//        {
//         audio= new Audio("sounds/kick-bass.mp3");
//         audio.play();
//        }
//        if(buttonLetter==="l")
//        {
//         audio= new Audio("sounds/snare.mp3");
//         audio.play();
//        }

//     });

//     // to click evry button which has a class set and performs handleClick function for evry click

// }
// // var i=0;
// // while(i<document.querySelectorAll(".drum").length)
// // {
// //     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// //     i++;
// // }


// to change the color of the clicked button only ..remaining is stayed in its original color

var audio;
let prevButton = null;
const wrapper = document.getElementById("set");

wrapper.addEventListener('click', (e) => {

  const isButton = e.target.nodeName === 'BUTTON';

  if (!isButton) {
    return;
  }

  e.target.classList.add('active'); // Add .active CSS Class

  if (prevButton !== null) {
    prevButton.classList.remove('active');  // Remove .active CSS Class
  }
  var buttonLetter = e.target.innerHTML;
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

  prevButton = e.target;

});


//to produce audio without clicking on the button instead using the keypress 

document.addEventListener("keydown", function (e) {
  var key = e.key;
  if (key === "w") {
    audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (key === "a") {
    audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if (key === "s") {
    audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if (key === "d") {
    audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  if (key === "j") {
    audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (key === "k") {
    audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
  if (key === "l") {
    audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
})

//to produce sound both on button click and keypress

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    { 
      var buttoninnerHTML= this.innerHTML;
      makeSound(buttoninnerHTML);
      buttonAnimation(buttoninnerHTML);
     
    });
  }
//to click on a button

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
})  // to call a keypress event 



// function makeSound(key)
// {
//   if (key === "w") {
//     audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//   }
//   if (key === "a") {
//     audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
//   }
//   if (key === "s") {
//     audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
//   }
//   if (key === "d") {
//     audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
//   }
//   if (key === "j") {
//     audio = new Audio("sounds/crash.mp3");
//     audio.play();
//   }
//   if (key === "k") {
//     audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
//   }
//   if (key === "l") {
//     audio = new Audio("sounds/snare.mp3");
//     audio.play();
//   }
// }


// function buttonAnimation(currentKey)
// {
//   var currentButton=document.querySelector("."+currentKey);
//   currentButton.classList.toggle("pressed");
// }

