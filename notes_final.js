const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => 'Your Notes...'
  const removeNote= (title) =>{
      const notes = loadNotes()
      const searchnote = notes.filter((note) => note.title !== title)
      if(searchnote.length < notes.length)
      {
        savenotes(searchnote)
        console.log(chalk.green("Note is removed"))
      }
      else{
          console.log(chalk.red("Note with this title is not present"))
      }
  }
  const addNote =(title,body) =>{
        const notes = loadNotes()
        // below code is to add the new note entered by user to an javascript array
        //const duplicateNotes = notes.filter((note) => note.title === title)
        // there is no condition to break in the above code when a duplicate match is found 
        // this can be done by using the below code, find method internally breaks when a match is found
        const duplicateNote = notes.find((note) => note.title === title)
        
        debugger
        if(!duplicateNote) {
            notes.push ({
                title: title,
                body: body
          })
          savenotes(notes)
          console.log(chalk.green('New note added!'))
        }
        else {
            console.log (chalk.red('Note title taken'))
        }
        
  }
  const savenotes = (notes) => 
  {
       const dataJSON = JSON.stringify(notes)
       fs.writeFileSync('notes.json',dataJSON)
  }
  const loadNotes = () => 
  {
      // try catch so that if file doesn't exist. code doesn't fail
      try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
      } catch(e){
          return []
      }
     
  }
  const listNote = () =>
  {
      const dataBuffer =fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      notes_arr = JSON.parse(dataJSON)
      console.log(chalk.bold.blue('List of notes'))
      console.log(chalk.yellow('TITLE'))
      notes_arr.forEach((note) => {
          console.log(chalk.green(note.title))
      })
  }
  const readNote = (title) =>
  {
    const notes = loadNotes()
    const resultNote = notes.find((note) => note.title === title)
    if(resultNote)
    {
        console.log(chalk.yellow("TITLE"))
        console.log(chalk.green(resultNote.title))
        console.log(chalk.yellow("BODY"))
        console.log(resultNote.body)
    }
    else
    {
        console.log(chalk.red("No note with the given title found"))
    }
  }
  module.exports = {
      getNotes: getNotes,
      addNote: addNote,
      removeNote: removeNote,
      listNote: listNote,
      readNote: readNote
  }