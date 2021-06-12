function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =============== Nr. 1 ===============
/*Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.*/

console.log('=============== Nr. 1 ===============');
console.log('');

var masyvas_01 = []

for (var i = 0; i < 30; i++) {
    masyvas_01.push(rand(5, 25));
}
console.log('masyvas_01:', masyvas_01);
console.log('');

// =============== Nr. 2 a ===============
/*Naudodamiesi 1 uždavinio masyvu:
Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;*/

console.log('=============== Nr. 2 a ===============');
console.log('');

var masyvas_02 = [];
var counter = 0;

for (var i = 0; i < 30; i++) {
    masyvas_02.push(rand(5, 25));
    if (masyvas_02[i] > 10) {
        counter++;
    }
}
console.log('masyvas_02:', masyvas_02);
console.log('masyvas_02 turi', counter, 'reikšmes (-ių), kurios > 10 ');
console.log('');

// =============== Nr. 2 b ===============
/*b) Raskite didžiausią masyvo reikšmę ir jos indeksą;*/

console.log('=============== Nr. 2 b ===============');
console.log('');

var masyvas_02b = [];
var max_value;
var max_index = [];

for (var i = 0; i < 30; i++) {
    masyvas_02b.push(rand(5, 25));
           
    if (i !== 0) {
        if (masyvas_02b[i] > max_value) {
            max_value = masyvas_02b[i];
            max_index = [];
        }    
        if (masyvas_02b[i] === max_value) {
            max_index.push(i);
        }
    }
    else {
        max_value = masyvas_02b[i];
        max_index.push(i);
    }
}
console.log('masyvas_02b:', masyvas_02b);
console.log('masyvas_02b didžiausia reikšmė:', max_value, ', o jos indexas:', max_index);
console.log('');

// =============== Nr. 2 c ===============
/*c) Suskaičiuokite visų porinių indeksų reikšmių sumą*/

console.log('=============== Nr. 2 c ===============');
console.log('');

var masyvas_02c = [];
var suma = 0;
var string = '';


for (var i = 0; i < 30; i++) {
    masyvas_02c.push(rand(5, 25));
        
            if (i % 2 === 0) {
                if (i !==0) {   
                    string += ' + ';
                } 
                suma += masyvas_02c[i];
                string += masyvas_02c[i];
            } 
        
                
   
  
}
console.log('masyvas_02c:', masyvas_02c);
console.log('masyvo_02c lyginių indeksų suma:',string, '=', suma);
console.log('');

// =============== Nr. 2 d ===============
/*Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;*/

console.log('=============== Nr. 2 d ===============');
console.log('');

var masyvas_02d = [];
var masyvas_02d_naujas = [];


for (var i = 0; i < 30; i++) {
    masyvas_02d.push(rand(5, 25));
    masyvas_02d_naujas.push(masyvas_02d[i] - i);    
 }
console.log('masyvas_02d:');
console.log(masyvas_02d);
console.log('naujas masyvas, gautas iš masyvas_02d reikšmių atėmus indeksus:');
console.log(masyvas_02d_naujas);
console.log('');

// =============== Nr. 2 e ===============
/*Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;*/


console.log('=============== Nr. 2 e ===============');
console.log('');

var masyvas_02e = [];

for (var i = 0; i < 30; i++) {
    masyvas_02e.push(rand(5, 25));
 }
 console.log('masyvas_02e:');
 console.log(masyvas_02e);
 for (var j = 0; j < 10; j++) {
    masyvas_02e.push(rand(5, 25));
 }
console.log('Papildytas masyvas_02e:');
console.log(masyvas_02e);
console.log('');

// =============== Nr. 2 f ===============
/*Iš masyvo elementų sukurkite du naujus masyvus. 
Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;*/

console.log('=============== Nr. 2 f ===============');
console.log('');

var masyvas_02f = [];
var masyvas_02f_lyg = [];
var masyvas_02f_nelyg = [];

for (var i = 0; i < 30; i++) {
    masyvas_02f.push(rand(5, 25));
    if (i % 2 === 0) {
        masyvas_02f_lyg.push(masyvas_02f[i]) 
    }
    else {
        masyvas_02f_nelyg.push(masyvas_02f[i]) 
    }
 }
 console.log('masyvas_02f:');
 console.log(masyvas_02f);

console.log('Lyginių indeksų masyvas:');
console.log(masyvas_02f_lyg);
console.log('Nelyginių indeksų masyvas:');
console.log(masyvas_02f_nelyg);
console.log('');

// =============== Nr. 2 g ===============
/*Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;*/

console.log('=============== Nr. 2 g ===============');
console.log('');

var masyvas_02g = [];

