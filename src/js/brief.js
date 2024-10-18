export class Brief {
  constructor(dateDay, dateMonth, title, imgUrl, description) {
    this.dateDay = dateDay;
    this.dateMonth = dateMonth;
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
  }

  createBrief() {
    const announcesBox = document.createElement('div');
    announcesBox.classList.add('anonsesBox');

    const announcesDate = document.createElement('div');
    announcesDate.classList.add('anonsesDate');

    const day = document.createElement('p');
    const month = document.createElement('p');
    day.textContent = this.dateDay;
    month.textContent = this.dateMonth;

    announcesDate.append(day);
    announcesDate.append(month);

    const titleBox = document.createElement('div');
    const titleText = document.createElement('p');
    titleText.textContent = this.title;

    titleBox.append(titleText);

    announcesBox.append(announcesDate);
    announcesBox.append(titleBox);

    announcesBox.briefData = this;

    const cardsCantainer = document.querySelector('#brief-container');
    cardsCantainer.append(announcesBox);

    return announcesBox
  }
}

const briefs = [
  new Brief(30, 'June', '«Opera VS Operetta»', './images/female-pink.avif', 'A soprano\'s voice soars with passion and grace, captivating the audience with haunting arias that stir deep emotions.'),
  new Brief(13, 'June', '«Antonio Vivaldi. Season»', './images/male-tabel.jpg', 'Tribute to Frank Sinatra.'),
  new Brief(11, 'December', '«Events/Cancellations»', './images/img-opera-scene-red.jfif', 'A small town meets mysterious visitors from space.'),
  new Brief(10, 'December', '«Performance/Opera»', './images/img-opera-event.jpg', 'A shy artist paints the town, discovering his courage.'),
  new Brief(20, 'November', '«Tradition vs. innovation»', './images/img-opera-scene-blue.jfif', 'He races to stop the machines and save humanity.')
];

const openModalBtns = briefs.map(brief => brief.createBrief());

const briefElement = document.querySelector('.anonsesBox');

if (briefElement) {
  openModalBtns.push(briefElement);

  briefElement.briefData = new Brief(3, 'June', '«CENTURY named after SINATRA»', './images/female-pink.avif', 'Tribute to Frank Sinatra.')
}
// anounces model

const closeBtn = document.querySelector('#closeBtn');
const overlay = document.querySelector('#overlay');

openModalBtns.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('#modal');
    openModal(modal)

    const briefData = button.briefData;

    document.querySelector('#modal-title').textContent = briefData.title;
    document.querySelector('#modal-dateDay').textContent = `${briefData.dateDay}`;
    document.querySelector('#modal-dateMonth').textContent = `${briefData.dateMonth}`;
    document.querySelector('#modal-description').textContent = briefData.description;

    const modalImg = document.querySelector('#modal-img').src = briefData.imgUrl;
  });
})

closeBtn.addEventListener('click', () => {
  closeModal(modal);
});

overlay.addEventListener('click', () => {
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
console.log('Code is what i like');
