/* Function declaration */


/*
Syntax:

  function functionName() {
    
    code for execution.

  }

*/

function greet() {
  
  console.log("Hello samarth desai");
}

greet();

/* Function expression */

let a = 52;
let b = 2;

const sum = function(a, b) {
  return a + b;
}

console.log(`Sum of ${a} and ${b} is ${sum(a, b)}`);


/* Arrow function from ES6 */
const mul = (a, b) => {
  return a * b;
}

console.log(`Multiplication of ${a} and ${b} is ${mul(a, b)}`);