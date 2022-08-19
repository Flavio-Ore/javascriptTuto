//!Weak Set
//* to save computer memory and get best performance
//const weakSet = new WeakSet([1,2,3,4,true, false, false, {}, 'item'])
const ws = new WeakSet()

let value1 = {'value1': 1}, value2 = {'value2': 2}, value3 = {'value3': 3}

ws.add(value1)
ws.add(value2)
ws.add(value3)

ws.delete(value3)

console.log(ws);

//* null or undefined values makes the WeakSet clear their own references
let stopInt = setInterval(() => {
  console.log(ws);
}, 1000)

let stopInt2 = setInterval(() => {
  value1 = null
  value2 = undefined
}, 100)

setTimeout(() => {
  clearInterval(stopInt)
  clearInterval(stopInt2)
}, 3000)

//!Weak Map
//* to save computer memory and get best performance
const wm = new WeakMap()

let key4 = {'value': 4}, key5 = {'value': 5}, key6 = {'value': 6}

wm.set(key4, 4)
wm.set(key5, '5')
wm.set(key6, 6)

wm.delete(key5)

console.log(wm);

console.log(wm.get(key6));

//!Weakmap and WeakSet are not iterable objects

//* null or undefined values makes the WeakMap clear their own references
let int = setInterval(() => {
  console.log(wm);
}, 1000)

let int2 = setInterval(() => {
  key4 = null
  key6 = undefined
}, 100)

setTimeout(() => {
  clearInterval(int)
  clearInterval(int2)
}, 3000)
