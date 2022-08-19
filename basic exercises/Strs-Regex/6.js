const countDuplicateWords = (str = '', find = '') => {
  let count = 0, 
      split = str.split(' ')

  if(str.includes('...')){
    str = str.replace('...', ' ');
    split = str.split(' ')
  }

  if(str.includes('..')){
    str = str.replace('..', ' ');
    split = str.split(' ')
  }

  if(str.includes('.')){
    str = str.replace('.', ' ');
    split = str.split(' ')
  }

  for (let i = 0; i < split.length; i++) {
    split[i] === find ? count++ : null
  }
  
  return count
}

//* JonMircha's solution: Better than mine
export function contarPalabraDuplicada(string, text){
  if (!string) return console.warn('There must be a string')
  if (!text) return console.warn('There must be a text to be found in the string')

  let i = 0, contador = 0

  while (i !== -1){
    i = string.indexOf(text, i)
    if (i !== -1) {
      i++
      contador++
    }
  }

  return console.info(`The word '${text}' was found ${contador} times`)
}

export default countDuplicateWords