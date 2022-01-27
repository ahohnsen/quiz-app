const textareaQuestion = document.querySelector(
  '[data-js="textarea-question"]'
);
const textareaAnswer = document.querySelector('[data-js="textarea-answer"]');
const outputQuestion = document.querySelector('[data-js="output-question"]');
const outputAnswer = document.querySelector('[data-js="output-answer"]');

textareaQuestion.addEventListener('input', () => {
  outputQuestion.value = `${
    400 - textareaQuestion.value.length
  } characters remaining`;
});

textareaAnswer.addEventListener('input', () => {
  outputAnswer.value = `${
    400 - textareaAnswer.value.length
  } characters remaining`;
});
