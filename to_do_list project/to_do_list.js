localStorage.clear();

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class TaskList{
    constructor (name){
        this.name = name;
        this.taskArray = [];
    }
//================== F-ja, įrašymui į localStorage
    localStorSet(value) {
      this.taskArray.push(value);
      localStorage.setItem(this.name, JSON.stringify(this.taskArray));
    }

    //================== F-ja, trynimui iš localStorage
    localStorDel(value) {
      const index = this.taskArray.indexOf(value);
      const newArr = this.taskArray.splice(index, 1);
      console.log(this.taskArray, ' šalinamo el. indexas:', index, 'naujas masyvas: ', newArr);
      localStorage.setItem(this.name, JSON.stringify(this.taskArray));
    }

    //================== F-ja, pridedanti eventlistenerį delete mygtukui ==================

    delTaskListen (n) {
      n.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      this.localStorDel(e.target.innerText);
      })
    }
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
  if(localStorage.getItem(localStLists[i])) {
    //  setList();
    } else {
      console.log(`Jūs neturite jokių užduočių ${localStLists[i]}'e.`);
    }
}
//================== Eventlisteneris,  'textarea' išvalymui ==================
document.querySelector('textArea').addEventListener('click', (e) => e.target.value ='');



//================== F-ja, grąžinanti kintamojo vardą stringu ==================
//const varToString = varObj => Object.keys(varObj)[0]
//const displayName = varToString({ toDoList })




//================== Eventlisteneris ant input button'o,  'textarea' turiniui įkelti į taską ir to-do listą  ==================
document.querySelector('input').addEventListener('click', () => {
  const taskValue = document.querySelector('textArea').value;
  if (taskValue) {
    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'to-do');
    const taskSpan = document.createElement('span');
    const taskDel = document.createElement('div');
    //const taskX = document.createTextNode('x');
    taskDel.classList.add('delete');
    toDoList.delTaskListen(taskDel);
    const taskText = document.createTextNode(taskValue);
    //================== Išsaugojama į localStorage
    toDoList.localStorSet(taskValue);

    //================== Eventlisteneris, trinantis taską ir perkeliantis jį į 'progress' listą ==================
     taskSpan.addEventListener('dblclick', e => {
        const progDiv = document.createElement('div');
        progDiv.classList.add('task', 'in-progress');
        const progSpan = document.createElement('span');
        const progDel = document.createElement('div');
        progDel.classList.add('delete');
        inProgressList.delTaskListen(progDel);
        const progText = document.createTextNode(e.target.innerText);
        //================== Išsaugojama į localStorage
        inProgressList.localStorSet(e.target.innerText);
        //================== Trinama iš localStorage
        toDoList.localStorDel(e.target.innerText);
        progSpan.appendChild(progText);

        //================== Eventlisteneris, trinantis taską ir perkeliantis jį į 'done' listą ==================
        progSpan.addEventListener('dblclick', e => {
          const doneDiv = document.createElement('div');
          doneDiv.classList.add('task', 'done');
          const doneSpan = document.createElement('span');
          const doneDel = document.createElement('div');
          doneDel.classList.add('delete');
          doneList.delTaskListen(doneDel);
          const doneText = document.createTextNode(e.target.innerText);
           //================== Išsaugojama į localStorage
          doneList.localStorSet(e.target.innerText);
//================== Trinama iš localStorage
          inProgressList.localStorDel(e.target.innerText);
          
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

    taskSpan.appendChild(taskText);
    taskDiv.appendChild(taskSpan);
    //taskDel.appendChild(taskX);
    taskDiv.appendChild(taskDel);
    document.querySelector('div#to_do').appendChild(taskDiv);
    document.querySelector('textArea').value = '';
    //document.querySelector('div#to_do').appendChild(taskDiv.appendChild(taskSpan.appendChild(taskText)));
  }

})



