// main loading animation
const loader = document.querySelector('.loader');
const main = document.querySelector('#main')

function fadeLoadingAnimation() {
    setTimeout(() => {
        $('.loader').fadeOut()
        document.body.style.overflow = 'visible'
    }, 1500)
}