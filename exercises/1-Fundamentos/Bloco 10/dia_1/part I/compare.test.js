const { describe, test, expect } = require("@jest/globals");

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Object Compare', () => {
  test('Compare se obj1 é igual ao objeto 2', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Compare se obj1 é diferente de obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
});