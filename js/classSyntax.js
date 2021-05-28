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
/**************************************************** */
class User {
  constructor(name, age, email, isBanned = false) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isBanned = isBanned;
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
  isAdult() {
    return age >= 18;
  }
  set isBanned(value) {
    if (typeof value !== 'boolean') {
      throw TypeError('The value mulst be a boolean');
    }
    this._isBanned = value;
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
const user1 = new User('Leo', 5, 'user@gmail.com');
console.log('user1.age :>> ', user1.age);
console.log('User.isUser(user1) :>> ', User.isUser(user1));
/********************************************************* */
/**
 * extends
 */
class Moderator extends User {
  constructor(name, age, email, permission) {
    super(name, age, email);
    this.permission = permission;
  }
  sendMessage(user, message) {
    const userEmail = user.email;
    /**
     * send message
     */
  }
}

const moder1 = new Moderator('moder', 29, 'moder@gmail.com', {});
moder1.sendMessage(user1, { body: 'blablabla' });

class Admin extends Moderator {
  constructor(name, age, email, permission) {
    super(name, age, email, permission);
  }
  reBan(user) {
    user.isBanned = false;
  }
  ban(user) {
    user.isBanned = true;
  }
}

const admin1 = new Admin('admin', 33, 'admin@gmail.com', {});
admin1.ban(user1);
/**
 *  HW RangeValidator
 */
class RangeValidator {
  constructor(from, to) {
    if (typeof from !== 'number' || typeof to !== 'number') {
      throw TypeError();
    }
    // if (Number.isNaN(from) || Number.isNaN(from)) {
    //   throw RangeError();
    // }
    if (from > to) {
      throw RangeError();
    }
    this._from = from;
    this._to = to;
  }
  set from(v) {
    if (typeof v !== 'number') {
      throw TypeError();
    }
    // if (Number.isNaN(v)) {
    //   throw RangeError();
    // }
    if (v > this._to) {
      throw RangeError();
    }
    this._from = v;
  }
  get from() {
    return this._from;
  }
  set to(v) {
    if (typeof v !== 'number') {
      throw TypeError();
    }
    // if (Number.isNaN(v)) {
    //   throw RangeError();
    // }
    if (v < this._from) {
      throw RangeError();
    }
    this._to = v;
  }
  get to() {
    return this._to;
  }
  get range() {
    return [this._from, this._to];
  }
  validate(n) {
    if (typeof n !== 'number') {
      throw new TypeError();
    }
    if (n >= this._from && n <= this._to) {
      return n;
    }
    throw RangeError();
  }
  isValid(n) {
    if (typeof n !== 'number') {
      return false;
    }
    return n >= this._from && n <= this._to;
  }
}
/**
 * Полиморфизм
 * Figure example
 */
class Figure {
  constructor(name) {
    this._name = name;
  }
  getArea() {
    return null;
  }
}

class Square {
  constructor(a) {
    super('Square');
    this._a = a;
  }
  getArea() {
    return a * a;
  }
}

class Triangle {
  constructor(a, b, c) {
    super('Triangle');
    this._a = a;
    this._b = b;
    this._c = c;
  }
  getArea() {
    const p = (this._a + this._b + this._c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }
}
// задание: написать Circle

// Полиморфизм
function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError();
}
