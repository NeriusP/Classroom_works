//ciklas for ... of, kaip ir for.. in, veikia su daugiau elementų, nei forEach
//o forEach tik su masyvų tipo elementais
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

const ar = [77,99,105,42];

// for (const val of ar){
//     console.log(val);
// }

const obj = {a:55, z:77, r:98, y:42};

// for (const val of obj){
//     console.log(val);
// }

for (const val in obj){
    console.log(val + ':' + obj[val]);
}

// Set https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const mySet1 = new Set();

mySet1.add(1);
mySet1.add(2);
mySet1.add(3);
mySet1.add(2); // šios reikšmės į Setą nepridės ir nieko nepraneš, nes ji pasikartojanti
console.log(mySet1)
const o1 = {a: 1, b: 2};
const o2 = {a: 1, b: 2};
mySet1.add(o1); // šiuos objektus pridės abu, nes jie rodo į skirtingus objektus, 
mySet1.add(o2); // objektus lygina pagal nuorodą, tas pats galioja ir masyvams

console.log('1', mySet1.has(1));
console.log('some text', mySet1.has('some text'));

let c1 = 'a';
let c2 = 'a';
++c1;
++c2;
console.log('===', c1 === c2)
mySet1.add(c1);
mySet1.add(c2);

for (const val of mySet1){
    console.log(val);
}

const mySet2 = new Set('Bla bla'); // išskirstys stringą raidėmis
console.log(mySet2)
const mySet3 = new Set(['Bla',  'Ala', 'blu']); // išskirstys masyvą į elementus
console.log(mySet3)
// Set'o neįmanoma rūšiuoti, jis neturi tokio metodo. Norint rūšiuoti, reikia pirma elementus rūšiuoti masyve.
const a = [...mySet3]; // čia irgi objekto dekonstrukcija, naudojama klonavimui, šiuo atveju išardo setą į masyvą
console.log(mySet3);
a.sort();
console.log(a);
mySet3.clear();
a.forEach(v => mySet3.add(v));
console.log(mySet3);
// const ooo = {a:1, b:2};  // objekto dekonstrukcija
// const oooCopy = {...ooo}

function sum(a, b) {
    console.log('suma', a+b);
}
sum(4,5);

const sm = [10, 21];
sum(...sm); // galima dekonstruktorių paduoti kaip argumentą

console.log('JSON: ', JSON.stringify(mySet3)); // Set'o tiesiogiai nestringify'ina
//reikia naudoti vieną iš būdų versti į masyvą, ir tuomet stringify

// JSON.stringify([...s]);
// JSON.stringify([...s.keys()]);
// JSON.stringify([...s.values()]);
// JSON.stringify(Array.from(s));
// JSON.stringify(Array.from(s.keys()));
// JSON.stringify(Array.from(s.values()));

console.log(mySet3.keys());
//=========== Uždaviniai ===========
//1. Sukurti setą iš 3 skirtingų stringų

const uzd1Set = new Set();
uzd1Set.add('Labas rytas');
uzd1Set.add('laba diena');
uzd1Set.add('Labas vakaras');

console.log(uzd1Set);
//2. Iteruoti sukurtą setą su for of
for(const el of uzd1Set){
    console.log('Iteruojam: ' + el); 
}

//3. Sukuriam masyvą iš seto

const masyvas = [...uzd1Set];
console.log(masyvas);
//4. į sukurtą masyvą pridedame dar du skirtingus stringus

masyvas.push('Viso gero', 'Iki');
console.log(masyvas);

//5.iš sukurto masyvo, duomenis sukeliam atgal į setą

masyvas.forEach(e => uzd1Set.add(e));
console.log(uzd1Set);

//6. sukuriam naują setą, kuriame būtų seno seto stringų pirmos raidės
const uzd6Set = new Set();
for(const el of uzd1Set) {
    uzd6Set.add(el[0]);
}
console.log(uzd6Set);

//7. naują setą išrūšiuojame pagal abėcėlę (padaryta, kad rūšiuotų didžiasias ir mažasias raides)

const mas07 = [...uzd6Set];
console.log(mas07);
mas07.sort((a, b) => {
  var nameA = a.toLowerCase(); // ignore upper and lowercase
  var nameB = b.toLowerCase() // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
})

console.log('sorted:' + mas07);
uzd6Set.clear();
console.log(uzd6Set);
mas07.forEach(e => uzd6Set.add(e));
console.log(uzd6Set);









