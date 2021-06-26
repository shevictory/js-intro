'use strict';

const SRC = 'https://wallpaperaccess.com/full/1369012.jpg';

const rootElement = document.getElementById('root');

// const img = new Image(400, 300);
// img.src = SRC;
// img.alt = '4k image';
// rootElement.append(img);

loadImage(SRC)
  .then(img => {
    rootElement.append(img);
  })
  .catch(e => {
    rootElement.append(e);
  });

function loadImage(src) {
  const img = new Image(400, 300);
  img.src = SRC;
  img.alt = '4k image';

  return new Promise((resolve, reject) => {
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('The image has not downloaded('));
    });
  });
}
