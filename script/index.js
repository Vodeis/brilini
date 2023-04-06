"use strict";

import { showModal, closeModal } from "./modal.js";

const BTN_FORWARD = document.getElementById('btn_forward');
const BTN_BACK = document.getElementById('btn_back');
const PAGINATION = document.getElementById('pagination');
const CAROUSEL = document.getElementById('carousel');

const NAME = document.getElementById('form-name');
const PHONE = document.getElementById('form-phone');
const MESSAGE = document.getElementById('form-message');
const SUBMIT = document.getElementById('form-submit');
const errorRequired = document.getElementById('form-error');

BTN_FORWARD.addEventListener('click', nextSlides);
BTN_BACK.addEventListener('click', prevSlide);

SUBMIT.addEventListener('click', postForm)

function nextSlides() {
    let pages = PAGINATION.textContent.split('/');
    const margin = CAROUSEL.style.marginLeft
        ? +CAROUSEL.style.marginLeft.slice(0, -2)
        : 0

    if (pages[0] < pages[1]) {
        CAROUSEL.style.marginLeft = (margin - 1207.5) + 'px';
        PAGINATION.textContent = (+pages[0] + 1) + '/' + pages[1];
        pages.splice(0, 1, (+pages[0] + 1));
    }
    disableBtn(pages);
}

function prevSlide() {
    let pages = PAGINATION.textContent.split('/');
    const margin = CAROUSEL.style.marginLeft
        ? +CAROUSEL.style.marginLeft.slice(0, -2)
        : 0

    if (pages[0] > 1) {
        CAROUSEL.style.marginLeft = (margin + 1207.5) + 'px';
        PAGINATION.textContent = (+pages[0] - 1) + '/' + pages[1];
        pages.splice(0, 1, (+pages[0] - 1));
    }
    disableBtn(pages);
}

function disableBtn(pages) {
    if (pages[0] == '1') {
        BTN_BACK.classList.add('disabled');
    } else {
        BTN_BACK.classList.remove('disabled');
    }
    if (pages[0] == pages[1]) {
        BTN_FORWARD.classList.add('disabled');
    } else {
        BTN_FORWARD.classList.remove('disabled');
    }
}

function postForm() {
    const data = {};

    switch (true) {
        case !NAME.value:
            errorRequired.style.display = 'block';
            break
        case !PHONE.value:
            errorRequired.style.display = 'block';
            break
        case !MESSAGE.value:
            errorRequired.style.display = 'block';
            break
        default:
            errorRequired.style.display = 'none';
            data.name = NAME.value;
            data.phone = PHONE.value;
            data.message = MESSAGE.value;

            NAME.value = '';
            PHONE.value = '';
            MESSAGE.value = '';
            console.log(data);
            showModal(data);
            closeModal();
        }
}






