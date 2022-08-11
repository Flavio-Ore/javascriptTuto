class Human{
  constructor(name, age, alive) {
    this.name = name;
    this.age = age;
    this.alive = alive;
  }

  doSomething(){
    if (this.alive) {
      return 'Human: Do something'
    }
    return 'This human is already dead'
  }

  escape(){
    if (this.alive) {
      return 'Human: Escape'
    }
    return "It can't escape"
  }
}

const human1 = new Human('Steven', 23, true)

console.log(human1);

console.log(human1.doSomething())
console.log(human1.escape());

//Herency
class Employee extends Human {
  constructor(name, age, alive, job, married) {
    //*super() calls the constructor of the parent class
    super(name, age, alive);
    this.job = job
    this.married = married
  }

  //*override and virtual methods
  doSomething() {
    if (this.alive) {
      return `Human desc.\nName: ${this.name}. Job: ${this.job}. Age: ${this.age}. Married: ${this.married}.`
    }
    return 'THis human is already dead'
  }

  //*new mehod
  doJob() {
    return `I work as ${this.job}`
  }
}

const empleado1 = new Employee('Steven', 41, true, true, false)