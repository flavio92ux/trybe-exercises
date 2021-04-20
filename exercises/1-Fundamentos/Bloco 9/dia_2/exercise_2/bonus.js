//Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

function sumRandomNumbers() {
  let i = 10;
  const myArray = [];
  const item = [];
  
  while (i > 0) {
    let number = Math.round(Math.random() * 50) + 1;
    item.push(number);
    myArray.push(Math.pow(number, 2));
    i -= 1;
  }
  const sum = myArray.reduce((acc, current) => acc + current, 0);

  if (sum >= 999999000) throw new Error();

  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc); 

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    console.log(sum);
    console.log(sumFromSum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!'); 
  }
}

fetchPromise();