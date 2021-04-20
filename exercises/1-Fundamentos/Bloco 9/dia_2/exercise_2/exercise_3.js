//Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

function sumGreater8000() {
  let i = 10;
  const myArray = [];
  
  while (i > 0) {
    let number = Math.round(Math.random() * 50);
    myArray.push(Math.pow(number, 2));
    i -= 1;
  }
  
  return myArray.reduce((acc, current) => acc + current, 0);
}

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const sum = sumGreater8000();
    (sum < 8000) ? resolve(sum) : reject();
  });


  myPromise
    .then((sum) => [2, 3, 5, 10].map((item) => sum / item))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();