export const load_prev_data = function(){
    let obj = {};
    let all_keys = Object.keys(localStorage).reverse();
    for (let i = 0; i < all_keys.length; i++){
        let key = all_keys[i];
        let val = JSON.parse(localStorage.getItem(key));
        obj[key] = val;
    }
    return obj;
}

export const load_prev_projects = function(){
    let projects = JSON.parse(window.localStorage.getItem("project"));
    console.log("PROJECTS: ", projects);
    if (projects != null){
        let project_header = document.querySelector('.section2');
        for (let i = 0; i < projects.length; i++){
            let newdiv = document.createElement('div');
            newdiv.classList.add("project-title");
            newdiv.innerHTML = projects[i];
            project_header.appendChild(newdiv);
        }
    }
}

export const store_current_data = function(note){
    let title = note.getTitle();
    let text = note.getText();
    let author = note.getAuthor();
    let project = note.getProject();
    let id = note.getNoteId();
    let value = {
                    title: title,
                    text: text,
                    author: author,
                    project: project,
                }
    let key = "note" + id;
    window.localStorage.setItem(key, JSON.stringify(value));
}