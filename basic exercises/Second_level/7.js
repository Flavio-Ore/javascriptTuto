import reverseWord, {reverseWord2} from "./5.js"

const isPalindrome = (str = '') => (reverseWord(str) === str)

//* JonMircha's solution:
export function isPalindrome2 (string = ''){
  if (!string) return console.warn('There must be a string')

  string = string.toLowerCase()
  let reverseWord = string.split('').reverse().join('')
  
  return (string === reverseWord)
}

//* or:
export function isPalindrome3 (str = ''){
  return (reverseWord2(str) === str)
}

export default isPalindrome