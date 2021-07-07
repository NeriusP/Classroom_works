
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// A. Reikia sukurti masyvą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
//Masyvo ilgis 25 elementai.

const masyvasA = [];

for (let i=0; i<25; i++){
    masyvasA.push(rand(10,20));
}

console.log('Masyvas, kurio ilgis 25', masyvasA);

//B. Reikia sukurti masyvą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
//Masyvo ilgis nustatomas pagal masyvo reikšmes. 
//Generuoti masyva tol, kol jame atsiras 3 reikšmės lygios 13;

let j = 0;
const masyvasB = [];

do {
    let masR = rand(10,20);
    if (masR === 13) {
        j++;
        masR = ''+masR;
    }
    masyvasB.push(masR);
    
}
while (j < 3);

console.log('Masyvas, kuriame yra 3 vnt. "13"', masyvasB);

////C. Reikia sukurti Set objektą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
//Set'o dydis yra VISOS reikšmės nuo 10 iki 20;

const setasC = new Set();

do {
  setasC.add(rand(10,20));
    
}
while (setasC.size < 11);

console.log('Setas, kuriame yra reikšmės nuo 10 iki 20', setasC);




//D. Reikia sukurti Map objektą, kurio reikšmės yra atsitiktinės nuo 10 iki 20, 
//o raktai (indeksai) yra igi atsitiktinės reikšmės nuo 10 iki 20;
//Map'ą generuoti tol, kol jame bus 3 reikšmės lygios 13.

const mapasD = new Map();
let counterD;

do {
    console.log('mapo dydis', mapasD.size);
   // counterD = 0;
    let key = rand(10,20);
    let value = rand(10,20);

    if (value === 13) {
        mapasD.set(key, value+'');
    }

    else {
        mapasD.set(key, value);
    }
    
    // for (const v of mapasD) {
    //     mapasD[1] == 13 ? counterD++ : counterD ;
    // }
    console.log(key, value);
    counterD = 0;
    mapasD.forEach(v => v == 13 ? counterD++ : counterD);
    // if (mapasD.size === 11 && counterD < 3){
    //     mapasD.clear();
    // }
    //     mapasD.set(key, value);
    // }
    console.log(counterD);
    
     
}
while (counterD < 3);
console.log('Mapas, kuriame yra 3 reikšmes = "13"', mapasD);


//E. Sukurt Set tipo objektą pagal C sąlygą, tik jo ilgis turi būti 10.
// Surasti, kokio skaitmens trūksta Set'e, palyginus su generuojama 
//atsitiktinių reikšmių aibe.

// const setasD = new Set();

// do {
//   setasD.add(rand(10,20));
    
// }
// while (setasD.size < 10);

// console.log('Setas, kuriame yra reikšmės nuo 10 iki 20', setasD);

// for (let k = 10; k<=20; k++){
//     if (!setasD.has(k)){
//         console.log(`Sete nėra ${k} elemento`);
//     }
// }

//F. Taip, kaip D sąlygoje tik 3 vienodos reikšmės gali būti bet kokie skaičiai.

// const mapasF = new Map();

// let counter = 0;

// do {
//     const key = rand(10,20);
//     const value = rand(10,20);
    
    
//     if (value === 13) {
//         counter++;
//         mapasD.set(key, value);
//     }
    
// }
// while (counter < 3);
// console.log('Mapas, kuriame yra 3 reikšmes = "13"', mapasD);

