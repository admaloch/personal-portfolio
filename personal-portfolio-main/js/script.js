// main loading animation
// const loader = document.querySelector('.loader');
// const main = document.querySelector('#main')

// function init() {
//     setTimeout(() => {
//         loader.style.opacity = 0;
//         loader.style.display = 'none';
//         main.style.display = 'block'
//         setTimeout(() => main.style.opacity = 100, 50)
//     }, 1500)
// }
// init();

function fadeIn(item) {
    item.style.opacity = 100;
}
function fadeOut(item) {
    item.style.opacity = 0;
}



// page scroll event listener.. nav/social icons/progress bar reveal
const progressbarinner = document.querySelector('.progress-bar-inner');
const progressContainer = document.querySelector('.progress-container')
const nav = document.querySelector('nav')
const navStyle = document.querySelector('#nav-ul')
const socialIcons = document.querySelector('.social-buttons')


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        // scroll progress bar
        let h = document.documentElement;
        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;
        let percent = st / (sh - h.clientHeight) * 100;
        let roundedPercent = Math.floor(percent);
        progressbarinner.innerText = roundedPercent + "%";
        progressbarinner.style.width = percent + "%";
        // vert offset progress bar and nav
        if (window.pageYOffset > 100) {
            fadeIn(progressContainer)
            nav.classList.add('bg-custom-dark', 'shadow')
            navStyle.classList.add('nav-style-scroll')
            if (window.pageYOffset > 300) {
                fadeIn(socialIcons)
            }
            if (window.innerWidth < 992) {
                nav.classList.remove('bg-custom-dark', 'shadow')
                navStyle.classList.remove('nav-style-scroll')
            }
        } else {
            fadeOut(progressContainer)
            nav.classList.remove('bg-custom-dark', 'shadow')
            navStyle.classList.remove('nav-style-scroll')
            fadeOut(socialIcons)
        }
    })
})

// about me

$('#about-section').fadeIn('slow');

const bioBtns = document.querySelectorAll('.bio-btn')
bioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const btnDataId = btn.getAttribute('data-id')
        bioBtns.forEach(items => items.classList.remove('active'))
        btn.classList.add('active')
        document.querySelectorAll('.bio-section').forEach(bio => {
            console.log(btnDataId)
            const bioDataId = bio.getAttribute('data-id')

            if (btnDataId === bioDataId) {
                $(`.bio-section[data-id=${bioDataId}]`).fadeIn('slow');
            } else {

                bio.style.display = 'none'

            }

        })
    })
})



// bootstrap make list disapear if clicked offscreen in addition to hamburger button toggle
window.onload = function () {
    document.addEventListener("click", function (event) {
        // if the clicked element isn't child of the navbar, you must close it if is open
        if (!event.target.closest(".nav-style") && document.getElementById("navbarNav").classList.contains("show")) {
            document.getElementById("burger-btn").click();
        }
    });
}

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


// project section -- reveal info on button click

const projectButton = document.querySelectorAll('.project-description-btn')
const projectInfo = document.querySelectorAll('.project-info')

projectButton.forEach(button => {
    button.addEventListener('click', () => {
        projectInfo.forEach(info => {
            info.classList.toggle('project-info-appear')
            info.scrollTop = 0;
        })
    })
})

// reset details after mouse leaves project box
const imageOverlay = document.querySelectorAll('.image-overlay')
imageOverlay.forEach(overlay => {
    overlay.addEventListener('mouseleave', () => {
        projectInfo.forEach(info => {
            info.classList.remove('project-info-appear')
            info.scrollTop = 0;
        })
    })
})
// reset details after mouse leaves project box
const closeProjectBio = document.querySelectorAll('.close-project-bio')
closeProjectBio.forEach(btn => {
    btn.addEventListener('click', () => {
        projectInfo.forEach(info => {
            info.classList.remove('project-info-appear')
            info.scrollTop = 0;
        })
    })
})

// contact section hover over bubble to make modal info appear
// change opacity of all contact bubbles to zero on hover

const overlay = document.querySelector('#modal-overlay')
const bubbleContainer = document.querySelectorAll('.bubble-container');
const contactBubbles = document.querySelectorAll('.row-bubbles');
const modalContainer = document.querySelector('#modal-container')
const modalTitle = document.querySelector('.modal-title')
const modalParagraph = document.querySelector('.modal-paragraph')

function classToggle(evt, find, toggle) {
    [].forEach.call(document.querySelectorAll('.' + find), function (a) {
        a.classList[evt.type === 'mouseover' ? 'add' : 'remove'](toggle);
    });
}

// for (let i = 0; i < bubbleContainer.length; i++) {
//     contactBubbles[i].addEventListener('mouseover', function (e) {
//         classToggle(e, 'bubble-container', 'remove-opacity');
//         classToggle(e, 'contact-info', 'text-dark');
//     });
//     contactBubbles[i].addEventListener('mouseout', function (e) {
//         classToggle(e, 'bubble-container', 'remove-opacity');
//         classToggle(e, 'contact-info', 'text-dark');
//     });
// }

//bring in  hover modal and overlay
contactBubbles.forEach((contacts) => {
    contacts.addEventListener('click', function (e) {
        overlay.classList.add('display');

        document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`
        document.body.style.overflowY = 'hidden'
        modalContainer.classList.add('display');
        modalTitle.innerText = contacts.title;
        modalParagraph.innerText = contacts.dataset.content;
    })
    // contacts.addEventListener('mouseleave', function (e) {
    //     overlay.classList.remove('display');
    //     modalContainer.classList.remove('display');
    // })
})

$('#modal-overlay').click(function (event) {
    console.log('modal overlay clicked')

    if (!$(event.target).closest('#modal-container').length && !$(event.target).is('#modal-container')) {

        document.body.style.paddingRight = '0px'
        document.body.style.overflowY = 'auto'


        overlay.classList.remove('display');
        modalContainer.classList.remove('display');



    }


});

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}



// email contact form reveal
const emailForm = document.querySelector('.modal-bg');
const contactButton = document.querySelector('.contact-btn');
const closeButton = document.querySelector('.close-btn');


contactButton.addEventListener('click', function () {
    // emailForm.classList.remove('d-none');
    nav.classList.add('d-none')
    emailForm.style.width = "100vw";
    emailForm.style.height = "100vh";
    emailForm.style.opacity = 1;
    document.body.style.overflow = 'hidden'
})
closeButton.addEventListener('click', function () {
    // emailForm.classList.add('d-none');
    nav.classList.remove('d-none')
    emailForm.style.width = 0;
    emailForm.style.height = 0;
    emailForm.style.opacity = 0;
    document.body.style.overflow = 'auto'
})

// email focus on inputs
const emailInput = document.querySelectorAll('.contact-input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus')
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus')
    } else {
        return;
    }
}

emailInput.forEach(input => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})

