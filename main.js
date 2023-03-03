const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('bottom-nav-links-small')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})