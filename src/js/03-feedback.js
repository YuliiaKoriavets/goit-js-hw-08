'use strict';

import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

let formData = {};

onrefreshPage()

function onrefreshPage() {
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData = storageData
  email.value = storageData.email || "";
  message.value = storageData.message || "";
}

function handleInputForm ( event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function handleSubmitForm (event) {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackFormEl.reset();
  formData = {};
};

feedbackFormEl.addEventListener('input', throttle(handleInputForm, 500));
feedbackFormEl.addEventListener('submit', handleSubmitForm);
