const chalk = require('chalk')
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)
console.log(chalk.bold.blue('Success!'))
console.log(process.argv[2])
// here we in order to access the command line arguments we will use the process global object, the arguments that are passed 
// via command line can be accessed by the process object