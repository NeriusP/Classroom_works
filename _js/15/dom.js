function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document); // pasiima visą html dokumentą

const h1 = document.querySelector('h1');
const h5 = document.querySelector('style');

console.log (h5)

// h1.classList.remove('abc');
// h1.classList.add('bbc');
h1.classList.replace('abc', 'bbc');
h1.classList.contains('xxx');

console.log (h1.classList.contains('bbc'))




const h2 = document.querySelectorAll('h1');
console.log(h1);
console.log(typeof h1);

console.log (h1.style)

h1.style.color = 'green';
h2[1].style.color = 'red';
console.log (h2[0]);


//=====================================================

const h3 = document.querySelectorAll('li');
console.log(h3);
h3.forEach(x => {x.style.fontSize = rand(10, 30) + 'px'; console.log(x.style.fontSize)});



// for (let i = 0; i < h3.length; i++){
//     let fonts = rand (10, 30) + 'px';
//     h3[i].style.fontSize = fonts;
//     console.log(h3[i].style.fontSize);
// }

const klases = ['one', 'two', 'three'];

const ul = document.querySelectorAll('ul');
ul.forEach((x, i) => {
    x.querySelectorAll('li').forEach((u, j) => { u.style.fontSize = rand(10, 30) + 'px'; u.classList.add(klases[j])}); 
                    if (i % 3 === 0){
                        x.style.color = 'red';
                      //  x.classList.add(klases[i % 3])
                    } 
                    else if (i % 3 === 1 ){
                        x.style.color = 'green';
                    //    x.classList.add(klases[i % 3])
                    } 
                    else {
                        x.style.color = 'blue';
                      //  x.classList.add(klases[i % 3])
                    } 
                } )



//const li = ul.querySelectorAll('li');
//li.forEach(u => u.style.fontSize = rand(10, 30) + 'px');

