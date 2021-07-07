const mas1 = ['cat', 'bird', 'tiger', 'dog'];

const set1 = new Set(['cat', 'bird', 'tiger', 'dog']);

const map1 = new Map([['medium','cat'], ['small','bird'], ['big','tiger'], ['unknown','dog']]);
//1. isrūšiuot į abi puses

class Sorter{
    static asc = 'asc';
    static dsc = 'dsc';

    static sortArr(data, sortType = this.asc){
        if (sortType === 'asc'){
            data.sort();
        }
        else {
            data.sort((a,b) => {
                return a > b ? -1 : 1;
           });
        }
        return data;
    };
    

    static sortSet(set, sortType){
            
            const setArr = [...set];
            this.sortArr(setArr, sortType);
            set.clear();
            setArr.forEach((e) => set.add(e));
            console.log(`tai ${sortType} surūšiuotas Setas'`, set);
            return set;
    };

        static sortMap(map, sortType, key=false){
          if (sortType === 'asc') { 
              const keyS = key ? 0 : 1;
              console.log('keyS =', keyS);
                if (key) {
                    const setArr = [...map];
                    setArr.sort((a,b) => {
                        return a[0] < b[0] ? -1 : 1;
                });
                    map.clear();
                    setArr.forEach((e) => map.set(e[0], e[1]));
                    console.log(`tai pagal KEY ${sortType} surūšiuotas Mapas`, map);
                    return map;
                }
                else {
                    const setArr = [...map];
                    setArr.sort((a,b) => {
                        return a[1] < b[1] ? -1 : 1;
                });
                    map.clear();
                    setArr.forEach((e) => map.set(e[0], e[1]));
                    console.log(`tai pagal VALUE ${sortType} surūšiuotas Mapas`, map);
                    return map;
                }
            }
            else {
                if (key) {
                    const setArr = [...map];
                    setArr.sort((a,b) => {
                        return a[0] > b[0] ? -1 : 1;
                });
                    map.clear();
                    setArr.forEach((e) => map.set(e[0], e[1]));
                    console.log(`tai pagal KEY ${sortType} surūšiuotas Mapas`, map);
                    return map;
                }
                else {
                    const setArr = [...map];
                    setArr.sort((a,b) => {
                        return a[1] > b[1] ? -1 : 1;
                });
                    map.clear();
                    setArr.forEach((e) => map.set(e[0], e[1]));
                    console.log(`tai pagal VALUE ${sortType} surūšiuotas Mapas`, map);
                    return map;
                }
            }
          

        };
    

    static sortAsc(mas, key = false){
        
        if(mas.constructor.name === 'Set'){
            
            this.sortSet(mas, this.asc);
            return mas;
           
        }
        else if (mas.constructor.name === 'Map'){
            return this.sortMap(mas, this.asc, key);
            
        }

        else {

            console.log('Surūšiuotas ASC masyvas', this.sortArr(mas));
            return  mas;
        }
    }

    static sortDsc(mas, key = false){
        if(mas.constructor.name === 'Set'){
            this.sortSet(mas, this.dsc);
           
        }
        else if (mas.constructor.name === 'Map'){
            
            return this.sortMap(mas, this.dsc, key);
        }

        else {
            console.log('Surūšiuotas DSC masyvas', this.sortArr(mas, this.dsc));
            return  mas;
        }
    }

        
    
}

//const sort1 = new Sorter();
console.log('nerūšiuotas masyvas', mas1);
Sorter.sortAsc(mas1);
// console.log('rūšiuotas ASC masyvas', mas1);
Sorter.sortDsc(mas1);
// console.log('rūšiuotas DSC masyvas', mas1);
console.log('tai nerūšiuotas Setas', set1);

Sorter.sortAsc(set1);
Sorter.sortDsc(set1);

console.log('tai nerūšiuotas Mapas', map1);
Sorter.sortAsc(map1);
Sorter.sortDsc(map1);
Sorter.sortAsc(map1, true);
Sorter.sortDsc(map1, true);
