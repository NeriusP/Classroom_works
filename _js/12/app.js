

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Parašyti dvi funkcijas be parametrų red() ir green(). 
Funkcijos turi grąžinti atitinkamus stringus “red” ir “green”. Pademostruoti veikimą;*/

console.log('========== 1 ==========');
console.log(' ');

function red(){
return console.log('Red');
}

function green(){
    return console.log('Green');
    }

    red();
    green();
    console.log(' ');

   

//========== 2 ==========
/*Parašyti funkciją color(what). Funkcija turi grąžinti splvą, priklausomai 
nuo argumento: jeigu what == 1 - stringą “white”, jeigu what == 2 - stringą “black”,  
kitais atvejais - “no color”;*/
console.log('========== 2 ==========');
console.log(' ');

function color(what) {
    what === 1 ? console.log('white') : what === 2 ? console.log('black') : console.log('no color');
    return    
}
 
color(1);
color(2);
color(0);

//========== 3 ==========
/*Parašykite dvi funkcijas sum(a, b) ir diff(a, b). 
Funkcijos turi suskaičiuoti sumą arbą skirtumą su argumentais a, b 
ir grąžinti rezultatą. Pademostruoti veikimą; */

console.log('========== 3 ==========');
console.log(' ');



function sum(a, b) {
    let suma = a + b;
    return suma;
}

function diff(a, b) {
    let skirt = a - b;
    return skirt;
}

let v1 = 10;
let v2 = 5;
console.log(`${v1} ir ${v2} suma = ${sum(v1, v2)}`);
console.log(`${v1} ir ${v2} skirtumas = ${diff(v1, v2)}`);

//========== 4 ==========
/*Papildyti prieš tai buvusį uždavinį, kad a ir b parametrai 
turėtų default argumentus lygius 0;
 */

console.log('========== 4 ==========');
console.log(' ');



function sum(a = 0, b = 0) {
    let suma = a + b;
    return suma;
}

function diff(a = 0, b = 0) {
    let skirt = a - b;
    return skirt;
}

//let v3 = 10;
//let v4 = 5;
console.log(`suma = ${sum()}`);
console.log(`skirtumas = ${diff()}`);
console.log(' ');



//========== 5 ==========
/*Sukurkite masyvą ab [‘A’, ‘B’], masyvą cd [‘C’, ‘D’] ir masyvą fe [‘F’, ‘E’] .
 Masyvai nėra funkcijos viduje. Parašykite funkciją changeArray(array),
 kur sukeistų vietomis perduodamo masyvo reikšmes. Pademostruoti veikimą;*/
 console.log('========== 5 ==========');
 console.log(' ');
let ab = ['A', 'B']
let cd = ['C', 'D']
let fe = ['F', 'E']

console.log(ab.slice());

function changeArray(array) {
    let pirmas = array[0];
    array[0] = array[1];
    array[1] = pirmas;
//return array;
}

changeArray(ab);
console.log(ab);
changeArray(cd);
console.log(cd);
changeArray(fe);
console.log(fe);


//========== 6 ==========
/*Sukurti objektą car1 {make: ’volvo’} ir car2 {make: ’mb’}. 
Objektai nėra funkcijos viduje. Sukurti funkciją changeMake(make), 
kuri keistų objekto savybę į perduodamo make argumento reikšmę. 
Pademostruoti veikimą;*/

console.log('========== 6 ==========');
console.log(' ');

let car1 = {make: 'volvo', year: 1955};
let car2 = {make: 'mb', year: 1990};
console.log(car1);
console.log(car2);

function changeMake(car, metai, make) {
    //car["year"] = metai;
    car[metai] = 1900;
    car.make = make;
}

changeMake(car1, 'year', 'mazda');
console.log(car1);
changeMake(car2, 'year', 'honda');
console.log(car2);
console.log(' ');

// CALC
const sumaa = function (a, b){
    return a + b;
} 

const diffa = function (a, b){
    return a - b;
} 

const multi = function (a, b){
    return a * b;
} 

function calculator(action, a, b) {
return action(a, b)
}
let c = 10;
let d = 12;

console.log('+', calculator(sumaa, c, d))
console.log('-', calculator(diffa, c, d))
console.log('*', calculator(multi, c, d))

//===========TEST============
function vardas(vard01) {
let vard02 = vard01 = [];
return vard02;
}
let a = vardas('eta');
console.log(a);

