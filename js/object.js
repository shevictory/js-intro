// const cat1 = {};
// const cat2 = Object();
// const cat3 = new Object()

// имя св-ва - строка и symbol

const cat1 = {
  name: 'Cat',
  sayMeow: function() {
    console.log('MEOW!!!');
  },
  sleep: function sleep(){
    console.log('I\`m sleepping :>> ');
  },
  run(){
    console.log('I\`m running');
  }
}
/********************************************* */
// Функция-конструктор
/**
 * 
 * @param {string} name 
 * @param {boolean} isMale 
 * @constructor
 */
function Cat(name, isMale) {
  console.log('this :>> ', this);
}

// const cat4 = Cat('Vasilii', true);
const cat4 = new Cat('Vasilii', true);