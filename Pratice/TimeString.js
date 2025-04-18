let date = new Date();

const options = {
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
};


let timeString = date.toLocaleTimeString('en-US', options);

console.log(timeString);
console.log(timeString.length);

if (timeString.length == 10) {
  console.log(`${timeString.substring(0, 1)} : ${timeString.substring(2, 4)} : ${timeString.substring(8, 12)}`);
}
else {
  console.log(`${timeString.substring(0, 2)} : ${timeString.substring(3, 5)} : ${timeString.substring(9, timeString.length)}`);
}
