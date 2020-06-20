const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
//const command = process.argv[2]
yargs.version('1.1.0')
/*if(command == 'add')
{
   console.log('Adding note!')
}
else if(command == 'remove')
{
    console.log('Removing note!')
}
*/
// adding functionality to our notes application 
// add, remove, read, list 
// yargs is basically heping us in creating commands here
// it is able to access to the terminal and makes our job 
// easier in creating the command
// Create add comand 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    // now here lets add code for the title of the note to be added 
    // we will define the properties of the title to be added inside a builder object 
    builder: {
        title: {
              describe:'Note title',
              // lets make it compulsory to add the title 
              demandOption: true,
              // lets keep the data type of title as string only 
              type:'string'
        },
        body: {
              describe:'Note body',
              demandOption:true,
              type:'string'
        }
    },
    handler: function (argv) {
        console.log('Title : ' + argv.title)
        console.log('body : ' + argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function() {
        console.log('Removing a new note')
    }
})
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing the name of all nodes')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read the content of file',
    handler: function() {
        console.log('Reading the notes')
    }
})
// below code is not only to print the value of the argument 
// but also it helps to tell the yargs to see t=and process the command line arguments 
// we can replace below with
// yargs.parse()
console.log(yargs.argv)

