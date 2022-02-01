import Form from './components/Form.js';
import Card from './components/Card.js';
import Navigation from './components/Navigation.js';

const allLabelElements = document.querySelectorAll('[data-js="create-field"]');
const allCardElements = document.querySelectorAll('[data-js="card"]');

allLabelElements.forEach(labelElement => {
  Form(labelElement);
});
allCardElements.forEach(cardElement => {
  Card(cardElement);
});

Navigation();
