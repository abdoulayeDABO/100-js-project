const passwordInput = document.getElementById('password');
const showPasswordButton = document.getElementById('show-password');
const hidePasswordButton = document.getElementById('hide-password');

showPasswordButton.addEventListener('click', () => {
  passwordInput.type = 'text';
  showPasswordButton.style.display = 'none';
  hidePasswordButton.style.display = 'block';
});

hidePasswordButton.addEventListener('click', () => {
  passwordInput.type = 'password';
  showPasswordButton.style.display = 'block';
  hidePasswordButton.style.display = 'none';
});
