const yargs = require('yargs')
const notes_utility = require('./notes_final.js')
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
    handler(argv)
    {
        return notes_utility.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe : "title for removing the node",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes_utility.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler()
    {
        notes_utility.listNote()
    }
})
yargs.command({
    command: 'read',
    describe: 'Read the content of file',
    builder: {
        title: {
            describe : "title for reading the node",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes_utility.readNote(argv.title)
    }
})
// below code is not only to print the value of the argument 
// but also it helps to tell the yargs to see t=and process the command line arguments 
// we can replace below with
yargs.parse()


