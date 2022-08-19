//* To solve the Callback hell with promises

//! Resolve: positive return in case the promise is fulfilled
//! Reject: negative return in case the promise is rejected

function toSquarePromise(value) {
  if (typeof value !== "number") return Promise.reject(`Value must be a number. Current value is: "${value}"`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value*value
      })
    }, 0 | Math.random() * 1000)
  })
}

toSquarePromise(0)
  .then(obj => {
    console.log('Starting the promise...');
    console.log(obj);
    return toSquarePromise(1)
  })
  .then(obj => {
    console.log(obj);
    return toSquarePromise(2)
  })
  .then(obj => {
    console.log(obj);
    return toSquarePromise('Error here!')
  })
  .then(obj => {
    console.log(obj);
    return toSquarePromise(4)
  })
  .then(obj => {
    console.log(obj)
    console.log('Promises kept');
  })
  .catch(err => console.error(err))