export class note{
    constructor(){
        this.text = null;
        this.title = null;
        this.time = null;
        this.project = null;
        this.author = null;
        this.noteId = noteIds.getNextNoteId();
    };
    setText(text){
        this.text = text;
    }
    getText(){
        return this.text;
    }
    setTitle(title){
        this.title = title;
    }
    getTitle(){
        return this.title;
    }
    setTime(time){
        this.time = time;
    }
    getTime(){
        return this.time;
    }
    setAuthor(author){
        this.author = author;
    }
    getAuthor(){
        return this.author;
    }
    setNoteId(id){
        this.noteId = id;
    }
    getNoteId(){
        return this.noteId;
    }
    setProject(proj){
        this.project = proj;
    }
    getProject(){
        return this.project;
    }
}

export const noteIds = (function(currnoteId=null){
    var noteId = 0;
    const setNoteId = function(currNoteId){
        noteId = currNoteId;
    }
    const getNextNoteId = function(){
        noteId++;
        return noteId;
    };
    return { noteId, getNextNoteId, setNoteId };
})();

export const all_notes = (function(){
    const notes = new Array();
    const addNote = function(note){
        notes.push(note);
    };
    const getAllNotes = function(){
        for (let i = 0; i < notes.length; i++){
            console.log(notes[i].getTitle(), notes[i].getNoteId());
        }
    };
    const setPreviousNote = function(title, text, author, id, project){
        let newnote = new note();
        newnote.setTitle(title);
        newnote.setAuthor(author);
        newnote.setText(text);
        newnote.setNoteId(id);
        newnote.setProject(project);
        notes.push(newnote);
    }
    const getAllNotesList = function(){
        let output = new Array();
        for (let i = 0; i < notes.length; i++){
            output.push(notes[i]);
        }
        console.log(output);
        return output
    };
    const filterByAuthor = function(author){
        let output = new Array();
        for (let i = 0; i < notes.length; i++){
            if (notes[i].getAuthor() == author){
                output.push(notes[i]);
            }
        }
        return output;
    };
    return { addNote, getAllNotes, filterByAuthor, getAllNotesList, setPreviousNote };
})();
