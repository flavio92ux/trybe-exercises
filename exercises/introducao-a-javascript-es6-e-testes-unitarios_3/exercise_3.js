const assert = require('assert');

const sumAllNumbers = (myNumber) => {

  let sumNumber = 0;

  for (let index = 0; index < myNumber.length; index += 1) {
    sumNumber += myNumber[index];
  }

  return sumNumber;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);