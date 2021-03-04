/* 
Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15. 
*/

/* 
funcao devolverSoma(N)

var somador = 0;

para i=N; i>0; i-- 
    somador = somador + i;
*/

function devolveSoma(num) {
	let somador = 0;

	for (let index = num; index > 0; index -= 1) {
		somador += index;
	}

	return somador;

}

console.log(devolveSoma(5));

