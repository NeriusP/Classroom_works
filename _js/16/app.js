function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const a1 = document.querySelectorAll('.container div');
console.log(a1);
a1.forEach((x, i) => {
    if (i % 2 == 0){
        x.style.height = '100px';
        x.style.width = '300px';
        let spalva = (rand(0, 255));
       // x.style.backgroundColor = 'rgb(' + rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255) +')';
       // x.style.backgroundColor = 'rgba' + '(128' + ', ' + '128' + ', ' + '128' + Math.random() + ')';
        x.style.backgroundColor = 'rgb(' + spalva + ', ' + spalva + ', ' + spalva +')';
        x.style.borderColor = 'black';
        //x.classList.add('container');
    }

    else {
        x.classList.add('uzd01');
        //x.classList.add('container');
    }
})

//var spalva = (rand(1, 32)*8);
//console.log('spalva = ', spalva);
console.log('================================');