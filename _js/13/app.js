

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Anoniminė f-ja, esanti kitos f-jos inline

const A = 1;
const B = 3;
const C = 2;

// function sum(a, b) {
//     let suma = a + b;
//     return suma;
// }

// const res = sum (A, B);

// console.log('res', res);

//======================================
const plus = function(a, b) {
    let suma = a + b;
    return suma;
}



function sum(a, b, c, p) {
    let suma = a + p(b, c);
    return suma;
}

const res = sum(A, B, C, plus);
console.log('res', res);


function sum01(a, b) {
    let suma = a + b;
    return suma;
}

console.log('suma', sum01(6, sum01(A, B)));