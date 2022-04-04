const cards = document.querySelectorAll('.card');
const sectionTitleEffects = document.querySelectorAll('.title-effect');
const sectionTitleTexts = document.querySelectorAll('.section__title');

cards.forEach(card => {
  card.style.backgroundColor = card.dataset.cardBackgroundColor;

  card.style.boxShadow = `-10px 10px ${card.dataset.cardShadowColor}`;
});

sectionTitleEffects.forEach(titleEffect => {
  titleEffect.style.backgroundColor = titleEffect.dataset.titleBackgroundColor;
});

sectionTitleTexts.forEach(titleText => {
  titleText.style.color = titleText.dataset.titleColor;
})