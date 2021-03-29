/* Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        countImpar = countImpar += 1;
    }
}

if (countImpar === 0) {
    console.log ('Não há nenhum impar no array!');
} else {
    console.log (countImpar + ' numeros impares');
}