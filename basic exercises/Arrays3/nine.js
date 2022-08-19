//todo 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ascDes = arr => {
  if(!(arr instanceof Array)) return console.warn(`"${arr}" is not an array`)
  if(arr.length === 0) return console.warn(`"${arr}" is empty`)

  const asc = arr.sort((a,b) => a - b),
        desc = Array(arr.length)
  
  for (let i = arr.length; i > 0; i--) {
    desc[i] = asc[arr.length - i]
  }

  desc.shift()

  return {asc, desc}
}

//* JonMircha's solution: Better than mine again
const jon = arr => {
  if(!(arr instanceof Array)) return console.warn(`"${arr}" is not an array`)
  if(arr.length === 0) return console.warn(`"${arr}" is empty`)

  return {
    asc: arr.map(el => el).sort((a,b) => a - b),
    desc: arr.map(el => el).sort((a,b) => a - b).reverse()
  }
}

const arr = [9,7,11,1,2,6,7,8,9,3,4,9, -11]

ascDes({})
ascDes([])
console.log(ascDes(arr));

console.log(jon(arr));

//todo 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const removeDuplicates = arr => arr.filter((element, index, self) => self.indexOf(element) === index)

//* JonMircha's solution: Set object => object without duplicate elements
const mircha = arr => [... new Set(arr)]

const duplicates = ["x", 10, "x", 2, "10", 10, true, true]

console.log(removeDuplicates(duplicates));

console.log(mircha(duplicates));

//todo 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const average = arr => {
  if(!(arr instanceof Array)) return console.warn(`"${arr}" is not an array`)

  let average = 0;

  arr.forEach(element => {
    average += element
  })

  return average /= arr.length
},  secondArr = [1,2,3,4,5,6,7,8,9]

//* JonMircha's solution: method Reduce EMC6
const emc6 = arr => {
  if(!(arr instanceof Array)) return console.warn(`"${arr}" is not an array`)

  return arr.reduce((previousValue, currentValue, currentIndex, self) => {
    previousValue += currentValue
    
    return (currentIndex === self.length - 1) 
      ? `The average is ${self.join(' + ')} is ${previousValue / self.length}` 
      : previousValue
  })
}
average({})
console.log(average(secondArr));

emc6({})
console.log(emc6(secondArr));