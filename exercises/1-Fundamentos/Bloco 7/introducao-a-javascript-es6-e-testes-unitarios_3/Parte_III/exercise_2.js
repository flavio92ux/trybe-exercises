//Use a variável parameter como parâmetro da função abaixo, escreva testes para 
//verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let num = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      num += 1;
      results += num;
    } else {
      results += characters[index];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

const assert = require('assert');

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter), result);