export default function createCard() {
  const apiUrl = 'https://jservice.io/api/random';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => createQuizCard(data));

  const cardsContainer = document.querySelector('[data-page="home"]');
  function createQuizCard(cards) {
    const quizCard = document.createElement('section');
    quizCard.className = 'card';

    quizCard.innerHTML = `<button data-js="bookmark-button" class="card__bookmark-button">
      <svg
        data-js="bookmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="var(--color-dark-green)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-bookmark"
        height="35px"
        width="35px"
        fill="var(--color-container)"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </button>
    <h2>Question:</h2>
    <p data-js="question-text">${card.question}
    </p>
    <button data-js="answer-button" class="card__answer-button">
      Show answer
    </button>
    <p data-js="answer-text" class="card__answer--hide">${card.answer}
    </p>
    <ul role="list" class="card__tag-box">
      <li class="card__tag">tag 1</li>
      <li class="card__tag">tag 2</li>
      <li class="card__tag">tag 3</li>
      <li class="card__tag">tag 4</li>
    </ul>`;
    cardsContainer.append(quizCard);
  }
}
