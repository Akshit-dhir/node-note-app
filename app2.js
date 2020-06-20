require('./utils.js')
console.log(name)
// In the above code when I try to print the value of
// name which is defined in the other module named as utils.js
// I will get error because require() method will only load the module and run it 
// but it will not include the variables and functions  in the scope of this 
// file to do so we use module.exports , we will use this module.exports in file from 
// which we want the data , check app3.js and utils.js for changes