for (var i = 0; i < 30; i++) {
    masyvas_02g.push(rand(5, 25));
}
console.log('masyvas_02g:');
console.log(masyvas_02g);
for (i = 0; i < masyvas_02g.length; i++){ // arba sukti ciklą su i += 2
    if (i % 2 === 0) {
        if (masyvas_02g[i] > 15) {
          masyvas_02g[i] = 0;  
        } 
    }    
}
console.log('Naujas masyvas_02g, kuriame lyginių indeksų elementai, kurie > 15, pakeisti į 0:');
console.log(masyvas_02g);
console.log('');

// =============== Nr. 2 g  sprendimas su splice() ===============
/*Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;*/

console.log('=============== Nr. 2 g sprendimas su splice() ===============');
console.log('');

var masyvas_02g = [];

for (var i = 0; i < 30; i++) {
    masyvas_02g.push(rand(5, 25));
}
console.log('masyvas_02g:');
console.log(masyvas_02g);
for (i = 0; i < masyvas_02g.length; i++){
    if (i % 2 === 0) {
        if (masyvas_02g[i] > 15) {
          masyvas_02g.splice(i, 1, 0);  
        } 
    }    
}
console.log('Naujas masyvas_02g, kuriame lyginių indeksų elementai, kurie > 15, pakeisti į 0:');
console.log(masyvas_02g);
console.log('');



// =============== Nr. 2 h ===============
/*Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;*/
console.log('=============== Nr. 2 h ===============');
console.log('');

var masyvas_02h = [];
var indeksas = -1;

for (var i = 0; i < 30; i++) {
    masyvas_02h.push(rand(5, 25));
    if (masyvas_02h[i] > 10 && indeksas < 0) {
        indeksas = i;
    }
    
}
console.log('masyvas_02h:');
console.log(masyvas_02h);
console.log('Pirmas indeksas, kurio elemento reikšmė didesnė už 10:', indeksas);
console.log('');

// =============== Nr. 2 i ===============
/*Naudodami funkciją splice() iš masyvo ištrinkite visus elementus turinčius porinį indeksą;*/
console.log('=============== Nr. 2 i ===============');
console.log('');

var masyvas_02i = [];
var masyvo_dydis;

for (var i = 0; i < 30; i++) {
    masyvas_02i.push(rand(5, 25));
}
console.log('masyvas_02i:');
console.log(masyvas_02i);

for (i = 0; i < masyvas_02i.length; i++){
    // console.log('i prieš =', i);
        masyvas_02i.splice(i, 1);
                // console.log('i po =', i);
       
}
console.log('Naujas masyvas_02i, kuriame pašalinti lyginių indeksų elementai:');
console.log(masyvas_02i);
console.log('');

// =============== Nr. 3 ===============
/*Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. 
Suskaičiuokite kiek yra kiekvienos raidės.*/

console.log('=============== Nr. 3 ===============');
console.log('');

var masyvas_03 = [];
var raide;
var raide_A = 0;
var raide_B = 0;
var raide_C = 0;
var raide_D = 0;
for (var i = 0; i < 200; i++) {
    raide = rand(0, 3);
    ( raide === 0 ) ? (masyvas_03.push('A'), raide_A++) :( raide === 1 ) ? (masyvas_03.push('B'), raide_B++) : ( raide === 2 ) ? (masyvas_03.push('C'), raide_C++) : (masyvas_03.push('D'), raide_D++);
}
console.log('Raidžių masyvas_03:');
console.log(masyvas_03);

console.log('Raidžių A:', raide_A, 'Raidžių B:', raide_B, 'Raidžių C:', raide_C, 'Raidžių D:', raide_D, 'Viso:', raide_A+raide_B+raide_C+raide_D);

// =============== Nr. 4 ===============
/*Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, 
sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) 
reikšmių ir kiek unikalių kombinacijų gavote.
*/

console.log('=============== Nr. 4 ===============');
console.log('');

var masyvas_04_1 = [];
var masyvas_04_2 = [];
var masyvas_04_3 = [];
var masyvas_04_4 = [];
var raide;
var raide_A = 0;
var raide_B = 0;
var raide_C = 0;
var raide_D = 0;
let masyvas_poviena = [];
var pasikartoja = 0;
let masyvas_unikalios = [];

