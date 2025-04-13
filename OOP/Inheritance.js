class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    console.log(this.name + " is running.");
  }
  shout() {
    console.log(this.name + " is Shouting.");
  }
}

class Monkey extends Animal {

  eatBanana() {
    console.log(`${this.name} is eating banana.`);
  }
  hide() {
    console.log(`${this.name} is hiding.`);
  }
} 


let ani = new Animal("Chimpu", "Orange");
let m = new Monkey("Goetze", "Brown");

ani.shout();
m.eatBanana();