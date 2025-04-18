const a = async (text, n = 2) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 1000 * n);
  })

}

// (
//   async () => {
//     let text = await a("Hello");
//     console.log(text);
//   }
// )()


(
  async () => {
    let text = await a("I'm resolving after 1 second", 1);
    console.log(text);
    
    text = await a("I'm resolving after 4 second", 4)
    console.log(text);
  }
)()



/** Spread operator */ 
const avg = (a, b, c) => {
  return (a + b + c) / 3;
}

let x = [1, 3, 5];
console.log(avg(...x));




const simpleInterestCalc = (p, r, t) => {
  return (p * r * t) / 100;
}

console.log(simpleInterestCalc(2000, 22, 10));