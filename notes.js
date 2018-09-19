
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}



let AddNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

let Read = (title) => {
    let notes = fetchNotes();
    let note = notes.filter((note) => note.title === title);
    //console.log(note[0])
    return note[0];
};

let Remove = (title) => {
    let notes = fetchNotes();
    let newNotes = notes.filter((note) => note.title !== title);
    //console.log(newNotes);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
};

let getAll = () => {
    return fetchNotes();
};
module.exports = {
    AddNote,
    Read,
    Remove,
    getAll
} 