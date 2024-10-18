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
export class ViewButtons {
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
};
