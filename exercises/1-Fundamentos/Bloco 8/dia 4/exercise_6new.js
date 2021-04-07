const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const sum = (acc, number) => acc += number;

function studentAverage() {
  return students.map((student, index) => {
    const obj = {
      name: student,
      average: notes[index].reduce(sum, 0)/notes[index].length,
    }
    return obj;
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);