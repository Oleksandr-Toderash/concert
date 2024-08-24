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

