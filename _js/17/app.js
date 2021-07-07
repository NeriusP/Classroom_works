function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// nuspalvinti linką žaliai ir h1 raudonai
//================= a dalis

const a01 = document.querySelector('a');
a01.style.color = 'green';

const a02 = document.querySelector('h1');
a02.style.color = 'red';

//
//================= b dalis

var changeColor = function(eventas) {
    //eventas.target.style.color = 'blue';
    eventas.preventDefault(); // preventDefault() panaikina defaultinį elemento elgesį, pvz. neperkrauna psl. paspaudus ant linko šiuo atveju
    a02.style.color = 'blue';
}

var disappear = function(eventas) {
    eventas.target.style.display = "none";
    }

a01.addEventListener('click', changeColor);

//================= c dalis

// const a03 = document.querySelectorAll('div');
// console.log(a03);

// for (let i = 0; i < a03.length; i++){
//     a03[i].addEventListener('click', disappear);
// }


//================= d dalis
// const trinti = function(eventas) {
//     eventas.target.remove();          // remove() metodas panaikina objektą iš html
// }

// const a04 = document.querySelectorAll('div');
// console.log(a04);

// for (let i = 0; i < a04.length; i++){
//     a04[i].addEventListener('click', trinti);
// }


// const removeParent = function(eventas) {
//     console.log(eventas.target.closest('span'));
//   //  eventas.target.closest('span').remove();        // closest() metodas pasiekia viršuje esantį elementą (tėvą)
//     //eventas.target.remove();
// }

// const a05 = document.querySelectorAll('div span'); // atkreipti dėmesį, kad closest() neveikia, jei abu tagai  - dukros ir tėvo - yra vienodi
// console.log(a05);

// for (let i = 0; i < a05.length; i++){
//         a05[i].addEventListener('click', removeParent);
// }

//================= Paskaita

const newDukra = document.createElement('span'); // sukuriamas naujas span

const nameOfDukra = document.createTextNode('-Dukra 2-'); // sukuriamas tekstas

newDukra.appendChild(nameOfDukra); // tekstas įdedamas į sukurtą spaną

const oldDukra = document.querySelector('span'); //randam spaną, prieš kurį įterpsim elementą
const tevas = document.querySelector('i'); // randam tėvą, į kurį dėsim elementą

tevas.insertBefore(newDukra, oldDukra); // nurodomas tėvas, tada įdedama su argumentais (kąDedam, priešKąDedam)

//console.log(oldDukra);

tevas.appendChild(newDukra); // šis metodas įdės elementą į tėvinio elemento galą

//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

//insertAfter metodas neegzistuoja

//================= užduotis F

// const allh2 = document.querySelectorAll('h2');
// console.log(allh2);


// for (let i = 0; i < allh2.length; i++) {
//     let newSpan = document.createElement('span');
//     let spanTxt = document.createTextNode(`Aloha ${i}`);
//     newSpan.appendChild(spanTxt);
//     allh2[i].appendChild(newSpan);
// }

//================= užduotis G

let parenth5 = document.querySelector('h5');


for (let j = 0; j < 5; j++){
    let newH3 = document.createElement('h3');
    parenth5 = parenth5.appendChild(newH3);
   // parenth5 = naujastevas;
}


