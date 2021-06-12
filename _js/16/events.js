

// const gs = document.querySelector('.black-square');

// const goClick = function(eventas) {
//     console.log('pelė kliktelėjo');

//     console.log(eventas.target.style);
// }



// gs.addEventListener('click', goClick);
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const rc = document.querySelector('.red-circle');
console.log(rc);
console.log(rc.style.backgroundColor);

var goClick01 = function(eventas01) {
    //console.log('red', eventas01.target.style.backgroundColor);
    //console.log('pelė kliktelėjo');
    console.log(eventas01.target.style);
    // if (eventas01.target.style.backgroundColor === 'red') {
    //     eventas01.target.classList.add('gray');
    //     eventas01.target.style.backgroundColor = 'gray';
        
    // }
    // else {
    //     eventas01.target.classList.remove('gray');
    // }
    // if (rc.style.backgroundColor === 'red') {
    //     rc.style.backgroundColor = 'gray';
    // }
    // else {rc.style.backgroundColor = 'red';}
     if (eventas01.target.style.backgroundColor === 'red') {
         console.log('red', eventas01.target.style.backgroundColor);
        eventas01.target.classList.add('gray');
    }
    else {eventas01.target.classList.remove('gray')
    console.log('gray', eventas01.target.style.backgroundColor);
}

}

//eventas01.target.classList.toggle('gray');

rc.addEventListener('click', goClick01);

