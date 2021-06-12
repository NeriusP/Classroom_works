function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =============== Nr. 1 ===============
/*1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5 - 25; 
Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspausdinkite sumos kintamąjį;*/

 console.log('=============== Nr. 1 ===============');
 console.log('');
var uzd01_kint1 = rand (5, 25);
var uzd01_kint2 = rand (5, 25);
var uzd01_kint3 = rand (5, 25);

var suma = uzd01_kint1 + uzd01_kint2 + uzd01_kint3;
console.log ("",uzd01_kint1, '+', uzd01_kint2, "+", uzd01_kint3, '=', suma);
console.log('');

// =============== Nr. 1a ===============
/*2.Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;*/

console.log('=============== Nr. 1a ===============');
console.log('');
var uzd02_kint1 = rand (5, 25);
var uzd02_kint2 = rand (5, 24);
var uzd02_kint3 = rand (5, 25);
var stringas = '' + uzd02_kint1 + uzd02_kint2 + uzd02_kint3;
console.log ("",uzd02_kint1, '', uzd02_kint2, '', uzd02_kint3);
console.log (stringas);
console.log('');
// =============== Nr. 7 a ===============
/*7 Sukurkite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija
rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo
ribų ir jį atspauzdinkite;*/

console.log('=============== Nr. 7a ===============');
console.log('');
var uzd07_kint1;
var uzd07_kint2;
for (var i = 0; i < 5; i++) {
    uzd07_kint1 = rand (10, 20);
    console.log (uzd07_kint1); 
}

/*Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam,
kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log
už ciklo ribų*/
console.log('=============== Nr. 7b ===============');

console.log('');
var uzd07b_kint1 = 0;
var uzd07b_kint2 = '';
for (var i = 0; i < 5; i++) {
      uzd07b_kint1 += rand (10, 20);
    
}
console.log (uzd07b_kint1);

console.log('=============== Nr. 7c ===============');

console.log('');
var uzd07c_kint1;
var uzd07c_kint2 = '';
for (var i = 0; i < 5; i++) {
    if (i !== 0) {
        uzd07c_kint2 += " ";
    }
    uzd07c_kint1 = rand (10, 20);
    uzd07c_kint2 += rand (10, 20);
    
}
console.log (uzd07c_kint2);

console.log('=============== Nr. 7d ===============');

console.log('');
var uzd07d_kint1;
var suma = 0;
var uzd07d_kint2 = '';
for (var i = 0; i < 5; i++) {
    if (i !== 0) {
        uzd07d_kint2 += " ";
    }
    uzd07d_kint1 = rand (10, 20);
    uzd07d_kint2 += rand (10, 20);
    suma += uzd07d_kint1;
    
}
uzd07d_kint2 += " " + suma;
console.log (uzd07d_kint2);







// =============== Nr. 8 ===============
/*8. Sukurkite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Sukurkite kintamąjį už ciklo ribų. 
Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10-25. 
Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;*/

console.log('=============== Nr. 8 ===============');
console.log('');


var uzd08_kint01;
do {
    uzd08_kint01 = rand (10, 25);
    console.log (uzd08_kint01)
}
while (uzd08_kint01 >= 12)
console.log('');

/*A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo
ribų ir jį atspauzdinkite;*/

console.log('=============== Nr. 8a ===============');
console.log('');


var uzd08a_kint01;
var uzd08a_counter = 0;
do {
    uzd08a_kint01 = rand (10, 25);
    console.log (uzd08a_kint01)
    
}
while (uzd08a_kint01 >= 12)
console.log('');
/* 8B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;*/

console.log('=============== Nr. 8b ===============');
console.log('');


var uzd08b_kint01;
var uzd08b_counter = 0;
do {
    uzd08b_kint01 = rand (10, 25);
    console.log (uzd08b_kint01)
    uzd08b_counter++;

}
while (uzd08b_kint01 > 12)
console.log('Iteracijų kiekis', uzd08b_counter);
console.log('');

/*Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami
(neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam,
kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log
už ciklo ribų;*/

console.log('=============== Nr. 8c ===============');
console.log('');


var uzd08c_kint01;
var uzd08c_suma = 0;
var uzd08c_counter = 0;
do {
    uzd08c_kint01 = rand (10, 25);
    console.log (uzd08c_kint01)
    uzd08c_counter++;
    if (uzd08c_kint01 <= 18) {
        uzd08c_suma += uzd08c_kint01;
    }
}
while (uzd08c_kint01 > 12)
console.log('Iteracijų kiekis', uzd08c_counter);
console.log('Suma skaičių <= 18 ', uzd08c_suma);

console.log('');


/*D. Sumą skaičiuokite kaip B dalyje, bet papildomai susikurkite kintamąjį, kuriame
suskaičiuokite kiek reikšmių atmetėte (nesumavote) .Rezultatą su suma ir
atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;*/
console.log('=============== Nr. 8d ===============');
console.log('');


var uzd08d_kint01;
var uzd08d_suma = 0;
var uzd08d_atmsuma = 0;
var uzd08d_counter = 0;
var atm_counter = 0;
do {
    uzd08d_kint01 = rand (10, 25);
    console.log (uzd08d_kint01)
    uzd08d_counter++;
    if (uzd08d_kint01 <= 18) {
        uzd08d_suma += uzd08d_kint01;
    }
    else {
        uzd08d_atmsuma += uzd08d_kint01;
        atm_counter++;
    }
}
while (uzd08d_kint01 > 12)
console.log('Iteracijų kiekis', uzd08d_counter);
console.log('Suma skaičių <= 18 ', uzd08d_suma);
console.log('Atmesta skaičių > 18 ', atm_counter, '- jų suma =', uzd08d_atmsuma);

