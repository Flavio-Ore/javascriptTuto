console.info('12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.')
const isPrime = n => {
  let coun = 0
  const arr = []

  for (let i = 1; i <= n; i++) {
    (n % i !== 0) ? arr.push(true) : arr.push(false) // false === prime Number
  }
  
  for (let i = 0; i < n; i++) {
    if(arr[i] === false) coun++
  }

  if(coun === 2) return true
  
  return false
}

console.log(isPrime(44))
console.log(isPrime(16))
console.log(isPrime(79))
console.log(isPrime(97))
console.log(isPrime(17))

console.info('13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.')
const isPair = n => n % 2 === 0

console.log(isPair(55))
console.log(isPair(44))

console.info('14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.')
const fahrenheitCelsius = (degrees, measurement = '', convertTo = '') => {
  measurement = measurement.toLowerCase()
  convertTo = convertTo.toLowerCase()

  if (measurement === 'c' &&  convertTo === 'f') return (degrees * 9/5) + 32
  if (measurement === 'c' &&  convertTo === 'k') return degrees + 273.15

  if (measurement === 'k' && convertTo === 'f') return (degrees - 273.15) * 9/5 + 32
  if (measurement === 'k' && convertTo === 'c') return degrees - 273.15

  if (measurement === 'f' && convertTo === 'k') return (degrees - 32) * 5/9 + 273.15
  if (measurement === 'f' && convertTo === 'c') return (degrees - 32) * 5/9

  return console.warn('Invalid measurement or converTo values')
}

console.log(fahrenheitCelsius(2, 'C', 'F'));
console.log(fahrenheitCelsius(2, 'c', 'k'));
console.log(fahrenheitCelsius(2, 'k', 'f'));
console.log(fahrenheitCelsius(2, 'k', 'c'));
console.log(fahrenheitCelsius(2, 'f', 'k'));
console.log(fahrenheitCelsius(2, 'f', 'c'));
