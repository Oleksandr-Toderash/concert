/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/brief.js":
/*!*************************!*\
  !*** ./src/js/brief.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Brief = /*#__PURE__*/function () {
  function Brief(dateDay, dateMonth, title, imgUrl, description) {
    _classCallCheck(this, Brief);
    this.dateDay = dateDay;
    this.dateMonth = dateMonth;
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
  }
  return _createClass(Brief, [{
    key: "createBrief",
    value: function createBrief() {
      var announcesBox = document.createElement('div');
      announcesBox.classList.add('anonsesBox');
      var announcesDate = document.createElement('div');
      announcesDate.classList.add('anonsesDate');
      var day = document.createElement('p');
      var month = document.createElement('p');
      day.textContent = this.dateDay;
      month.textContent = this.dateMonth;
      announcesDate.append(day);
      announcesDate.append(month);
      var titleBox = document.createElement('div');
      var titleText = document.createElement('p');
      titleText.textContent = this.title;
      titleBox.append(titleText);
      announcesBox.append(announcesDate);
      announcesBox.append(titleBox);
      announcesBox.briefData = this;
      var cardsCantainer = document.querySelector('#brief-container');
      cardsCantainer.append(announcesBox);
      return announcesBox;
    }
  }]);
}();
var briefs = [new Brief(30, 'June', '«Opera VS Operetta»', './images/female-pink.avif', 'A soprano\'s voice soars with passion and grace, captivating the audience with haunting arias that stir deep emotions.'), new Brief(13, 'June', '«Antonio Vivaldi. Season»', './images/male-tabel.jpg', 'Tribute to Frank Sinatra.'), new Brief(11, 'December', '«Events/Cancellations»', './images/img-opera-scene-red.jfif', 'A small town meets mysterious visitors from space.'), new Brief(10, 'December', '«Performance/Opera»', './images/img-opera-event.jpg', 'A shy artist paints the town, discovering his courage.'), new Brief(20, 'November', '«Tradition vs. innovation»', './images/img-opera-scene-blue.jfif', 'He races to stop the machines and save humanity.')];
var openModalBtns = briefs.map(function (brief) {
  return brief.createBrief();
});
var briefElement = document.querySelector('.anonsesBox');
if (briefElement) {
  openModalBtns.push(briefElement);
  briefElement.briefData = new Brief(3, 'June', '«CENTURY named after SINATRA»', './images/female-pink.avif', 'Tribute to Frank Sinatra.');
}

// anounces model

var closeBtn = document.querySelector('#closeBtn');
var overlay = document.querySelector('#overlay');
openModalBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    var modal = document.querySelector('#modal');
    openModal(modal);
    var briefData = button.briefData;
    document.querySelector('#modal-title').textContent = briefData.title;
    document.querySelector('#modal-dateDay').textContent = "".concat(briefData.dateDay);
    document.querySelector('#modal-dateMonth').textContent = "".concat(briefData.dateMonth);
    document.querySelector('#modal-description').textContent = briefData.description;
    var modalImg = document.querySelector('#modal-img').src = briefData.imgUrl;
  });
});
closeBtn.addEventListener('click', function () {
  closeModal(modal);
});
overlay.addEventListener('click', function () {
  closeModal(modal);
});
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
console.log('Code is what i like');

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

document.querySelector('#poster').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#poster-section').scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelector('#news').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#news-section').scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelector('#brief').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#brief-section').scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelector('#contacts').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#contacts-section').scrollIntoView({
    behavior: 'smooth'
  });
});
document.querySelector('#events').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#events-section').scrollIntoView({
    behavior: 'smooth'
  });
});

/***/ }),

/***/ "./src/js/news.js":
/*!************************!*\
  !*** ./src/js/news.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newsCards: () => (/* binding */ newsCards),
/* harmony export */   updateCard: () => (/* binding */ updateCard),
/* harmony export */   updateCard2: () => (/* binding */ updateCard2)
/* harmony export */ });
var newsCards = [{
  imgUrl: './images/img-people.jfif',
  title: 'Postponements/Cancellations of Events',
  description: '03/09/2023 at 19.00 o\'clock. - concert "Opera vs. Victoria" - POSTPONED to 06/05/2023 at 19.00 o\'clock.'
}, {
  imgUrl: './images/img-dragon.jfif',
  title: 'Events/Cancellations',
  description: '04/11/2023 at 16.00 o\'clock. - concert "Opera vs. Operetta" - POSTPONED to 06/05/2023 at 19.00 o\'clock.'
}, {
  imgUrl: './images/img-library.jfif',
  title: 'Verdi/library',
  description: 'Lolo Verdi manuscript discovered in an old library vault, set to debut in a special opera house performance next season.'
}, {
  imgUrl: './images/female-pink.avif',
  title: 'Evening/La Scala',
  description: 'Acclaimed soprano collapses during performance, shocking audience at La Scala, but recovers quickly for triumphant encore.'
}, {
  imgUrl: './images/female.jpg',
  title: 'Performance/Opera',
  description: 'Renowned tenor retires, delivering emotional farewell at final performance, leaving opera world in awe.'
}, {
  imgUrl: './images/male-tabel.jpg',
  title: 'Tradition vs. innovation',
  description: 'Opera house announces groundbreaking libretto for new production, sparking debate over tradition vs. innovation.'
}];

// First card
var imgElem = document.querySelector('#imgElem'),
  titleElem = document.querySelector('#titleElem'),
  descriptionElem = document.querySelector('#descriptionElem');
var idx = 0;
function updateCard() {
  var _newsCards$idx = newsCards[idx],
    imgUrl = _newsCards$idx.imgUrl,
    title = _newsCards$idx.title,
    description = _newsCards$idx.description;
  imgElem.src = imgUrl;
  titleElem.textContent = title;
  descriptionElem.textContent = description;
  idx++;
  if (idx === newsCards.length) {
    idx = 0;
  }
  setTimeout(function () {
    updateCard();
  }, 3000);
}

// Second Card
var imgElem2 = document.querySelector('#imgElem2'),
  titleElem2 = document.querySelector('#titleElem2'),
  descriptionElem2 = document.querySelector('#descriptionElem2');
var idx2 = newsCards.length - 1;
function updateCard2() {
  var _newsCards$idx2 = newsCards[idx2],
    imgUrl = _newsCards$idx2.imgUrl,
    title = _newsCards$idx2.title,
    description = _newsCards$idx2.description;
  imgElem2.src = imgUrl;
  titleElem2.textContent = title;
  descriptionElem2.textContent = description;
  idx2--;
  if (idx2 < 0) {
    idx2 = newsCards.length - 1;
  }
  setTimeout(function () {
    updateCard2();
  }, 3000);
}

/***/ }),

/***/ "./src/js/newsCalendar.js":
/*!********************************!*\
  !*** ./src/js/newsCalendar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateMonth: () => (/* binding */ updateMonth)
/* harmony export */ });
var nextBtn = document.querySelector('#nextBtn'),
  backBtn = document.querySelector('#backBtn'),
  monthElem = document.querySelector('#month');
var currentIndex = 0;
currentIndex = localStorage.getItem('currentMonth');
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function updateMonth() {
  localStorage.setItem('currentMonth', currentIndex);
  monthElem.textContent = months[currentIndex];
  if (currentIndex > months.length - 2) {
    currentIndex = months.length - 2;
  } else if (currentIndex < 1) {
    currentIndex = months.length - 11;
  }
}
backBtn.addEventListener('click', function () {
  currentIndex--;
  updateMonth();
});
nextBtn.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % months.length;
  updateMonth();
});

/***/ }),

/***/ "./src/js/poster.js":
/*!**************************!*\
  !*** ./src/js/poster.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BtntxtContent: () => (/* binding */ BtntxtContent)
/* harmony export */ });
function BtntxtContent() {
  var btnMore = document.querySelector('#btnMore'),
    extraCards = document.querySelector('#extraCardss');
  btnMore.addEventListener('click', function () {
    extraCards.classList.toggle('extra-cards');
    if (btnMore.textContent === 'less') {
      btnMore.textContent = 'more';
    } else if (btnMore.textContent === 'more') {
      btnMore.textContent = 'less';
    }
  });
}
var orderTicketsBtn = document.querySelectorAll('#orderTicketsBtn');
var ticketsPopupContainer = document.querySelector('#tickets-popup');
var ticketsPopupOverlay = document.querySelector('#ticketsPopupOverlay');
var ticketsCrossIcon = document.querySelector('#tickets-cross-icon');
var crossCloseBtnBox = document.querySelector('.cross-close-btn-box');
var ticketsPopupDateDay = document.querySelector('.tickets-popup_dateDay');
var ticketsPopupDateMonth = document.querySelector('.tickets-popup_dateMonth');
var ticketsPopupName = document.querySelector('.tickets-popup_name');
var openTicketsPopup = function openTicketsPopup(event) {
  setTimeout(function () {
    var card = event.target.closest(".Card");
    var dateDay = card.querySelector(".CardDate div:first-child").textContent;
    var dateMonth = card.querySelector(".CardDate div:last-child").textContent;
    var eventName = card.querySelector(".CardInfoText p:first-child").textContent;
    ticketsPopupDateDay.textContent = dateDay;
    ticketsPopupDateMonth.textContent = dateMonth;
    ticketsPopupName.textContent = eventName;
    ticketsPopupContainer.style.display = 'block';
    ticketsPopupOverlay.classList.add('active');
    crossCloseBtnBox.style.display = 'block';
  }, 500);
};
var closeTicketsPopup = function closeTicketsPopup() {
  ticketsPopupContainer.style.display = 'none';
  ticketsPopupOverlay.classList.remove('active');
  crossCloseBtnBox.style.display = 'none';
};
function hideScrollbar() {
  document.body.style.overflowY = 'hidden';
}
function showScrollbar() {
  document.body.style.overflowY = 'scroll';
}
orderTicketsBtn.forEach(function (button) {
  button.addEventListener('click', function () {
    openTicketsPopup(event);
    hideScrollbar();
  });
});
ticketsCrossIcon.addEventListener('click', function () {
  closeTicketsPopup();
  showScrollbar();
});
var popFunc = openInputPopup();
document.querySelector('#popupCheckoutBtn').addEventListener('click', function () {
  var inputs = document.querySelectorAll('.tickets-popup-card-title input');
  var allFilled = true;
  inputs.forEach(function (input) {
    if (input.value === '') {
      allFilled = false;
      input.setAttribute('style', 'border: 1px solid red');
    }
  });
  if (allFilled) {
    setTimeout(function () {
      popFunc.startAnimation();
    }, 100);
    closeTicketsPopup();
    showScrollbar();
    inputs.forEach(function (input) {
      input.value = '';
    });
  }
});
function openInputPopup() {
  var CardContainer = document.querySelector('.window-order-ticket');
  CardContainer.style.display = 'block';
  var bottomPosition = -300;
  var opacity = 0;
  var targetBottom = -153;
  var targetOpacity = 1;
  var animationSpeed = 2;
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
    var reverseBottomPosition = targetBottom;
    var reverceOpacity = targetOpacity;
    function step() {
      if (reverseBottomPosition > -400) reverseBottomPosition -= 8;
      if (reverceOpacity > 0) reverceOpacity -= 0.1;
      CardContainer.style.bottom = reverseBottomPosition + 'px';
      CardContainer.style.opacity = reverceOpacity;
      if (reverseBottomPosition > -300 || reverceOpacity > 0) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }
  return {
    startAnimation: startAnimation,
    resetAnimation: resetAnimation
  };
}
document.querySelector('#windowButton').addEventListener('click', function () {
  setTimeout(popFunc.resetAnimation, 100);
});

/***/ }),

/***/ "./src/js/view-opera.js":
/*!******************************!*\
  !*** ./src/js/view-opera.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewButtons: () => (/* binding */ ViewButtons),
/* harmony export */   changePhotos: () => (/* binding */ changePhotos)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function changePhotos() {
  var mainImg = document.querySelector('#main-img');
  var viewButtons = document.querySelectorAll('#view-button');
  var mainImgElem = mainImg.querySelector('img');
  viewButtons.forEach(function (btn) {
    mainImgElem.src = localStorage.getItem('showMainImg');
    var btnImgSrc = btn.querySelectorAll('img')[0].src;
    btn.addEventListener('click', function () {
      localStorage.setItem("showMainImg", btnImgSrc);
      mainImgElem.src = btnImgSrc;
    });
  });
}

// clone button card
var ViewButtons = /*#__PURE__*/function () {
  function ViewButtons(imgUrl, text) {
    _classCallCheck(this, ViewButtons);
    this.imgUrl = imgUrl;
    this.text = text;
  }
  return _createClass(ViewButtons, [{
    key: "createViewBtn",
    value: function createViewBtn() {
      var buttonBox = document.createElement('div');
      buttonBox.classList.add('sectionOperaCard');
      buttonBox.id = 'view-button';
      var img = document.createElement('img');
      img.src = this.imgUrl;
      var paragraph = document.createElement('p');
      paragraph.textContent = this.text;
      buttonBox.append(img);
      buttonBox.append(paragraph);
      var viewBtnsContainer = document.querySelector('#viewBtnsContainer');
      viewBtnsContainer.append(buttonBox);
    }
  }]);
}();
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/footer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/footer.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/assets/fonts/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;

  font-family: 'Montserrat';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

footer {
  background-color: black;
  height: 386px;
  padding: 60px 0px 36px 0px;
  color: white;
}

.footerContent {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.footerBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 780px;
  gap: 24px;
}

.footerBox div {
  display: flex;
  flex-direction: row;
}

.footerBox .footerTitelBox {
  font-size: 24px;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  letter-spacing: 0.7px;
}

.footerLogo {
    font-family: "EB Garamond", serif;
    font-size: 14px;
    font-weight: 500;

    min-width: 280px;
    margin: 0px 50px 0px 0px;
    line-height: 19px;
}

