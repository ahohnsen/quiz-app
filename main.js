console.clear();

const bookmarkElement = document.querySelector('[data-js="bookmark"]');
const buttonElement = document.querySelector('[data-js="button"]');

buttonElement.addEventListener("click", () => {
  bookmarkElement.classList.toggle("card__bookmark-button--saved");
});
