
/* 'LET' variable is block scoped */
let a = 24;

/* 'VAR' variable is function scoped */
var b = 24;

/* 'CONST' variable is block scoped and cannot be reassigned */
const PI = 3.14159;



function demo() {

  let a = 9655510986;

  console.log(`Inner value of A : ${a}`);

  var b = 9655510986;

  console.log(`Inner value of B : ${b}`);
}

console.log(`Outer valu of A : ${a}`);
console.log(`Outer valu of B : ${b}`);
demo();

/**
 
  A memory aid you might find helpful: "NNBBSSU"

  Number: Integers and decimals
  Null: Intentionally empty

  Boolean: true/false logic
  BigInt: Large integers

  Symbol: Unique identifiers
  String: Text in quotes

  Undefined: Declared but empty

  Array: Ordered collection [...]
  Object: Named properties {...}

*/ 