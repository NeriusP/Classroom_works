//5. Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
//Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). 
//Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). 
//Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.


class PirkiniuKrepselis{
    constructor(){
        this.turinys = new Map();
    }

    idetiSureliu(kiekis){
        if (this.turinys.has('sureliai')){
        const esamasKiekis = this.turinys.get('sureliai');
        this.turinys.set('sureliai', esamasKiekis + kiekis);
        }
        else {
            this.turinys.set('sureliai', kiekis);
        }
    }

    idetiPieno(kiekis){
        if (this.turinys.has('pienas')){
            const esamasKiekis = this.turinys.get('pienas');
            this.turinys.set('pienas',  esamasKiekis + kiekis);
        }
        else {
            this.turinys.set('pienas', kiekis);
        }
    }

    idetiDuonos(kiekis){
        if (this.turinys.has('duona')){
            const esamasKiekis = this.turinys.get('duona');
            this.turinys.set('duona',  esamasKiekis + kiekis);
        }
        else {
            this.turinys.set('duona', kiekis);
        }
    }

    spausdintiKrepseli(){
        console.log(this.turinys);
    } 
}

const pirkiniai1 = new PirkiniuKrepselis();
pirkiniai1.spausdintiKrepseli();
pirkiniai1.idetiSureliu(5);
pirkiniai1.idetiSureliu(5);
pirkiniai1.idetiPieno(5);
pirkiniai1.idetiDuonos(5);
pirkiniai1.idetiSureliu(5);
pirkiniai1.idetiDuonos(3);
pirkiniai1.idetiPieno(1);
pirkiniai1.spausdintiKrepseli();

//=====================================================
//8.Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstriktoriuje yra priskiriama reikšmė 500. 
//Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
//Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, 
//sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs 
//ir valgomas dėti į Krepsi objektą, kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį 
//daugiau nei dydis).

class Grybas{
 constructor(){
     this.valgomas = this.rand_boolean();
     this.nesukirmijes = this.rand_boolean();
     this.svoris = this.rand(5, 45);
 }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    rand_boolean(min=0, max=1) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min === 0 ? true : false;
    }

    isvestiGryba(){
        console.log(`Valgomas: ${this.valgomas}, Sukirmijęs: ${this.sukirmijes}, Svoris: ${this.svoris}`);
    }

}

const grybas1 = new Grybas();
//grybas1.isvestiGryba();

class Krepsys{
    constructor() {
        this.dydis = 500;
    }

    krepsioTurinys(){
        console.log(this);
    }    
}

const manoKrepsys = new Krepsys();
let grybuNr = 0;
let grybuSvoris = 0;


do {
    const grybasN = new Grybas();
  //  grybasN.isvestiGryba();
    if (grybasN.valgomas && grybasN.nesukirmijes){
        manoKrepsys['grybas'+grybuNr] = grybasN;
        grybuNr++;
        grybuSvoris = grybuSvoris + grybasN.svoris;
    }
}
while (manoKrepsys.dydis > grybuSvoris);

console.log(manoKrepsys);
console.log('Grybų svoris:', grybuSvoris);

//3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
//Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti 
//metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių.

//4.(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių 
//skaičių visuose Troleibusas objektuose. Tam tikslui sukurkite statini metodą 
//bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės 
//visiKeleiviai, kurioje yra įrašytas bendras keleivių skaičius. Taip pat modifikuokite metodus 
//ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Troleibusas {
    static visiKeleiviai = 0;
    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log('Troleibusais važiuoja: ', this.visiKeleiviai);
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius){
        this.visiKeleiviai += keleiviuSkaicius;
    }

    constructor(){
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius =  this.keleiviuSkaicius + keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius){
        if (keleiviuSkaicius <= this.keleiviuSkaicius) {
            this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
        }
        else {this.keleiviuSkaicius = 0}
        Troleibusas.bendrasKeleiviuSkaicius(-1*keleiviuSkaicius);
    }

    vaziuoja(){
        console.log('Troleibusu važiuoja: ', this.keleiviuSkaicius);
    }
}

const t1 = new Troleibusas;
const t2 = new Troleibusas;
t1.vaziuoja();
t1.ilipa(5);
t1.vaziuoja();
t1.ilipa(6);
t1.vaziuoja();
t1.ilipa(12);
t1.vaziuoja();
t2.ilipa(17);
t2.islipa(10);
Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();



//7. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo 
//metu. Parašyti metodą ipilti($kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis 
//nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. 
//Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(),
//kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. 
//Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
//Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
    constructor(t){
        this.turis = t;
        this.kiekis= 0;
    }
    ipilti(kiekis) {
        if (kiekis <= this.turis){
            this.kiekis = kiekis;
        }
        else {
            this.kiekis = this.turis;
        }
    }

    ispilti(){
        const k = this.kiekis;
        this.kiekis = 0;
        return k;
    }
    stiklinejeYra() {
        console.log(`Stiklinėje, kurios tūris ${this.turis} ml yra, ${this.kiekis} ml.`);
    }
}

const stikline100 = new Stikline(100);
const stikline150 = new Stikline(150);
const stikline200 = new Stikline(200);

stikline200.ipilti(200);
stikline200.stiklinejeYra();
stikline150.ipilti(stikline200.ispilti());
stikline150.stiklinejeYra();
stikline200.stiklinejeYra();
stikline100.ipilti(stikline150.ispilti());
stikline100.stiklinejeYra();
stikline150.stiklinejeYra();
stikline100.ispilti();
stikline100.stiklinejeYra();
