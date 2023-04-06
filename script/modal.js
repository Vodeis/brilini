"use strict";

export function showModal(data) {
    const modal = `
                    <div class="modal">
                        <span class="modal__close remove">X</span>
                        <h1 class="modal__title">Hi, ${data.name}!</h1>
                        <p class="modal__text">Thank you for your message. We will contact you shortly.</p>
                    </div>`;
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container', 'remove')
    modalContainer.innerHTML = modal;
    document.body.appendChild(modalContainer)
}

export function closeModal() {
    const modal = document.querySelector('.modal-container');
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            modal.remove();
        }
    })
}