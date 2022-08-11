//parameter rest
function sumaInf(a, b, ...c) {
  let result = a + b
  c.forEach(function (v) { result += v})
  return result
}

console.log(sumaInf(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15));


//Spread Operator
const arr = [1,2,3,4,5], ray = [6,7,8,9,10]

console.log(arr, ray)

const noSpread = [arr, ray]

console.log(noSpread);

const spread = [...arr, ...ray]

console.log(spread)

//Arrays:
const alwaysArray = []

console.log(alwaysArray.length);

const mismoValue = Array(100)

for (let i = 0; i < mismoValue.length; i++) {
  mismoValue[i] = i
}

console.log(mismoValue);

for (let i = 0; i < mismoValue.length; i++) {
  mismoValue.pop()
}

console.log(mismoValue);

for (let i = 0; i < mismoValue.length; i++) {
  mismoValue.pop()
}

console.log(mismoValue);

mismoValue.forEach((el, id) => console.log(`<li id="${id}">${el}</li>`));