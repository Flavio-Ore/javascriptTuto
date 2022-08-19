function toSquarePromise(value){
  if(typeof value !== "number") return console.error('Value must be a number. Current value is: ' + value);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value*value,
      })
    }, 0 | Math.random() * 1000)
  })
}

async function funcAsync(){
  try {
    console.log('Starting async function...');

    let obj = await toSquarePromise(0)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);
    
    obj = await toSquarePromise(1)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);

    obj = await toSquarePromise(2)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);

    obj = await toSquarePromise(3)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);
    
    obj = await toSquarePromise(4)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);
    
    obj = await toSquarePromise(5)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);

    console.log('The async function finished');
  } catch (error) {
    console.warn(error);
  }
}

const expressedFunAsync = async() => {
  try {
    console.log('Starting async expressed function...');

    let obj = await toSquarePromise(6)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);
    
    obj = await toSquarePromise(7)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);

    obj = await toSquarePromise(8)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);

    obj = await toSquarePromise(9)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);
    
    obj = await toSquarePromise(10)
    console.log('Current async function: ' + obj.value + ', ' + obj.result);

    console.log('The async expressed function finished');
  } catch (error) {
    console.warn(error);
  }
}

funcAsync()
expressedFunAsync()