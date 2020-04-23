const firstButton = document.querySelector('.firstButton');
const secondButton = document.querySelector('.secondButton');
const thirdButton = document.querySelector('.thirdButton');

firstButton.addEventListener('click', firstAccount);
secondButton.addEventListener('click', secondAccount);
thirdButton.addEventListener('click', thirdAccount);

function firstAccount() {
  const firstResult = document.querySelector('.firstResult');
  const a = document.querySelector('.a').value;
  const b = document.querySelector('.b').value;
  const result = (a * b) / 100;
  firstResult.value = result;
}

function secondAccount() {
  const secondResult = document.querySelector('.secondResult');
  const c = document.querySelector('.c').value;
  const d = document.querySelector('.d').value;
  const result = (c * 100) / d;
  secondResult.value = result + "%";
}

function thirdAccount() {
  const thirdResult = document.querySelector('.thirdResult');
  const e = document.querySelector('.e').value;
  const f = document.querySelector('.f').value;
  const result = (e / f) * 100;
  thirdResult.value = result;
}