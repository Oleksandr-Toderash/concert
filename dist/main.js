/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 928:
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

/***/ 385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(953), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(953), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 59:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(953), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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


`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(953), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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






`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(953), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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

`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(953), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(953), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
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

/***/ 417:
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

/***/ 601:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 72:
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

/***/ 659:
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

/***/ 540:
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

/***/ 56:
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

/***/ 825:
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

/***/ 113:
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

/***/ 953:
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
/******/ 			792: 0
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

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/footer.css
var footer = __webpack_require__(385);
;// ./src/assets/styles/css/footer.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(footer/* default */.A, options);




       /* harmony default export */ const css_footer = (footer/* default */.A && footer/* default */.A.locals ? footer/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/general.css
var general = __webpack_require__(470);
;// ./src/assets/styles/css/general.css

      
      
      
      
      
      
      
      
      

var general_options = {};

general_options.styleTagTransform = (styleTagTransform_default());
general_options.setAttributes = (setAttributesWithoutAttributes_default());
general_options.insert = insertBySelector_default().bind(null, "head");
general_options.domAPI = (styleDomAPI_default());
general_options.insertStyleElement = (insertStyleElement_default());

var general_update = injectStylesIntoStyleTag_default()(general/* default */.A, general_options);




       /* harmony default export */ const css_general = (general/* default */.A && general/* default */.A.locals ? general/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/header.css
var header = __webpack_require__(59);
;// ./src/assets/styles/css/header.css

      
      
      
      
      
      
      
      
      

var header_options = {};

header_options.styleTagTransform = (styleTagTransform_default());
header_options.setAttributes = (setAttributesWithoutAttributes_default());
header_options.insert = insertBySelector_default().bind(null, "head");
header_options.domAPI = (styleDomAPI_default());
header_options.insertStyleElement = (insertStyleElement_default());

var header_update = injectStylesIntoStyleTag_default()(header/* default */.A, header_options);




       /* harmony default export */ const css_header = (header/* default */.A && header/* default */.A.locals ? header/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/infoCards.css
var infoCards = __webpack_require__(583);
;// ./src/assets/styles/css/infoCards.css

      
      
      
      
      
      
      
      
      

var infoCards_options = {};

infoCards_options.styleTagTransform = (styleTagTransform_default());
infoCards_options.setAttributes = (setAttributesWithoutAttributes_default());
infoCards_options.insert = insertBySelector_default().bind(null, "head");
infoCards_options.domAPI = (styleDomAPI_default());
infoCards_options.insertStyleElement = (insertStyleElement_default());

var infoCards_update = injectStylesIntoStyleTag_default()(infoCards/* default */.A, infoCards_options);




       /* harmony default export */ const css_infoCards = (infoCards/* default */.A && infoCards/* default */.A.locals ? infoCards/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/newsCalendar.css
var newsCalendar = __webpack_require__(483);
;// ./src/assets/styles/css/newsCalendar.css

      
      
      
      
      
      
      
      
      

var newsCalendar_options = {};

newsCalendar_options.styleTagTransform = (styleTagTransform_default());
newsCalendar_options.setAttributes = (setAttributesWithoutAttributes_default());
newsCalendar_options.insert = insertBySelector_default().bind(null, "head");
newsCalendar_options.domAPI = (styleDomAPI_default());
newsCalendar_options.insertStyleElement = (insertStyleElement_default());

var newsCalendar_update = injectStylesIntoStyleTag_default()(newsCalendar/* default */.A, newsCalendar_options);




       /* harmony default export */ const css_newsCalendar = (newsCalendar/* default */.A && newsCalendar/* default */.A.locals ? newsCalendar/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/shortsAnonses.css
var shortsAnonses = __webpack_require__(452);
;// ./src/assets/styles/css/shortsAnonses.css

      
      
      
      
      
      
      
      
      

var shortsAnonses_options = {};

shortsAnonses_options.styleTagTransform = (styleTagTransform_default());
shortsAnonses_options.setAttributes = (setAttributesWithoutAttributes_default());
shortsAnonses_options.insert = insertBySelector_default().bind(null, "head");
shortsAnonses_options.domAPI = (styleDomAPI_default());
shortsAnonses_options.insertStyleElement = (insertStyleElement_default());

var shortsAnonses_update = injectStylesIntoStyleTag_default()(shortsAnonses/* default */.A, shortsAnonses_options);




       /* harmony default export */ const css_shortsAnonses = (shortsAnonses/* default */.A && shortsAnonses/* default */.A.locals ? shortsAnonses/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/css/viewOpera.css
var viewOpera = __webpack_require__(402);
;// ./src/assets/styles/css/viewOpera.css

      
      
      
      
      
      
      
      
      

var viewOpera_options = {};

viewOpera_options.styleTagTransform = (styleTagTransform_default());
viewOpera_options.setAttributes = (setAttributesWithoutAttributes_default());
viewOpera_options.insert = insertBySelector_default().bind(null, "head");
viewOpera_options.domAPI = (styleDomAPI_default());
viewOpera_options.insertStyleElement = (insertStyleElement_default());

var viewOpera_update = injectStylesIntoStyleTag_default()(viewOpera/* default */.A, viewOpera_options);




       /* harmony default export */ const css_viewOpera = (viewOpera/* default */.A && viewOpera/* default */.A.locals ? viewOpera/* default */.A.locals : undefined);

;// ./src/assets/images/concert-logo.png
/* harmony default export */ const concert_logo = (__webpack_require__.p + "images/concert-logo.png");
;// ./src/assets/images/female-pink.avif
/* harmony default export */ const female_pink = (__webpack_require__.p + "images/female-pink.avif");
;// ./src/assets/images/female.jpg
/* harmony default export */ const female = (__webpack_require__.p + "images/female.jpg");
;// ./src/assets/images/img-dragon.jfif
/* harmony default export */ const img_dragon = (__webpack_require__.p + "images/img-dragon.jfif");
;// ./src/assets/images/img-library.jfif
/* harmony default export */ const img_library = (__webpack_require__.p + "images/img-library.jfif");
;// ./src/assets/images/img-opera-event.jpg
/* harmony default export */ const img_opera_event = (__webpack_require__.p + "images/img-opera-event.jpg");
;// ./src/assets/images/img-opera-scene-blue.jfif
/* harmony default export */ const img_opera_scene_blue = (__webpack_require__.p + "images/img-opera-scene-blue.jfif");
;// ./src/assets/images/img-opera-scene-red.jfif
/* harmony default export */ const img_opera_scene_red = (__webpack_require__.p + "images/img-opera-scene-red.jfif");
;// ./src/assets/images/img-opera-seats-view.jpg
/* harmony default export */ const img_opera_seats_view = (__webpack_require__.p + "images/img-opera-seats-view.jpg");
;// ./src/assets/images/img-people.jfif
/* harmony default export */ const img_people = (__webpack_require__.p + "images/img-people.jfif");
;// ./src/assets/images/male-tabel.jpg
/* harmony default export */ const male_tabel = (__webpack_require__.p + "images/male-tabel.jpg");
// EXTERNAL MODULE: ./src/js/navbar.js
var navbar = __webpack_require__(928);
;// ./src/js/view-opera.js
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
;// ./src/js/news.js
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
;// ./src/js/poster.js
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
;// ./src/js/newsCalendar.js
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
;// ./src/js/brief.js
function brief_typeof(o) { "@babel/helpers - typeof"; return brief_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, brief_typeof(o); }
function brief_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function brief_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, brief_toPropertyKey(o.key), o); } }
function brief_createClass(e, r, t) { return r && brief_defineProperties(e.prototype, r), t && brief_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function brief_toPropertyKey(t) { var i = brief_toPrimitive(t, "string"); return "symbol" == brief_typeof(i) ? i : i + ""; }
function brief_toPrimitive(t, r) { if ("object" != brief_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != brief_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Brief = /*#__PURE__*/function () {
  function Brief(dateDay, dateMonth, title, imgUrl, description) {
    brief_classCallCheck(this, Brief);
    this.dateDay = dateDay;
    this.dateMonth = dateMonth;
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
  }
  return brief_createClass(Brief, [{
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
;// ./src/app.js
// css








// images












// scripts







// ViewButton
var viewButton1 = new ViewButtons('./images/img-opera-scene-blue.jfif', '«Performance/Opera»');
var viewButton2 = new ViewButtons('./images/img-opera-seats-view.jpg', '«Opera Seating»');
var viewButton3 = new ViewButtons('./images/img-opera-event.jpg', '«Opera Events»');
viewButton1.createViewBtn();
viewButton2.createViewBtn();
viewButton3.createViewBtn();
changePhotos();

// uprated cards
updateCard();
updateCard2();

//Button textContent
BtntxtContent();
updateMonth();
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal(modal);
  }
});
})();

/******/ })()
;