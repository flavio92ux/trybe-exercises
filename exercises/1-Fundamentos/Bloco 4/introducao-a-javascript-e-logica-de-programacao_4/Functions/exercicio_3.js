/* 
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . 
*/

function posicaoMenor(str) {
    let menor = 9999;
    let size = str.length;
    let position = 0;

    for (let index = 0; index < size; index +=1) {
        if (str[index] < menor) {
            menor = str[index];
            position = index;
        }
    }
    return position;
}

console.log(posicaoMenor([2, 4, 6, 7, 10, 0, -3]));