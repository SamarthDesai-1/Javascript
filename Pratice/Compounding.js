console.log("Compounding calculator.");


const inputData = () => {

  let amount = 10000;
  const interestPerYear = 22;
  let years = 10;

  
  console.log(`Your invested money with ${interestPerYear}% interest per year will converted into an amount of : $${calculateCompoundingValue(amount, interestPerYear, years)} in dollars.`);
}

const calculateCompoundingValue = (amount, interestPerYear, years) => {

  let amountArray = [];

  amountArray.push(amount);

  while (years-- != 1) {

    let currentAmountInterest = amountArray[0] * interestPerYear / 100;

    amountArray.push(amountArray[0] + currentAmountInterest);
    amountArray.shift();
  }

  return amountArray[0];
}


/** This function invokes the compounding calculator. */
inputData();