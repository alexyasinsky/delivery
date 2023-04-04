'use strict'
let guaranteeLeft = document.querySelector('.guarantee__left');
let guaranteeRight = document.querySelector('.guarantee__right');
window.addEventListener('load', function () {
    guaranteeLeft.addEventListener('click', function () {
        guaranteeCards.setNextLeftCard();
    });
    guaranteeRight.addEventListener('click', function () {
        guaranteeCards.setNextRightCard();
    });

    guaranteeCards.run();
});

let guaranteeCards = {

    currentId: 0,

    cards: [],
    
    run() {
        this.cards = document.querySelectorAll('.guarantee');
        this.showCardWithcurrentId();
    },

    
    showCardWithcurrentId() {
        this.removeAllClasses (this.cards[this.currentId]);
        this.cards[this.currentId].classList.add('guarantee__current');
        if (this.currentId == 0) {
            this.removeAllClasses(this.cards[this.cards.length - 1]);
            this.cards[this.cards.length - 1].classList.add('guarantee__previous');
        } else {
            this.removeAllClasses(this.cards[this.currentId - 1]);
            this.cards[this.currentId - 1].classList.add('guarantee__previous');
        };
        if (this.currentId == (this.cards.length - 1)) {
            this.removeAllClasses(this.cards[0]);
            this.cards[0].classList.add('guarantee__next');
        } else {
            this.removeAllClasses(this.cards[this.currentId + 1]);
            this.cards[this.currentId + 1].classList.add('guarantee__next');
        };
    },

    removeAllClasses (guarantee) {
        guarantee.classList.remove('guarantee__previous', 'guarantee__current', 'guarantee__next');
    },
   

    setNextLeftCard() {
        this.cards[this.currentId].classList.remove('guarantee__current');
        this.cards[this.currentId].classList.add('guarantee__next');
        if (this.currentId == 0) {
            this.currentId = this.cards.length - 1;
        } else {
            this.currentId--;
        }
        this.showCardWithcurrentId();
    },

    setNextRightCard() {
        this.cards[this.currentId].classList.remove('guarantee__current');
        this.cards[this.currentId].classList.add('guarantee__previous');
        if (this.currentId == this.cards.length - 1) {
            this.currentId = 0;
        } else {
            this.currentId++;
        }
        this.showCardWithcurrentId();
    },
}
