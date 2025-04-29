function fadeIn(item) {
    item.style.opacity = 100;
}
function fadeOut(item) {
    item.style.opacity = 0;
}

const scrollItemToTop = (item) => {
    item.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

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