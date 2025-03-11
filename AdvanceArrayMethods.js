let array = [1,2,3,4,5,6,7,8,9];

/* This method returns a new array */
let squareArray = array.map(elem => elem * 2);
console.log(squareArray);


/* This method returns a new array */
let evenNumbers = array.filter(elem => elem % 2 == 0);
console.log(evenNumbers);


/* This method returns a single value

array.reduce(callback(accumulator, currentValue[, currentIndex[, array]]), initialValue)

Reduce the elements of an array to a single value.

accumulator = previous value of the reduce, currentValue = current value of the reduce

*/
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);