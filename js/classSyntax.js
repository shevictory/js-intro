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

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError();
    }
    if (value < 0 || value > 150) {
      throw new RangeError();
    }
    this._age = value;
  }
  get age() {
    return this._age;
  }
  static isUser(obj) {
    return obj instanceof User;
  }
  static isAdult(obj) {
    if (User.isUser(obj)) {
      throw new TypeError();
    }
    return obj.isAdult();
  }
}
// debugger;
const b = new User('Leo', 5);
console.log('b.age :>> ', b.age);
console.log('User.isUser(b) :>> ', User.isUser(b));
