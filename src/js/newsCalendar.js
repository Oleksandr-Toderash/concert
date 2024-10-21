const nextBtn = document.querySelector('#nextBtn'),
  backBtn = document.querySelector('#backBtn'),
  monthElem = document.querySelector('#month');
let currentIndex = 0;
currentIndex = localStorage.getItem('currentMonth');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function updateMonth() {
  localStorage.setItem('currentMonth', currentIndex);

  monthElem.textContent = months[currentIndex];
  if (currentIndex > months.length - 2) {
    currentIndex = months.length - 2;
  } else if (currentIndex < 1) {
    currentIndex = months.length - 11;
  }
}

backBtn.addEventListener('click', () => {
  currentIndex--;
  updateMonth();
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % months.length;
  updateMonth();
});