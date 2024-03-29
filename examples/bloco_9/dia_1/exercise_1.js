//No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que 
//ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return userNationality(userToReturn);
};

console.log(getUser());

assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser