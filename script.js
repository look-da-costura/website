const cards = document.querySelectorAll('.card');

cards.forEach(element => {
  element.style.backgroundColor = element.dataset.cardBackgroundColor;

  element.style.boxShadow = `-10px 10px ${element.dataset.cardShadowColor}`;
});