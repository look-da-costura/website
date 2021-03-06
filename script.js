const cards = document.querySelectorAll('.card');
const sectionTitleEffects = document.querySelectorAll('.title-effect');
const sectionTitleTexts = document.querySelectorAll('.section__title');
const menuContent = document.querySelector('.hamburger-menu__content');
const menuIcon = document.querySelector('.hamburger-menu__icon');
const menuCloseIcon = document.querySelector('.hamburguer-menu__close-icon');
const navHamburguerMenu = document.querySelector('.nav-hamburguer-menu ul');
const hamgurguerMenuContainer = document.querySelector('.hamburger-menu');
const header = document.querySelector('#header');
const desktopMenu = document.querySelector('.desktop-menu');

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

function showMenu() {
  menuContent.classList.remove('hide-menu');
  menuContent.classList.remove('hide-menu-animation');
  document.body.style.overflow = 'hidden';
};

function hideMenu() {
  menuContent.classList.add('hide-menu-animation');
  document.body.style.overflow = 'initial';
};

menuIcon.addEventListener('click', showMenu);
menuCloseIcon.addEventListener('click', hideMenu);

// console.log(typeof navHamburguerMenu.children);
// navHamburguerMenu.children.forIn(menuItem => {
//   menuItem.onclick = hideMenu();
//   console.log(menuItem);
// });

for (let key in navHamburguerMenu.children) {
  console.log(navHamburguerMenu.children[key]);
  navHamburguerMenu.children[key].onclick = hideMenu;
};

window.addEventListener('resize', (event) => {
  if(event.target.innerWidth >= 1024) {
    hamgurguerMenuContainer.remove();
  } else {
    header.append(hamgurguerMenuContainer);
  }
  menuContent.classList.add('hide-menu');
});

window.addEventListener('resize', (event) => {
  if(event.target.innerWidth <= 768) {
    desktopMenu.remove();
  } else {
    header.append(desktopMenu);
  }
});

