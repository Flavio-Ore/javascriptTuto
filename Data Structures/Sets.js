//* Set is an structure of unique data values
const set = new Set([1,2,3,3,3, true, true, false, false, {}, 'Hello', 'Hola'])

console.log(set); // size = 8
console.log(set.size);

for (item of set) {
  console.log(item);
}

//* Set is not an Array
const arr = Array.from(set)

console.log(arr instanceof Array); //true

const set2 = new Set(arr)

console.log(set2);

set.delete(1)

console.log(set.has(1)); //false

console.log(set); //size = 7

set.clear()

console.log(set) //size = 0