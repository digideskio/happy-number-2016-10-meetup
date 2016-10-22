export default function happy (number) {

  let numbers = Array.from(number.toString())

  let sum = numbers.map(n => n*n).reduce((r, n) => r + n)

  if (sum.toString().length===1) return sum===1

  return happy(sum)
}