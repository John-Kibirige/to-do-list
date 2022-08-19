const validateForm = (input) => {
  const error = document.createElement('p');
  error.classList.add('error-msg');
  error.innerText = 'Please fill out this field';
  input.parentElement.appendChild(error);
  setTimeout(() => {
    input.parentElement.removeChild(error);
  }, 1500);
};

export default validateForm;
