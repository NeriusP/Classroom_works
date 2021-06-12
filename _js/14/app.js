

// const logHi = function() {
//     console.log('Hi!');
// }

const logHi = function() {
    console.log(this.valueOf()); // 'this' kreipiasi į metodo savininką, kai objektas atsiranda, 'this' būna pakeičiamas objekto vardu
}

String.prototype.log = logHi; // Stringo prototipui priskiriamas naujas metodas log()

const kate = new String ('dvi katės aa');

const suo = new String ('trys šunys aaaa');

const pele = new String ('daug  pelių asasasas');

console.log(kate);
console.log(typeof(kate));
console.log(kate.indexOf('at'));

kate.log();

suo.log();

pele.log();

// logHi();
// logHi();
// logHi();

//=======================================================================
console.log('===================================');

String.prototype.getLetter = function(raide) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        if (this.valueOf()[i] === raide){
            counter++;
        }
    }
    console.log(`"${this.valueOf()}" turi ${raide} raidžių: ${counter}`);
}

kate.getLetter('a');
suo.getLetter('u');
pele.getLetter('s');

console.log('');

//=======================================================================
console.log('===================================');
function all() {
    console.log(this);
}
all();

//console.log(document);
const ufo  = {
    fly2: function (arr) {
        console.log(this);
    },
    fly1 (arr) {
        console.log(this);
        const go1 = function (a) {
            console.log('go ne arrow viduje', a, this); // ne arrow f-jos, kuri yra giliau (ne pirmoji objekto savybė) viduje 'this' rodo į Window
        }

        const go = (a) => {
            console.log('go arrow viduje', a, this); // arrow f-jos viduje 'this' visuomet rodo į objektą
        }
        arr.forEach(go);
        arr.forEach(go1);
    }

}
ufo.fly1([5, 9, 77]);
//=======================================================================
console.log('===================================');
function m2() {
    console.log(arguments);
}

m2('lietus', "rc")

console.log('===================================');
const m1 = (...arg) => { // čia yra spread operatorius, kuris paima visas argumentų reikšmes ir atiduoda masyvą
    console.log(arg);
}

m2('lietus', "rc", "MR")

console.log('===================================');
const m3 = (...arg) => { // čia yra spread operatorius, kuris paima visas argumentų reikšmes ir atiduoda masyvą
    let suma = 0;
    for (let i = 0; i < arg.length; i++){
        suma += arg[i];
    }
    console.log(arg);
    console.log(`${suma}/${arg.length}= ${suma/arg.length}`);
}

m3(5, 77, 21, 55, 77, 66, 1);
//m3();

const mas = [5, 4]

m3(...mas); // spread operatorius veikia į abi puses, išskaido masyvą į atskirus elementus

const o1 = {a: 'a', b: 'b', c: 42};
//const o2 = o1; // priskyrimas nuorodos - rodyklės
const o2 = {...o1};// naujo objekto sukūrimas, nukopijuojant visas objekto savybes (jas išskleidžiant naujo objekto viduje)

o2.a = 'g';

console.log(o1);
console.log(o2);
