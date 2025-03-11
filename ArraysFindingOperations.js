let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** Returns first occurrence of the element */
console.log(nums.indexOf(10));




/** Returns last occurrence of the element */
console.log(nums.lastIndexOf(4)); 




/** Returns true or false based on the presence of element in the array */
console.log(nums.includes(2));



/** Returns first element which is divisible by 2 */
console.log(nums.find(elem => elem % 2 == 0));

const obj = [
  {
    name: "Samarth Desai",
    age: 21,
    profession: "Busninessman"
  },
  {
    name: "John",
    age: 25,
    profession: "Job"
  },
  {
    name: "James Watson",
    age: 55,
    profession: "Sales manager"
  }
];

console.log(obj.find(elem => elem.age > 50)); /** Returns an object */

/** With the help of . operator we can further access to the object name */
console.log(obj.find(elem => elem.age > 50).name); 




/** Returns the index of the element using findIndex method */
console.log(obj.findIndex(elem => elem.name == "James Watson"));