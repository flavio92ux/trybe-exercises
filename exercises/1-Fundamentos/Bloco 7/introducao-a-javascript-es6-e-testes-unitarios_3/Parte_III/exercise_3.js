//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, 
//caso não esteja, altere o código para que ele passe nos testes.

const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

const assert = require('assert');
assert.strictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter),result);
