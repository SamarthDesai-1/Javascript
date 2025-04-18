/** A function along with it's lexical enviroment is called as Closures. */

message = "Good global";

function hello() {
  let message = "Good morning";
  console.log("Hello one" + " " + message);  
  let c = function helloTwo() {
    console.log("I'm C" + " " + message);
  } 
  return c;
}


c = hello();
c();