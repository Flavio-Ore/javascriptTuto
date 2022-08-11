export function firstFunc(obj){
  const arr = []
  if (typeof obj === "object"){
    for(const key in obj){
      arr.push(key)
    }
    return arr.length
  }

  return obj.length
}