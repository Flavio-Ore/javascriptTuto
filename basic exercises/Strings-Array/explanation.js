//? https://youtu.be/3o5d-tdVscU
/*
todo 1) Write a function that counts the number of characters in a text string, eg. myFunction("Hello World") will return 10.

todo 2) Program a function that returns the trimmed text according to the number of characters indicated, eg. myFunction("Hello World", 4) will return "Hello".

todo 3) Program a function that, given a String, returns an Array of texts separated by a certain character, eg. myFunction('hello what's up', ' ') will return ['hello', 'what's up', 'what's up'].

todo 4) Program a function that repeats a text X times, eg. myFunction('Hello World', 3) will return Hello World Hello World Hello World.
*/
import { firstFunc as fun1} from "./1.js";
import { secondFunction as fun2} from "./2.js";
import { thirdFunction as fun3} from "./3.js";
import { fourthFunction as fun4} from "./4.js";

class Temp{
  constructor(){
    this.tempo = null
  }
  get getTempo(){ return this.tempo }

  set setTemp(temp){ 
    if (temp < 0){ 
      temp = 0 
    } else this.tempo = temp
  }
}

const temp = new Temp()

temp.tempo = 123

const obj = {
  name: "John Doe",
  age: 35,
}

const arr = [1,2,3,4,5,6,7,8,9,10]

const str = 'constant'

const lorem = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat, consectetur adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam erat, consectetur adipiscing elit, sed diam non'

//* __1__
console.log(fun1(obj)); //number of keys
console.log(fun1(arr)); //number of values
console.log(fun1(str)); //count the characters

//* __2__
console.log(fun2(str, 2)) // cutting characters of the string
console.log(fun2(arr, 2)) // small arr

//* __3__
console.log(fun3(lorem, ',')) // cut 
console.log(fun3(lorem, ' ')) // cut 

//* __4__
const strArr = fun4('repeat', 12);
const strArr0 = fun4('ba', 1);

strArr.forEach((el) => console.log(el));
strArr0.forEach((el) => console.log(el));