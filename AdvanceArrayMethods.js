let array = [1,2,3,4,5,6,7,8,9];

/* This method returns a new array */
let squareArray = array.map(elem => elem * 2);
console.log(squareArray);

/** Real world example of map method */
const apiUsers = [
  { id: 1, first_name: 'John', last_name: 'Doe' },
  { id: 2, first_name: 'Jane', last_name: 'Smith' }
];

const formattedApiUsers = apiUsers.map(user => ({
  id: user.id,
  firstName: user.first_name,
  last_name: user.last_name,
  initals: user.first_name[0] + user.last_name[0]
}));

console.log(formattedApiUsers);






/* This method returns a new array */
let evenNumbers = array.filter(elem => elem % 2 == 0);
console.log(evenNumbers);

/** Real world example of filter method */
const allUsers = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];

const filteredUsers = allUsers.filter(user => user.active == true);
console.log(filteredUsers);


/* This method returns a single value

array.reduce(callback(accumulator, currentValue[, currentIndex[, array]]), initialValue)

Reduce the elements of an array to a single value.

accumulator = previous value of the reduce, currentValue = current value of the reduce

*/
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

/** Real world example of reduce method */
const cart = [
  { product: 'Laptop', price: 999, quantity: 1 },
  { product: 'Mouse', price: 25, quantity: 2 },
  { product: 'Keyboard', price: 75, quantity: 1 }
];

const totalPrice = cart.reduce((total, item) => {

  return total + (item.price * item.quantity);
}, 0);

console.log(totalPrice);


/** More complex reduce example - group by property */
const people = [
  { name: 'Alice', department: 'Engineering' },
  { name: 'Bob', department: 'Sales' },
  { name: 'Charlie', department: 'Engineering' },
  { name: 'Dave', department: 'Sales' },
  { name: 'Eve', department: 'Marketing' },
  { name: 'Cicil', department: 'Backend' },
];

const byDepartment = people.reduce((acc, person) => {

  if (!acc[person.department]) {
    acc[person.department] = [];
  }

  acc[person.department].push(person.name);

  return acc;
}, {});

console.log(byDepartment);






/** Some method */
/** Tests whether at least one element passes the test */
const hasEven = array.some(elem => elem % 2 == 0);
console.log(hasEven);

/** Real world example of some method */
const users = [
  { id: 1, name: 'Alice', role: 'admin', age: 18 },
  { id: 2, name: 'Bob', role: 'user', age: 97 },
  { id: 3, name: 'Charlie', role: 'user', age: 45 }
];

const hasAdmin = users.some(user => user.role == 'admin');
console.log(hasAdmin);




/** Every Method */
/** Tests whether all elements pass the test */
const hasMature = users.every(user => user.age >= 18);
console.log(hasMature);

/** Real world example of every method */
const formData = [
  { field: 'name', value: 'John', required: true },
  { field: 'email', value: 'john@example.com', required: true },
  { field: 'phone', value: '', required: false }
];

const allRequiredFields = formData.every(field => field.required);
console.log(allRequiredFields);




/** Transformation methods */

/** Sort method */
const unsortedNumbers = [5, 2, 1, 4, 3];
const sortedNumbers = unsortedNumbers.sort();
console.log(sortedNumbers);

unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers);

/** Real world example of sort method */
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 699 },
  { name: 'Tablet', price: 499 }
];

products.sort((a, b) => a.price - b.price);
console.log(products);

/** Reverse method */
/** Reverses the order of elements in an array */
const letters = ['a', 'b', 'c', 'd'];
letters.reverse();
console.log(letters);

/** Slice method */
/** Follows zero-based indexing */
const originalArray = [1,2,3,4,5];
const sliceArray = originalArray.slice(1, 4);
console.log(sliceArray);

/** Real world example of slice method.
 * 
 * Applying pagination
 */
const allItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];
const itemsPerPage = 3;
const currentPage = 2; 

const paginatedItems = allItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
console.log(paginatedItems);




/** Join method */
const words = ['Hello', 'world', 'of', 'JavaScript'];
const sentence = words.join(" ");
console.log(sentence);

/** Real world example of join method */
const userData = ['John', 'Doe', 'john@example.com', '123-456-7890'];
const grouped = userData.join(',');
console.log(grouped);




/** Flat method */
const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);