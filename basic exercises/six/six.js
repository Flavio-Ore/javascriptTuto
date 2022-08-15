console.info('18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.')
//* JonMircha's solution
const returnWords = str => {
  if(typeof str !== "string") return console.warn('str must be a string')

  let vowels = 0, 
  consonants = 0

  str = str.toLowerCase()
  
  for (let w of str) {
    if (/[aeiou]/.test(str)) vowels++

    if (/[b-df-hj-np-tv-z]/.test(str)) consonants++
  }

  return {str, consonants, vowels}
}

returnWords(123123)
console.log(returnWords('steven'));

console.info('\n19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.')
//* JonMircha's solution
const jonMirchaSolution = name => {
  if (typeof name !== "string") return console.warn('Name must be a string')
  let regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(name)
  return (regex) ? `${name} is a valid name` : `${name} is not a valid name`
}
jonMirchaSolution()
console.log(jonMirchaSolution('steven'));

console.info('\n20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.')
//* JonMircha's solution
const mirchaSol = email => {
  if (typeof email !== "string") return console.warn('Email must be a string')
  //regex from forums
  let regex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

  return (regex) ? `${email} is a valid email address` : `${email} is not a valid email address`
}

mirchaSol()
console.log(mirchaSol('steven'));