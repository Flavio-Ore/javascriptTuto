export function secondFunction(str = '', lenght = undefined){
  let len
  (!str) ? console.warn('There must be a Enumerable') : len = str.slice(0, lenght)
  return len
}