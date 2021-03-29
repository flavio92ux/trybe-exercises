/* 
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda. \

funcao(array)

var num_caracter = 0;

para i=0 ate i=comprimento_array faca
      se comprimento_do_array_i.lenght > num_caracter 
          num_caracter = comprimento_do_array_i.lenght;
          maior_palavra = comprimento_do_array_i;
*/

function retornaMaior(str) {
    let numCaracter = 0;
    let maiorPalavra = '';

    for (let index = 0; index < str.length; index += 1) {
        if (str[index].length > numCaracter) {
            numCaracter = str[index].length;
            maiorPalavra = str[index];
        }
    }
   return maiorPalavra;
}

console.log(retornaMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
