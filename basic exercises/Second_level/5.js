const reverseWord = (str)  => {
  let newStr = '', j = 0
  const strIdx = str.length, arr = Array(strIdx)

  for (let i = strIdx; i >= 1; i--) {
    arr[i-1] = str.at((strIdx * -1)+j)
    j++
  }

  arr.forEach(element => {
    newStr += element
  })

  return newStr
}

//* JonMircha's solution:
export function reverseWord2 (str){
  (!str) 
    ? console.warn('There must be a string value')   
    : console.info(str.split('').reverse().join(''))
}

export default reverseWord