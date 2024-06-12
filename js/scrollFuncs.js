// page scroll event listener.. nav/social icons/progress bar reveal
const progressbarinner = document.querySelector('.progress-bar-inner');
const progressContainer = document.querySelector('.progress-container')
const nav = document.querySelector('nav')
const navStyle = document.querySelector('#nav-ul')
const socialIcons = document.querySelector('.social-buttons')

const updateProgressBar = () => {
    // scroll progress bar
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;
    let percent = st / (sh - h.clientHeight) * 100;
    let roundedPercent = Math.floor(percent);
    progressbarinner.innerText = roundedPercent + "%";
    progressbarinner.style.width = percent + "%";
}

const fadeItemsOnScroll = () => {
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
}