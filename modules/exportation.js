//export
export const PI = Math.PI

export const imported = 'This text was imported'

class Importated {
  constructor (msg, time) {
    this.msg = msg
    this.time = time
  }
  get getMsg(){
    if(this.msg.length <= 0){
      return 'nothing here'
    }
    return this.msg
  }
}

function multiplyArrBy(toMultiply, ... num){
  let newNum = []
  for(let i = 0; i < num.length; i++){
    newNum.push(num[i] * toMultiply)
  }
  return newNum
}

const classFunc = {
  Importated,
  multiplyArrBy,
}

//* only one default exportation
export default classFunc