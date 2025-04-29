// project section -- reveal more info btn
const moreInfoBtnHandler = (btn) =>{
    const projectInfoOverlay = btn.closest('.image-overlay').querySelector('.project-info')
    const closeBioIcon = projectInfoOverlay.querySelector('.close-project-bio')
    const biotext = projectInfoOverlay.querySelector('.bio-text')
    projectInfoOverlay.classList.add('project-info-appear')
    closeBioIcon.addEventListener('click', () => {
        projectInfoOverlay.classList.remove('project-info-appear')
        scrollItemToTop(biotext)
    })
    projectInfoOverlay.addEventListener('mouseleave', () => {
        projectInfoOverlay.classList.remove('project-info-appear')
        scrollItemToTop(biotext)
    })
}

