class Brief {
  constructor(dateDay, dateMonth, title) {
    this.dateDay = dateDay;
    this.dateMonth = dateMonth;
    this.title = title;
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

    const cardsCantainer = document.querySelector('#brief-container');
    cardsCantainer.append(announcesBox);

    return announcesBox
  }
}


const briefElement = document.querySelector('.anonsesBox');
const briefs = [
  new Brief(30, 'June', '«Opera VS Operetta»'),
  new Brief(3, 'June', '«Antonio Vivaldi. Season»'),
  new Brief(11, 'December', '«Events/Cancellations»'),
  new Brief(10, 'December', '«Performance/Opera»'),
  new Brief(20, 'November', '«Tradition vs. innovation»')
];

const openModalBtns = briefs.map(brief => brief.createBrief());

// anounces model

if (briefElement) {
  openModalBtns.push(briefElement);
}

const closeBtn = document.querySelector('#closeBtn');
const overlay = document.querySelector('#overlay');

openModalBtns.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('#modal');
    openModal(modal)
  });
})

closeBtn.addEventListener('click', () => {
  closeModal(modal);
})

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

