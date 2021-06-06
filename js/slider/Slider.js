'use strict';

class Slider {
  constructor(images, currentIndex = 0) {
    this._images = images;
    this._currentIndex = currentIndex;
  }
  get images() {
    return this._images;
  }
  set currentIndex(v) {
    console.log('v :>> ', v);
    if (typeof v !== 'number') {
      throw TypeError();
    }
    if (Number.isNaN(v) || !Number.isSafeInteger(v) || v < 0) {
      throw RangeError();
    }
    this._currentIndex = v;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  get currentSlide() {
    return this._images[this.currentIndex];
  }

  get prev() {
    return (this._images.length + this.currentIndex - 1) % this._images.length;
  }
  get next() {
    return (this.currentIndex + 1) % this._images.length;
  }
}
