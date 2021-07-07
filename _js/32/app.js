


class Tv {
    constructor(is, kanalai, title) {
        this.istrizaine = is;
        this.kanalai = kanalai;
        this.uuid = 'tv-'+this.rand(1000000, 9999999);
        this.title = title;
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    putIn() {
        localStorage.setItem(this.title, JSON.stringify(this));
    }

    getBack() {
        let out3 = localStorage.getItem(this.title);
        out3 = JSON.parse(out3);
        return [out3.istrizaine, out3.kanalai, out3.title]
    }
}

const tv1 = new Tv(78, ['LTV', 'TV3', 'LNK'], 'tv1');
const tv2 = new Tv(32, ['Discovery', 'GC', 'MTV'], 'tv2');

tv1.putIn();
let out1 = new Tv(...tv1.getBack());  // konstruojam naują objektą

console.log(out1);

out1.istrizaine++;
out1.putIn();
out1 = new Tv(...out1.getBack());

console.log(out1);

const clist = ['LTV', 'TV3', 'LNK', 'PoloniaTV', 'SAT1'];
const clist1 = ['RATATA', '2TV', 'INFO', 'BALTICUM', 'SAT3'];
const cSet = new Set(['LTV', 'TV3', 'LNK', 'PoloniaTV', 'SAT1']);


class Sorter {
    constructor (ar) {
        this.arr = ar;
    }

    sortByAsc(val){
        if (val) {
            return val.sort();
        }
        else{
            this.arr.sort();
            return this.arr.slice();
        }
    }

    sortByDesc(val){
        if (val) {

            this.s1 = new Sorter(val);
            return this.s1.sortByDesc();
        //     val.sort((a, b) =>{
        //         return a > b ? -1 : 1;
        //         });
        //         return val.slice();
        }
        else{
            this.arr.sort((a, b) =>{
            return a > b ? -1 : 1;
            });
            return this.arr.slice();
        }
    }
//pagal stringo ilgį DESC
    sortByStringLengthDesc(val){
        if (val) {
            this.s1 = new Sorter(val);
            return this.s1.sortByStringLengthDesc();
            // val.sort((a, b) =>{
            //     return a.length > b.length ? -1 : 1;
            //     });
            //     return val.slice();
        }
        else{
        this.arr.sort((a, b) =>{
        return a.length > b.length ? -1 : 1;
        });
        return this.arr.slice();
    }
}
//pagal paskutinį simbolį ASC
sortByLastSymbolAsc(val){
    if (val) {
        this.s1 = new Sorter(val);
        return this.s1.sortByLastSymbolAsc();
        // val.sort((a, b) =>{
        //     // console.log(a[a.length-1], b[b.length-1]);
        //     return (a[a.length - 1] < b[b.length - 1]) ? -1 : 1;
        //     });
        //     return val.slice();
    }
    else{
        this.arr.sort((a, b) =>{
        // console.log(a[a.length-1], b[b.length-1]);
        return (a[a.length - 1] < b[b.length - 1]) ? -1 : 1;
        });
        return this.arr.slice();
    }
}

}
console.log('Nerūšiuotas', clist);
const sorter = new Sorter(clist);
console.log('Rūšiuotas su sortByAsc()', sorter.sortByAsc());
console.log('Rūšiuotas su sortByDesc()', sorter.sortByDesc());
console.log('Rūšiuotas su sortByStringLengthDesc()', sorter.sortByStringLengthDesc());
console.log('Rūšiuotas su sortByLastSymbolAsc()', sorter.sortByLastSymbolAsc());

console.log('Setas', cSet);
class SetSorter {
    constructor (ar) {
        this.arr = [...ar];
    }


        sortByAsc(){
                        
                this.arr.sort();
                let sortedSet = new Set();
                this.arr.forEach(el => sortedSet.add(el));
                return sortedSet;
            
        }

        sortByDesc(){
            this.arr.sort((a, b) =>{
            return a > b ? -1 : 1;
            });
            let sortedSet = new Set();
            this.arr.forEach(el => sortedSet.add(el));
            return sortedSet;
        }
    //pagal stringo ilgį DESC
        sortByStringLengthDesc(){
        this.arr.sort((a, b) =>{
        return a.length > b.length ? -1 : 1;
        });
        let sortedSet = new Set();
        this.arr.forEach(el => sortedSet.add(el));
        return sortedSet;
    }
    //pagal paskutinį simbolį ASC
    sortByLastSymbolAsc(){
        this.arr.sort((a, b) =>{
        // console.log(a[a.length-1], b[b.length-1]);
        return (a[a.length - 1] < b[b.length - 1]) ? -1 : 1;
        });
        let sortedSet = new Set();
        this.arr.forEach(el => sortedSet.add(el));
        return sortedSet;
    }
}    

const setSorter = new SetSorter(cSet);
console.log('Rūšiuotas Setas su sortByAsc()', setSorter.sortByAsc());
console.log('Rūšiuotas Setas su sortByDesc()', setSorter.sortByDesc());
console.log('Rūšiuotas Setas su sortByStringLengthDesc()', setSorter.sortByStringLengthDesc());
console.log('Rūšiuotas Setas su sortByLastSymbolAsc()', setSorter.sortByLastSymbolAsc());

//3. Padaryti kad užrašius sorter.sortByAsc(['bla', 'ku ku', 'bam bam']) būtų išrušiuotas ir grąžintas masyvas, kuris pateikiamas kaip argumentas

console.log('Rūšiuotas clist1 su sortByAsc()', sorter.sortByAsc(clist1));
console.log('Rūšiuotas clist1 su sortByDesc()', sorter.sortByDesc(clist1));
console.log('Rūšiuotas clist1 su sortByStringLengthDesc()', sorter.sortByStringLengthDesc(clist1));
console.log('Rūšiuotas clist1 su sortByLastSymbolAsc()', sorter.sortByLastSymbolAsc(clist1));

//Sukurti klasę Kibiras1. Konstruktoriuje Sukurti savybę akmenuKiekis  kuri lygi 0. 
//Parašyti šiai savybei metodus prideti1Akmeni() pridetiDaugAkmenu($kiekis) ir metodą 
//išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti kibiro objektą ir pademonstruoti 
//akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras {

