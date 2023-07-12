const submitBtn = document.querySelector('[data-button="submit"]');
const closeBtn = document.querySelector('[data-button="close"]');
const sectionFormElement = document.querySelector('[data-section="form"]');
const sectionSuccessElement = document.querySelector(
  '[data-section="success"]'
);

const errorMessage = document.querySelector('[data-error]');
const emailInput = document.querySelector('input');

submitBtn.addEventListener('click', () => {
  // sectionFormElement.classList.remove('grid');
  // sectionFormElement.classList.add('hidden');
  // sectionSuccessElement.classList.remove('hidden');
  // sectionSuccessElement.classList.add('grid');

  validateEmail(emailInput.value);
});

closeBtn.addEventListener('click', () => {
  sectionSuccessElement.classList.add('hidden');
  sectionSuccessElement.classList.remove('grid');
  sectionFormElement.classList.add('grid');
  sectionFormElement.classList.remove('hidden');
});

function swapElements() {
  sectionFormElement.classList.remove('grid');
  sectionFormElement.classList.add('hidden');
  sectionSuccessElement.classList.remove('hidden');
  sectionSuccessElement.classList.add('grid');
}

function validateEmail() {
  let email = emailInput.value;
  console.log(email);
  if (!email.includes('@') || !email.includes('.') || email === '') {
    errorMessage.classList.remove('hidden');
    emailInput.classList.add('error-input');
  } else {
    swapElements()
  }
}
