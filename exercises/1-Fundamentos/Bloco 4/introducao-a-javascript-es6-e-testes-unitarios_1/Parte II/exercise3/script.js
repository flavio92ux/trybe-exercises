const btnCount = document.getElementById('count');
const textCount = document.getElementById('text');
let count = 0;

btnCount.addEventListener('click', () => {
  textCount.innerHTML = count += 1;
});
