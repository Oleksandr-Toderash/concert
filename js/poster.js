const btnMore = document.querySelector('#btnMore'),
  extraCards = document.querySelector('#extraCardss');

btnMore.addEventListener('click', () => {
  extraCards.classList.toggle('extra-cards');
});