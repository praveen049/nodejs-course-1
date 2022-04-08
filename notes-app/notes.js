const fs = require('fs')
const chalk = require('chalk')


const getNotes = function () {
    return "Your notes ..."
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicatesNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicatesNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const remainingNotes = notes.filter(function (note) {
        return (note.title !== title)
    })

    if (remainingNotes.length === notes.length) {
        console.log(chalk.red('Note title does not exist!'))
    }
    else {
        console.log(chalk.green('Note title deleted!'))
        saveNotes(remainingNotes)
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}