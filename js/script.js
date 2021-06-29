"use strict";

const modal = document.querySelector('.modal');
const hideModal = function () {
    modal.classList.toggle('modal--hide');
}
const modalToggle = function () {
    modal.classList.toggle('modal--show');
}

const modalActivator = function () {
    modalToggle;
    setTimeout(hideModal, 2500);
    setTimeout(modalToggle, 500);
}

modalActivator();

