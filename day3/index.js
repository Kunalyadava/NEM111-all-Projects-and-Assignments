// const isEven=require("is-even")
// console.log(isEven(1))


//2

// console.log("Aman")
// let ar1=process.argv[2]
// console.log(ar1)

//3
// const fs=require("fs")
// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//     console.log(err)
// }else{
//     console.log(data)
// }
// })
// console.log("Bye Bye")
// const fs=require("fs")
// fs.readFile("./lecture.txt","utf-8",(err,data)=>{
//     if(err){
//     console.log(err)
// }else{
//     console.log(data)
// }
// })
// console.log("Bye Bye")


// const fs=require("fs")
// let data=fs.readFileSync("./lecture.txt",{encoding:"utf-8"})
// console.log(data,"Bye Bye")


// const fs=require("fs")

// let data
// try{
// data=fs.readFileSync("./lecture.txt","utf-8")
// } catch(err){
// console.log(err.message)
// }
// console.log(data,"Bye Bye")


// const fs=require("fs")
// fs.writeFile("./lecture.txt","Hello Guys",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Im abad guy")
//     }
// })


// The Unicode Consortium
// The Unicode Consortium develops the Unicode 
// Standard. Their goal is to replace the existing
//  character sets with its standard Unicode 
//  Transformation Format (UTF).

//https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#promise-example

//crypto

// Node.js program to demonstrate the
// crypto.randomBytes() method

// Including crypto module
const crypto = require('crypto');

// Calling randomBytes method without callback
const buf = crypto.randomBytes(60);

// Prints random bytes of generated data
console.log("The random bytes of data generated is: "
				+ buf.toString('utf8'));
