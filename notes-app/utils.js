const fs=require('fs')
const getNotes=function(){
    console.log("getNotes running")
}
const addNotes=function(title,body){
    const notes=loadNotes()
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
}
const saveNotes=function(notes){
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=function(){
const dataBuffer=fs.readFileSync('notes.json')


const dataJson=dataBuffer.toString()
return JSON.parse(dataJson)
}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    loadNotes:loadNotes
}