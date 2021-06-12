function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//========== 1 ==========
/*Parašykite funkciją, kurios argumentas būtų tekstas, 
kuris yra atspausdinamas su console.log;*/

console.log('========== 1 ==========');
console.log(' ');
function teksto_spausdinimas01 (tekstas)
{
  return console.log(tekstas);
}

teksto_spausdinimas01 ('abrakadabra');
console.log(' ');

//========== 2 ==========
/*Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, 
įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas
 atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;
*/

console.log('========== 2 ==========');
console.log(' ');

function teksto_spausdinimas02 (tekstas, kiekis)
{

for (let i = 0; i < kiekis; i++){

   console.log(tekstas);
}
return
}

teksto_spausdinimas02 ('abrakadabra', 3);
console.log(' ');

//========== 4 ==========
/*Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių 
jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)*/
console.log('========== 4 ==========');
console.log(' ');

function svsk (skaicius)
{
    let counter = 0;
    for (let i = 2; i < skaicius/2+1; i++) {
        if (skaicius%i === 0) {
            counter++
        }
    }

    return counter;
}


let dal = svsk (100);
console.log(`Argumentas dalijasi be liekanos iš ${dal} sveikų skaičių.`);
console.log(' ');

//========== 5 ==========
/*Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai 
skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos 
kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.*/
console.log('========== 5 ==========');
console.log(' ');

let masyvas05 = [];
let dal_masyvas = [];
for (let i = 0; i < 100; i++) {
     masyvas05.push(rand(33, 77));
     dal_masyvas.push(svsk(masyvas05[i]));
}
console.log(masyvas05);
console.log(dal_masyvas);

masyvas05.sort(function(a , b) {return svsk(b) - svsk(a)});
console.log(masyvas05);
console.log(' ');

//========== 6 ==========
/*Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. 
Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.*/
console.log('========== 6 ==========');
console.log(' ');

let masyvas06 = [];
//let dal_masyvas = [];
for (let i = 0; i < 100; i++) {
     masyvas06.push(rand(333, 777));
}
for (let j = 0; j < masyvas06.length; j++) {
    if (svsk(masyvas06[j]) === 0) {
        console.log('Pirminis skaičius', masyvas06[j] );
        masyvas06.splice(j, 1);
        j--;
    }

}
console.log('Masyvas be pirminių skaičių', masyvas06);
console.log(' ');

//========== 7 ir 8 ==========
/*7. Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, 
išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir 
pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. 
Paskutinio masyvo paskutinis elementas yra lygus 0;
8. Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. 
Skaičiuoti reikia visuose masyvuose ir submasyvuose.
*/
console.log('========== 7  ir 8 ==========');
console.log(' ');
var suma08 = 0;

let masyvas07 = [];
function masyvo_pildymas(m) { 
    let reiksme;
    let return_m = []
    if (m.length > 0) {
        return_m.unshift(m);
    }
    else {
        return_m.unshift(0);
    }

    for (let i = 0; i < rand(10, 19); i++){
        reiksme = rand(0, 10);
        return_m.unshift(reiksme);
        suma08 += reiksme;
    }
    return return_m;  //.slice()
}

for (var j = 0; j < rand(10, 30); j++) {
    masyvas07 = masyvo_pildymas(masyvas07);
}
console.log('j =', j);
console.log('Visų reikšmių suma =', suma08);
console.log(masyvas07);
console.log(' ');


//========== 9 ==========
/*Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai 
nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis 
skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. 
Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. 
Kartokite, kol sąlyga nereikalaus pridėti elemento. */

console.log('========== 9 ==========');
console.log(' ');

var visi_pirminiai = false;
let  mas09 = [];
for (let i = 0; i < 3; i++) {
    mas09.push(rand(1, 33));
}
console.log('Sugeneruotas mas09: ', mas09);

function isnotPrime(num) { // f-ja nepirminių skiaičių tikrinimui, jei randa - true, jei ne - false
    for(let i = 2; i < num; i++) {
      if(num % i === 0) return true;
    }  
    return false;
  }

//   console.log(mas09[0], isPrime(mas09[0]));
//   console.log(mas09[1], isPrime(mas09[1]));
//   console.log(mas09[2], isPrime(mas09[2]));

//   for (let i = mas09.length-3; i < mas09.length; i++){
//     console.log(mas09[i], isPrime(mas09[i]));
//   }
function tikr_pirm (masyvas) { //f-ja tikrina, ar skaičius ne pirminis, jei taip - įpushina dar vieną skaičių ir grąžina masyvą
    for (let i = masyvas.length-3; i < masyvas.length; i++){
        if(isnotPrime(masyvas[i])) {
            masyvas.push(rand(1, 33));
            //console.log(masyvas);
            return false;
        }
    }
    return true; // jei neranda nepirminių skaičių, pažymi, kad visi yra pirminiai
    //console.log(masyvas);
}


while (!tikr_pirm(mas09)) {   // vykdo ciklą, kol 3 galiniai skaičiai masyve nėra pirminiai
    
    console.log(mas09);
}


//========== 10 ==========
/*Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, 
kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo 
(ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite 
masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. 
Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.*/

console.log('========== 10 ==========');
console.log(' ');
let prime_suma = 0;
let prime_counter = 0;
let vidurkis;

let mas10 = [];    // generuojamas 10 ilgio masyvas iš 10 ilgio masyvų su rand(1, 100) skaičiais
for (let i = 0; i < 10; i++) {
    mas10.push(new Array)
    for (let j = 0; j < 10; j++){
        let sk10 = rand(1, 100);
        // if (!isnotPrime(sk10)) {
        //     prime_suma += sk10;
        //     prime_counter++;
        // }
        mas10[i].push(sk10);
    }
}

function vidurkio_sk (masyvas) {   // vidurkio skaičiavimo f-ja, grąžinanti visų masyvų pirminių skaičių aritmetinį vidurkį
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
            if (!isnotPrime(masyvas[i][j])) {
                prime_suma += masyvas[i][j];
                prime_counter++;
            }
        }
    }
    vidurkis = prime_suma/ prime_counter;
    //console.log('Vidurkis', vidurkis);
    return vidurkis;
}


while (vidurkio_sk(mas10) < 70) {   // ciklas, kuriame tikrinamas vidurkis ir išrūšiuotuosų masivų mažiausias elementas didinamas +3
    
    for (let i = 0; i < 10; i++) {
        mas10[i].sort(function(a, b){return a - b});
    }   

    mas10.sort(function(a, b){return a[0] - b[0]});
    //console.log('mas10', mas10);

    mas10[0][0] += 13;
    //console.log('mas10', mas10[0][0]);
    console.log('Vidurkis', vidurkio_sk(mas10));
}





