const number = Number(prompt('Введите верхнюю границу суммы чисел'))

const countResultingSum = function (number) {
  const checkNan = isNaN(number)
  const checkInt = Number.isInteger(number)

  if (checkNan) {
    alert('Введеный символ не является числом')
  } else if (!checkInt || number <= 0) {
    alert(`${number} должен быть целым числом и больше нуля!`)
  } else {
    return getDivisorsCount()
  }
}

countResultingSum(number)

function getDivisorsCount() {
  let devideResult = 0
  let counter = 0

  console.log(`число ${number} имеет следующие делители:`)

  for (let divideCount = 1; divideCount <= number; divideCount++) {
    devideResult = number % divideCount
    if (!devideResult) {
      ++counter
      console.log(`делитель ${counter}:`, divideCount)
    }
  }
}
