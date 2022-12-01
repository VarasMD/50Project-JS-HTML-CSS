const panel = document.querySelectorAll('.card-wrapper__panel');

panel.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panel.forEach(panel => {
        panel.classList.remove('active');
    })
}