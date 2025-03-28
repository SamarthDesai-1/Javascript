/** Javascript strings: Comprehensive guide */

/** 1. String creation */

let str = "Samarth R desai is the next John D Rockefeller.";
console.log(str);
str = new String("Samarth R Desai");
console.log(str);



/** 2. Important string properties */
console.log(str.length);



/** 3. Key string methods */

/** a. accessing characters */

console.log(str[0] + str[8] + str[10]);
console.log(str.charAt(10));

/** b. String manipulation */

console.log(str.toUpperCase());
console.log(str.toLowerCase());

/** c. Searching and Checking */

console.log(str.includes('S'));
console.log(str.substring(0, 7));
console.log(str.substr(0, 7));

/** e. Replacing Content */

console.log(str.replace("Samarth", "The billionaire"));

/** f. Trimming Whitespace */

let paddingString = "       Hello           ";

console.log(paddingString.trim());
console.log(paddingString.trimStart());
console.log(paddingString.trimEnd());

/** g. Splitting Strings */

let csv = "apple,banana,cherry";
console.log(csv.split(","));

/** h. Concatenation */

let fname = "Samarth R";
let sname = "Desai";
console.log(fname + " " + sname);
console.log(`${fname} ${sname}`);

/** h. Comparison */

console.log("a" < "b");
console.log("a".localeCompare("b"));




/** Advanced Example: Chaining Methods */

let string = "Samarth R Desai  ";
console.log(string.trim().toUpperCase().replace("Samarth", "Samarth a Billionaire"));