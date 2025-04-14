let arr = [3, 5, 8, 8, 69, 25, 36, 58, 14, 22, 22, 3, 56, 69, 58, 666, 55, 22, 33, 5656, 6];
let [a, , b, , ...rest] = arr;

console.log(a, b, rest);


const obj = {
  name: "Samarth",
  age: 20,
  profession: "Coder",
  study: "masters",
  salary: 25000
};

const { study, salary } = obj;
console.log(study, salary);

/** Refer MDN docs for js and css and HTML */

/** Spread operator */

let arr1 = [3, 5, 8];
const objx = { ...arr1 };

console.log(objx);

function sum(v1, v2, v3) {
  return v2 + v3;
}

console.log(sum(...arr1));



/** This can be use at the time of React and Next js */
const objy = {
  name: "Samarth",
  age: 20,
  profession: "Coder",
  study: "masters",
  salary: 25000
};

/** This will override the key value */
console.log({ ...objy, name: "John" });

/** This will not override the key value */
console.log({ name: "John", ...objy });