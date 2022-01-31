export default function Navigation() {
  const allButtons = document.querySelectorAll('[data-nav]');
  const allPages = document.querySelectorAll('[data-page]');
  const header = document.querySelector('[data-header]');

  allButtons.forEach(button => {
    button.addEventListener('click', event => {
      allButtons.forEach(button => {
        button.classList.remove('navigation__button--active');
      });
      button.classList.add('navigation__button--active');

      allPages.forEach(page => {
        page.classList.add('hidden');
      });
      const buttonAttribute = event.currentTarget.getAttribute('data-nav');
      const currentPage = document.querySelector(
        `[data-page="${buttonAttribute}"]`
      );
      currentPage.classList.remove('hidden');
      const capitalHeader =
        buttonAttribute.charAt(0).toUpperCase() + buttonAttribute.slice(1);
      header.textContent = `Quiz App | ${capitalHeader}`;
    });
  });
}
