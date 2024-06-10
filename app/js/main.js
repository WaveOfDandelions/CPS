/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/accordeon.js":
/*!*************************!*\
  !*** ./js/accordeon.js ***!
  \*************************/
/***/ (() => {

var showText = document.querySelector(".services__more");
var hideText = document.querySelector(".services__more_hidden");
var hiddenArticle = document.querySelector(".services__article_display");
var showBrands = document.querySelector(".brands__show");
var hideBrands = document.querySelector(".brands__hide");
var companiesList = document.querySelectorAll(".brands__list-item:nth-child(n + 9):nth-child(-n + 1000)");
var showDevices = document.querySelector(".repair__show");
var hideDevices = document.querySelector(".repair__hide");
var devicesList = document.querySelectorAll(".repair__list-item:nth-child(n + 5):nth-child(-n + 1000)");
showText.addEventListener("click", function (e) {
  e.preventDefault();
  hiddenArticle.style.display = "block";
  showText.style.display = "none";
  hideText.style.display = "block";
});
hideText.addEventListener("click", function (e) {
  e.preventDefault();
  hiddenArticle.style.display = "none";
  showText.style.display = "block";
  hideText.style.display = "none";
});
showBrands.addEventListener("click", function (e) {
  e.preventDefault();
  showBrands.style.display = "none";
  companiesList.forEach(function (element) {
    element.style.display = "flex";
  });
  hideBrands.style.display = "block";
});
hideBrands.addEventListener("click", function (e) {
  e.preventDefault();
  showBrands.style.display = "block";
  companiesList.forEach(function (element) {
    element.style.display = "none";
  });
  hideBrands.style.display = "none";
});
showDevices.addEventListener("click", function (e) {
  e.preventDefault();
  showDevices.style.display = "none";
  devicesList.forEach(function (element) {
    element.style.display = "flex";
  });
  hideDevices.style.display = "block";
});
hideDevices.addEventListener("click", function (e) {
  e.preventDefault();
  showDevices.style.display = "block";
  devicesList.forEach(function (element) {
    element.style.display = "none";
  });
  hideDevices.style.display = "none";
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay */ "./js/overlay.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordeon */ "./js/accordeon.js");
/* harmony import */ var _accordeon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_accordeon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swiper */ "./js/swiper.js");







/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ (() => {

var callButton = document.querySelectorAll(".button-call");
var feedbackButton = document.querySelectorAll(".button-feedback");
var modalCall = document.querySelectorAll(".modal__wrapper");
var modalClose = document.querySelectorAll(".modal__close");
var overlayContent = document.querySelector(".overlay__content");
var appWrapper = document.querySelector(".app-wrapper");
var header = document.querySelector(".header");
var body = document.querySelector("body");

for (var i = 0; i < callButton.length; i++) {
  callButton[i].addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("restrictScroll");
    body.classList.add("restrictScroll");
    header.classList.toggle("faded");
    overlayContent.classList.toggle("faded");
    appWrapper.classList.toggle("faded");
    modalCall[0].classList.toggle("open");
    modalClose[0].classList.add("open");
  });
}

for (var _i = 0; _i < feedbackButton.length; _i++) {
  feedbackButton[_i].addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("restrictScroll");
    body.classList.add("restrictScroll");
    header.classList.toggle("faded");
    overlayContent.classList.toggle("faded");
    appWrapper.classList.toggle("faded");
    modalCall[1].classList.toggle("open");
    modalClose[1].classList.add("open");
  });
}

var _loop = function _loop(_i2) {
  modalClose[_i2].addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("restrictScroll");
    body.classList.add("restrictScroll");

    modalCall[_i2].classList.remove("open");

    header.classList.toggle("faded");
    overlayContent.classList.toggle("faded");
    appWrapper.classList.toggle("faded");

    modalClose[_i2].classList.remove("open");
  });
};

for (var _i2 = 0; _i2 < modalClose.length; _i2++) {
  _loop(_i2);
}

/***/ }),

/***/ "./js/overlay.js":
/*!***********************!*\
  !*** ./js/overlay.js ***!
  \***********************/
