function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mapasD = new Map();
let counterD;

do {
    const key = rand(10,20);
    const value = rand(10,20);

    if (value === 13) {
        mapasD.set(key, value+'');
    }

    else {
        mapasD.set(key, value);
    }
    
    // for (const v of mapasD) {
    //     mapasD[1] == 13 ? counterD++ : counterD ;
    // }
    counterD = 0;
    mapasD.forEach(v => v == 13 ? counterD++ : counterD)
    // if (mapasD.size < 11){
    //     mapasD.set(key, value);
    // }
    
    
    // if (value === 13) {
    //     counter++;
    //     mapasD.set(key, value);
    // }
    
}
while (counterD < 3);
console.log('Mapas, kuriame yra 3 reikšmės = "13"', mapasD);