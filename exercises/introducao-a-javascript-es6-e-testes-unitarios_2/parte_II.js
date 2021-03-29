const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: 
//  o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const morning = (event, key, value) => {
  event[key] = value;

  console.table(event);
}

morning(lesson2, 'turno', 'manhã');

//2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (event) => Object.keys(event);

console.log(listKeys(lesson2));

//3-Crie uma função para mostrar o tamanho de um objeto.

const objSize = (event) => Object.keys(event).length;
console.log(objSize(lesson1));

//4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson2));

//5-Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign . 
//Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numbersStudents = (obj) => {
  const array = Object.keys(obj);
  let numStudent = 0;

  for (key of array) {
    numStudent += obj[key].numeroEstudantes;
  }
  console.log(numStudent);
}

numbersStudents(allLessons);

//7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const keyFromPosition = (obj, value) => Object.values(obj)[value];
console.log(keyFromPosition(lesson3 , 0));

//8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: 
//o objeto, o nome da chave e o valor da chave.

const verifyObj = (obj, key, value) => {
  const sizeObj = Object.keys(obj).length;

  for (let index = 0; index < sizeObj; index += 1) {
    if ((Object.keys(obj)[0] === key) && (Object.values(obj)[0] === value)) {
      return true;
    }
  }  
  return false;  
}

console.log(verifyObj(lesson2,'materia','História'));