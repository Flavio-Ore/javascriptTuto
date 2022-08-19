const dinamycObj = {},
      arr = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5']

arr.forEach((element, index)=> {dinamycObj[`id_${index}`] = element})

console.log(arr);
console.log(dinamycObj);

const otherDinamycObj = {
  [`id_${1}`]: `User 1`
}

for (let i = 0; i < 2; i++) otherDinamycObj[`id_${i}`] = `User ${i}`

console.log(otherDinamycObj);