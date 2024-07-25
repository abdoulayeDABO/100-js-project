const generate_btn = document.getElementById('generate');
const copy_btn = document.getElementById('copy');
const password_display = document.getElementById('password');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const setting = [length, uppercase, lowercase, numbers, symbols];

const catrgories = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+{}:"<>?|',
};

generate_btn.addEventListener('click', generatePassword);
copy_btn.addEventListener('click', copyPassword);

async function copyPassword() {
  try {
    navigator.clipboard.writeText(password_display.value);
    alert('Password copied to clipboard');
  } catch (error) {
    alert('Failed to copy: ', error);
  }
}

function generatePassword() {
  let password_regex = '';
  let password = '';

  setting.forEach((setting) => {
    if (setting.checked) {
      password_regex += catrgories[setting.id];
    }
  });

  for (i = 0; i < length.value; i++) {
    password += password_regex.charAt(
      Math.floor(Math.random() * password_regex.length)
    );
  }
  password_display.value = password;
}
