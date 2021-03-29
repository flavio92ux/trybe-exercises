//Abaixo, você verá algumas especificações de algoritmos para desenvolver. 
//É fundamental que você utilize o que aprendeu sobre let , const , arrow functions, template literals e ternary operator.

//1- Crie uma função que receba um número e retorne seu fatorial.
//Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . 
//Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (N) => {
  let aux = N - 1;
  let result = N;

  if (N < 0) {
    return ('Digite um número válido!');
  }

  if (N === 0) {
    return 1;
  }

  while (aux > 0) {
    result *= aux;
    aux -= 1;
  }
  return result;
}

console.log(fatorial(-1));

//2-Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (str) => {
  const myStr = str.split(' ');
  let larger = '';
  
  for (let key of myStr) {
    if (key.length > larger.length) {
      larger = key;
    }
  }
  console.log(larger);
  return larger;
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");