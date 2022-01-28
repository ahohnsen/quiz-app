export default function Form(labelElement) {
  const textarea = labelElement.querySelector('[data-js="textarea"]');
  const outputCharacters = labelElement.querySelector(
    '[data-js="output-characters"]'
  );

  textarea.addEventListener('input', () => {
    const counter = 400 - textarea.value.length;
    if (counter === 1) {
      outputCharacters.value = counter + ' character remaining';
    } else {
      outputCharacters.value = counter + ' characters remaining';
    }
  });
}
