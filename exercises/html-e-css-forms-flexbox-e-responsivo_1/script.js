const stateHeader = document.getElementById('state');
const dateBegin = document.getElementById('begin-date');
const btnSubmit = document.getElementById('submit');

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

function checkDate() {
  const inputContent = dateBegin.value;
  ;
  if (verifyCharacters(inputContent)) {
    verifyDate(inputContent);
  } 
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

btnSubmit.addEventListener('click', checkDate);