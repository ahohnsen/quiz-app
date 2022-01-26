console.clear();

const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('card__bookmark-button--saved');
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="answer-text"]');

answerButton.addEventListener('click', () => {
  if (answerButton.textContent === 'Show answer') {
    answerButton.textContent = 'Hide answer';
    answerText.classList.remove('card__answer--hide');
  } else {
    answerButton.textContent = 'Show answer';
    answerText.classList.add('card__answer--hide');
  }
});
