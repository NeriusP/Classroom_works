function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const obj = new Object();

console.log(obj);

// Kuriame klasę Katė

class Kate {

    constructor() { // kuriant new Kate ši f-ja pasleidžia automatiškai
       // console.log('Nauja kate');
        this.age = rand (1, 8);
    }
    voice = () => console.log('miau'); // čia svarbu naudoti arrow f-ją, nes veikia 'this', o f-jose. esančiose giliau, this rodo į Window - DOM objektą/ ???

    getAge = () => this.age;

}

const ka1 = new Kate(); // sukuriamas naujas objektas Kate
const ka2 = new Kate(); 
console.log(ka1, ka2); // Kate objektas neturi iš tėvo prototipo paveldėtų savybių /????
ka2.voice();

console.log(ka2.getAge());