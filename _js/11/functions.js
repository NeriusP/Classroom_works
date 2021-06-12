function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zebras (v)
{
    return v * v + 38 - 37 + 40;
}


let A = 5;
let B = 6;
let C = 7;

let AA = A * A + 38 - 37 + 40;
console.log(AA)

let BB = B * B + 38 - 37 + 40;
console.log(BB)

let CC = C * C + 38 - 37 + 40;
console.log(CC)

AA = zebras (A);
console.log(AA)

BB = zebras (B);
console.log(BB)

CC = zebras (C);
console.log(CC)

function masyvo_generavimas (ilgis, objektas)
{
    let masyvas =[];
    for (let i = 0; i < ilgis; i++){
        masyvas.push(objektas);
    }

    return masyvas;
}

const m1 = masyvo_generavimas ("10"-1, 'xx');
const m2 = masyvo_generavimas (20, 15);
const m3 = masyvo_generavimas (30, ['A', 'B']);

console.log(m1);
console.log(m2);
console.log(m3);
