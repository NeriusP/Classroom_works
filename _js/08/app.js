function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var komoda = ['obuolys', 'gyvate', 58, 'geles plastikines', 'suo'];

console.log (komoda);
console.log (komoda[2]);

komoda[2]++;
console.log (komoda[2]);
console.log ('masyvo ilgis', komoda.length);
console.log (komoda[komoda.length - 1]);
console.log ('==================================');
for (var i = 0; i < komoda.length; i++) {
    console.log ('Stalčius nr.', i, ':', komoda[i]);
}

var masyvas01 = ['pirmas', 'antras', 'trečias', 0, komoda];

console.log (masyvas01);
console.log ('masyvo ilgis', masyvas01.length);
console.log (masyvas01[masyvas01.length - 1]);
console.log ('==================================');
for (var i = 0; i < masyvas01.length; i++) {
    console.log ('Stalčius nr.', i, ':', masyvas01[i]);
}

var int = komoda.push('pele', 'arklys'); //prideda į galą ir grąžina naują masyvo ilgį
console.log (komoda);
console.log ('int =', int);

komoda.unshift('padanga'); // prideda elementą į masyvo pradžią, visus elementus perstumdamas tolyn ir grąžina naują masyvo ilgį
console.log (komoda);
console.log (komoda.shift()); // ištraukia elementą iš masyvo pradžios ir paslenka visus elementus į pradžią - grąžina ištrauktą elementą
console.log (komoda.shift());
komoda.shift();
console.log (komoda);
console.log (komoda.pop()); // / ištraukia elementą iš masyvo pabaigos ir grąžina ištrauktą elementą
console.log (komoda);
//=============================================
var tuscias = [];

for (var j = 0; j < 10; j++) {
    tuscias[j] = rand(1, 10);
}
console.log (tuscias);
//=============================================
var tuscias = [];

for (var j = 0; j < 10; j++) {
    tuscias.push (rand(1, 10));
}
console.log (tuscias);
//alert(tuscias);

var b = komoda.indexOf('suo'); // randa pirmą objekto indexą ir nutraukia paiešką
console.log (b);
console.log (komoda.splice(b, 1));

var trinti;
var sk = [58, 45, 32, 47, 58, 32, 100, 147, 32];

// do {
// trinti = sk.indexOf(32);
// sk.splice (trinti, 1);
// }
while ((trinti = sk.indexOf(58)) >= 0) {
    sk.splice (trinti, 1);
}

console.log (sk);
console.log (komoda.slice()); // padaro masyvo kopiją tuo momentu, kuri skiriasi nuo vaizdo konsolėje, todėl patogu naudojant debuginimui