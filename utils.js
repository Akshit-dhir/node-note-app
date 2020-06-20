console.log('utils.js')

const name = 'Mike'

const add = function (a,b) {
  return a + b
}
//module.exports = name // now when I use require to get this file 
// I can use this value in the other file
module.exports =add
