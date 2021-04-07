console.log("A função soma todos os valores de um array:");
console.log("==================================================================");

const ynumbers = [32, 15, 3, 2, -5, 56, 10];

const somat = ynumbers.reduce((total, number) => total + number, 10);

console.log(somat);

console.log(" buscar o maior valor em um array");
console.log("==================================================================");

const xnumbers = [50, 85, -30, 3, 15];

const maior = xnumbers.reduce((bigger, number) => (bigger > number) ? bigger : number);

console.log(maior);

console.log("função que some todos os números pares do array usando apenas reduce:");
console.log("==================================================================");

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPairs = numbers.reduce((sum, number) => (number % 2 === 0) ? (number + sum) : sum);

console.log(sumPairs);

console.log("função que some todos os números pares do array usando find e reduce:");
console.log("==================================================================");

const isEven = (number) => (number % 2) === 0;
const sumEven = (sum, array) => array + sum;

const mySum = numbers.filter(isEven).reduce(sumEven);

console.log(mySum);

console.log("Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !")

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
      name: student.nome,
      materia: student.materias.reduce(getBestClass).name,
    }));

console.log(reportBetter(estudantes));







