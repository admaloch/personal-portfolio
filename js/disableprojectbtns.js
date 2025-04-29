// add/remove disabled class for links/btns on project items on hover
//on mobile the hover was causing issues and css didn't fix it so it needed js
const projectItems = document.querySelectorAll('.project-item')
projectItems.forEach(item => {
    const moreInfoBtn = item.querySelector('.project-description-btn')
    const linksToCode = item.querySelector('.code-links')
    let isHovered = false
    item.addEventListener('mouseenter', () => {
        if (!isHovered) {
            isHovered = true
            setTimeout(() => {
                moreInfoBtn.classList.remove('disabled')
                linksToCode.classList.remove('disabled')
            }, 150);

            console.log(moreInfoBtn, linksToCode)
        }
    })
    item.addEventListener('mouseleave', () => {
        if (isHovered) {
            isHovered = false
            moreInfoBtn.classList.add('disabled')
            linksToCode.classList.add('disabled')
            console.log(moreInfoBtn, linksToCode)
        }
    })
})