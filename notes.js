const fs = require('fs')

// Version1
// const addNote = (title,body) =>{
//     const notes = loadNotes() // []  // [{title:"task1",body:"body1"}]
//     notes.push(      // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}]
//         {
//             title,
//             body
//         }
//     ) // [{title:'note1',body:'body1'}]
//     saveNotes(notes)
// }

const addNote = (title,body) =>{
    const notes = loadNotes();
    const duplicateTitles = notes.filter((note) => {
        return note.title === title;
    });
    console.log(duplicateTitles);
    console.log(duplicateTitles.length);
    if (duplicateTitles.length === 0) {
        notes.push(
            {
                title,
                body,
            }
        );
        saveNotes(notes);
        console.log("saved");
    }
    else {
        console.log("error");
    }
}

const deleteNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title
})
console.log(notes)
console.log(notesToKeep)
saveNotes(notesToKeep);
console.log("removed")
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note)=>{
        return note.title === title
    })
    if(note){
        console.log(note.body);
    }
    else{
        console.log("sorry not found");
    }
}

const listNote = () => {
    const notes = loadNotes();
    // console.log(notes)
    notes.forEach((note) => {
        console.log(note.title,note.body);
    });
}
// application students yargs add read delete list 
// 1)id(num) 2)name(string) 3)grades(array) 4)comment(string)(e5teare)  5)total lel grades 5asea esmaha daynamic mosh bad5alha search 3ala ezay ad5al el array fel terminal

const loadNotes = () => {
    // error begining of program
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer)
    try{
        //  [{"title":"task1","body":"body1"}]
        const dataBuffer = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)  //  [{title:"task1",body:"body1"}]
    }
    catch(e){
        return []
    }

}

const saveNotes = (notes) =>{
    // [{title:'task1',body:'body1'}]  ==> [{"title":'task1',"body":'body1'}]
    // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}] ==> [{"title":'task1',"body":'body1'},{"title":'task2',"body":'body2'}]
const saveData = JSON.stringify(notes)   
// console.log(saveData)
fs.writeFileSync('notes.json',saveData)

}

module.exports = {
    addNote,
    deleteNote,
    readNote,
    listNote
}