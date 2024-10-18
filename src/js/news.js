export const newsCards = [
  {
    imgUrl: './images/img-people.jfif',
    title: 'Postponements/Cancellations of Events',
    description: '03/09/2023 at 19.00 o\'clock. - concert "Opera vs. Victoria" - POSTPONED to 06/05/2023 at 19.00 o\'clock.'
  },

  {
    imgUrl: './images/img-dragon.jfif',
    title: 'Events/Cancellations',
    description: '04/11/2023 at 16.00 o\'clock. - concert "Opera vs. Operetta" - POSTPONED to 06/05/2023 at 19.00 o\'clock.'
  },

  {
    imgUrl: './images/img-library.jfif',
    title: 'Verdi/library',
    description: 'Lolo Verdi manuscript discovered in an old library vault, set to debut in a special opera house performance next season.'
  },

  {
    imgUrl: './images/female-pink.avif',
    title: 'Evening/La Scala',
    description: 'Acclaimed soprano collapses during performance, shocking audience at La Scala, but recovers quickly for triumphant encore.'
  },

  {
    imgUrl: './images/female.jpg',
    title: 'Performance/Opera',
    description: 'Renowned tenor retires, delivering emotional farewell at final performance, leaving opera world in awe.'
  },

  {
    imgUrl: './images/male-tabel.jpg',
    title: 'Tradition vs. innovation',
    description: 'Opera house announces groundbreaking libretto for new production, sparking debate over tradition vs. innovation.'
  }
]

// First card
let imgElem = document.querySelector('#imgElem'),
  titleElem = document.querySelector('#titleElem'),
  descriptionElem = document.querySelector('#descriptionElem');

let idx = 0;
export function updateCard() {
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

// Second Card
let imgElem2 = document.querySelector('#imgElem2'),
  titleElem2 = document.querySelector('#titleElem2'),
  descriptionElem2 = document.querySelector('#descriptionElem2');

let idx2 = newsCards.length - 1;
export function updateCard2() {
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
