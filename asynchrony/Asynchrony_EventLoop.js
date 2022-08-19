//! Javascript is Single Thread
//* Event Loop - L.I.F.O - Call stack - Stack queue - Call back

//~ blocking synchronous code
((c) => {
  c.log('Coding first task...')
  
  function second(){
    console.log('Second Operation');
  }
  
  function first(){
    console.log('First Operation');
    second()
    c.log('Third Operation');
  }
  
  first()
  
  c.log('First task was done. The code was successful')
  
})(console)

//* JavaScript uses an asynchronous and non-blocking model with an Event Loop implemented in a Single thread, for input and output operations

//~ non-blocking synchronous code
;((c) => {
  c.log('Coding Second task...')

  function second(){
    setTimeout(() => {
      console.log('Second Operation');
    }, 3000)
  }

  function first(){
    setTimeout(() => {
      console.log('First Operation');
    }, 1)

    second()

    c.log('Third Operation');
  }

  first()

  c.log('Second task was done. The code was successful')
  
})(console)