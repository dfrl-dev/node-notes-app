const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    console.log(chalk.magenta.inverse('Your notes: '))

    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    
    if(!noteToRead) {
        console.log(chalk.red.inverse('Note not found!'))
    }else {
        console.log(chalk.inverse(title))
        console.log(note.body)
    }

}

const addNote = (title, body) => {

    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title, body) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note)  => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse("Note not found!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}
