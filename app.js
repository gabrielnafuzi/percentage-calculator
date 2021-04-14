const firstForm = document.querySelector('.firstForm')
const secondForm = document.querySelector('.secondForm')
const thirdForm = document.querySelector('.thirdForm')
const firstResult = document.querySelector('.firstResult')
const secondResult = document.querySelector('.secondResult')
const thirdResult = document.querySelector('.thirdResult')

console.log(firstForm, secondForm, thirdForm)

let result = 0

function formatNumber(number) {
  if (!Number.isInteger(number)) {
    return number.toFixed(2)
  }

  return number
}

firstForm.addEventListener('submit', event => {
  event.preventDefault()

  const a = +document.querySelector('.a').value
  const b = +document.querySelector('.b').value
  result = (a * b) / 100

  result = formatNumber(result)

  firstResult.value = result
})

secondForm.addEventListener('submit', event => {
  event.preventDefault()

  const c = +document.querySelector('.c').value
  const d = +document.querySelector('.d').value
  result = (c * 100) / d

  result = formatNumber(result)

  secondResult.value = `${result}%`
})

thirdForm.addEventListener('submit', event => {
  event.preventDefault()

  const e = +document.querySelector('.e').value
  const f = +document.querySelector('.f').value
  result = (e / f) * 100

  result = formatNumber(result)

  thirdResult.value = result
})
