class RailwayForm {
        
  constructor(name, trainNo, address) {
    console.log("Constructor called for : " + name + " " + trainNo);
    this.name = name;
    this.trainNo = trainNo;
    this.address = address;
  }

  preview() {
    alert(this.name + " form is submitted for train number : " + this.trainNo + " , and your address is : " + this.address);
  }
  submit() {
    alert(this.name + " form is submitted for train number : " + this.trainNo);
  }
  cancel() {
    alert(this.name + " canceled this form for train number : " + this.trainNo);
    this.trainNo = 0;
  }
}

let Samarth = new RailwayForm("Samarth", 521420, "Surat, Gujarat");
Samarth.preview();
Samarth.submit();
Samarth.cancel();
Samarth.preview();
