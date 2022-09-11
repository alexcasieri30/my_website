import './index.css';

const queryString = window.location.search;
let params = queryString.substr(1).split("&");
let person = {};
for (let i = 0; i < params.length; i++){
    let key = params[i].split("=")[0];
    let val = params[i].split("=")[1];
    if (val!=""){
        person[key.toString()] = val;
    }
}
let prevuser = window.localStorage.getItem('user');
if (prevuser=="{}"||prevuser==null){
    window.localStorage.setItem('user', JSON.stringify(person));
}

let other_options = document.querySelectorAll(".dashboard-lower");
let projects = document.querySelector(".projects");
let todo = document.querySelector(".todo");

console.log(other_options);

for (let i = 0; i < other_options.length; i++){
    other_options[i].onclick = function(event){
        for (let j = 0; j < other_options.length; j++){
            other_options[j].classList.remove('selected');
        }
        event.target.classList.add("selected");
        if (event.target.id=="project_button"){
            projects.classList.remove("hidden");
            todo.classList.add("hidden");
        }else if (event.target.id=="todo_button"){
            todo.classList.remove("hidden");
            projects.classList.add("hidden");
        }
    }
}

let user = JSON.parse(window.localStorage.getItem("user"));
let username = document.getElementById("title-content");
if (username){
    if (user.firstname == "" || user.firstname == null){
        username.innerHTML = 'Welcome, user';
    }else{
        username.innerHTML = 'Welcome, ' + user.firstname;
    }
}
