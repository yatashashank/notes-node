
const fs = require('fs');

let orginalNote = {
    title: 'sometitle',
    body: 'somebody'
}

let originalNoteString = JSON.stringify(orginalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);