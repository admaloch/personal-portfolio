const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// scroll library
AOS.init({})

// loading animation
fadeLoadingAnimation();

// tooltips/popovers etc..
showEvents.forEach((event) => {
    button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
    button.addEventListener(event, hide);
});

// smaller screen - click sceeen to make navbar list disapear
fadeNavList()

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

// update/show/hide progbar and social icon bubbles + navbar
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', () => {
        updateProgressBar()
        fadeItemsOnScroll()
        hideSmallScreenMenuOnScroll()
    })
})

// about section bio btns
document.querySelectorAll('.bio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        handleBioBtns(btn)
    })
})

// about me section bioBtn icons... show initial item
$('#about-section').show()

// project section -- more details btn handler -- when hovering over item
document.querySelectorAll('.project-description-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        moreInfoBtnHandler(btn)
    });
})

// contact section modal reveal + email modal blur/focus
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        showModal(btn)
    })
})

document.querySelector('.close-btn').addEventListener('click', closeModal)

document.querySelector('.modal-bg').addEventListener('click', function (event) {
    if (event.target === modalBG || event.target === emailContent) {
        closeModal();
    }
});

document.querySelectorAll('.contact-input').forEach(input => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})

document.querySelector('#career-btn-link').addEventListener('click', () => {
    const careerBtn = document.querySelector('div[data-id="career"]');
    careerBtn.click()
})

