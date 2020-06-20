const fs = require('fs')
// we are calling require which is gona load the fs modules 
// the loaded fs module will be assigned to variable fs 
fs.appendFileSync('notes.txt','I am 24 yrs old')