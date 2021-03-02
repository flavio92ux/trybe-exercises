/* 
Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word. 
Considere que a string ending sempre será menor que a string word .
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be") ;
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan") ;
Retorno esperado: false 
*/

/* 
funcao recebeString(str_a, str_b)

fazer um for do final da str_a ate criterio de parada da str_a
    criterio de parada desse for sera o tamanho da str_b
comparar str_a[i] com str_b[i]

posicao_final_a = str_a.length - 1;
tamanho_str_b = str_b.length;

for i = posicao_final_a; i >= tamanho_str_b; i--
    if str_a[i] != str_b[i]
        false

*/

function recebeString(strA, strB) {
  let posicaoFinalA = strA.length - 1;
  let criterioParada = (strA.length - 1) - strB.length;
	let i = 1;

  for (let index = posicaoFinalA; index > criterioParada; index -= 1) {
			if (strA[index] != strB[strB.length - i]){
				return false;
			}
			i += 1;
		}	
		return true;
	}
	
	


console.log(recebeString('trybe', 'be'));

