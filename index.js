/***
 * Variables Declaration
 */
let btnDrumLength = document.querySelectorAll('.drum').length;
let btnDrums = document.querySelectorAll('.drum');

/***
 * Events
 */
for (let i = 0; i < btnDrumLength; i++) {

   btnDrums[i].addEventListener('click', ({ target }) => {
      let btnInnerHTML = target.innerHTML;

      renderSound(btnInnerHTML);
      renderAnimationButton(btnInnerHTML);

   });

}

document.addEventListener('keypress', ({ key }) => {
   renderSound(key);
});

/***
 * Methods
 */
const renderSound = (key) => {
   switch (key) {
      case "w":
         let tom1 = new Audio('sounds/tom-1.mp3');
         tom1.play();
         break;
      case "a":
         let tom2 = new Audio('sounds/tom-2.mp3');
         tom2.play();
         break;
      case "s":
         let tom3 = new Audio('sounds/tom-3.mp3');
         tom3.play();
         break;
      case "d":
         let tom4 = new Audio('sounds/tom-4.mp3');
         tom4.play();
         break;
      case "j":
         let snare = new Audio('sounds/snare.mp3');
         snare.play();
         break;
      case "k":
         let crash = new Audio('sounds/crash.mp3');
         crash.play();
         break;
      case "l":
         let kick = new Audio('sounds/kick-bass.mp3');
         kick.play();
         break;
      default:
         console.log(btnInnerHTML)
         break;
   }
}

const renderAnimationButton = (currentKey) => {
   let activeBtn = document.querySelector(`.${currentKey}`);
   activeBtn.classList.add('pressed');

   setTimeout(() => {
      activeBtn.classList.remove('pressed');
   }, 100);
}