export default function Card(cardElement) {
  const bookmarkIcon = cardElement.querySelector('[data-js="bookmark"]');
  const bookmarkButton = cardElement.querySelector(
    '[data-js="bookmark-button"]'
  );

  bookmarkButton.addEventListener('click', () => {
    bookmarkIcon.classList.toggle('card__bookmark-button--saved');
  });

  const answerButton = cardElement.querySelector('[data-js="answer-button"]');
  const answerText = cardElement.querySelector('[data-js="answer-text"]');

  answerButton.addEventListener('click', () => {
    if (answerButton.textContent.trim() === 'Show answer') {
      answerButton.textContent = 'Hide answer';
    } else {
      answerButton.textContent = 'Show answer';
    }
    answerText.classList.toggle('card__answer--hide');
  });

  const questionText = cardElement.querySelector('[data-js="question-text"]');

  const apiUrl = 'https://jservice.io/api/random';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => createQuizCard(data));

  function createQuizCard(card) {
    questionText.innerHTML = `<p>${card[0].question}</p>`;
    answerText.innerHTML = `<p>${card[0].answer}</p>`;
  }
}
