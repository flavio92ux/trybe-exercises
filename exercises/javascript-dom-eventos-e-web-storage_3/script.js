function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercicio 1

  //desenvolva uma funcao que crie cada dia do calendario
  //que adiciona como filhos e filhas da tag ul
  //com a ID days
  //os dias devem estar contidos em uma tag li e todos devem ter classe day
  //os dias 24, 25 e 31 sao feriados: alem da classe day, devem conter a classe holiday
  //os dias 4, 11, 18 e 25 sao sexta feira. devem conter a classe day e friday

  function createDaysInCalendar() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dayList = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
      const fillDayList = document.createElement('li');
      fillDayList.innerHTML = dezDaysList[index];

      if (dezDaysList[index] === 4 | dezDaysList[index] === 11 | dezDaysList[index] === 18) {
        fillDayList.className = 'day friday';
      } else if (dezDaysList[index] === 25) { 
        fillDayList.className = 'day holiday friday';
      } else if (dezDaysList[index] === 24 | dezDaysList[index] === 31) {
        fillDayList.className = 'day holiday';
      } else {
        fillDayList.className = 'day';
      }

      dayList.appendChild(fillDayList);
    }
  }

  createDaysInCalendar();

  //Exercício 2:

  //Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um 
  //botão com o nome "Feriados".
  //Adicione a este botão a ID "btn-holiday" .
  //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

  function createHollidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName; 
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  }

createHollidayButton('Feriados');

// 3-Implemente uma função que adicione ao botão "Feriados" um evento de 
// "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

//É interessante que este botão possua também a lógica inversa. 
//Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

/* ações
1-vou adicionar um addEventListener() chamando a função createHollidayButton
2-dentro desse event listener, vou armazenar em variáveis os elementos que contem a classe holliday
3- vou mudar a cor de fundo da variavel associada a classe anterior
4- se clicado novamente, volta ao padrao de fundo rgb(238, 238, 238)
*/

let changeColorHollidays = document.getElementById('btn-holiday');
changeColorHollidays.addEventListener('click', changeColors);

function changeColors() {
  let holliday = document.querySelectorAll('.holiday');
  let defaultColor = 'rgb(238, 238, 238)';
  let setColor = 'rgb(111,222,333)';
  
  for (let index = 0; index < holliday.length; index += 1) {
    if (holliday[index].style.backgroundColor === defaultColor) {
      holliday[index].style.backgroundColor = setColor;
    } else {
      holliday[index].style.backgroundColor = defaultColor;
    } 
  }
}

//4- Implemente uma função que receba como parâmetro a string "Sexta-feira" e 
//   crie dinamicamente um botão com o nome "Sexta-feira".
//   Adicione a este botão o ID "btn-friday" .
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function fridayDay(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let myButton = document.createElement('button');
  myButton.innerHTML = buttonName;
  myButton.id = 'btn-friday';
  buttonContainer.appendChild(myButton);
}

fridayDay('Sexta-Feira');

//5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica 
//   o texto exibido nos dias que são Sexta-feira.
//   É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele 
//   retorna à configuração inicial exibindo os dias.

function changeForFriday(fridaysArray) {
  let buttonFriday = document.getElementById('btn-friday');
  let dayFriday = document.getElementsByClassName('friday');
  let setNameForFriday = 'Friday';

  buttonFriday.addEventListener('click', myFunction);
  function myFunction() {
    for (let index = 0; index < dayFriday.length; index += 1) {
      if (dayFriday[index].innerHTML !== setNameForFriday) { 
        dayFriday[index].innerHTML = setNameForFriday;
      } else {
        dayFriday[index].innerHTML = fridaysArray[index];
      }
    }
  }
}

let dezFridays = [ 4, 11, 18, 25 ];
changeForFriday(dezFridays);

//6- Implemente duas funções que criem um efeito de "zoom". Ao passar o 
//   ponteiro do mouse em um dia do mês no calendário, o texto desse dia 
//   deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve 
//   retornar ao tamanho original.

function increaseLetter() {
  days = document.getElementsByClassName('day');

  for (let index = 0; index < days.length; index += 1){
    days[index].addEventListener('mouseover', mouseEmCima);
    function mouseEmCima() {
      days[index].style.fontSize = '30px';
    }
    
    days[index].addEventListener('mouseleave', mouseFora);
    function mouseFora() {
      days[index].style.fontSize = '20px';
    }
  }    
}

increaseLetter();

//7- Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve 
//   receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente 
//   um elemento com a tag <span> contendo a tarefa.
//   O elemento criado deverá ser adicionado como filho/filha da tag <div> que 
//   possui a classe "my-tasks" .

function addTask(str) {
  let myTasksContainer = document.getElementsByClassName('my-tasks')[0];

  let myTasks = document.createElement('span');
  myTasks.innerHTML = str;
  myTasks.className = 'my-tasks';

  myTasksContainer.appendChild(myTasks);

}

addTask('cozinhar');

//8- Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício 
//   anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente 
//   um elemento de tag <div> com a classe task.
//   O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//   O elemento criado deverá ser adicionado como filho/filha da tag <div> 
//   que possui a classe "my-tasks".

function addSubtitle(color) {
 let elementContainer = document.getElementsByClassName('my-tasks')[0];
 let newElement = document.createElement('div');
 newElement.style.backgroundColor = color;
 newElement.className = 'task';

 elementContainer.appendChild(newElement); 

}

addSubtitle('red');

//9- Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> 
//   referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, 
//   quando sua tarefa possuir a classe task selected ela estará selecionada.
//   Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, 
//   esta tarefa está deixando de ser uma tarefa selecionada.

function taskSelected() {
  let myTag = document.getElementsByClassName('task')[0];
  let setClass = 'task selected'
  myTag.addEventListener('click', clickSubtitle);

  function clickSubtitle() {
    if (myTag.className === 'task') {
      myTag.className = setClass;
    } else {
      myTag.className = 'task';
    }
  }

}

taskSelected();

//10- Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, 
//    atribua a este dia a cor da legenda da sua tarefa selecionada
//    Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração
//    inicial rgb(119,119,119)

function changeColorWhenDayClick() {
  let buttonSelected = document.getElementsByClassName('task selected');
  let buttonNoSelected = document.getElementsByClassName('task')[0]; 
  let colorButton = buttonNoSelected.style.backgroundColor;
  let days = document.querySelector('#days');

  days.addEventListener('click', olaMundo);

  function olaMundo(event) {
    if (buttonSelected.length > 0 && event.target.style.color != colorButton) {
      event.target.style.color = colorButton;
      console.log(colorButton);
    } else if (buttonSelected.length !== 0 && event.target.style.color === colorButton) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  }
}


changeColorWhenDayClick();
