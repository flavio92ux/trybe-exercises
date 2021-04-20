//Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

function sumGreater8000() {
  let i = 10;
  const myArray = [];
  const item = [];
  
  while (i > 0) {
    let number = Math.round(Math.random() * 50) + 1;
    item.push(number);
    myArray.push(Math.pow(number, 2));
    i -= 1;
  }

  const sum = item.reduce((acc, current) => acc + current, 0);
  const num = myArray.reduce((acc, current) => acc + current, 0);

  return [num, sum];
}

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const [num] = sumGreater8000();
    (num < 1222000) ? resolve(num) : reject();
  });


  myPromise
    .then((num) => console.log([2, 3, 5, 10].map((item) => num / item)))
    .then(array => console.log(array.reduce((acc, current) => current + acc, 0)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();