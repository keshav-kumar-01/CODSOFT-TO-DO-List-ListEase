// console.log("Hello World");
shownotes();
//if user adds a task add it to the local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    // console.log(notes);
    shownotes();
});

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="notecard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">task done</button>
                </div>
            </div>`;


    });
    let noteselm = document.getElementById('notes');
    if (notesobj.lenght != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `Nothing to show here! , "Add a note" section to add notes.`;
    }
}

function deletenote(index) {
    // console.log("i am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
    
}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){
    let inputval = search.value.toLowerCase;
    // console.log("Input event fired" , inputval);
    let notescards = document.getElementsByClassName('notecard');
    Array.from(notescards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardtxt);

    })
    
})
