"use strict";

const modal = document.querySelector('.modal');
modal.classList.add('modal--show');
setTimeout(function () {
    modal.classList.add('modal--hide');
    setTimeout(function () {
        modal.classList.remove('modal--show');
        modal.classList.remove('modal--hide');
    }, 600);
}, 1000);


