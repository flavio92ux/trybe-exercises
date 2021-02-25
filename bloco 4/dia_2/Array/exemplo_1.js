let pizza1 = '4 queijos';
let pizza2 = 'Frango';
let pizza3 = 'Maguerita';
let pizza4 = 'Palmito';
let pizza5 = 'Chocolate';

let pizzas = ['4 queijos', 'Frango', 'Maguerita', 'Palmito', 'Chocolate'];

pizzas[5] = 'Peito de Peru'; //Adiciona mais um valor na posição 5 do array pizzas.
pizzas.push('Peito de chester'); //Adiciona mais um valor no final do array pizzas.

console.log(pizzas.length); //mostra quantos elementos contém no array
console.log(pizzas.sort()); //mostra valores do conteúdo do array em ordem alfabética.
console.log(pizzas[0]); //mostra primeiro elemento do array
console.log('Menu de sabores : ' + pizzas);

for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}