export function all(a,b){
  const add = a + b
  const mul = a * b
  return `Addition: ${add}, Multiplication: ${mul}`
}

export function extra(msg){
  return `Extra Message: ${msg}`
}

const thisIsNotAlias = () => {
  console.log("Can't be asigned as alias");
}


export default thisIsNotAlias;

//export default thisIsAlias