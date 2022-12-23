'use strict';

import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

const formData = {};

const fillFormFields = form => {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (!formData) {
    return;
  }

  const entries = Object.entries(formData);

  entries.forEach(([key, value]) => {
    form.elements[key].value = value;
  });
};

const handleInputForm = ({ target }) => {
  const { name, value } = target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const handleSubmitForm = event => {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
};

feedbackFormEl.addEventListener('input', throttle(handleInputForm, 500));
feedbackFormEl.addEventListener('submit', handleSubmitForm);
fillFormFields(feedbackFormEl);
