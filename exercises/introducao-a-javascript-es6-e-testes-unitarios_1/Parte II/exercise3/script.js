const btnCount = document.getElementById('count');
let count = 0;
const textCount = document.getElementById('text');

btnCount.addEventListener('click', () => {
  textCount.innerHTML = count += 1;
});


