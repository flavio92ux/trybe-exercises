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






