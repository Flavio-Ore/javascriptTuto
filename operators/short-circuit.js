function msg(falsy, truthy){
  falsy = falsy || 'falsy!'     // if falsy != truthy, print falsy
  truthy = truthy && 'truthy!'  // if truthy != truthy, won't print truthy!
  return `Falsy? ${falsy}. Truthy? ${truthy}.`
}

console.log(msg())

console.log(msg('hello', 'world'))

console.log(msg(0, 0)); //0 tends to falsy

//*Truthy <-
// OR - when the value on the left in the expression can always validate to true, it is the value that will be loaded by default
//? https://developer.mozilla.org/es/docs/Glossary/Truthy

console.log([] || undefined);

console.log(null || {});

console.log(false || 'strings tends to truthy');

console.log(10 || NaN);

//* Falsy ->
// AND - when the value on the left in the expression can always validate to false, it is the value that will be loaded by default
//? https://developer.mozilla.org/en-US/docs/Glossary/Falsy

console.log(false && 'This is truthy!');

console.log('This is truthy!' && 0);

console.log('This is truthy!' && 'this is truthy yet')

console.log(111 && 222);