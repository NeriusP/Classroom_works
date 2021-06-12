function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// =============== Nr. 9 c ===============
//9C * Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės; */
console.log('=============== Nr. 9 c ===============');
console.log('');
var uzd09c_kint01;
var count_outer = 0;
var count_inner = 0;
var loop_counter = 0;
var count5 = 0;

do {
    
    uzd09c_kint01 = rand (5, 10);
    // console.log (uzd09c_kint01);
    count_outer++;
 
    for (var i = 0; i < uzd09c_kint01; i++) {
        count_inner++;
       // console.log ('Vidinis ciklas:', 'kintamasis = ', uzd09_kint01, 'i =', i);
    }
    // if (uzd09_kint01 == 5) {
    //     loop_counter++;
    // }
     if (uzd09c_kint01 === 5) {
        loop_counter++;
        count5++;
        //console.log ('stringas', stringas);
     }
     else {count5 = 0}
    // console.log ('Rastas 5:', loop_counter);
}
while (count5 !==3 )
console.log ('Išorinių ciklų:', count_outer, 'Vidinių ciklų:', count_inner);
console.log ('Rastas 5:', loop_counter);
console.log ('count5', count5);

console.log('');