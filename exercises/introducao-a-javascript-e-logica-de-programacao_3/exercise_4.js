//Fiz copia deste codigo, vou procurar entende-lo melhor depois

let base = 5;
let symbol = '*';
let middle = (base - 1);
let inputLine = '';



for (let index = 1; index <= base; index += 1) {

  inputLine = inputLine.trim();

  inputLine = ' '.repeat(middle) + inputLine + (index > 1 ? ' ' : '') + symbol;
  console.log(inputLine);
  middle--;
}