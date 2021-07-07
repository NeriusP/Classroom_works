// Reikia inputo type text. Reikia mygtuko "GO"
//Reikia antro inputo type text
//Paspaudus mygtuką, tekstas kuris yra inpute nr 1 būtų atvaizduotas konsolėjė
//o tekstas iš inputo nr 2 būtų atvaizduotas dinamiškai sukurtame tage h1


document.querySelector('#go').addEventListener('click', () => {
console.log(document.querySelector('#i1').value);
let h1 = document.createElement('h1');
let textN = document.createTextNode(document.querySelector('#i2').value)
h1.appendChild(textN);
document.body.appendChild(h1);
})

document.querySelector('#go3').addEventListener('click', () => {
   for (let i = 0; i<3; i++) {
    console.log(document.querySelector('#i1').value);
    let h1 = document.createElement('h1');
    let textN = document.createTextNode(document.querySelector('#i2').value)
    h1.appendChild(textN);
    document.body.appendChild(h1);
   }
    })

