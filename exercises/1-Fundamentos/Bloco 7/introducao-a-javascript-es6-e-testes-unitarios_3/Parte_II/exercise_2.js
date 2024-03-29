//Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');

const wordLengths = (array) => {
  
  arrayCount = [];

  for (let index = 0; index < array.length; index += 1) {
    arrayCount[index] = array[index].length;
  }
  return arrayCount;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);