const firstButton = document.querySelector(".firstButton");
const secondButton = document.querySelector(".secondButton");
const thirdButton = document.querySelector(".thirdButton");
let result;

firstButton.addEventListener("click", () => {
  const firstResult = document.querySelector(".firstResult");
  const a = document.querySelector(".a").value;
  const b = document.querySelector(".b").value;
  result = ((a * b) / 100).toFixed(4);
  firstResult.value = result;
});

secondButton.addEventListener("click", () => {
  const secondResult = document.querySelector(".secondResult");
  const c = document.querySelector(".c").value;
  const d = document.querySelector(".d").value;
  result = ((c * 100) / d).toFixed(4);
  secondResult.value = result + "%";
});

thirdButton.addEventListener("click", () => {
  const thirdResult = document.querySelector(".thirdResult");
  const e = document.querySelector(".e").value;
  const f = document.querySelector(".f").value;
  result = ((e / f) * 100).toFixed(4);
  thirdResult.value = result;
});
