// main loading animation
const loader = document.querySelector('.loader');
const main = document.querySelector('#main')

function fadeLoadingAnimation() {
    setTimeout(() => {
        $('.loader').fadeOut(200)
        document.body.style.overflow = 'visible'
        document.querySelector('#burger-btn').style.opacity = '1'
    }, 1500)
}