.footerBox div:first-child div {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.footerBox div {
  font-size: 16px;
  font-weight: 400px;
  font-family: "Fira Sans", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (max-width: 970px) {
  .footerContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
  }
  .footerBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
}

@media (max-width: 703px) {
  .footerBox {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .footerLogo {
    width: fit-content;
    margin: 0px;
  }

  footer {
    height: 550px;
  }
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/css/footer.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAA4D;EAC5D,gBAAgB;;EAEhB,yBAAyB;EACzB,4CAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,gBAAgB;;IAEhB,gBAAgB;IAChB,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC;EACpC,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,SAAS;EACX;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;EACb;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,aAAa;EACf;AACF","sourcesContent":["@font-face {\r\n  font-family: 'OpenSans';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 500;\r\n\r\n  font-family: 'Montserrat';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 400;\r\n}\r\n\r\nfooter {\r\n  background-color: black;\r\n  height: 386px;\r\n  padding: 60px 0px 36px 0px;\r\n  color: white;\r\n}\r\n\r\n.footerContent {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.footerBox {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 780px;\r\n  gap: 24px;\r\n}\r\n\r\n.footerBox div {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.footerBox .footerTitelBox {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  letter-spacing: 0.7px;\r\n}\r\n\r\n.footerLogo {\r\n    font-family: \"EB Garamond\", serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n\r\n    min-width: 280px;\r\n    margin: 0px 50px 0px 0px;\r\n    line-height: 19px;\r\n}\r\n\r\n.footerBox div:first-child div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 24px;\r\n}\r\n\r\n.footerBox div {\r\n  font-size: 16px;\r\n  font-weight: 400px;\r\n  font-family: \"Fira Sans\", sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 32px;\r\n}\r\n\r\n@media (max-width: 970px) {\r\n  .footerContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: 50px;\r\n  }\r\n  .footerBox {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 703px) {\r\n  .footerBox {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 100px;\r\n  }\r\n\r\n  .footerLogo {\r\n    width: fit-content;\r\n    margin: 0px;\r\n  }\r\n\r\n  footer {\r\n    height: 550px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/general.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/general.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/assets/fonts/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;

  font-family: 'Montserrat';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  background-color: #ededed;
}

.restrictions1 {
  max-width: 1300px;
  padding: 0px 30px;
  margin: auto;
}

.restrictions2 {
  max-width: 1330px;
  padding: 0px 30px;
  margin: auto;
}

`, "",{"version":3,"sources":["webpack://./src/assets/styles/css/general.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAA4D;EAC5D,gBAAgB;;EAEhB,yBAAyB;EACzB,4CAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd","sourcesContent":["@font-face {\r\n  font-family: 'OpenSans';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 500;\r\n\r\n  font-family: 'Montserrat';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 400;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  background-color: #ededed;\r\n}\r\n\r\n.restrictions1 {\r\n  max-width: 1300px;\r\n  padding: 0px 30px;\r\n  margin: auto;\r\n}\r\n\r\n.restrictions2 {\r\n  max-width: 1330px;\r\n  padding: 0px 30px;\r\n  margin: auto;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/assets/fonts/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;

  font-family: 'Montserrat';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

header {
  background: rgb(0, 0, 0);
  padding: 52px 0px;
  margin-bottom: 60px;
}

header p, header a {
  color: rgb(255, 255, 255);
}

.headerInnerWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

nav {
  display: flex;
  gap: 20px;
  min-width: max-content;

  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
}

nav a:hover {
  text-decoration: 2px underline;
}

.headerLogo {
  font-family: "EB Garamond", serif;
  font-size: 14px;
  font-weight: 500;

  max-width: max-content;
  margin: 0px 50px 0px 0px;
  line-height: 19px;
  cursor: default;
}

.headerMainSquare {
  width: 6px;
  height: 6px;
  border-radius: 1px;
  transform: rotate(45deg);
  background-color: aliceblue;
  margin-top: 7px;
}

.restrictions {
  max-width: 1300px;
  padding: 0px 30px;
  margin: auto;
}

@media (max-width: 1155px) {
  .headerInnerWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 1s;
  }

  nav {
    margin-left: 25px;
  }

  header {
    padding: 42px;
  }
}

@media (max-width: 580px) {
  header {
    padding: 42px 0px;
  }
  nav {
    gap: 12px;
    transition: 0.5s;
  }

  .headerInnerWrapper {
    display: flex;
    align-items: start;
    padding: 0;
  }

  .headerLogo {
    margin: auto;
    display: flex;
    justify-content: center;
    cursor: default;
  }

  header .restrictions {
    padding: 0px 20px;
  }

  nav {
    margin: auto;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .headerTools .headerMainSquare {
    width: 5px;
    height: 5px;
  }
  nav {
    gap: 7px;
  }
}

@media (max-width: 443px) {
  .headerTools {
    /* display: grid; */
    /* grid-template-columns: 58px 100px 60px; */
    font-size: 0.9rem;
  }
  .headerTools .headerMainSquare {
    width: 3px;
    height: 3px;
  }
  nav {
    gap: 5px;
  }
}


`, "",{"version":3,"sources":["webpack://./src/assets/styles/css/header.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAA4D;EAC5D,gBAAgB;;EAEhB,yBAAyB;EACzB,4CAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;;EAEtB,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,gBAAgB;;EAEhB,sBAAsB;EACtB,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,wBAAwB;EACxB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,uBAAuB;EACzB;AACF;;AAEA;EACE;IACE,UAAU;IACV,WAAW;EACb;EACA;IACE,QAAQ;EACV;AACF;;AAEA;EACE;IACE,mBAAmB;IACnB,4CAA4C;IAC5C,iBAAiB;EACnB;EACA;IACE,UAAU;IACV,WAAW;EACb;EACA;IACE,QAAQ;EACV;AACF","sourcesContent":["@font-face {\r\n  font-family: 'OpenSans';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 500;\r\n\r\n  font-family: 'Montserrat';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 400;\r\n}\r\n\r\nheader {\r\n  background: rgb(0, 0, 0);\r\n  padding: 52px 0px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\nheader p, header a {\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n.headerInnerWrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 20px;\r\n  min-width: max-content;\r\n\r\n  font-family: \"Fira Sans\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n}\r\n\r\nnav a:hover {\r\n  text-decoration: 2px underline;\r\n}\r\n\r\n.headerLogo {\r\n  font-family: \"EB Garamond\", serif;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n\r\n  max-width: max-content;\r\n  margin: 0px 50px 0px 0px;\r\n  line-height: 19px;\r\n  cursor: default;\r\n}\r\n\r\n.headerMainSquare {\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 1px;\r\n  transform: rotate(45deg);\r\n  background-color: aliceblue;\r\n  margin-top: 7px;\r\n}\r\n\r\n.restrictions {\r\n  max-width: 1300px;\r\n  padding: 0px 30px;\r\n  margin: auto;\r\n}\r\n\r\n@media (max-width: 1155px) {\r\n  .headerInnerWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    transition: 1s;\r\n  }\r\n\r\n  nav {\r\n    margin-left: 25px;\r\n  }\r\n\r\n  header {\r\n    padding: 42px;\r\n  }\r\n}\r\n\r\n@media (max-width: 580px) {\r\n  header {\r\n    padding: 42px 0px;\r\n  }\r\n  nav {\r\n    gap: 12px;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .headerInnerWrapper {\r\n    display: flex;\r\n    align-items: start;\r\n    padding: 0;\r\n  }\r\n\r\n  .headerLogo {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    cursor: default;\r\n  }\r\n\r\n  header .restrictions {\r\n    padding: 0px 20px;\r\n  }\r\n\r\n  nav {\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .headerTools .headerMainSquare {\r\n    width: 5px;\r\n    height: 5px;\r\n  }\r\n  nav {\r\n    gap: 7px;\r\n  }\r\n}\r\n\r\n@media (max-width: 443px) {\r\n  .headerTools {\r\n    /* display: grid; */\r\n    /* grid-template-columns: 58px 100px 60px; */\r\n    font-size: 0.9rem;\r\n  }\r\n  .headerTools .headerMainSquare {\r\n    width: 3px;\r\n    height: 3px;\r\n  }\r\n  nav {\r\n    gap: 5px;\r\n  }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/infoCards.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/infoCards.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/assets/fonts/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;

  font-family: 'Montserrat';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

.infoboxTitel{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 100px;
}

.infoboxTitel div{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
}

.infoboxTitel p:first-child {
  font-family: "EB Garamond", serif;
  font-size: 48px;
  font-weight: 700;
}

.infoboxTitel p:last-child {
  font-family: "EB Garamond", serif;
  font-size: 24px;
  font-weight: 700;
}

.Card {
  background-color: #e2e2e2;
}

.CardDate {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 700;
  color: rgb(76 76 76);
  width: 100%;
}

.CardDate div:first-child {
  font-size: 64px;
}

.CardDate div:last-child {
  font-size: 1.8rem;
  font-weight: 500;
}

.CardImg img {
  width: 320px;
  height: 240px;
  border-radius: 12px;
  object-fit: cover;
}

.CardInfoText p:first-child {
  font-family: "Garamond", serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44.8px;
}

.CardInfoText p:last-child {
  padding-bottom: 40px;
  padding-top: 16px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  color: #4c4c4c;
}

.Cardinfo {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.Cardinfo div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.Cardinfo div p {
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  color: #4c4c4c;
}

.poster button {
  cursor: pointer;
  border: none;
  background-color: #05B093;
  color: white;
  font-weight: 600;
  border-radius: 50px;
  font-size: 16px;
  width: 175px;
  height: 51px;
}

.Card {
  border-radius: 16px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.CardAllInfo {
  width: 420px;
  display: flex;
  flex-direction: column;
  
}

.contendCard {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.CardFirstBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
}

.contentCardBox {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 1250px) {
  .contendCard {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 50px;
  }
}

@media (max-width: 1090px) {
  .Card {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 50px;
  }

  .CardFirstBox {
    gap: 25px;
  }

  .contentCardBox {
    width: 700px;
    margin: auto;
  }

  
}

@media (max-width: 590px) {
  .infoboxTitel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contendCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .CardDate div:first-child {
    font-size: 2.2rem;
  }
  .CardDate {
    gap: 8px;
    flex-direction: row;
    align-items: center;
  }

  .CardInfoText p:first-child {
    font-size: 1.5rem;
    line-height: 44.8px;
  }

  .CardFirstBox {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    width: fit-content;
  }

  .CardImg {
    object-fit: cover;
    width: max-content;
  }
  .CardImg img {
    width: 270px;
    height: 190px;
  }

  .CardAllInfo {
    width: 270px;
  }

  .Card {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding: 22px;
    
  }
}

.poster .btn-more-container {
  transition: 0.5s ease;
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

.poster .btn-more {
  transition: 0.5s ease;
  background: rgb(185, 185, 185);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  width: 100px;
  height: 30px;
}

.extra-cards-box {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.extra-cards {
  display: none;
}

/* popup */

.tickets-popup {
  border-radius: 1rem;
  padding: 20px;
  width: 500px;
  z-index: 11;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  display: none;
}

.tickets-popup-overlay.active {
  display: block;
  background: #05cdab;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.cross-close-btn-box {
  display: none;
}

.cross-btn-icon {
  z-index: 12; position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px;
}

.tickets-popup_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 50px;
}

.tickets-popup_date {
  line-height: 2rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
}

.tickets-popup_date p:first-child {
  font-size: 2.5rem;
}

.tickets-popup_name {
  font-weight: 600;
  font-size: 1.5rem;
}

.tickets-popup-card-title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  color: hsl(222, 4%, 53%);
  font-size: 1rem;
  margin-bottom: 0.9rem;
}

.tickets-popup-card-title input {
  
  border-radius: 10px;
  width: 100%;
  border: none;
  outline: none;
  padding: 1.1rem;
  margin-top: 10px;
  background: rgb(219, 221, 225);
}
.tickets-popup-card-title input::placeholder {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(117, 114, 114);
  font-size: 1rem;
}

.tickets-popup_card-input-box {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 5px;
}

.tickets-popup_content button {
  font-size: 1.4rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 1px;
  font-weight: 500;
  border-radius: 1rem;
  width: 100%;
  height: 60px;
}

/* new window btn result */

.window-order-ticket {
  display: none;
  width: fit-content;
  height: 300px;
  position: fixed;
  bottom: -500px;
  left: 230px;
  transform: translate(-50%, -50%) scale(1);
  z-index: 2;
  opacity: 0;
  transition: all 0.1s;
}

.window-card-box {
  width: 425px;
}
.window-order_header {
  background: snow;
  width: 100%;
  height: 125px;
  margin-bottom: -1px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  padding-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: rgb(0, 174, 255);
  letter-spacing: 1.1111px;
}
.window-order_section {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 175px;

  background: linear-gradient(to left, hsl(193, 100%, 69%), hsl(200deg 97.56% 51.76%));
  color: white;
  font-family: 'OpenSans', sans-serif;
  font-size: 1.2rem;
}

.window-order_logobox-parent {
  position: fixed;
  top: 8.1rem;
  right: 30%;
  
  transform: translate(-50%, -50%) scale(1);

  display: flex;
  align-items: center;
  justify-content: center;
  
  color: white;
  font-size: 2rem;
  width: 90px;
  height: 90px;
  background: linear-gradient(to top left, hsl(193, 100%, 69%), hsl(200, 98%, 50%));
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.window-order-ticket .window-button {
  position: fixed;
  top: 8rem;
  right: -102px;
  transform: translate(-50%, -50%);
  transform: rotate(270deg);

  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1.111px;
  background: white;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 30px;
  color: rgb(0, 174, 255);
  box-shadow: rgba(0, 0, 0, 0.208) 0px 8px 4px 0px inset;
}

@media (max-width: 586px) {
  .window-order-ticket {
    left: 130px;
  }
  .window-card-box {
    width: 250px;
}
  .window-order_logobox-parent {
    right: 15%;
  }

  .window-order-section_text {
    font-size: 1rem;
  }
}

@media (max-width: 732px) {
  .tickets-popup {
    width: auto;
    top: 50%;
    left: 50%;
  }
}
@media (max-width: 590px) {
  .tickets-popup {
    width: 300px;
  }
  
  .tickets-popup_name {
    font-size: 1rem;
  }

  .tickets-popup_header {
    gap: 10px;
  }
}






`, "",{"version":3,"sources":["webpack://./src/assets/styles/css/infoCards.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'OpenSans';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 500;\r\n\r\n  font-family: 'Montserrat';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 400;\r\n}\r\n\r\n.infoboxTitel{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.infoboxTitel div{\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 32px;\r\n}\r\n\r\n.infoboxTitel p:first-child {\r\n  font-family: \"EB Garamond\", serif;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n}\r\n\r\n.infoboxTitel p:last-child {\r\n  font-family: \"EB Garamond\", serif;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n}\r\n\r\n.Card {\r\n  background-color: #e2e2e2;\r\n}\r\n\r\n.CardDate {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  color: rgb(76 76 76);\r\n  width: 100%;\r\n}\r\n\r\n.CardDate div:first-child {\r\n  font-size: 64px;\r\n}\r\n\r\n.CardDate div:last-child {\r\n  font-size: 1.8rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.CardImg img {\r\n  width: 320px;\r\n  height: 240px;\r\n  border-radius: 12px;\r\n  object-fit: cover;\r\n}\r\n\r\n.CardInfoText p:first-child {\r\n  font-family: \"Garamond\", serif;\r\n  font-weight: 700;\r\n  font-size: 32px;\r\n  line-height: 44.8px;\r\n}\r\n\r\n.CardInfoText p:last-child {\r\n  padding-bottom: 40px;\r\n  padding-top: 16px;\r\n  font-family: \"Fira Sans\", sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 22.4px;\r\n  color: #4c4c4c;\r\n}\r\n\r\n.Cardinfo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n}\r\n\r\n.Cardinfo div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.Cardinfo div p {\r\n  font-family: \"Fira Sans\", sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 22.4px;\r\n  color: #4c4c4c;\r\n}\r\n\r\n.poster button {\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: #05B093;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 50px;\r\n  font-size: 16px;\r\n  width: 175px;\r\n  height: 51px;\r\n}\r\n\r\n.Card {\r\n  border-radius: 16px;\r\n  padding: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.CardAllInfo {\r\n  width: 420px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n.contendCard {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.CardFirstBox {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 480px;\r\n}\r\n\r\n.contentCardBox {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 24px;\r\n}\r\n\r\n@media (max-width: 1250px) {\r\n  .contendCard {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    gap: 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1090px) {\r\n  .Card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: fit-content;\r\n    gap: 50px;\r\n  }\r\n\r\n  .CardFirstBox {\r\n    gap: 25px;\r\n  }\r\n\r\n  .contentCardBox {\r\n    width: 700px;\r\n    margin: auto;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media (max-width: 590px) {\r\n  .infoboxTitel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .contendCard {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .CardDate div:first-child {\r\n    font-size: 2.2rem;\r\n  }\r\n  .CardDate {\r\n    gap: 8px;\r\n    flex-direction: row;\r\n    align-items: center;\r\n  }\r\n\r\n  .CardInfoText p:first-child {\r\n    font-size: 1.5rem;\r\n    line-height: 44.8px;\r\n  }\r\n\r\n  .CardFirstBox {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: flex-start;\r\n    width: fit-content;\r\n  }\r\n\r\n  .CardImg {\r\n    object-fit: cover;\r\n    width: max-content;\r\n  }\r\n  .CardImg img {\r\n    width: 270px;\r\n    height: 190px;\r\n  }\r\n\r\n  .CardAllInfo {\r\n    width: 270px;\r\n  }\r\n\r\n  .Card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: start;\r\n    gap: 10px;\r\n    padding: 22px;\r\n    \r\n  }\r\n}\r\n\r\n.poster .btn-more-container {\r\n  transition: 0.5s ease;\r\n  margin-top: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.poster .btn-more {\r\n  transition: 0.5s ease;\r\n  background: rgb(185, 185, 185);\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 600;\r\n  width: 100px;\r\n  height: 30px;\r\n}\r\n\r\n.extra-cards-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 25px;\r\n}\r\n\r\n.extra-cards {\r\n  display: none;\r\n}\r\n\r\n/* popup */\r\n\r\n.tickets-popup {\r\n  border-radius: 1rem;\r\n  padding: 20px;\r\n  width: 500px;\r\n  z-index: 11;\r\n  background: white;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  display: none;\r\n}\r\n\r\n.tickets-popup-overlay.active {\r\n  display: block;\r\n  background: #05cdab;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n}\r\n\r\n.cross-close-btn-box {\r\n  display: none;\r\n}\r\n\r\n.cross-btn-icon {\r\n  z-index: 12; position: fixed;\r\n  top: 1rem;\r\n  right: 1rem;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  padding: 10px;\r\n}\r\n\r\n.tickets-popup_header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-size: 2rem;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.tickets-popup_date {\r\n  line-height: 2rem;\r\n  font-weight: 600;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tickets-popup_date p:first-child {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.tickets-popup_name {\r\n  font-weight: 600;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.tickets-popup-card-title {\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-weight: 600;\r\n  color: hsl(222, 4%, 53%);\r\n  font-size: 1rem;\r\n  margin-bottom: 0.9rem;\r\n}\r\n\r\n.tickets-popup-card-title input {\r\n  \r\n  border-radius: 10px;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  padding: 1.1rem;\r\n  margin-top: 10px;\r\n  background: rgb(219, 221, 225);\r\n}\r\n.tickets-popup-card-title input::placeholder {\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  color: rgb(117, 114, 114);\r\n  font-size: 1rem;\r\n}\r\n\r\n.tickets-popup_card-input-box {\r\n  display: grid;\r\n  grid-template-columns: 1fr 100px;\r\n  gap: 5px;\r\n}\r\n\r\n.tickets-popup_content button {\r\n  font-size: 1.4rem;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  letter-spacing: 1px;\r\n  font-weight: 500;\r\n  border-radius: 1rem;\r\n  width: 100%;\r\n  height: 60px;\r\n}\r\n\r\n/* new window btn result */\r\n\r\n.window-order-ticket {\r\n  display: none;\r\n  width: fit-content;\r\n  height: 300px;\r\n  position: fixed;\r\n  bottom: -500px;\r\n  left: 230px;\r\n  transform: translate(-50%, -50%) scale(1);\r\n  z-index: 2;\r\n  opacity: 0;\r\n  transition: all 0.1s;\r\n}\r\n\r\n.window-card-box {\r\n  width: 425px;\r\n}\r\n.window-order_header {\r\n  background: snow;\r\n  width: 100%;\r\n  height: 125px;\r\n  margin-bottom: -1px;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top-left-radius:10px;\r\n  border-top-right-radius:10px;\r\n  padding-bottom: 2rem;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 900;\r\n  font-size: 2rem;\r\n  color: rgb(0, 174, 255);\r\n  letter-spacing: 1.1111px;\r\n}\r\n.window-order_section {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n  width: 100%;\r\n  height: 175px;\r\n\r\n  background: linear-gradient(to left, hsl(193, 100%, 69%), hsl(200deg 97.56% 51.76%));\r\n  color: white;\r\n  font-family: 'OpenSans', sans-serif;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.window-order_logobox-parent {\r\n  position: fixed;\r\n  top: 8.1rem;\r\n  right: 30%;\r\n  \r\n  transform: translate(-50%, -50%) scale(1);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  \r\n  color: white;\r\n  font-size: 2rem;\r\n  width: 90px;\r\n  height: 90px;\r\n  background: linear-gradient(to top left, hsl(193, 100%, 69%), hsl(200, 98%, 50%));\r\n  border-radius: 100%;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n}\r\n\r\n.window-order-ticket .window-button {\r\n  position: fixed;\r\n  top: 8rem;\r\n  right: -102px;\r\n  transform: translate(-50%, -50%);\r\n  transform: rotate(270deg);\r\n\r\n  font-family: 'Montserrat', sans-serif;\r\n  letter-spacing: 1.111px;\r\n  background: white;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  height: 30px;\r\n  color: rgb(0, 174, 255);\r\n  box-shadow: rgba(0, 0, 0, 0.208) 0px 8px 4px 0px inset;\r\n}\r\n\r\n@media (max-width: 586px) {\r\n  .window-order-ticket {\r\n    left: 130px;\r\n  }\r\n  .window-card-box {\r\n    width: 250px;\r\n}\r\n  .window-order_logobox-parent {\r\n    right: 15%;\r\n  }\r\n\r\n  .window-order-section_text {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 732px) {\r\n  .tickets-popup {\r\n    width: auto;\r\n    top: 50%;\r\n    left: 50%;\r\n  }\r\n}\r\n@media (max-width: 590px) {\r\n  .tickets-popup {\r\n    width: 300px;\r\n  }\r\n  \r\n  .tickets-popup_name {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .tickets-popup_header {\r\n    gap: 10px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/newsCalendar.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/newsCalendar.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/assets/fonts/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;

  font-family: 'Montserrat';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

.newsCalendar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.newsContent .NewsTitelText {
  font-family: "EB Garamond", serif;
  font-size: 48px;
  font-weight: 700;
  padding: 136px 0px 60px 0px;
}

.minipageBox {
  width: 306px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.minipageBox img {
  width: 306px;
  height: 204px;
  object-fit: cover;
  border-radius: 12px;
}

.minipageBox .minipageText {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.minipageBox .minipageText p:first-child {
  font-family: "EB Garamond", serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
}

.minipageBox .minipageText p:last-child {
  font-family: "Fira Sans", sans-serif;
  color: #4e4e4e;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

.minipage {
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: 400px;
}


.calendar {
  width: 526px;
  height: 264px;
  padding-top: 136px;
}

.calendarPreview {
  position: relative;
  color: white;
  height: 300px;
}

.calendarPreview div {
  position: absolute;
  left: 24px;
  bottom: 24px;
}

.calendarPreview div {
  font-size: 32px;
  font-family: "EB Garamond", serif;
  font-weight: 600;
  text-shadow: 0px 0px 20px  black;
}

.calendarPreview {
  width: 526px;
  height: 300px;
}

.calendarPreview img{
  width: 526px;
  height: 300px;
  border-radius: 12px 12px 0px 0px;
}

.calendarBottom {
  background-color: #e2e2e2;
  padding: 24px;
  width: 526px;
  height: 264px;
  border-radius: 0px 0px 12px 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.calendarMonth {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.calendarMonth p {
  font-size: 32px;
  font-weight: 700;
  font-family: "EB Garamond", serif;
}

.calendarMonth div {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
.calendarMonth button {
  width: 48px;
  height: 48px;

  border: none;
  background: transparent;
  background-color: #05b093;
  color: white;

  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
}

.calendarDay {
 width: 40px;
 height: 40px;
 background-color: #a6a6a6;
 font-size: 16px;
 font-family: "Fira Sans", sans-serif;
 font-weight: 600;
 color: white;

 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
}

.calendarDaynew {
  width: 40px;
  height: 40px;
  background-color: #05b093;
  font-size: 16px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
  color: white;
 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.calendarDayCorner1 {
  border-top-left-radius: 4px;
}
.calendarDayCorner7 {
  border-top-right-radius: 4px;
}
.calendarDayCorner2 {
  border-bottom-left-radius: 4px;
}
.calendarDayCorner8 {
  border-bottom-right-radius: 4px;
}

.calendarDate {
  display: grid;
  grid-gap: 4px;
}

.calendarWeek {
  display: grid;
  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;
  grid-gap: 4px;
}

@media (max-width: 1252px) {
  .newsCalendar {
    display: flex;
    flex-direction: column;
  }

  .minipageBox img {
    width: 100%;
  }

  .minipageBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .calendar {
    display: block;
    margin-bottom: 450px;
  }
}

@media (max-width: 680px) {
  .minipage {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 720px;
  }
}
@media (max-width: 586px) {
  .calendar {display: none;}
  .minipage {
    height: 800%;
  }
  .minipageBox {
    margin-bottom: 50px;
  }
}

`, "",{"version":3,"sources":["webpack://./src/assets/styles/css/newsCalendar.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAA4D;EAC5D,gBAAgB;;EAEhB,yBAAyB;EACzB,4CAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf;;;AAGA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iCAAiC;EACjC,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gCAAgC;;EAEhC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;;EAEZ,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;EACzB,YAAY;;EAEZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,yBAAyB;CACzB,eAAe;CACf,oCAAoC;CACpC,gBAAgB;CAChB,YAAY;;CAEZ,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,oCAAoC;EACpC,gBAAgB;EAChB,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,8BAA8B;AAChC;AACA;EACE,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,yDAAyD;EACzD,aAAa;AACf;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;EAChC;;EAEA;IACE,cAAc;IACd,oBAAoB;EACtB;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;EACf;AACF;AACA;EACE,WAAW,aAAa,CAAC;EACzB;IACE,YAAY;EACd;EACA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["@font-face {\r\n  font-family: 'OpenSans';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 500;\r\n\r\n  font-family: 'Montserrat';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 400;\r\n}\r\n\r\n.newsCalendar {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.newsContent .NewsTitelText {\r\n  font-family: \"EB Garamond\", serif;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n  padding: 136px 0px 60px 0px;\r\n}\r\n\r\n.minipageBox {\r\n  width: 306px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 36px;\r\n}\r\n\r\n.minipageBox img {\r\n  width: 306px;\r\n  height: 204px;\r\n  object-fit: cover;\r\n  border-radius: 12px;\r\n}\r\n\r\n.minipageBox .minipageText {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 24px;\r\n}\r\n\r\n.minipageBox .minipageText p:first-child {\r\n  font-family: \"EB Garamond\", serif;\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  line-height: 33px;\r\n}\r\n\r\n.minipageBox .minipageText p:last-child {\r\n  font-family: \"Fira Sans\", sans-serif;\r\n  color: #4e4e4e;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  line-height: 22px;\r\n}\r\n\r\n.minipage {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 24px;\r\n  height: 400px;\r\n}\r\n\r\n\r\n.calendar {\r\n  width: 526px;\r\n  height: 264px;\r\n  padding-top: 136px;\r\n}\r\n\r\n.calendarPreview {\r\n  position: relative;\r\n  color: white;\r\n  height: 300px;\r\n}\r\n\r\n.calendarPreview div {\r\n  position: absolute;\r\n  left: 24px;\r\n  bottom: 24px;\r\n}\r\n\r\n.calendarPreview div {\r\n  font-size: 32px;\r\n  font-family: \"EB Garamond\", serif;\r\n  font-weight: 600;\r\n  text-shadow: 0px 0px 20px  black;\r\n}\r\n\r\n.calendarPreview {\r\n  width: 526px;\r\n  height: 300px;\r\n}\r\n\r\n.calendarPreview img{\r\n  width: 526px;\r\n  height: 300px;\r\n  border-radius: 12px 12px 0px 0px;\r\n}\r\n\r\n.calendarBottom {\r\n  background-color: #e2e2e2;\r\n  padding: 24px;\r\n  width: 526px;\r\n  height: 264px;\r\n  border-radius: 0px 0px 12px 12px;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.calendarMonth {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.calendarMonth p {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n}\r\n\r\n.calendarMonth div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 8px;\r\n}\r\n.calendarMonth button {\r\n  width: 48px;\r\n  height: 48px;\r\n\r\n  border: none;\r\n  background: transparent;\r\n  background-color: #05b093;\r\n  color: white;\r\n\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.calendarDay {\r\n width: 40px;\r\n height: 40px;\r\n background-color: #a6a6a6;\r\n font-size: 16px;\r\n font-family: \"Fira Sans\", sans-serif;\r\n font-weight: 600;\r\n color: white;\r\n\r\n display: flex;\r\n align-items: center;\r\n justify-content: center;\r\n cursor: pointer;\r\n}\r\n\r\n.calendarDaynew {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: #05b093;\r\n  font-size: 16px;\r\n  font-family: \"Fira Sans\", sans-serif;\r\n  font-weight: 600;\r\n  color: white;\r\n \r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.calendarDayCorner1 {\r\n  border-top-left-radius: 4px;\r\n}\r\n.calendarDayCorner7 {\r\n  border-top-right-radius: 4px;\r\n}\r\n.calendarDayCorner2 {\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.calendarDayCorner8 {\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.calendarDate {\r\n  display: grid;\r\n  grid-gap: 4px;\r\n}\r\n\r\n.calendarWeek {\r\n  display: grid;\r\n  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px;\r\n  grid-gap: 4px;\r\n}\r\n\r\n@media (max-width: 1252px) {\r\n  .newsCalendar {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .minipageBox img {\r\n    width: 100%;\r\n  }\r\n\r\n  .minipageBox {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .calendar {\r\n    display: block;\r\n    margin-bottom: 450px;\r\n  }\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .minipage {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 720px;\r\n  }\r\n}\r\n@media (max-width: 586px) {\r\n  .calendar {display: none;}\r\n  .minipage {\r\n    height: 800%;\r\n  }\r\n  .minipageBox {\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/shortsAnonses.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/shortsAnonses.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/assets/fonts/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;

  font-family: 'Montserrat';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

.shortsAnonses {
  padding-bottom: 150px;
}

.anonsesText {
  padding-top: 203px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.anonsesText div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
}
.anonsesText div p {
  font-size: 24px;
  font-weight: 700;
  font-family: "EB Garamond", serif;
}

.anonsesText .shortsText {
  font-size: 2rem;
  font-weight: 700;
  font-family: "EB Garamond", serif;
}

.anonsesBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 27px;
  padding: 5px;
  border-radius: 10px;
}
.anonsesBox:hover {
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  cursor: pointer;
}
.anonsesDate {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #05b093;
  width: 100px;
  height: 98px;
  border-radius: 12px;
}

.anonsesDate p:first-child {
  font-size: 32px;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  color: white;
}

.anonsesDate p:last-child {
  font-size: 18px;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  color: white;
}

.anonsesBox div:last-child p {
  font-size: 14px;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
}

.anonsesdodo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 880px) {
  .anonsesText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
@media (max-width: 1108px) {
  .anonsesdodo {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 801px) {
  .anonsesDate {
    width: 80px;
    height: 78px;
  }
  .anonsesDate p:last-child {
    font-size: 0.9rem;
  }
  .anonsesBox {
    gap: 10px;
  }
  .anonsesBox {
    width: 100%;
  }
}
@media (max-width: 728px) {
  .anonsesBox div:last-child p {
    font-size: 0.8rem;
  }
  .anonsesdodo {
    grid-template-columns: 1fr;
  }
}


/* anounces modal */

.anounce-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 10;
  background-color: rgb(255, 255, 255);
  width: 450px;
  border: none;
}

.anounce-modal.active {
  transform: translate(-50%, -50%) scale(1);
}

.overlay {
  position: fixed;
  transition: 200ms ease-in-out;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  pointer-events: none;
  
}
.overlay.active {
  opacity: 0.4;
  pointer-events: all;
}

.modal_box-title {
  background-color: #efefefbf;
  border-radius: 5px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  font-size: 1.3rem;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  color: rgb(1, 1, 1);
}

.modal_box-date {
  display: flex;
  align-items: center;
  gap: 10px;
}

.modal_box-date div:first-child {
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  color: rgb(1, 1, 1);
}
.modal_box-date div:last-child {
  font-size: 1.3rem;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  color: rgb(1, 1, 1);
}

.modal-img {
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  width: 450px;
  height: 200px;
  object-fit: cover;
}

.cross-icon {
  padding: 3px;
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 10px;
  color: white;
}

.modal_description {
  background-color: #efefefbf;
  border-radius: 5px;
  margin: 10px;
  font-family: "EB Garamond", serif;
  font-size: 1.2rem;
  margin-bottom: 50px;
}

.anonsesDate p:first-child {
  font-size: 32px;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  color: white;
}

.anonsesDate p:last-child {
  font-size: 18px;
  font-weight: 700;
  font-family: "EB Garamond", serif;
  color: white;
}

@media (max-width: 723px) {
  .modal-img {
    width: 300px;
  }
  .anounce-modal {
    width: 300px;
  }
  .modal_box-title {
    font-size: 1rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/css/shortsAnonses.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'OpenSans';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 500;\r\n\r\n  font-family: 'Montserrat';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 400;\r\n}\r\n\r\n.shortsAnonses {\r\n  padding-bottom: 150px;\r\n}\r\n\r\n.anonsesText {\r\n  padding-top: 203px;\r\n  padding-bottom: 150px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.anonsesText div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 25px;\r\n}\r\n.anonsesText div p {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n}\r\n\r\n.anonsesText .shortsText {\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n}\r\n\r\n.anonsesBox {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 27px;\r\n  padding: 5px;\r\n  border-radius: 10px;\r\n}\r\n.anonsesBox:hover {\r\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n  cursor: pointer;\r\n}\r\n.anonsesDate {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #05b093;\r\n  width: 100px;\r\n  height: 98px;\r\n  border-radius: 12px;\r\n}\r\n\r\n.anonsesDate p:first-child {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  color: white;\r\n}\r\n\r\n.anonsesDate p:last-child {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  color: white;\r\n}\r\n\r\n.anonsesBox div:last-child p {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  font-family: \"Fira Sans\", sans-serif;\r\n}\r\n\r\n.anonsesdodo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  gap: 24px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n@media (max-width: 880px) {\r\n  .anonsesText {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 24px;\r\n  }\r\n}\r\n@media (max-width: 1108px) {\r\n  .anonsesdodo {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n@media (max-width: 801px) {\r\n  .anonsesDate {\r\n    width: 80px;\r\n    height: 78px;\r\n  }\r\n  .anonsesDate p:last-child {\r\n    font-size: 0.9rem;\r\n  }\r\n  .anonsesBox {\r\n    gap: 10px;\r\n  }\r\n  .anonsesBox {\r\n    width: 100%;\r\n  }\r\n}\r\n@media (max-width: 728px) {\r\n  .anonsesBox div:last-child p {\r\n    font-size: 0.8rem;\r\n  }\r\n  .anonsesdodo {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n\r\n/* anounces modal */\r\n\r\n.anounce-modal {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  transition: 200ms ease-in-out;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  z-index: 10;\r\n  background-color: rgb(255, 255, 255);\r\n  width: 450px;\r\n  border: none;\r\n}\r\n\r\n.anounce-modal.active {\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  transition: 200ms ease-in-out;\r\n  opacity: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: black;\r\n  pointer-events: none;\r\n  \r\n}\r\n.overlay.active {\r\n  opacity: 0.4;\r\n  pointer-events: all;\r\n}\r\n\r\n.modal_box-title {\r\n  background-color: #efefefbf;\r\n  border-radius: 5px;\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 10px;\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  color: rgb(1, 1, 1);\r\n}\r\n\r\n.modal_box-date {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.modal_box-date div:first-child {\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  color: rgb(1, 1, 1);\r\n}\r\n.modal_box-date div:last-child {\r\n  font-size: 1.3rem;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  color: rgb(1, 1, 1);\r\n}\r\n\r\n.modal-img {\r\n  border-radius: 10px;\r\n  border-bottom-left-radius: 0px;\r\n  border-bottom-right-radius: 0px;\r\n  width: 450px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.cross-icon {\r\n  padding: 3px;\r\n  cursor: pointer;\r\n  position: fixed;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: white;\r\n}\r\n\r\n.modal_description {\r\n  background-color: #efefefbf;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n  font-family: \"EB Garamond\", serif;\r\n  font-size: 1.2rem;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.anonsesDate p:first-child {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  color: white;\r\n}\r\n\r\n.anonsesDate p:last-child {\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  font-family: \"EB Garamond\", serif;\r\n  color: white;\r\n}\r\n\r\n@media (max-width: 723px) {\r\n  .modal-img {\r\n    width: 300px;\r\n  }\r\n  .anounce-modal {\r\n    width: 300px;\r\n  }\r\n  .modal_box-title {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/viewOpera.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/viewOpera.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/assets/fonts/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'OpenSans';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 500;

  font-family: 'Montserrat';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
}

.sectionOpera {
  display: flex;
  gap: 24px;
  margin-bottom: 184px;
}

.bannerOpera img {
  width: 856px;
  height: 497px;
  border-radius: 12px;
  object-fit: cover;
}

.sectionOperaCard {
  border-radius: 8px;
  background-color: #e2e2e2;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  cursor: pointer;
}

.sectionOperaCard img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin: 12px 0px 12px 16px;
  object-fit: cover;
}

.sectionOperaCard:hover {
  box-shadow: 0px 5px 8px rgb(216, 216, 216);
}

.sectionOperaCard p {
  font-size: 16px;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  padding-right: 16px;
}

@media (max-width: 1310px) {
  .sectionOpera {
    display: flex;
    flex-direction: column;
  }

  .sectionOperaCard {
    width: 350px;
  }

  .sectionOperaBlock {
    width: 1150px;
    display: flex;
    gap: 10px;
  }
  .bannerOpera img {
    width: 100%;
  }
  #img-scene-1 {
    height: 500px;
  }
}

@media (max-width: 1230px) {
  .sectionOperaBlock {
    width: 100%;
  }
  .sectionOperaCard {
    width: 100%;
  }
}

@media (max-width: 1188px) {
  .sectionOperaBlock {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
}
@media (max-width: 935px) {
  .sectionOperaBlock {
    grid-template-columns: 1fr 1fr;
    row-gap: 0px;
  }
}
@media (max-width: 682px) {
  .sectionOperaBlock {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/css/viewOpera.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAA4D;EAC5D,gBAAgB;;EAEhB,yBAAyB;EACzB,4CAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;IACb,aAAa;IACb,SAAS;EACX;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,aAAa;IACb,kCAAkC;EACpC;;AAEF;AACA;EACE;IACE,8BAA8B;IAC9B,YAAY;EACd;AACF;AACA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":["@font-face {\r\n  font-family: 'OpenSans';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 500;\r\n\r\n  font-family: 'Montserrat';\r\n  src: url(/src/assets/fonts/Montserrat-VariableFont_wght.ttf);\r\n  font-weight: 400;\r\n}\r\n\r\n.sectionOpera {\r\n  display: flex;\r\n  gap: 24px;\r\n  margin-bottom: 184px;\r\n}\r\n\r\n.bannerOpera img {\r\n  width: 856px;\r\n  height: 497px;\r\n  border-radius: 12px;\r\n  object-fit: cover;\r\n}\r\n\r\n.sectionOperaCard {\r\n  border-radius: 8px;\r\n  background-color: #e2e2e2;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 24px;\r\n  margin-bottom: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sectionOperaCard img {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 8px;\r\n  margin: 12px 0px 12px 16px;\r\n  object-fit: cover;\r\n}\r\n\r\n.sectionOperaCard:hover {\r\n  box-shadow: 0px 5px 8px rgb(216, 216, 216);\r\n}\r\n\r\n.sectionOperaCard p {\r\n  font-size: 16px;\r\n  font-family: 'Fira Sans', sans-serif;\r\n  font-weight: 600;\r\n  padding-right: 16px;\r\n}\r\n\r\n@media (max-width: 1310px) {\r\n  .sectionOpera {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .sectionOperaCard {\r\n    width: 350px;\r\n  }\r\n\r\n  .sectionOperaBlock {\r\n    width: 1150px;\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  .bannerOpera img {\r\n    width: 100%;\r\n  }\r\n  #img-scene-1 {\r\n    height: 500px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1230px) {\r\n  .sectionOperaBlock {\r\n    width: 100%;\r\n  }\r\n  .sectionOperaCard {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1188px) {\r\n  .sectionOperaBlock {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n  \r\n}\r\n@media (max-width: 935px) {\r\n  .sectionOperaBlock {\r\n    grid-template-columns: 1fr 1fr;\r\n    row-gap: 0px;\r\n  }\r\n}\r\n@media (max-width: 682px) {\r\n  .sectionOperaBlock {\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/images/concert-logo.png":
/*!********************************************!*\
  !*** ./src/assets/images/concert-logo.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/concert-logo.png");

/***/ }),

/***/ "./src/assets/images/female-pink.avif":
/*!********************************************!*\
  !*** ./src/assets/images/female-pink.avif ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/female-pink.avif");

/***/ }),

/***/ "./src/assets/images/female.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/female.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/female.jpg");

/***/ }),

/***/ "./src/assets/images/img-dragon.jfif":
/*!*******************************************!*\
  !*** ./src/assets/images/img-dragon.jfif ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/img-dragon.jfif");

/***/ }),

/***/ "./src/assets/images/img-library.jfif":
/*!********************************************!*\
  !*** ./src/assets/images/img-library.jfif ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/img-library.jfif");

/***/ }),

/***/ "./src/assets/images/img-opera-event.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/img-opera-event.jpg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/img-opera-event.jpg");

/***/ }),

/***/ "./src/assets/images/img-opera-scene-blue.jfif":
/*!*****************************************************!*\
  !*** ./src/assets/images/img-opera-scene-blue.jfif ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/img-opera-scene-blue.jfif");

/***/ }),

/***/ "./src/assets/images/img-opera-scene-red.jfif":
/*!****************************************************!*\
  !*** ./src/assets/images/img-opera-scene-red.jfif ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/img-opera-scene-red.jfif");

/***/ }),

