var one = 25;
var two = 26;

if (one > two) {

    console.log("\'one\'=", one, "didesnis už \'two\'=", two);

}
else if (two > one) {               // else if deklaracijų gali būti kiek nori, vykdymas nutrūksta kai randama true reikšmė

    console.log("\'two\'=", two, "didesnis už \'one\'=", one);

}

else {

    console.log("\'two\' lygus \'one\'");

}

// console.log("Labas");
// if (20 < 3) {
//     console.log("Tai tiesa");

// }
// else {
//     console.log("Tai netiesa");
// }

// console.log("Labanakt");

// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :

// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

var vardas = 'Nerius';
var pavarde = 'Pleškys';
var gmetai = 1976;
var data = 2021;
var sakinys = "Aš esu "+ vardas +' ' + pavarde + ". Man yra " + (data-gmetai) + " metai."

console.log(sakinys);