console.log('');

/*E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek
nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo
ribų jam pasibaigus.*/
console.log('=============== Nr. 8e ===============');
console.log('');

var uzd08e_kint01;
var uzd08e_suma = 0;
var uzd08e_atmsuma = 0;
var uzd08e_counter = 0;
var atm_counter = 0;
var uzd08e_lyg = 0;
var uzd08e_nelyg = 0;

do {
    uzd08e_kint01 = rand (10, 25);
    console.log (uzd08e_kint01);
    (uzd08e_kint01 % 2 == 0) ? uzd08e_lyg++ : uzd08e_nelyg++;

    uzd08e_counter++;
    if (uzd08e_kint01 <= 18) {
        uzd08e_suma += uzd08e_kint01;
    }
    else {
        uzd08e_atmsuma += uzd08e_kint01;
        atm_counter++;
    }
}
while (uzd08e_kint01 > 12)
console.log('Iteracijų kiekis', uzd08e_counter);
console.log('Suma skaičių <= 18 ', uzd08e_suma);
console.log('Atmesta skaičių > 18 ', atm_counter, '- jų suma =', uzd08e_atmsuma);
console.log('Lyginių skaičių:', uzd08e_lyg, 'Nelyginių skaičių:', uzd08e_nelyg);

console.log('');

//
/*. 8f. Ciklą iš dalies B kartokite tol, kol iteracijų kiekis bus didesnis nei 20. 
Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. */
// console.log('=============== Nr. 8f ===============');
// console.log('');


// var uzd08f_kint01;
// var uzd08f_counter;
// var uzd08f_pakartojimai = 0;
// do {
//     uzd08f_counter = 0;
//     do {
//         uzd08f_kint01 = rand (10, 25);
//         // console.log (uzd08f_kint01)
//         uzd08f_counter++;

//     }
//     while (uzd08f_kint01 > 12);
//     uzd08f_pakartojimai++;
// } while (uzd08f_counter <= 100);
// // console.log('Iteracijų kiekis', uzd08f_counter);
// console.log('Išorinio ciklo pakartojimų kiekis', uzd08f_pakartojimai);
// console.log('');




// =============== Nr. 9 ===============
/*9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
A) Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
 Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
 Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
B) Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
*/

// console.log('=============== Nr. 9 ===============');
// console.log('');
// var uzd09_kint01;
// var count_outer = 0;
// var count_inner = 0;

// do {
//     uzd09_kint01 = rand (5, 10);
//     console.log (uzd09_kint01);
//     count_outer++;
//     for (var i = 0; i < uzd09_kint01; i++) {
//         count_inner++;
//        // console.log ('Vidinis ciklas:', 'kintamasis = ', uzd09_kint01, 'i =', i);
//     }
// }
// while (uzd09_kint01 != 5)
// console.log ('Išorinių ciklų:', count_outer, 'Vidinių ciklų:', count_inner);
// console.log('');

// =============== Nr. 9 b ===============
// console.log('=============== Nr. 9 b ===============');
// console.log('');
// var uzd09b_kint01;
// var count_outer = 0;
// var count_inner = 0;
// var loop_counter = 0;

// do {
//     uzd09b_kint01 = rand (5, 10);
//     console.log (uzd09b_kint01);
//     count_outer++;
//     for (var i = 0; i < uzd09b_kint01; i++) {
//         count_inner++;
//        // console.log ('Vidinis ciklas:', 'kintamasis = ', uzd09_kint01, 'i =', i);
//     }
//     // if (uzd09_kint01 == 5) {
//     //     loop_counter++;
//     // }
//     (uzd09b_kint01 == 5) ? loop_counter++ :
//     console.log ('Rastas 5:', loop_counter);
// }
// while (loop_counter < 3)
// console.log ('Išorinių ciklų:', count_outer, 'Vidinių ciklų:', count_inner);
// console.log ('Rastas 5:', loop_counter);
// console.log('');


// =============== Nr. 10 ===============
/*Kazys ir Petras žaidžia šaškėm. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir 
“Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, 
kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surinks 
222 arba daugiau taškų.*/

console.log('=============== Nr. 10 ===============');
console.log('');

var uzd10_kint1;
var uzd10_kint2;
var suma_Kazys = 0;
var suma_Petras = 0;

do {

    uzd10_kint1 = rand (10, 20);
    uzd10_kint2 = rand (5, 25); 
    suma_Kazys += uzd10_kint1; 
    suma_Petras += uzd10_kint2;
}

// while (suma_Kazys < 222 && suma_Petras < 222)
while (!(suma_Kazys >= 222 || suma_Petras >= 222))

if (suma_Kazys > suma_Petras) {
    console.log('Partiją laimėjo: Kazys, surinkęs', suma_Kazys, 'taškų (-us).' );
    console.log('Petras surinko', suma_Petras, 'taškų (-us).' );
}
else if  (suma_Kazys < suma_Petras) {
    console.log('Partiją laimėjo: Petras, surinkęs', suma_Petras, 'taškų (-us).' );
    console.log('Kazys surinko', suma_Kazys, 'taškų (-us).' );
}

else {
    console.log('Kazys ir Petras surinko po lygiai -', suma_Kazys, '- taškų (-us).' );
}