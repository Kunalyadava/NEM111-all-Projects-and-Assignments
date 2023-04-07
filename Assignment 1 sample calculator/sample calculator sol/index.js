// index.js

//  import the crypto module



//  get a commands using process.argv


// complete the  function



// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }
// Import the crypto module




const crypto = require("crypto");
// Get the command line arguments
const args = process.argv.slice(2);
// Check if there are enough arguments
if (args.length < 1) {
  console.log("Usage: node index.js <operation> [operands...]");
  process.exit(1);
}
// Extract the operation and operands
const operation = args[0];
const operands = args.slice(1).map(parseFloat);
// Define the calculator functions
function add(operands) {
  return operands.reduce((acc, val) => acc + val, 0);
}
function sub(operands) {
  return operands.reduce((acc, val) => acc - val);
}
function mult(operands) {
  return operands.reduce((acc, val) => acc * val, 1);
}
function divide(operands) {
  return operands.reduce((acc, val) => acc / val);
}
function sin(operands) {
  return Math.sin(operands[0]);
}
function cos(operands) {
  return Math.cos(operands[0]);
}
function tan(operands) {
  return Math.tan(operands[0]);
}
function random(operands) {
  if (operands.length === 0) {
    console.log("Provide length for random number generation.");
    return;
  }
  const length = operands[0];
  const buffer = crypto.randomBytes(Math.ceil(length / 2));
  const randomValue = parseInt(buffer.toString("hex"), 16);
  console.log(randomValue.toString().substring(0, length));
}
// Perform the appropriate operation
let result;
switch (operation) {
  case "add":
    result = add(operands);
    break;
  case "sub":
    result = sub(operands);
    break;
  case "mult":
    result = mult(operands);
    break;
  case "divide":
    result = divide(operands);
    break;
  case "sin":
    result = sin(operands);
    break;
  case "cos":
    result = cos(operands);
    break;
  case "tan":
    result = tan(operands);
    break;
  case "random":
    random(operands);
    break;
  default:
    console.log(`Unknown operation: ${operation}`);
    process.exit(1);
}
// Output the result
if (result !== undefined) {
  console.log(result);
}

