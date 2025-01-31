// funcs for bootstrap navbar
const fadeNavList = () => {
    document.addEventListener("click", function (event) {
        // if the clicked element isn't child of the navbar, you must close it if is open
        if (!event.target.closest(".nav-style") && document.getElementById("navbarNav").classList.contains("show")) {
            document.getElementById("burger-btn").click();
        }
    });
}

// on smaller screen hide navbar, if it is active, on scroll
const burgerIcon = document.querySelector('#burger-btn')
const hideSmallScreenMenuOnScroll = () => {
    if (!burgerIcon.classList.contains('collapsed')) {
        burgerIcon.click()
    }
}



burgerIcon.addEventListener('click', (e) => {
    console.log('clicked')
    if (e.target.classList.contains('collapsed')) {
        document.querySelector('body').classList.add('modal-overlay')
    } else {
        document.querySelector('body').classList.remove('modal-overlay')
    }
})