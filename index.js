const passwords = {
  password: document.getElementById('password'),
  confirmPassword: document.getElementById('confirmPassword'),
};

const passwordError = document.getElementById('passwordError');

confirmPassword.addEventListener('input', e => {
  const areEqual = passwords.password.value === passwords.confirmPassword.value;
  const errorMessage = areEqual ? '' : '*Passwords do not match';

  Object.keys(passwords).map(key => {
    const elem = passwords[key];
    elem.setCustomValidity(errorMessage);

    if (areEqual) {
      elem.classList.remove('error');
      return;
    }
    elem.classList.add('error');
  });

  passwordError.innerText = errorMessage;
});
