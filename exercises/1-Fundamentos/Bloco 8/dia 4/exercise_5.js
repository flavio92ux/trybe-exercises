//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const wordConcat = names.reduce((acc, name) => acc += name);

  let aux = 0;

  for (let i = 0; i <= wordConcat.length; i++) {
    if (wordConcat[i] === 'a' || wordConcat[i] === 'A') {
      aux += 1;
    }  
  }
  return aux;
}

console.log(containsA());

/* assert.deepStrictEqual(containsA(), 20) */;