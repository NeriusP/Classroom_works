const setas = new Set();
setas.add('grybas');
setas.add('agurkas');
setas.add('pupelė (ankštinė)');

console.log('setas:',setas);
localStorage.clear();
//const setArr = [];
//for(const e of setas)

const masyvas = [...setas];
console.log(masyvas);

masyvas.sort();
const setas1 = new Set();
const setasCopy = new Set();
masyvas.forEach(e => setas1.add(e));

console.log('setas1:', setas1);

//const jsonSetas1 = ;
localStorage.setItem('setas1', JSON.stringify(masyvas));
//const masyvas2 = JSON.parse(localStorage.getItem('setasA'));
JSON.parse(localStorage.getItem('setas1')).forEach(e => setasCopy.add(e));
//masyvas2.forEach(e => setasCopy.add(e));
console.log('setasCopy:', setasCopy);

//=================3
// išrūšiuoti masyvą 'hard' pagal setų elementų skaičių mažėjančia tvarka
const hard = [
    new Set([2,8,7]),
    new Set([2,0,7,8,7]),
    new Set([2,8,0,7,1,9]),
    new Set([2,8,7,0])
];

console.log(hard);

hard.sort((a,b) => b.size-a.size);

console.log(hard);


//=================4
// reikia padaryti, kad masyvai eitų viršuje, o setai apačioje
console.log(hard instanceof Array);

console.log(setas instanceof Set);

const easy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
];

console.log(easy);

// easy.sort((a,b) => {
//     let el1 = (b instanceof Array);
//     console.log('b:', b, 'el1 ', el1);
   
    
//     let el2 = (a instanceof Array);
//     console.log('a:', a, 'el2 ',el2);

//    // console.log('b yra false ', el1 === false);

//     if ((el1 === true) && (el2 === true)){
//         console.log('Atiduodam 00');
//         return 0;
        
//     };

//     if ((el1 === true) && (el2 === false)){
//         console.log('Atiduodam 000');
//         return 0;
//     };

//     if ((el1 === false) && (el2 === false)){
//         console.log('Atiduodam 0000');
//         return 0;
//     };

//     if ((el1 === false) && (el2 === true)){
//         console.log('Atiduodam 1');
//         return -1;
        
//     };
// })

easy.sort((a, b) => a instanceof Array ? -1 : 0);


console.log(easy);
// panaudoti filter() metodą, išfiltruoti, kad liktų tik Setai
const result = easy.filter(a => a instanceof Set);
const result1 = easy.filter(a => a instanceof Set ? 1 : 0);
console.log(result);
console.log(result1);

console.log('_-_-_-_-_-_-_-_-_-_-_-_-')
const map = new Map();
map.set('Petras', 'kas guli stalčiuje');
map.set('Šarikas', 'kas guli būdoje');
map.set('Janotas', 'ką šiukšlių dėžėje rado janotas');

console.log('Has Janotas', map.has('Janotas'));
console.log('get Šarikas:', map.get('Šarikas'));


for(const val of map){
    console.log('valas', val[0]);
}

console.log(map);

for(const val of map.keys()) {
    console.log('valas_keys', val);
}

const mapArray = [...map];
console.log(mapArray);

const kitasMapas = new Map([['c', 2], ['b',2], ['a', 2]]);
console.log(kitasMapas);



mapArray.sort((a, b) => {
     console.log('b[0]', b[0]);
     console.log('a[0]', a[0]);
     console.log(b[0] >= a[0]);
    return b[0][2] >= a[0][2] ? -1 : 0;
})
console.log('surūšiuotas', mapArray);

const map2 = new Map();

mapArray.forEach(el => map2.set(el[0], el[1]));
console.log('surūšiuotas Mapas', map2);

// sudėlioti tokia tvarka masyvai, mapai, setai

const notSoEasy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    new Map([['a',2], ['b',2], ['c',2]]),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
    new Map([['a',2], ['c',2]]),
];

notSoEasy.sort((a, b) => {
    if (a.constructor.name === b.constructor.name){
        return 0;
    }
    return a instanceof Array ? -1 : a instanceof Map && !(b instanceof Array)? -1 : 1
})

console.log(notSoEasy);


const m3 = [
    new Map([['dog', 5], ['cat', 7], ['snake', 58]]),
    new Map([['snake', 33], ['dog', 14], ['cat', 8]]),
    new Map([['dog', 51], ['cat', 77], ['snake', 23]]),
    new Map([['cat', 10], ['dog', 23], ['snake', 17]])
];