/***/ (() => {

var burger = document.querySelector(".header__button-burger");
var burgerOverlay = document.querySelector(".overlay__button-burger");
var lines = document.querySelector(".line-container");
var burgerTransform = document.querySelector(".header__content-burger-container");
var appWrapper = document.querySelector(".app-wrapper");
var overlay = document.querySelector(".overlay");
var header = document.querySelector(".header");
var body = document.querySelector("body");
burger.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("restrictScroll");
  burgerTransform.classList.toggle("open");
  overlay.classList.toggle("open");
  header.classList.toggle("faded");
  appWrapper.classList.toggle("faded");
  lines.classList.toggle("open");
});
burgerOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("restrictScroll");
  overlay.classList.toggle("open");
  header.classList.toggle("faded");
  appWrapper.classList.toggle("faded");
  lines.classList.toggle("open");
  burgerTransform.classList.toggle("open");
});

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "../node_modules/swiper/swiper-bundle.mjs");

new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".services__swiper-slider", {
  direction: "horizontal",
  freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000
  }
});
new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".brands__swiper-slider", {
  direction: "horizontal",
  freeMode: true,
  watchSlidesProgress: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".repair__swiper-slider", {
  direction: "horizontal",
  freeMode: true,
  watchSlidesProgress: true,
  centeredSlides: true,
  slidesPerView: "1",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".prices__swiper-slider", {
  direction: "horizontal",
  freeMode: true,
  watchSlidesProgress: true,
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/close.svg */ "./images/icons/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ "./images/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/call.svg */ "./images/icons/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/chat.svg */ "./images/icons/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/user.svg */ "./images/icons/user.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/repair.svg */ "./images/icons/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/search.svg */ "./images/icons/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/search-mobile.svg */ "./images/icons/search-mobile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/intro-desktop.jpeg */ "./images/intro-desktop.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/intro.jpeg */ "./images/intro.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/lenovo.png */ "./images/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/dropdown.svg */ "./images/icons/dropdown.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\t<head>\r\n\t\t<meta charset=\"UTF-8\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n\t\t<title>CPS</title>\r\n\t</head>\r\n\r\n\t<body>\r\n\t\t<div class=\"modal modal-call\">\r\n\t\t\t<button class=\"button modal__close\">\r\n\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" />\r\n\t\t\t</button>\r\n\t\t\t<div class=\"modal__wrapper\">\r\n\t\t\t\t<div class=\"modal__content\">\r\n\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t<h2 class=\"modal__heading\">Заказать звонок</h2>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<form action=\"\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Телефон\" />\r\n\t\t\t\t\t\t<p class=\"modal__data\">\r\n\t\t\t\t\t\t\tНажимая “отправить”, вы даете согласие на обработку\r\n\t\t\t\t\t\t\tперсональных данных и соглашаетесь с нашей политикой\r\n\t\t\t\t\t\t\tконфиденциальности\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<button class=\"button modal__button\">Отправить</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal modal-feedback\">\r\n\t\t\t<button class=\"button modal__close\">\r\n\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" />\r\n\t\t\t</button>\r\n\t\t\t<div class=\"modal__wrapper\">\r\n\t\t\t\t<div class=\"modal__content\">\r\n\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t<h2 class=\"modal__heading\">Обратная связь</h2>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<form action=\"\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Имя\" />\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Телефон\" />\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Электронная почта\" />\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Собщение\" />\r\n\t\t\t\t\t\t<p class=\"modal__data\">\r\n\t\t\t\t\t\t\tНажимая “отправить”, вы даете согласие на обработку\r\n\t\t\t\t\t\t\tперсональных данных и соглашаетесь с нашей политикой\r\n\t\t\t\t\t\t\tконфиденциальности\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<button class=\"button modal__button\">Отправить</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<header class=\"header\">\r\n\t\t\t<div class=\"overlay-wrapper\">\r\n\t\t\t\t<div class=\"header__content\">\r\n\t\t\t\t\t<div class=\"header__content-burger-container\">\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"button header__button header__button-burger\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<div class=\"line-container\">\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"first-line line-container__line\"\r\n\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"second-line line-container__line\"\r\n\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\tclass=\"third-line line-container__line\"\r\n\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<div class=\"logo header__logo\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"logo__image\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"CPS\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"header__content-icons-container\">\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"button header__button header__button-call button-call\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"header__call-icon\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"device status\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"button header__button header__button-chat\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"header__chat-icon button-feedback\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"device status\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"button header__button header__button-user\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"header__status-user\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"device status\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"button header__button header__button-repair\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"header__apply-repair\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"apply to repair\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"button header__button header__button-status\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"header__status-icon\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"device status\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\r\n\t\t<div class=\"overlay-wrapper\">\r\n\t\t\t<div class=\"overlay\">\r\n\t\t\t\t<div class=\"overlay__content\">\r\n\t\t\t\t\t<div class=\"overlay__header\">\r\n\t\t\t\t\t\t<div class=\"overlay__content-burger-container\">\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\tclass=\"button overlay__button overlay__button-burger\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t<div class=\"line-container\">\r\n\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\tclass=\"first-line line-container__line\"\r\n\t\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\tclass=\"second-line line-container__line\"\r\n\t\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\tclass=\"third-line line-container__line\"\r\n\t\t\t\t\t\t\t\t\t></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"logo\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"logo__image\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"CPS\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\tclass=\"button overlay__button overlay__button-search\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass=\"overlay__search-icon\"\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"search device\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<nav class=\"overlay__navigation\">\r\n\t\t\t\t\t\t<ul class=\"overlay__list\">\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\tclass=\"overlay__list-item-link overlay__list-item-link_is-active_true\"\r\n\t\t\t\t\t\t\t\t\thref=\"#\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tРемонт техники\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"overlay__list-item-link\" href=\"#\"\r\n\t\t\t\t\t\t\t\t\t>Услуги и сервисы</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"overlay__list-item-link\" href=\"#\"\r\n\t\t\t\t\t\t\t\t\t>Корпоративным клиентам</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"overlay__list-item-link\" href=\"#\"\r\n\t\t\t\t\t\t\t\t\t>Продавцам техники</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"overlay__list-item-link\" href=\"#\"\r\n\t\t\t\t\t\t\t\t\t>Партнерам</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"overlay__list-item-link\" href=\"#\"\r\n\t\t\t\t\t\t\t\t\t>Производителям</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"overlay__list-item-link\" href=\"#\">\r\n\t\t\t\t\t\t\t\t\tНаши сервисные центры</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"overlay__list-item\">\r\n\t\t\t\t\t\t\t\t<a class=\"overlay__list-item-link\" href=\"#\"\r\n\t\t\t\t\t\t\t\t\t>Контакты</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\r\n\t\t\t\t\t<div class=\"overlay__footer\">\r\n\t\t\t\t\t\t<div class=\"overlay__footer-icons\">\r\n\t\t\t\t\t\t\t<button class=\"button overlay__button button-call\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"call\" />\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\tclass=\"button overlay__button button-feedback\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"chat\" />\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"button overlay__button\">\r\n\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"user\" />\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\tclass=\"overlay__footer-link-email\"\r\n\t\t\t\t\t\t\thref=\"email:mail@cps.com\"\r\n\t\t\t\t\t\t\t>mail@cps.com</a\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\tclass=\"overlay__footer-link-tel\"\r\n\t\t\t\t\t\t\thref=\"tel:+88008908900\"\r\n\t\t\t\t\t\t\t>8 800 890 8900</a\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t<div class=\"overlay__language-container\">\r\n\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\tclass=\"overlay__language-button overlay__langugage-button_is-active_true\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tru\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"overlay__language-button\">\r\n\t\t\t\t\t\t\t\teng\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"overlay__language-button\">ch</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<main class=\"app-wrapper\">\r\n\t\t\t\t<section class=\"services\">\r\n\t\t\t\t\t<div class=\"services__content\">\r\n\t\t\t\t\t\t<div class=\"services__container-menu\">\r\n\t\t\t\t\t\t\t<h1 class=\"services__heading\">Услуги и Сервисы</h1>\r\n\t\t\t\t\t\t\t<div class=\"services__container-button\">\r\n\t\t\t\t\t\t\t\t<p class=\"services__icon-paragraph\">\r\n\t\t\t\t\t\t\t\t\tОставить заявку\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<button class=\"button services__button-icon\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"chat\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<p class=\"services__icon-paragraph\">\r\n\t\t\t\t\t\t\t\t\tСтатус ремонта\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<button class=\"button services__button-icon\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"user\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"services__list\">\r\n\t\t\t\t\t\t\t<li\r\n\t\t\t\t\t\t\t\tclass=\"services__list-item services__list-item_status_active\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\tРемонтируемые бренды\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"services__list-item\">\r\n\t\t\t\t\t\t\t\tДополнительные услуги\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"services__list-item\">Цены на услуги</li>\r\n\t\t\t\t\t\t\t<li class=\"services__list-item\">\r\n\t\t\t\t\t\t\t\tАдреса сервисных центров\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"services__list-item\">\r\n\t\t\t\t\t\t\t\tСпециальные цены\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"services__list-item\">Отзывы</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<div class=\"services__descrition\">\r\n\t\t\t\t\t\t\t<div class=\"services__text\">\r\n\t\t\t\t\t\t\t\t<article class=\"services__article\">\r\n\t\t\t\t\t\t\t\t\tМы являемся авторизованным сервисным центром\r\n\t\t\t\t\t\t\t\t\tпо ремонту техники Dell. Только y нас вы\r\n\t\t\t\t\t\t\t\t\tможете отремонтировать свой ноутбук Dell c\r\n\t\t\t\t\t\t\t\t\tофициальной гарантией производителя.\r\n\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t<article class=\"services__article\">\r\n\t\t\t\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили\r\n\t\t\t\t\t\t\t\t\tрепутацию надежного партнера, что\r\n\t\t\t\t\t\t\t\t\tподтверждает большое количество постоянных\r\n\t\t\t\t\t\t\t\t\tклиентов. Мы гордимся тем, что к нам\r\n\t\t\t\t\t\t\t\t\tобращаются по рекомендациям и, в свою\r\n\t\t\t\t\t\t\t\t\tочередь, советуют нас родным и близким.\r\n\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t<article\r\n\t\t\t\t\t\t\t\t\tclass=\"services__article services__article_display\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tМы успешно работаем с 1992 года и заслужили\r\n\t\t\t\t\t\t\t\t\tрепутацию надежного партнера, что\r\n\t\t\t\t\t\t\t\t\tподтверждает большое количество постоянных\r\n\t\t\t\t\t\t\t\t\tклиентов. Мы гордимся тем, что к нам\r\n\t\t\t\t\t\t\t\t\tобращаются по рекомендациям и, в свою\r\n\t\t\t\t\t\t\t\t\tочередь, советуют нас родным и близким.\r\n\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t<button\r\n\t\t\t\t\t\t\t\t\tclass=\"services__more_hidden button-text\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\tСкрыть\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button class=\"services__more button-text\">\r\n\t\t\t\t\t\t\t\t\tЧитать далее\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<article\r\n\t\t\t\t\t\t\t\t\tclass=\"services__article services__article_hidden\"\r\n\t\t\t\t\t\t\t\t></article>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"services__image-container\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass=\"services__image\"\r\n\t\t\t\t\t\t\t\t\tsrcset=\"" + ___HTML_LOADER_REPLACEMENT_8___ + " 532w\"\r\n\t\t\t\t\t\t\t\t\tsizes=\"(min-width: 480px) 480px\"\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"CPS\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<img\r\n\t\t\t\t\t\tclass=\"services__image services__image-mobile\"\r\n\t\t\t\t\t\tsrcset=\"" + ___HTML_LOADER_REPLACEMENT_8___ + " 532w\"\r\n\t\t\t\t\t\tsizes=\"(min-width: 480px) 480px\"\r\n\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\r\n\t\t\t\t\t\talt=\"CPS\"\r\n\t\t\t\t\t/>\r\n\t\t\t\t</section>\r\n\r\n\t\t\t\t<section class=\"brands\">\r\n\t\t\t\t\t<h2 class=\"brands__heading second-heading\">\r\n\t\t\t\t\t\tРемонт Техники Различных Брендов\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t\t<ul class=\"brands__list\">\r\n\t\t\t\t\t\t<!-- Slides -->\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"brands__list-item\">\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class=\"swiper brands__swiper-slider\">\r\n\t\t\t\t\t\t<ul class=\"swiper-wrapper\">\r\n\t\t\t\t\t\t\t<!-- Slides -->\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"swiper-slide\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"lenovo laptops\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t<button class=\"button brands__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<!-- If we need pagination -->\r\n\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button class=\"button-text brands__show\">\r\n\t\t\t\t\t\tПоказать Все\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button class=\"button-text brands__hide\">Скрыть</button>\r\n\t\t\t\t</section>\r\n\t\t\t\t<section class=\"repair\">\r\n\t\t\t\t\t<h2 class=\"second-heading\">\r\n\t\t\t\t\t\tРемонт Различных Видов Техники\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t\t<ul class=\"repair__list repair__list_device_large\">\r\n\t\t\t\t\t\t<li class=\"repair__list-item\">\r\n\t\t\t\t\t\t\t<h5 class=\"repair__heading\">Ремонт ноутбуков</h5>\r\n\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"repair__list-item\">\r\n\t\t\t\t\t\t\t<h5 class=\"repair__heading\">Ремонт ноутбуков</h5>\r\n\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"repair__list-item\">\r\n\t\t\t\t\t\t\t<h5 class=\"repair__heading\">Ремонт ноутбуков</h5>\r\n\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"repair__list-item\">\r\n\t\t\t\t\t\t\t<h5 class=\"repair__heading\">Ремонт ноутбуков</h5>\r\n\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"repair__list-item\">\r\n\t\t\t\t\t\t\t<h5 class=\"repair__heading\">Ремонт ноутбуков</h5>\r\n\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"repair__list-item\">\r\n\t\t\t\t\t\t\t<h5 class=\"repair__heading\">Ремонт ноутбуков</h5>\r\n\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class=\"swiper repair__swiper-slider\">\r\n\t\t\t\t\t\t<ul class=\"repair__list swiper-wrapper\">\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"repair__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<h5 class=\"repair__heading\">\r\n\t\t\t\t\t\t\t\t\tРемонт ноутбуков\r\n\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t<button class=\"button repair__button\">\r\n\t\t\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t\t\tclass\r\n\t\t\t\t\t\t\t\t\t\tsrc=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\"\r\n\t\t\t\t\t\t\t\t\t\talt=\"dropdown\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<button class=\"button-text repair__show\">\r\n\t\t\t\t\t\tПоказать Все\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button class=\"button-text repair__hide\">Cкрыть</button>\r\n\t\t\t\t</section>\r\n\t\t\t\t<section class=\"prices\">\r\n\t\t\t\t\t<h2 class=\"second-heading\">Цены на Услуги</h2>\r\n\t\t\t\t\t<div class=\"prices__table\">\r\n\t\t\t\t\t\t<div class=\"prices__row-headings\">\r\n\t\t\t\t\t\t\t<h5 class=\"prices__table-heading\">\r\n\t\t\t\t\t\t\t\tРемонтные Услуги\r\n\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t<h5 class=\"prices__table-heading\">Цена</h5>\r\n\t\t\t\t\t\t\t<h5 class=\"prices__table-heading\">Срок</h5>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"prices__table-wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"row prices__table-row\">\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Диагностика</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">30 мин</p>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__row-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row prices__table-row\">\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Диагностика</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">30 мин</p>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__row-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row prices__table-row\">\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Диагностика</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">30 мин</p>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__row-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row prices__table-row\">\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Диагностика</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">30 мин</p>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__row-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row prices__table-row\">\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Диагностика</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t<p class=\"prices__row-services\">30 мин</p>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__row-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"swiper prices__swiper-slider\">\r\n\t\t\t\t\t\t<ul class=\"prices__list swiper-wrapper\">\r\n\t\t\t\t\t\t\t<li class=\"prices__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"prices__services\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__services-heading\">\r\n\t\t\t\t\t\t\t\t\t\tРемонтные услуги\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__services-description\">\r\n\t\t\t\t\t\t\t\t\t\tТестирование с выдачей технического\r\n\t\t\t\t\t\t\t\t\t\tзаключения\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__price\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__heading\">Цена</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__price-value\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__term\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__term-data\">Срок</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__term-time\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__order-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"prices__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"prices__services\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__services-heading\">\r\n\t\t\t\t\t\t\t\t\t\tРемонтные услуги\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__services-description\">\r\n\t\t\t\t\t\t\t\t\t\tТестирование с выдачей технического\r\n\t\t\t\t\t\t\t\t\t\tзаключения\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__price\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__price-heading\">Цена</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__price-value\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__term\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__term-data\">Срок</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__term-time\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__order-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"prices__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"prices__services\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__services-heading\">\r\n\t\t\t\t\t\t\t\t\t\tРемонтные услуги\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__services-description\">\r\n\t\t\t\t\t\t\t\t\t\tТестирование с выдачей технического\r\n\t\t\t\t\t\t\t\t\t\tзаключения\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__price\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__price-heading\">Цена</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__price-value\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__term\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__term-data\">Срок</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__term-time\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__order-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"prices__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"prices__services\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__services-heading\">\r\n\t\t\t\t\t\t\t\t\t\tРемонтные услуги\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__services-description\">\r\n\t\t\t\t\t\t\t\t\t\tТестирование с выдачей технического\r\n\t\t\t\t\t\t\t\t\t\tзаключения\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__price\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__price-heading\">Цена</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__price-value\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__term\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__term-data\">Срок</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__term-time\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__order-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"prices__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"prices__services\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__services-heading\">\r\n\t\t\t\t\t\t\t\t\t\tРемонтные услуги\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__services-description\">\r\n\t\t\t\t\t\t\t\t\t\tТестирование с выдачей технического\r\n\t\t\t\t\t\t\t\t\t\tзаключения\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__price\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__price-heading\">Цена</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__price-value\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__term\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__term-data\">Срок</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__term-time\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__order-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"prices__list-item swiper-slide\">\r\n\t\t\t\t\t\t\t\t<div class=\"prices__services\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__services-heading\">\r\n\t\t\t\t\t\t\t\t\t\tРемонтные услуги\r\n\t\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__services-description\">\r\n\t\t\t\t\t\t\t\t\t\tТестирование с выдачей технического\r\n\t\t\t\t\t\t\t\t\t\tзаключения\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__price\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__price-heading\">Цена</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__price-value\">Бесплатно</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"prices__term\">\r\n\t\t\t\t\t\t\t\t\t<h6 class=\"prices__term-data\">Срок</h6>\r\n\t\t\t\t\t\t\t\t\t<p class=\"prices__term-time\">30-120 мин</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button class=\"button prices__order-button\">\r\n\t\t\t\t\t\t\t\t\tЗаказать\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"prices__description\">\r\n\t\t\t\t\t\t<p class=\"prices__description-describe\">\r\n\t\t\t\t\t\t\tВсе цены указаны с учетом НДС. Стоимость ремонта\r\n\t\t\t\t\t\t\tуказана на единичную услугу. Для получения\r\n\t\t\t\t\t\t\tкоммерческого предложения на постоянное\r\n\t\t\t\t\t\t\tобслуживание, оставьте заявку.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<button class=\"prices__description-button\">\r\n\t\t\t\t\t\t\tПолучить коммерческое предложение\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</section>\r\n\t\t\t\t<footer class=\"footer\">\r\n\t\t\t\t\t<p class=\"footer__description test\">\r\n\t\t\t\t\t\t© 2019 CPS\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tРазработано командой Apesong\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t<p class=\"footer__description\">\r\n\t\t\t\t\t\tПолитика конфиденциальности\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"footer__description\">\r\n\t\t\t\t\t\tИнформация, размещенная на данной странице, не является\r\n\t\t\t\t\t\tпубличной офертой\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</footer>\r\n\t\t\t</main>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./images/icons/call.svg":
/*!*******************************!*\
  !*** ./images/icons/call.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./images/icons/chat.svg":
/*!*******************************!*\
  !*** ./images/icons/chat.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./images/icons/close.svg":
/*!********************************!*\
  !*** ./images/icons/close.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./images/icons/dropdown.svg":
/*!***********************************!*\
  !*** ./images/icons/dropdown.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/dropdown.svg";

/***/ }),

/***/ "./images/icons/repair.svg":
/*!*********************************!*\
  !*** ./images/icons/repair.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./images/icons/search-mobile.svg":
/*!****************************************!*\
  !*** ./images/icons/search-mobile.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search-mobile.svg";

/***/ }),

/***/ "./images/icons/search.svg":
/*!*********************************!*\
  !*** ./images/icons/search.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./images/icons/user.svg":
/*!*******************************!*\
  !*** ./images/icons/user.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/user.svg";

/***/ }),

/***/ "./images/intro-desktop.jpeg":
/*!***********************************!*\
  !*** ./images/intro-desktop.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/intro-desktop.jpeg";

/***/ }),

/***/ "./images/intro.jpeg":
/*!***************************!*\
  !*** ./images/intro.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/intro.jpeg";

/***/ }),

/***/ "./images/lenovo.png":
/*!***************************!*\
  !*** ./images/lenovo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.png";

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.p = "";
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_swiper_swiper-bundle_mjs"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map