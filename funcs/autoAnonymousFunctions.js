//? https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function

//*Self-Executing Anonymous Function
//includes all the code that you are going to execute
//the function have their own context

;(function () {
  console.log('IIIFE');
})() //* SEMICOLON MUST BE IMPLEMENTED

//jquery //*Classic
;(function (d, w, c) {
  c.log(d)
  c.log(w)
  c.log('CLassic version')
})(document, window, console)

//*Crockford (Javascript The Good Parts)
;((function(){
  console.log('Crockford (Javascript The Good Parts)');
})())

//*Unaria
;+function () {
  console.log('Unaria version');
}()

//*Facebook
;!function(){
  console.log('Facebook version');
}()