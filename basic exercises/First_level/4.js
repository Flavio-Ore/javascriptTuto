export function fourthFunction(str = '', repeat = 0) {
  if (repeat < 0){
    const strs = []
    for (let i = 0; i < repeat; i++) {
      strs.push(str)
    }
    return strs
  }
  return console.warn('NEGATIVE INTEGER')
}