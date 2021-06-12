function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =============== TEST ===============

// var x = rand (5, 1); // nėra tikrinimo, ar min < max
// var y = rand (-7, 1); // veikia

// console.log("x=", x);
// console.log("y=", y);

// =============== Nr. 1 ===============
/*1. Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() 
jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą naudodami console.log() */
console.log('=============== Nr. 1 ===============');
console.log('');
var uzd01_kint1 = rand (0, 4);
var uzd01_kint2 = rand (0, 4);

if ((uzd01_kint1 == 0 || uzd01_kint2 == 0) && (uzd01_kint1 != uzd01_kint2)) {
    console.log('Dalyba iš 0 negalima');
}

if (uzd01_kint1 > uzd01_kint2) {
    console.log('kint1 / kint2 =', uzd01_kint1,'/', uzd01_kint2, '=', uzd01_kint1/uzd01_kint2)
}
else if (uzd01_kint1 < uzd01_kint2) {
    console.log('kint2 / kint1 =',  uzd01_kint2,'/', uzd01_kint1, '=', uzd01_kint2/uzd01_kint1)
}
else {
    console.log('kint2 = kint1 =', uzd01_kint1)
}
console.log('');

// =============== Nr. 2 ===============
/*2. Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() 
jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir su console.log() atspausdinkite
 kintąmąjį turintį vidurinę reikšmę.*/

 console.log('=============== Nr. 2 ===============');
 console.log('');
var uzd02_kint1 = rand (0, 25);
var uzd02_kint2 = rand (0, 24);
var uzd02_kint3 = rand (0, 25);

if (uzd02_kint1 === uzd02_kint2 || uzd02_kint2 === uzd02_kint3 || uzd02_kint1 === uzd02_kint3) {
    console.log('Vidurinė reikšmė neegzistuoja, nes', 'kint1 =', uzd02_kint1, 'kint2 =', uzd02_kint2, 'kint3 =', uzd02_kint3);
}
else if (uzd02_kint1 > uzd02_kint2 && uzd02_kint1 > uzd02_kint3) {
        if (uzd02_kint2 > uzd02_kint3) {
            console.log('Vidurinę reikšmę turi kint2, kuris =', uzd02_kint2, '| kint1 =', uzd02_kint1, '| kint3 =', uzd02_kint3);
        }
        else {
            console.log('Vidurinę reikšmę turi kint3, kuris =', uzd02_kint3, '| kint1 =', uzd02_kint1, '| kint2 =', uzd02_kint2);
        }
}


else if (uzd02_kint2 > uzd02_kint1 && uzd02_kint2 > uzd02_kint3) {
        if (uzd02_kint1 > uzd02_kint3) {
            console.log('Vidurinę reikšmę turi kint1, kuris =', uzd02_kint1, '| kint2 =', uzd02_kint2, '| kint3 =', uzd02_kint3);
        }
        else {
            console.log('Vidurinę reikšmę turi kint3, kuris =', uzd02_kint3, '| kint2 =', uzd02_kint2, '| kint1 =', uzd02_kint1);
        }
}

else if (uzd02_kint3 > uzd02_kint1 && uzd02_kint3 > uzd02_kint2) {
    if (uzd02_kint1 > uzd02_kint2) {
        console.log('Vidurinę reikšmę turi kint1, kuris =', uzd02_kint1, '| kint3 =', uzd02_kint3, '| kint2 =', uzd02_kint2);
    }
    else {
        console.log('Vidurinę reikšmę turi kint2, kuris =', uzd02_kint2, '| kint3 =', uzd02_kint3, '| kint1 =', uzd02_kint1);
    }
}
console.log('');
// =============== Nr. 3 ===============
/*3. Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkciją 
nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą 
atspausdintų naudojant console.log().*/

 console.log('=============== Nr. 3 ===============');
 console.log('');

var uzd03_a = rand (1, 10);
var uzd03_b = rand (1, 10);
var uzd03_c = rand (1, 10);

if (uzd03_a + uzd03_b > uzd03_c && uzd03_b + uzd03_c > uzd03_a && uzd03_a + uzd03_c > uzd03_b) {
    console.log('Iš kraštinių a =', uzd03_a, 'b =', uzd03_b, 'ir c =', uzd03_c, 'galima sudaryti trikampį.');
}

else {
    console.log('Iš kraštinių a =', uzd03_a, 'b =', uzd03_b, 'ir c =', uzd03_c, 'trikampio sudaryti negalima.');
}
console.log('');

// =============== Nr. 4 ===============
/*4. Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()*/

console.log('=============== Nr. 4 ===============');
console.log('');

var uzd04_kint1 = rand (0, 2);
var uzd04_kint2 = rand (0, 2);
var uzd04_kint3 = rand (0, 2);
var uzd04_kint4 = rand (0, 2);

var nuliai = 0;
var vienetai = 0;
var dvejetai = 0;

if (uzd04_kint1 === 0) {
    nuliai = ++nuliai;
}
else if (uzd04_kint1 === 1) {
    vienetai = ++vienetai;
}
else {
    dvejetai = ++dvejetai;
}

if (uzd04_kint2 === 0) {
    nuliai = ++nuliai;
}
else if (uzd04_kint2 === 1) {
    vienetai = ++vienetai;
}
else {
    dvejetai = ++dvejetai;
}

if (uzd04_kint3 === 0) {
    nuliai = ++nuliai;
}
else if (uzd04_kint3 === 1) {
    vienetai = ++vienetai;
}
else {
    dvejetai = ++dvejetai;
}

