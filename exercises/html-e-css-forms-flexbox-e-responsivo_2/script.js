const stateHeader = document.getElementById('state');
const dateBegin = document.getElementById('begin-date');
const btnSubmit = document.getElementById('submit');
const btnClean = document.getElementById('clean')

const states = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
    ];

for (let key in states) {
  let myElement = document.createElement('option');
  myElement.innerText = states[key];
  stateHeader.appendChild(myElement);
}

function renderCurriculum(event) {
  event.preventDefault();
  clearDiv();
  if (!checkDate()) {
    return 0;
  }
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');  
    const div = document.createElement('div');
    div.className = 'div-curriculum';
    div.innerHTML = userInput;
    dataUser.appendChild(div);  
 }
 catchTextArea();
}

 function catchTextArea() {
  const myTextArea = document.querySelector('.textarea').value;
  const myForm = document.querySelector('.form-data');
  const myDiv = document.createElement('div');
  myDiv.innerHTML = myTextArea;
  myForm.appendChild(myDiv);
}


function checkDate() {
  const inputContent = dateBegin.value;

  if (verifyCharacters(inputContent) && verifyDate(inputContent)) {
    return 1;
  } 
  return 0;
}



function verifyDate(event) {
  const day = parseInt(event[0]+event[1]);
  const month = parseInt(event[3]+event[4]);
  const year = parseInt(event[6]+event[7]+event[8]+event[9]);
  
  if((day > 0) && (day <= 31)){
    if ((month > 0) && (month <= 12) && year > 0){
      return 1;
    }
  }
  window.alert('Data inválida!');
  return 0;
}

function verifyCharacters(event) {
  if (event.length !== 10)  {
    window.alert('Formato de data inválido!'); 
    return 0;
  }

  if((event[2] != '/') || (event[5] != '/')) {
    window.alert('Formato de data inválido!'); 
    return 0;
  }
  return 1;
}



function clearDiv() {
  const myRender = document.querySelector('.form-data');
  while (myRender.firstChild) {
    myRender.removeChild(myRender.lastChild);
  }
}

btnClean.addEventListener('click', clearDiv);
btnSubmit.addEventListener('click', renderCurriculum);