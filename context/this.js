console.log(this === window);

this.name = 'Global context'

console.log(this.name);

const obj = {
  name: 'Object context',
  make: function(){
    console.log(this.name);
  }
}

function make(){console.log(this.name);}

const obj2 = {
  name: 'Object context 2',
  make,
}

const obj3 = {
  name: 'Object context 3',
  //bad practice: arrow function doesn't create an scope
  make: () => {
    console.log(this.name);
  }
}

function Class(name){
  const that = this //? before ES2015
  this.name = name
  that.name = name
  //return console.log(this.name); //Class.name

  //closure: this.name === global context
  // return function(){
  //   console.log(this.name);
  // }

  //!to avoid scope problems in functions scope context
  return () => console.log(that.name); //Class.name
}
let c = new Class('Class context')

make()
obj.make()
obj2.make()
obj3.make()
c()