if (uzd04_kint4 === 0) {
    nuliai = ++nuliai;
}
else if (uzd04_kint4 === 1) {
    vienetai = ++vienetai;
}
else {
    dvejetai = ++dvejetai;
}

console.log ('kint1 =', uzd04_kint1, '| kint2 =', uzd04_kint2,'| kint3 =', uzd04_kint3, '| kint4 =', uzd04_kint4 );
console.log ('Nulių yra', nuliai, 'Vienetų yra', vienetai, 'Dvejetų yra', dvejetai);
console.log('');

// =============== Nr. 5 ===============
/*5. Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. 
Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš 
abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius*/

console.log('=============== Nr. 5 ===============');
console.log('');

var uzd05_kint1 = rand (-10, 10);
var uzd05_kint2 = rand (-10, 10);
var uzd05_kint3 = rand (-10, 10);

(uzd05_kint1 < 0) ? console.log('+', uzd05_kint1, '+' ) : (uzd05_kint1 > 0) ? console.log('-', uzd05_kint1, '-' ) : console.log('*', uzd05_kint1, '*' );
(uzd05_kint2 < 0) ? console.log('+', uzd05_kint2, '+' ) : (uzd05_kint2 > 0) ? console.log('-', uzd05_kint2, '-' ) : console.log('*', uzd05_kint2, '*' );
(uzd05_kint3 < 0) ? console.log('+', uzd05_kint3, '+' ) : (uzd05_kint3 > 0) ? console.log('-', uzd05_kint3, '-' ) : console.log('*', uzd05_kint3, '*' );
console.log('');



// =============== Nr. 6 ===============
/*6. Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, 
daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir 
atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. 
Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.*/

console.log('=============== Nr. 6 ===============');
console.log('');
var uzd06_zvakes = rand (5, 3000);
var uzd06_kaina = 1;

if (uzd06_zvakes*uzd06_kaina > 2000) {
    console.log('Perkamas žvakių kiekis -', uzd06_zvakes, 'vnt. , kaina su 4 % nuolaida - ', uzd06_zvakes*uzd06_kaina - uzd06_zvakes*uzd06_kaina*4/100, 'EUR.');
} 
else if (uzd06_zvakes*uzd06_kaina > 1000) {
    console.log('Perkamas žvakių kiekis -', uzd06_zvakes, 'vnt. , kaina su 3 % nuolaida - ', uzd06_zvakes*uzd06_kaina - uzd06_zvakes*uzd06_kaina*3/100, 'EUR.');
}
else {
    console.log('Perkamas žvakių kiekis -', uzd06_zvakes, 'vnt. , kaina - ', uzd06_zvakes*uzd06_kaina, 'EUR.');
}
console.log('');

// =============== Nr. 7 ===============
/*7. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės
nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()*/

console.log('=============== Nr. 7 ===============');
console.log('');

var uzd07_kint1 = rand (0, 100);
var uzd07_kint2 = rand (0, 100);
var uzd07_kint3 = rand (0, 100);

console.log ('kint1 =', uzd07_kint1, '| kint2 =', uzd07_kint2,'| kint3 =', uzd07_kint3);
console.log ('Jų aritmetinis vidurkis =', (uzd07_kint1+uzd07_kint2+uzd07_kint3)/3);
if (uzd07_kint1 >= 10 && uzd07_kint1 <= 90) {
    if (uzd07_kint2 >= 10 && uzd07_kint2 <= 90) {
        if (uzd07_kint3 >= 10 && uzd07_kint3 <= 90) {
            console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', '1-2-3', (uzd07_kint1+uzd07_kint2+uzd07_kint3)/3);
        }
        else {
            console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', '1-2', (uzd07_kint1+uzd07_kint2)/2);
        }
    }
    else if (uzd07_kint3 >= 10 && uzd07_kint3 <= 90) {
        console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', '1-3', (uzd07_kint1+uzd07_kint3)/2);
    }
    else {
        console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', '1', uzd07_kint1);
    }
}
else if (uzd07_kint2 >= 10 && uzd07_kint2 <= 90) {
        if (uzd07_kint3 >= 10 && uzd07_kint3 <= 90) {
            console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', '2-3', (uzd07_kint2+uzd07_kint3)/2);
        }
        else {
            console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', '2', uzd07_kint2);
        }
}
else {
    console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', '3', uzd07_kint3);
}
console.log('');

// =============== Nr. 7 kitas sprendimas ===============
/*7. Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės
nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()*/

console.log('=============== Nr. 7 kitas sprendimas ===============');
console.log('');

// var uzd07_kint1 = rand (0, 100);
// var uzd07_kint2 = rand (0, 100);
// var uzd07_kint3 = rand (0, 100);
var kint_suma = 0;
var counter = 0;

console.log ('kint1 =', uzd07_kint1, '| kint2 =', uzd07_kint2,'| kint3 =', uzd07_kint3);

if (uzd07_kint1 >= 10 && uzd07_kint1 <= 90) {
    kint_suma = kint_suma + uzd07_kint1; 
    counter++;
}  
if (uzd07_kint2 >= 10 && uzd07_kint2 <= 90) {
    kint_suma = kint_suma + uzd07_kint2; 
    counter++;
} 
if (uzd07_kint3 >= 10 && uzd07_kint3 <= 90) {
    kint_suma = kint_suma + uzd07_kint3; 
    counter++;
}  

console.log ('Jų aritmetinis vidurkis, atmetus <10 ir >90 =', kint_suma, '/', counter, '=', kint_suma/counter);



