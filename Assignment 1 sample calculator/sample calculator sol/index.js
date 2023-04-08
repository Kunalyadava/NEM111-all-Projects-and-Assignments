// index.js

//  import the crypto module

//  get a commands using process.argv

// complete the  function

// switch (operation) {

//   default:
//     console.log("Invalid operation");
// }
// Import the crypto module

// const crypto = require("crypto");
// // Get the command line arguments
// const args = process.argv.slice(2);
// // Check if there are enough arguments
// if (args.length < 1) {
//   console.log("Usage: node index.js <operation> [operands...]");
//   process.exit(1);
// }
//     // Extract the operation and operands
// const operation = args[0];
// const operands = args.slice(1).map(parseFloat);
//      // Define the calculator functions
// function add(operands) {
//   return operands.reduce((acc, val) => acc + val, 0);
// }
// function sub(operands) {
//   return operands.reduce((acc, val) => acc - val);
// }
// function mult(operands) {
//   return operands.reduce((acc, val) => acc * val, 1);
// }
// function divide(operands) {
//   return operands.reduce((acc, val) => acc / val);
// }
// function sin(operands) {
//   return Math.sin(operands[0]);
// }
// function cos(operands) {
//   return Math.cos(operands[0]);
// }
// function tan(operands) {
//   return Math.tan(operands[0]);
// }
// function random(operands) {
//   if (operands.length === 0) {
//     console.log("Provide length for random number generation.");
//     return;
//   }
//   const length = operands[0];
//   const buffer = crypto.randomBytes(Math.ceil(length / 2));
//   const randomValue = parseInt(buffer.toString("hex"), 16);
//   console.log(randomValue.toString().substring(0, length));
// }
// // Perform the appropriate operation
// let result;
// switch (operation) {
//   case "add":
//     result = add(operands);
//     break;
//   case "sub":
//     result = sub(operands);
//     break;
//   case "mult":
//     result = mult(operands);
//     break;
//   case "divide":
//     result = divide(operands);
//     break;
//   case "sin":
//     result = sin(operands);
//     break;
//   case "cos":
//     result = cos(operands);
//     break;
//   case "tan":
//     result = tan(operands);
//     break;
//   case "random":
//     random(operands);
//     break;
//   default:
//     console.log(`Unknown operation: ${operation}`);
//     process.exit(1);
// }
// // Output the result
// if (result !== undefined) {
//   console.log(result);
// }

// Import the built-in crypto module for generating random bytes
const crypto = require("crypto");

// Extract the operation and arguments from the command line arguments passed in
const [operation, ...args] = process.argv.slice(2);

// Define a function that takes in an operation and arguments, performs the operation, and logs the result
function performOperation(operation, args) {
  let result; // Create a variable to hold the result of the operation
  // Use a switch statement to determine which operation to perform based on the value of the 'operation' variable
  switch (operation) {
    case "add":
      result = args.reduce((acc, curr) => Number(acc) + Number(curr)); // Use the reduce method to add up all the arguments
      break;
    case "sub":
      result = args.reduce((acc, curr) => Number(acc) - Number(curr)); // Use the reduce method to subtract all the arguments
      break;
    case "mult":
      result = args.reduce((acc, curr) => Number(acc) * Number(curr)); // Use the reduce method to multiply all the arguments
      break;
    case "divide":
      result = args.reduce((acc, curr) => Number(acc) / Number(curr)); // Use the reduce method to divide all the arguments
      break;
    case "sin":
      result = Math.sin(Number(args[0])); // Calculate the sine of the first argument using the built-in Math.sin method
      break;
    case "cos":
      result = Math.cos(Number(args[0])); // Calculate the cosine of the first argument using the built-in Math.cos method
      break;
    case "tan":
      result = Math.tan(Number(args[0])); // Calculate the tangent of the first argument using the built-in Math.tan method
      break;
    case "random":
      // Check if an argument was passed in for the length of the random bytes to be generated
      if (args.length === 0) {
        console.log("Provide length for random number generation.");
        return; // Exit the function if no argument was provided
      }
      const randomBytes = crypto.randomBytes(Number(args[0]) / 2); // Generate a buffer of random bytes using the crypto module
      result = randomBytes.toString("hex"); // Convert the buffer to a hexadecimal string and assign it to the 'result' variable
      break;
    default: // If the operation is not recognized, log an error message
      console.log("Invalid operation");
      return; // Exit the function
  }

  console.log(result); // Log the result of the operation
}

performOperation(operation, args); // Call the performOperation function with the extracted operation and arguments.
