// Skaičių palyginimas

console.log (2 > 1);
console.log (2 > 3);
console.log (typeof(2 > 3));
console.log ('2 < 3', 2 < 3);
console.log ('2 == 3', 2 == 3); //lygu
console.log ('2 != 3', 2 != 3); //nelygu
console.log ('2 >= 3', 2 >= 3); // daugiau arba lygu
console.log ('2 <= 3', 2 <= 3); // mažiau arba lygu

// Stringų palyginimas

console.log ('a == z', 'a' == 'z'); //lygu
console.log ('a != z', 'a' != 'z'); //lygu
console.log ('a > z', 'a' > 'z'); // daugiau - false, nes lyginama pagal abėcėlinę tvarką
console.log ('AA > AB', 'AB' > 'AA'); // daugiau - true, nes lyginama pagal abėcėlinę tvarką
console.log ('CA > BB', 'CA' > 'BB'); // daugiau - true, nes lyginama pagal abėcėlinę tvarką, pirma lyginamos pirmį stringų elementai, po to antri ir t.t.
console.log ('CAA > CA', 'CAA' > 'CA'); // daugiau - true, nes lyginama pagal abėcėlinę tvarką, o raidė yra > už NUL.
console.log ('A == a', 'A' == 'a'); // didžiosios ir mažosios raidės nelygios, mažosios raidės yra didesnės už didžiąsias
console.log ('A > a', 'A' > 'a'); // false, nes unicode pirmiau eina didžiosios raidės, o po to mažosios
console.log ('a > Z', 'a' > 'Z');  // true
console.log ('ą > a', 'ą' > 'a');  // true - simbolinės raidės yra unicode gale ir turi didžiausias reikšmes
console.log ('@ > A', '@' > 'A');  // false - simbolis @ yra unicode prieš didžiąsias raides

// Mišrus - stringų ir skaičių palyginimas

var number = 2;
var string = '2';

console.log ('2 == "2"', number == string); // galima lyginti, nes tipus suvienodina, ir stringą paverčia į number'į

console.log ('1 == "01"', 1 == "01"); // tas pats

console.log ('1 == "A"', 1 == "A"); // raidės paversti į skaičių negali, todėl lygina su NAN

console.log ('1 === "1"', 1 === "1"); // identiškas palyginimas, šiuo atveju pirmiau patikrina, ar elementai yra to paties tipo, o tik po to lyginamos jų reikšmės

console.log ('1 !== "1"', 1 !== "1"); // neidentiškumo palyginimas

console.log ('false == 0', false == 0); // false reikšmė yra lygi 0, o true - 1

console.log ('1 !== "1"', true + 3); // true paverčia į 1

console.log ('"" == false', ""== false); // tuščias stringas verčiamas į 0, false irgi į 0

console.log ('"" === false', ""=== false); // bet tuščias stringas nėra identiškas false


var nothing = null; // niekas, tušia vieta, vakuumas
var undefined; // dar neaišku, kas bus
console.log (typeof nothing ); // null elemento tipas JS yra objektas, tai nėra tas pats, kas undefined kintamasis
console.log (typeof undefined ); // nepriskirtas kintamasis

console.log ('undefined == null', undefined == nothing); // undefined yra lygus null
console.log ('undefined === null', undefined === nothing); // bet jie nėra vienodi

console.log ('0 == null', nothing == 0); // NULL nėra lygus nuliui, tačiau verčiant jį į numer, jis virsta į nulį
console.log ('++nothing', ++nothing); // virsta į nulį ir padidėja vienetu
console.log ('++undefined', ++undefined); // undefined į 0 nevirsta 

console.log ('null >= 0', null >= 0); // !!!! kraštutinis atvejis, nes kitaip veikia >=, nei ==


//Vieno kintamojo vertimas kitu

var bool = true;
console.log (typeof bool );
//verčiam į stringą
console.log(String(bool));
bool = String(bool);
console.log (typeof bool );
var bool2 = false;
console.log (typeof bool2 );
bool2 = Number(bool2);
console.log (typeof bool2 );
console.log (bool2);

var strange = "    00555.555 ";
strange = Number (strange);
console.log(strange);