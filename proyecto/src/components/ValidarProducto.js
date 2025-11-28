export const isRequired = value => value.trim() !== '';
export const isNumberValid = value => !isNaN(value) && value > 0;
export const isImageUrlValid = url => /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(url);

export const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  formField.querySelector('small').textContent = message;
};

export const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  formField.querySelector('small').textContent = '';
};
