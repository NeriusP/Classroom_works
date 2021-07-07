// 1. Atskiri elementai
//a.  Tamsiai žaliai nuspalvinti h1 tagą;
//b.  Tagui i pridėti klasę small;
//c.  Iš tago h1 pašalinti klasę main;
//d. Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
//e. Span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

// ========== 1a ==========

const tagH1 = document.querySelector('h1');
tagH1.style.color = 'darkgreen';

// ========== 1b ==========
document.querySelector('i').classList.add('small');

// ========== 1c ==========
tagH1.classList.remove('main');

// ========== 1d ==========
const tagH2poH1 = document.querySelector('h1 + h2');
tagH2poH1.classList.add('first');
tagH2poH1.classList.remove('main');

// ========== 1e ==========
const tagSpaninH2 = document.querySelector('h2 > span');
tagSpaninH2.style.fontSize = '10px';
tagSpaninH2.style.color = 'grey';

// 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a. Suskaičiuoti kiek yra h2 tagų;
// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
// d. Tagams kurie yra div su klase prices viduje pridėti klasę price-tag;
// e. Pabraukti visus tagus su klase new;
// f. Suskaičiuoti kiek yra gyvūnų kategorijų (jos yra ul tagai);
// g. Ul tagus apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;


// ========== 2a ==========
const allTagH2 = document.querySelectorAll('h2');
console.log(`H2 tagų yra ${allTagH2.length}`);

// ========== 2b ==========
const u2b = document.querySelectorAll('h2:not(.first)'); // išsiaiškinti sintaksę :not
console.log(`H2 tagų be klasės 'first' yra ${u2b.length}`);

// ========== 2c ==========
allTagH2.forEach(x => x.style.color = 'lightblue')
// for (let i = 0; i < allTagH2.length; i++){
//     allTagH2[i].style.color = 'lightblue';
// }

// ========== 2d ==========
const u2d = document.querySelectorAll('div.prices > *');
console.log(u2d);
u2d.forEach(x => x.classList.add('price-tag'));

// ========== 2e ==========
const u2e = document.querySelectorAll('.new');
console.log(u2e);
u2e.forEach(x => x.style.textDecoration = ('underline'));

// ========== 2f ==========
const u2f = document.querySelectorAll('ul');
console.log(u2f);
console.log(`Gyvūnų kategorijų yra ${u2f.length}`);

// ========== 2g ==========
const u2g = document.querySelectorAll('ul');
u2g.forEach(x => {
    x.style.border = '1px solid red';
    x.style.padding = '15px 50px';
})

// ========== 2h ==========
const u2h = document.querySelectorAll('ul li.new');
console.log(`Naujų gyvūnų yra ${u2h.length}`);

// ========== 2i ==========
const u2i = document.querySelectorAll('ul');
u2i.forEach(x => {
    let nauji = x.querySelectorAll('li.new');
    console.log(`${x.id} turi ${nauji.length} naują (-us) gyvūną(-us) `)
})

// 3. Elementų events
//a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
//b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
//c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
//d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;
//e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
//f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
//g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;

// ========== 3a ==========
const u3a1 = document.querySelector('#h1-color');
console.log(u3a1);
const changeH1color = function() {
    let u3tagH1 = document.querySelectorAll('h1');
    u3tagH1.forEach(x => x.style.color = 'lightgreen');
    console.log(u3tagH1);
    
}
u3a1.addEventListener('click', changeH1color);

const u3a2 = document.querySelector('#h1-font');
console.log(u3a2);
const changeH1font = function() {
    let u3tagH1 = document.querySelectorAll('h1');
    u3tagH1.forEach(x => x.style.fontSize = '10px');
    
}
u3a2.addEventListener('click', changeH1font);

// ========== 3b ==========

const u3b = document.querySelector('i');

const makeBold = el => el.target.style.fontWeight = 'bold';

u3b.addEventListener('click', makeBold);

// ========== 3c ==========
const u3c = document.querySelector('.prices');

const backgroundGray = el => {
    if (el.target.style.backgroundColor === '' || el.target.style.backgroundColor === 'white'){
        el.target.style.backgroundColor = 'gray';
    }
    else {el.target.style.backgroundColor = 'white'};
}

u3c.addEventListener('click', backgroundGray);

// ========== 3d ==========
//d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;

const u3d = document.querySelector('#contacts');
const addColor = el => {
    el.target.style.color = 'orange';
}

u3d.addEventListener('click', addColor);
// ========== 3e ==========
//e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts,
// tagui su id contacts būtų pridėta css savybė fontSize = 20px;

const u3e = document.querySelector('#contacts u');

const incSize = e => {
    e.stopPropagation();
    e.target.closest('div').style.fontSize = '20px';};

u3e.addEventListener('click', incSize);

// ========== 3f ==========
//f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, 
// pridėtos tage su id contacts savybės būtų panaikintos 
//https://stackoverflow.com/questions/18691655/remove-style-on-element

const u3f = document.querySelector('#contacts b');
console.log(u3f);

const removeStyle = e => {
    e.stopPropagation();
    e.target.closest('div').style.fontSize = null;
    e.target.closest('div').style.color = null;
    //e.target.nextSibling.style.fontSize = null;
};

