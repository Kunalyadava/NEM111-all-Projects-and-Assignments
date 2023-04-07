
// The runtime environment is the environment in which
//  a program or application is executed. 
// It's the hardware and software infrastructure
//  that supports the running of a particular codebase in real time.


// Node.js (Node) is an open source, cross-platform runtime environment for
//  executing JavaScript code. Node is used extensively for server-side programming, 
//  making it possible for developers to use JavaScript for client-side and server-side 
//  code without needing to learn an additional language.
//   Node is sometimes referred to as 
// a programming language or software development 
// framework, but neither is true; it is strictly a JavaScript runtime.

// let a=5;
// let b=10;
// const a=require("./main")
// const b=require("./main")
// console.log(a+b)
//2
// const add=require("../main")
// console.log(add(10,20))
//3
// const [div,sub,mul,add]=require("./main")
// const {div,sub,mul,add}=require("./main")
// console.log(add(20,5))
// console.log(sub(20,5))
// console.log(mul(20,5))
// console.log(div(20,5))
//4
// const os=require("os")
// console.log(os.freemem())
// console.log(os.freemem())
// console.log(os.version())
// console.log(os.cpus())

//5
// javascript 1 single threaded ,Asynchronous ,dynamically typed ,concruent
// console.log(10+10)
// const print=()=>{
//     console.log("Hello")
// }
// print()
// console.log("Kunal")
// console.log(10+10)
// setTimeout(()=> console.log("Hello"),2000)


// console.log("Kunal")

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