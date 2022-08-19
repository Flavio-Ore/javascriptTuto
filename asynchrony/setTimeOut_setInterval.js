console.log('Starting...');

//? https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
let timer = setInterval(() => {
  console.log(new Date().toLocaleTimeString())
}, 1000)

//? https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

setTimeout(() =>{
  clearInterval(timer)
  console.log('Ending...');
}, 3000)