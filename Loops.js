/* For loops */

/* 
  Syntax:
  for (initialization; condition; final-expression) {
    code for execution
  }
*/

console.log(`Simple for loop`);
for (let i = 1; i <= 10; i++) {
  console.log(`I : ${i}`);
}

/**
 * 
 * Syntax for while loop
 * 
 * while (condition) {
 *   code for execution
 * }
 */


console.log(`While loop`);
let i = 1;

while (i <= 10) {
  console.log(`I : ${i}`);
  i++;
}

/**
 * 
 * For loop for an Array 
 */

console.log(`For loop for an Array`);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const i of array) {
  console.log(`I : ${i}`);
}

/**
 * For loop for an Object
 */

const object = {
  name: 'Samarth Desai',
  age: 30,
  city: 'Calgary, Canada'
};

for (const key in object) {
  console.log(`${key} : ${object[key]}`);
}

/**
 * 
 * For each loop
 */

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

fruits.forEach((fruitName, index, array) => {
  console.log(`Name : ${fruitName}, Index: ${index}, Array: ${array}`);
  console.log(`Length: ${array.length}`);
});