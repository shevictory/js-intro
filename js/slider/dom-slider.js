'use srtict';

const slides = [
  'https://u-stena.ru/upload/iblock/9cb/9cb1acc5cefd10605ed33a4fa119894d.jpg',
  'https://trikky.ru/wp-content/blogs.dir/1/files/2019/02/17/kartinka.jpg',
  'https://lh3.googleusercontent.com/proxy/KQu8PvszA1aBLH8RwzHgBYfQkCyk7cL-l4huQOHEAnCLm7pEGOdKEVZsTyLhnkoGvVjgtSbQs3P1rOv8gWrv43KBk_vb8ipWGoG8LLIMjFHxm6yH',
];

const sliderImage = document.querySelector('img');
const [prevBtn, nextBtn] = document.querySelectorAll('button');

const slider = new Slider(slides);

updateView();

const changeSlideButtonHandler =
  (direction = 'next') =>
  e => {
    slider.currentIndex = slider[direction];
    sliderImage.setAttribute('src', slider.currentSlide);
    updateView();
  };

nextBtn.addEventListener('click', changeSlideButtonHandler('next'));

prevBtn.addEventListener('click', changeSlideButtonHandler('prev'));

function updateView() {
  const { currentSlide } = slider;
  sliderImage.setAttribute('src', currentSlide);
}

// function nextBtnHandler(e) {
//   slider.currentIndex = slider.prev;
//   sliderImage.setAttribute('src', slider.currentSlide);
//   updateView();
// }

// function prevBtnHandler(e) {
//   slider.currentIndex = slider.next;
//   sliderImage.setAttribute('src', slider.currentSlide);
//   updateView();
// }
