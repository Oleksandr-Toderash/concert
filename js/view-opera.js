const imgSceneOne = document.querySelector('#img-scene-1');
const imgSceneTwo = document.querySelector('#img-scene-2');
const imgSeats = document.querySelector('#img-seats');
const mainImg = document.querySelector('#main-img');
const viewButtons = document.querySelectorAll('#view-button');

viewButtons.forEach(btn => {
  let mainImgElem = mainImg.querySelector('img');
  let btnImgSrc = btn.querySelectorAll('img')[0].src;
  btn.addEventListener('click', () => {
    mainImgElem.src = btnImgSrc;
  });
});