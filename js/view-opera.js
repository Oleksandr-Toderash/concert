export function changePhotos() {
  const mainImg = document.querySelector('#main-img');
  const viewButtons = document.querySelectorAll('#view-button');

  viewButtons.forEach(btn => {
    let mainImgElem = mainImg.querySelector('img');
    let btnImgSrc = btn.querySelectorAll('img')[0].src;
    btn.addEventListener('click', () => {
      mainImgElem.src = btnImgSrc;
    });
  });
}

// clone button card
class ViewButtons {
  constructor(imgUrl, text) {
    this.imgUrl = imgUrl;
    this.text = text;
  }

  createViewBtn() {
    const buttonBox = document.createElement('div');
    buttonBox.classList.add('sectionOperaCard');
    buttonBox.id = 'view-button';

    let img = document.createElement('img');
    img.src = this.imgUrl;

    const paragraph = document.createElement('p');
    paragraph.textContent = this.text;

    buttonBox.append(img);
    buttonBox.append(paragraph);

    const viewBtnsContainer = document.querySelector('#viewBtnsContainer');
    viewBtnsContainer.append(buttonBox);
  }
}

const viewButton1 = new ViewButtons('./images/img-opera-scene-blue.jfif', '«Performance/Opera»');
const viewButton2 = new ViewButtons('./images/img-opera-seats-view.jpg', '«Opera Seating»');
const viewButton3 = new ViewButtons('./images/img-opera-event.jpg', '«Opera Events»');

viewButton1.createViewBtn();
viewButton2.createViewBtn();
viewButton3.createViewBtn();
