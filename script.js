const form = document.querySelector('form');
const usernameValue = document.querySelector('#username').value;
const lastNameValue = document.querySelector('#lastName').value;
const emailValue = document.querySelector('#email').value;
const passwordValue = document.querySelector('#password').value;

form.addEventListener('submit', e => {
  e.preventDefault();
  validUserName();
  lastNameValid();
  emailValid();
  passwordValid();
  const validation = validUserName() && lastNameValid() && emailValid() && passwordValid();

  if (validation) {
    console.log('submited');
  }
});

function validUserName() {
  const message = form.childNodes[1].childNodes[7];
  const regex = /^[a-zA-Z]{3,10}$/;
  const test = regex.test(username.value);
  if (!test) {
    message.style.display = 'block';
    message.innerHTML = 'Minimum 3 to 10 characters without numbers';
    form.childNodes[1].setAttribute('class', 'sign-up error');
  } else {
    message.style.display = 'none';
    form.childNodes[1].setAttribute('class', 'sign-up success');
  }
  return Boolean(test);
}
function lastNameValid() {
  const message = form.childNodes[3].childNodes[7];
  const regex = /^[a-zA-Z]{3,10}$/;
  const test = regex.test(lastName.value);
  if (!test) {
    message.style.display = 'block';
    message.innerHTML = 'Minimum 3 to 10 characters without numbers';
    form.childNodes[3].setAttribute('class', 'sign-up error');
  } else {
    message.style.display = 'none';
    form.childNodes[3].setAttribute('class', 'sign-up success');
  }
  return Boolean(test);
}

function emailValid() {
  const message = form.childNodes[5].childNodes[7];
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const test = regex.test(email.value);
  if (!test) {
    message.style.display = 'block';
    message.innerHTML = 'Invalid Email';
    form.childNodes[5].setAttribute('class', 'sign-up error');
  } else {
    message.style.display = 'none';
    form.childNodes[5].setAttribute('class', 'sign-up success');
  }
  return Boolean(test);
}
function passwordValid() {
  const message = form.childNodes[7].childNodes[7];
  const passwordRegex = /[a-zA-Z0-9]{7,20}/;
  const passwordTest = passwordRegex.test(password.value);

  if (!passwordTest) {
    message.style.display = 'block';
    message.innerHTML = 'The password must contain 7 or more characters';
    form.childNodes[7].setAttribute('class', 'sign-up error');
  } else {
    message.style.display = 'none';

    form.childNodes[7].setAttribute('class', 'sign-up success');
  }
  return Boolean(passwordTest);
}
