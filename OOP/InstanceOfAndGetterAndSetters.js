class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log(`Animal is flying.`);
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

let a = new Animal("jack");
a.fly();
console.log(a.name);
a.name = "Bruno"  
console.log(a.name);

console.log(a instanceof Animal);