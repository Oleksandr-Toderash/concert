document.addEventListener('DOMContentLoaded', function () {
  const btnMore = document.querySelector('#btnMore'),
    extraCards = document.querySelector('#extraCardss');

  btnMore.addEventListener('click', () => {
    extraCards.classList.toggle('extra-cards');
    if (btnMore.textContent === 'less') {
      btnMore.textContent = 'more';
    } else if (btnMore.textContent === 'more') {
      btnMore.textContent = 'less';
    }
  });

  const orderTicketsBtn = document.querySelectorAll('#orderTicketsBtn');

  const ticketsPopupContainer = document.querySelector('#tickets-popup');
  const ticketsPopupOverlay = document.querySelector('#ticketsPopupOverlay');
  const ticketsCrossIcon = document.querySelector('#tickets-cross-icon');
  const crossCloseBtnBox = document.querySelector('.cross-close-btn-box');
  const ticketsPopupDateDay = document.querySelector('.tickets-popup_dateDay');
  const ticketsPopupDateMonth = document.querySelector('.tickets-popup_dateMonth');
  const ticketsPopupName = document.querySelector('.tickets-popup_name');

  const openTicketsPopup = (event) => {
    setTimeout(() => {
      const card = event.target.closest(".Card");

      const dateDay = card.querySelector(".CardDate div:first-child").textContent;
      const dateMonth = card.querySelector(".CardDate div:last-child").textContent;
      const eventName = card.querySelector(".CardInfoText p:first-child").textContent;

      ticketsPopupDateDay.textContent = dateDay;
      ticketsPopupDateMonth.textContent = dateMonth;
      ticketsPopupName.textContent = eventName;

      ticketsPopupContainer.style.display = 'block';
      ticketsPopupOverlay.classList.add('active');
      crossCloseBtnBox.style.display = 'block'
    }, 500)
  };

  const closeTicketsPopup = () => {
    ticketsPopupContainer.style.display = 'none';
    ticketsPopupOverlay.classList.remove('active');
    crossCloseBtnBox.style.display = 'none'
  };

  function hideScrollbar() {
    document.body.style.overflowY = 'hidden';
  }

  function showScrollbar() {
    document.body.style.overflowY = 'scroll';
  }

  // You should add a localStorage here, because when you reload the page, it removes

  orderTicketsBtn.forEach(button => {
    button.addEventListener('click', () => {
      openTicketsPopup(event);
      hideScrollbar();
    });
  })

  ticketsCrossIcon.addEventListener('click', () => {
    closeTicketsPopup();
    showScrollbar();
  });

})