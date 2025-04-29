// open and close modal in contact section for all btns
const modalBG = document.querySelector('.modal-bg');
const contactButtons = document.querySelectorAll('.contact-btn');
const closeButton = document.querySelector('.close-btn');
const modalTitle = document.querySelector('.modal-title')
const modalParagraph = document.querySelector('.modal-paragraph')
const emailContent = document.querySelector('.form')
const contactItem = document.querySelector('.contact-item')

const showModal = (contactButton) => {
    if (contactButton.id === 'email-btn') {
        contactItem.classList.add('d-none')
        emailContent.classList.remove('d-none')
    } else {
        emailContent.classList.add('d-none')
        contactItem.classList.remove('d-none')
        modalTitle.innerText = contactButton.title;
        modalParagraph.innerText = contactButton.dataset.content;
    }

    modalBG.style.width = "100vw";
    modalBG.style.height = "100vh";
    modalBG.style.opacity = 1;
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {

    modalBG.style.width = 0;
    modalBG.style.height = 0;
    modalBG.style.opacity = 0;
    document.body.style.overflow = 'auto'
}