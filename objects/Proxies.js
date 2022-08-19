const obj = {
  key: 'value',
  something: 'something',
  age: 0,
}

//Indexof returns -1 === doesn't exits | 1 === exits
const handler = {
  //* Handle the set of the object
  set(object, property, value) {

    if(Object.keys(object).indexOf(property) === -1) return console.error(`The property: ${property} does not exist in the object`)

    if(typeof value !== 'string' && typeof value !== 'number') return console.error(`The value assigning values must be a string or number. Current value: ${value} in property: ${property}`)

    object[property] = value
  }
}

//* There is a binding with between the object and the proxy
const validateObj = new Proxy(obj, handler)

console.log(validateObj);

validateObj.key = 'new key'
validateObj.something = 'n o t h i n g'
validateObj.age = 12
validateObj.add = 'This was added'

console.log(validateObj);