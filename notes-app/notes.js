const fs=require('fs');
const getNotes=function(){
    return "your notes"
}
const addNote=function (title,body){
    const notes=loadNotes();
    const duplicate=notes.filter((note)=>{
       return note.title===title
    })
    if(duplicate.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log("notes added successfully")
    }else{
        console.log("notes already exists")
    }
    }

    

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes=function(){
   try{
    const dataBuffer=fs.readFileSync('notes.json');
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON);
   }catch(err){
        return []
   }
}

const removeNote=function(title,body){
    let notes=loadNotesForRemove();
    if(notes.length===0){
        console.log("no space to remove")
        return
    }
    let filterr=notes.filter((arr)=>{
        return arr.title!=title
    })
    saveFileNow(filterr)

    

    

}

const listOutNotes=function(){
    let notes=loadNotesForRemove();
    if(notes.length==0){
        console.log("notes are empty")
        return
    }else{
        for(let i=0;i<notes.length;i++){

            
            console.log(notes[i]['title'])
            // return
        }
    }
}
const saveFileNow=function(filter){

    
    var final=JSON.stringify(filter)
    fs.writeFileSync('notes.json',final);
    console.log("obj removed successfuly!")
}
const loadNotesForRemove=function(){
    try {
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON)

    } catch (error) {
        return []
    }
}
const readNotes=function(title){
    const notes=loadNotes();
    // for(let i=0;i<notes.length;i++){
    //     if(notes[i].title==title)
    //     console.log(notes[i])
    // }
    const finding=notes.find( (note)=>note.title==title )
    if(finding){
        console.log(finding)
    }else{
        console.log("not found")
    }
}




module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    readNotes:readNotes,
    listOutNotes:listOutNotes
}