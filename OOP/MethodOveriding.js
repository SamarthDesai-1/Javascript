class Employee {

  constructor(name) {
    console.log(`${name} Employee constructor is here.`);
  }
  login() {
    console.log(`Employee has logged in.`);
  }
  logout() {
    console.log(`Employee has logged out.`);
  }
  requestLeaves(leaves) {
    console.log(`Employee has requested for ${leaves} leaves - Auto approved.`);
  }
}


class Programmer extends Employee {

  constructor(name) {
    super(name);
    console.log(`${name} Programmer constructor is here.`);
    console.log("This is Programmer class constructor.");
  }
  requestCoffee(number) {
    console.log(`Employee has requested for ${number} coffee.`);
  }
  requestLeaves(leaves) {
    super.requestLeaves(leaves);

    console.log("One extra is granted");
  }

}


let e = new Programmer("Samarth");

e.login();
e.requestLeaves(3);