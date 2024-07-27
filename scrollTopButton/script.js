const backToTopButton = document.getElementById('back-to-top');

var previousScroll = 0;

function handleScroll ()  {

    var currentScroll = window.scrollY;

    if (window.scrollY > 10) {
        if(currentScroll < previousScroll) {
            backToTopButton.style.opacity = 0;
        }else{
            backToTopButton.style.opacity = 1;
        }
        previousScroll = currentScroll;
    } else {
        backToTopButton.style.opacity = 0;
    }

}


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


window.addEventListener('scroll', handleScroll);
backToTopButton.addEventListener('click', scrollToTop);
