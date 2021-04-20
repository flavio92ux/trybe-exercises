//Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

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
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();