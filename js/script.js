let drumPadSet = document.querySelector('.drum-pad-set');
let displayPanel = document.getElementById('display');

drumPadSet.addEventListener("click", event => {
   if (event.target.className == 'drum-pad') { 
     const audioEl = event.target.childNodes[5];
     audioEl.currentTime = 0;
     audioEl.play();
     
     const drumPad = event.target;
     drumPad.classList.add('drum-pad-pressed');
     
     let transition = document.querySelector('.drum-pad-pressed');
     transition.addEventListener('transitionend', event => {
     drumPad.classList.remove('drum-pad-pressed');
     });
     
     displayPanel.innerText = event.target.childNodes[3].innerText;
   }
});

  
document.addEventListener("keydown", event => {
  switch (event.code.charAt(3)) {
    case 'Q':
    case 'W':
    case 'E':
    case 'A':
    case 'S':
    case 'D':
    case 'Z':
    case 'X':
    case 'C':
      const audioEl = document.getElementById(event.code.charAt(3));
      audioEl.currentTime = 0;
      audioEl.play();
      
      let drumPad = audioEl.parentElement;
      drumPad.classList.add('drum-pad-pressed');
      
      let transition = document.querySelector('.drum-pad-pressed');
      transition.addEventListener('transitionend', event => {
      drumPad.classList.remove('drum-pad-pressed');
       });
      
      displayPanel.innerText = audioEl.parentElement.childNodes[1].nextElementSibling.innerText;
      
    break;
  }
});