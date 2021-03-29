/* 
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . 
*/

/* 
funcao devolve_que_mais_repete(str)

para i=0; i<str.length; i++
        para j=0; j<str.length; j++
            se str[i] = str[j]
                contador += 1
                  se contador_acum < contador
                    contador_acum = contador
                    repeteco = str[j]                 
 */

function devolveRepete(str) {

	let contador_acum = 0;
	let repeteco = '';

    for (let index = 0; index < str.length; index += 1) {

				for (let j = 0; j < str.length; j += 1) {
					let contador = 0;
					if (str[index] === str [j]) {
						contador += 1;
						if (contador > contador_acum) {
							contador_acum = contador;
							repeteco = str[index];
						}
					}
				}
    }
		return repeteco;
}

console.log(devolveRepete([2, 3, 2, 5, 8, 2, 3]));