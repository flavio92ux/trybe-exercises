//Fiz copia deste codigo, vou procurar entende-lo melhor depois

let n = 5;
let symbol = '*';

for (let i = 0; i < n; i++) {
  let spaces = '';
  for (let j = 1; j < n - i; j++) {
    spaces = spaces + ' ';

  }

  for (let j = 0; j < i + 1; j++) {
    spaces = spaces + symbol;

  }
  console.log(spaces);
} 


