/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

let n = 5;
let asteriscos = '';

for (let index = 0; index < n; index += 1) {
    asteriscos = asteriscos + '*';
}
console.log(asteriscos);

for (let index = 0; index < n-1; index += 1) {
    console.log (asteriscos);
}