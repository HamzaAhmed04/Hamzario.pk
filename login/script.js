
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formSubmitBtn = document.querySelector('form button[type="submit"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (validateForm()) {
    // Send the form data to your server using an AJAX request
    // and handle the response accordingly
    // ...

    // Redirect to Instagram profile after successful login
    window.location.href = 'https://www.instagram.com/itshamzaahmed/';

    form.reset();
  }
});

const validateForm = () => {
  let isValid = true;
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  if (email === '') {
    showError('email', 'Please enter your email address.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('email', 'Please enter a valid email address.');
    isValid = false;
  } else {
    hideError('email');
  }
  if (password === '') {
    showError('password', 'Please enter your password.');
    isValid = false;
  } else {
    hideError('password');
  }
  return isValid;
};

const showError = (inputName, errorMessage) => {
  const inputGroup = document.querySelector(`#${inputName}-group`);
  const error = inputGroup.querySelector('.error-message');
  error.textContent = errorMessage;
  inputGroup.classList.add('has-error');
};

const hideError = (inputName) => {
  const inputGroup = document.querySelector(`#${inputName}-group`);
  inputGroup.classList.remove('has-error');
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
