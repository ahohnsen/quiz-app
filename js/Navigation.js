export default function setupNavigation() {
  document.querySelectorAll('.navigation__button').forEach(button => {
    button.addEventListener('click', () => {
      const navigation = button.parentElement;
      const pageContainer = navigation.parentElement;
      const pageNumber = button.dataset.nav;
      const pageActive = pageContainer.querySelector(
        `.pages[data-pages="${pageNumber}"]`
      );
      navigation.querySelectorAll('.navigation__button').forEach(button => {
        button.classList.remove('navigation__button--active');
      });

      pageContainer.querySelectorAll('.pages').forEach(page => {
        page.classList.remove('pages--active');
      });

      button.classList.add('navigation__button--active');
      pageActive.classList.add('pages--active');
    });
  });
}
