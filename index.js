import Form from './js/Form.js';
import Card from './js/Card.js';
import Navigation from './js/Navigation.js';

const allLabelElements = document.querySelectorAll('[data-js="create-field"]');
const allCardElements = document.querySelectorAll('[data-js="card"]');

allLabelElements.forEach(labelElement => {
  Form(labelElement);
});
allCardElements.forEach(cardElement => {
  Card(cardElement);
});

Navigation();
