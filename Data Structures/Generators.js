//! As pararrel Class in C#
//* Function of type generator: *
//* Make a function iterable
function* iterable() {
  yield 'hello'
  console.log('Iterating...');
  yield 'world'
  console.log('Operation...');
  yield 'Goodbye'
  yield 'world'
  console.log('Done!');
}

let iterator = iterable()
console.log(iterator);

for (yiel of iterator) console.log(yiel);

const arr = [...iterable()] //get all the yields
console.log(arr);

function toSquare(value){
  setTimeout(() => {
    return console.log({
      value, 
      result: value*value
    });
  }, 0 | Math.random() * 1000)
}

//* Asynchrony with non-blocking behavior

function* generator(){
  console.log('Starting generator...');
  yield toSquare(0)
  yield toSquare(1)
  yield toSquare(2)
  yield toSquare(3)
  yield toSquare(4)
  console.log('Ending generator...');
}

let gen = generator()
console.log(gen);

for (yiel of gen) console.log(yiel); 


let arr2 = [1, 2, 3, 4,5]
//Redefino el iterador
arr2[Symbol.iterator] = function* (){
	for(value of this.values()){
		yield `THe value is ${value}`; //Devuelve el elemento concatenado a un string
	}
}

//Recorro el array (ejecuta el iterador sobreescrito)
for(elem of arr2){
	console.log(elem);
}