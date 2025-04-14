let password = "";
const length = 6;

const characters = [
  '`','#','7','r','D','u','g','^','('
];

let i = 0;
while(i++ < length + 1) {
  password += characters[Math.floor(Math.random() * 9)];
}

console.log(`Password : ${password}`);