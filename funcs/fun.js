//* function stament loads before any code is executed
//! hoisting

const fun1 = firstOrder(3,3,3)
console.log(fun1);

function firstOrder(a,b,c) {
  const d = a * b * c
  return d;
}

console.log(firstOrder(2,3,5));

const recurs = firstOrder(3,3,3)
console.log(recurs);

//* anonymous function
//! no hoisting

// this is not possible: console.log(expressionFun('hello', 'world'))

const expressionFun = function (a, b) {
  return `Input: ${a} ${b}`;
}

const fun2 = expressionFun('oye', 'wali')