//bandwidth is  data transmission capacity
//http is a set of rules to communicate between the client and the server

// In http rest APIs we are stuck with a very limited set of verbs.
// They are essentially:

// get: to load data
// post: to create new data
// put: to replace data
// patch: to update data
// delete: to remove data
// These are the verbs of a typical CRUD operation

// Out of 39 http methods, developers typically use the "GET", "POST",
//  "PUT", "PATCH" and "DELETE" methods.
// ✔ GET
// The GET method is used to retrieve resources from a
//  server. It is said to be a safe method as
//  it does not change the state of the resource in any way.
// GET method is idempotent Thus calling this
//  method multiple times will always give the same result.

// Example URIs
// HTTP GET 'http://www.apidomain.com/users'
// HTTP GET 'http://www.apidomain.com/users?size=20&page=5'
// HTTP GET 'http://www.apidomain.com/users/123'
// HTTP GET 'http://www.apidomain.com/users/123/address'
// ✔ POST
// POST method is used to create a new resource
// into the collection of resources on a server.
// It is important to note that POST is Non-idempotent.
//  Thus invoking two identical POST requests will result
//  in duplicate information being created on the server.

// Example URIs
// HTTP POST 'http://www.apidomain.com/users'
// HTTP POST 'http://www.apidomain.com/users/123/accounts'
// ✔ PUT
// PUT is used to update the existing resource on the
// server and it updates the full resource.
// If the resource does not exist, PUT may decide to create a new resource.
// PUT method is idempotent Thus calling this method multiple
//  times will always update the same resource multiple times.

// Example URIs
// HTTP PUT 'http://www.apidomain.com/users/123'
// HTTP PUT 'http://www.apidomain.com/users/123/accounts/456'
// ✔ PATCH
// PATCH is used to update the existing resource
// on the server and it updates a portion of the resource.
// If the resource does not exist, PUT may decide to
// create a new resource.
// Just as the PUT method, PATCH is also idempotent

// Example URIs
// HTTP PATCH 'http://www.apidomain.com/users/123'
// HTTP PATCH 'http://www.apidomain.com/users/123/accounts/456'
// PATCH vs PUT
// PUT method primarily fully replaces an entire
//  existing resource but PATCH partially updates an existing resource.

// The PATCH method is not a substitute to
// the PUT method. It applies a delta (diff) rather than replacing
// the entire resource.

// ✔ DELETE
// DELETE Method is used to delete the resources from a server.
// It deletes resource identified by the Request-URI.
// DELETE method are idempotent.
// Conclusion
// As a backend developer, It is very important to follow the
//  standard approach in building your API.
//The fs.readFile() method is an inbuilt method 
//which is used to read the file. This method 
//read the entire file into buffer. 
const http = require("http");
const fs=require("fs") //importing fs

const server = http.createServer((req,res) => {
  //logic of the server
  if(req.url==="/"){
    res.setHeader("Content-type","text/html")
    res.end("<h1>This is the home page</h1>"); //telling my server to show content in html
  } else if (req.url === "/about") {
    res.end("This is about me page");
  } else if (req.url === "/contacts") {
    res.end("Contact Me!!");
  } else if (req.url === "/data") {
    fs.readFile("./data.json","utf-8",(err,data) => {
      
      if(err){
        res.end(err)
      }else{
        res.setHeader("Content-type","application/json")
        //res.write("Following is the user data that you have requested\n")
        res.end(data)
      }
    })
   
  } else if (req.url ==="/blogs") {
    res.end("blogs data");
  // }else if(req.url==="/add"){
  //   const user={ //creating new data and pushing it
  //     id:256,
  //     name:"Kunal",
  //     age:25,
   
  //   }
  //   let data=JSON.parse(fs.readFileSync("./data.json","utf-8"))
  //   data.push(user)
  //   fs.writeFileSync("./data.json",JSON.stringify(data))
  //   res.end("Updated database")
  }else {
    res.end("error File not found!!")
  }
})
  // try{

  //     const data=fs.readFileSync("./data.json","utf-8")
  //     res.end(data)
  // }catch(err){
  //     res.end(err)
  // }

  // }else if(req.url=="/writedata"){
  //     fs.writeFile("./text.txt","This is me learning the server logic")
  // }

//running the server
server.listen(4500, () => {
  console.log("server is running at port 4500");
});
//The server. listen() method creates a listener on the specified port or path.
//listen means
//port number acts like a parking lot

//res.end means once the response has ended show this
//res.write means write this BEFORE ENDING THE RESPONSE response

// What is Nodemon used for?
// Nodemon is a command-line tool that helps
//  with the speedy development of Node. js
//   applications. It monitors our project
//   directory and automatically restarts our
//    node application when it detects any changes.
//    This means that we do not have to stop
//     and restart our applications in order for
//      our changes to take effect.
