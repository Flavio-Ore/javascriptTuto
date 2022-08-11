const f = false
const t = true

console.log(f, t);

//Truthy
if (true && {} && [] && 'foo' && new Date() && 42 && -42 && 3.14 && -3.14 &&Infinity && -Infinity){
  console.log(`This values are ${t}`);
} else {
  console.log(`This values are not ${t}`)
}

//Falsy
if (false && null && undefined && 0 && -0 && 0n && NaN && ''){
  console.log(`This values are ${t}`);
} else {
  console.log(`This values are not ${t}`)
}

//?undefined whenever the value is absent
let undefine

console.log(undefine) //output is undefined

//?null is a special value that means value absent
let nil = null

console.log(nil) //output is null

//?NaN -> Not a number
const nan = 'hello' * 123

console.log(nan);