for (let i = 0; i < 200; i++) {
    raide = rand(0, 3);
    ( raide === 0 ) ? (masyvas_04_1.push('A'), raide_A++) :( raide === 1 ) ? (masyvas_04_1.push('B'), raide_B++) : ( raide === 2 ) ? (masyvas_04_1.push('C'), raide_C++) : (masyvas_04_1.push('D'), raide_D++);
    raide = rand(0, 3);
    ( raide === 0 ) ? (masyvas_04_2.push('A'), raide_A++) :( raide === 1 ) ? (masyvas_04_2.push('B'), raide_B++) : ( raide === 2 ) ? (masyvas_04_2.push('C'), raide_C++) : (masyvas_04_2.push('D'), raide_D++);
    raide = rand(0, 3);
    ( raide === 0 ) ? (masyvas_04_3.push('A'), raide_A++) :( raide === 1 ) ? (masyvas_04_3.push('B'), raide_B++) : ( raide === 2 ) ? (masyvas_04_3.push('C'), raide_C++) : (masyvas_04_3.push('D'), raide_D++);
}
console.log('Raidžių masyvas 01:');
console.log(masyvas_04_1);
console.log('Raidžių masyvas 02:');
console.log(masyvas_04_2);
console.log('Raidžių masyvas 03:');
console.log(masyvas_04_3);

for (let j = 0; j < 200; j++) {
    masyvas_04_4.push(masyvas_04_1[j] + masyvas_04_2[j] + masyvas_04_3[j]);
}

console.log('Raidžių masyvas 04:');
console.log(masyvas_04_4);

for (let i = 0; i < masyvas_04_4.length; i++) {
 if (masyvas_unikalios.indexOf(masyvas_04_4[i]) === -1)  {
    masyvas_unikalios.push(masyvas_04_4[i]);
    masyvas_poviena.push(masyvas_04_4[i]);
    //console.log ('masyvas_poviena:', masyvas_poviena);
 }
 else {
    pasikartoja = masyvas_poviena.indexOf(masyvas_04_4[i])
    if (pasikartoja !== -1) {
        masyvas_poviena.splice(pasikartoja, 1);
    }
 }
}

console.log('Unikalių reikšmių masyvas:', masyvas_unikalios);
console.log('Reikšmių, esančių po 1, masyvas:', masyvas_poviena);

//=============== Nr. 5 ===============
/*Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).*/

console.log('=============== Nr. 5 ===============');
console.log('');

var masyvas_05_1 = [];
var masyvas_05_2 = [];
const masyvas_05_3 = [[],[]]
//var random;

// for (let j = 0; j < 2;+ j++) {
//     do {
//         let random = rand(100, 999);
//         if (masyvas_05_3[j].indexOf(random) === -1) {
//             masyvas_05_3[j].push(random);
//         }    
//     }
//   while (masyvas_05_3[j].length < 100);
// }   

// console.log('Unikalių skaičių masyvai 05-2:', masyvas_05_3);    

do {
    random = rand(100, 999);
    if (masyvas_05_1.indexOf(random) === -1) {
        masyvas_05_1.push(random);
    }
}
while (masyvas_05_1.length !== 100)
console.log('Unikalių skaičių masyvas 05-1:', masyvas_05_1);    

do {
    random = rand(100, 999);
    if (masyvas_05_2.indexOf(random) === -1) {
        masyvas_05_2.push(random);
    }
}
while (masyvas_05_2.length !== 100)


console.log('Unikalių skaičių masyvas 05-2:', masyvas_05_2);    

//=============== Nr. 6 ===============
/*Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, 
kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.*/
console.log('=============== Nr. 6 ===============');
console.log('');

var masyvas_06 = [];
for (var i = 0; i < 100; i++) {
    if (masyvas_05_2.indexOf(masyvas_05_1[i]) === -1) {
        masyvas_06.push(masyvas_05_1[i]);
    }
}
console.log('Unikalių skaičių masyvas 06:', masyvas_06);



//=============== Nr. 7 ===============
/*Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose. */

console.log('=============== Nr. 7 ===============');
console.log('');
var masyvas_07 = [];
for (var i = 0; i < 100; i++) {
    if (masyvas_05_2.indexOf(masyvas_05_1[i]) !== -1) {
        masyvas_07.push(masyvas_05_1[i]);
    }
}
console.log('Pasikartojančių skaičių masyvas 07:', masyvas_07);

//=============== Nr. 8 ===============
/*Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio
 masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo. */

console.log('=============== Nr. 8 ===============');
console.log('');



var masyvas_08 = [];

for (var i = 0; i < 100; i++) {
    masyvas_08[masyvas_05_1[i]] = masyvas_05_2[i];
}

console.log('Skaičių masyvas 08:', masyvas_08);

//=============== Nr. 9 ===============
/*Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
 Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.. */

 console.log('=============== Nr. 9 ===============');
 console.log('');

 var masyvas_09 = [];
 
for (let i = 0; i < 10; i++){
     i === 0 ? masyvas_09.push(rand(5, 25)) : i === 1 ? masyvas_09.push(rand(5, 25)) : masyvas_09.push(masyvas_09[i-1]+masyvas_09[i-2]);
}
console.log('Skaičių masyvas 09:', masyvas_09);









