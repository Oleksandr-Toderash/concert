const newsCards = [
  {
    imgUrl: './images/img-people.jfif',
    title: 'Postponements/Cancellations of Events',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident omnis minima fugit velit totam ad'
  },

  {
    imgUrl: './images/img-dragon.jfif',
    title: 'Events/Cancellations of Events',
    description: '04/11/2023 at 19.00 o\'clock. - concert "Opera vs. Operetta" - POSTPONED to 06/05/2023 at 19.00 o\'clock.'
  },

  {
    imgUrl: './images/img-library.jfif',
    title: 'Cancellations/Postponements of Events',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum rerum facere doloribus culpa mollitia veniam'
  }
]

// First card
let imgElem = document.querySelector('#imgElem'),
  titleElem = document.querySelector('#titleElem'),
  descriptionElem = document.querySelector('#descriptionElem');

let idx = 0;
function updateCard() {
  let { imgUrl, title, description } = newsCards[idx];
  imgElem.src = imgUrl;
  titleElem.textContent = title;
  descriptionElem.textContent = description;
  idx++;
  if (idx === newsCards.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateCard();
  }, 3000)
}

updateCard();

let imgElem2 = document.querySelector('#imgElem2'),
  titleElem2 = document.querySelector('#titleElem2'),
  descriptionElem2 = document.querySelector('#descriptionElem2');

let idx2 = newsCards.length - 1;
function updateCard2() {
  let { imgUrl, title, description } = newsCards[idx2];
  imgElem2.src = imgUrl;
  titleElem2.textContent = title;
  descriptionElem2.textContent = description;
  idx2--;
  if (idx2 < 0) {
    idx2 = newsCards.length - 1;
  }

  setTimeout(() => {
    updateCard2();
  }, 3000)
}

updateCard2();
