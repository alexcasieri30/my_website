import note from './objects.js';
import x_out from './assets/x_out.jpg';

export const displayFunctions = function(){
    const xout_image = function(){
        let note_creator = document.querySelector(".new-note-information");
        let project_creator = document.querySelector(".new-project-information")
        note_creator.classList.add("hidden");
        project_creator.classList.add("hidden");
        let body = document.querySelector('body');
        body.classList.remove("popup")
        let dropdowns = document.querySelectorAll(".dropdown");
        for (let i = 0; i < dropdowns.length; i++){
            dropdowns[i].classList.remove("popup");
        }
    }
    const new_project_button = function(){
        let new_project_info = document.querySelector(".new-project-information")
        new_project_info.classList.remove("hidden");
        let body = document.querySelector('body');
        body.classList.add("popup")
        let dropdowns = document.querySelectorAll(".dropdown");
        for (let i = 0; i < dropdowns.length; i++){
            dropdowns[i].classList.add("popup");
        }
    }
    const create_project_button = function(){
        let title = document.querySelector("#title").value;
        let project_name = window.localStorage.getItem("project");
        if (project_name==null){
            window.localStorage.setItem("project",JSON.stringify([title]));
        }else{
            let projects = JSON.parse(window.localStorage.getItem('project'));
            console.log(projects);
            projects.push(title);
            window.localStorage.setItem("project", JSON.stringify(projects));
        }
        let project_container = document.querySelector(".section2");
        let newdiv = document.createElement("div");
        newdiv.classList.add("project-title");
        newdiv.innerHTML = title;
        project_container.appendChild(newdiv);

        let popup = document.querySelector(".new-project-information")
        popup.classList.add("hidden");
        let body = document.querySelector('body');
        body.classList.remove("popup")
        let dropdowns = document.querySelectorAll(".dropdown");
        for (let i = 0; i < dropdowns.length; i++){
            dropdowns[i].classList.remove("popup");
        }
    }
    const add_note_button = function(){
        console.log("add_note_button started")
        let dropdowns = document.querySelectorAll(".dropdown");
        for (let i = 0; i < dropdowns.length; i++){
            dropdowns[i].classList.add("popup");
        }
        let popup = document.querySelector(".new-note-information");
        let body = document.querySelector('body');
        body.classList.add("popup");
        popup.classList.remove("hidden");
        console.log("add_note_button finished");
    }
    const edit_button = function(){
        let oldtextarea = document.getElementById("temp-note-text");
        if (!oldtextarea){
            //get inner html first
            let textarea = document.querySelector('.notetext');
            let text = textarea.innerHTML;
            textarea.innerHTML = "";
            let newtextarea = document.createElement('textarea');
            newtextarea.id="temp-note-text";
            newtextarea.placeholder="Enter note text";
            newtextarea.value = text;
            let note_text = document.querySelector('.notetext');
            note_text.appendChild(newtextarea);
        }
        let oldtitletext = document.getElementById("temp-note-title");
        if (!oldtitletext){
            let title_textarea = document.querySelector(".title-textarea");
            let title_innerhtml = title_textarea.innerHTML;
            title_textarea.innerHTML = "";
            let newtitleinput = document.createElement('input');
            newtitleinput.id="temp-note-title";
            newtitleinput.type="textarea";
            newtitleinput.name="note-title";
            newtitleinput.placeholder="Enter title";
            newtitleinput.value = title_innerhtml;
            let label = document.createElement('label');
            label.for="note-title";
            title_textarea.appendChild(label);
            title_textarea.appendChild(newtitleinput);
        }
        let oldauthortext = document.getElementById("author");
        if (!oldauthortext){
            let authortextarea = document.querySelector(".author-text");
            let author_innerhtml = authortextarea.innerHTML;
            authortextarea.innerHTML = "";
            let newauthorinput = document.createElement('input');
            newauthorinput.type="textarea";
            newauthorinput.id="author";
            newauthorinput.name="author-input";
            newauthorinput.placeholder="Enter author";
            newauthorinput.value = author_innerhtml;
            console.log(newauthorinput);
            authortextarea.appendChild(newauthorinput);
        }

    }
    const save_button = function(note){
        let text = document.getElementById('temp-note-text');
        let title = document.getElementById('temp-note-title');
        let author = document.getElementById('author');
        author.classList.add('hidden');
        title.classList.add('hidden');
        text.classList.add("hidden");

        let title_text = title.value;
        let title_textarea = document.querySelector('.title-textarea');
        title_textarea.innerHTML = title_text;
        note.setTitle(title_text);
        
        let textarea = document.querySelector('.notetext');
        textarea.innerHTML = text.value;
        note.setText(text.value)

        let author_text = author.value;
        let author_textarea = document.querySelector(".author-text");
        author_textarea.innerHTML = author_text;
        note.setAuthor(author_text);
    }

    const create_note = function(title, text, author, id, project){
        let notes_area = document.querySelector('.grid');
        console.log(notes_area);

        let newnote = document.createElement('div');
        newnote.classList.add('active-note');
        
        let note_title = document.createElement('div');
        let note_text = document.createElement('div');

        note_title.classList.add("active-note-title");
        note_title.innerHTML = title;
        note_text.classList.add("active-note-text");
        note_text.innerHTML = text;
        
        newnote.appendChild(note_title);
        newnote.appendChild(note_text);
        
        notes_area.appendChild(newnote);
    }

    const submit_button = function(note){
        let dropdowns = document.querySelectorAll(".dropdown");
        for (let i = 0; i < dropdowns.length; i++){
            dropdowns[i].classList.remove("popup");
        }

        let note_text = document.getElementById('text');
        let note_author = document.getElementById('author');
        let note_title = document.getElementById('title');
        let note_project = document.getElementById('project');
        let note_text_value = note_text.value;
        let note_author_value = note_author.value;
        let note_title_value = note_title.value;
        let note_project_value = note_project.value;

        note_text.value = "";
        note_author.value = "";
        note_project.value = "";
        note_title.value = "";

        note.setTitle(note_title_value);
        note.setAuthor(note_author_value);
        note.setText(note_text_value);
        note.setProject(note_project_value);
        
        let popup = document.querySelector(".new-note-information");
        let body = document.querySelector("body");
        popup.classList.add("hidden");
        body.classList.remove("popup");

        let title = note.getTitle();
        let author = note.getAuthor();
        let text = note.getText();
        let id = note.getNoteId();

        create_note(title, text, author, id);
        
        let storage_note = {};
        storage_note["title"] = note.getTitle();
        storage_note["text"] = note.getText();
        storage_note["author"] = note.getAuthor();
        storage_note["id"] = note.getNoteId();
        
        window.localStorage.setItem('note' + note.getNoteId().toString(), JSON.stringify(storage_note));
    }
    const filterAuthor = function(all_notes, author_name){
        let active_notes = document.querySelectorAll('.active-note');
        for (let i = 0; i < active_notes.length; i++){
            active_notes[i].classList.remove("hidden");
        }
        if (author_name == "Author"){
            return;
        }
        for (let i = 0; i < active_notes.length; i++){
            let current_element = active_notes[i];
            let obj_note = all_notes[i];
            console.log(obj_note);
            let author = obj_note.getAuthor();
            if (author != author_name){
                current_element.classList.add("hidden");
            }
        }
        return;
    }
    const clearAll = function(){
        let grid = document.querySelector('.grid');
        let active_notes = document.querySelectorAll(".active-note");
        let n = grid.children.length;
        for (let i = 0; i < n; i++){
            grid.removeChild(active_notes[i]);
        }
        let objects = Object.keys(localStorage);
        console.log(objects);
        for (let i = 0; i < Object.keys(objects).length; i++){
            let key = objects[i];
            if (key.slice(0, 4) == "note"){
                localStorage.removeItem(key);
            }
        }
    }
    const filterProject = function(name, notes){
        let active_notes = document.querySelectorAll('.active-note');
        for (let i = 0; i < active_notes.length; i++){
            active_notes[i].classList.remove("hidden");
        }
        if (name=="Show all"){
            console.log(notes);
            return;
        }
        for (let i = 0; i < notes.length; i++){
            console.log(notes[i].getProject());
            if (notes[i].getProject()!=name){
                active_notes[i].classList.add("hidden");
            }
        }
    }
    return { new_project_button, xout_image, create_project_button, add_note_button, clearAll, edit_button, save_button, submit_button, filterAuthor, filterProject, create_note };
}