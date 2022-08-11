let one = 99, two = 88, three = 77, four = 66

const arr = [one, two, three, four]

//primero = one = 99 from arr
const [primero, seguno, tercero, cuarto] = arr

console.log(arr);

console.log(primero, seguno, tercero, cuarto);


//to components
const client = {
  id: 0,
  name: 'client',
  on: true
}

let {id, name, on} = client

console.log(client.id, client.name, client.on);

console.log(id, name, on);