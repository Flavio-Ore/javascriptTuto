const aP = (num) => consoleArray.push(num)

console.time('code ends');

console.table(Math);

console.log(Math);

const consoleArray = []

aP(Math.PI)

aP(Math.abs(-99)) // Absolute Value

aP(Math.ceil(1.9)) // To the highest integer value
aP(Math.ceil(1.1)) 

aP(Math.floor(1.9)) // To the  lowest integer value
aP(Math.floor(1.1))

aP(Math.round(1.9)) // +1 if the decimal is 0.5 or bigger
aP(Math.round(1.1))

aP(Math.sqrt(100)) // to Square Root 
aP(Math.pow(5, 2)) // squared ²

aP(Math.sign(10)) //* -1 0 1 - if the num is negative or positive or 0
aP(Math.sign(0))
aP(Math.sign(-984))

//random between 0 and 10
aP(Math.round(Math.random() * 100))

consoleArray.forEach((el) => console.log(el))

console.timeEnd('code ends');