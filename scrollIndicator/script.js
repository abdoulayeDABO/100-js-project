const scrollIndicator = document.getElementsByClassName('scroll-indicator__bar');

window.addEventListener('scroll', () => {
    // Calculate the scroll distance from the top of the page
    const scroll = document.documentElement.scrollTop;

    // Calculate the height of the page including the invisible part
    const scrollHeight = document.documentElement.scrollHeight;

    // Calculate the height of the visible part of the page
    const visibleHeight = document.documentElement.clientHeight;

    //calculate the height of the page excluding the visible part
    const height = scrollHeight - visibleHeight;

    const scrolled = (scroll / height) * 100;
    
    scrollIndicator[0].style.width = scrolled + '%';
});