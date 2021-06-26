'use strict';

function load(str) {
  return new Promise((res, rej) => {
    Math.random() < 0.5 ? res('ok') : rej(new Error('We are so-so sorry('));
  });
}

load()
  .then(data => Promise.resolve(data + '2'))
  .then(data => console.log(data))
  .catch(e => console.error(e))
  .finally(data => console.log('finally,', data));
