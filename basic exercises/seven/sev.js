//todo 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrToSquare = (arr, expo) => {
  for (const el of arr) {
    if(typeof el !== "number") return console.warn('The elements in the array must be numbers')
  }

  const nArr = Array(arr.lenght)

  arr.forEach((element, index) => {
    nArr[index] = Math.pow(element, expo)
  })

  return nArr
}

//* JonMircha's solution:
const jon = (arr, expo) => {
  if (!(arr instanceof Array)) return console.warn('arr value must be an array')

  for (const el of arr) {
    if(typeof el !== "number") return console.warn('The elements in the array must be numbers')
  }

  const newArr = arr.map(el => Math.pow(el, expo))

  return newArr
}

const arr = [1,2,3,4,5,6]

arrToSquare(['1', '2'], 2)
console.log(arrToSquare(arr, 2));

jon({}, 12)
jon('hello', 9)
console.log(jon(arr, 3));

//todo 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const lowestHighest = arr => {
  const nArr = []

  if(!(arr instanceof Array)) return console.warn(`"${arr}" is not an array`)

  nArr.push(Math.max(...arr))
  nArr.push(Math.min(...arr))

  return nArr
}

lowestHighest()
console.log(lowestHighest(arr))
console.log(lowestHighest([99,11,-505, -4]));

//todo 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const evenOdd = arr => {
  if(!(arr instanceof Array)) return console.warn(`"${arr}" is not an array`)

  const odd = [], 
        even = []
  
  arr.forEach(element=> {
    if(element % 2 === 0) even.push(element)
    if(element % 2 !== 0) odd.push(element)
  })

  return {even, odd}
}

//* JonMircha's solution:
const mircha = arr => {
  if(arr.length === 0) return console.warn('arr can not be empty')

  if(!(arr instanceof Array)) return console.warn(`"${arr}" is not an array`)

  return {
    even: arr.filter(el => el % 2 === 0), 
    odd: arr.filter(el => el % 2 !== 0)
  }
}
evenOdd({})
console.log(evenOdd(arr));

mircha([])
console.log(mircha(arr));