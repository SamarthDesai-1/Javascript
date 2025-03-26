const age = 10;

if (age >= 18) {
  console.log(`Congratulations with this age you are eligible to drive a car.`);
}
else {
  console.log(`You wouldn't be eligible to drive a car.`);
}



/** Switch case */

const day = 7;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Good morning, today is your day...!");
    break;
}