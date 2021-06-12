function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('=======================Object========================');

const obj = {forest: 'Gump', digit2: 555, arr: [5,8,9]};
obj.spalva = 'Black'; // objekto savybė gali būti stringas, skaičius
obj.what = 'Cat';
obj,digit = 888;
obj.abc = {a: 'A', b: 'B', c: 'C'}; // objektų savybės viduje gali turėti kitus objektus

console.log (obj);
console.log (obj.spalva);
console.log (obj.abc.zz);

let obj2 = obj; // objektams darant priskyrimą, jis ne kuria kopiją, o priskiria nuorodą į objektą

let prop = 'what';

console.log(obj.what); 
console.log(obj[prop]); // norint pasiimti savybę iš stringo, naudojam []

obj.f2 = 'feDu';
obj.f1 = 'feVienas';
obj.f3 = 'feTrys';

prop = 'f' + rand(1, 3);
console.log(obj[prop]); //verčia stringą į kintamojo-savybės pavadinimą

//=======================Object========================
//Visų objekto savybių atvaizdavimas
let i;
for (i in obj) {

    console.log(i, obj[i]);
}

let zz = [2, 3]
zz.forEach (j => console.log(j));

