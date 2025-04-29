const bioBtns = document.querySelectorAll('.bio-btn')

const handleBioBtns = (btn) => {
    bioBtns.forEach(items => items.classList.remove('active'))
    const btnDataId = btn.getAttribute('data-id')
    btn.classList.add('active')
    document.querySelectorAll('.bio-section').forEach(bio => {
        const bioDataId = bio.getAttribute('data-id')
        if (btnDataId === bioDataId) {
            $(`.bio-section[data-id=${bioDataId}]`).css("display", "flex").hide().fadeIn();
        } else {
            bio.style.display = 'none'
        }
    })
}