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
  }
}

const brief1 = new Brief(30, 'June', '«Opera VS Operetta»');
const brief2 = new Brief(3, 'June', '«Antonio Vivaldi. Season»');
const brief3 = new Brief(11, 'December', '«Events/Cancellations»');
const brief4 = new Brief(10, 'December', '«Performance/Opera»');
const brief5 = new Brief(20, 'November', '«Tradition vs. innovation»');

brief1.createBrief();
brief2.createBrief();
brief3.createBrief();
brief4.createBrief();
brief5.createBrief();
