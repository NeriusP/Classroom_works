// fetch('http://127.0.0.1:5500/_js/20/index.html')  //f-ja nuskaityti tekstui iš failo
// .then(function(response){
//     return response.text();
// }).then(function (html) {
//     console.log(html);
// })
//fetch('https://www.vz.lt')

// fetch('http://127.0.0.1:5500/_js/21/labas.txt')
//   .then(response => response.text())
//   .then(data => console.log(data));

// const abc = {
//     a: 'k',
//     b: {k: 1, z: 22, x: '(ŲŪŠŪĮŲŲŠ'},
//     c: [1, 2, 3]
// }

// const js = JSON.stringify(abc);  // f-ja skirta objektą paversti į stringą
//   console.dir(js);

//   console.log(JSON.parse(js)); // f-ja, skirta stringą paversti atgal į objektą


//============= Uždavinys 1
//Nuskaityti labas.txt ir paspaudus mygtuką jo turinį įdėti į h1 tagą
  const nH1 = document.createElement('h1');
  document.body.appendChild(nH1);
 //   const h1tag = document.querySelector('h1');
    //console.log(h1tag);

  const f = () => {fetch('http://127.0.0.1:5500/_js/21/labas.txt')
  .then(response => response.text())
  .then(data => nH1.innerHTML = data);}
  
  
//   document.querySelector('button').addEventListener('click', 
//   () => {fetch('http://127.0.0.1:5500/_js/21/labas.txt')
//   .then(response => response.text())
//   .then(data => h1tag.innerText = data);});

document.querySelector('button').addEventListener('click', f);


//============= Uždavinys 2
//Nuskaityti duotą nuorodą ir paspaudus mygtuką į h1 tagą
//sudėti visus brandus <li> taguose.

//https://in3.dev/vinted/api/brands/all

   const ulas = document.querySelector('ul');

  document.querySelector('button').addEventListener('click', () => {
    fetch('https://in3.dev/vinted/api/brands/all')
    .then(response => response.json())
    .then(data => data.forEach(x => {  // arba elementui:  ulas.innerHTML += '<li>'+x.title+'</li>'
        let li = document.createElement('li');
        li.innerText = x.title;
        ulas.appendChild(li);
        }));
    }); 
    
    // Gauti id numerį iš
    //https://in3.dev/vinted/api/news/ ir kreiptis su juo į produktą
    //https://in3.dev/vinted/api/products/---id
    //jame susirasti main_img, pasiimti pagal nr. iš masyvo img, ir jš atvaizduoti, po juo atvaizduoti title ir price