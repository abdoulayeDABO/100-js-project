const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const hamburgerMenuLine = document.querySelector('.hamburger-menu-line');

hamburgerMenuButton.addEventListener('click', handleClick);

function handleClick() {
    hamburgerMenuButton.classList.toggle('active');
}
