/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se 
encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . 
Spoiler: É possível realizar uma função que ordene qualquer array de números.*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const compareNumbers = (a, b) => a - b;
oddsAndEvens.sort(compareNumbers);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
