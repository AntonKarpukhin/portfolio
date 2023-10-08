export class Slider {
  constructor(img, link, git, sliderArray, fade) {
    this.img = document.querySelector(img);
    this.link = document.querySelector(link);
    this.git = document.querySelector(git);
    this.sliderArray = sliderArray;
    this.fade = fade;
    this.counter = 0;
    this.x1 = null;
    this.x2 = null;
    this.xDiff = null;
  }

  slider(num) {
    this.img.src = this.sliderArray[num].img;
    this.img.alt = this.sliderArray[num].name
    this.link.href = this.sliderArray[num].link;
    this.git.href = this.sliderArray[num].git;
  }

  changeSlide (count) {
    if (this.sliderArray.length === 0) return
    this.img.classList.add(this.fade)
    setTimeout(() => {
      this.img.classList.remove( this.fade)
    }, 500)
    this.counter += count
    if (this.counter === -1) {
      this.counter = this.sliderArray.length - 1
      this.slider(this.counter)
    } else if (this.counter === this.sliderArray.length) {
      this.counter = 0
      this.slider(this.counter)
    } else {
      this.slider(this.counter)
    }
  }

  changeBack() {
    this.changeSlide( - 1)
  }

  changeForward() {
    this.changeSlide( + 1)
  }

  handleTouchStart(evt) {
    const touchStart = evt.touches[0];
    this.x1 = touchStart.clientX;
  }

  handleTouchMove(evt) {
    if (!this.x1) return false
    const touchStart = evt.touches[0];
    this.x2 = touchStart.clientX;
    this.xDiff = this.x2 - this.x1;
  }

  handleTouchEnd() {
    if (this.xDiff < -150) {
      this.changeSlide( + 1)
    } else if (this.xDiff > 150) {
      this.changeSlide( - 1)
    }
  }
}


export class OldSlider extends Slider {}

export class NewSlider extends Slider {}