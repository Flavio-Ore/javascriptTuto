
console.log(document)

console.dir(document)

console.log(window);

console.dir(window);

console.group('Wrapper del grupo')
for (let i = 0; i < 5; i++) {
  console.log('Item ' + i);
}
console.groupEnd()

console.groupCollapsed('Wrapper del group collased');
for (let i = 0; i < 5; i++) {
  console.log('Item ' + i);
}
console.groupEnd()

console.clear() //!--------------------------------------------------------------

console.table(Object.entries(console).sort())

const nums = [1,2,3,4,5,6,7,8,9,10], cat = {name: 'Bigotes', age: 3}

console.table(nums)

console.table(cat)

console.clear() //!--------------------------------------------------------------

console.time('Tiempo de ejecución de código') // same tag 

for (let i = 0; i <= 100; i++) {
  //*count anuything
  console.count('contando...')
  console.log(i);
}

console.timeEnd('Tiempo de ejecución de código') // same tag

console.clear() //!--------------------------------------------------------------

//*Unit testing
let x = 2, y = 1, test = 'X always must be less than Y'

console.assert(x < y, {x,y, test})
