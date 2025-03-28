/** Console Object Methods and Their Uses */

/** 1. Basic Logging Methods */

console.log("Samarth R Desai will be the next Ruthless, Cruel businessman just as John D Rockefeller.");

console.info("This is a car.");

console.warn("Samarth R Desai is the new John D Rockefeller.");

console.error("$600 billion dollars");


/** 2. Debugging and formatting */

console.debug('Debug-level message');

/** 3. Formatting Logged Messages */

console.log('Formatted: %s, %d, %o', 'String', 42, { key: 'value' });

console.log('%cStyled console log', 'color: red; font-size: 15px;');

console.log("%cSamarth R Desai", 'color: red; font-size: 10px');

/** 
 * %s = String
 * %d = number
 * %o = Object
 * %c - CSS styling for console output
*/


/** 4. Grouping Console Output */

console.group("Group Name");
console.log('Group 1');
console.log('Group 2');
console.groupEnd();

/** 5. Timing and Performance */

console.time("Timer");

for (let i = 0; i <= 10; i++)

  console.timeEnd("Timer");

/** 6. Assertion and Validation */

console.assert(10 < 5, "This assertion will fail.");

/** 7. Table Display for Structured Data */

const users = [
  { name: 'John', age: 97 },
  { name: 'Samarth', age: 21 }
];

console.table(users);

/** 8. Clearing the Console */

console.clear();

/** 9. Stack Trace */

console.trace("Show stack trace");


/**
 * Let me break down the console object in more detail:

Basic Logging Methods


console.log(): The most common method for general logging
console.info(): Similar to log(), but typically used for informational messages
console.warn(): Displays warning messages with a yellow warning icon
console.error(): Displays error messages with a red error icon


Debugging Methods


console.debug(): Logs debug-level messages
console.trace(): Outputs a stack trace, showing the call path to the point where trace() is called


Advanced Formatting


Supports format specifiers like %s (string), %d (number), %o (object)
Allows CSS styling for console output using %c


Grouping and Organization


console.group(): Creates a collapsible group in the console
console.groupEnd(): Ends the most recent group
Helps organize complex logging


Performance Measurement


console.time() and console.timeEnd(): Measure execution time of code blocks
Useful for performance profiling


Data Visualization


console.table(): Displays arrays or objects in a clean, tabular format
Makes complex data structures easier to read


Assertion and Validation


console.assert(): Logs an error if the first argument is false
Helpful for debugging and testing conditions

Practical Tips:

Use different logging methods for different purposes
Don't leave console logs in production code
Use browser developer tools to view console output
Console methods can help with debugging and understanding code flow

 */