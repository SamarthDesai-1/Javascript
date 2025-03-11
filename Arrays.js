/**
 * Creating arrays
 */

/** Method : 1 */
const fruits = ["apple", "banana", "cherry"];

/** Method : 2 */
const nums = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

/** Method : 3 */
const chars = Array.from("Samarth Desai");

/** Method : 4 */
const zeros = Array(5).fill(0);

console.log(fruits);
console.log(nums);
console.log(chars);
console.log(zeros);


/** Basic arry operations 
 * 
 * All the operations has been applied on the nums array.
*/

nums.push(24); /** Push a value at the end of the array */

nums.pop(); /** Remove a value from the end of the array */

nums.unshift(2400); /** Add a value at the beginning of the array */

nums.shift(2400); /** Remove a value from the beginning of the array */


fruits.splice(1, 2, "Chikoo", "Guava");

console.log(fruits);

