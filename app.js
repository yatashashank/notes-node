
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
//console.log('process', command);
//console.log('yargs', argv)

if (command === 'add') {
    let note = notes.AddNote(argv.title, argv.body);
    if (note === undefined) {
        console.log('The title is already in use')
    } else {
        console.log(`your note with ${argv.title} is added succesfully`)
    }
} else if (command === 'read') {
    let note = notes.Read(argv.title);
    if (note !== undefined) {
        console.log(`the body is ${note.body} and title is ${note.title}`)
    } else {
        console.log('Enter the valid title');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.Remove(argv.title);
    var message = noteRemoved ? 'removed sucessfully' : 'enter valid title'
    console.log(message)

} else if (command === 'list') {
    let allNotes = notes.getAll();
    allNotes.map((note) => {
        console.log(`-----`);
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`)
    })
} else {
    console.log('Command not recognized');
}