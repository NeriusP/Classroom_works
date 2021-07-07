//Window: resize event  https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
let heightOutput, widthOutput;



// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

const mobSize = 700;
let currentSize;

//window.onresize = reportWindowSize;
window.addEventListener('resize', () => {
    reportWindowSize();
    changeSize();
});

window.addEventListener('DOMContentLoaded', (e) => {
    heightOutput  = document.querySelector('#height');
    widthOutput  = document.querySelector('#width');
   
    reportWindowSize(e);
})

function reportWindowSize(e) {
 //   console.log('go', e)
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }

  function changeSize() {
      let change = currentSize;
    //   if (!currentSize) {
    //     currentSize = window.innerWidth;
    // }

        if(window.innerWidth > mobSize){
            currentSize = 'desktop';
        }
        else {
            currentSize = 'mobile';
        }
        if(change !== currentSize){
            console.log('Change layout to ' + currentSize)
        }
  }

  //Document: scroll event  https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event

   
   
