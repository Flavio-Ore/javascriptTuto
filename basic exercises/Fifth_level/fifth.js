// todo 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
//* JonMircha's solution
const binariBasetoDecimal = (n, base) => `${n} in radix ${base} = ${parseInt(n, base)} in radix 10`

console.log(binariBasetoDecimal(101010, 2));

// todo 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const discount = (n, discount) => n - (n * (discount / 100))

console.log(discount(1000, 20));

// todo 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const sinceThatDay = (date = new Date()) => {
  if (date instanceof Date) {
    let timeResult = new Date().getTime() - date.getTime(),
        yearsMilli = 1000 * 60 * 60 * 24 * 365,
        yearsHuman = Math.floor(timeResult / yearsMilli)
  //Math.sign to know if the result is negative (-1) or positive (1)
    return (Math.sign(timeResult) === -1) 
      ? `${Math.abs(yearsHuman)} years to go until ${date.getFullYear()}`
      : Math.sign(yearsHuman) === 1
        ? `It's been ${yearsHuman} years since ${date.getFullYear()}`
        : `We are on the current date: ${date.getFullYear()}`
  }

  return console.warn('Wrong value, is required a Date object')
}

console.log(sinceThatDay())
console.log(sinceThatDay(new Date(2004,11,4)))
console.log(sinceThatDay(new Date(2030,11,4)))