/***/ "./src/assets/images/img-opera-seats-view.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/img-opera-seats-view.jpg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/img-opera-seats-view.jpg");

/***/ }),

/***/ "./src/assets/images/img-people.jfif":
/*!*******************************************!*\
  !*** ./src/assets/images/img-people.jfif ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/img-people.jfif");

/***/ }),

/***/ "./src/assets/images/male-tabel.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/male-tabel.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/male-tabel.jpg");

/***/ }),

/***/ "./src/assets/styles/css/footer.css":
/*!******************************************!*\
  !*** ./src/assets/styles/css/footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/css/general.css":
/*!*******************************************!*\
  !*** ./src/assets/styles/css/general.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/css/header.css":
/*!******************************************!*\
  !*** ./src/assets/styles/css/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/css/infoCards.css":
/*!*********************************************!*\
  !*** ./src/assets/styles/css/infoCards.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_infoCards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./infoCards.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/infoCards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_infoCards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_infoCards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_infoCards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_infoCards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/css/newsCalendar.css":
/*!************************************************!*\
  !*** ./src/assets/styles/css/newsCalendar.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_newsCalendar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./newsCalendar.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/newsCalendar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_newsCalendar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_newsCalendar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_newsCalendar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_newsCalendar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/css/shortsAnonses.css":
/*!*************************************************!*\
  !*** ./src/assets/styles/css/shortsAnonses.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shortsAnonses_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./shortsAnonses.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/shortsAnonses.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shortsAnonses_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shortsAnonses_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shortsAnonses_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shortsAnonses_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/styles/css/viewOpera.css":
/*!*********************************************!*\
  !*** ./src/assets/styles/css/viewOpera.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_viewOpera_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./viewOpera.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/viewOpera.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_viewOpera_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_viewOpera_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_viewOpera_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_viewOpera_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Montserrat-VariableFont_wght.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/Montserrat-VariableFont_wght.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Montserrat-VariableFont_wght.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_css_footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/css/footer.css */ "./src/assets/styles/css/footer.css");
