//* Symbol is a private property
const ID = Symbol('id')
const ID2 = Symbol('id')

console.log(ID === ID2);           //false
console.log(typeof ID,typeof ID2); //symbol symbol
console.log(ID, ID2);              //Symbol(id) Symbol(id2)


const HUMAN = Symbol('Human')
const TOKEN = Symbol('token')

const obj = {
  [TOKEN]: function (private){return 'private function algorithm. '+ private},
  [HUMAN]: 'private value',
  age: 30,
}

//* Adding keys and values to the object
obj.TOKEN = function (publicParam){return 'Random public algorithm. '+ publicParam}
obj.HUMAN = 'random public value'


console.log(obj);
console.log(obj.HUMAN)   // 'random public value'
console.log(obj[HUMAN])  // 'private value'
console.log(obj.TOKEN('public value')) // 'Random public algorithm. '+ publicParam
console.log(obj[TOKEN]('private value'))// 'private function algorithm. '+ private'


//* Printing private keys:
console.log(Object.getOwnPropertySymbols(obj))

//* Printing public keys and values:
for (const key in obj) {
  console.log(`key: ${key} | value: ${obj[key]}`)
}