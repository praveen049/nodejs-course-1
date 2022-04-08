const colours = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs argument
yargs.version('1.0.1')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note text',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove the note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Removing the note: ' + argv.title)
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    description: 'List the notes.',
    handler: function () {
        console.log('Listing the notes.')
    }
})

// Create read command
yargs.command({
    command: 'read',
    description: 'Read the notes.',
    handler: function () {
        console.log('Reading the notes.')
    }
})

yargs.parse()
// console.log(yargs.argv)