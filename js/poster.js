const btnMore = document.querySelector('#btnMore'),
  extraCards = document.querySelector('#extraCardss');

btnMore.addEventListener('click', () => {
  extraCards.classList.toggle('extra-cards');
  if (btnMore.textContent === 'less') {
    btnMore.textContent = 'more';
  } else if (btnMore.textContent === 'more') {
    btnMore.textContent = 'less';
  }
});