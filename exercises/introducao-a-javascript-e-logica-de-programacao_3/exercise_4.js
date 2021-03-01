let n = 5;
let symbol = '*';
let inputLine = '';
let delimitadorCenter = Math.trunc(n / 2) + 1;
let delimitadorRight = delimitadorCenter - 1;
let delimitadorLeft = delimitadorCenter + 1;

for (let indexRow = 1; indexRow <= delimitadorCenter; indexRow += 1) {

  for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {

    if (indexColumn > delimitadorRight && indexColumn < delimitadorLeft) {
      inputLine += symbol;
    } else {
      inputLine += ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  delimitadorLeft += 1;
  delimitadorRight -= 1;
}
