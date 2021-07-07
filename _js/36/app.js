
const json = '[{"id":1,"title":"MAC"},{"id":2,"title":"Nike"},{"id":3,"title":"Victoria\u2019s Secret"},{"id":4,"title":"Zara"},{"id":5,"title":"Zizzi"},{"id":6,"title":"Witteveen"},{"id":7,"title":"H&M"},{"id":8,"title":"RIMOWA"},{"id":9,"title":"Adidas"},{"id":10,"title":"Paw Patrol"},{"id":11,"title":"Mattel"},{"id":12,"title":"Kenzo"},{"id":13,"title":"Asos"}]';

//A. pagaminti Map tipo objektą kuriame raktas yra id iš json stringo ir išvesti į konsolę;

const jsonMap = new Map();
const map1 = new Map(JSON.parse(json).map(v => [v.id, v.title]));
console.log('Sukeltas į Map1`ą json', map1);

const jsonArr = JSON.parse(json);
console.log('Suparsintas json', jsonArr);
//į Mapą sukeliamas suparsinto masyvo turinys
jsonArr.forEach(el => jsonMap.set(el.id, el.title));
console.log('Sukeltas į Map`ą json', jsonMap);


//B. Pagaminti mygtuką HTML'e, kurį paspaudus 
//iš json'o stringo pasidarytų Set tipo objektas su
// reikšmėmis (kompanijų vardais) išrūšiuotais pagal abėcėlę ir išvesti setą į konsolę.

document.querySelector('#b1').addEventListener('click', () => {
    const jsonSet1 = new Set(jsonArr.map(v => v.title).sort());
    console.log('Surušiuotas Set1`as', jsonSet1);
    const jsonSet = new Set();
    //sukuriamas Seto turinys
    jsonArr.forEach(el => jsonSet.add(el.title))
    //Setas verčiamas į masyvą ir rūšiuojamas
    const sortedArr = [...jsonSet].sort();
    // Setas išvalomas
    jsonSet.clear();
    //į Setą sukeliamas surūšiuoto masyvo turinys
    sortedArr.forEach(el => jsonSet.add(el));
    console.log('Surušiuotas Set`as', jsonSet);
})



