//* as Linked List Nodes 
const iterable = [1,2,3,4,5]

//* acceding to the iterador of the iterable object
const iterator = iterable[Symbol.iterator]()

console.log(iterator);

for (let next = iterator.next(); !next.done; next = iterator.next()) 
  console.log(next, 'Value: ' + next.value);