
const linkas = document.querySelector('a');

const cvLink = 'https://www.cv.lt';
const vzLink = 'https://www.vz.lt';

console.log(linkas.getAttribute('href'));
console.log(linkas.setAttribute('title', 'verslo žinios'));

linkas.removeAttribute('href')

const vz = document.querySelector('#vz');
const cv = document.querySelector('#cv');

vz.addEventListener('click', () => linkas.setAttribute('href', vzLink));
cv.addEventListener('click', () => linkas.setAttribute('href', cvLink));
// ============== Užduotis
//Reikia padaryti 3 paveiksliukų "slaiderį" sy setAttribute metodu.

const pav = document.querySelector('.pav1');
// const img1 = 'img/Panoz-Abruzzi.jpg';
// const img2 = 'img/Trion-Nemesis.jpg';
// const img3 = 'img/W-Motors-Fenyr.jpg';

// const i1 = document.querySelector('#img1');
// const i2 = document.querySelector('#img2');
// const i3 = document.querySelector('#img3');

// i1.addEventListener('click', () => pav.setAttribute('src', img1));
// i2.addEventListener('click', () => pav.setAttribute('src', img2));
// i3.addEventListener('click', () => pav.setAttribute('src', img3));

// i1.addEventListener('click', () => pav.setAttribute('src', pav.dataset.cars1));
// i2.addEventListener('click', () => pav.setAttribute('src', pav.dataset.cars2));
// i3.addEventListener('click', () => pav.setAttribute('src', pav.dataset.cars3));

//console.log(pav.dataset.cars1);

document.querySelector('.buttons1').querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
       // const id = b.id;
        pav.setAttribute('src', pav.dataset[b.id]);
    })
})

// dataset-bla-bla ---> dataset.blaBla  // brūkšnelis dingsta ir vietoje jo naujas žodis pradedamas didžiąja raide, tai galioja bet kokiam brūkšnelių kiekiui

// ============== Forms

const labas = document.querySelector('[name=labas]');
const selis = document.querySelector('[name=selis]');
const selis2 = document.querySelector('[name=selis2]');
const selis3 = document.querySelector('[name=selis3]');
labas.addEventListener('input', () => {
    console.log(labas.value);

} )
// ============== pvz1
selis.addEventListener('input', () => {
    console.log(selis.value);
    pav.setAttribute('src', pav.dataset[selis.value]); 

} )
// ============== pvz2
selis2.addEventListener('input', (s) => { //s.target.value
    //console.log(selis.value);
    pav.setAttribute('src', s.target.value); 

} )

// ============== Inner HTML, Inner Text

const h1 = document.querySelector('h1');
const h1Input = document.querySelector('[name=h1]');
const h1Do = document.querySelector('#h1');
const h2Do = document.querySelector('#h2');

const html = '<h2>Labas vakaras</h2>';


h1Do.addEventListener('click', () => {
    //console.log(selis.value);
    const valueText = h1Input.value;
    h1.innerText = valueText;

} )

h1Input.addEventListener('input', () => {
    //console.log(selis.value);
    const valueText = h1Input.value;
    h1.innerText = valueText;

} )

h2Do.addEventListener('click', () => {
    //console.log(selis.value);
 //  document.body.innerHTML = html; //perrašo visą body tagą turiniu
 h1.innerHTML = html; // įrašo tik į elementą

} )

// ================= uždavinys
//selektas iš 3 pasirinkimų, kiekvienas iš jų įrašo pasveikinimą į h1 tagą

selis3.addEventListener('input', (s) => { //s.target.value
    console.log(selis3.value);
    h1.innerHTML = s.target.value; 

} )

// ================= uždavinys - dėstytojo sprendimas

const words = ['Labas Rytas', 'Laba Diena', 'Labas Vakaras'];
const h1d = document.querySelector('h1');

document.querySelector('#case-1').addEventListener('change', (select) => {
    h1d.innerText = select.target.value;
})

document.querySelector('#case-2').addEventListener('change', (select) => {
    h1d.innerText = words[select.target.value];
})
// ================= uždavinys 1
//Padaryti trijų pasirinkimų select, spalvų h1 tage keitmui
document.querySelector('#case-3').addEventListener('change', (select) => {
    h1d.style.color = select.target.value;
})
// ================= uždavinys 2
//Padaryti RESET mygtuką, kuris h1 tage pakeistų tekstą i "Hello"
document.querySelector('#reset').addEventListener('click', s => 
h1d.innerText = 'Hello');





