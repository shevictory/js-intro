'use strict';
// 1 ex data-*
const [signBtn, loginBtn] = document.querySelectorAll('button');

signBtn.addEventListener('click', btnClickHandler);
loginBtn.addEventListener('click', btnClickHandler);

function btnClickHandler({
  target: {
    dataset: { host, keyName, anothername },
  },
}) {
  console.log('host :>> ', host);
  console.log('keyName :>> ', keyName);
  console.log('anothername :>> ', anothername);
}

// 2 data-* task
for (const btn of document.querySelectorAll('.colorEx')) {
  btn.addEventListener(
    'click',
    ({
      target: {
        dataset: { color },
      },
    }) => {
      document.querySelector('#colorContainer').style.background = color;
    }
  );
}
// const colorDiv = document.querySelector('#colorContainer');

// for (const btn of document.querySelectorAll('.colorEx')) {
//   btn.addEventListener('click', changeColorHandler);
// }

// function changeColorHandler({
//   target: {
//     dataset: { color },
//     parentElement,
//   },
// }) {
//   parentElement.style.background = color;
// }
