function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// =======================String==================
const A = 'Galingas stringas';
const B = new String('Aš irgi stringas');
B.labas = 'visogero'; // stringas yra objektas, kuriam galima priskirti naujas savybes

console.log('A:', A, typeof A, A.length);
console.log('A:', B, typeof B, B.length, B.indexOf('i'));

const F ='2 + 5';
const F2 = new String('2 + 5');

console.log(eval(F)); 
console.log(eval(F2)); // jei stringas yra objektas, tai eval() neatlieka veiksmo
console.log(eval(F2.valueOf())); // paskaičiuotą vertę galima išgauti su valueOf;

let V1 = '*** ' + A + ' ***';
let V2 =`*** ${A} ***`; // su `` kabutėm galima naudoti ${kintamasis} 

console.log(V1); 
console.log(V2); 

const regex = /\d/gm;

console.log('indexOf', A.indexOf('as'));
console.log('charAt', A.charAt('8'));
console.log('[]', A[8]);
console.log('charCodeAt', A.charCodeAt('8'));
console.log('lastIndexOf', A.lastIndexOf('as'));
console.log('match', A.match(regex));

// =======================Number==================

let X = new Number(33);

console.log('X:', X , typeof X);
console.log(Number.MAX_VALUE);

let zz = 0.2;
let vv = 0.4;
let kitas = zz+vv;

console.log(kitas.toFixed(2), kitas.toPrecision(2));

console.log(Math.PI);
console.log(Math.random());

console.log(Math.round(Math.PI));



