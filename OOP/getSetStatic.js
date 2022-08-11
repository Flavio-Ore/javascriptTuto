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

class Employee extends Human {
  static employeesCreated = 0

  constructor(name, age, alive, job, married) {
    super(name, age, alive);
    this.job = job
    this.married = married
    this.employeesCreated += 1
  }

  doSomething() {
    if (this.alive) {
      return `Human desc.\nName: ${this.name}. Job: ${this.job}. Age: ${this.age}. Married: ${this.married}.`
    }
    return 'THis human is already dead'
  }

  doJob() {
    return `My job is: ${this.job}`
  }

  static get getEmployees() {
    this.employeesCreated++
    return this.employeesCreated
  }
}

const employees = Array(10)

for (let i = 0; i < employees.length; i++) {
  employees[i] = new Employee(`emp ${i}`, 18+i, true, `office ${i}`)
}

//Calling the static method
employees.forEach(() => console.log(Employee.getEmployees))

class Pet{
  constructor(name, age){
    this.age = age
    this.name = name
    this.owner = null
  }

  get getOwner() {
    return this.owner
  }

  set setOwner(owner){
    this.owner = owner
  }
}

const mascota1 = new Pet('Steven', 2)

mascota1.setOwner = 'Jhon'

console.log(mascota1.getOwner);