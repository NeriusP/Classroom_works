function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//================ 7 =====================
/* Parašyti f-ją, kuri į masyve visas jo reikšmes pakeistų į random spalvas, red, blue, green
F-ja turi turėti 2 argumentus. Vienas - generuojamas masyvas, 
o kitas - f-ja spalvų generatorius*/
console.log('================ 7 =====================');
let mas07 = [];

function masyvas(mas) {
    for (let i = 0; i < rand (5, 10); i++){
     mas.push(rand(0, 2));
    }
}
masyvas(mas07)
console.log(mas07);

// function spalvu_generatorius() {
// let spalva = rand(0, 2);
// if (spalva === 0) {
//     return 'red'
// }
// else if (spalva === 1) {
//     return 'blue'
// }
// else {
//     return 'green' 
// }
//
//}

//console.log(spalvu_generatorius());

function changer(mas, fja) {
    for (let j = 0; j < mas.length; j++){
        mas[j] = fja();
    }

}

//changer(mas07, spalvu_generatorius);

changer(mas07, () => {
    let spalva = rand(0, 2);
    return spalva === 0 ?  'red' : (spalva === 1) ? 'blue' : 'green';
    // if (spalva === 0) {
    //     return 'red'
    // }
    // else if (spalva === 1) {
    //     return 'blue'
    // }
    // else {
    //     return 'green' 
    // }
    
    });

console.log(mas07);

//================ 8 =====================
/* 
Yra masyvas [8, 9, 7, 6, 12, 48, 0, 6] 
Išrūšiuoti masyvą naudojan sort ir atskirą rūšiavimo funkciją. Pademostruoti veikimą;
*/
console.log('================ 8 =====================');
let mas08 = [8, 9, 7, 6, 12, 48, 0, 6]

mas08.sort((a, b) => a - b);
console.log(mas08);
mas08.sort((a, b) => b - a);
console.log(mas08);

//================ 9 =====================
/*Yra masyvas [“Pingvinas”, “Zebras”, “Voras”, “Vilkas”, “Zuikis”]. 
Sukurti naują masyvą naudojant map ir atskirą funkciją, kuriame atitinkamos 
indeksų reikšmės atitiktų žodžių ilgį.*/

console.log('================ 9 =====================');

let mas09 = ['Pingvinas', 'Zebras', 'Voras', 'Vilkas', 'Zuikis'];
const mas09_1 = mas09.map(x => x.length);
console.log(mas09);
console.log(mas09_1);

//================ 10 =====================
/*Yra masyvas [8, “B”, 9, 7, “A”, 6, 12, “B”, “B”, “A”, 48, 0, “A”, 6] 
Išrūšiuoti masyvą nuo didžiausio iki mažiausio naudojant sort 
ir atskirą rūšiavimo funkciją. “A” raidės turi eiti pačiam gale, 
o “B” raidės pačiame priekyje. Pademostruoti veikimą;*/

console.log('================ 10 =====================');
let mas10 = [8, 'B', 9, 7, 'A', 6, 12, 'B', 'B', 'A', 48, 0, 'A', 6] ;

//console.log(typeof(mas10[1]));

mas10.sort((a, b) => {
   
  
        if (a === 'A') return 1;
        if (b === 'B') return 1;
        if (b === 'A') return -1;
        if (a === 'B') return -1;
        return b - a;
    })
    console.log(mas10);