u3f.addEventListener('click', removeStyle);

// ========== 3g ==========
//g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;

const u3g1 = document.querySelector('#h1-color-back');
console.log(u3a1);

const returnH1color = function() {
    let u3tagH1 = document.querySelectorAll('h1');
    u3tagH1.forEach(x => x.style.color = null);
    console.log(u3tagH1);
    
}
u3g1.addEventListener('click', returnH1color);

const u3g2 = document.querySelector('#h1-font-back');
console.log(u3g2);

const returnH1font = function() {
    let u3tagH1 = document.querySelectorAll('h1');
    u3tagH1.forEach(x => x.style.fontSize = null);
    
}
u3g2.addEventListener('click', returnH1font);



// 4. Elementų grupių events
// a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
// c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

// ========== 4a ==========
const u4a = document.querySelectorAll('li.new');
console.log(u4a);

const getColor = e => {
    e.stopPropagation();
    e.target.style.color = 'red';
}


u4a.forEach(e => e.addEventListener('dblclick', getColor));

// ========== 4b ==========

const u4b = document.querySelectorAll('li:not(.like-button)');
console.log(u4b);

const increaseFont = e => {
    e.stopPropagation();
    e.target.style.fontSize = '130%';
}

u4b.forEach(e => e.addEventListener('click', increaseFont));

// ========== 4c ==========

const u4c = document.querySelectorAll('li.like-button');
console.log(u4c);

const addLike = e => e.target.closest('ul').classList.add('like');

u4c.forEach(x => x.addEventListener('click', addLike));

// ========== 5a ==========

//Dinaminis elementų kūrimas
//Dinamiškai su JS pridėti naują kainą Senjorai tik: 1.99 

const nKaina = document.createElement('h2');
//console.log(nKaina);
//const senjorai = document.createTextNode('Senjorai tik: 1.99');
//console.log(senjorai);
//const senjoruKaina = nKaina.appendChild(senjorai);
console.log(nKaina);
nKaina.appendChild(document.createTextNode('Senjorai tik: 1.99 €'));
//console.log(senjoruKaina);
document.querySelector('div.prices').appendChild(nKaina);

//document.querySelector('div.prices').appendChild((document.createElement('h2').appendChild(document.createTextNode('Senjorai tik: 1.99'))));

// ========== 5b ==========
//Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” 
//Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

const nKaina2 = document.createElement('h2');
nKaina2.classList.add('new');
nKaina2.appendChild(document.createTextNode('Senjorų grupė iki 10 asmenų: tik 5.99 €'));
console.log(nKaina2);
//const naujaK2 = 
document.querySelector('div.prices').appendChild(nKaina2);
//console.log(naujaK2);
nKaina2.addEventListener('click', e => e.target.style.color = 'green');

// ========== 5c ==========
//Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą 
//“NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

// const nepatinka = document.createElement('li');
//nepatinka.classList.add('like-button');
//nepatinka.appendChild(document.createTextNode('NEPATINKA'));

document.querySelectorAll('ul').forEach(x => {
    let nepatinka = document.createElement('li');
    nepatinka.classList.add('like-button');
    nepatinka.appendChild(document.createTextNode('NEPATINKA'));
    //x.appendChild(nepatinka);
    x.insertBefore(nepatinka, x.querySelector('li:not(.like-button)'));
    nepatinka.addEventListener('click', e => e.target.closest('ul').classList.remove('like'));
   // console.log(nepatinka)
});

// ========== 5d ==========
//Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą 
//kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. 
//Mygtukai turi daryti tai kas ant jų parašyta

const uz5d = document.createElement('fieldset'); // sukuriamas fieldseto tagas
const uz5l = document.createElement('legend'); //sukuriamas legend tagas
uz5l.appendChild(document.createTextNode('HEADER 3')); // į legend tagą įdedamas takstas
const uz5b1 = document.createElement('button'); // sukuriamas button 1 tagas
uz5b1.id = 'h1-underline'; // button 1 gauna id
uz5b1.appendChild(document.createTextNode('Pabraukti H1 tagą')); // button 1 užrašas
const uz5b2 = document.createElement('button'); // sukuriamas button 2 tagas
uz5b2.id = 'h1-no-underline'; // button 2 gauna id
uz5b2.appendChild(document.createTextNode('Nepabraukti H1 tago')); // button 2 užrašas
uz5b2.style.marginLeft = '4px'; // kodėl reikia???
uz5d.appendChild(uz5l); // visi elementai sudedami į fieldset tagą
uz5d.appendChild(uz5b1);
uz5d.appendChild(uz5b2);
console.log(uz5d);
//const headerListas = document.querySelectorAll('fieldset');
document.querySelector('body').insertBefore(uz5d, document.querySelector('div#contacts')); // fieldsetas įdedamas į body prieš kontaktus
uz5b1.addEventListener('click', () => {
    document.querySelectorAll('H1').forEach(x => x.style.textDecoration = 'underline')   //pridėtas eventlisteneris button 1 - pabraukti
});
uz5b2.addEventListener('click', () => {
    document.querySelectorAll('H1').forEach(x => x.style.textDecoration = 'none')       //pridėtas eventlisteneris button 2 - nebraukti
});
