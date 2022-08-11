const arr = Array(20)

const ray = []

const arrStr = Array(5).fill('a')

const obj = {
  name: 'foo',
  age: 40,
  alive: true,
  wallet: [1,2,3,4,5,6,7,8],
}
try {
  //* for , foreach
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i;
  }
  
  arr.forEach(element => {
    console.log(element);
  });

  console.log('printing pairs');

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }

  console.log('printing'); //--------------------------------------------------

  //* for in arrays
  for (const key in arr) {
    console.log(arr[key]);
  }

  console.log('printing');//--------------------------------------------------

  for (const key in arrStr) {
    console.log(`key: ${key} | value: ${arrStr[key]}`);
  }

  console.log('printing');//--------------------------------------------------

  //* for in objects
  for (const key in obj) {
    console.log(`key: ${key} | value: ${obj[key]}`);
  }

  console.log('printing');//--------------------------------------------------
  //* for of any kind of enumerable
  for (const el of arrStr) {
    console.log(el);
  }

} catch (e) {
  console.log('Error de gon');
  console.log(e);
}

const num = [1,2,3,4,5,6,7,8,9,10, 'asdasd', false]

try {

  const filtered = num.filter(el => el % 2 === 0)

  throw new Error(filtered)

} catch (e) {
  console.log('Error de gon');
  console.log(e);
}