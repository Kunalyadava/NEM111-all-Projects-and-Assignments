//Day-1

const os = require("os");
// console.log(os.cpus()[0]);
// console.log(os.version());
// console.log(os.freemem());
// console.log(os.userInfo());


// --------------------------------------------------------------------------------------------------------


//Day-2

//pwd   --> present working directory
//cd    --> change directory
//mkdir --> create a new directory
//rm -r --> delete a directory
//touch --> create a file
//rm    --> remove(delete a file)
//..    --> one above directory

//Initialise a BackEnd Project
// 1. npm init
// 2. npm init -y  ----> recommended

const isEven = require("is-even");
// console.log(isEven(10));

const isPrime = require("is-prime");
// console.log(isPrime(10));

// const fs = require("fs");
//Asynchronous Reading
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("Bye!");

//Sychronous Reading

// const Newdata = fs.readFileSync("./text.txt", "utf-8");
// console.log(Newdata);



// fs.writeFile('./text.txt',"kdaknadnkandandinaidniandiandiaidaidnadnkdkanndknandk", (err)=>{
//     if(err){
//         console.log("Can't write the file");
//         console.log(err);
//     }else{
//         console.log("Data has been written in the file")
//     }
// })


// fs.appendFile("./text.txt","\nRitesh", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Data has been appended")
//     }
// })


// --------------------------------------------------------------------------------------------------------------------

//Day-3 ----> HTTP Basics 

// HTTP : Hyper Text Transfer Protocol

// HTTPS : Hyper Text Transfer Protocol Secured

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //logic for server
    if(req.url=="/"){
        res.end("This is Home page")
    }else if(req.url=="/about"){
        res.end("This is about page")
    }else if(req.url=="/contacts"){
        res.end("Contact me !")
    }else if(req.url=="/data"){
        fs.readFile("./data.json", "utf-8", (err,data)=>{
            if(err){
                res.end(err);
            }else{
                res.end(data);
            }
        })
    }
})

// "npm i nodemon" ---> It will install nodemon
// in package.json file,in script key put "server" : "nodemon index.js" for automatically running the server and then run command "npm run server";


server.listen(8080,()=>{
    console.log("Server is running at port 8080");
})
