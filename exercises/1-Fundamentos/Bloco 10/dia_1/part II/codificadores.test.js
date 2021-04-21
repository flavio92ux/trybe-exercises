const { encode, decode } = require('./codificadores.js');

describe('Bloco de testes da funcao encode', () => {
  test('Verifica se encode é função', () => {
    expect(typeof(encode)).toEqual('function');
  });
  test('Verifica se decode é função', () => {
    expect(typeof(decode)).toEqual('function');
  });
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfhjklmnpqrstvwxyz')).toBe('bcdfhjklmnpqrstvwxyz');
  });
  test('este se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('myteste').length).toBe(7);
  })
});