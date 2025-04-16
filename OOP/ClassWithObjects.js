class Note {
  constructor(ArrayOfObject) {
    this.ArrayOfObject = ArrayOfObject;
    console.log(this.ArrayOfObject);
  }

  display() {
    let LocalArrayOfObject = this.ArrayOfObject;

    LocalArrayOfObject.forEach(element => {
      console.log(`${element.id} and ${element.task}`);
    });
    return;
  }
  edit() {
    let LocalArrayOfObject = this.ArrayOfObject;
    LocalArrayOfObject[0].id = "#%hewfiu__DFGIhuefi";

    return LocalArrayOfObject;
  }
}


let a = [
  {
    id: 0,
    task: "Bring breads"
  },
  {
    id: 1,
    task: "Go to School"
  },
  {
    id: 2,
    task: "Do homework"
  },
  {
    id: 3,
    task: "Do some code"
  },
];

let obj = new Note(a);
console.log(obj.display());


a = obj.edit();
console.log(a);