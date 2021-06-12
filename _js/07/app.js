function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < 5; i++) {

    if (i === 3) {
        break; // išeina iš ciklo, praleisdamas viską, kas viduje
    }
    console.log(i);
}

console.log("The End");
//===============================

for (var i = 0; i < 5; i++) {

    if (i === 3) {
        continue; // nutraukia vieną iteraciją ir tęsia ciklą toliau
    }
    console.log(i);
}

console.log("The End");
//===============================
for (var i = 0; i < 5; i++) {

    if (i !== 3) {
        // continue; // galima lengvai pakeisti su if
        console.log(i);
    }
    
}

console.log("The End");
//================i ir j===============
senelis: for (var z = 0; z < 5; z++) {
tevas: for (var j = 0; j < 5; j++) {
pats:   for (var i = 0; i < 5; i++) {

        if (i === 3) {
         //   break senelis; // galima breakinti ir išorinį ciklą, nustačius label'ą
         continue senelis; // nutraukia viduje esančius ciklus ir grįžta į viršutinį
        }
        console.log(j, i, z);
    }
}
}

//============================================

console.log('=============== Break pvz. su Nr. 8a ===============');
console.log('');


var uzd08a_kint01;
var uzd08a_counter = 0;
do {
    uzd08a_kint01 = rand (10, 25);
    
    if (uzd08a_kint01 >= 20) {
        break;
    }
    console.log (uzd08a_kint01)
    
}
while (true)
console.log (uzd08a_kint01)
console.log('Pabaiga');

//============================================
console.log('=============== Switch naudojimas ===============');
console.log('');
var A = 10;

// if (A === 6) {
//     console.log('A = 6');
// }

// else if (A === 8) {
//     console.log('A = 8');
// }

// else if (A === 10) {
//     console.log('A = 10');
// }

// else {
//     console.log('A = nei 6. nei 8, nei 10');
// }

// čia parodytas netinkamas???? switch naudojimas, nes naudojami break'ai
switch (A) {
    case 6: console.log('A = 6');
    break;
    case 8: console.log('A = 8');
    break;
    case 10: console.log('A = 10');
    break;
    default: console.log('A = nei 6. nei 8, nei 10');
}


// čia parodytas tinkamas switch naudojimas
//OMNIVA
//S, M, L, XL

var pack ='M';

switch (pack) {  // sąlyga eina per visus variantus
    case 'S': console.log('galim dėti į S, M, L, XL');
    case 'M': console.log('galim dėti į M, L, XL'); 
   // continue;
    case 'L': console.log('galim dėti į L, XL');
    default: console.log('galim dėti į XL');
}

// norint išeiti iš switch, naudojamas break;
