import './assets/index.scss';
import { displayFunctions } from './display_functions.js';
import { all_notes, note, noteIds } from './objects';
import { load_prev_data, store_current_data, load_prev_projects } from './localstorage_functions.js';
console.log('hello world');

load_prev_projects();

//loading previous notes if any
let current_id = 0;
let objects = load_prev_data();
for (let i = 0; i < Object.keys(objects).length; i++){
    let key = Object.keys(objects)[i];
    if (key.slice(0, 4) == "note"){
        let note = objects[key];
        let project = note.project;
        let title = note.title; 
        let author = note.author;
        let text = note.text;
        let id = note.id;
        
        displayFunctions().create_note(title, text, author, id, project);
        all_notes.setPreviousNote(title, text, author, id, project);
        current_id++;
    }
}
//updating current note id;
noteIds.setNoteId(current_id);

let add_note = document.querySelector("#new-note");
let submit_note = document.querySelector('#submit-note');
let edit = document.getElementById('edit');

let authorfilter = document.querySelectorAll('.author-filter-text');
add_note.onclick = function(){
    displayFunctions().add_note_button();
    let newnote = new note();
    if (edit){
        edit.onclick = function(){
            displayFunctions().edit_button();
        }
    }
    submit_note.onclick = function(){
        displayFunctions().submit_button(newnote);
        all_notes.addNote(newnote);
        all_notes.getAllNotes();
        store_current_data(newnote);
    }
}

let newproject = document.getElementById('new-project')
newproject.onclick = function(){
    displayFunctions().new_project_button();

    let create = document.getElementById("submit-project");
    create.onclick = function(){
        displayFunctions().create_project_button();
    }
}

let authordropdown = document.getElementById('dropdown-author');
authordropdown.onchange = function(){
    var value = authordropdown.selectedIndex;
    var selected_text = authordropdown.options[value].text;
    displayFunctions().filterAuthor(all_notes.getAllNotesList(), selected_text);
}

let clearall = document.querySelector("#clear-all")
clearall.onclick = function(){
    displayFunctions().clearAll();
}

let project_container = document.querySelectorAll(".project-title");
console.log(project_container);
for (let i = 0; i < project_container.length; i++){
    project_container[i].onclick = function(event){

        let project_name = event.target.innerHTML;
        let notes = all_notes.getAllNotesList();
        console.log("ALL NOTES: ", notes);
        displayFunctions().filterProject(project_name, notes);
    }
}

let x_out = document.querySelectorAll("#x-out-image");
for (let i = 0; i < x_out.length; i++){
    x_out[i].onclick = function(){
        displayFunctions().xout_image();
    }
}


/*

things to add:

- add details link on bottom of smaller notes
    - details link contains link to rest of information -- project, author, id, etc.
- add filtering:
    - title + time
- add a viewer option to view the notes in a different format
    - list format
*/


