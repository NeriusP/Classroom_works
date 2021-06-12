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
for (let i = 0; i < allTagH2.length; i++){
    allTagH2[i].style.color = 'lightblue';
}

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
    u3tagH1.forEach(x => x.style.color = 'blue');
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





