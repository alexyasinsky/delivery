"use strict";
let button = document.querySelectorAll('.modal__button');
let back = document.querySelector('.back');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.modal__close');
button.forEach( function (modalButton) {
modalButton.addEventListener('click', function (event) {
    back.style.display = "block";
    modal.style.display = "flex";
})});
back.addEventListener('click', function (event) {
    modal.style.display = "none";
    back.style.display = "none";
})
closeModal.addEventListener('click', function (event) {
    modal.style.display = "none";
    back.style.display = "none";
})