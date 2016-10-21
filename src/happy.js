export default function happy (number) {

  let numbers = Array.from(number.toString())
  let sum = 0

  for (let n in numbers) {
    sum += numbers[n] * numbers[n]
  }

  if (numbers.length !== 1) {
    return happy(sum)
  }
  return number===1

}