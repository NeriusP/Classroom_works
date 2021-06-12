function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var animal;

if (rand(0, 1) === 0){
    animal = 'Dramblys';
}
else {
    animal = 'Asilas';
}

console.log('animal', animal);

var animal2 = (rand(0, 1) === 0) ? 'Dramblys' : 'Asilas' // '?' ir ':' reiškia tą patį, ką ir "if" "else"

console.log('animal2', animal2);

//Šios reikšmės if'e visuomet virsta į false
// false
// undefined
// null
// NaN
// 0
// "" (empty string)

// '!' prieš reikšmę veria ją į boolean'ą ir suteikia jai priešingą reikšmę
// 
var bird 
var now = bird;
console.log('now', now);

//var now = (typeof bird === 'undefined') ? 'zylute' : bird;

var now = bird ?? 'zylute'; // du klaustukai reiškia, kad jei kode yra 'undefined' ir 'null' reikšmės, prikiria atsarginį variantą;

console.log('now', now);

// ===== Loginiai operatoriai

// ! neigimas

console.log(!1) //false
console.log(!!1)  // true

// ARBA || OR
//IR && AND

console.log(!1 || !!1) // false OR true -> true, operatorių deklracijoje gali būti kiek nori 
console.log(!1 && !!1) // false AND true -> false

var a1 = null;
var a2 = 15;
var a3 = 1;

// priskyrimo operatorius 
var end = a1 || a2 || a3; // priskiria 'end' kintamajam pirmąjį rezultatą, kuris turi 'true' reikšmę
console.log(end); // priskiria a2, nes tai pirmoji true reikšmė, kai a1 = 0. Jei neranda, lieka paskutinė reikšmė, kuri yra 'false'.

var end2 = a1 && a2 && a3; // šis priskyrimo operatorius ieško neigiamos - false reikšmės ir eina per visus elementus, jei neranda false, lieka priskirta paskutinė tikrinta reikšmė, kuri yra - true.
console.log(end2); 

var end3 = a1 ?? a2 ?? a3; // ieškoma pirma reikšmė, kuri yra ne 'null' ir ne 'undefined'
console.log(end3); 



