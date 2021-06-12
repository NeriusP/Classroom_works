function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//================= while ciklas
// naudojamas, kai iteracijų skaičius nežinomas, bet gali neįvykti nė viena iteracija

console.log('prieš ciklą');

var cycle = 1;

while (cycle <= 5) {
    console.log('cikle', cycle);
    cycle++;
}

console.log('po ciklo');

//================= do while, naudojamas, kai iteracijų skaičius nežinomas, bet reikalinga bent viena iteracija

console.log('prieš do while');

var cycle2 = 1;

do {
    console.log('cikle', cycle2);
    cycle2++;
} while (cycle2 <= 5);

console.log('po do while');

//================= for
// naudojamas, kai prieš ciklą žinomas iteracijų skaičius
console.log('prieš for');
for (var cycle3 = 1; cycle3 <= 5; cycle3++) {
    console.log('cikle', cycle3);
}
console.log('po for');
// galima iškelti kintamojo deklaraciją, bet palikti kabliataškį skliaustuose
var cycle3 = 1
for (; cycle3 <= 5; cycle3++) {
    console.log('cikle', cycle3);
}


//  do while su rand f-ja

var h = 0;
var coin;
var counter = 0;
do {
    coin = rand (0, 1) ? 'H' : 'D';
    if (coin == 'H') {
        h++
    }
    console.log('cikle', ++counter);
 } while (h < 3)

 // ciklas cikle



//  var stringas = '';

//  for (var i = 1; i <= 21; i++ ) {
//      if (i !==1 ) {
//          stringas += ',';
//      } 
//      stringas += rand(10, 99);

//  }
//  console.log (stringas);

 //-------------------------------

 var stringas = '';
 var rand_sk, i = 0, counter = 0;
 do {
    if (i !==0 ) {
        stringas += ',';
    }    
    rand_sk = rand(10, 99);
    counter += rand_sk;
    stringas += rand_sk;
    i++;
 }

 while (counter < 250);
 console.log (stringas, 'suma =', counter);