'use strict'
let partnerLeft = document.querySelector('.partner__left');
let partnerRight = document.querySelector('.partner__right');
window.addEventListener('load', function () {
    partnerLeft.addEventListener('click', function () {
        partnerSlides.setNextLeftSlide();
    });
    partnerRight.addEventListener('click', function () {
        partnerSlides.setNextRightSlide();
    });

    partnerSlides.run();
});

let partnerSlides = {

    currentId: 0,

    slides: [],
    
    run() {
        this.slides = document.querySelectorAll('.partner__slide');
        this.showSlideWithCurrentId();
    },

    
    showSlideWithCurrentId() {
        this.removeAllClasses (this.slides[this.currentId]);
        this.slides[this.currentId].classList.add('partner__current');
        if (this.currentId == 0) {
            this.removeAllClasses(this.slides[this.slides.length - 1]);
            this.slides[this.slides.length - 1].classList.add('partner__previous');
        } else {
            this.removeAllClasses(this.slides[this.currentId - 1]);
            this.slides[this.currentId - 1].classList.add('partner__previous');
        };
        if (this.currentId == (this.slides.length - 1)) {
            this.removeAllClasses(this.slides[0]);
            this.slides[0].classList.add('partner__next');
        } else {
            this.removeAllClasses(this.slides[this.currentId + 1]);
            this.slides[this.currentId + 1].classList.add('partner__next');
        };
    },

    removeAllClasses (partner) {
        partner.classList.remove('partner__previous', 'partner__current', 'partner__next');
    },
   

    setNextLeftSlide() {
        this.slides[this.currentId].classList.remove('partner__current');
        this.slides[this.currentId].classList.add('partner__next');
        if (this.currentId == 0) {
            this.currentId = this.slides.length - 1;
        } else {
            this.currentId--;
        }
        this.showSlideWithCurrentId();
    },

    setNextRightSlide() {
        this.slides[this.currentId].classList.remove('partner__current');
        this.slides[this.currentId].classList.add('partner__previous');
        if (this.currentId == this.slides.length - 1) {
            this.currentId = 0;
        } else {
            this.currentId++;
        }
        this.showSlideWithCurrentId();
    },
}
