//EMC6
//?CLass - Model
//!Object - statement of the class {
//!   Attributes: 'proper.ties' 'set' 'get'
//!   Methods: 'functions of an object'

//*void prototype function as class constructor
function OldClassModel(name, time, on) {
  this.name = name;
  this.time = time;
  this.on = on;

//duplication of functions for each newly declared object
  this.oldMethod = function (){
    return `${this.name} | ${this.time} | ${this.on}`
  }
}

const objFromOldClassModel = new OldClassModel('Steven', 0, true),
  otherExample = new OldClassModel('otherExample', 0, false);

console.log(objFromOldClassModel);
console.log(otherExample);

console.log(objFromOldClassModel.oldMethod());

console.log(otherExample.name, otherExample.time, otherExample.on);

//----------------------------------------------------------------------------------

function OldClassModelYet(name, time, on) {
  this.name = name;
  this.time = time;
  this.on = on;
}

//* Avoiding methods duplication:
OldClassModelYet.prototype.newFunction = function() {return`${this.name} | ${this.time} | ${this.on}`}

OldClassModelYet.prototype.turnOff = function() { return this.on === true ? this.on = false : this.on = true;}

const oldObject = new OldClassModelYet('steven', 1, false),
  otherObject = new OldClassModelYet('otherExample', 1, false);

console.log(oldObject)
console.log(otherObject);

console.log(otherExample.oldMethod);

console.log(oldObject.turnOff());

console.log(oldObject.newFunction());