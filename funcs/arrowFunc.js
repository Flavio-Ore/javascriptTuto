function func (a,b,...c){
  let result = a + b
  c.forEach(function (value){ result+= value; })
  return result;
}

const suma = (a,b) => a + b //returning

const constFunc = (a,b,...c) => {
  let result = a + b
  c.forEach(function (value){ result+= value; })
  return result;
};

const forEach = (array, index) => {
  for (let i = 0; i < array.length; i++) {
    if (array[index] === array[i]) {
      return array[index];
    }
  }
  return null;
}

const arr = ['a', 'b', 'c', 'd', 'e', 'f']

arr.forEach((el, index) => `<li id="${index}">${el}</li>`)

//obj

const obj = {
  name: 'John Doe',
  age: 30,
  birthday: new Date('1982-03-22'),
  //*good one
  objContext (){
    console.log(this);
    console.log(arr);
  },
  //!bad practice:
  windowContext: () => {
    console.log(this);
    console.log(arr);
  }
}

//Function in the context of the current context (DOM, window)
obj.windowContext()

obj.objContext()

console.log(forEach(arr, 0))

console.log(func(1,2,3,4,5,6,7,8,9,10,11,12));

console.log(constFunc(1,2,3,4,5,6,7,8,9,10))

console.log(suma(1,2));