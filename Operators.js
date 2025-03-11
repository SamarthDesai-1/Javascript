/* Arithmetic Operators */

let sum = 5 + 6;
let sub = 85 - 10;
let mul = 8 * 2;
let div = 8 / 4;
let rem = 52 % 3;
let power = 10 ** 5;

console.log(`Sum : ${sum}`);
console.log(`Sub : ${sub}`);
console.log(`Mul : ${mul}`);
console.log(`Div : ${div}`);
console.log(`Rem : ${rem}`);
console.log(`Power : ${power}`);

/* Comparison Operators */

let isEqual = 5 == "5";
let isStrictEqual = 5 === "5";
let isGreater = 5 > 6;
let isLess = 5 < 6;
let isGreaterOrEqual = 5 >= 6;
let isLessOrEqual = 5 <= 6;
let isNotEqual = 5 != 6;  
let isNotStrictEqual = 5 !== 6;

console.log(`Is Equal : ${isEqual}`);
console.log(`Is Strict Equal : ${isStrictEqual}`);
console.log(`Is Greater : ${isGreater}`);
console.log(`Is Less : ${isLess}`);
console.log(`Is Greater or Equal : ${isGreaterOrEqual}`); 
console.log(`Is Less or Equal : ${isLessOrEqual}`); 
console.log(`Is Not Equal : ${isNotEqual}`);
console.log(`Is Not Strict Equal : ${isNotStrictEqual}`);

/* Logical Operators */

let isTrue = true;
let isFalse = false;
let And = true && false;
let Or = true || false;
let Not = !true;

console.log(`And : ${And}`);
console.log(`Or : ${Or}`);
console.log(`Not : ${Not}`);

/* Assignment Operators */

let a = 5;
let b = 2;

a += b;
a -= b;
a *= b;
a /= b;
a %= b;

console.log(`A : ${a}`);
console.log(`B : ${b}`);

/* Increment and decrement operators */

a = 1;

console.log(`Pre increment : ${++a}`);
console.log(`Post increment : ${a++}`);

console.log(`Pre decrement : ${--a}`);
console.log(`Post decrement : ${a--}`);
console.log(a);
