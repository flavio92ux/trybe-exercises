/* 
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . 

 se array(n) > maior,
    maior = n

*/

function posicaoMaior(str) {
    let maior = 0;
    let size = str.length;
    let position = 0;

    for (let index = 0; index < size; index +=1) {
        if (str[index] > maior) {
            maior = str[index];
            position = index;
        }
    }
    return position;
}

console.log(posicaoMaior([2, 3, 2, 5, 8, 2, 3]));
