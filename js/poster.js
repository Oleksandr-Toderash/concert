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

  const popFunc = openInputPopup();

  document.querySelector('#popupCheckoutBtn').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.tickets-popup-card-title input')
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value === '') {
        allFilled = false;
        input.setAttribute('style', 'border: 1px solid red')
      }
    })

    if (allFilled) {
      setTimeout(() => {
        popFunc.startAnimation();
      }, 100);
      closeTicketsPopup()
      showScrollbar();
      inputs.forEach(input => {
        input.value = '';
      })
    }
  })

  function openInputPopup() {
    const CardContainer = document.querySelector('.window-order-ticket');
    CardContainer.style.display = 'block';

    let bottomPosition = -300;
    let opacity = 0;
    const targetBottom = -153;
    const targetOpacity = 1;

    const animationSpeed = 2;

    function startAnimation() {
      function step() {
        if (bottomPosition < targetBottom) bottomPosition += 2;
        if (opacity < targetOpacity) opacity += 0.2;

        CardContainer.style.bottom = bottomPosition + 'px';
        CardContainer.style.opacity = opacity;

        if (bottomPosition < targetBottom || opacity < targetOpacity) {
          requestAnimationFrame(step);
        }
      }
      requestAnimationFrame(step);
    }

    function resetAnimation() {
      let reverseBottomPosition = targetBottom;
      let reverceOpacity = targetOpacity;

      function step() {
        if (reverseBottomPosition > -400) reverseBottomPosition -= 8;
        if (reverceOpacity > 0) reverceOpacity -= 0.1;

        CardContainer.style.bottom = reverseBottomPosition + 'px';
        CardContainer.style.opacity = reverceOpacity;

        if (reverseBottomPosition > -300 || reverceOpacity > 0) {
          requestAnimationFrame(step);
        }
      }
      requestAnimationFrame(step)
    }

    // function openWindowCard() {
    //   setTimeout(startAnimation, 100);
    // }

    // openWindowCard();


    return {
      startAnimation,
      resetAnimation
    }
  }



  document.querySelector('#windowButton').addEventListener('click', () => {
    setTimeout(popFunc.resetAnimation, 100);
  })
})
