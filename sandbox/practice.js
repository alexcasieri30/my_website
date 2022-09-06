
// let mylibrary = [];
// function Book(title, pages, author, read){
//     this.title = title;
//     this.pages = pages;
//     this.author = author;
//     this.read = read;
// }

// const button = document.querySelector(".addbook");

// button.onclick = function(){
//     let name = document.querySelector("#book-info").value;
//     let info = name.split(", ");
//     const book = new Book(info[0], info[1], info[2]);
    
//     document.querySelector("#book-info").value = "";
    
//     let table = document.querySelector('table');
//     let row = table.insertRow(0);

//     for (let i = 0; i < 3; i++){
//         var td = document.createElement("td");
//         td.innerHTML = info[i];
//         row.appendChild(td);
//     }
//     var readbutton = document.createElement('button');
//     readbutton.innerHTML = info[3];
//     readbutton.id = "read";
//     row.appendChild(readbutton);
//     console.log(readbutton);
// }


// addEventListener('click', (event)=>{
//     if (event.srcElement.id == "read"){
//         readbutton = document.getElementById("read");
//         if (readbutton.innerHTML == "false"){
//             readbutton.innerHTML = 'true';
//         }else{
//             readbutton.innerHTML = "false";
//         }
//     }
// });


let button = document.querySelector("#reset");
button.onclick = function(){
    console.log("clicked");
    button.classList.add("pointer-delay");
    setTimeout(function(){
        button.classList.remove("pointer-delay");
    }, 3000);
}