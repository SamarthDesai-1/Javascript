class Password {
  constructor() {
    console.log("Welcome to Password generatoe app.");
    this.pass = "";
  }
  generatePassword(length) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let nums = "1234567890";
    let specChars = "!@#$%^&*(){}[];:'<>,.?/`~|";

    if (length < 3) {
      console.log("Your password should be at least 3 charatcters long.");
    }
    else {
      let i = 0;
      while (i < length) {
        this.pass += chars[Math.floor(Math.random() * chars.length)];
        this.pass += nums[Math.floor(Math.random() * nums.length)];
        this.pass += specChars[Math.floor(Math.random() * specChars.length)];
        i += 3;
      }
    }
    this.pass = this.pass.substring(0, length);
    return this.pass;
  }
}

let p = new Password();

console.log(p.generatePassword(17));