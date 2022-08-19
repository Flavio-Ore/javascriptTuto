//todo 9) Program a function that returns a random number between 501 and 600.

const rnd = () => Math.round((Math.random() * 100) + 501)

console.log(rnd());

//todo 10) Program a function that receives a number and evaluates whether it is capicua or not (reads the same one way as the other), eg. myFunction(2002) will return true.

//! I can't do it well
//todo
const capicuaNumber = (n) => {
  const intArr = Array.from(String(n), (n) => Number(n))
  
  const boo = []

  let nlength = intArr.length, 
    arr = intArr.slice(0, nlength / 2),
    arr2

  if (nlength % 2 === 0)  {
    arr2 = intArr.slice((nlength / 2) - 1, nlength).reverse()
  }

  if (nlength % 2 !== 0) {
    arr2 = intArr.slice((nlength / 2) + 1, nlength).reverse()
  }

  for (let i = 0; i < arr.length; i++) {
    (arr[i] === arr2[i]) ? boo.push(true) : boo.push(false)
  }

  if (boo.find((n) => n === false)) return false

  return true
}

console.log(capicuaNumber(21222)) //err
console.log(capicuaNumber(223322))//err

//*JonMircha's solution: Better than mine

const capicua = int => {
  int = int.toString()
  let capicua = int.split('').reverse().join('')

  return (int === capicua) ? true : false
}

console.log(capicua(21222));
console.log(capicua(223322));

//todo 11) Program a function that calculates the factorial of a number (The factorial of a positive integer n, is defined as the product of all positive integers from 1 to n), eg. myFunction(5) will return 120. 

const factorial = num => {
  if (num === 0 || num === 1) return 1

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return num;
};

console.log(factorial(5))