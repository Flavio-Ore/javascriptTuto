//* Function that runs after another does

function toSquareCallBack(value, callback) {
  setTimeout(() => {
    callback(value, value*value)
  }, 0 | Math.random() * 1000);
}

toSquareCallBack(0, (value, result) => {
  console.log('Starting first the callback hell...');

  console.log(`Callback: ${value}, result: ${result}`);

  toSquareCallBack(1, (value, result) => {
    console.log(`Callback: ${value}, result: ${result}`);

    toSquareCallBack(2, (value, result) => {
      console.log(`Callback: ${value}, result: ${result}`);

      toSquareCallBack(3, (value, result) => {
        console.log(`Callback: ${value}, result: ${result}`);

        toSquareCallBack(4, (value, result) => {
          console.log(`Callback: ${value}, result: ${result}`);

          toSquareCallBack(5, (value, result) => {
            console.log(`Callback: ${value}, result: ${result}`);

            toSquareCallBack(6, (value, result) => {
              console.log(`Callback: ${value}, result: ${result}`);
              console.log('The first callback hell is over');
            })
          })
        })
      })
    })
  })
})

toSquareCallBack(0, (value, result) => {
  console.log('Starting second the callback hell...');

  console.log(`Callback: ${value}, result: ${result}`);

  toSquareCallBack(1, (value, result) => {
    console.log(`Callback: ${value}, result: ${result}`);

    toSquareCallBack(2, (value, result) => {
      console.log(`Callback: ${value}, result: ${result}`);

      toSquareCallBack(3, (value, result) => {
        console.log(`Callback: ${value}, result: ${result}`);

        toSquareCallBack(4, (value, result) => {
          console.log(`Callback: ${value}, result: ${result}`);

          toSquareCallBack(5, (value, result) => {
            console.log(`Callback: ${value}, result: ${result}`);

            toSquareCallBack(6, (value, result) => {
              console.log(`Callback: ${value}, result: ${result}`);
              console.log('The second callback hell is over');
            })
          })
        })
      })
    })
  })
})