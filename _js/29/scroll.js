//Window: resize event  https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
let heightOutput, widthOutput;



// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

const fromTop = 30;
let scrollOutput, currentSize, menu;
changeSize();


//window.onresize = reportWindowSize;
window.addEventListener('scroll', () => {
    reportWindowScroll();
});

window.addEventListener('DOMContentLoaded', (e) => {
    scrollOutput  = document.querySelector('#scroll');
    menu = document.querySelector('menu');
    
    reportWindowScroll();
})

function reportWindowScroll() {
    console.log('go')
    scrollOutput.textContent = window.scrollY;
    changeSize();
  }

  function changeSize() {
    let change = currentSize;
  //   if (!currentSize) {
  //     currentSize = window.innerWidth;
  // }

      if(window.scrollY > fromTop){
          currentSize = 'small';
      }
      else {
          currentSize = 'full';
      }
      if(change !== currentSize){
          if (currentSize === 'small'){
              menu.style.height = '20px';
          }
          else {
            menu.style.height = '40px';
          }
          console.log('Change layout to ' + currentSize)
      }
}


