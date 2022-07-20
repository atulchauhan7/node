// const fs=require('fs')
// fs.appendFileSync('notes.txt',' this')

// const name="atul";
// const name=require('./utilis')
// // utils
// console.log(name(3,4))


// var chalk =requ

// const validator=require('validator');

// console.log(validator.isURL('http://localcom'))

var chalk=require('chalk');
const { argv } = require('yargs');
// // var a="atul_ace_turtle";
// var aa=chalk.red('success ');
// console.log(aa);

// console.log(process.argv[2],process.argv[4])
// 
//section4:
// var a=process.argv[2];

// if(a){
//     console.log(a)
// }else{
//     console.log("und")
// }
// console.log("this is the first program created by me")
const yargs=require('yargs');
// const add = require('./utils');
const notes=require('./notes')
// console.log(process.argv);
// yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:"add a new note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"body title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
        
})

yargs.command({
    command:'read',
    describe:'reading notes',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'read notes'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command:"remove",
    describe:"removing completely",
    builder:{
        title:{
            describe:"node title",
            type:'string',
            demandOption:true
        },
        body:{
            demandOption:true,
            describe:"body of node",
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title,argv.body)
    }
})

yargs.command({
    command:"list",
    describe:"listout notes",
    builder:{
        // title:{
        //     type:'string',
        //     demandOption:true,
        //     describe:"title of note"
        // }
    },
    handler:function(argv){
        notes.listOutNotes(argv.title)

    }
})



console.log(yargs.argv)
// 
//     handler:function(argv){
//         console.log("new note added success",argv)
//     }
// })

// yargs.command({
//     command:'remove',
//     describe:'remove a note',
//     builder:{

//     },
//     handler:function(){
//         console.log("remove note  successs")
//     }
// })

// const utils=require('./utils')
