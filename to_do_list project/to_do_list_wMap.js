//localStorage.clear();

function rand(min=100000000, max=999999999) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ''+(Math.floor(Math.random() * (max - min + 1)) + min);
}

    class TaskList{
        constructor (name){
            this.name = name;
            this.taskMap = new Map();
        }
    //f-ja taskų Mapui objekte sukurti, skirta localStorage nuskaitytų duomenų atstatymui

    setMap (list) {
      list.forEach(element => {
        this.taskMap.set(element[0], element[1]);
      });
    }

    //f-ja, skirta DOM'o perpiešimui iš TaskList objektų Map'ų
    createDOMTasks(task=this.taskMap){
      if(task instanceof Object){
       // console.log(task.constructor.name);
        task.forEach((value, key) => {
         this.createDOMTask(value, key);
        })
      }
    }
 //f-ja, skirta 1 tasko sukūrimui DOM'e 
    createDOMTask (value, key) {
      const taskDiv = document.createElement('div');
          taskDiv.classList.add('task', this.name);
          const taskSpan = document.createElement('span');
          const taskAttr = key;
          taskSpan.setAttribute('name', taskAttr);
          const taskDel = document.createElement('div');
          //const taskX = document.createTextNode('x');
          taskDel.classList.add('delete');
          this.delTaskListen(taskDel);
          const taskText = document.createTextNode(value);
          taskSpan.appendChild(taskText);
          taskDiv.appendChild(taskSpan);
          //taskDel.appendChild(taskX);
          taskDiv.appendChild(taskDel);
          document.querySelector('div#'+this.name).appendChild(taskDiv);
    }

    deleteDOMTask() {}

    //================== F-ja, įrašymui į localStorage
    localStorSet(nameOfTask, value) {
      this.taskMap.set(nameOfTask, value);
      localStorage.setItem(this.name, JSON.stringify([...this.taskMap]));
    }

    //================== F-ja, trynimui iš localStorage
    localStorDel(nameOfTask) {
      this.taskMap.delete(nameOfTask);
      console.log(this.taskMap, ' šalinamo el. indexas:', nameOfTask);
      localStorage.setItem(this.name, JSON.stringify([...this.taskMap]));
    }

    //================== F-ja, pridedanti eventlistenerį delete mygtukui ==================

    delTaskListen (n) {
      n.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      this.localStorDel(e.target.previousElementSibling.getAttribute('name'));
      })
    }

    // f-ja naujam taskui DOMe sukurti
}



const localStLists = ['toDoList', 'inProgressList', 'doneList'];

const toDoList = new TaskList('toDoList');
const inProgressList = new TaskList('inProgressList');
const doneList = new TaskList('doneList');

console.log(toDoList);
console.log(inProgressList);
console.log(doneList);

//================== Tikriname localStorage, ar ten yra išsaugoti užduočių sąrašai ==================
for (let i = 0; i < localStLists.length; i++){
  if(localStorage.getItem(localStLists[i])) {      // tikriname localstorage pagal masyvą su listų pavadinimais, jei ten toks elementas yra
   const listFromLocalStorage = JSON.parse(localStorage.getItem(localStLists[i])); // parsiname jį
   console.log(`LocalStorage yra listas ${localStLists[i]}'e. jis atrodo taip:`, listFromLocalStorage);
   i === 0 ? toDoList.setMap(listFromLocalStorage) : i === 1 ? inProgressList.setMap(listFromLocalStorage) : doneList.setMap(listFromLocalStorage); // pridedame suparsintą elementą į TaskList objektus kaip Mapus
   console.log(toDoList.taskMap);
   console.log(inProgressList.taskMap);
   console.log(doneList.taskMap);
    //  setList();
    } else {
      console.log(`Jūs neturite jokių užduočių ${localStLists[i]}'e.`);
    }
}

toDoList.createDOMTasks();
inProgressList.createDOMTasks();
doneList.createDOMTasks();


let firstClick = true; // tikrina, ar pirmą kartą paspaudžiama ant textarea, jei taip - išvaloma;
//================== Eventlisteneris,  'textarea' išvalymui ==================
document.querySelector('textArea').addEventListener('click', (e) => {
  if (firstClick) {
    e.target.value ='';
    firstClick = false;
  }
});



//================== F-ja, grąžinanti kintamojo vardą stringu ==================
//const varToString = varObj => Object.keys(varObj)[0]
//const displayName = varToString({ toDoList })




//================== Eventlisteneris ant input button'o,  'textarea' turiniui įkelti į taską ir to-do listą  ==================
document.querySelector('input').addEventListener('click', () => {
  const taskValue = document.querySelector('textArea').value;
  const taskAttr = rand();
  if (taskValue) {
    toDoList.createDOMTask(taskValue, taskAttr);
    //================== Išsaugojama į localStorage
    toDoList.localStorSet(taskAttr, taskValue);

    //================== Eventlisteneris, trinantis taską ir perkeliantis jį į 'progress' listą ==================
     taskSpan.addEventListener('dblclick', e => {
      //   const progDiv = document.createElement('div');
      //   progDiv.classList.add('task', 'in-progress');
      //   const progSpan = document.createElement('span');
      //   progSpan.setAttribute('name', e.target.getAttribute('name'));
      //  // console.log(e.target.getAttribute('name'));
      //   const progDel = document.createElement('div');
      //   progDel.classList.add('delete');
      //   inProgressList.delTaskListen(progDel);
      //   const progText = document.createTextNode(e.target.innerText);
      inProgressList.createDOMTask(taskAttr, taskValue);
        //================== Išsaugojama į localStorage
        inProgressList.localStorSet(e.target.getAttribute('name'), e.target.innerText);
        //================== Trinama iš localStorage
        toDoList.localStorDel(e.target.getAttribute('name'));
        progSpan.appendChild(progText);

        //================== Eventlisteneris, trinantis taską ir perkeliantis jį į 'done' listą ==================
        progSpan.addEventListener('dblclick', e => {
          const doneDiv = document.createElement('div');
          doneDiv.classList.add('task', 'done');
          const doneSpan = document.createElement('span');
          doneSpan.setAttribute('name', e.target.getAttribute('name'));
          const doneDel = document.createElement('div');
          doneDel.classList.add('delete');
          doneList.delTaskListen(doneDel);
          const doneText = document.createTextNode(e.target.innerText);
           //================== Išsaugojama į localStorage
          doneList.localStorSet(e.target.getAttribute('name'), e.target.innerText);
//================== Trinama iš localStorage
          inProgressList.localStorDel(e.target.getAttribute('name'));
          
          doneSpan.appendChild(doneText);
          doneDiv.appendChild(doneSpan);
          doneDiv.appendChild(doneDel);
          document.querySelector('div#done').appendChild(doneDiv);
          e.target.parentNode.remove();
        })
        progDiv.appendChild(progSpan);
        progDiv.appendChild(progDel);
        document.querySelector('div#in_progress').appendChild(progDiv);
        e.target.parentNode.remove();
        //console.log(e.target.parentNode);

    })

    // taskSpan.appendChild(taskText);
    // taskDiv.appendChild(taskSpan);
    // taskDiv.appendChild(taskDel);
    // document.querySelector('div#to_do').appendChild(taskDiv);
    document.querySelector('textArea').value = '';
    //document.querySelector('div#to_do').appendChild(taskDiv.appendChild(taskSpan.appendChild(taskText)));
  }

})



