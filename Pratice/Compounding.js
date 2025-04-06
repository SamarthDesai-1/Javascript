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
// inputData()



const formatNumber = (strNumber) => {

  let x = strNumber;
  
  let findPoint = false;
  let afterDecimal = '';
  let beforeDecimal = '';

  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] == '.') {
      afterDecimal = x.substring(i);
      beforeDecimal = x.substring(0, i + 1);
      findPoint = true;
      break;
    }
  }

  let count = 0;
  let newFormatBeforeDecimal = '';
  let startingPoint = findPoint == true ? beforeDecimal.length - 2 : x.length - 1;

  for (let i = startingPoint; i >= 0; i--) {
    
    
    if (count == 3) {
      newFormatBeforeDecimal += ',';
      count = 0;
    }

    newFormatBeforeDecimal += x[i];
    count++;
  }

  
  if (findPoint == true) 
    newFormatBeforeDecimal = newFormatBeforeDecimal.split('').reverse().join('') + afterDecimal;
  else 
    newFormatBeforeDecimal = newFormatBeforeDecimal.split('').reverse().join('');
  

  return newFormatBeforeDecimal;
}



const process = () => {
  
  let principleAmount = Number.parseInt(document.getElementById("amt").value);
  let interestRate = Number.parseInt(document.getElementById("int").value);
  let timePeriod = Number.parseInt(document.getElementById("tm").value);

  document.getElementById("compoundedValue").innerHTML = '$' + formatNumber(String(calculateCompoundingValue(principleAmount, interestRate, timePeriod)));

  document.getElementById("compoundedValue").classList.add("format");
}