/* harmony import */ var _assets_styles_css_general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/styles/css/general.css */ "./src/assets/styles/css/general.css");
/* harmony import */ var _assets_styles_css_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/css/header.css */ "./src/assets/styles/css/header.css");
/* harmony import */ var _assets_styles_css_infoCards_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/css/infoCards.css */ "./src/assets/styles/css/infoCards.css");
/* harmony import */ var _assets_styles_css_newsCalendar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styles/css/newsCalendar.css */ "./src/assets/styles/css/newsCalendar.css");
/* harmony import */ var _assets_styles_css_shortsAnonses_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/css/shortsAnonses.css */ "./src/assets/styles/css/shortsAnonses.css");
/* harmony import */ var _assets_styles_css_viewOpera_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/styles/css/viewOpera.css */ "./src/assets/styles/css/viewOpera.css");
/* harmony import */ var _assets_images_concert_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/concert-logo.png */ "./src/assets/images/concert-logo.png");
/* harmony import */ var _assets_images_female_pink_avif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/female-pink.avif */ "./src/assets/images/female-pink.avif");
/* harmony import */ var _assets_images_female_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/female.jpg */ "./src/assets/images/female.jpg");
/* harmony import */ var _assets_images_img_dragon_jfif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/img-dragon.jfif */ "./src/assets/images/img-dragon.jfif");
/* harmony import */ var _assets_images_img_library_jfif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/img-library.jfif */ "./src/assets/images/img-library.jfif");
/* harmony import */ var _assets_images_img_opera_event_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/img-opera-event.jpg */ "./src/assets/images/img-opera-event.jpg");
/* harmony import */ var _assets_images_img_opera_scene_blue_jfif__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/img-opera-scene-blue.jfif */ "./src/assets/images/img-opera-scene-blue.jfif");
/* harmony import */ var _assets_images_img_opera_scene_red_jfif__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/img-opera-scene-red.jfif */ "./src/assets/images/img-opera-scene-red.jfif");
/* harmony import */ var _assets_images_img_opera_seats_view_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/img-opera-seats-view.jpg */ "./src/assets/images/img-opera-seats-view.jpg");
/* harmony import */ var _assets_images_img_people_jfif__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/img-people.jfif */ "./src/assets/images/img-people.jfif");
/* harmony import */ var _assets_images_male_tabel_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/images/male-tabel.jpg */ "./src/assets/images/male-tabel.jpg");
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./js/navbar.js */ "./src/js/navbar.js");
/* harmony import */ var _js_navbar_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_js_navbar_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _js_view_opera_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/view-opera.js */ "./src/js/view-opera.js");
/* harmony import */ var _js_news_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./js/news.js */ "./src/js/news.js");
/* harmony import */ var _js_poster_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./js/poster.js */ "./src/js/poster.js");
/* harmony import */ var _js_newsCalendar_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./js/newsCalendar.js */ "./src/js/newsCalendar.js");
/* harmony import */ var _js_brief_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./js/brief.js */ "./src/js/brief.js");
// css








// images












// scripts







// ViewButton
var viewButton1 = new _js_view_opera_js__WEBPACK_IMPORTED_MODULE_19__.ViewButtons('./images/img-opera-scene-blue.jfif', '«Performance/Opera»');
var viewButton2 = new _js_view_opera_js__WEBPACK_IMPORTED_MODULE_19__.ViewButtons('./images/img-opera-seats-view.jpg', '«Opera Seating»');
var viewButton3 = new _js_view_opera_js__WEBPACK_IMPORTED_MODULE_19__.ViewButtons('./images/img-opera-event.jpg', '«Opera Events»');
viewButton1.createViewBtn();
viewButton2.createViewBtn();
viewButton3.createViewBtn();
(0,_js_view_opera_js__WEBPACK_IMPORTED_MODULE_19__.changePhotos)();

// uprated cards
(0,_js_news_js__WEBPACK_IMPORTED_MODULE_20__.updateCard)();
(0,_js_news_js__WEBPACK_IMPORTED_MODULE_20__.updateCard2)();

