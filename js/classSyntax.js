class Animal {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log('this.name :>> ', this.name);
  }
}
const a = new Animal('Milka');
a.logName();
