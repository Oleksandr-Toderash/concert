export function changePhotos() {
  const mainImg = document.querySelector('#main-img');
  const viewButtons = document.querySelectorAll('#view-button');
  let mainImgElem = mainImg.querySelector('img');

  viewButtons.forEach(btn => {
    mainImgElem.src = localStorage.getItem('showMainImg');

    let btnImgSrc = btn.querySelectorAll('img')[0].src;
    btn.addEventListener('click', () => {
      localStorage.setItem("showMainImg", btnImgSrc);
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
