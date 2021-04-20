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
    const mySum = sumGreater8000();
    (mySum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));
};

fetchPromise();


