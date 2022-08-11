//Class Father Animal
function Animal(name, age, alive){
  this.name = name;
  this.age = age;
  this.alive = alive;
}

Animal.prototype.DoSomething = function () {
  if (this.alive) {
    console.log("The door is " + this.name);
    return true;
  }
  return false;
}

console.log(Animal);

//Creating the class that will inherit from Animal class
function Cat(name, age, alive, race){
  //*Invoke the constructor of the Animal class:
  this.super = Animal
  this.super(name,age, alive)
  this.race = race
}

//Just inheriting from animal class
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

//* Virtual and Override methods
//Rewritting methods from Animal class to Cat class
Cat.prototype.DoSomething = function(){
  if (this.alive) {
    console.log('This cat is alive ' + this.name);
    return true;
  }
  return false;
}

//New method
Cat.prototype.newMethodCat = function(){
  return 'miau, miau, miau'
}

console.log(Cat);

//Statement of the new classes
const Cat1 = new Cat('Stuart', 2, true, 'Angora'),
  Animal1 = new Animal('Leopard', 1, false)

console.log(Animal1);
console.log(Cat1);

console.log(Animal1.DoSomething())
console.log(Cat1.DoSomething());

//!Bullshit