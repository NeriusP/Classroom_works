
localStorage.setItem('cat', 'Miau Miau');
localStorage.setItem('cat', 'Au Miau');
localStorage.setItem('dog', 'AU AU');

console.log(localStorage.getItem('cat'));
console.log(localStorage.getItem('dog'));
console.log(localStorage.getItem('zebra'));

localStorage.removeItem('dog');

localStorage.clear(); 

// for (let i = 1; i <= 100; i++) {
//     localStorage.setItem('dog'+i, 'AU AU')
// }


localStorage.setItem('ar', JSON.stringify(['a','b']));

console.log(JSON.parse(localStorage.getItem('ar')));

const catArr = [];

for (let i = 0; i < 100; i++){
    catArr.push('cat');
}
localStorage.setItem('catMas', JSON.stringify(catArr));
console.log(JSON.parse(localStorage.getItem('catMas')));

