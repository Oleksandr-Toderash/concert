function createBrief(dateDay, dateMonth, title) {
  const announcesBox = document.createElement('div')
  announcesBox.classList.add('anonsesBox');

  const announcesDate = document.createElement('div');
  announcesDate.classList.add('anonsesDate');

  const day = document.createElement('p');
  const month = document.createElement('p');
  day.textContent = dateDay;
  month.textContent = dateMonth;

  announcesDate.append(day);
  announcesDate.append(month);

  const titleBox = document.createElement('div');
  const titleText = document.createElement('p');
  titleText.textContent = title;

  titleBox.append(titleText);

  announcesBox.append(announcesDate);
  announcesBox.append(titleBox);

  const cardsContainer = document.querySelector('#brief-container');
  cardsContainer.append(announcesBox);
}

createBrief(3, 'June', '«CENTURY named after SINATRA»');
createBrief(3, 'June', '«CENTURY named after SINATRA»');
createBrief(3, 'June', '«CENTURY named after SINATRA»');
createBrief(3, 'June', '«CENTURY named after SINATRA»');
createBrief(3, 'June', '«CENTURY named after SINATRA»');

