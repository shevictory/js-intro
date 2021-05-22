// in array.js

const duck = {
  name: 'Dacky',
  fly() {
    console.log(`Duck ${this.name} is flying`);
  },
};

// const duckChild = {
//   name: 'little Duck',
// };

// duckChild.fly = duck.fly;
// duckChild.fly();

const duckChild = Object.create(duck);
duckChild.name = 'sdfdsf';
duckChild.fly();

// пример с травоядными и пр

// задание

const car = {
  driver: null,
  go() {
    if (!this.driver) {
      return;
    }
    return `${this.driver.name} is going.`;
  },
};

const driver1 = {
  name: 'driver007',
};
//Задание: посадить водителя в машину
// const car1 = Object.create(car);
// car1.driver = driver1;
// console.log('car1.go() :>> ', car1.go());

car.driver = driver1;

// пример с летающим супергероем

/**
 * Наследование с функциями-конструкторами
 */
function Book(title) {
  this.title = title;
}

Book.prototype.printInfo = function () {
  console.log('title :>> ', this.title);
};

function ElectronicBook(weight) {
  this.weight = weight;
}
console.log('ElectronicBook.prototype :>> ', ElectronicBook.prototype);
ElectronicBook.prototype = Object.create(Book.prototype);

console.log('ElectronicBook.prototype :>> ', ElectronicBook.prototype);
ElectronicBook.prototype.printWeight = function () {
  console.log('weight :>> ', this.weight);
};
console.log('ElectronicBook.prototype :>> ', ElectronicBook.prototype);

const e = new ElectronicBook(55);
console.log('e :>> ', e);
e.printInfo();
e.printWeight();
