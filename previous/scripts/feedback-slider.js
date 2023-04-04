'use strict'
let left = document.querySelector('.slide__left');
let right = document.querySelector('.slide__right');
window.addEventListener('load', function () {
    left.addEventListener('click', function () {
        images.setNextLeftImage();
    });
    right.addEventListener('click', function () {
        images.setNextRightImage();
    });

    images.init();
});

let images = {

    currentIdx: 0,

    slides: [],
    
    init() {
        this.slides = document.querySelectorAll('.slide');
        this.showImageWithCurrentIdx();
    },

    
    showImageWithCurrentIdx() {
        this.removeAllClasses (this.slides[this.currentIdx]);
        this.slides[this.currentIdx].classList.add('slide__current');
        if (this.currentIdx == 0) {
            this.removeAllClasses(this.slides[this.slides.length - 1]);
            this.slides[this.slides.length - 1].classList.add('slide__previous');
        } else {
            this.removeAllClasses(this.slides[this.currentIdx - 1]);
            this.slides[this.currentIdx - 1].classList.add('slide__previous');
        };
        if (this.currentIdx == (this.slides.length - 1)) {
            this.removeAllClasses(this.slides[0]);
            this.slides[0].classList.add('slide__next');
        } else {
            this.removeAllClasses(this.slides[this.currentIdx + 1]);
            this.slides[this.currentIdx + 1].classList.add('slide__next');
        };
        if (this.currentIdx == (this.slides.length - 2)) {
            this.removeAllClasses(this.slides[0]);
            this.slides[0].classList.add('slide__next_2');
        } else if (this.currentIdx == (this.slides.length - 1)) {
            this.removeAllClasses(this.slides[1]);
            this.slides[1].classList.add('slide__next_2'); 
        } else {
            this.removeAllClasses(this.slides[this.currentIdx + 2]);
            this.slides[this.currentIdx + 2].classList.add('slide__next_2');
        };
    },

    removeAllClasses (slide) {
        slide.classList.remove('slide__previous', 'slide__current', 'slide__next', 'slide__next_2');
    },
   

    setNextLeftImage() {
        this.slides[this.currentIdx].classList.remove('slide__current');
        this.slides[this.currentIdx].classList.add('slide__next');
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    setNextRightImage() {
        this.slides[this.currentIdx].classList.remove('slide__current');
        this.slides[this.currentIdx].classList.add('slide__previous');
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    },
}
