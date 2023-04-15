const addTittle = document.getElementById('addTittle'); //accessing all elel by their ids
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
 const deleteNoteButton = document.getElementById('deleteNote');

const addNotesDiv = document.getElementById('notes');
const deletedNotesDiv = document.getElementById('deleted-notes');
const archiveNotesDiv = document.getElementById('archive-notes');
// let notearray =[];
displayNote();//so tht we could see after eloading


function addFun(){
    let notes = localStorage.getItem('notes');
    if(notes ===null){
        notes=[];//creating empty arr

    }
    else{
        notes = JSON.parse(notes); //convt sting to obj
    }

    if(addText.value==''){
        alert("Add your note with tittle")
        return ;
    }

    const noteObj = {
        title : addTittle.value,
       text : addText.value,
    }
    //after adding , again make it as empty

    addTittle.value='';
    addText.value='';

    notes.push(noteObj); //notes is arry of storing all note
    //update 
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNote();
}

function displayNote(){
    let noteHtml='';
    let notes = localStorage.getItem('notes');
    if(notes===null){
        return ;
    }
    else{
        notes= JSON.parse(notes);//convert into obj back
    }

    // let archiveNotes= localStorage.getItem('archiveNotes');
    // if(archiveNotes===null){
    //     archiveNotes = [];
    // } else {
    //     archiveNotes = JSON.parse(archiveNotes);
    // }

    //adding notes into notes div section with have delete btn
    for(let i = 0 ; i<notes.length; i++){
      //adding the string literals
     
      noteHtml +=` <div class = "note">
                    <button class ="deleteid" id=${i } onclick ="deleteNote(${i})">Delete</button>
                    <span class="title">${notes[i].title === ''? "NOTE" :notes[i].title}</span>
                    <div class="text">${notes[i].text}</div>
                </div>
            `
    }
       // Display archive notes
    //    for(let i = 0 ; i<archiveNotes.length; i++){
    //     archiveHtml += `
    //         <div class="note archive">
    //             <button class="deleteid" id="${i}" onclick="deleteArchive(${i})">Delete</button>
    //             <span class="title">${archiveNotes[i].title === '' ? "NOTE" : archiveNotes[i].title}</span>
    //             <div class="text">${archiveNotes[i].text}</div>
    //         </div>
    //     `;
    // }
    addNotesDiv.innerHTML= noteHtml;
}

    function deleteNote(ind){
        let notes = localStorage.getItem('notes');
        if(notes ===null){
          return ;
    
        }
        else{
            notes = JSON.parse(notes); //convt sting to obj
        }
        // detlteNotes store in deletearray so tht we can retrive it 
        const deletedNote = notes[ind]
        notes.splice(ind, 1);//remove note
        localStorage.setItem('notes', JSON.stringify(notes));
         

        //get the deleted note arry from storage and add thm 
        let deletedNotes = localStorage.getItem('deletedNotes');
        if(deletedNotes===null){
            deletedNotes =[];
        }else{
            deletedNotes = JSON.parse(deletedNotes);
        }
        deletedNotes.push(deletedNote);
        localStorage.setItem('deletedNotes', JSON.stringify(deletedNotes));
        displayNote();
        displayDeletedNotes();
    }
    // console.log(notes);
    function displayDeletedNotes(){
        let deletedNoteHtml = '';
        let deletedNotes = localStorage.getItem('deletedNotes');
        if(deletedNotes === null){
            return ;
        }
        else{
            deletedNotes = JSON.parse(deletedNotes);
        }
        for(let i = 0 ; i<deletedNotes.length; i++){
            deletedNoteHtml +=`<div class= "note">
            <span class="title">${deltedNotes[i].title === ''? "NOTE" :deletedNotes[i].title}</span>
            <div class="text">${deletedNotes[i].text}</div>
        </div>`
        }

        deletedNotesDiv.innerHTML= deletedNoteHtml;
    }



addNoteButton.addEventListener('click',addFun );
deleteNoteButton.addEventListener('click',displayDeletedNotes ); //not sure 



/*
deltete  note have to store somewherre :: archive something  nd retrive 
archive note
filter by some tittle 
*/