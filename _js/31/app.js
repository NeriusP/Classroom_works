//=============== Išrūšiuoti masyvą ===============

const m1 = ['z', 's', 'a', 'd'];

const m2 = m1.slice().sort();
console.log('sort() ', m2);

//const m2 = ['z', 's', 'a', 'd'];

// const m3 = m1.slice()

// m3.sort((a, b) => {
//     if (a === b) {return 0}
//     return a < b ? -1 : 1 ; 
// })

// console.log('sort((a,b)) ',m3);

// const m4 = m1.slice()

// m4.sort((a, b) => {
//     if (a === b) {return 0}
//     return a > b ? -1 : 1 ; 
// })

// console.log('sort((a,b)) į kitą pusę',m4);

//=============== Išrūšiuoti masyvą mygtuko paspaudimu ===============
//4. Padaryti kad 2 rūšiavimas įvyktų paspaudus mygtuką.

document.querySelector('#r1').addEventListener('click', () => {
    const m3 = m1.slice()
    m3.sort((a, b) => {
        if (a === b) {return 0}
        return a < b ? -1 : 1 ; 
    })
    
    console.log('sort((a,b)) ',m3);
})
//5. Padaryti kad 3 rūšiavimas įvyktų paspaudus mygtuką.
document.querySelector('#r2').addEventListener('click', () => {
    const m4 = m1.slice();
    m4.sort((a, b) => {
        if (a === b) {return 0}
        return a > b ? -1 : 1 ; 
    })
    
    console.log('sort((a,b)) į kitą pusę',m4);
})

//6. pagal masyvo antrą elementą ASC

const mas2 = [
    ['zru', 'six'],
    ['rot', 'dzi'],
    ['uxm', 'ycw'],
    ['otr', 'sth']
];

const m6 = mas2.slice();
m6.sort((a,b) => {
    return a [1] < b[1] ? -1 : 1 ; 
})
console.log('masyvo antras elementas ASC', m6);

//7 pagal masyvo pirmą elementą DESC

const m7 = mas2.slice();
m7.sort((a,b) => {
    return a [0] > b[0] ? -1 : 1 ; 
})
console.log('masyvo pirmas elementas DESC', m7);

//8 pagal masyvo antro elemento antrą simbolį ASC

const m8 = mas2.slice();
m8.sort((a,b) => {
    return a [1][1] < b[1][1] ? -1 : 1 ; 
})
console.log('2 masyvo elemento 2 simbolis ASC', m8);

//9 pagal masyvo pirmo elemento trčią simbolį DESC

const m9 = mas2.slice();
m9.sort((a,b) => {
    return a [0][2] > b[0][2] ? -1 : 1 ; 
})
console.log('1 masyvo elemento 3 simbolis DESC', m9);

//10. pagal katę DESC
const m3 = [
    new Map([['dog', 5], ['cat', 7], ['snake', 58]]),
    new Map([['snake', 33], ['dog', 14], ['cat', 8]]),
    new Map([['dog', 51], ['cat', 77], ['snake', 23]]),
    new Map([['cat', 10], ['dog', 23], ['snake', 17]])
];

const m3Arr1 = m3.slice();


console.log (m3);


// m3.forEach(e => {
//     const tempArr = [...e];
//     tempArr.sort((a,b) => {
//         if (a[0] === 'cat'){return -1}
//     })
//     m3Arr.push(tempArr);
// })

// m3Arr.sort((a,b) => {

// })

m3Arr1.sort((a,b) => {
 return a.get('cat') > b.get('cat') ? -1 : 1;
})

console.log ('Pagal cat ', m3Arr1);
//11 pagal šunį ASC

const m3Arr2 = m3.slice();
m3Arr2.sort((a,b) => {
    return a.get('dog') < b.get('dog') ? -1 : 1;
   })
   
   console.log ('Pagal dog ', m3Arr2);

//12 pagal gyvatės iš šuns sumą DESC

const m3Arr3 = m3.slice();
m3Arr3.sort((a,b) => {
    return (a.get('dog') + a.get('snake')) > (b.get('dog') + b.get('snake')) ? -1 : 1;
   })
   
   console.log ('Pagal gyvatės iš šuns sumą ', m3Arr3);


//12 pagal masyvų ilgį
   const m4 = [
    [2,5,8,9,7,4,5,2,1,5,8,9,3],
    [3,6,9,8,5,4],
    [2,5,4,7,9,5,4,1,2,3,6,9,8,4,7],
    [5,2,1,4,7,8,5,3,1]
];
console.log (m4);

const m4Arr1 = m4.slice();
m4Arr1.sort((a, b) => {
    return a.length < b.length ? -1 : 1;
})

console.log ('pagal masyvų ilgį', m4Arr1);

//13 pagal masyvų elementų sumą

const m4Arr2 = m4.slice();
const suma = (accumulator, currentValue) => accumulator + currentValue;

m4Arr2.sort((a, b) => {
    
    return a.reduce(suma, 0) < b.reduce(suma, 0) ? -1 : 1;
})

console.log ('pagal masyvų elementų sumą', m4Arr1);


m4Arr2.forEach(e => {
    console.log(e, 'suma = ' + e.reduce(suma, 0));
})

// 14 su filter ištrinti skaičius didesnius nei 7

const m5 = [4,5,6,9,45,4,7,8,5,2,4,8,2,1,3,32,41,85,6,8,5,6,78,11,6,8,];

console.log (m5);
// const m5Arr1 = m5.slice();
const m5Arr1_filtered = m5.filter(el => el <= 7);

console.log ('Išfiltruoti skaičiai, didesni už 7:', m5Arr1_filtered);

//15 su filter iš m3 masyvo su mapais ištrinti tuos mapus, kuriuose šuo mažiau nei 10

console.log ('m3:', m3);
// const m3Arr4 = m3.slice();
const m3Arr4 = m3.filter(mp => mp.get('dog')  >= 10)

console.log ('mapai, kuriuose šuo daugiau nei 10:', m3Arr4);







