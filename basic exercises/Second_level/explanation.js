//? https://youtu.be/U4buFGcd_eg
/*
todo 5) Program a function that reverses the words of a text string, eg. myFunction("Hello World") will return "odnuM aloH".

todo 6) Program a function to count the number of times a word is repeated in a long text, eg. myFunction("hello world bye world", "world") will return 2.

todo 7) Program a function that validates if a given word or phrase is a palindrome (which reads the same one way as the other), eg. myfunction("salas") will return true.

todo 8) Program a function that removes a certain pattern of characters from a given text, eg. myFunction("xyz1, xyz2, xyz3, xyz4 and xyz5", "xyz") will return "1, 2, 3, 4 and 5.
*/
import reverseWord, { reverseWord2 } from "./5.js"
import countDuplicateWords, { contarPalabraDuplicada } from "./6.js"
import isPalindrome, { isPalindrome2 } from "./7.js"
import removeWord from "./8.js"

const lorem = 'Aqui se encuentran dos se palabras que se están repitiendo'
const se = 'se se se se. eh... y se... cayó'

//* __1__
console.log(reverseWord(lorem))
reverseWord2(lorem)

//* __2__
console.log(countDuplicateWords(se, 'se'))
contarPalabraDuplicada(se, 'se')

//* __3__
console.log(isPalindrome('salon'))
console.log(isPalindrome2('salas'))

//* __4__
console.log(removeWord(se, 'se'));