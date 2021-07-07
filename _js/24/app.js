//8. Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). 
//Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą ir į console.log išvesti tą masyvą.
const uzd8 = {};

//6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.
//============== 6 ==============
const uzd6 = document.createElement('h1');
document.body.insertBefore(uzd6, document.querySelector('[name=uzd1]'));

//1. Sukurti text tipo input elementą ir mygtuką. 
//Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 

//============== 1 ==============
const uzd1 = document.querySelector('[name=uzd1]');
document.querySelector('button#u1').addEventListener('click', () => {
    
    uzd6.innerText = uzd1.value;
    if (!uzd8.mas1){
        uzd8.mas1 = [uzd1.value];
    }
    else {
        uzd8.mas1.push(uzd1.value)
    }    
    console.log(uzd8);
} )



//2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. 
//Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log

//============== 2 ==============
const uzd2 = document.querySelector('[name=uzd2]');
uzd2.addEventListener('change', () => {
    console.log(uzd2.value);
    uzd6.innerText = uzd2.value;
    if (!uzd8.mas2){
        uzd8.mas2 = [uzd2.value];
    }
    else {
        uzd8.mas2.push(uzd2.value)
    }    
   // console.log(uzd8);
    //pav.setAttribute('src', pav.dataset[selis.value]); 
} )

//3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
//Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log

//============== 3 ==============
const uzd3 = document.querySelectorAll('[name=uzd3]');

uzd3.forEach(el => el.addEventListener('change', () => {
    console.log(el.value);
    uzd6.innerText = el.value;
    if (!uzd8.mas3){
        uzd8.mas3 = [el.value];
    }
    else {
        uzd8.mas3.push(el.value)
    }    
    //pav.setAttribute('src', pav.dataset[selis.value]); 
} ));

//4. Sukurti vieną checkbox tipo elementą. Pažymėjus elementą išvesti i 
//console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”

//============== 4 ==============

const uzd4 = document.querySelector('[name=uzd4]');

uzd4.addEventListener('change', (e) => {
    if (e.target.checked){
        console.log('Pažymėta');
        uzd6.innerText = 'Pažymėta';
        if (!uzd8.mas4){
            uzd8.mas4 = ['Pažymėta'];
        }
        else {
            uzd8.mas4.push('Pažymėta')
        }  
    }
    else {
        console.log('Nepažymėta');
        uzd6.innerText = 'Nepažymėta';
        if (!uzd8.mas4){
            uzd8.mas4 = ['Nepažymėta'];
        }
        else {
            uzd8.mas4.push('Nepažymėta')
        }
    }
    //pav.setAttribute('src', pav.dataset[selis.value]); 
} );

//5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
//Pasikeitus reikšmėm checkbox elemente, kiekvieno pažymėto checkbox elemento reikšmę išvesti į console.log

//============== 5 ==============
const uzd5 = document.querySelectorAll('[name=uzd5]');
uzd5.forEach(el => el.addEventListener('change', () => {
    let values = '';
    let value_arr = [];
    uzd5.forEach(chckbox =>{
        
        if (chckbox.checked){
            values += chckbox.value+' '
            value_arr.push(chckbox.value)
        }
    })
    console.log(values);
    uzd6.innerText = values;
    if (!uzd8.mas5){
        uzd8.mas5 = [value_arr];
    }
    else {
        uzd8.mas5.push(value_arr);
    } 
} ) )

// Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, 
// iš tų masyvų duomenų, būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje 
// (vienas įrašas masyve, atinka vieną naują h3 tagą).



//============== 9 ==============
document.querySelector('#u9').addEventListener('click', () =>{


    for(var propt in uzd8){
        console.log(propt);
            let {[propt] : masmas} = uzd8;
           
        if (typeof masmas[0] !== 'object') {
            uzd8[propt].forEach((el) => {
                 
                    let h3 = document.createElement('h3');
                    h3.innerText = el;
                    document.body.appendChild(h3);
                
            })
        } 
        else {
                uzd8[propt].forEach(m => {
                    let h3 = document.createElement('h3');
                    m.forEach(e =>  {
                    
                    h3.innerText += e + ' ';
                   } )
                   document.body.appendChild(h3);
                }) 
        }   
        
    }
});

//============== 10 ==============
//Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.
document.querySelector('#u9R').addEventListener('click', () =>{
    for(var propt in uzd8){
        uzd8[propt] = [];
       // console.log(uzd8);
    }
});

//Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.
//============== 11 ==============


document.querySelector('#u9C').addEventListener('click', () => {
   let domH3 = document.querySelectorAll('h3');
   domH3.forEach(el => el.remove())
});

//Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. 
//Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. Kintamąjį išvesti i console.log 
//Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje.
//============== 12 ==============

document.querySelector('#u9G').addEventListener('click', () => {
    let uzd12 = {};
    let i = 0;
    for(var propt in uzd8){
        uzd12['_'+i] = uzd8[propt]; // object destructuring https://dmitripavlutin.com/access-object-properties-javascript/
        i++;
    }    
    let jsonString = JSON.stringify(uzd12);
    console.log(jsonString);
    uzd12New = JSON.parse(jsonString);

    for(var propt in uzd12New){
        console.log(propt);
            let {[propt] : masmas} = uzd12New;
           
        if (typeof masmas[0] !== 'object') {     // čia galima buvo naudoti Array.isArray() metodą;
            uzd12New[propt].forEach((el) => {
                 
                    let h3 = document.createElement('h3');
                    h3.innerText = propt + ': ' + el;
                    document.body.appendChild(h3);
                
            })
        } 
        else {
            uzd12New[propt].forEach(m => {
                    let h3 = document.createElement('h3');
                    h3.innerText = propt + ': ';
                    m.forEach(e =>  {
                    
                    h3.innerText += e + ' ';
                   } )
                   document.body.appendChild(h3);
                }) 
        }   
        
    }

});