    static bendrasAkmenuKiekis = 0; // statine savybe
    static skaiciuotiVisusAkmenis(kiekis) {     //statinis metodas
        this.bendrasAkmenuKiekis += kiekis;     // klasė pasiekiama su  'this'
        // arba Kibiras.bendrasAkmenuKiekis += kiekis;  //statines savybes pasiekimas
    }

    static kiekPririnktaAkmenu(){
        console.log('viso surinkta akmenų:', this.bendrasAkmenuKiekis);
    }

    constructor(akmenuKiekis = 0) {
        this.akmenuKiekis = akmenuKiekis;
    }



    prideti1Akmeni() {
        this.akmenuKiekis++;
        Kibiras.skaiciuotiVisusAkmenis(1);
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis = this.akmenuKiekis + kiekis;
        this.constructor.skaiciuotiVisusAkmenis(kiekis); //statines savybes ar metodo pasiekimas galimas ir su 'this.constructor'
    }

    kiekPririnktaAkmenu(){
        console.log('Pririnkta Akmenų: ', this.akmenuKiekis);
    }
}

const kibiras1 = new Kibiras();
kibiras1.kiekPririnktaAkmenu();
kibiras1.prideti1Akmeni();
kibiras1.kiekPririnktaAkmenu();
kibiras1.pridetiDaugAkmenu(10);
kibiras1.kiekPririnktaAkmenu();
const kibiras2 = new Kibiras();
const kibiras3 = new Kibiras();
kibiras2.pridetiDaugAkmenu(15);
kibiras3.pridetiDaugAkmenu(23);
Kibiras.kiekPririnktaAkmenu();

//Sukurti klasę Piniginė. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir 
//metaliniaiPinigai. Parašyti metodą ideti($kiekis), kuris prideda pinigus į piniginę. 
//Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie 
//popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į 
//konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir 
//pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja 
//realiame pasaulyje.

class Pinigine {
    constructor() {
        this.popieriniaiPinigai = [];
        console.log('Popieriniai', this.popieriniaiPinigai);
        this.metaliniaiPinigai = [];
        console.log('Metaliniai', this.metaliniaiPinigai);
    }
    ideti(kiekis){
        if(kiekis <= 2){
            this.metaliniaiPinigai.push(kiekis);
            console.log('Metaliniai', this.metaliniaiPinigai);
        }
        else{
            this.popieriniaiPinigai.push(kiekis);
            console.log('Popieriniai', this.popieriniaiPinigai);
        }
    }
    skaiciuoti(){
     console.log('Metaliniai pinigai ', this.metaliniaiPinigai.reduce((sum,val) => sum + val));
     console.log('Popieriniai pinigai ', this.popieriniaiPinigai.reduce((sum,val) => sum + val));
    }
}

const pinigine1 = new Pinigine();
 pinigine1.ideti(1);
 pinigine1.ideti(3);
 pinigine1.skaiciuoti();
 pinigine1.ideti(2);
 pinigine1.ideti(15);
 pinigine1.skaiciuoti();


// console.log(tv1);
// console.log(tv2);

// console.log(tv1.istrizaine);
// console.log(tv1.kanalai);
// console.log(tv2.kanalai);

// const tv3 = {
//     istrizaine: 78,
//     kanalai: ['LTV', 'TV3', 'LNK']
// };

// const tv4 = {
//     istrizaine: 32,
//     kanalai: ['Discovery', 'GC', 'MTV']
// };

// console.log(tv3);
// console.log(tv4);

// localStorage.setItem('tv3', JSON.stringify(tv3));
// let out3 = localStorage.getItem('tv3');
// out3 = JSON.parse(out3);
// console.log('Grąžintas', out3);

// localStorage.setItem('tv4', JSON.stringify(tv4));
// let out4 = localStorage.getItem('tv4');
// out4 = JSON.parse(out4);
// console.log('Grąžintas', out4);
// out4.istrizaine++;
// localStorage.setItem('tv4', JSON.stringify(out4));
// out4 = localStorage.getItem('tv4');
// out4 = JSON.parse(out4);
// console.log('Grąžintas', out4);