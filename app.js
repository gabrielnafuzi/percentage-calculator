const firstButton = document.querySelector('.firstButton');
const secondButton = document.querySelector('.secondButton');
const thirdButton = document.querySelector('.thirdButton');
const firstResult = document.querySelector('.firstResult');
const secondResult = document.querySelector('.secondResult');
const thirdResult = document.querySelector('.thirdResult');

let result = 0;

function formatNumber(number) {
  if (!Number.isInteger(number)) {
    return number.toFixed(2);
  }
}

firstButton.addEventListener('click', () => {
  const a = document.querySelector('.a').value;
  const b = document.querySelector('.b').value;
  result = (a * b) / 100;

  result = formatNumber(result);

  firstResult.value = result;
});

secondButton.addEventListener('click', () => {
  const c = document.querySelector('.c').value;
  const d = document.querySelector('.d').value;
  result = (c * 100) / d;

  result = formatNumber(result);

  secondResult.value = `${result}%`;
});

thirdButton.addEventListener('click', () => {
  const e = document.querySelector('.e').value;
  const f = document.querySelector('.f').value;
  result = (e / f) * 100;

  result = formatNumber(result);

  thirdResult.value = result;
});
