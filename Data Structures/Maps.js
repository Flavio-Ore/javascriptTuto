//* The hash map of java
const map = new Map()

map.set('key', 'value')
map.set('key2', 'value2')

console.log(map);

console.log(map.size);

map.set('key2', 11) //changing the value of the key by 11
console.log(map.get('key2'));

map.set({key: 'value1', key2: 'value2'}, {value: 'key', valu2: 'key2'})

for (const [key, value] of map) {
  console.log("key: " + key + " | value: " + value);
}

const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  [3, 3],
  [{key: 'key'}, {value: 'value'}],
])

console.log(map2);

const keysMap = [...map.keys()]
const keysMap2 = [...map2.keys()]
console.log(keysMap);
console.log(keysMap2);