//! call, apply, bind
this.now = 'Global context'

function make(param, otherParam){
  console.log(`${param} > ${this.now} < ${otherParam}`);
}

make('Hello', 'There')

const object = {
  now: 'Object context'
}

//Calls a new context
make.call(object, 'Hello', 'world') //object context
make.call(null, 'A', 'B') //null === GLobal context
make.call(this, '1', '2') //this === Window Context

//Apply recieves params
make.apply(object, ['Hello', 'World'])

//! Binding
const a = {
  a: 'a',
  actu: function(){
    console.log('Hello ' + this.a);
  }
}, 
b = {
  do: a.actu.bind(a)
}

b.do()