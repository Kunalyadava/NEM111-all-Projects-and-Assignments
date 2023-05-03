 // Interaction with system
// There are two methods by which we can interact with the system/machine/computer:

// GUI ⇒ Graphical User Interface

// This is the pretty common way that we use to interact with the system,
// that includes taking the help of graphics to demonstrate and visualise
// all the actions that we are doing.

// CLI ⇒ Command Line Interface

// This kind of interaction mainly involves writing specific commands to
// perform any kind of operation in the system.


// Basic Windows CLI Commands
// Command	Description
// dir	                List the directory (folder) system.
// cd                   pathname	Change directory (folder) in the file system.
// cd \             	Move to the root folder of the file system.
// cd ..       	        Move one level up (one folder) in the file system.
// copy	                Copy a file to another folder.
// move	                Move a file to another folder.
// type filename	    Type a file.
// mkdir or md      	Creates a new directory (folder).
// rmdir or rd //rm -r filename   	Removes a directory (folder).
// cls         	        Clears the CLI window.
// exit	                Closes the CLI window.
// help command      	Shows the manual for a given command.

// Package.json is a file in the root directory of a Node.js 
// project that holds various information relevant to the project. 
// This file gives information to npm that allows it to identify the project
//  as well as handle the project’s dependencies.
// A package.json file:
// lists the packages your project is dependent on
// specifies versions of a package that your project can use/ using
// makes your build reproducible, and therefore easier to share with other developers
// contains other metadata such as a project description, the version of the project
//  in a particular distribution, license information, even configuration data etc
// is vital to both npm and the end-users of the package




// Although javascript is a single 
// threded  but it act like an async. language
//  because of its concruent (parallel) in nature

// Javascript is a single threaded language. This means it has one call 
// stack and one memory heap. As expected, it executes code in order
//  and must finish executing a piece code before moving onto the next.

// or
// Javascript is a single-threaded language, meaning that just 
// one line of code may be run at once. Javascript is single-threaded because,
//  originally, it was only a web browser scripting language 
//  created to serve the needs of a single user
//  on a single window of the browser, eliminating the need for multithreading.
//   It's synchronous, but at times that can be harmful. 
//   For example, if a function takes awhile to execute or has to wait on something,
//    it freezes everything up in the meanwhile.
// A good example of this happening is the window alert function. alert("Hello World")
// You can't interact with the webpage at all until you hit OK and dismiss the alert. You're stuck.
// So how do we get asynchronous code with Javascript then?
// Well, we can thank the Javascript engine (V8, Spidermonkey, JavaScriptCore, etc...) 
// for that, which has Web API that handle these tasks in the background. 
// The call stack recognizes functions of the Web API and hands them off to 
// be handled by the browser. Once those tasks are finished by the browser,
//  they return and are pushed onto the stack as a callback.

// If you need to make multiple API requests, you can send these API
//  requests concurrently instead of sending them one by one.
// Sometimes, we need to make multiple API calls at once.
//  For example, let's say we have an array, and we want to make an
//   API request for each element of that array. We will use a loop to
//    iterate over the array and make the calls; however, there are two different approaches to do this.

// Sequential vs. Parallel API Calls
// There are two types of API calls, 
// depending on how they are made.

// 1. Sequential API Calls
// Sequential API calls are executed one by one, 
// i.e., the second call is made after the first call completes. 
// This approach is not ideal for performance because if 
// you have ten requests and each request takes one second to execute,
//  the total execution time will add up to ten seconds.

// 2. Parallel API Calls
// To avoid slow execution, we can send all the API calls at
//  once and execute them in parallel. As a result, there is no 
//  particular order in which the calls finish their execution
//   but their execution times do not add up since they run together.

// Making Parallel Calls in JavaScript
// It can be tricky to figure out how to make parallel 
// but asynchronous API calls. In JavaScript,
//  you can use the Promise.all() method to achieve this.

// Promise.all()
// The Promise.all() method takes an 
// array of promises as an input and returns a
//  single promise that resolves to the results of all the input promises.
//   Every API call is essentially a promise, so we can feed all
//    the API calls in Promise.all(), which will execute them together.


// Concurreny Model in Javascript


// So first of all what we all know about Javascrpit is that it is -

// single-threaded which means 2 statements cannot be executed simultaneously,
// non-blocking which means execution of some code should not stop the execution
//  of program because its too slow making the browser unresponsive,
// asynchronous which means that 2 or more tasks can be done simultaneously,
// concurrent means multiple computations can happen at same time.
// console.log("Hello");
// setTimeout( () => {
//     console.log("Hello inside setTimeout");
// }, 1000);
// console.log("Bye");

// TO KNOW MORE https://www.notion.so/day2-d74e448612be4d92855d2bd0e538914c?pvs=4







// Static typed languages
// A language is statically-typed if the type of a variable is 
// known at compile-time instead of at run-time. Common examples of
//  statically-typed languages include Java, C, C++, FORTRAN, Pascal and Scala.

// In Statically typed languages, once a variable has been declared 
// with a type, it cannot ever be assigned to some other variable of 
// different type and doing so will raise a type error at 
// compile-time(some IDE’s generally shows a Red Cross mark denoting the error).


// class Main {
//     public static void main( String args[] ) {
//       int number;
//       number = 10; 
//       System.out.println(number);
//     }
// }

// In static-typed languages, we have to define the 
// type of a variable before we assign a value to it.

// In the code above:

// Line 3: We declare a variable number. Note that we have also defined its type here.
// Line 4: We assign a value to the variable number.
// Line 3: We print the value of the variable number on the console.
// Example 2


// Note: the statement above (which binds an integer value, 
//     and then binds a string value to the same variable name data) 
//     is illegal. But in a dynamically-typed language this sequence 
//     of statements is perfectly fine.

// Advantages:
// A large class of errors are caught in the early stage
//  of development process.
// Static typing usually results in compiled code 
// that executes more quickly because when the compiler knows 
// the exact data types that are in use, it can produce
//  optimized machine code (i.e. faster and/or using less memory).


// Now let’s see how dynamic-typed languages work:

// number =10
// console.log(number)

// In dynamic-typed languages, we don’t need to define
//  the type of a variable as an interpreter at run-time will handle it.
// In the above code:
//  Line 1: We declare a variable number and assign a value to it. 
//  Note that we have not defined its type here.
// Line 2: We print the value of variable number on the console.




// Compile-time	
// The compile-time errors are the errors which are produced at the compile-time, and they are detected by the compiler.
// In this case, the compiler prevents the code from execution if it detects an error in the program.	
// It contains the syntax and semantic errors such as missing semicolon at the end of the statement.

// Runtime
// It contains the errors such as division by zero, determining the square root of a negative number.
// In this case, the compiler does not detect the error, so it cannot prevent the code from the execution.
// The runtime errors are the errors which are not generated by the
//  compiler and produce an unpredictable result at the execution time.

//day4
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




//http://localhost:4500/data 
////autocannon one of the fastest tools available for testing web-server performance


// MongoDB is a 
// schema-less NoSQL document database.
//  It means you can store JSON documents in it,
//   and the structure of these documents can vary as
//    it is not enforced like SQL databases. This is one
//     of the advantages of using NoSQL as it speeds up application
//      development and reduces the complexity of deployments.

// Mongoose is an Object Data Modeling (ODM) library for
//  MongoDB and Node.js. It manages relationships between data, 
//  provides schema validation, and is used to
//   translate between objects in code and the 
// representation of those objects in MongoDB.


