const ar = [5, 8, 9];

const [A, B, C] = ar; // skirtingos konstatntos priskiriamos 'ar' masyvo reikšmėms;
const [D, E, F] = ['labas', 99, 'rytas'];

console.log(A);
console.log(B);
console.log(C);
console.log(D);
console.log(E);
console.log(F);
console.log(ar);


// masyvas turi pavirsti į objektą a1: 55, a2: 77 ir t.t.
const masyvas = [55, 77, 99, 100]; 
const masyvas2 = [55, 77, 99, 100, 777];

let obj = {};
masyvas.forEach((el, i) => {
    obj['a'+(i+1)] = el;
})
console.log(obj);

const newMas = []
for (let param in obj){
    newMas.push(obj[param]);
}

console.log(newMas);

//Iš JSON padaryti sąrašą su li elementais, kuriuose yra knygų kategorijos
const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';

window.addEventListener('DOMContentLoaded', () => {


const objektas = JSON.parse(json);
console.log(objektas);
//console.log(objektas['title']);


const ul = document.createElement('ul');
const catMas = [];
objektas.forEach(e => {

   // for(let propt in e) {
   //     if (propt == 'title'){
   //     catMas.push(e[propt])   
   catMas.push(e.title); 
        // let li = document.createElement('li');
        // let txtNode = document.createTextNode(e[propt]);
        // li.appendChild(txtNode);
        // ul.appendChild(li);
     //   }
    //}
})
// ir padaryti, kad sąrašas būtų išrūšiuotas pagal title abėcelės tvarka

catMas.sort();
catMas.forEach(el => {
    let li = document.createElement('li');
    let txtNode = document.createTextNode(el);
    li.appendChild(txtNode);
    ul.appendChild(li);
})
//console.log(catMas);

document.body.appendChild(ul);
console.log('DOM fully loaded and parsed');
});
// 


//Sukurti dar du masyvus pagal masyvą, kur pirmas masyvas yra duoto masyvo reikšmių daugyba iš 2 
//o antras masyvas yra duoto masyvo reikšmių kvadratas const arr = [5, 8, 9, 22];

const arr2 = [5, 8, 9, 22];

const map1 = arr2.map(x => x * 2);
const map2 = arr2.map(x => x * x);

console.log(map1);
console.log(map2);

// DOMContentLoaded event 
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

//naudojama siekian pasiklausyti, kada užsikrauna DOM. Tokiu atveju nereikia naudoti 'defer' prie script tago.