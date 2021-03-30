//Desenvolva uma HOF que retorna o resultado de um sorteio. 
//Esta HOF irá gerar um número aleatório entre 1 e 5 
//recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const number = [4, 10, 3, 8, 5];

const validadeNumber = (myNumber) => {
  Object.assign(number, number.sort(function(a, b){return a-b}));

  const compare = (number, myNumber) => {
    return number.every((item, index) => item === myNumber[index]);
  }

  return(compare(number, myNumber));
}

const generateRandomNumber = (checkNumber) => {
  let myNumber = [];

  for (let index = 0; index < number.length; index += 1) {
    const sort = Math.random() * 100;
    const sortAcur = Math.round(sort);
    myNumber.push(sortAcur);
    Object.assign(myNumber, myNumber.sort(function(a, b){return a-b}));
  }

  checkNumber(myNumber);

}

console.log(generateRandomNumber(validadeNumber));


