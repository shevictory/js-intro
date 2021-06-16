'use strict';
// 1
// bubbling - default (false)
window.addEventListener('click', clickHandler);
document.body.addEventListener('click', clickHandler);
document.body.firstElementChild.addEventListener('click', clickHandler);
document.body.firstElementChild.firstElementChild.addEventListener(
  'click',
  clickHandler
);
// capturing (true)
window.addEventListener('click', clickHandler, true);
document.body.addEventListener('click', clickHandler, true);
document.querySelector('div').addEventListener('click', clickHandler, true);
document.querySelector('button').addEventListener('click', clickHandler, true);

function clickHandler({ target, currentTarget }) {
  // console.log('target :>> ', target);
  console.dir(currentTarget);
}
// 2
document.querySelector('div#d2').addEventListener(
  'click',
  () => {
    console.log('from div :>> ');
  },
  { once: true }
);
document
  .querySelector('button#b2')
  .addEventListener('click', clickHandler, true);
