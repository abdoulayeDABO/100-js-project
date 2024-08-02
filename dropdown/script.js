const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');
const chevron = document.querySelector('#chevron');
const dropdownContentLink = document.querySelectorAll('.dropdown-content a');

dropdownButton.addEventListener('click', () => {
  if(dropdownContent.classList.contains('show')) {
    dropdownContent.classList.add('hide');
    dropdownContent.classList.remove('show');
  }else{
    dropdownContent.classList.add('show');
    dropdownContent.classList.remove('hide');
  }
  chevron.classList.toggle('rotate');
});

dropdownContentLink.forEach(link => {
  link.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
    dropdownContent.classList.add('hide');
    chevron.classList.remove('rotate');
  });
});