//Button textContent
(0,_js_poster_js__WEBPACK_IMPORTED_MODULE_21__.BtntxtContent)();
(0,_js_newsCalendar_js__WEBPACK_IMPORTED_MODULE_22__.updateMonth)();
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    (0,_js_brief_js__WEBPACK_IMPORTED_MODULE_23__.closeModal)(modal);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0dBQXNHLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLG9CQUFvQixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVks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QUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8seUdBQXlHLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxP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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEdBQTBHLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0scUNBQXFDLDhCQUE4QixtRUFBbUUsdUJBQXVCLG9DQUFvQyxtRUFBbUUsdUJBQXVCLEtB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QUFhLENBQUMsQ0FBQztBQUUzQlIsZ0VBQVksQ0FBQyxDQUFDOztBQUdkO0FBQ0EvRCx3REFBVSxDQUFDLENBQUM7QUFDWlEseURBQVcsQ0FBQyxDQUFDOztBQUViO0FBQ0FXLDZEQUFhLENBQUMsQ0FBQztBQUVmRixpRUFBVyxDQUFDLENBQUM7QUFFYjVELFFBQVEsQ0FBQ3dCLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDbUcsQ0FBQyxFQUFLO0VBQzFDLElBQUlBLENBQUMsQ0FBQy9ILEdBQUcsS0FBSyxRQUFRLEVBQUU7SUFDdEJrQyx5REFBVSxDQUFDTCxLQUFLLENBQUM7RUFDbkI7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvanMvYnJpZWYuanMiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9qcy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9qcy9uZXdzLmpzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvanMvbmV3c0NhbGVuZGFyLmpzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvanMvcG9zdGVyLmpzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvanMvdmlldy1vcGVyYS5qcyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvc3R5bGVzL2Nzcy9nZW5lcmFsLmNzcyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY3NzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvc3R5bGVzL2Nzcy9pbmZvQ2FyZHMuY3NzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3MvbmV3c0NhbGVuZGFyLmNzcyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY3NzL3Nob3J0c0Fub25zZXMuY3NzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3Mvdmlld09wZXJhLmNzcyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvaW1hZ2VzL2NvbmNlcnQtbG9nby5wbmciLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ZlbWFsZS1waW5rLmF2aWYiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ZlbWFsZS5qcGciLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ltZy1kcmFnb24uamZpZiIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaW1nLWxpYnJhcnkuamZpZiIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaW1nLW9wZXJhLWV2ZW50LmpwZyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaW1nLW9wZXJhLXNjZW5lLWJsdWUuamZpZiIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaW1nLW9wZXJhLXNjZW5lLXJlZC5qZmlmIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy9pbWctb3BlcmEtc2VhdHMtdmlldy5qcGciLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ltZy1wZW9wbGUuamZpZiIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFsZS10YWJlbC5qcGciLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvc3R5bGVzL2Nzcy9mb290ZXIuY3NzPzA5ZDkiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hc3NldHMvc3R5bGVzL2Nzcy9nZW5lcmFsLmNzcz9hMmU0Iiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3MvaGVhZGVyLmNzcz9iZDNmIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3MvaW5mb0NhcmRzLmNzcz82N2QzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3MvbmV3c0NhbGVuZGFyLmNzcz80NDM5Iiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3Mvc2hvcnRzQW5vbnNlcy5jc3M/OTk2MCIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY3NzL3ZpZXdPcGVyYS5jc3M/MTViZSIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vcGVyYS10aWNrZXRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29wZXJhLXRpY2tldHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb3BlcmEtdGlja2V0cy8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQnJpZWYge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGVEYXksIGRhdGVNb250aCwgdGl0bGUsIGltZ1VybCwgZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGF0ZURheSA9IGRhdGVEYXk7XHJcbiAgICB0aGlzLmRhdGVNb250aCA9IGRhdGVNb250aDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQnJpZWYoKSB7XHJcbiAgICBjb25zdCBhbm5vdW5jZXNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFubm91bmNlc0JveC5jbGFzc0xpc3QuYWRkKCdhbm9uc2VzQm94Jyk7XHJcblxyXG4gICAgY29uc3QgYW5ub3VuY2VzRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYW5ub3VuY2VzRGF0ZS5jbGFzc0xpc3QuYWRkKCdhbm9uc2VzRGF0ZScpO1xyXG5cclxuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IG1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGF5LnRleHRDb250ZW50ID0gdGhpcy5kYXRlRGF5O1xyXG4gICAgbW9udGgudGV4dENvbnRlbnQgPSB0aGlzLmRhdGVNb250aDtcclxuXHJcbiAgICBhbm5vdW5jZXNEYXRlLmFwcGVuZChkYXkpO1xyXG4gICAgYW5ub3VuY2VzRGF0ZS5hcHBlbmQobW9udGgpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xyXG5cclxuICAgIHRpdGxlQm94LmFwcGVuZCh0aXRsZVRleHQpO1xyXG5cclxuICAgIGFubm91bmNlc0JveC5hcHBlbmQoYW5ub3VuY2VzRGF0ZSk7XHJcbiAgICBhbm5vdW5jZXNCb3guYXBwZW5kKHRpdGxlQm94KTtcclxuXHJcbiAgICBhbm5vdW5jZXNCb3guYnJpZWZEYXRhID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBjYXJkc0NhbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNicmllZi1jb250YWluZXInKTtcclxuICAgIGNhcmRzQ2FudGFpbmVyLmFwcGVuZChhbm5vdW5jZXNCb3gpO1xyXG5cclxuICAgIHJldHVybiBhbm5vdW5jZXNCb3hcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGJyaWVmcyA9IFtcclxuICBuZXcgQnJpZWYoMzAsICdKdW5lJywgJ8KrT3BlcmEgVlMgT3BlcmV0dGHCuycsICcuL2ltYWdlcy9mZW1hbGUtcGluay5hdmlmJywgJ0Egc29wcmFub1xcJ3Mgdm9pY2Ugc29hcnMgd2l0aCBwYXNzaW9uIGFuZCBncmFjZSwgY2FwdGl2YXRpbmcgdGhlIGF1ZGllbmNlIHdpdGggaGF1bnRpbmcgYXJpYXMgdGhhdCBzdGlyIGRlZXAgZW1vdGlvbnMuJyksXHJcbiAgbmV3IEJyaWVmKDEzLCAnSnVuZScsICfCq0FudG9uaW8gVml2YWxkaS4gU2Vhc29uwrsnLCAnLi9pbWFnZXMvbWFsZS10YWJlbC5qcGcnLCAnVHJpYnV0ZSB0byBGcmFuayBTaW5hdHJhLicpLFxyXG4gIG5ldyBCcmllZigxMSwgJ0RlY2VtYmVyJywgJ8KrRXZlbnRzL0NhbmNlbGxhdGlvbnPCuycsICcuL2ltYWdlcy9pbWctb3BlcmEtc2NlbmUtcmVkLmpmaWYnLCAnQSBzbWFsbCB0b3duIG1lZXRzIG15c3RlcmlvdXMgdmlzaXRvcnMgZnJvbSBzcGFjZS4nKSxcclxuICBuZXcgQnJpZWYoMTAsICdEZWNlbWJlcicsICfCq1BlcmZvcm1hbmNlL09wZXJhwrsnLCAnLi9pbWFnZXMvaW1nLW9wZXJhLWV2ZW50LmpwZycsICdBIHNoeSBhcnRpc3QgcGFpbnRzIHRoZSB0b3duLCBkaXNjb3ZlcmluZyBoaXMgY291cmFnZS4nKSxcclxuICBuZXcgQnJpZWYoMjAsICdOb3ZlbWJlcicsICfCq1RyYWRpdGlvbiB2cy4gaW5ub3ZhdGlvbsK7JywgJy4vaW1hZ2VzL2ltZy1vcGVyYS1zY2VuZS1ibHVlLmpmaWYnLCAnSGUgcmFjZXMgdG8gc3RvcCB0aGUgbWFjaGluZXMgYW5kIHNhdmUgaHVtYW5pdHkuJylcclxuXTtcclxuXHJcbmNvbnN0IG9wZW5Nb2RhbEJ0bnMgPSBicmllZnMubWFwKGJyaWVmID0+IGJyaWVmLmNyZWF0ZUJyaWVmKCkpO1xyXG5cclxuY29uc3QgYnJpZWZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFub25zZXNCb3gnKTtcclxuXHJcbmlmIChicmllZkVsZW1lbnQpIHtcclxuICBvcGVuTW9kYWxCdG5zLnB1c2goYnJpZWZFbGVtZW50KTtcclxuXHJcbiAgYnJpZWZFbGVtZW50LmJyaWVmRGF0YSA9IG5ldyBCcmllZigzLCAnSnVuZScsICfCq0NFTlRVUlkgbmFtZWQgYWZ0ZXIgU0lOQVRSQcK7JywgJy4vaW1hZ2VzL2ZlbWFsZS1waW5rLmF2aWYnLCAnVHJpYnV0ZSB0byBGcmFuayBTaW5hdHJhLicpXHJcbn1cclxuXHJcbi8vIGFub3VuY2VzIG1vZGVsXHJcblxyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUJ0bicpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcclxuXHJcbm9wZW5Nb2RhbEJ0bnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XHJcbiAgICBvcGVuTW9kYWwobW9kYWwpXHJcblxyXG4gICAgY29uc3QgYnJpZWZEYXRhID0gYnV0dG9uLmJyaWVmRGF0YTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdGl0bGUnKS50ZXh0Q29udGVudCA9IGJyaWVmRGF0YS50aXRsZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kYXRlRGF5JykudGV4dENvbnRlbnQgPSBgJHticmllZkRhdGEuZGF0ZURheX1gO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRhdGVNb250aCcpLnRleHRDb250ZW50ID0gYCR7YnJpZWZEYXRhLmRhdGVNb250aH1gO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBicmllZkRhdGEuZGVzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtaW1nJykuc3JjID0gYnJpZWZEYXRhLmltZ1VybDtcclxuICB9KTtcclxufSlcclxuXHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNsb3NlTW9kYWwobW9kYWwpO1xyXG59KTtcclxuXHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY2xvc2VNb2RhbChtb2RhbCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XHJcbiAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn1cclxuY29uc29sZS5sb2coJ0NvZGUgaXMgd2hhdCBpIGxpa2UnKVxyXG4iLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9zdGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3N0ZXItc2VjdGlvbicpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Mtc2VjdGlvbicpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JyaWVmJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNicmllZi1zZWN0aW9uJykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RzLXNlY3Rpb24nKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxufSlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNldmVudHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2ZW50cy1zZWN0aW9uJykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbn0pXHJcbiIsImV4cG9ydCBjb25zdCBuZXdzQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnLi9pbWFnZXMvaW1nLXBlb3BsZS5qZmlmJyxcclxuICAgIHRpdGxlOiAnUG9zdHBvbmVtZW50cy9DYW5jZWxsYXRpb25zIG9mIEV2ZW50cycsXHJcbiAgICBkZXNjcmlwdGlvbjogJzAzLzA5LzIwMjMgYXQgMTkuMDAgb1xcJ2Nsb2NrLiAtIGNvbmNlcnQgXCJPcGVyYSB2cy4gVmljdG9yaWFcIiAtIFBPU1RQT05FRCB0byAwNi8wNS8yMDIzIGF0IDE5LjAwIG9cXCdjbG9jay4nXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnLi9pbWFnZXMvaW1nLWRyYWdvbi5qZmlmJyxcclxuICAgIHRpdGxlOiAnRXZlbnRzL0NhbmNlbGxhdGlvbnMnLFxyXG4gICAgZGVzY3JpcHRpb246ICcwNC8xMS8yMDIzIGF0IDE2LjAwIG9cXCdjbG9jay4gLSBjb25jZXJ0IFwiT3BlcmEgdnMuIE9wZXJldHRhXCIgLSBQT1NUUE9ORUQgdG8gMDYvMDUvMjAyMyBhdCAxOS4wMCBvXFwnY2xvY2suJ1xyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGltZ1VybDogJy4vaW1hZ2VzL2ltZy1saWJyYXJ5LmpmaWYnLFxyXG4gICAgdGl0bGU6ICdWZXJkaS9saWJyYXJ5JyxcclxuICAgIGRlc2NyaXB0aW9uOiAnTG9sbyBWZXJkaSBtYW51c2NyaXB0IGRpc2NvdmVyZWQgaW4gYW4gb2xkIGxpYnJhcnkgdmF1bHQsIHNldCB0byBkZWJ1dCBpbiBhIHNwZWNpYWwgb3BlcmEgaG91c2UgcGVyZm9ybWFuY2UgbmV4dCBzZWFzb24uJ1xyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGltZ1VybDogJy4vaW1hZ2VzL2ZlbWFsZS1waW5rLmF2aWYnLFxyXG4gICAgdGl0bGU6ICdFdmVuaW5nL0xhIFNjYWxhJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnQWNjbGFpbWVkIHNvcHJhbm8gY29sbGFwc2VzIGR1cmluZyBwZXJmb3JtYW5jZSwgc2hvY2tpbmcgYXVkaWVuY2UgYXQgTGEgU2NhbGEsIGJ1dCByZWNvdmVycyBxdWlja2x5IGZvciB0cml1bXBoYW50IGVuY29yZS4nXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnLi9pbWFnZXMvZmVtYWxlLmpwZycsXHJcbiAgICB0aXRsZTogJ1BlcmZvcm1hbmNlL09wZXJhJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnUmVub3duZWQgdGVub3IgcmV0aXJlcywgZGVsaXZlcmluZyBlbW90aW9uYWwgZmFyZXdlbGwgYXQgZmluYWwgcGVyZm9ybWFuY2UsIGxlYXZpbmcgb3BlcmEgd29ybGQgaW4gYXdlLidcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpbWdVcmw6ICcuL2ltYWdlcy9tYWxlLXRhYmVsLmpwZycsXHJcbiAgICB0aXRsZTogJ1RyYWRpdGlvbiB2cy4gaW5ub3ZhdGlvbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ09wZXJhIGhvdXNlIGFubm91bmNlcyBncm91bmRicmVha2luZyBsaWJyZXR0byBmb3IgbmV3IHByb2R1Y3Rpb24sIHNwYXJraW5nIGRlYmF0ZSBvdmVyIHRyYWRpdGlvbiB2cy4gaW5ub3ZhdGlvbi4nXHJcbiAgfVxyXG5dXHJcblxyXG4vLyBGaXJzdCBjYXJkXHJcbmxldCBpbWdFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZ0VsZW0nKSxcclxuICB0aXRsZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVFbGVtJyksXHJcbiAgZGVzY3JpcHRpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uRWxlbScpO1xyXG5cclxubGV0IGlkeCA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXJkKCkge1xyXG4gIGxldCB7IGltZ1VybCwgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBuZXdzQ2FyZHNbaWR4XTtcclxuICBpbWdFbGVtLnNyYyA9IGltZ1VybDtcclxuICB0aXRsZUVsZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICBkZXNjcmlwdGlvbkVsZW0udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBpZHgrKztcclxuICBpZiAoaWR4ID09PSBuZXdzQ2FyZHMubGVuZ3RoKSB7XHJcbiAgICBpZHggPSAwO1xyXG4gIH1cclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICB1cGRhdGVDYXJkKCk7XHJcbiAgfSwgMzAwMClcclxufVxyXG5cclxuLy8gU2Vjb25kIENhcmRcclxubGV0IGltZ0VsZW0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltZ0VsZW0yJyksXHJcbiAgdGl0bGVFbGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZUVsZW0yJyksXHJcbiAgZGVzY3JpcHRpb25FbGVtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbkVsZW0yJyk7XHJcblxyXG5sZXQgaWR4MiA9IG5ld3NDYXJkcy5sZW5ndGggLSAxO1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FyZDIoKSB7XHJcbiAgbGV0IHsgaW1nVXJsLCB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IG5ld3NDYXJkc1tpZHgyXTtcclxuICBpbWdFbGVtMi5zcmMgPSBpbWdVcmw7XHJcbiAgdGl0bGVFbGVtMi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gIGRlc2NyaXB0aW9uRWxlbTIudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBpZHgyLS07XHJcbiAgaWYgKGlkeDIgPCAwKSB7XHJcbiAgICBpZHgyID0gbmV3c0NhcmRzLmxlbmd0aCAtIDE7XHJcbiAgfVxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHVwZGF0ZUNhcmQyKCk7XHJcbiAgfSwgMzAwMClcclxufVxyXG4iLCJjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25leHRCdG4nKSxcclxuICBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tCdG4nKSxcclxuICBtb250aEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9udGgnKTtcclxubGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcbmN1cnJlbnRJbmRleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50TW9udGgnKTtcclxuXHJcbmNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1vbnRoKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50TW9udGgnLCBjdXJyZW50SW5kZXgpO1xyXG5cclxuICBtb250aEVsZW0udGV4dENvbnRlbnQgPSBtb250aHNbY3VycmVudEluZGV4XTtcclxuICBpZiAoY3VycmVudEluZGV4ID4gbW9udGhzLmxlbmd0aCAtIDIpIHtcclxuICAgIGN1cnJlbnRJbmRleCA9IG1vbnRocy5sZW5ndGggLSAyO1xyXG4gIH0gZWxzZSBpZiAoY3VycmVudEluZGV4IDwgMSkge1xyXG4gICAgY3VycmVudEluZGV4ID0gbW9udGhzLmxlbmd0aCAtIDExO1xyXG4gIH1cclxufVxyXG5cclxuYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjdXJyZW50SW5kZXgtLTtcclxuICB1cGRhdGVNb250aCgpO1xyXG59KTtcclxubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBtb250aHMubGVuZ3RoO1xyXG4gIHVwZGF0ZU1vbnRoKCk7XHJcbn0pOyIsImV4cG9ydCBmdW5jdGlvbiBCdG50eHRDb250ZW50KCkge1xyXG4gIGNvbnN0IGJ0bk1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTW9yZScpLFxyXG4gICAgZXh0cmFDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHRyYUNhcmRzcycpO1xyXG5cclxuICBidG5Nb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZXh0cmFDYXJkcy5jbGFzc0xpc3QudG9nZ2xlKCdleHRyYS1jYXJkcycpO1xyXG4gICAgaWYgKGJ0bk1vcmUudGV4dENvbnRlbnQgPT09ICdsZXNzJykge1xyXG4gICAgICBidG5Nb3JlLnRleHRDb250ZW50ID0gJ21vcmUnO1xyXG4gICAgfSBlbHNlIGlmIChidG5Nb3JlLnRleHRDb250ZW50ID09PSAnbW9yZScpIHtcclxuICAgICAgYnRuTW9yZS50ZXh0Q29udGVudCA9ICdsZXNzJztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3Qgb3JkZXJUaWNrZXRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI29yZGVyVGlja2V0c0J0bicpO1xyXG5cclxuY29uc3QgdGlja2V0c1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpY2tldHMtcG9wdXAnKTtcclxuY29uc3QgdGlja2V0c1BvcHVwT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aWNrZXRzUG9wdXBPdmVybGF5Jyk7XHJcbmNvbnN0IHRpY2tldHNDcm9zc0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGlja2V0cy1jcm9zcy1pY29uJyk7XHJcbmNvbnN0IGNyb3NzQ2xvc2VCdG5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Jvc3MtY2xvc2UtYnRuLWJveCcpO1xyXG5jb25zdCB0aWNrZXRzUG9wdXBEYXRlRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpY2tldHMtcG9wdXBfZGF0ZURheScpO1xyXG5jb25zdCB0aWNrZXRzUG9wdXBEYXRlTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGlja2V0cy1wb3B1cF9kYXRlTW9udGgnKTtcclxuY29uc3QgdGlja2V0c1BvcHVwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWNrZXRzLXBvcHVwX25hbWUnKTtcclxuXHJcbmNvbnN0IG9wZW5UaWNrZXRzUG9wdXAgPSAoZXZlbnQpID0+IHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5DYXJkXCIpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVEYXkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuQ2FyZERhdGUgZGl2OmZpcnN0LWNoaWxkXCIpLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgZGF0ZU1vbnRoID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLkNhcmREYXRlIGRpdjpsYXN0LWNoaWxkXCIpLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgZXZlbnROYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLkNhcmRJbmZvVGV4dCBwOmZpcnN0LWNoaWxkXCIpLnRleHRDb250ZW50O1xyXG5cclxuICAgIHRpY2tldHNQb3B1cERhdGVEYXkudGV4dENvbnRlbnQgPSBkYXRlRGF5O1xyXG4gICAgdGlja2V0c1BvcHVwRGF0ZU1vbnRoLnRleHRDb250ZW50ID0gZGF0ZU1vbnRoO1xyXG4gICAgdGlja2V0c1BvcHVwTmFtZS50ZXh0Q29udGVudCA9IGV2ZW50TmFtZTtcclxuXHJcbiAgICB0aWNrZXRzUG9wdXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0aWNrZXRzUG9wdXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgY3Jvc3NDbG9zZUJ0bkJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gIH0sIDUwMClcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlVGlja2V0c1BvcHVwID0gKCkgPT4ge1xyXG4gIHRpY2tldHNQb3B1cENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHRpY2tldHNQb3B1cE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgY3Jvc3NDbG9zZUJ0bkJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBoaWRlU2Nyb2xsYmFyKCkge1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTY3JvbGxiYXIoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxufVxyXG5cclxub3JkZXJUaWNrZXRzQnRuLmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBvcGVuVGlja2V0c1BvcHVwKGV2ZW50KTtcclxuICAgIGhpZGVTY3JvbGxiYXIoKTtcclxuICB9KTtcclxufSlcclxuXHJcbnRpY2tldHNDcm9zc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY2xvc2VUaWNrZXRzUG9wdXAoKTtcclxuICBzaG93U2Nyb2xsYmFyKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgcG9wRnVuYyA9IG9wZW5JbnB1dFBvcHVwKCk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXBDaGVja291dEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWNrZXRzLXBvcHVwLWNhcmQtdGl0bGUgaW5wdXQnKVxyXG4gIGxldCBhbGxGaWxsZWQgPSB0cnVlO1xyXG5cclxuICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGFsbEZpbGxlZCA9IGZhbHNlO1xyXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JvcmRlcjogMXB4IHNvbGlkIHJlZCcpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYgKGFsbEZpbGxlZCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHBvcEZ1bmMuc3RhcnRBbmltYXRpb24oKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgICBjbG9zZVRpY2tldHNQb3B1cCgpXHJcbiAgICBzaG93U2Nyb2xsYmFyKCk7XHJcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIG9wZW5JbnB1dFBvcHVwKCkge1xyXG4gIGNvbnN0IENhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZG93LW9yZGVyLXRpY2tldCcpO1xyXG4gIENhcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gIGxldCBib3R0b21Qb3NpdGlvbiA9IC0zMDA7XHJcbiAgbGV0IG9wYWNpdHkgPSAwO1xyXG4gIGNvbnN0IHRhcmdldEJvdHRvbSA9IC0xNTM7XHJcbiAgY29uc3QgdGFyZ2V0T3BhY2l0eSA9IDE7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGlvblNwZWVkID0gMjtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICBmdW5jdGlvbiBzdGVwKCkge1xyXG4gICAgICBpZiAoYm90dG9tUG9zaXRpb24gPCB0YXJnZXRCb3R0b20pIGJvdHRvbVBvc2l0aW9uICs9IDI7XHJcbiAgICAgIGlmIChvcGFjaXR5IDwgdGFyZ2V0T3BhY2l0eSkgb3BhY2l0eSArPSAwLjI7XHJcblxyXG4gICAgICBDYXJkQ29udGFpbmVyLnN0eWxlLmJvdHRvbSA9IGJvdHRvbVBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgQ2FyZENvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcbiAgICAgIGlmIChib3R0b21Qb3NpdGlvbiA8IHRhcmdldEJvdHRvbSB8fCBvcGFjaXR5IDwgdGFyZ2V0T3BhY2l0eSkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRBbmltYXRpb24oKSB7XHJcbiAgICBsZXQgcmV2ZXJzZUJvdHRvbVBvc2l0aW9uID0gdGFyZ2V0Qm90dG9tO1xyXG4gICAgbGV0IHJldmVyY2VPcGFjaXR5ID0gdGFyZ2V0T3BhY2l0eTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGVwKCkge1xyXG4gICAgICBpZiAocmV2ZXJzZUJvdHRvbVBvc2l0aW9uID4gLTQwMCkgcmV2ZXJzZUJvdHRvbVBvc2l0aW9uIC09IDg7XHJcbiAgICAgIGlmIChyZXZlcmNlT3BhY2l0eSA+IDApIHJldmVyY2VPcGFjaXR5IC09IDAuMTtcclxuXHJcbiAgICAgIENhcmRDb250YWluZXIuc3R5bGUuYm90dG9tID0gcmV2ZXJzZUJvdHRvbVBvc2l0aW9uICsgJ3B4JztcclxuICAgICAgQ2FyZENvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gcmV2ZXJjZU9wYWNpdHk7XHJcblxyXG4gICAgICBpZiAocmV2ZXJzZUJvdHRvbVBvc2l0aW9uID4gLTMwMCB8fCByZXZlcmNlT3BhY2l0eSA+IDApIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXJ0QW5pbWF0aW9uLFxyXG4gICAgcmVzZXRBbmltYXRpb25cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvd0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNldFRpbWVvdXQocG9wRnVuYy5yZXNldEFuaW1hdGlvbiwgMTAwKTtcclxufSlcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBob3RvcygpIHtcclxuICBjb25zdCBtYWluSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taW1nJyk7XHJcbiAgY29uc3Qgdmlld0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdmlldy1idXR0b24nKTtcclxuICBsZXQgbWFpbkltZ0VsZW0gPSBtYWluSW1nLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG5cclxuICB2aWV3QnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICBtYWluSW1nRWxlbS5zcmMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2hvd01haW5JbWcnKTtcclxuXHJcbiAgICBsZXQgYnRuSW1nU3JjID0gYnRuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzBdLnNyYztcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG93TWFpbkltZ1wiLCBidG5JbWdTcmMpO1xyXG4gICAgICBtYWluSW1nRWxlbS5zcmMgPSBidG5JbWdTcmM7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gY2xvbmUgYnV0dG9uIGNhcmRcclxuZXhwb3J0IGNsYXNzIFZpZXdCdXR0b25zIHtcclxuICBjb25zdHJ1Y3RvcihpbWdVcmwsIHRleHQpIHtcclxuICAgIHRoaXMuaW1nVXJsID0gaW1nVXJsO1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVZpZXdCdG4oKSB7XHJcbiAgICBjb25zdCBidXR0b25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkJveC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uT3BlcmFDYXJkJyk7XHJcbiAgICBidXR0b25Cb3guaWQgPSAndmlldy1idXR0b24nO1xyXG5cclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSB0aGlzLmltZ1VybDtcclxuXHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0aGlzLnRleHQ7XHJcblxyXG4gICAgYnV0dG9uQm94LmFwcGVuZChpbWcpO1xyXG4gICAgYnV0dG9uQm94LmFwcGVuZChwYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnN0IHZpZXdCdG5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdCdG5zQ29udGFpbmVyJyk7XHJcbiAgICB2aWV3QnRuc0NvbnRhaW5lci5hcHBlbmQoYnV0dG9uQm94KTtcclxuICB9XHJcbn07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMzg2cHg7XHJcbiAgcGFkZGluZzogNjBweCAwcHggMzZweCAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9vdGVyQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9vdGVyQm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA3ODBweDtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5mb290ZXJCb3ggZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mb290ZXJCb3ggLmZvb3RlclRpdGVsQm94IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBzZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbn1cclxuXHJcbi5mb290ZXJMb2dvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggNTBweCAwcHggMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbn1cclxuXHJcbi5mb290ZXJCb3ggZGl2OmZpcnN0LWNoaWxkIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuLmZvb3RlckJveCBkaXYge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMzJweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XHJcbiAgLmZvb3RlckNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDUwcHg7XHJcbiAgfVxyXG4gIC5mb290ZXJCb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDNweCkge1xyXG4gIC5mb290ZXJCb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3RlckxvZ28ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUE0RDtFQUM1RCxnQkFBZ0I7O0VBRWhCLHlCQUF5QjtFQUN6Qiw0Q0FBNEQ7RUFDNUQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixTQUFTO0VBQ1g7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xcclxcbiAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxyXFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDM4NnB4O1xcclxcbiAgcGFkZGluZzogNjBweCAwcHggMzZweCAwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlckJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA3ODBweDtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlckJveCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJCb3ggLmZvb3RlclRpdGVsQm94IHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkVCIEdhcmFtb25kXFxcIiwgc2VyaWY7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJMb2dvIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFxyXFxuICAgIG1pbi13aWR0aDogMjgwcHg7XFxyXFxuICAgIG1hcmdpbjogMHB4IDUwcHggMHB4IDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJCb3ggZGl2OmZpcnN0LWNoaWxkIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlckJveCBkaXYge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzBweCkge1xcclxcbiAgLmZvb3RlckNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gIH1cXHJcXG4gIC5mb290ZXJCb3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzAzcHgpIHtcXHJcXG4gIC5mb290ZXJCb3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlckxvZ28ge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxufVxyXG5cclxuLnJlc3RyaWN0aW9uczEge1xyXG4gIG1heC13aWR0aDogMTMwMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnJlc3RyaWN0aW9uczIge1xyXG4gIG1heC13aWR0aDogMTMzMHB4O1xyXG4gIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3MvZ2VuZXJhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQTREO0VBQzVELGdCQUFnQjs7RUFFaEIseUJBQXlCO0VBQ3pCLDRDQUE0RDtFQUM1RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XFxyXFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXHJcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RyaWN0aW9uczEge1xcclxcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHggMzBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RyaWN0aW9uczIge1xcclxcbiAgbWF4LXdpZHRoOiAxMzMwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHggMzBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxuICBwYWRkaW5nOiA1MnB4IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG5oZWFkZXIgcCwgaGVhZGVyIGEge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5oZWFkZXJJbm5lcldyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxubmF2IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcclxufVxyXG5cclxuLmhlYWRlckxvZ28ge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1hcmdpbjogMHB4IDUwcHggMHB4IDBweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5oZWFkZXJNYWluU3F1YXJlIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLnJlc3RyaWN0aW9ucyB7XHJcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE1NXB4KSB7XHJcbiAgLmhlYWRlcklubmVyV3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDQycHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgcGFkZGluZzogNDJweCAwcHg7XHJcbiAgfVxyXG4gIG5hdiB7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcklubmVyV3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJMb2dvIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGhlYWRlciAucmVzdHJpY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5oZWFkZXJUb29scyAuaGVhZGVyTWFpblNxdWFyZSB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIG5hdiB7XHJcbiAgICBnYXA6IDdweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDNweCkge1xyXG4gIC5oZWFkZXJUb29scyB7XHJcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xyXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1OHB4IDEwMHB4IDYwcHg7ICovXHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLmhlYWRlclRvb2xzIC5oZWFkZXJNYWluU3F1YXJlIHtcclxuICAgIHdpZHRoOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICB9XHJcbiAgbmF2IHtcclxuICAgIGdhcDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQTREO0VBQzVELGdCQUFnQjs7RUFFaEIseUJBQXlCO0VBQ3pCLDRDQUE0RDtFQUM1RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCOztFQUV0QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjs7RUFFaEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLFFBQVE7RUFDVjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcXHJcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcclxcbiAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcXHJcXG4gIHBhZGRpbmc6IDUycHggMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHAsIGhlYWRlciBhIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJJbm5lcldyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogXFxcIkZpcmEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IDJweCB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJMb2dvIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRUIgR2FyYW1vbmRcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFxyXFxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAwcHggNTBweCAwcHggMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJNYWluU3F1YXJlIHtcXHJcXG4gIHdpZHRoOiA2cHg7XFxyXFxuICBoZWlnaHQ6IDZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RyaWN0aW9ucyB7XFxyXFxuICBtYXgtd2lkdGg6IDEzMDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweCAzMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTE1NXB4KSB7XFxyXFxuICAuaGVhZGVySW5uZXJXcmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogNDJweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiA0MnB4IDBweDtcXHJcXG4gIH1cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJJbm5lcldyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyTG9nbyB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciAucmVzdHJpY3Rpb25zIHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5oZWFkZXJUb29scyAuaGVhZGVyTWFpblNxdWFyZSB7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgfVxcclxcbiAgbmF2IHtcXHJcXG4gICAgZ2FwOiA3cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDNweCkge1xcclxcbiAgLmhlYWRlclRvb2xzIHtcXHJcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXHJcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1OHB4IDEwMHB4IDYwcHg7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgfVxcclxcbiAgLmhlYWRlclRvb2xzIC5oZWFkZXJNYWluU3F1YXJlIHtcXHJcXG4gICAgd2lkdGg6IDNweDtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICB9XFxyXFxuICBuYXYge1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uaW5mb2JveFRpdGVse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5pbmZvYm94VGl0ZWwgZGl2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMzJweDtcclxufVxyXG5cclxuLmluZm9ib3hUaXRlbCBwOmZpcnN0LWNoaWxkIHtcclxuICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBzZXJpZjtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmluZm9ib3hUaXRlbCBwOmxhc3QtY2hpbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uQ2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxufVxyXG5cclxuLkNhcmREYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYig3NiA3NiA3Nik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5DYXJkRGF0ZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxufVxyXG5cclxuLkNhcmREYXRlIGRpdjpsYXN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uQ2FyZEltZyBpbWcge1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBoZWlnaHQ6IDI0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5DYXJkSW5mb1RleHQgcDpmaXJzdC1jaGlsZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiR2FyYW1vbmRcIiwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ0LjhweDtcclxufVxyXG5cclxuLkNhcmRJbmZvVGV4dCBwOmxhc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XHJcbiAgY29sb3I6ICM0YzRjNGM7XHJcbn1cclxuXHJcbi5DYXJkaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLkNhcmRpbmZvIGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uQ2FyZGluZm8gZGl2IHAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XHJcbiAgY29sb3I6ICM0YzRjNGM7XHJcbn1cclxuXHJcbi5wb3N0ZXIgYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNUIwOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIGhlaWdodDogNTFweDtcclxufVxyXG5cclxuLkNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5DYXJkQWxsSW5mbyB7XHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBcclxufVxyXG5cclxuLmNvbnRlbmRDYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLkNhcmRGaXJzdEJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogNDgwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50Q2FyZEJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xyXG4gIC5jb250ZW5kQ2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGdhcDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDkwcHgpIHtcclxuICAuQ2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGdhcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5DYXJkRmlyc3RCb3gge1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRDYXJkQm94IHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTkwcHgpIHtcclxuICAuaW5mb2JveFRpdGVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGVuZENhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5DYXJkRGF0ZSBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgfVxyXG4gIC5DYXJkRGF0ZSB7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLkNhcmRJbmZvVGV4dCBwOmZpcnN0LWNoaWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0LjhweDtcclxuICB9XHJcblxyXG4gIC5DYXJkRmlyc3RCb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLkNhcmRJbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG4gIC5DYXJkSW1nIGltZyB7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gIH1cclxuXHJcbiAgLkNhcmRBbGxJbmZvIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICB9XHJcblxyXG4gIC5DYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjJweDtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuLnBvc3RlciAuYnRuLW1vcmUtY29udGFpbmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb3N0ZXIgLmJ0bi1tb3JlIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE4NSwgMTg1LCAxODUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5leHRyYS1jYXJkcy1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDI1cHg7XHJcbn1cclxuXHJcbi5leHRyYS1jYXJkcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogcG9wdXAgKi9cclxuXHJcbi50aWNrZXRzLXBvcHVwIHtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRpY2tldHMtcG9wdXAtb3ZlcmxheS5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICMwNWNkYWI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNyb3NzLWNsb3NlLWJ0bi1ib3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jcm9zcy1idG4taWNvbiB7XHJcbiAgei1pbmRleDogMTI7IHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDFyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGlja2V0cy1wb3B1cF9oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4udGlja2V0cy1wb3B1cF9kYXRlIHtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRpY2tldHMtcG9wdXBfZGF0ZSBwOmZpcnN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuLnRpY2tldHMtcG9wdXBfbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnRpY2tldHMtcG9wdXAtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IGhzbCgyMjIsIDQlLCA1MyUpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XHJcbn1cclxuXHJcbi50aWNrZXRzLXBvcHVwLWNhcmQtdGl0bGUgaW5wdXQge1xyXG4gIFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMS4xcmVtO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjIxLCAyMjUpO1xyXG59XHJcbi50aWNrZXRzLXBvcHVwLWNhcmQtdGl0bGUgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHJnYigxMTcsIDExNCwgMTE0KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi50aWNrZXRzLXBvcHVwX2NhcmQtaW5wdXQtYm94IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4udGlja2V0cy1wb3B1cF9jb250ZW50IGJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLyogbmV3IHdpbmRvdyBidG4gcmVzdWx0ICovXHJcblxyXG4ud2luZG93LW9yZGVyLXRpY2tldCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAtNTAwcHg7XHJcbiAgbGVmdDogMjMwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbiAgei1pbmRleDogMjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcblxyXG4ud2luZG93LWNhcmQtYm94IHtcclxuICB3aWR0aDogNDI1cHg7XHJcbn1cclxuLndpbmRvdy1vcmRlcl9oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHNub3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogcmdiKDAsIDE3NCwgMjU1KTtcclxuICBsZXR0ZXItc3BhY2luZzogMS4xMTExcHg7XHJcbn1cclxuLndpbmRvdy1vcmRlcl9zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGhzbCgxOTMsIDEwMCUsIDY5JSksIGhzbCgyMDBkZWcgOTcuNTYlIDUxLjc2JSkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogJ09wZW5TYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLndpbmRvdy1vcmRlcl9sb2dvYm94LXBhcmVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogOC4xcmVtO1xyXG4gIHJpZ2h0OiAzMCU7XHJcbiAgXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsIGhzbCgxOTMsIDEwMCUsIDY5JSksIGhzbCgyMDAsIDk4JSwgNTAlKSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xyXG59XHJcblxyXG4ud2luZG93LW9yZGVyLXRpY2tldCAud2luZG93LWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogOHJlbTtcclxuICByaWdodDogLTEwMnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMTExcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjb2xvcjogcmdiKDAsIDE3NCwgMjU1KTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjA4KSAwcHggOHB4IDRweCAwcHggaW5zZXQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODZweCkge1xyXG4gIC53aW5kb3ctb3JkZXItdGlja2V0IHtcclxuICAgIGxlZnQ6IDEzMHB4O1xyXG4gIH1cclxuICAud2luZG93LWNhcmQtYm94IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG4gIC53aW5kb3ctb3JkZXJfbG9nb2JveC1wYXJlbnQge1xyXG4gICAgcmlnaHQ6IDE1JTtcclxuICB9XHJcblxyXG4gIC53aW5kb3ctb3JkZXItc2VjdGlvbl90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MzJweCkge1xyXG4gIC50aWNrZXRzLXBvcHVwIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTBweCkge1xyXG4gIC50aWNrZXRzLXBvcHVwIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpY2tldHMtcG9wdXBfbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAudGlja2V0cy1wb3B1cF9oZWFkZXIge1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL2Nzcy9pbmZvQ2FyZHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUE0RDtFQUM1RCxnQkFBZ0I7O0VBRWhCLHlCQUF5QjtFQUN6Qiw0Q0FBNEQ7RUFDNUQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VB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QVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpRkFBaUY7RUFDakYsbUJBQW1CO0VBQ25CLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx5QkFBeUI7O0VBRXpCLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0FBQ2hCO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztFQUNYO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XFxyXFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXHJcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5pbmZvYm94VGl0ZWx7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbmZvYm94VGl0ZWwgZGl2e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb2JveFRpdGVsIHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9ib3hUaXRlbCBwOmxhc3QtY2hpbGQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmREYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiByZ2IoNzYgNzYgNzYpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5DYXJkRGF0ZSBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiA2NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQ2FyZERhdGUgZGl2Omxhc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uQ2FyZEltZyBpbWcge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgaGVpZ2h0OiAyNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmRJbmZvVGV4dCBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2FyYW1vbmRcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBsaW5lLWhlaWdodDogNDQuOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQ2FyZEluZm9UZXh0IHA6bGFzdC1jaGlsZCB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMi40cHg7XFxyXFxuICBjb2xvcjogIzRjNGM0YztcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmRpbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQ2FyZGluZm8gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmRpbmZvIGRpdiBwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjIuNHB4O1xcclxcbiAgY29sb3I6ICM0YzRjNGM7XFxyXFxufVxcclxcblxcclxcbi5wb3N0ZXIgYnV0dG9uIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNUIwOTM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHdpZHRoOiAxNzVweDtcXHJcXG4gIGhlaWdodDogNTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uQ2FyZEFsbEluZm8ge1xcclxcbiAgd2lkdGg6IDQyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbmRDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLkNhcmRGaXJzdEJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA0ODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDYXJkQm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxyXFxuICAuY29udGVuZENhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwOTBweCkge1xcclxcbiAgLkNhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5DYXJkRmlyc3RCb3gge1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudENhcmRCb3gge1xcclxcbiAgICB3aWR0aDogNzAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTkwcHgpIHtcXHJcXG4gIC5pbmZvYm94VGl0ZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW5kQ2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLkNhcmREYXRlIGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgfVxcclxcbiAgLkNhcmREYXRlIHtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQ2FyZEluZm9UZXh0IHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ0LjhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5DYXJkRmlyc3RCb3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQ2FyZEltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICB9XFxyXFxuICAuQ2FyZEltZyBpbWcge1xcclxcbiAgICB3aWR0aDogMjcwcHg7XFxyXFxuICAgIGhlaWdodDogMTkwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQ2FyZEFsbEluZm8ge1xcclxcbiAgICB3aWR0aDogMjcwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuQ2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMnB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RlciAuYnRuLW1vcmUtY29udGFpbmVyIHtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3RlciAuYnRuLW1vcmUge1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDE4NSwgMTg1LCAxODUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dHJhLWNhcmRzLWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dHJhLWNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHBvcHVwICovXFxyXFxuXFxyXFxuLnRpY2tldHMtcG9wdXAge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICB6LWluZGV4OiAxMTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aWNrZXRzLXBvcHVwLW92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogIzA1Y2RhYjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3Jvc3MtY2xvc2UtYnRuLWJveCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3Jvc3MtYnRuLWljb24ge1xcclxcbiAgei1pbmRleDogMTI7IHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMXJlbTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpY2tldHMtcG9wdXBfaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpY2tldHMtcG9wdXBfZGF0ZSB7XFxyXFxuICBsaW5lLWhlaWdodDogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpY2tldHMtcG9wdXBfZGF0ZSBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlja2V0cy1wb3B1cF9uYW1lIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpY2tldHMtcG9wdXAtY2FyZC10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGhzbCgyMjIsIDQlLCA1MyUpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlja2V0cy1wb3B1cC1jYXJkLXRpdGxlIGlucHV0IHtcXHJcXG4gIFxcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEuMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCAyMjEsIDIyNSk7XFxyXFxufVxcclxcbi50aWNrZXRzLXBvcHVwLWNhcmQtdGl0bGUgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiByZ2IoMTE3LCAxMTQsIDExNCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50aWNrZXRzLXBvcHVwX2NhcmQtaW5wdXQtYm94IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlja2V0cy1wb3B1cF9jb250ZW50IGJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuZXcgd2luZG93IGJ0biByZXN1bHQgKi9cXHJcXG5cXHJcXG4ud2luZG93LW9yZGVyLXRpY2tldCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogLTUwMHB4O1xcclxcbiAgbGVmdDogMjMwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctY2FyZC1ib3gge1xcclxcbiAgd2lkdGg6IDQyNXB4O1xcclxcbn1cXHJcXG4ud2luZG93LW9yZGVyX2hlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBzbm93O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEyNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjEwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMTc0LCAyNTUpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMTExMXB4O1xcclxcbn1cXHJcXG4ud2luZG93LW9yZGVyX3NlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIFxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDE3NXB4O1xcclxcblxcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGhzbCgxOTMsIDEwMCUsIDY5JSksIGhzbCgyMDBkZWcgOTcuNTYlIDUxLjc2JSkpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdy1vcmRlcl9sb2dvYm94LXBhcmVudCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDguMXJlbTtcXHJcXG4gIHJpZ2h0OiAzMCU7XFxyXFxuICBcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIFxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgd2lkdGg6IDkwcHg7XFxyXFxuICBoZWlnaHQ6IDkwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsIGhzbCgxOTMsIDEwMCUsIDY5JSksIGhzbCgyMDAsIDk4JSwgNTAlKSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdy1vcmRlci10aWNrZXQgLndpbmRvdy1idXR0b24ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA4cmVtO1xcclxcbiAgcmlnaHQ6IC0xMDJweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMS4xMTFweDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgY29sb3I6IHJnYigwLCAxNzQsIDI1NSk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjA4KSAwcHggOHB4IDRweCAwcHggaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODZweCkge1xcclxcbiAgLndpbmRvdy1vcmRlci10aWNrZXQge1xcclxcbiAgICBsZWZ0OiAxMzBweDtcXHJcXG4gIH1cXHJcXG4gIC53aW5kb3ctY2FyZC1ib3gge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxufVxcclxcbiAgLndpbmRvdy1vcmRlcl9sb2dvYm94LXBhcmVudCB7XFxyXFxuICAgIHJpZ2h0OiAxNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2luZG93LW9yZGVyLXNlY3Rpb25fdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDczMnB4KSB7XFxyXFxuICAudGlja2V0cy1wb3B1cCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTkwcHgpIHtcXHJcXG4gIC50aWNrZXRzLXBvcHVwIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudGlja2V0cy1wb3B1cF9uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpY2tldHMtcG9wdXBfaGVhZGVyIHtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uZXdzQ2FsZW5kYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5uZXdzQ29udGVudCAuTmV3c1RpdGVsVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRUIgR2FyYW1vbmRcIiwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogMTM2cHggMHB4IDYwcHggMHB4O1xyXG59XHJcblxyXG4ubWluaXBhZ2VCb3gge1xyXG4gIHdpZHRoOiAzMDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAzNnB4O1xyXG59XHJcblxyXG4ubWluaXBhZ2VCb3ggaW1nIHtcclxuICB3aWR0aDogMzA2cHg7XHJcbiAgaGVpZ2h0OiAyMDRweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4ubWluaXBhZ2VCb3ggLm1pbmlwYWdlVGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuLm1pbmlwYWdlQm94IC5taW5pcGFnZVRleHQgcDpmaXJzdC1jaGlsZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRUIgR2FyYW1vbmRcIiwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbn1cclxuXHJcbi5taW5pcGFnZUJveCAubWluaXBhZ2VUZXh0IHA6bGFzdC1jaGlsZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM0ZTRlNGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5taW5pcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGdhcDogMjRweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5cclxuLmNhbGVuZGFyIHtcclxuICB3aWR0aDogNTI2cHg7XHJcbiAgaGVpZ2h0OiAyNjRweDtcclxuICBwYWRkaW5nLXRvcDogMTM2cHg7XHJcbn1cclxuXHJcbi5jYWxlbmRhclByZXZpZXcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNhbGVuZGFyUHJldmlldyBkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyNHB4O1xyXG4gIGJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmNhbGVuZGFyUHJldmlldyBkaXYge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDIwcHggIGJsYWNrO1xyXG59XHJcblxyXG4uY2FsZW5kYXJQcmV2aWV3IHtcclxuICB3aWR0aDogNTI2cHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmNhbGVuZGFyUHJldmlldyBpbWd7XHJcbiAgd2lkdGg6IDUyNnB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5jYWxlbmRhckJvdHRvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIHdpZHRoOiA1MjZweDtcclxuICBoZWlnaHQ6IDI2NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTJweCAxMnB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FsZW5kYXJNb250aCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYWxlbmRhck1vbnRoIHAge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG59XHJcblxyXG4uY2FsZW5kYXJNb250aCBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDhweDtcclxufVxyXG4uY2FsZW5kYXJNb250aCBidXR0b24ge1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNWIwOTM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYWxlbmRhckRheSB7XHJcbiB3aWR0aDogNDBweDtcclxuIGhlaWdodDogNDBweDtcclxuIGJhY2tncm91bmQtY29sb3I6ICNhNmE2YTY7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbiBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiBjb2xvcjogd2hpdGU7XHJcblxyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhbGVuZGFyRGF5bmV3IHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YjA5MztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FsZW5kYXJEYXlDb3JuZXIxIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbn1cclxuLmNhbGVuZGFyRGF5Q29ybmVyNyB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxufVxyXG4uY2FsZW5kYXJEYXlDb3JuZXIyIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbn1cclxuLmNhbGVuZGFyRGF5Q29ybmVyOCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNhbGVuZGFyRGF0ZSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogNHB4O1xyXG59XHJcblxyXG4uY2FsZW5kYXJXZWVrIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweDtcclxuICBncmlkLWdhcDogNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI1MnB4KSB7XHJcbiAgLm5ld3NDYWxlbmRhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5taW5pcGFnZUJveCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWluaXBhZ2VCb3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuY2FsZW5kYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xyXG4gIC5taW5pcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTg2cHgpIHtcclxuICAuY2FsZW5kYXIge2Rpc3BsYXk6IG5vbmU7fVxyXG4gIC5taW5pcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDgwMCU7XHJcbiAgfVxyXG4gIC5taW5pcGFnZUJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3MvbmV3c0NhbGVuZGFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBNEQ7RUFDNUQsZ0JBQWdCOztFQUVoQix5QkFBeUI7RUFDekIsNENBQTREO0VBQzVELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtBQUNmOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7O0VBRWhDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsWUFBWTs7RUFFWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2Ysb0NBQW9DO0NBQ3BDLGdCQUFnQjtDQUNoQixZQUFZOztDQUVaLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixZQUFZOztFQUVaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlEQUF5RDtFQUN6RCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFLFdBQVcsYUFBYSxDQUFDO0VBQ3pCO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xcclxcbiAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxyXFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c0NhbGVuZGFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c0NvbnRlbnQgLk5ld3NUaXRlbFRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDEzNnB4IDBweCA2MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmlwYWdlQm94IHtcXHJcXG4gIHdpZHRoOiAzMDZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWluaXBhZ2VCb3ggaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDZweDtcXHJcXG4gIGhlaWdodDogMjA0cHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5taW5pcGFnZUJveCAubWluaXBhZ2VUZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWluaXBhZ2VCb3ggLm1pbmlwYWdlVGV4dCBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRUIgR2FyYW1vbmRcXFwiLCBzZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMzNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbmlwYWdlQm94IC5taW5pcGFnZVRleHQgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjNGU0ZTRlO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWluaXBhZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2FsZW5kYXIge1xcclxcbiAgd2lkdGg6IDUyNnB4O1xcclxcbiAgaGVpZ2h0OiAyNjRweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyUHJldmlldyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJQcmV2aWV3IGRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAyNHB4O1xcclxcbiAgYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJQcmV2aWV3IGRpdiB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkVCIEdhcmFtb25kXFxcIiwgc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMjBweCAgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhclByZXZpZXcge1xcclxcbiAgd2lkdGg6IDUyNnB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyUHJldmlldyBpbWd7XFxyXFxuICB3aWR0aDogNTI2cHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYWxlbmRhckJvdHRvbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xcclxcbiAgcGFkZGluZzogMjRweDtcXHJcXG4gIHdpZHRoOiA1MjZweDtcXHJcXG4gIGhlaWdodDogMjY0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEycHggMTJweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJNb250aCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyTW9udGggcCB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsZW5kYXJNb250aCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuLmNhbGVuZGFyTW9udGggYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA0OHB4O1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcblxcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDViMDkzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyRGF5IHtcXHJcXG4gd2lkdGg6IDQwcHg7XFxyXFxuIGhlaWdodDogNDBweDtcXHJcXG4gYmFja2dyb3VuZC1jb2xvcjogI2E2YTZhNjtcXHJcXG4gZm9udC1zaXplOiAxNnB4O1xcclxcbiBmb250LWZhbWlseTogXFxcIkZpcmEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gZGlzcGxheTogZmxleDtcXHJcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyRGF5bmV3IHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1YjA5MztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuIFxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyRGF5Q29ybmVyMSB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheUNvcm5lcjcge1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuLmNhbGVuZGFyRGF5Q29ybmVyMiB7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5jYWxlbmRhckRheUNvcm5lcjgge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyRGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1nYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGVuZGFyV2VlayB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweCA0MHB4O1xcclxcbiAgZ3JpZC1nYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTJweCkge1xcclxcbiAgLm5ld3NDYWxlbmRhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWluaXBhZ2VCb3ggaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWluaXBhZ2VCb3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FsZW5kYXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xcclxcbiAgLm1pbmlwYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA3MjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4NnB4KSB7XFxyXFxuICAuY2FsZW5kYXIge2Rpc3BsYXk6IG5vbmU7fVxcclxcbiAgLm1pbmlwYWdlIHtcXHJcXG4gICAgaGVpZ2h0OiA4MDAlO1xcclxcbiAgfVxcclxcbiAgLm1pbmlwYWdlQm94IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2hvcnRzQW5vbnNlcyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG59XHJcblxyXG4uYW5vbnNlc1RleHQge1xyXG4gIHBhZGRpbmctdG9wOiAyMDNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYW5vbnNlc1RleHQgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDI1cHg7XHJcbn1cclxuLmFub25zZXNUZXh0IGRpdiBwIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBzZXJpZjtcclxufVxyXG5cclxuLmFub25zZXNUZXh0IC5zaG9ydHNUZXh0IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBzZXJpZjtcclxufVxyXG5cclxuLmFub25zZXNCb3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMjdweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYW5vbnNlc0JveDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFub25zZXNEYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDViMDkzO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDk4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmFub25zZXNEYXRlIHA6Zmlyc3QtY2hpbGQge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFub25zZXNEYXRlIHA6bGFzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiRUIgR2FyYW1vbmRcIiwgc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYW5vbnNlc0JveCBkaXY6bGFzdC1jaGlsZCBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFub25zZXNkb2RvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDI0cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAuYW5vbnNlc1RleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMjRweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDhweCkge1xyXG4gIC5hbm9uc2VzZG9kbyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDFweCkge1xyXG4gIC5hbm9uc2VzRGF0ZSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNzhweDtcclxuICB9XHJcbiAgLmFub25zZXNEYXRlIHA6bGFzdC1jaGlsZCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLmFub25zZXNCb3gge1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuICAuYW5vbnNlc0JveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyOHB4KSB7XHJcbiAgLmFub25zZXNCb3ggZGl2Omxhc3QtY2hpbGQgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgLmFub25zZXNkb2RvIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIGFub3VuY2VzIG1vZGFsICovXHJcblxyXG4uYW5vdW5jZS1tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYW5vdW5jZS1tb2RhbC5hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIFxyXG59XHJcbi5vdmVybGF5LmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5tb2RhbF9ib3gtdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWZiZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiRUIgR2FyYW1vbmRcIiwgc2VyaWY7XHJcbiAgY29sb3I6IHJnYigxLCAxLCAxKTtcclxufVxyXG5cclxuLm1vZGFsX2JveC1kYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWxfYm94LWRhdGUgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMSwgMSwgMSk7XHJcbn1cclxuLm1vZGFsX2JveC1kYXRlIGRpdjpsYXN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoMSwgMSwgMSk7XHJcbn1cclxuXHJcbi5tb2RhbC1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jcm9zcy1pY29uIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9kYWxfZGVzY3JpcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWZiZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5hbm9uc2VzRGF0ZSBwOmZpcnN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogXCJFQiBHYXJhbW9uZFwiLCBzZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hbm9uc2VzRGF0ZSBwOmxhc3QtY2hpbGQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVCIEdhcmFtb25kXCIsIHNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcyM3B4KSB7XHJcbiAgLm1vZGFsLWltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC5hbm91bmNlLW1vZGFsIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgLm1vZGFsX2JveC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY3NzL3Nob3J0c0Fub25zZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUE0RDtFQUM1RCxnQkFBZ0I7O0VBRWhCLHlCQUF5QjtFQUN6Qiw0Q0FBNEQ7RUFDNUQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUlBQXFJO0VBQ3JJLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7OztBQUdBLG1CQUFtQjs7QUFFbkI7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCx5Q0FBeUM7RUFDekMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixvQkFBb0I7O0FBRXRCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcXHJcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcclxcbiAgc3JjOiB1cmwoL3NyYy9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3J0c0Fub25zZXMge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5vbnNlc1RleHQge1xcclxcbiAgcGFkZGluZy10b3A6IDIwM3B4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5vbnNlc1RleHQgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG59XFxyXFxuLmFub25zZXNUZXh0IGRpdiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkVCIEdhcmFtb25kXFxcIiwgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5hbm9uc2VzVGV4dCAuc2hvcnRzVGV4dCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5vbnNlc0JveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDI3cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG4uYW5vbnNlc0JveDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYW5vbnNlc0RhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDViMDkzO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA5OHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFub25zZXNEYXRlIHA6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRUIgR2FyYW1vbmRcXFwiLCBzZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFub25zZXNEYXRlIHA6bGFzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5vbnNlc0JveCBkaXY6bGFzdC1jaGlsZCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkZpcmEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5hbm9uc2VzZG9kbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcXHJcXG4gIC5hbm9uc2VzVGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTA4cHgpIHtcXHJcXG4gIC5hbm9uc2VzZG9kbyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMXB4KSB7XFxyXFxuICAuYW5vbnNlc0RhdGUge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA3OHB4O1xcclxcbiAgfVxcclxcbiAgLmFub25zZXNEYXRlIHA6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgfVxcclxcbiAgLmFub25zZXNCb3gge1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuICAuYW5vbnNlc0JveCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzI4cHgpIHtcXHJcXG4gIC5hbm9uc2VzQm94IGRpdjpsYXN0LWNoaWxkIHAge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG4gIC5hbm9uc2VzZG9kbyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBhbm91bmNlcyBtb2RhbCAqL1xcclxcblxcclxcbi5hbm91bmNlLW1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5vdW5jZS1tb2RhbC5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBcXHJcXG59XFxyXFxuLm92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9ib3gtdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZmJmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkVCIEdhcmFtb25kXFxcIiwgc2VyaWY7XFxyXFxuICBjb2xvcjogcmdiKDEsIDEsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfYm94LWRhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9ib3gtZGF0ZSBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgY29sb3I6IHJnYigxLCAxLCAxKTtcXHJcXG59XFxyXFxuLm1vZGFsX2JveC1kYXRlIGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRUIgR2FyYW1vbmRcXFwiLCBzZXJpZjtcXHJcXG4gIGNvbG9yOiByZ2IoMSwgMSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxyXFxuICB3aWR0aDogNDUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5jcm9zcy1pY29uIHtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIHJpZ2h0OiAxMHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfZGVzY3JpcHRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZmJmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5vbnNlc0RhdGUgcDpmaXJzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJFQiBHYXJhbW9uZFxcXCIsIHNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5vbnNlc0RhdGUgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkVCIEdhcmFtb25kXFxcIiwgc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MjNweCkge1xcclxcbiAgLm1vZGFsLWltZyB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG4gIC5hbm91bmNlLW1vZGFsIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcbiAgLm1vZGFsX2JveC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2VjdGlvbk9wZXJhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxODRweDtcclxufVxyXG5cclxuLmJhbm5lck9wZXJhIGltZyB7XHJcbiAgd2lkdGg6IDg1NnB4O1xyXG4gIGhlaWdodDogNDk3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnNlY3Rpb25PcGVyYUNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uT3BlcmFDYXJkIGltZyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMTZweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnNlY3Rpb25PcGVyYUNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggOHB4IHJnYigyMTYsIDIxNiwgMjE2KTtcclxufVxyXG5cclxuLnNlY3Rpb25PcGVyYUNhcmQgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzEwcHgpIHtcclxuICAuc2VjdGlvbk9wZXJhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25PcGVyYUNhcmQge1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25PcGVyYUJsb2NrIHtcclxuICAgIHdpZHRoOiAxMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuICAuYmFubmVyT3BlcmEgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjaW1nLXNjZW5lLTEge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjMwcHgpIHtcclxuICAuc2VjdGlvbk9wZXJhQmxvY2sge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZWN0aW9uT3BlcmFDYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExODhweCkge1xyXG4gIC5zZWN0aW9uT3BlcmFCbG9jayB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICB9XHJcbiAgXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkzNXB4KSB7XHJcbiAgLnNlY3Rpb25PcGVyYUJsb2NrIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIHJvdy1nYXA6IDBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MnB4KSB7XHJcbiAgLnNlY3Rpb25PcGVyYUJsb2NrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvY3NzL3ZpZXdPcGVyYS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQTREO0VBQzVELGdCQUFnQjs7RUFFaEIseUJBQXlCO0VBQ3pCLDRDQUE0RDtFQUM1RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0VBQ1g7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQ0FBa0M7RUFDcEM7O0FBRUY7QUFDQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XFxyXFxuICBzcmM6IHVybCgvc3JjL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXHJcXG4gIHNyYzogdXJsKC9zcmMvYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT3BlcmEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE4NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyT3BlcmEgaW1nIHtcXHJcXG4gIHdpZHRoOiA4NTZweDtcXHJcXG4gIGhlaWdodDogNDk3cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT3BlcmFDYXJkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT3BlcmFDYXJkIGltZyB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAxNnB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uT3BlcmFDYXJkOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggOHB4IHJnYigyMTYsIDIxNiwgMjE2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25PcGVyYUNhcmQgcCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMTBweCkge1xcclxcbiAgLnNlY3Rpb25PcGVyYSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VjdGlvbk9wZXJhQ2FyZCB7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWN0aW9uT3BlcmFCbG9jayB7XFxyXFxuICAgIHdpZHRoOiAxMTUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5iYW5uZXJPcGVyYSBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gICNpbWctc2NlbmUtMSB7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjMwcHgpIHtcXHJcXG4gIC5zZWN0aW9uT3BlcmFCbG9jayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnNlY3Rpb25PcGVyYUNhcmQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExODhweCkge1xcclxcbiAgLnNlY3Rpb25PcGVyYUJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTM1cHgpIHtcXHJcXG4gIC5zZWN0aW9uT3BlcmFCbG9jayB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gICAgcm93LWdhcDogMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjgycHgpIHtcXHJcXG4gIC5zZWN0aW9uT3BlcmFCbG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvY29uY2VydC1sb2dvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZmVtYWxlLXBpbmsuYXZpZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZmVtYWxlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaW1nLWRyYWdvbi5qZmlmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbWctbGlicmFyeS5qZmlmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbWctb3BlcmEtZXZlbnQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbWctb3BlcmEtc2NlbmUtYmx1ZS5qZmlmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbWctb3BlcmEtc2NlbmUtcmVkLmpmaWZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ltZy1vcGVyYS1zZWF0cy12aWV3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaW1nLXBlb3BsZS5qZmlmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tYWxlLXRhYmVsLmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nZW5lcmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dlbmVyYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZm9DYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmZvQ2FyZHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld3NDYWxlbmRhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdzQ2FsZW5kYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nob3J0c0Fub25zZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hvcnRzQW5vbnNlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmlld09wZXJhLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZpZXdPcGVyYS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gY3NzXHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9jc3MvZm9vdGVyLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvY3NzL2dlbmVyYWwuY3NzXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9jc3MvaGVhZGVyLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMvY3NzL2luZm9DYXJkcy5jc3NcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL2Nzcy9uZXdzQ2FsZW5kYXIuY3NzXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9jc3Mvc2hvcnRzQW5vbnNlcy5jc3NcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzL2Nzcy92aWV3T3BlcmEuY3NzXCI7XHJcblxyXG4vLyBpbWFnZXNcclxuaW1wb3J0IFwiLi9hc3NldHMvaW1hZ2VzL2NvbmNlcnQtbG9nby5wbmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbWFsZS1waW5rLmF2aWZcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvaW1hZ2VzL2ZlbWFsZS5qcGdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvaW1hZ2VzL2ltZy1kcmFnb24uamZpZlwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9pbWFnZXMvaW1nLWxpYnJhcnkuamZpZlwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9pbWFnZXMvaW1nLW9wZXJhLWV2ZW50LmpwZ1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9pbWFnZXMvaW1nLW9wZXJhLXNjZW5lLWJsdWUuamZpZlwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9pbWFnZXMvaW1nLW9wZXJhLXNjZW5lLXJlZC5qZmlmXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL2ltYWdlcy9pbWctb3BlcmEtc2VhdHMtdmlldy5qcGdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvaW1hZ2VzL2ltZy1wZW9wbGUuamZpZlwiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9pbWFnZXMvbWFsZS10YWJlbC5qcGdcIjtcclxuXHJcbi8vIHNjcmlwdHNcclxuaW1wb3J0IFwiLi9qcy9uYXZiYXIuanNcIjtcclxuaW1wb3J0IHsgY2hhbmdlUGhvdG9zLCBWaWV3QnV0dG9ucyB9IGZyb20gXCIuL2pzL3ZpZXctb3BlcmEuanNcIjtcclxuaW1wb3J0IHsgdXBkYXRlQ2FyZCwgdXBkYXRlQ2FyZDIgfSBmcm9tIFwiLi9qcy9uZXdzLmpzXCI7XHJcbmltcG9ydCB7IEJ0bnR4dENvbnRlbnQgfSBmcm9tIFwiLi9qcy9wb3N0ZXIuanNcIjtcclxuaW1wb3J0IHsgdXBkYXRlTW9udGggfSBmcm9tIFwiLi9qcy9uZXdzQ2FsZW5kYXIuanNcIjtcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gXCIuL2pzL2JyaWVmLmpzXCI7XHJcblxyXG5cclxuLy8gVmlld0J1dHRvblxyXG5jb25zdCB2aWV3QnV0dG9uMSA9IG5ldyBWaWV3QnV0dG9ucygnLi9pbWFnZXMvaW1nLW9wZXJhLXNjZW5lLWJsdWUuamZpZicsICfCq1BlcmZvcm1hbmNlL09wZXJhwrsnKTtcclxuY29uc3Qgdmlld0J1dHRvbjIgPSBuZXcgVmlld0J1dHRvbnMoJy4vaW1hZ2VzL2ltZy1vcGVyYS1zZWF0cy12aWV3LmpwZycsICfCq09wZXJhIFNlYXRpbmfCuycpO1xyXG5jb25zdCB2aWV3QnV0dG9uMyA9IG5ldyBWaWV3QnV0dG9ucygnLi9pbWFnZXMvaW1nLW9wZXJhLWV2ZW50LmpwZycsICfCq09wZXJhIEV2ZW50c8K7Jyk7XHJcblxyXG52aWV3QnV0dG9uMS5jcmVhdGVWaWV3QnRuKCk7XHJcbnZpZXdCdXR0b24yLmNyZWF0ZVZpZXdCdG4oKTtcclxudmlld0J1dHRvbjMuY3JlYXRlVmlld0J0bigpO1xyXG5cclxuY2hhbmdlUGhvdG9zKCk7XHJcblxyXG5cclxuLy8gdXByYXRlZCBjYXJkc1xyXG51cGRhdGVDYXJkKCk7XHJcbnVwZGF0ZUNhcmQyKClcclxuXHJcbi8vQnV0dG9uIHRleHRDb250ZW50XHJcbkJ0bnR4dENvbnRlbnQoKTtcclxuXHJcbnVwZGF0ZU1vbnRoKCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgY2xvc2VNb2RhbChtb2RhbCk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIkJyaWVmIiwiZGF0ZURheSIsImRhdGVNb250aCIsInRpdGxlIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNyZWF0ZUJyaWVmIiwiYW5ub3VuY2VzQm94IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYW5ub3VuY2VzRGF0ZSIsImRheSIsIm1vbnRoIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJ0aXRsZUJveCIsInRpdGxlVGV4dCIsImJyaWVmRGF0YSIsImNhcmRzQ2FudGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImJyaWVmcyIsIm9wZW5Nb2RhbEJ0bnMiLCJtYXAiLCJicmllZiIsImJyaWVmRWxlbWVudCIsInB1c2giLCJjbG9zZUJ0biIsIm92ZXJsYXkiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGFsIiwib3Blbk1vZGFsIiwiY29uY2F0IiwibW9kYWxJbWciLCJzcmMiLCJjbG9zZU1vZGFsIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibmV3c0NhcmRzIiwiaW1nRWxlbSIsInRpdGxlRWxlbSIsImRlc2NyaXB0aW9uRWxlbSIsImlkeCIsInVwZGF0ZUNhcmQiLCJfbmV3c0NhcmRzJGlkeCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJpbWdFbGVtMiIsInRpdGxlRWxlbTIiLCJkZXNjcmlwdGlvbkVsZW0yIiwiaWR4MiIsInVwZGF0ZUNhcmQyIiwiX25ld3NDYXJkcyRpZHgyIiwibmV4dEJ0biIsImJhY2tCdG4iLCJtb250aEVsZW0iLCJjdXJyZW50SW5kZXgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibW9udGhzIiwidXBkYXRlTW9udGgiLCJzZXRJdGVtIiwiQnRudHh0Q29udGVudCIsImJ0bk1vcmUiLCJleHRyYUNhcmRzIiwidG9nZ2xlIiwib3JkZXJUaWNrZXRzQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsInRpY2tldHNQb3B1cENvbnRhaW5lciIsInRpY2tldHNQb3B1cE92ZXJsYXkiLCJ0aWNrZXRzQ3Jvc3NJY29uIiwiY3Jvc3NDbG9zZUJ0bkJveCIsInRpY2tldHNQb3B1cERhdGVEYXkiLCJ0aWNrZXRzUG9wdXBEYXRlTW9udGgiLCJ0aWNrZXRzUG9wdXBOYW1lIiwib3BlblRpY2tldHNQb3B1cCIsImNhcmQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZXZlbnROYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xvc2VUaWNrZXRzUG9wdXAiLCJoaWRlU2Nyb2xsYmFyIiwiYm9keSIsIm92ZXJmbG93WSIsInNob3dTY3JvbGxiYXIiLCJwb3BGdW5jIiwib3BlbklucHV0UG9wdXAiLCJpbnB1dHMiLCJhbGxGaWxsZWQiLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsInN0YXJ0QW5pbWF0aW9uIiwiQ2FyZENvbnRhaW5lciIsImJvdHRvbVBvc2l0aW9uIiwib3BhY2l0eSIsInRhcmdldEJvdHRvbSIsInRhcmdldE9wYWNpdHkiLCJhbmltYXRpb25TcGVlZCIsInN0ZXAiLCJib3R0b20iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXNldEFuaW1hdGlvbiIsInJldmVyc2VCb3R0b21Qb3NpdGlvbiIsInJldmVyY2VPcGFjaXR5IiwiY2hhbmdlUGhvdG9zIiwibWFpbkltZyIsInZpZXdCdXR0b25zIiwibWFpbkltZ0VsZW0iLCJidG4iLCJidG5JbWdTcmMiLCJWaWV3QnV0dG9ucyIsInRleHQiLCJjcmVhdGVWaWV3QnRuIiwiYnV0dG9uQm94IiwiaWQiLCJpbWciLCJwYXJhZ3JhcGgiLCJ2aWV3QnRuc0NvbnRhaW5lciIsInZpZXdCdXR0b24xIiwidmlld0J1dHRvbjIiLCJ2aWV3QnV0dG9uMyIsImUiXSwic291cmNlUm9vdCI6IiJ9