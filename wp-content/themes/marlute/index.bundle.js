/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_blush_visual_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/blush-visual.png */ "./src/scss/assets/images/blush-visual.png");
/* harmony import */ var _assets_images_perfume_product_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/perfume-product.png */ "./src/scss/assets/images/perfume-product.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_blush_visual_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_images_perfume_product_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".has-fade {\n  visibility: hidden;\n}\n\n@keyframes fade-in {\n  from {\n    visibility: hidden;\n    opacity: 0;\n  }\n  1% {\n    visibility: visible;\n    opacity: 0;\n  }\n  to {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n.fade-in {\n  animation: fade-in 200ms ease-in-out forwards;\n}\n\n@keyframes fade-out {\n  from {\n    visibility: visible;\n    opacity: 1;\n  }\n  99% {\n    visibility: visible;\n    opacity: 0;\n  }\n  to {\n    visibility: hidden;\n    opacity: 0;\n  }\n}\n.fade-out {\n  animation: fade-out 200ms ease-in-out forwards;\n}\n\n.overlay-area {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: radial-gradient(transparent 20%, #ba382f, #8942a8);\n  mix-blend-mode: color;\n  opacity: 0.5;\n}\n\n.animation-area {\n  width: 100%;\n  height: 100vh;\n  filter: blur(2px);\n  opacity: 0.7;\n}\n\n.box-area {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.box-area li {\n  position: absolute;\n  display: block;\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  background: #ba382f;\n  animation: animate 20s linear infinite;\n  bottom: -150px;\n}\n\n.box-area li:nth-child(1) {\n  left: 86%;\n  width: 80px;\n  height: 80px;\n  animation-delay: 0s;\n}\n\n.box-area li:nth-child(2) {\n  left: 12%;\n  width: 30px;\n  height: 30px;\n  animation-delay: 1.5s;\n  animation-duration: 10s;\n}\n\n.box-area li:nth-child(3) {\n  left: 70%;\n  width: 100px;\n  height: 100px;\n  animation-delay: 5.5s;\n}\n\n.box-area li:nth-child(4) {\n  left: 42%;\n  width: 150px;\n  height: 150px;\n  animation-delay: 0s;\n  animation-duration: 15s;\n}\n\n.box-area li:nth-child(5) {\n  left: 65%;\n  width: 40px;\n  height: 40px;\n  animation-delay: 0s;\n}\n\n.box-area li:nth-child(6) {\n  left: 15%;\n  width: 110px;\n  height: 110px;\n  animation-delay: 3.5s;\n}\n\n@keyframes animate {\n  0% {\n    transform: translateY(-1500px) rotate(360deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n  }\n}\n.animState {\n  animation: moveInBottom 2s ease-out;\n  animation-fill-mode: backwards;\n  transition: 0.5s;\n}\n.animState:hover, .animState:focus {\n  transition: 0.2s;\n  transform: translateY(-3px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n.animState:active {\n  transform: translateY(-1px);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.animState::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 100px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n.animState:hover::after {\n  transform: scaleX(1.4) scaleY(1.6);\n  opacity: 0;\n}\n\n* {\n  box-sizing: border-box;\n  border-collapse: separate;\n  outline: none;\n}\n\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\nbody.noscroll {\n  overflow: hidden;\n}\n\nul, ol {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nmain {\n  padding-top: 4.5em;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n}\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #cac0c0;\n}\n\n.no-spacing {\n  margin: 0 !important;\n}\n\n.section {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  clear: both;\n}\n.section__inner {\n  display: block;\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n@media (min-width:45em) {\n  .section__inner {\n    margin: 0 auto;\n    width: 40em;\n  }\n}\n@media (min-width:61.25em) {\n  .section__inner {\n    width: 58em;\n  }\n}\n@media (min-width:93em) {\n  .section__inner {\n    width: 90em;\n  }\n}\n\n.container {\n  max-width: 69.375rem;\n  margin: 0 auto;\n}\n.container--pall {\n  padding-top: 4.375rem;\n  padding-right: 1.5rem;\n  padding-bottom: 4.375rem;\n  padding-left: 1.5rem;\n}\n@media (min-width:61.25em) {\n  .container--pall {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n}\n.container--py {\n  padding-top: 4.375rem;\n  padding-bottom: 4.375rem;\n}\n@media (min-width:61.25em) {\n  .container--py {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n}\n.container--px {\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n}\n.container--pt {\n  padding-top: 4.375rem;\n}\n@media (min-width:61.25em) {\n  .container--pt {\n    padding-top: 6rem;\n  }\n}\n.container--pr {\n  padding-right: 1.5rem;\n}\n.container--pb {\n  padding-bottom: 4.375rem;\n}\n@media (min-width:61.25em) {\n  .container--pb {\n    padding-bottom: 6rem;\n  }\n}\n.container--pl {\n  padding-left: 1.5rem;\n}\n\n.flex {\n  display: flex;\n}\n.flex-jc-sb {\n  justify-content: space-between;\n}\n.flex-jc-c {\n  justify-content: center;\n}\n.flex-ai-c {\n  align-items: center;\n}\n\n@media (min-width:45em) {\n  .section-flex {\n    margin-right: -1.5em;\n    margin-left: -1.5em;\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n\n.col--1 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--1 {\n    padding: 0 1.5em;\n    width: 8.3333333333%;\n  }\n}\n\n.col--2 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--2 {\n    padding: 0 1.5em;\n    width: 16.6666666667%;\n  }\n}\n\n.col--3 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--3 {\n    padding: 0 1.5em;\n    width: 25%;\n  }\n}\n\n.col--4 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--4 {\n    padding: 0 1.5em;\n    width: 33.3333333333%;\n  }\n}\n\n.col--5 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--5 {\n    padding: 0 1.5em;\n    width: 41.6666666667%;\n  }\n}\n\n.col--6 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--6 {\n    padding: 0 1.5em;\n    width: 50%;\n  }\n}\n\n.col--7 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--7 {\n    padding: 0 1.5em;\n    width: 58.3333333333%;\n  }\n}\n\n.col--8 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--8 {\n    padding: 0 1.5em;\n    width: 66.6666666667%;\n  }\n}\n\n.col--9 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--9 {\n    padding: 0 1.5em;\n    width: 75%;\n  }\n}\n\n.col--10 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--10 {\n    padding: 0 1.5em;\n    width: 83.3333333333%;\n  }\n}\n\n.col--11 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--11 {\n    padding: 0 1.5em;\n    width: 91.6666666667%;\n  }\n}\n\n.col--12 {\n  display: block;\n  position: relative;\n  margin: 0;\n}\n@media (min-width:45em) {\n  .col--12 {\n    padding: 0 1.5em;\n    width: 100%;\n  }\n}\n\n.hide-for-mobile {\n  display: none !important;\n}\n@media (min-width:61.25em) {\n  .hide-for-mobile {\n    display: inline-block !important;\n  }\n}\n\n.hide-for-desktop {\n  display: inline-block !important;\n}\n@media (min-width:61.25em) {\n  .hide-for-desktop {\n    display: none !important;\n  }\n}\n\n@media (min-width:61.25em) {\n  .header-wrapper--fix .logo__inner .hide-for-desktop {\n    display: inline-block !important;\n  }\n}\n\n* {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 400, \"wdth\" 100;\n}\n@media screen {\n  * {\n    font-weight: 400;\n  }\n}\n\n.tns-outer {\n  padding: 0 !important;\n}\n.tns-outer [hidden] {\n  display: none !important;\n}\n.tns-outer [aria-controls], .tns-outer [data-action] {\n  cursor: pointer;\n}\n\n.tns-slider {\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  transition: all 0s;\n}\n.tns-slider > .tns-item {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.tns-horizontal.tns-subpixel {\n  white-space: nowrap;\n}\n.tns-horizontal.tns-subpixel > .tns-item {\n  display: inline-block;\n  vertical-align: top;\n  white-space: normal;\n}\n.tns-horizontal.tns-no-subpixel:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.tns-horizontal.tns-no-subpixel > .tns-item {\n  float: left;\n}\n.tns-horizontal.tns-carousel.tns-no-subpixel > .tns-item {\n  margin-right: -100%;\n}\n\n.tns-no-calc {\n  position: relative;\n  left: 0;\n}\n\n.tns-gallery {\n  position: relative;\n  left: 0;\n  min-height: 1px;\n}\n.tns-gallery > .tns-item {\n  position: absolute;\n  left: -100%;\n  -webkit-transition: transform 0s, opacity 0s;\n  -moz-transition: transform 0s, opacity 0s;\n  transition: transform 0s, opacity 0s;\n}\n.tns-gallery > .tns-slide-active {\n  position: relative;\n  left: auto !important;\n}\n.tns-gallery > .tns-moving {\n  -webkit-transition: all 0.25s;\n  -moz-transition: all 0.25s;\n  transition: all 0.25s;\n}\n\n.tns-autowidth {\n  display: inline-block;\n}\n\n.tns-lazy-img {\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n  opacity: 0.6;\n}\n.tns-lazy-img.tns-complete {\n  opacity: 1;\n}\n\n.tns-ah {\n  -webkit-transition: height 0s;\n  -moz-transition: height 0s;\n  transition: height 0s;\n}\n\n.tns-ovh {\n  overflow: hidden;\n}\n\n.tns-visually-hidden {\n  position: absolute;\n  left: -10000em;\n}\n\n.tns-transparent {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.tns-fadeIn {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 0;\n}\n\n.tns-normal, .tns-fadeOut {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n\n.tns-vpfix {\n  white-space: nowrap;\n}\n.tns-vpfix > div, .tns-vpfix > li {\n  display: inline-block;\n}\n\n.tns-t-subp2 {\n  margin: 0 auto;\n  width: 310px;\n  position: relative;\n  height: 10px;\n  overflow: hidden;\n}\n.tns-t-ct {\n  width: 2333.3333333333%;\n  width: -webkit-calc(100% * 70 / 3);\n  width: -moz-calc(100% * 70 / 3);\n  width: calc(100% * 70 / 3);\n  position: absolute;\n  right: 0;\n}\n.tns-t-ct:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.tns-t-ct > div {\n  width: 1.4285714286%;\n  width: -webkit-calc(100% / 70);\n  width: -moz-calc(100% / 70);\n  width: calc(100% / 70);\n  height: 10px;\n  float: left;\n}\n\nh1 {\n  font-size: 1.75rem;\n  font-weight: bold;\n  text-align: center;\n}\nh2 {\n  font-size: 1.75rem;\n  text-align: center;\n}\n\nh3 {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\nh4 {\n  font-size: 1.25rem;\n}\n\nh1 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 2.125em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 700, \"wdth\" 100;\n}\n@media screen {\n  h1 {\n    font-weight: 700;\n  }\n}\n\nh3 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.375em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 700, \"wdth\" 100;\n}\n@media screen {\n  h3 {\n    font-weight: 700;\n  }\n}\n\nbutton {\n  background: none;\n  border: none;\n}\nbutton:hover {\n  cursor: pointer;\n}\n\n.primary__button {\n  border: 5px solid white;\n  background: white;\n  border-radius: 5em;\n  box-shadow: 0 8px 8px -10px #000;\n}\n.primary__button a {\n  display: block;\n  padding: 0.5em 2.5em;\n  color: black;\n  text-decoration: none;\n}\n.primary__button a:hover {\n  text-decoration: none;\n}\n\n.primary__button--transparent {\n  border: 5px solid transparent;\n  background: #ffffff7d;\n  box-shadow: 0px 4px 12px 0px #0000008c;\n}\n\n.header.open .header__toggle > span:first-child {\n  transform: rotate(45deg);\n}\n.header.open .header__toggle > span:nth-child(2) {\n  opacity: 0;\n}\n.header.open .header__toggle > span:last-child {\n  transform: rotate(-45deg);\n}\n\n.header__toggle {\n  position: relative;\n}\n.header__toggle > span {\n  display: block;\n  width: 26px;\n  height: 2px;\n  background-color: black;\n  transition: all 300ms ease-in-out;\n  transform-origin: 3px 1px;\n}\n.header__toggle > span:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n.logo {\n  display: inline-block;\n}\n.logo__inner .icon--logo {\n  position: relative;\n  display: inline-block;\n}\n@media (min-width:61.25em) {\n  .logo {\n    position: absolute;\n    top: 43%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n.logo .icon--logo {\n  position: relative;\n  width: 2.1875em;\n  height: 2.1875em;\n  min-width: 2.1875em;\n}\n.logo .icon--logo svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 2.1875em;\n  height: 2.1875em;\n  transform: translate(-50%, -50%);\n}\n@media (min-width:61.25em) {\n  .logo .icon--logo-brand #logo-logo,\n.logo .icon--logo-brand #logo-brand {\n    position: relative;\n    width: 15.625em;\n    height: 15.625em;\n    min-width: 15.625em;\n    position: inherit;\n  }\n  .logo .icon--logo-brand #logo-logo svg,\n.logo .icon--logo-brand #logo-brand svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 15.625em;\n    height: 15.625em;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.brand-box__inner {\n  position: relative;\n  width: 15.625em;\n  height: 15.625em;\n  min-width: 15.625em;\n}\n.brand-box__inner svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 15.625em;\n  height: 15.625em;\n  transform: translate(-50%, -50%);\n}\n@media (min-width:61.25em) {\n  .brand-box__inner {\n    position: relative;\n    width: 21.875em;\n    height: 21.875em;\n    min-width: 21.875em;\n  }\n  .brand-box__inner svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 21.875em;\n    height: 21.875em;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.navbar-links,\n.gender-nav__link a {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.875em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 400, \"wdth\" 100;\n  color: black;\n  text-decoration: none;\n  transition: color 50ms ease-in-out;\n  position: relative;\n}\n@media screen {\n  .navbar-links,\n.gender-nav__link a {\n    font-weight: 400;\n  }\n}\n.navbar-links:hover, .navbar-links:active, .navbar-links:focus,\n.gender-nav__link a:hover,\n.gender-nav__link a:active,\n.gender-nav__link a:focus {\n  color: #808080;\n}\n.navbar-links:hover::before, .navbar-links:hover::after, .navbar-links:active::before, .navbar-links:active::after, .navbar-links:focus::before, .navbar-links:focus::after,\n.gender-nav__link a:hover::before,\n.gender-nav__link a:hover::after,\n.gender-nav__link a:active::before,\n.gender-nav__link a:active::after,\n.gender-nav__link a:focus::before,\n.gender-nav__link a:focus::after {\n  opacity: 1;\n}\n@media (min-width:61.25em) {\n  .navbar-links,\n.gender-nav__link a {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 1.25em;\n    font-weight: initial;\n    direction: ltr;\n    font-variation-settings: \"wght\" 400, \"wdth\" 100;\n  }\n}\n@media screen and (min-width:61.25em) {\n  .navbar-links,\n.gender-nav__link a {\n    font-weight: 400;\n  }\n}\n.navbar-links:after,\n.gender-nav__link a:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  height: 2px;\n  background-color: #a0a0a0;\n  opacity: 0;\n  transition: 0.2s ease;\n  right: 0;\n  left: 0;\n}\n\n.gender-nav__link a {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.25em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 400, \"wdth\" 100;\n}\n@media screen {\n  .gender-nav__link a {\n    font-weight: 400;\n  }\n}\n\n.icon--link {\n  position: relative;\n  width: 1.25em;\n  height: 1.25em;\n  min-width: 1.25em;\n}\n.icon--link svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1.25em;\n  height: 1.25em;\n  transform: translate(-50%, -50%);\n}\n.icon--link svg:hover, .icon--link svg:active, .icon--link svg:focus {\n  opacity: 0.5;\n}\n.icon--link svg:hover::before, .icon--link svg:active::before, .icon--link svg:focus::before {\n  opacity: 1;\n}\n@media (min-width:61.25em) {\n  .icon--link svg {\n    top: 35%;\n  }\n}\n.icon--link:after {\n  display: none;\n}\n\n.metamenu__list--item a {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.9375em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 400, \"wdth\" 100;\n  color: white;\n  text-decoration: none;\n  transition: color 50ms ease-in-out;\n  position: relative;\n}\n@media screen {\n  .metamenu__list--item a {\n    font-weight: 400;\n  }\n}\n.metamenu__list--item a:hover, .metamenu__list--item a:active, .metamenu__list--item a:focus {\n  color: #bfbfbf;\n}\n.metamenu__list--item a:hover::before, .metamenu__list--item a:hover::after, .metamenu__list--item a:active::before, .metamenu__list--item a:active::after, .metamenu__list--item a:focus::before, .metamenu__list--item a:focus::after {\n  opacity: 1;\n}\n@media (min-width:61.25em) {\n  .metamenu__list--item a {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 0.9375em;\n    font-weight: initial;\n    direction: ltr;\n    font-variation-settings: \"wght\" 400, \"wdth\" 100;\n  }\n}\n@media screen and (min-width:61.25em) {\n  .metamenu__list--item a {\n    font-weight: 400;\n  }\n}\n.metamenu__list--item a:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  height: 2px;\n  background-color: #bfbfbf;\n  opacity: 0;\n  transition: 0.2s ease;\n  right: 0;\n  left: 0;\n}\n\n.hero__teaser {\n  height: 100%;\n}\n.hero__teaser .section__inner {\n  display: flex;\n  min-height: 80vh;\n  flex-direction: column;\n  padding: 2.5em 1.5em 10em;\n  justify-content: space-between;\n}\n@media (min-width:61.25em) {\n  .hero__teaser .section__inner {\n    padding: 0;\n  }\n}\n.hero__teaser .primary__button {\n  min-width: 30%;\n  margin: 0 auto;\n}\n@media (min-width:61.25em) {\n  .hero__teaser .primary__button {\n    min-width: none !important;\n    margin: 0;\n    margin-left: auto;\n  }\n}\n\n.hero__teaser--image {\n  position: absolute;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.card__teaser--glas {\n  position: relative;\n  height: 12.5em;\n  margin: 0 auto;\n  border: 1px solid #fff;\n  padding: 1.5em;\n  border-radius: 1.5em;\n  box-shadow: 0 18px 95px -43px #000;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(5px);\n  border: solid 2px transparent;\n  background-clip: padding-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card__teaser--glas .card__inner {\n  position: relative;\n  z-index: 2;\n}\n@media (min-width:61.25em) {\n  .card__teaser--glas .card__inner {\n    margin-left: auto;\n  }\n}\n@media (min-width:61.25em) {\n  .card__teaser--glas .card__inner h1, .card__teaser--glas .card__inner h3 {\n    text-align: right;\n  }\n}\n@media (min-width:61.25em) {\n  .card__teaser--glas {\n    display: flex;\n    flex-direction: column;\n    width: 21.875em;\n    margin: 0;\n    margin-left: auto;\n    margin-top: 2.5em;\n    height: auto;\n    padding: 1.5em;\n  }\n}\n@media (min-width:93em) {\n  .card__teaser--glas {\n    width: 31.25em;\n    height: 18.75em;\n    padding: 1.5em 3em;\n  }\n}\n\n.holder {\n  position: relative;\n}\n.holder:before, .holder:after {\n  animation: orbit 5s linear infinite;\n  border-radius: 50%;\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n  content: \"\";\n  height: 150px;\n  position: absolute;\n  width: 150px;\n}\n.holder:before {\n  background: lightcoral;\n  background: radial-gradient(to bottom left, rgba(207, 109, 109, 0.897), #ffaa9c);\n}\n.holder:after {\n  animation-delay: -2.5s;\n  background: #b1b1b1;\n  background: radial-gradient(to top left, #5a5a5a, #bebebe);\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n.main-headline {\n  margin: 3em 0;\n  position: relative;\n}\n.main-headline::before {\n  position: absolute;\n  content: \"\";\n  height: 2px;\n  width: 10%;\n  left: 50%;\n  bottom: -20px;\n  transform: translate(-50%, 0%);\n  background: black;\n}\n\n.glas {\n  border: 1px solid #fff;\n  border-radius: 1.5em;\n  box-shadow: 0 18px 95px -43px #000;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(5px);\n  border: solid 2px transparent;\n  background-clip: padding-box;\n}\n\n.product-warenkorb-link svg {\n  width: 1.2em;\n  height: 1.2em;\n  transform: translate(35%, 19%);\n  margin-left: 0.5em;\n}\n\n.product-article {\n  cursor: pointer;\n}\n\n.products__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n}\n@media (min-width:45em) {\n  .products__list {\n    margin-right: -1.5em;\n    margin-left: -1.5em;\n  }\n}\n.products__list--item {\n  width: calc(100%/1);\n  margin-bottom: 5.5em;\n  padding: 0 1.5em;\n  max-width: 24em;\n  margin-top: 5em;\n  max-width: 24em;\n}\n@media (min-width:45em) {\n  .products__list--item {\n    max-width: 30em;\n  }\n}\n@media (min-width:61.25em) {\n  .products__list--item {\n    width: calc(100%/2);\n  }\n}\n@media (min-width:93em) {\n  .products__list--item {\n    width: calc(100%/3);\n  }\n}\n\n.product-card {\n  padding: 1em 1em 1em;\n}\n@media (min-width:45em) {\n  .product-card {\n    padding: 2.5em 3em 2em;\n  }\n}\n@media (min-width:61.25em) {\n  .product-card {\n    padding: 2.5em 2em 2em;\n  }\n}\n\n.product-card__inner {\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n}\n.product-card__inner h4, .product-card__inner p {\n  margin: 0.2em 0;\n}\n.product-card__inner h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.125em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 700, \"wdth\" 100;\n}\n@media screen {\n  .product-card__inner h4 {\n    font-weight: 700;\n  }\n}\n@media (min-width:45em) {\n  .product-card__inner h4 {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 1.625em;\n    font-weight: initial;\n    direction: ltr;\n    font-variation-settings: \"wght\" 700, \"wdth\" 100;\n  }\n}\n@media screen and (min-width:45em) {\n  .product-card__inner h4 {\n    font-weight: 700;\n  }\n}\n.product-card__inner .pricetag {\n  margin: 1em 0;\n}\n\n.product-article {\n  position: relative;\n}\n.product-article::after {\n  position: absolute;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  content: \"\";\n  top: -36px;\n  right: 0;\n  height: 14em;\n  width: 6em;\n  content: \"\";\n}\n@media (max-width:19.3125em) {\n  .product-article::after {\n    display: none;\n  }\n}\n@media (min-width:23.75em) {\n  .product-article::after {\n    display: inline-block;\n  }\n}\n@media (min-width:45em) {\n  .product-article::after {\n    top: -42px;\n    right: 0;\n    height: 18em;\n    width: 8em;\n  }\n}\n\n.product-warenkorb-link {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.625em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 400, \"wdth\" 100;\n}\n@media screen {\n  .product-warenkorb-link {\n    font-weight: 400;\n  }\n}\n@media (min-width:45em) {\n  .product-warenkorb-link {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 0.9375em;\n    font-weight: initial;\n    direction: ltr;\n    font-variation-settings: \"wght\" 400, \"wdth\" 100;\n  }\n}\n@media screen and (min-width:45em) {\n  .product-warenkorb-link {\n    font-weight: 400;\n  }\n}\n\n.sperater {\n  width: 100%;\n  background-color: black;\n  height: 1px;\n  margin: 1.5em 0;\n}\n\n.product-detail {\n  position: relative;\n}\n.product-detail .primary__button {\n  margin: 1em 0;\n  width: 100%;\n}\n.product-detail .section__inner {\n  margin: 1.5em;\n}\n@media (min-width:45em) {\n  .product-detail .section__inner {\n    margin: 0 auto;\n  }\n}\n.product-detail .product {\n  max-width: 25em;\n  margin: 0 auto;\n}\n@media (min-width:45em) {\n  .product-detail .product {\n    margin: 0;\n    margin-left: auto;\n  }\n}\n@media (min-width:45em) {\n  .product-detail .product-card {\n    padding: 2.5em 2em 2em;\n  }\n}\n\n.slider-container {\n  position: relative;\n}\n\nimg {\n  display: inline-block;\n  vertical-align: top;\n  width: 9em;\n  height: 100%;\n}\n\n.my-slider {\n  position: relative;\n}\n\n.slider-item {\n  padding: 1.5rem 0.75rem;\n  position: relative;\n}\n.slider-item:hover {\n  cursor: pointer;\n}\n\n.controls {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  left: 0;\n  background: none;\n  width: 100%;\n  top: 50%;\n  transform: translatey(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.controls:focus {\n  outline: none;\n}\n.controls li:hover {\n  cursor: pointer;\n}\n\n.next, .prev {\n  font-weight: 800;\n  width: 2em;\n  border-radius: 100% !important;\n  margin: 0 2em;\n  margin-top: 2em;\n}\n.next :active, .prev :active {\n  background: red !important;\n}\n\n.tns-nav {\n  display: none;\n}\n\n.shoppingSum .shoppingSum__wrapper {\n  margin: 5em 0;\n}\n.shoppingSum .button-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.shopping-cart .product-title h3 {\n  margin-top: 0;\n  text-align: left;\n}\n.shopping-cart .column-label label {\n  display: none;\n}\n.shopping-cart .product-image {\n  display: inline-block;\n}\n.shopping-cart .product-image img {\n  width: 5em;\n  padding: 1em;\n  border: 1px solid black;\n}\n@media (min-width:61.25em) {\n  .shopping-cart .product-image img {\n    width: 7em;\n  }\n}\n.shopping-cart .product {\n  position: relative;\n  margin: 4em 0;\n  padding-bottom: 2em;\n  border-bottom: 1px solid black;\n}\n.shopping-cart .product-removal {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.shopping-cart .image-detail__wrapper {\n  display: flex;\n}\n.shopping-cart .image-detail__wrapper .product-details {\n  margin-left: 1em;\n}\n.shopping-cart .quantity-price__wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 2em;\n}\n.shopping-cart .quantity-price__wrapper .product-quantity {\n  display: inline-block;\n}\n.shopping-cart .quantity-price__wrapper .product-quantity input {\n  width: 20%;\n}\n.shopping-cart .total__wrapper {\n  margin-bottom: 2em;\n}\n.shopping-cart .coupon {\n  margin-bottom: 2em;\n}\n@media (min-width:45em) {\n  .shopping-cart .coupon {\n    margin-bottom: 2em;\n  }\n}\n.shopping-cart .coupon__inner {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.shopping-cart .coupon__inner .label-coupon {\n  width: 100%;\n  margin-bottom: 1em;\n}\n.shopping-cart .coupon__inner .input-text {\n  width: 45%;\n}\n.shopping-cart .coupon__inner .primary__button {\n  width: 50%;\n}\n@media (min-width:45em) {\n  .shopping-cart .total {\n    width: 30%;\n    margin-left: auto;\n  }\n}\n.shopping-cart .total .totals-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1em;\n}\n\n.delivery__wrapper {\n  margin-top: 2em;\n  margin-bottom: 3em;\n}\n.delivery__wrapper .delivery-customerinformations {\n  margin-bottom: 2em;\n}\n@media (min-width:45em) {\n  .delivery__wrapper .delivery-customerinformations {\n    margin-bottom: 0;\n  }\n}\n.delivery__wrapper h4 {\n  margin-top: 0 !important;\n}\n.delivery__wrapper .deliver__inner {\n  padding: 1em;\n  margin-top: 1em;\n}\n.delivery__wrapper .deliver__inner h3 {\n  text-align: left;\n}\n.delivery__wrapper .label__wrapper {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid black;\n  padding-bottom: 0.5em;\n}\n.delivery__wrapper .image-detail__wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.delivery__wrapper .product-line-price {\n  margin-top: 1em;\n  text-align: right;\n}\n.delivery__wrapper .image-detail__wrapper {\n  padding: 1em 0;\n  border-bottom: 1px solid silver;\n}\n\n.delivery-customerinformations h4 {\n  margin-bottom: 1.5em !important;\n}\n.delivery-customerinformations fieldset {\n  margin-bottom: 2em;\n  border: none;\n}\n.delivery-customerinformations fieldset label {\n  display: block;\n}\n.delivery-customerinformations .row {\n  margin-bottom: 1em;\n}\n.delivery-customerinformations input {\n  margin-top: 0.5em;\n  border: 1px solid #252525;\n  border-radius: 0.3em;\n  padding: 0.5em;\n}\n\n.product-descriptions__wrapper {\n  margin-top: 7em;\n  margin-bottom: 8em;\n}\n\n.tabs__container {\n  /* Style the buttons inside the tab */\n  /* Change background color of buttons on hover */\n  /* Create an active/current tablink class */\n  /* Style the tab content */\n}\n.tabs__container .tabLinks {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 0.3125em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 400, \"wdth\" 100;\n}\n@media screen {\n  .tabs__container .tabLinks {\n    font-weight: 400;\n  }\n}\n.tabs__container h4 {\n  text-align: left;\n  margin-top: 2em;\n  margin-bottom: 0em;\n}\n.tabs__container .tab {\n  overflow: hidden;\n  border-bottom: 1px solid black;\n  display: flex;\n  justify-content: space-between;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.tabs__container .tab :nth-child(1) {\n  margin-left: 0;\n}\n.tabs__container .tab :last-child {\n  margin-right: 0;\n}\n.tabs__container .tab button {\n  white-space: nowrap;\n  margin: 0 1em;\n  padding: 0 1em;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.0625em;\n  font-weight: initial;\n  direction: ltr;\n  font-variation-settings: \"wght\" 400, \"wdth\" 100;\n  position: relative;\n  background-color: inherit;\n  padding: 1em;\n  transition: 0.3s;\n  border-top-left-radius: 1.2em;\n  border-top-right-radius: 1.2em;\n}\n@media screen {\n  .tabs__container .tab button {\n    font-weight: 400;\n  }\n}\n.tabs__container .tab button:hover {\n  background-color: #eeeeee;\n  transition: 0.5s;\n}\n.tabs__container .tab button:hover::after {\n  position: absolute;\n  content: \"\";\n  background: black;\n  height: 4px;\n  width: 100%;\n  bottom: 0%;\n  left: 0;\n  transform: translate(0, 50%);\n  z-index: 999;\n}\n.tabs__container .tab button:focus::after {\n  position: absolute;\n  content: \"\";\n  background: black;\n  height: 4px;\n  width: 100%;\n  bottom: 0%;\n  left: 0;\n  transform: translate(0, 50%);\n  z-index: 999;\n}\n.tabs__container .tab button.active {\n  transition: 0.5s;\n}\n.tabs__container .tab button.active::after {\n  position: absolute;\n  content: \"\";\n  background: black;\n  height: 4px;\n  width: 100%;\n  bottom: 0%;\n  left: 0;\n  transform: translate(0, 50%);\n  z-index: 999;\n}\n.tabs__container .tabContent {\n  display: none;\n  padding: 6px 12px;\n}\n.tabs__container .active {\n  display: block;\n}\n\n.header {\n  position: relative;\n  background: white;\n  padding-bottom: 8em;\n}\n@media (min-width:61.25em) {\n  .header {\n    padding-bottom: 18em;\n  }\n}\n.header .header__wrapper {\n  border-bottom: 1px solid black;\n}\n.header .header-wrapper {\n  display: block;\n  position: fixed;\n  top: 0;\n  padding-bottom: 0;\n  width: 100%;\n  background-color: #ffffff;\n  box-shadow: 0px -11px 30px 0px black;\n  z-index: 9999;\n  transition: box-shadow 500ms;\n}\n@media (min-width:61.25em) {\n  .header .header-wrapper {\n    position: block;\n  }\n}\n.header .header-wrapper .header__wrapper {\n  padding: 1em;\n}\n@media (min-width:61.25em) {\n  .header .header-wrapper .header__wrapper {\n    padding: 2.5em 2.5em 10em;\n    transition: padding 0.2s ease;\n  }\n}\n.header .overlay {\n  opacity: 0;\n  position: fixed;\n  top: 8em;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(15px);\n  opacity: 0.9;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n@supports (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em)) {\n  .header .overlay {\n    background-color: rgba(255, 255, 255, 0);\n    -webkit-backdrop-filter: blur(2em);\n    backdrop-filter: blur(2em);\n  }\n}\n.header .header__links {\n  position: absolute;\n  margin: 0 auto;\n  width: 100%;\n  margin-top: 10em;\n}\n.header .header__links .main-nav__link {\n  margin: 2em 0;\n}\n@media (min-width:61.25em) {\n  .header .header__links .main-nav__link {\n    margin: 0;\n    margin-left: 1.5em;\n  }\n}\n.header .header__links :last-child {\n  margin-top: 1.5em;\n}\n@media (min-width:61.25em) {\n  .header .header__links :last-child {\n    position: relative;\n    margin-top: 0;\n  }\n}\n@media (min-width:61.25em) {\n  .header .header__links .shoppingcard--link {\n    margin-left: 5em;\n  }\n}\n@media (min-width:61.25em) {\n  .header .header__links .main-nav__list {\n    display: flex;\n  }\n}\n@media (min-width:61.25em) {\n  .header .header__links {\n    display: flex;\n    align-self: center;\n    position: relative;\n    margin: 0;\n    width: inherit;\n    margin-top: 0;\n  }\n}\n.header .main-nav {\n  display: flex;\n  justify-content: space-between;\n}\n@media (min-width:61.25em) {\n  .header .main-nav .has-fade {\n    visibility: visible;\n  }\n}\n@media (min-width:61.25em) {\n  .header .main-nav {\n    display: flex;\n    justify-content: flex-end;\n  }\n}\n\n.gender-nav {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: block;\n  padding: 1em;\n}\n\n.gender-nav__list {\n  display: flex;\n  justify-content: space-around;\n}\n\n@media (min-width:61.25em) {\n  .header-wrapper--fix .header {\n    padding-bottom: 14em;\n  }\n  .header-wrapper--fix .header-wrapper {\n    position: fixed;\n  }\n}\n@media (min-width:61.25em) and (min-width:61.25em) {\n  .header-wrapper--fix .header-wrapper .header__wrapper {\n    padding: 1.5em 2.5em;\n  }\n}\n@media (min-width:61.25em) {\n  .header-wrapper--fix .logo {\n    position: relative;\n    top: 0;\n    left: 0;\n    transform: none;\n  }\n}\n@media (min-width:61.25em) {\n  .header-wrapper--fix #logo-logo {\n    animation: fade-out 100ms ease-in-out forwards;\n    visibility: hidden;\n  }\n}\n@media (min-width:61.25em) {\n  .header-wrapper--fix #logo-brand {\n    animation: fade-out 100ms ease-in-out forwards;\n    visibility: hidden;\n  }\n}\n@media (min-width:61.25em) {\n  .header-wrapper--fix .icon--logo-brand {\n    display: none !important;\n  }\n}\n@media (min-width:61.25em) {\n  .header-wrapper--fix .main-nav {\n    display: flex;\n    justify-content: space-between;\n  }\n}\n\n.footer {\n  background: #171717;\n  width: 100%;\n  height: 40.625em;\n}\n.footer .metamenu__list {\n  display: flex;\n  width: 100%;\n}\n.footer .metamenu__list--item {\n  min-width: 33.333%;\n  text-align: center;\n}\n.footer .brand-box {\n  height: 80%;\n  width: 100%;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer .metamenu__socialmedia,\n.footer .metamenu__information {\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/scss/components/helpers/globals/_animations.scss","webpack://./src/scss/style.scss","webpack://./src/scss/components/helpers/globals/_reset.scss","webpack://./src/scss/components/helpers/globals/_colors.scss","webpack://./src/scss/components/helpers/globals/_variables.scss","webpack://./src/scss/components/helpers/grid/_spacings.scss","webpack://./src/scss/components/helpers/grid/_sections.scss","webpack://./src/scss/components/helpers/grid/_breakpoints.scss","webpack://./src/scss/components/helpers/grid/_gutter.scss","webpack://./src/scss/components/helpers/grid/_cols.scss","webpack://./src/scss/components/helpers/_allHelpers.scss","webpack://./src/scss/components/helpers/typography/_mixins.scss","webpack://./src/scss/components/helpers/typography/_fontFamily.scss","webpack://./node_modules/tiny-slider/src/tiny-slider.scss","webpack://./src/scss/components/atoms/headlines/_headlines.scss","webpack://./src/scss/components/atoms/buttons/_buttons.scss","webpack://./src/scss/components/atoms/buttons/_burger.scss","webpack://./src/scss/components/atoms/links/_logoheader.scss","webpack://./src/scss/components/helpers/globals/_mixins.scss","webpack://./src/scss/components/atoms/links/_link.scss","webpack://./src/scss/components/molecules/_card.scss","webpack://./src/scss/components/molecules/product-card/_product-card.scss","webpack://./src/scss/components/molecules/product-detail/_product-detail.scss","webpack://./src/scss/components/molecules/shoppingSums/_shoppingSums.scss","webpack://./src/scss/components/molecules/product-detail/_tabs.scss","webpack://./src/scss/components/organisms/Header/_header.scss","webpack://./src/scss/components/organisms/Footer/_footer.scss"],"names":[],"mappings":"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","sourcesContent":[".has-fade {\r\n    visibility: hidden;\r\n  }\r\n  \r\n  @keyframes fade-in {\r\n    from {\r\n      visibility: hidden;\r\n      opacity: 0;\r\n    }\r\n    1% {\r\n      visibility: visible;\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .fade-in {\r\n    animation: fade-in 200ms ease-in-out forwards;\r\n  }\r\n  \r\n  @keyframes fade-out {\r\n    from {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n    99% {\r\n      visibility: visible;\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      visibility: hidden;\r\n      opacity: 0;\r\n    }\r\n  }\r\n  .fade-out {\r\n    animation: fade-out 200ms ease-in-out forwards;\r\n  }\r\n\r\n\r\n// Background animations\r\n\r\n.overlay-area {\r\n  position: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n  background: radial-gradient(transparent 20%, #ba382f, #8942a8);\r\n  mix-blend-mode: color;\r\n  opacity: 0.5;\r\n}\r\n.animation-area {\r\n\t//background: linear-gradient(to left, #8942a8, #ba382f);\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n  filter: blur(2px);\r\n  opacity: 0.7;\r\n}\r\n.box-area {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n}\r\n.box-area li {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\tlist-style: none;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tbackground: #ba382f;\r\n\tanimation: animate 20s linear infinite;\r\n\tbottom: -150px;\r\n}\r\n.box-area li:nth-child(1) {\r\n\tleft: 86%;\r\n\twidth: 80px;\r\n\theight: 80px;\r\n\tanimation-delay: 0s;\r\n}\r\n.box-area li:nth-child(2) {\r\n\tleft: 12%;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tanimation-delay: 1.5s;\r\n\tanimation-duration: 10s;\r\n}\r\n.box-area li:nth-child(3) {\r\n\tleft: 70%;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tanimation-delay: 5.5s;\r\n}\r\n.box-area li:nth-child(4) {\r\n\tleft: 42%;\r\n\twidth: 150px;\r\n\theight: 150px;\r\n\tanimation-delay: 0s;\r\n\tanimation-duration: 15s;\r\n}\r\n.box-area li:nth-child(5) {\r\n\tleft: 65%;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tanimation-delay: 0s;\r\n}\r\n.box-area li:nth-child(6) {\r\n\tleft: 15%;\r\n\twidth: 110px;\r\n\theight: 110px;\r\n\tanimation-delay: 3.5s;\r\n}\r\n@keyframes animate {\r\n\t0% {\r\n\t\ttransform: translateY(-1500px) rotate(360deg);\r\n\t\topacity: 0;\r\n\t}\r\n\t100% {\r\n    transform: translateY(0) rotate(0deg);\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n//Hover, Active, Focus for buttons and cards\r\n\r\n.animState {\r\n    \r\n    animation: moveInBottom 2s ease-out;\r\n    animation-fill-mode: backwards;\r\n    transition: 0.5s;\r\n\r\n    &:hover, &:focus {\r\n        transition: 0.2s;\r\n        transform: translateY(-3px);\r\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    &:active {\r\n        transform: translateY(-1px);\r\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    &::after {\r\n        content: \"\";\r\n        display: inline-block;\r\n        height: 100%;\r\n        width: 100%;\r\n        border-radius: 100px;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        z-index: -1;\r\n        transition: all .4s;\r\n    }\r\n\r\n    &:hover::after {\r\n        transform: scaleX(1.4) scaleY(1.6);\r\n        opacity: 0;\r\n    }\r\n}","// This is an empty scss file for your custom styles - Please add your super duper awesome mega design styles here\r\n\r\n//helpers\r\n@import \"components/helpers/allHelpers\";\r\n\r\n* {\r\n    @include typography(16, regular);  \r\n}\r\n\r\n@import \"node_modules/tiny-slider/src/tiny-slider\";\r\n\r\n//atoms\r\n@import \"components/atoms/headlines/headlines\"; \r\n@import \"components/atoms/buttons/buttons\"; \r\n@import \"components/atoms/links/logoheader\"; \r\n@import \"components/atoms/links/link\"; \r\n\r\n//molecules\r\n@import \"components/molecules/card\"; \r\n@import \"components/molecules/product-card/product-card\"; \r\n@import \"components/molecules/product-detail/product-detail\"; \r\n@import \"components/molecules/shoppingSums/shoppingSums\"; \r\n\r\n@import \"components/molecules/product-detail/tabs\"; \r\n\r\n//organisms\r\n@import \"components/organisms/Header/header\"; \r\n@import \"components/organisms/Footer/footer\"; \r\n\r\n","* {\r\n    box-sizing: border-box;\r\n    border-collapse: separate;\r\n    outline: none;\r\n}\r\n\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: $white;\r\n\r\n    &.noscroll {\r\n        overflow: hidden;\r\n    }\r\n}\r\n\r\nul, ol {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nmain {\r\n    padding-top: $brand-height;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n  border-radius: 10px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n  width: 12px;\r\n  background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n  border-radius: 10px;\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n  background-color: rgb(202, 192, 192);\r\n}\r\n\r\n","$white: #fff;\r\n$black: #000;\r\n\r\n$primary__color: gray;\r\n$primary__color--darken: gray;\r\n$primary__color--strong-darken: gray;\r\n\r\n//parfÃ¼m farben\r\n","$base-font-size: 16px !default;\r\n$brand-height: 4.5em;","$spacing-xs: bu(); // === 12px\r\n$spacing-s: bu(2); // === 24px\r\n$spacing-m: bu(4); // === 48px\r\n$spacing-l: bu(6); // === 72px\r\n\r\n$spacing-wrapper--m: $spacing-m;\r\n$spacing-wrapper--l: $spacing-m * 1.5;\r\n\r\n.no-spacing {\r\n    margin: 0 !important;\r\n}",".section {\r\n  display: block;\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\r\n  clear: both;\r\n \r\n  &__inner {\r\n   display: block;\r\n   position: relative;\r\n   margin: 0;\r\n   padding: 0;\r\n\r\n   @include media(tablet) { \r\n    margin: 0 auto;\r\n    width: 40em;\r\n   }\r\n \r\n   @include media(laptop) {\r\n    width: 58em;\r\n   }\r\n\r\n   @include media(desktop) {\r\n    width: $screen-l-content;\r\n   }\r\n  }\r\n}\r\n\r\n\r\n// Spacing\r\n.container {\r\n    max-width: 69.375rem;\r\n    margin: 0 auto;\r\n  \r\n    &--pall {\r\n      padding-top: 4.375rem;\r\n      padding-right: 1.5rem;\r\n      padding-bottom: 4.375rem;\r\n      padding-left: 1.5rem;\r\n  \r\n      @include media(laptop){\r\n        padding-top: 6rem;\r\n        padding-bottom: 6rem;\r\n      }\r\n    }\r\n    &--py {\r\n      padding-top: 4.375rem;\r\n      padding-bottom: 4.375rem;\r\n      \r\n      @include media(laptop){\r\n        padding-top: 6rem;\r\n        padding-bottom: 6rem;\r\n      }\r\n    }\r\n    &--px {\r\n      padding-right: 1.5rem;\r\n      padding-left: 1.5rem;\r\n    }\r\n    &--pt {\r\n      padding-top: 4.375rem;\r\n      \r\n      @include media(laptop){\r\n        padding-top: 6rem;\r\n      }\r\n    }\r\n    &--pr {\r\n      padding-right: 1.5rem;\r\n    }\r\n    &--pb {\r\n      padding-bottom: 4.375rem;\r\n      \r\n      @include media(laptop){\r\n        padding-bottom: 6rem;\r\n      }\r\n    }\r\n    &--pl {\r\n      padding-left: 1.5rem;\r\n    }\r\n  }\r\n  \r\n  // Flexbox\r\n  .flex {\r\n    display: flex;\r\n  \r\n    &-jc-sb {\r\n      justify-content: space-between;\r\n    }\r\n    \r\n    &-jc-c {\r\n      justify-content: center;\r\n    }\r\n    \r\n    &-ai-c {\r\n      align-items: center;\r\n    }\r\n  }\r\n  \r\n","// media breakpoints: min-width\r\n$screen-xxs: em(309);\r\n$screen-xs: em(380);\r\n$screen-s: em(720);\r\n$screen-m: em(980);\r\n$screen-l: em(1440);\r\n\r\n$screen-l-content: $screen-l;\r\n\r\n//media query: min-width\r\n$min-phone: \"(max-width:\" + $screen-xxs + \")\";\r\n$phone: \"(min-width:\" + $screen-xs + \")\";\r\n$tablet: \"(min-width:\" + $screen-s + \")\";\r\n$laptop: \"(min-width:\" + $screen-m + \")\";\r\n$desktop: \"(min-width:\" + ($screen-l + em(48)) + \")\";\r\n\r\n// mixin breakpoints\r\n\r\n@mixin media ($media) {\r\n    @if $media == phone {\r\n        \r\n        @media #{$phone} {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $media == min-phone {\r\n        \r\n        @media #{$min-phone} {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    @else if $media == tablet {\r\n        \r\n        @media #{$tablet} {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    \r\n    @else if $media == laptop {\r\n        \r\n        @media #{$laptop} {\r\n            @content;\r\n        }\r\n    }\r\n\r\n    \r\n    @else if $media == desktop {\r\n\r\n        @media #{$desktop} {\r\n          @content;\r\n        }\r\n    }\r\n}","// default grid with gutter\r\n// ------------------------\r\n$gutter-width: bu(.5);\r\n\r\n.section-flex {\r\n\r\n  @include media(tablet) {\r\n    margin-right: -$gutter-width;\r\n    margin-left: -$gutter-width;  \r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n@each $col, $value in $cols {\r\n\r\n  .col--#{$col} {\r\n    display: block;\r\n    position: relative;\r\n    margin: 0;\r\n\r\n    @include media(tablet) {\r\n      padding: 0 $gutter-width;\r\n      width: $value;\r\n    }\r\n  }\r\n}\r\n","@use 'sass:math';\r\n\r\n$cols: (\r\n    \"1\":  math.div(100%, 12) * 1,\r\n    \"2\":  math.div(100%, 12) * 2,\r\n    \"3\":  math.div(100%, 12) * 3,\r\n    \"4\":  math.div(100%, 12) * 4,\r\n    \"5\":  math.div(100%, 12) * 5,\r\n    \"6\":  math.div(100%, 12) * 6,\r\n    \"7\":  math.div(100%, 12) * 7,\r\n    \"8\":  math.div(100%, 12) * 8,\r\n    \"9\":  math.div(100%, 12) * 9,\r\n    \"10\":  math.div(100%, 12) * 10,\r\n    \"11\":  math.div(100%, 12) * 11,\r\n    \"12\":  math.div(100%, 12) * 12\r\n)","@import \"globals/globals\";\r\n@import \"grid/grid\";\r\n@import \"typography/typography\";\r\n\r\n.hide-for-mobile {\r\n\r\n    @include media(laptop) {\r\n        display: inline-block !important;\r\n    }\r\n\r\n    \r\n    display: none !important;\r\n}\r\n\r\n.hide-for-desktop {\r\n\r\n    @include media(laptop) {\r\n        display: none !important;\r\n    }\r\n\r\n    display: inline-block !important;\r\n}\r\n\r\n.header-wrapper--fix {\r\n    .logo__inner {\r\n        .hide-for-desktop {\r\n\r\n            @include media(laptop) {\r\n                display: inline-block !important;\r\n            }\r\n        }\r\n    }\r\n}\r\n","// default typo mixins\r\n\r\n@mixin typography($font-size, $font-variation, $font-style: none) {\r\n    font-family: $font-family;\r\n    font-size: em($font-size);\r\n    font-weight: initial;\r\n    direction: ltr;\r\n\r\n        @if $font-variation == thin {\r\n            font-variation-settings: \"wght\" 250, \"wdth\" 100;\r\n\r\n            @media screen {\r\n                font-weight: 200;\r\n            }\r\n        }\r\n\r\n        @else if $font-variation == regular {\r\n            font-variation-settings: \"wght\" 400, \"wdth\" 100;\r\n\r\n            @media screen {\r\n                font-weight: 400;\r\n            }\r\n        }\r\n\r\n        @else if $font-variation == bold {\r\n            font-variation-settings: \"wght\" 700, \"wdth\" 100;\r\n\r\n            @media screen {\r\n                font-weight: 700;\r\n            }\r\n        }\r\n\r\n        @else if $font-variation == extraBold {\r\n            font-variation-settings: \"wght\" 800, \"wdth\" 100;\r\n\r\n            @media screen {\r\n                font-weight: 800;\r\n            }\r\n        }\r\n}","@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap');\r\n\r\n$font-family: 'Roboto', sans-serif;\r\n","// Version: 2.9.3\n\n.tns-outer {\n  padding: 0 !important; // remove padding: clientWidth = width + padding (0) = width\n  [hidden] { display: none !important; }\n  [aria-controls], [data-action] { cursor: pointer; }\n}\n.tns-slider {\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  transition: all 0s;\n  > .tns-item {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n}\n\n.tns-horizontal {\n  &.tns-subpixel {\n    white-space: nowrap;\n    > .tns-item {\n      display: inline-block;\n      vertical-align: top;\n      white-space: normal;\n    }\n  }\n  &.tns-no-subpixel {\n    &:after {\n      content: '';\n      display: table;\n      clear: both;\n    }\n    > .tns-item {\n      float: left;\n    }\n  }\n  &.tns-carousel {\n    &.tns-no-subpixel {\n      > .tns-item {\n        margin-right: -100%;\n      }\n    }\n  }\n}\n.tns-no-calc {\n  position: relative;\n  left: 0;\n}\n.tns-gallery {\n  position: relative;\n  left: 0;\n  min-height: 1px; // make sure slider container is visible\n  // overflow: hidden;\n  > .tns-item {\n    position: absolute;\n    left: -100%;\n    -webkit-transition: transform 0s, opacity 0s;\n    -moz-transition: transform 0s, opacity 0s;\n    transition: transform 0s, opacity 0s;\n  }\n  > .tns-slide-active {\n    position: relative;\n    left: auto !important;\n  }\n  > .tns-moving {\n    -webkit-transition: all 0.25s;\n    -moz-transition: all 0.25s;\n    transition: all 0.25s;\n  }\n}\n.tns-autowidth { display: inline-block; }\n.tns-lazy-img {\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n  opacity: 0.6;\n  &.tns-complete { opacity: 1; }\n}\n.tns-ah {\n  -webkit-transition: height 0s;\n  -moz-transition: height 0s;\n  transition: height 0s;\n}\n.tns-ovh { overflow: hidden; }\n.tns-visually-hidden { position: absolute; left: -10000em; }\n.tns-transparent { opacity: 0; visibility: hidden; }\n\n.tns-fadeIn {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  z-index: 0;\n}\n.tns-normal, .tns-fadeOut {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n\n\n// *** Fix a viewport issue in initialization\n.tns-vpfix {\n  white-space: nowrap;\n  > div, > li {\n    display: inline-block;\n  }\n}\n\n// *** Detecting browser capability ***\n$width: 310px;\n$height: 10px;\n$count: 70;\n$perpage: 3;\n\n.tns-t {\n  &-subp2 {\n    margin: 0 auto;\n    width: $width;\n    position: relative;\n    height: $height;\n    overflow: hidden;\n  }\n  &-ct {\n    width: (100% * $count / $perpage);\n    width: -webkit-calc(100% * #{$count} / #{$perpage});\n    width: -moz-calc(100% * #{$count} / #{$perpage});\n    width: calc(100% * #{$count} / #{$perpage});\n    position: absolute;\n    right: 0;\n    &:after {\n      content: '';\n      display: table;\n      clear: both;\n    }\n    > div {\n      width: (100% / $count);\n      width: -webkit-calc(100% / #{$count});\n      width: -moz-calc(100% / #{$count});\n      width: calc(100% / #{$count});\n      height: $height;\n      float: left;\n    }\n  }\n}\n","h1 {\r\n    font-size: rem(28);\r\n    font-weight: bold;\r\n    text-align: center;\r\n\r\n    @include media(tablet) {\r\n        //font-size: rem(32);\r\n    }\r\n}\r\n\r\nh2 {\r\n    font-size: rem(28);\r\n    text-align: center;\r\n}\r\n\r\nh3 {\r\n    font-size: rem(24);\r\n    text-align: center;\r\n}\r\n\r\nh4 {\r\n    \r\n    font-size: rem(20);\r\n}\r\n\r\n\r\n\r\nh1 {\r\n    @include typography(34, bold);\r\n  }\r\n\r\nh3 {\r\n  @include typography(22, bold);\r\n}\r\n","button {\r\n    background: none;\r\n    border: none;\r\n\r\n    &:hover {\r\n        cursor:pointer;\r\n    }\r\n}\r\n\r\n.primary__button {\r\n    border: 5px solid white;\r\n    background: white;\r\n    border-radius: 5em;\r\n    box-shadow: 0 8px 8px -10px #000;\r\n   \r\n    a {\r\n        display: block;\r\n        padding: 0.5em 2.5em;\r\n        color: black;\r\n        text-decoration: none;\r\n\r\n        &:hover {\r\n            text-decoration: none\r\n        }\r\n    }\r\n}\r\n\r\n.primary__button--transparent {\r\n    border: 5px solid transparent;\r\n    background: #ffffff7d;\r\n    box-shadow: 0px 4px 12px 0px #0000008c;\r\n}\r\n\r\n@import \"./burger\"","    // Hamburger Open Styles\r\n.header.open {\r\n  \r\n  .header__toggle {\r\n    > span:first-child {\r\n      transform: rotate(45deg);\r\n    }\r\n          \r\n    > span:nth-child(2) {\r\n      opacity: 0;\r\n    }\r\n          \r\n    > span:last-child {\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n}\r\n\r\n.header__toggle { // Mobile Menu Toggle\r\n\r\n  position: relative;\r\n  \r\n  > span {\r\n    display: block;\r\n    width: 26px;\r\n    height: 2px;\r\n    background-color: black;\r\n    transition: all 300ms ease-in-out;\r\n    transform-origin: 3px 1px;\r\n    \r\n    &:not(:last-child){\r\n      margin-bottom: 5px;\r\n    }\r\n  }\r\n}\r\n",".logo {\r\n    \r\n    display: inline-block;\r\n  \r\n    &__inner {\r\n  \r\n      .icon--logo {\r\n        position: relative;\r\n        display: inline-block;\r\n      }\r\n    }\r\n\r\n    \r\n    @include media (laptop) {\r\n      position: absolute;\r\n      top: 43%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n    }\r\n  \r\n    .icon--logo {\r\n      @include svg-icon-size(em(35), em(35));\r\n    }\r\n\r\n  .icon--logo-brand {\r\n\r\n    #logo-logo,\r\n    #logo-brand {\r\n      @include media(laptop) {\r\n        @include svg-icon-size(em(250), em(250));\r\n        position: inherit;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.brand-box__inner {\r\n  @include svg-icon-size(em(250), em(250));\r\n\r\n  @include media(laptop) {\r\n    @include svg-icon-size(em(350), em(350));  \r\n  }\r\n}","// svg icon size and its parent\r\n\r\n@mixin svg-icon-size($width, $height: $width) {\r\n    position: relative;\r\n    width: $width;\r\n    height: $height;\r\n    min-width: $width;\r\n\r\n    svg {\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        width: $width;\r\n        height: $height;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n}\r\n\r\n// svg icon size and its parent\r\n\r\n@mixin img-svg-icon-size($width, $height: $width) {\r\n\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    width: $width;\r\n    height: $height;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    transform: translateY(-50%);\r\n    content: \"\";\r\n}\r\n\r\n\r\n\r\n",".navbar-links,\r\n.gender-nav__link a {\r\n\r\n    @include typography(30, regular);\r\n\r\n    color: black;\r\n    text-decoration: none;\r\n    transition: color 50ms ease-in-out;\r\n    position: relative;\r\n    \r\n  &:hover, &:active, &:focus {\r\n    color: #808080;\r\n\r\n    &::before, &::after {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @include media(\"laptop\") {\r\n    @include typography(20, regular);\r\n  }\r\n\r\n  &:after {\r\n    position: absolute;\r\n    display: block;\r\n    content: \"\";\r\n    height: 2px;\r\n    background-color: #a0a0a0;\r\n    opacity: 0;\r\n    transition: .2s ease;\r\n    right: 0;\r\n    left: 0;\r\n  }\r\n}\r\n\r\n.gender-nav__link a {\r\n  @include typography(20, regular);\r\n}\r\n\r\n.icon--link {\r\n  @include svg-icon-size(em(20), em(20));\r\n\r\n  svg {\r\n\r\n    &:hover, &:active, &:focus {\r\n      opacity: 0.5;\r\n\r\n      &::before {\r\n        opacity: 1;\r\n      }\r\n    }\r\n\r\n    @include media(laptop) {\r\n      top: 35%;\r\n    }\r\n  }\r\n\r\n  &:after {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.metamenu__list--item a {\r\n\r\n    @include typography(15, regular);  \r\n    \r\n    color: white;\r\n    text-decoration: none;\r\n    transition: color 50ms ease-in-out;\r\n    position: relative;\r\n    \r\n  &:hover, &:active, &:focus {\r\n    color: darken($color: white, $amount: 25);\r\n\r\n    &::before, &::after {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @include media(\"laptop\") {\r\n    @include typography(15, regular);  \r\n  }\r\n\r\n  &:after {\r\n    position: absolute;\r\n    display: block;\r\n    content: \"\";\r\n    height: 2px;\r\n    background-color: darken($color: white, $amount: 25);\r\n    opacity: 0;\r\n    transition: .2s ease;\r\n    right: 0;\r\n    left: 0;\r\n  }\r\n}\r\n",".hero__teaser {\r\n    height: 100%;\r\n\r\n    .section {\r\n        &__inner {\r\n            display: flex;\r\n            min-height: 80vh;\r\n            flex-direction: column;\r\n            padding: 2.5em 1.5em 10em;\r\n            justify-content: space-between;\r\n\r\n            @include media(laptop) {\r\n              padding: 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    .primary__button {\r\n\r\n      min-width: 30%;\r\n      margin: 0 auto;\r\n      @include media(laptop) {\r\n        min-width: none!important;\r\n        margin: 0;\r\n        margin-left: auto;   \r\n      }\r\n    }\r\n}\r\n\r\n.hero__teaser--image {\r\n    position: absolute;\r\n    background: url(\"./assets/images/blush-visual.png\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n.card__teaser--glas {\r\n    position: relative;\r\n    height: em(200);\r\n    margin: 0 auto;\r\n    border: 1px solid #fff;\r\n    padding: 1.5em;\r\n    border-radius: 1.5em;\r\n    box-shadow: 0 18px 95px -43px #000;\r\n    overflow: hidden;\r\n\r\n    background: rgba(255,255,255, 0.2);\r\n    backdrop-filter: blur(5px);\r\n    border: solid 2px transparent;\r\n    background-clip: padding-box;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    .card__inner {\r\n        position: relative;\r\n        z-index: 2;\r\n\r\n        @include media(laptop) {\r\n          margin-left: auto;        \r\n        }\r\n\r\n        h1, h3 {\r\n          @include media(laptop) {\r\n            text-align: right;\r\n          }\r\n        }\r\n    }\r\n    \r\n    @include media(laptop) {\r\n\r\n      display: flex;\r\n      flex-direction: column;\r\n      width: em(350);\r\n      margin: 0;\r\n      margin-left: auto;\r\n      margin-top: 2.5em;\r\n      \r\n      height: auto;\r\n      padding: 1.5em;\r\n    }\r\n\r\n    @include media(desktop) {\r\n      width: em(500);\r\n      height: em(300);\r\n      \r\n      padding: 1.5em 3em;\r\n    }\r\n}\r\n\r\n  .holder {\r\n    position: relative;\r\n    &:before,\r\n    &:after {\r\n      animation: orbit 5s linear infinite;\r\n      border-radius: 50%;\r\n      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\r\n      content: \"\";\r\n      height: 150px;\r\n      position: absolute;\r\n      width: 150px;\r\n    }\r\n    &:before {\r\n      background: lightcoral;\r\n      background: radial-gradient(to bottom left, rgba(207, 109, 109, 0.897), #ffaa9c);\r\n    }\r\n    &:after {\r\n      animation-delay: -2.5s;\r\n      background: rgb(177, 177, 177);\r\n      background: radial-gradient(to top left, #5a5a5a, #bebebe);\r\n      right: 0;\r\n      top: 0;\r\n      z-index: -1;\r\n    }\r\n  }",".main-headline {\r\n    margin: 3em 0;\r\n    position: relative;\r\n\r\n    &::before {\r\n        position: absolute;\r\n        content: \"\";\r\n        height: 2px;\r\n        width: 10%;\r\n        left: 50%;\r\n        bottom: -20px;\r\n        transform: translate(-50%, 0%);\r\n\r\n        background: black;\r\n    }\r\n\r\n\r\n}\r\n\r\n.glas {\r\n    border: 1px solid #fff;\r\n    border-radius: 1.5em;\r\n    box-shadow: 0 18px 95px -43px #000;\r\n    background: rgba(255,255,255, 0.2);\r\n    backdrop-filter: blur(5px);\r\n    border: solid 2px transparent;\r\n    background-clip: padding-box;\r\n}\r\n\r\n.product-warenkorb-link {\r\n\r\n    svg {\r\n        width: 1.2em;\r\n        height: 1.2em;\r\n        transform: translate(35%, 19%);\r\n        margin-left: .5em;\r\n    }\r\n}\r\n\r\n.product-article {\r\n    cursor: pointer;\r\n}\r\n\r\n.products__list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n\r\n    @include media(tablet) {  \r\n        margin-right: -1.5em;\r\n        margin-left: -1.5em;\r\n    }\r\n\r\n    @include media(laptop) {\r\n\r\n    }\r\n}\r\n\r\n.products__list--item {\r\n    width: calc(100%/1);\r\n    margin-bottom: 5.5em;\r\n    padding: 0 1.5em;\r\n    max-width: 24em;\r\n    margin-top: 5em;\r\n    max-width:24em;\r\n\r\n    @include media(tablet) {\r\n        max-width: 30em;;\r\n    }\r\n\r\n    @include media(laptop) {\r\n        width: calc(100%/2);\r\n    }\r\n\r\n    @include media(desktop) {\r\n        width: calc(100%/3);\r\n    }\r\n}\r\n\r\n.product-card {\r\n    padding: 1em 1em 1em;\r\n\r\n    @include media (tablet) {\r\n        padding: 2.5em 3em 2em;\r\n    }\r\n\r\n    @include media (laptop) {\r\n        padding: 2.5em 2em 2em;\r\n    }\r\n}\r\n\r\n.product-card__inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: baseline;\r\n\r\n    //width: 65%;\r\n\r\n    h4, p {\r\n        margin: .2em 0;\r\n    }\r\n\r\n    h4 {\r\n        @include typography(18, bold);\r\n\r\n        @include media(tablet) {\r\n            @include typography(26, bold);\r\n        }\r\n    }\r\n\r\n    .pricetag {\r\n        margin: 1em 0;\r\n    }\r\n}\r\n\r\n\r\n.product-article {\r\n    position: relative;\r\n\r\n    &::after {\r\n        position: absolute;\r\n        background: url(\"./assets/images/perfume-product.png\");\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n \r\n        content: \"\";\r\n        //transform: translate(-4%, -32%);\r\n        top: -36px;\r\n        right: 0;\r\n        height: 14em;\r\n        width: 6em;\r\n        content: \"\";\r\n\r\n        @include media(min-phone) {\r\n            display: none;\r\n        }\r\n\r\n        @include media(phone) {\r\n            display: inline-block;\r\n        }\r\n\r\n        @include media(tablet) {\r\n            top: -42px;\r\n            right: 0;\r\n            height: 18em;\r\n            width: 8em;\r\n        }\r\n    }\r\n}\r\n\r\n.product-warenkorb-link {\r\n    @include typography(10, regular);\r\n\r\n    @include media(tablet) {\r\n        @include typography(15, regular);\r\n    }\r\n}\r\n",".sperater {\r\n    width: 100%;\r\n    background-color: black;\r\n    height: 1px;\r\n    margin: 1.5em 0;\r\n}\r\n\r\n\r\n.product-detail {\r\n\r\n    position: relative;\r\n\r\n    .primary__button {\r\n        margin: 1em 0;\r\n        width: 100%;\r\n    }\r\n\r\n    .section__inner {\r\n        margin: 1.5em;\r\n\r\n        @include media(tablet) {\r\n            margin: 0 auto;\r\n        }\r\n    }\r\n\r\n    .product {\r\n        max-width: 25em;        \r\n        margin: 0 auto;\r\n\r\n        @include media (tablet){\r\n            margin: 0;\r\n            margin-left: auto;\r\n        }\r\n    }\r\n\r\n    .product-card {\r\n        @include media (tablet){\r\n            padding: 2.5em 2em 2em;\r\n        }\r\n    }\r\n}\r\n\r\n//**********************************************************SLIDER**********************************************************/////////\r\n//**********************************************************SLIDER**********************************************************/////////\r\n//**********************************************************SLIDER**********************************************************/////////\r\n//**********************************************************SLIDER**********************************************************/////////\r\n\r\n.slider-container {\r\n    position:relative;\r\n}\r\n\r\nimg {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 9em;\r\n    height: 100%;\r\n}\r\n\r\n.my-slider {\r\n    position: relative;    \r\n}\r\n\r\n.slider-item {\r\n    padding: 1.5rem .75rem;\r\n    position: relative;\r\n    \r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n\r\n.controls {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    left: 0;    \r\n    background: none;\r\n    width: 100%;    \r\n    top: 50%;\r\n    transform: translatey(-50%);\r\n    display: flex;\r\n    align-items: center;    \r\n    justify-content: center;\r\n    z-index: 999;\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n\r\n    li:hover {\r\n        cursor: pointer;        \r\n    }\r\n}\r\n\r\n.next, .prev {\r\n    font-weight: 800;\r\n    width: 2em;\r\n    border-radius: 100%!important;\r\n\r\n    margin: 0 2em;\r\n    margin-top: 2em;\r\n\r\n    :active {\r\n        background: red!important;\r\n    }\r\n}\r\n\r\n.tns-nav {\r\n    display: none;\r\n}",".shoppingSum {\r\n\r\n    .shoppingSum__wrapper {\r\n        margin: 5em 0;\r\n    }\r\n\r\n    .button-container {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n}\r\n\r\n//**************************************************************WARENKORB********************************************************************\r\n//**************************************************************WARENKORB********************************************************************\r\n//**************************************************************WARENKORB********************************************************************\r\n//**************************************************************WARENKORB********************************************************************\r\n//**************************************************************WARENKORB********************************************************************\r\n\r\n.shopping-cart {\r\n\r\n    .product-title {\r\n        h3 {\r\n            margin-top: 0;\r\n            text-align: left;\r\n        }\r\n    }\r\n\r\n    .column-label {\r\n        label {\r\n            display: none;\r\n        }\r\n    }\r\n    \r\n    .product-image {\r\n        display: inline-block;\r\n        img {\r\n            width: 5em;\r\n            padding: 1em;\r\n            border: 1px solid black;\r\n\r\n            @include media (laptop) {\r\n                width: 7em;\r\n            }\r\n        }\r\n    }\r\n\r\n    .product {\r\n        position: relative;\r\n        margin: 4em 0;\r\n        padding-bottom: 2em;\r\n        border-bottom: 1px solid black;\r\n    }\r\n\r\n    .product-removal {\r\n        display: inline-block;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n\r\n    .image-detail__wrapper {\r\n        display: flex;\r\n\r\n        .product-details {\r\n            margin-left: 1em;\r\n        }\r\n    }\r\n\r\n    .quantity-price__wrapper {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin-top: 2em;\r\n\r\n        .product-quantity {\r\n            \r\n            display: inline-block;\r\n            input {\r\n                width: 20%;\r\n            }\r\n        }\r\n    }\r\n\r\n    .total__wrapper {\r\n        margin-bottom: 2em;\r\n    }\r\n\r\n    .coupon {\r\n        margin-bottom: 2em;\r\n        \r\n        @include media(tablet) {  \r\n            margin-bottom: 2em;\r\n        }\r\n    }\r\n\r\n    .coupon__inner {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n\r\n        .label-coupon {\r\n            width: 100%;\r\n            margin-bottom: 1em;\r\n        }\r\n\r\n        .input-text {\r\n            width: 45%;\r\n        }\r\n\r\n        .primary__button{\r\n            width: 50%;\r\n        }\r\n    }\r\n\r\n    .total {\r\n\r\n        @include media(tablet) {\r\n            width: 30%;\r\n            margin-left: auto;\r\n        }\r\n        \r\n        .totals-item {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            margin-bottom: 1em;\r\n        }\r\n    }\r\n}\r\n\r\n//Lieferung\r\n\r\n.delivery__wrapper {\r\n\r\n    .delivery-customerinformations {\r\n        margin-bottom: 2em;\r\n\r\n        @include media(tablet) {\r\n            margin-bottom: 0;\r\n        }\r\n    }\r\n\r\n    margin-top: 2em;\r\n\r\n    h4 {\r\n        margin-top: 0 !important;\r\n    }\r\n\r\n    margin-bottom: 3em;\r\n\r\n    .deliver__inner {\r\n        padding: 1em;\r\n        margin-top: 1em;\r\n\r\n        h3 {\r\n            text-align: left;\r\n        }\r\n    }\r\n\r\n    .label__wrapper {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        border-bottom: 1px solid black;\r\n        padding-bottom: .5em;\r\n    }\r\n\r\n    .image-detail__wrapper {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .product-line-price {\r\n        margin-top: 1em;\r\n        text-align: right;\r\n    }\r\n\r\n    .image-detail__wrapper {\r\n        padding: 1em 0;\r\n        border-bottom: 1px solid rgb(192, 192, 192);\r\n    }\r\n}\r\n\r\n//FORMS FORMS FORMS FORMS FORMS FORMS FORMS FORMS//\r\n//FORMS FORMS FORMS FORMS FORMS FORMS FORMS FORMS//\r\n//FORMS FORMS FORMS FORMS FORMS FORMS FORMS FORMS//\r\n//FORMS FORMS FORMS FORMS FORMS FORMS FORMS FORMS//\r\n\r\n.delivery-customerinformations {\r\n\r\n    h4 {\r\n        margin-bottom: 1.5em !important;\r\n    }\r\n    fieldset {\r\n        \r\n        margin-bottom: 2em;\r\n        border: none;\r\n\r\n        label {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    .row {\r\n        margin-bottom: 1em;\r\n    }\r\n\r\n    input {\r\n        margin-top: .5em;\r\n        border: 1px solid rgb(37, 37, 37);\r\n        border-radius: .3em;\r\n        padding: .5em;\r\n    }\r\n}\r\n\r\n","    \r\n.product-descriptions__wrapper {\r\n    margin-top: 7em;\r\n    margin-bottom: 8em;\r\n}\r\n\r\n.tabs__container{\r\n\r\n    .tabLinks {\r\n        @include typography(5, regular)\r\n    }\r\n\r\n    h4 {\r\n        text-align: left;\r\n        margin-top: 2em;\r\n        margin-bottom: 0em;\r\n    }\r\n\r\n    .tab {\r\n        overflow: hidden;\r\n        border-bottom: 1px solid black;\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        \r\n        overflow-x: auto;\r\n        -webkit-overflow-scrolling: touch;\r\n\r\n        :nth-child(1) {\r\n            margin-left: 0;\r\n        }\r\n\r\n        :last-child {\r\n            margin-right: 0;\r\n        }\r\n      }\r\n\r\n      /* Style the buttons inside the tab */\r\n      .tab button {\r\n        white-space: nowrap;\r\n        margin: 0 1em;\r\n        padding: 0 1em;\r\n        @include typography(17, regular);\r\n        position: relative;\r\n        background-color: inherit;\r\n        padding: 1em;\r\n        transition: 0.3s;\r\n        border-top-left-radius: 1.2em;\r\n        \r\n        border-top-right-radius: 1.2em;\r\n        \r\n        &:hover {\r\n            background-color: rgb(238, 238, 238);\r\n            transition: .5s;\r\n\r\n            &::after {\r\n                position: absolute;\r\n                content: \"\";\r\n                background: black;\r\n                height: 4px;\r\n                width: 100%;\r\n                bottom: 0%;\r\n                left: 0;\r\n                transform: translate(0, 50%);\r\n                z-index: 999;\r\n            }\r\n        }\r\n\r\n        &:focus {\r\n            &::after {\r\n                position: absolute;\r\n                content: \"\";\r\n                background: black;\r\n                height: 4px;\r\n                width: 100%;\r\n                bottom: 0%;\r\n                left: 0;\r\n                transform: translate(0, 50%);\r\n                z-index: 999;\r\n            }\r\n        }\r\n      }\r\n\r\n      /* Change background color of buttons on hover */\r\n  \r\n\r\n      /* Create an active/current tablink class */\r\n      .tab button.active {\r\n        transition: .5s;\r\n\r\n        &::after {\r\n            position: absolute;\r\n            content: \"\";\r\n            background: black;\r\n            height: 4px;\r\n            width: 100%;\r\n            bottom: 0%;\r\n            left: 0;\r\n            transform: translate(0, 50%);\r\n            z-index: 999;\r\n        }\r\n      }\r\n\r\n      /* Style the tab content */\r\n      .tabContent  {\r\n        display: none;\r\n        padding: 6px 12px;\r\n      }\r\n\r\n      .active {\r\n        display: block;\r\n      }\r\n}   \r\n    ",".header {\r\n  position: relative;\r\n  background: white; \r\n  padding-bottom: 8em;\r\n\r\n  @include media(laptop) {\r\n    padding-bottom: 18em;\r\n  }\r\n\r\n  .header__wrapper {\r\n    border-bottom: 1px solid black;\r\n  }\r\n\r\n  .header-wrapper {\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    padding-bottom: 0;\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    box-shadow: 0px -11px 30px 0px black;\r\n    z-index: 9999;\r\n    transition: box-shadow 500ms;\r\n\r\n    @include media(laptop) {\r\n      position: block;\r\n    }\r\n\r\n    .header__wrapper {\r\n      padding: 1em;\r\n\r\n      @include media(laptop) {\r\n        padding: 2.5em 2.5em 10em;\r\n        transition: padding 0.2s ease; \r\n      }\r\n    }\r\n  }\r\n\r\n  .overlay {\r\n    opacity: 0;\r\n    position: fixed;\r\n    top: 8em;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    backdrop-filter: blur(15px);\r\n    opacity: 0.9;\r\n    \r\n    background-color: rgba(255, 255, 255, .9);\r\n  }\r\n\r\n  @supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))) {\r\n    .overlay  {\r\n      background-color: rgba(255, 255, 255, 0);\r\n      -webkit-backdrop-filter: blur(2em);\r\n      backdrop-filter: blur(2em);\r\n    }\r\n  }\r\n\r\n  .header__links {\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    margin-top: 10em;\r\n\r\n    .main-nav__link {\r\n      margin: 2em 0;\r\n\r\n      @include media(\"laptop\") {\r\n        margin: 0;\r\n        margin-left: 1.5em;\r\n      }\r\n    }\r\n\r\n    :last-child {\r\n      margin-top: 1.5em;\r\n\r\n      @include media(\"laptop\") {\r\n        position: relative;\r\n        margin-top: 0;\r\n      }\r\n    }\r\n\r\n    .shoppingcard--link {\r\n      @include media(laptop) {\r\n        margin-left: 5em;\r\n      }\r\n    }\r\n\r\n    .main-nav__list {\r\n      @include media(\"laptop\") {\r\n        display: flex;\r\n      }\r\n    }\r\n\r\n    @include media(\"laptop\") {\r\n      display: flex;\r\n      align-self: center;\r\n      position: relative;\r\n      margin: 0;\r\n      width: inherit;\r\n      margin-top: 0;\r\n    }\r\n  }\r\n\r\n  .main-nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    .has-fade {\r\n      @include media(laptop) {\r\n        visibility: visible;\r\n      }\r\n    }\r\n\r\n    @include media(laptop) {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n    }\r\n  }\r\n}\r\n\r\n.gender-nav {\r\n  position: relative;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  display: block;\r\n  padding: 1em;\r\n}\r\n\r\n.gender-nav__list {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n// HEADER FIXED\r\n.header-wrapper--fix {\r\n\r\n  @include media(laptop) {\r\n\r\n    .header {\r\n      padding-bottom: 14em;\r\n    }\r\n    \r\n    .header-wrapper {\r\n      position: fixed;\r\n      .header__wrapper {\r\n        @include media(laptop) {\r\n          padding: 1.5em 2.5em;\r\n        }\r\n      }\r\n    }\r\n  \r\n    .logo {\r\n      position: relative;\r\n      top: 0;\r\n      left: 0;\r\n      transform: none;\r\n    }\r\n  \r\n    #logo-logo {\r\n      animation: fade-out 100ms ease-in-out forwards;\r\n      visibility: hidden;\r\n    }\r\n  \r\n    #logo-brand {\r\n      animation: fade-out 100ms ease-in-out forwards;\r\n      visibility: hidden;\r\n    }\r\n  \r\n    .icon--logo-brand {\r\n      display: none !important;\r\n    }\r\n  \r\n    .main-nav {\r\n      display: flex;\r\n      justify-content: space-between;\r\n    }\r\n  }\r\n}",".footer {\r\n    background: #171717;\r\n    width: 100%;\r\n    height: em(650);\r\n\r\n    .metamenu__list {\r\n        display: flex;\r\n        width: 100%;\r\n\r\n        &--item {\r\n            min-width: 33.333%;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    .brand-box {\r\n        height: 80%;\r\n        width: 100%;\r\n        border-top: 1px solid white;\r\n        border-bottom: 1px solid white;\r\n\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    .metamenu__socialmedia,\r\n    .metamenu__information {\r\n        height: 10%;\r\n\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addCSSRule.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCSSRule": () => (/* binding */ addCSSRule)
/* harmony export */ });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addClass.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => (/* binding */ addClass)
/* harmony export */ });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport ?
    function (el, str) {
      if (!(0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!(0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addEvents.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addEvents.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvents": () => (/* binding */ addEvents)
/* harmony export */ });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__.passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayFromNodeList": () => (/* binding */ arrayFromNodeList)
/* harmony export */ });
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/caf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/caf.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caf": () => (/* binding */ caf)
/* harmony export */ });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/calc.js":
/*!******************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/calc.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calc": () => (/* binding */ calc)
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : div.remove();

  return result;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/checkStorageValue.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStorageValue": () => (/* binding */ checkStorageValue)
/* harmony export */ });
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/classListSupport.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/classListSupport.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classListSupport": () => (/* binding */ classListSupport)
/* harmony export */ });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/createStyleSheet.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStyleSheet": () => (/* binding */ createStyleSheet)
/* harmony export */ });
// create and append style sheet
function createStyleSheet (media, nonce) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // Add nonce attribute for Content Security Policy
  if (nonce) { style.setAttribute("nonce", nonce); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/docElement.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/docElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "docElement": () => (/* binding */ docElement)
/* harmony export */ });
var docElement = document.documentElement;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/events.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/events.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": () => (/* binding */ Events)
/* harmony export */ });
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/extend.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/extend.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": () => (/* binding */ extend)
/* harmony export */ });
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/forEach.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/forEach.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forEach": () => (/* binding */ forEach)
/* harmony export */ });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getAttr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAttr": () => (/* binding */ getAttr)
/* harmony export */ });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getBody.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBody": () => (/* binding */ getBody)
/* harmony export */ });
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCssRulesLength": () => (/* binding */ getCssRulesLength)
/* harmony export */ });
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getEndProperty.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndProperty": () => (/* binding */ getEndProperty)
/* harmony export */ });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getSlideId.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getSlideId.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSlideId": () => (/* binding */ getSlideId)
/* harmony export */ });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getTouchDirection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTouchDirection": () => (/* binding */ getTouchDirection)
/* harmony export */ });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/has3DTransforms.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "has3DTransforms": () => (/* binding */ has3DTransforms)
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasAttr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasAttr": () => (/* binding */ hasAttr)
/* harmony export */ });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasClass.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classListSupport": () => (/* reexport safe */ _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport),
/* harmony export */   "hasClass": () => (/* binding */ hasClass)
/* harmony export */ });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ "./node_modules/tiny-slider/src/helpers/classListSupport.js");


var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hideElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hideElement.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideElement": () => (/* binding */ hideElement)
/* harmony export */ });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isNodeList.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isNodeList.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNodeList": () => (/* binding */ isNodeList)
/* harmony export */ });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isVisible.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isVisible.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVisible": () => (/* binding */ isVisible)
/* harmony export */ });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/jsTransform.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/jsTransform.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsTransform": () => (/* binding */ jsTransform)
/* harmony export */ });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mediaquerySupport": () => (/* binding */ mediaquerySupport)
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function mediaquerySupport () {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  
  var doc = document,
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : div.remove();

  return position === "absolute";
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/passiveOption.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/passiveOption.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passiveOption": () => (/* binding */ passiveOption)
/* harmony export */ });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/percentageLayout.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "percentageLayout": () => (/* binding */ percentageLayout)
/* harmony export */ });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = (0,_getBody_js__WEBPACK_IMPORTED_MODULE_0__.getBody)(),
      docOverflow = (0,_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__.setFakeBody)(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? (0,_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__.resetFakeBody)(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/raf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/raf.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raf": () => (/* binding */ raf)
/* harmony export */ });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeAttrs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAttrs": () => (/* binding */ removeAttrs)
/* harmony export */ });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function removeAttrs(els, attrs) {
  els = ((0,_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__.isNodeList)(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeCSSRule.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeCSSRule": () => (/* binding */ removeCSSRule)
/* harmony export */ });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeClass.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeClass.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClass": () => (/* binding */ removeClass)
/* harmony export */ });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__.classListSupport ?
    function (el, str) {
      if ((0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if ((0,_hasClass_js__WEBPACK_IMPORTED_MODULE_0__.hasClass)(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeEvents.js":
/*!**************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeEvents.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeEvents": () => (/* binding */ removeEvents)
/* harmony export */ });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__.passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/resetFakeBody.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetFakeBody": () => (/* binding */ resetFakeBody)
/* harmony export */ });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.offsetHeight;
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setAttrs.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setAttrs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAttrs": () => (/* binding */ setAttrs)
/* harmony export */ });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function setAttrs(els, attrs) {
  els = ((0,_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__.isNodeList)(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setFakeBody.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFakeBody": () => (/* binding */ setFakeBody)
/* harmony export */ });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__.docElement.appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setLocalStorage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/showElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/showElement.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showElement": () => (/* binding */ showElement)
/* harmony export */ });
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/toDegree.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/toDegree.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDegree": () => (/* binding */ toDegree)
/* harmony export */ });
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/whichProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/whichProperty.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whichProperty": () => (/* binding */ whichProperty)
/* harmony export */ });
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/tiny-slider.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tns": () => (/* binding */ tns)
/* harmony export */ });
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/caf.js */ "./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extend.js */ "./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/getSlideId.js */ "./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/calc.js */ "./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ "./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ "./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/toDegree.js */ "./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/forEach.js */ "./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/addClass.js */ "./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/removeClass.js */ "./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/hasAttr.js */ "./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/getAttr.js */ "./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/setAttrs.js */ "./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ "./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/hideElement.js */ "./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/showElement.js */ "./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/isVisible.js */ "./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/whichProperty.js */ "./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ "./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/addEvents.js */ "./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/removeEvents.js */ "./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/events.js */ "./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/jsTransform.js */ "./node_modules/tiny-slider/src/helpers/jsTransform.js");
// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}




































var tns = function(options) {
  options = (0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tC']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tC', (0,_helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__.calc)(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tPL']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tPL', (0,_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__.percentageLayout)(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tMQ']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tMQ', (0,_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__.mediaquerySupport)(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTf']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTf', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['t3D']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 't3D', (0,_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__.has3DTransforms)(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTDu']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTDu', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTDe']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTDe', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tADu']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tADu', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tADe']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tADe', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTE']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTE', (0,_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__.getEndProperty)(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tAE']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tAE', (0,_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__.getEndProperty)(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};

  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = (0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = (0,_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__.createStyleSheet)(null, getOption('nonce')),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__.Events(),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || (0,_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__.getSlideId)(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ?
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex :
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    if (el == null) { return; }
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ?
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ?
        CALC + '(100% / ' + dividend + ')' :
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal); }
      (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(cloneFirst, slideClonedClass);
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(cloneLast, slideClonedClass);
          (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(imgs, function(img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, imgEvents);
            (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loading');

            img.src = src;
          // data img
          } else {
            imgLoaded(img);
          }
        }
      });

      // set imgsComplete
      (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck((0,_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__.arrayFromNodeList)(imgs), function() { imgsComplete = true; }); });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck((0,_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__.arrayFromNodeList)(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        (Math.abs(left - right) <= 1) ?
          initSliderTransformCore() :
          setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();

    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId, 'font-size:0;', (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      } else if (carousel) {
        (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + '-mw', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + '-iw', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId, str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, hoverEvents); }
        if (autoplayResetOnVisibility) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, visibilityEvent); }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(navItems, function(item, i) {
          (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '[aria-controls^=' + slideId + '-item]', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(navItems[navCurrentIndex], 'tabindex');
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(navItems[navCurrentIndex], navActiveClass);

      // add events
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(prevButton, {'data-controls' : 'prev'});
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(controlsContainer, controlsEvents);
      } else {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(prevButton, controlsEvents);
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, eve);
    }

    if (touch) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, dragEvents); }
    if (arrowKeys) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, docmentKeydownEvent); }
    if (controlsContainer) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(controlsContainer, controlsEvents); }
    if (navContainer) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(navContainer, navEvents); }

    // autoplay
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, hoverEvents);
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, visibilityEvent);
    if (autoplayButton) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, eve);
    }
    if (touch) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, touchEvents); }
    if (mouseDrag) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, docmentKeydownEvent) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(controlsContainer);
        } else {
          if (prevButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(prevButton); }
          if (nextButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(nextButton); }
        }
      } else {
        if (controlsContainer) {
          (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(controlsContainer);
        } else {
          if (prevButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(prevButton); }
          if (nextButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(navContainer);
        updateNavVisibility();
      } else {
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(navContainer)
      }
    }
    if (touch !== touchTem) {
      touch ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, touchEvents, options.preventScrollOnTouch) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, dragEvents) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, hoverEvents) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, visibilityEvent) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          (0,_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__.removeCSSRule)(sheet, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet) - 1);
          (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ?
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(autoplayButton); }
    if (!nav && navContainer) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(controlsContainer);
      } else {
        if (prevButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(prevButton); }
        if (nextButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(autoplayButton); }
    if (nav && navContainer) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(navContainer); }
    if (controls) {
      if (controlsContainer) {
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(controlsContainer);
      } else {
        if (prevButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(prevButton); }
        if (nextButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(slideItems[i], str); }
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(slideItems[i], str); }
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(slideItems[j]); }
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(innerWrapper, ['style']); }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(item, ['style']);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(slideItems[j]); }
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);

      getImageArray.apply(null, arg).forEach(function (img) {
        if (!(0,_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__.hasClass)(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, eve);

          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, imgEvents);

          // update src
          img.src = (0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(img, 'data-src');

          // update srcset
          var srcset = (0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, imgCompleteClass);
    (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(img, 'loading');
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(img, imgEvents);
  }

  function getImageArray (start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) { imgSelector = 'img'; }

    while (start <= end) {
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
      if ((0,_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__.hasClass)(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck(imgs, cb); });
  }

  function additionalUpdates () {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if ((0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(item, 'aria-hidden')) {
          (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(item, ['aria-hidden', 'tabindex']);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(item, 'aria-hidden')) {
          (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateIn);
      }

      // remove outlet animation
      (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(el) {
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(navPrev, navActiveClass);

        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(navCurrent, 'tabindex');
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, classOut);
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, classIn);

      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually
          // when duration is 0 / container is hidden
          if (!speed || !(0,_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__.isVisible)(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          (0,_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__.jsTransform)(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(slideItems[indexCached], eve);
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !(0,_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__.isVisible)(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateOut);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
      if (!event ||
          !carousel && event.target.parentNode === container ||
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(target, 'data-nav')) { target = target.parentNode; }
    if ((0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(target, 'data-nav')) {
      var navIndex = navClicked = Number((0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number((0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return (0,_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__.getTouchDirection)((0,_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__.toDegree)(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }

    panStart = true;
    if (rafIndex) {
      (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
    if (panStart) { rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(target, {'click': preventClick});
          }});
        }

        if (carousel) {
          rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; }
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement;

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement;
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.3',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns((0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(options, optionsElements));
    }
  };
};


/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.module.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/tiny-slider.module.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tns": () => (/* binding */ tns)
/* harmony export */ });
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/caf.js */ "./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extend.js */ "./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/getSlideId.js */ "./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/calc.js */ "./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ "./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ "./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/toDegree.js */ "./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/forEach.js */ "./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/addClass.js */ "./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/removeClass.js */ "./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/hasAttr.js */ "./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/getAttr.js */ "./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/setAttrs.js */ "./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ "./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/hideElement.js */ "./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/showElement.js */ "./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/isVisible.js */ "./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/whichProperty.js */ "./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ "./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/addEvents.js */ "./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/removeEvents.js */ "./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/events.js */ "./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/jsTransform.js */ "./node_modules/tiny-slider/src/helpers/jsTransform.js");
// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}




































var tns = function(options) {
  options = (0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tC']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tC', (0,_helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__.calc)(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tPL']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tPL', (0,_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__.percentageLayout)(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tMQ']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tMQ', (0,_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__.mediaquerySupport)(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTf']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTf', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['t3D']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 't3D', (0,_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__.has3DTransforms)(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTDu']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTDu', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTDe']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTDe', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tADu']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tADu', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tADe']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tADe', (0,_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__.whichProperty)('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tTE']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tTE', (0,_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__.getEndProperty)(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? (0,_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__.checkStorageValue)(tnsStorage['tAE']) : (0,_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(tnsStorage, 'tAE', (0,_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__.getEndProperty)(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};

  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = (0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = (0,_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__.createStyleSheet)(null, getOption('nonce')),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__.Events(),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || (0,_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__.getSlideId)(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ?
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex :
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    if (el == null) { return; }
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ?
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ?
        CALC + '(100% / ' + dividend + ')' :
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal); }
      (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(cloneFirst, slideClonedClass);
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(cloneLast, slideClonedClass);
          (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(imgs, function(img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, imgEvents);
            (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loading');

            img.src = src;
          // data img
          } else {
            imgLoaded(img);
          }
        }
      });

      // set imgsComplete
      (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck((0,_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__.arrayFromNodeList)(imgs), function() { imgsComplete = true; }); });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck((0,_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__.arrayFromNodeList)(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        (Math.abs(left - right) <= 1) ?
          initSliderTransformCore() :
          setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();

    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId, 'font-size:0;', (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      } else if (carousel) {
        (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + '-mw', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + '-iw', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId, str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, hoverEvents); }
        if (autoplayResetOnVisibility) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, visibilityEvent); }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(navItems, function(item, i) {
          (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '[aria-controls^=' + slideId + '-item]', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
      }

      (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(navItems[navCurrentIndex], 'tabindex');
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(navItems[navCurrentIndex], navActiveClass);

      // add events
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(prevButton, {'data-controls' : 'prev'});
        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(controlsContainer, controlsEvents);
      } else {
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(prevButton, controlsEvents);
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, eve);
    }

    if (touch) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, dragEvents); }
    if (arrowKeys) { (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, docmentKeydownEvent); }
    if (controlsContainer) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(controlsContainer, controlsEvents); }
    if (navContainer) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(navContainer, navEvents); }

    // autoplay
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, hoverEvents);
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, visibilityEvent);
    if (autoplayButton) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, eve);
    }
    if (touch) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, touchEvents); }
    if (mouseDrag) { (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, docmentKeydownEvent) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(controlsContainer);
        } else {
          if (prevButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(prevButton); }
          if (nextButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(nextButton); }
        }
      } else {
        if (controlsContainer) {
          (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(controlsContainer);
        } else {
          if (prevButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(prevButton); }
          if (nextButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(navContainer);
        updateNavVisibility();
      } else {
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(navContainer)
      }
    }
    if (touch !== touchTem) {
      touch ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, touchEvents, options.preventScrollOnTouch) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, dragEvents) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(container, hoverEvents) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(doc, visibilityEvent) :
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          (0,_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__.removeCSSRule)(sheet, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet) - 1);
          (0,_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__.addCSSRule)(sheet, '#' + slideId + ' > .tns-item', str, (0,_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__.getCssRulesLength)(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ?
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(autoplayButton); }
    if (!nav && navContainer) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(controlsContainer);
      } else {
        if (prevButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(prevButton); }
        if (nextButton) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(autoplayButton); }
    if (nav && navContainer) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(navContainer); }
    if (controls) {
      if (controlsContainer) {
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(controlsContainer);
      } else {
        if (prevButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(prevButton); }
        if (nextButton) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(slideItems[i], str); }
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(slideItems[i], str); }
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(slideItems[j]); }
        (0,_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(innerWrapper, ['style']); }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(item, ['style']);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(slideItems[j]); }
        (0,_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement)(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);

      getImageArray.apply(null, arg).forEach(function (img) {
        if (!(0,_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__.hasClass)(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, eve);

          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(img, imgEvents);

          // update src
          img.src = (0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(img, 'data-src');

          // update srcset
          var srcset = (0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(img, imgCompleteClass);
    (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(img, 'loading');
    (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(img, imgEvents);
  }

  function getImageArray (start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) { imgSelector = 'img'; }

    while (start <= end) {
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
      if ((0,_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__.hasClass)(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ imgsLoadedCheck(imgs, cb); });
  }

  function additionalUpdates () {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if ((0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(item, 'aria-hidden')) {
          (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(item, ['aria-hidden', 'tabindex']);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(item, 'aria-hidden')) {
          (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateIn);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal);
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateIn);
      }

      // remove outlet animation
      (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      (0,_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__.forEach)(slideItems, function(el) {
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(navPrev, navActiveClass);

        (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        (0,_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__.removeAttrs)(navCurrent, 'tabindex');
        (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, classOut);
      (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, classIn);

      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually
          // when duration is 0 / container is hidden
          if (!speed || !(0,_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__.isVisible)(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          (0,_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__.jsTransform)(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(slideItems[indexCached], eve);
        (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !(0,_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__.isVisible)(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          (0,_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__.removeClass)(item, animateOut);
          (0,_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__.addClass)(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
      if (!event ||
          !carousel && event.target.parentNode === container ||
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(target, 'data-nav')) { target = target.parentNode; }
    if ((0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(target, 'data-nav')) {
      var navIndex = navClicked = Number((0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    (0,_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__.setAttrs)(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!(0,_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__.hasAttr)(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number((0,_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__.getAttr)(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return (0,_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__.getTouchDirection)((0,_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__.toDegree)(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }

    panStart = true;
    if (rafIndex) {
      (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
    if (panStart) { rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        (0,_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__.caf)(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          (0,_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__.addEvents)(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            (0,_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__.removeEvents)(target, {'click': preventClick});
          }});
        }

        if (carousel) {
          rafIndex = (0,_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__.raf)(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; }
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__.showElement;

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__.hideElement;
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.3',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns((0,_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__.extend)(options, optionsElements));
    }
  };
};


/***/ }),

/***/ "./src/scss/components/atoms/buttons/burger.ts":
/*!*****************************************************!*\
  !*** ./src/scss/components/atoms/buttons/burger.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerToggle": () => (/* binding */ burgerToggle)
/* harmony export */ });
const burgerToggle = () => {
    const btnHamburger = document.getElementById('btnHamburger');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const fadeElems = document.querySelectorAll('.has-fade');
    if ((typeof btnHamburger !== "undefined") && (btnHamburger !== null)) {
        btnHamburger.addEventListener('click', () => {
            if (header.classList.contains('open')) { // Close Hamburger Menu
                body.classList.remove('noscroll');
                header.classList.remove('open');
                fadeElems.forEach(function (element) {
                    element.classList.remove('fade-in');
                    element.classList.add('fade-out');
                });
            }
            else { // Open Hamburger Menu
                body.classList.add('noscroll');
                header.classList.add('open');
                fadeElems.forEach(function (element) {
                    element.classList.remove('fade-out');
                    element.classList.add('fade-in');
                });
            }
        });
        let currentView;
        if (window.innerWidth >= 980) {
            currentView = "desktop";
        }
        else {
            currentView = "mobile";
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 980 && currentView === "mobile") {
                fadeElems.forEach(function (element) {
                    element.classList.remove('fade-out');
                    element.classList.add('fade-in');
                    body.classList.remove('noscroll');
                    header.classList.remove('open');
                    currentView = "desktop";
                });
            }
            else if (window.innerWidth < 980 && currentView === "desktop") {
                fadeElems.forEach(function (element) {
                    element.classList.add('fade-out');
                    element.classList.remove('fade-in');
                    body.classList.remove('noscroll');
                    header.classList.remove('open');
                    currentView = "mobile";
                });
            }
        });
    }
};


/***/ }),

/***/ "./src/scss/components/molecules/card.ts":
/*!***********************************************!*\
  !*** ./src/scss/components/molecules/card.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardResize": () => (/* binding */ cardResize)
/* harmony export */ });
const cardResize = () => {
    const CTAbutton = document.querySelector('.primary__button');
    const teaserCard = document.querySelector('.card__teaser--glas');
    const mobileView = document.querySelector(".hero__teaser .section__inner");
    if ((typeof CTAbutton !== "undefined") && (CTAbutton !== null) && (typeof teaserCard !== "undefined") && (teaserCard !== null)) {
        let currentView;
        if (window.innerWidth >= 980) {
            teaserCard.appendChild(CTAbutton);
            currentView = "desktop";
        }
        else {
            currentView = "mobile";
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 980 && currentView === "mobile") {
                teaserCard.appendChild(CTAbutton);
                currentView = "desktop";
            }
            else if (window.innerWidth < 980 && currentView === "desktop") {
                mobileView.appendChild(CTAbutton);
                currentView = "mobile";
            }
        });
    }
};


/***/ }),

/***/ "./src/scss/components/molecules/product-detail/productslider.ts":
/*!***********************************************************************!*\
  !*** ./src/scss/components/molecules/product-detail/productslider.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tinySlider": () => (/* binding */ tinySlider)
/* harmony export */ });
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");

const getTinyType = (sepcifics, carousel) => {
    const generalOptions = {
        container: carousel,
        speed: 500,
        mouseDrag: true,
        navPosition: 'bottom',
        lazyload: false,
        arrowKeys: true,
    };
    switch (sepcifics) {
        case 'MostRead': {
            return Object.assign(Object.assign({}, generalOptions), { controlsContainer: '.controls', navAsThumbnails: true, gutter: 0, items: 1, slideBy: 1 });
        }
    }
};
const sliderNode = (sliderType, sliderModule) => {
    // get node if controlsContainer is string
    if (typeof sliderType.controlsContainer === 'string') {
        const controlsNode = sliderModule.querySelector(sliderType.controlsContainer);
        if (controlsNode !== null) {
            sliderType.controlsContainer = controlsNode;
        }
    }
};
const tinySlider = () => {
    const carouselMostRead = document.querySelector('.my-slider');
    let mostReadSlider;
    if (carouselMostRead !== null) {
        let sliderOptionsMostRead = getTinyType('MostRead', carouselMostRead);
        sliderNode(sliderOptionsMostRead, carouselMostRead);
        mostReadSlider = (0,tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__.tns)(sliderOptionsMostRead);
    }
};


/***/ }),

/***/ "./src/scss/components/molecules/product-detail/tabs.ts":
/*!**************************************************************!*\
  !*** ./src/scss/components/molecules/product-detail/tabs.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabToggle": () => (/* binding */ tabToggle)
/* harmony export */ });
const tabToggle = () => {
    const tabcontent = document.querySelector(".tabs__container");
    if ((typeof tabcontent !== "undefined") && (tabcontent !== null)) {
        const tabLinks = document.querySelectorAll(".tabLinks");
        const tabPanels = document.querySelectorAll(".tabContent");
        tabPanels[0].classList.add("active");
        tabLinks[0].classList.add("active");
        tabLinks.forEach((tab, index) => {
            tab.addEventListener("click", e => {
                e.preventDefault();
                console.log(index);
                if (!tabPanels[index].classList.contains("active")) {
                    tabPanels.forEach((panel, index) => {
                        panel.classList.remove("active");
                        tabLinks[index].classList.remove("active");
                    });
                    tabPanels[index].classList.add("active");
                    tab.classList.add("active");
                }
                // document.querySelector(".tabs-panel.active").classList.remove("active");
                //const parentListItem = tab.parentElement;
                //parentListItem.classList.add("active");
                //const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
                //const panel = [...tabPanels].filter(tab => tab.getAttribute("data-index") == index);
                //panel[0].classList.add("active");
            });
        });
    }
};


/***/ }),

/***/ "./src/scss/components/organisms/header/header.ts":
/*!********************************************************!*\
  !*** ./src/scss/components/organisms/header/header.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixHeader": () => (/* binding */ fixHeader)
/* harmony export */ });
const fixHeader = () => {
    const body = document.querySelector("body");
    const header = document.querySelector('.header-wrapper');
    function toggleFixHeader() {
        if (window.pageYOffset >= 85) {
            body.classList.add('header-wrapper--fix');
        }
        else {
            body.classList.remove('header-wrapper--fix');
        }
    }
    if ((typeof header !== "undefined") && (header !== null)) {
        window.addEventListener('scroll', toggleFixHeader);
    }
};


/***/ }),

/***/ "./src/scss/assets/images/blush-visual.png":
/*!*************************************************!*\
  !*** ./src/scss/assets/images/blush-visual.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7bd857d1fb89859c57ba.png";

/***/ }),

/***/ "./src/scss/assets/images/perfume-product.png":
/*!****************************************************!*\
  !*** ./src/scss/assets/images/perfume-product.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8b6a0e9db72dcee20ea7_.png";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _src_scss_assets_images_blush_visual_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scss/assets/images/blush-visual.png */ "./src/scss/assets/images/blush-visual.png");
/* harmony import */ var _src_scss_assets_images_perfume_product_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/scss/assets/images/perfume-product.png */ "./src/scss/assets/images/perfume-product.png");
/* harmony import */ var tiny_slider_src_tiny_slider_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-slider/src/tiny-slider.module.js */ "./node_modules/tiny-slider/src/tiny-slider.module.js");
/* harmony import */ var _scss_components_molecules_product_detail_productslider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/components/molecules/product-detail/productslider */ "./src/scss/components/molecules/product-detail/productslider.ts");
/* harmony import */ var _scss_components_molecules_product_detail_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/components/molecules/product-detail/tabs */ "./src/scss/components/molecules/product-detail/tabs.ts");
/* harmony import */ var _src_scss_components_atoms_buttons_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/scss/components/atoms/buttons/burger */ "./src/scss/components/atoms/buttons/burger.ts");
/* harmony import */ var _src_scss_components_molecules_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/scss/components/molecules/card */ "./src/scss/components/molecules/card.ts");
/* harmony import */ var _src_scss_components_organisms_header_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/scss/components/organisms/header/header */ "./src/scss/components/organisms/header/header.ts");









document.addEventListener("DOMContentLoaded", () => {
    (0,_src_scss_components_atoms_buttons_burger__WEBPACK_IMPORTED_MODULE_6__.burgerToggle)();
    (0,_src_scss_components_molecules_card__WEBPACK_IMPORTED_MODULE_7__.cardResize)();
    (0,_src_scss_components_organisms_header_header__WEBPACK_IMPORTED_MODULE_8__.fixHeader)();
    (0,_scss_components_molecules_product_detail_productslider__WEBPACK_IMPORTED_MODULE_4__.tinySlider)();
    (0,_scss_components_molecules_product_detail_tabs__WEBPACK_IMPORTED_MODULE_5__.tabToggle)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF0aWN3cC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2FkZENTU1J1bGUuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvYWRkRXZlbnRzLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2FycmF5RnJvbU5vZGVMaXN0LmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NhZi5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9jYWxjLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NoZWNrU3RvcmFnZVZhbHVlLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2NsYXNzTGlzdFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvY3JlYXRlU3R5bGVTaGVldC5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9kb2NFbGVtZW50LmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRBdHRyLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2dldEJvZHkuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0Q3NzUnVsZXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvZ2V0U2xpZGVJZC5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9nZXRUb3VjaERpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oYXMzRFRyYW5zZm9ybXMuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvaGFzQXR0ci5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9oaWRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9pc05vZGVMaXN0LmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL2lzVmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9qc1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9tZWRpYXF1ZXJ5U3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvaGVscGVycy9wYXNzaXZlT3B0aW9uLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3BlcmNlbnRhZ2VMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmFmLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUF0dHJzLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3JlbW92ZUNTU1J1bGUuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvcmVtb3ZlRXZlbnRzLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3Jlc2V0RmFrZUJvZHkuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0QXR0cnMuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0RmFrZUJvZHkuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL2hlbHBlcnMvc2V0TG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3Nob3dFbGVtZW50LmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3RvRGVncmVlLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy9oZWxwZXJzL3doaWNoUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9ub2RlX21vZHVsZXMvdGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyLmpzIiwid2VicGFjazovL3N0YXRpY3dwLy4vbm9kZV9tb2R1bGVzL3Rpbnktc2xpZGVyL3NyYy90aW55LXNsaWRlci5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9zcmMvc2Nzcy9jb21wb25lbnRzL2F0b21zL2J1dHRvbnMvYnVyZ2VyLnRzIiwid2VicGFjazovL3N0YXRpY3dwLy4vc3JjL3Njc3MvY29tcG9uZW50cy9tb2xlY3VsZXMvY2FyZC50cyIsIndlYnBhY2s6Ly9zdGF0aWN3cC8uL3NyYy9zY3NzL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3RzbGlkZXIudHMiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9zcmMvc2Nzcy9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWRldGFpbC90YWJzLnRzIiwid2VicGFjazovL3N0YXRpY3dwLy4vc3JjL3Njc3MvY29tcG9uZW50cy9vcmdhbmlzbXMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly9zdGF0aWN3cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGF0aWN3cC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zdGF0aWN3cC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RhdGljd3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdGF0aWN3cC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXRpY3dwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhdGljd3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3RhdGljd3AvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lIO0FBQzdCO0FBQ087QUFDdEI7QUFDRztBQUNoRiw4QkFB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SyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLFNBQVMsT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFNBQVMsT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sWUFBWSxXQUFXLFNBQVMsT0FBTyxXQUFXLFdBQVcsU0FBUyxPQUFPLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxPQUFPLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsUUFBUSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxRQUFRLEtBQUssUUFBUSxZQUFZLFlBQVksZUFBZSxhQUFhLFNBQVMsUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLGFBQWEsWUFBWSxRQUFRLE9BQU8sT0FBTyxZQUFZLFlBQVksZUFBZSxlQUFlLFlBQVksUUFBUSxTQUFTLFdBQVcsVUFBVSxVQUFVLFlBQVksZUFBZSxZQUFZLFFBQVEsTUFBTSxRQUFRLFlBQVksWUFBWSxlQUFlLGVBQWUsU0FBUyxRQUFRLFdBQVcsVUFBVSxVQUFVLFlBQVksZUFBZSxhQUFhLFFBQVEsT0FBTyxLQUFLLFlBQVksWUFBWSxlQUFlLGVBQWUsU0FBUyxRQUFRLFdBQVcsVUFBVSxVQUFVLFlBQVksZUFBZSxhQUFhLFFBQVEsTUFBTSxTQUFTLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxRQUFRLGNBQWMsVUFBVSxRQUFRLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxTQUFTLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFNBQVMsUUFBUSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sUUFBUSxZQUFZLFlBQVksY0FBYyxlQUFlLFNBQVMsUUFBUSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsVUFBVSxRQUFRLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxRQUFRLFVBQVUsU0FBUyxRQUFRLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxNQUFNLGFBQWEsT0FBTyxLQUFLLFFBQVEsVUFBVSxRQUFRLFFBQVEsVUFBVSxRQUFRLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxhQUFhLE9BQU8sS0FBSyxRQUFRLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFNBQVMsUUFBUSxVQUFVLFFBQVEsUUFBUSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLE1BQU0sVUFBVSxRQUFRLEtBQUssUUFBUSxVQUFVLFVBQVUsUUFBUSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsUUFBUSxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFNBQVMsUUFBUSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxRQUFRLFFBQVEsV0FBVyxVQUFVLFFBQVEsT0FBTyxNQUFNLFdBQVcsUUFBUSxLQUFLLE9BQU8sTUFBTSxXQUFXLFFBQVEsS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFFBQVEsS0FBSyxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsUUFBUSxNQUFNLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxTQUFTLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsU0FBUyxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsU0FBUyxRQUFRLFVBQVUsVUFBVSxXQUFXLFdBQVcsU0FBUyxRQUFRLFVBQVUsU0FBUyxRQUFRLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFFBQVEsT0FBTyxLQUFLLFdBQVcsV0FBVyxRQUFRLEtBQUssUUFBUSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sTUFBTSxVQUFVLFFBQVEsS0FBSyxPQUFPLE1BQU0sV0FBVyxRQUFRLEtBQUssT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFFBQVEsV0FBVyxRQUFRLE9BQU8sTUFBTSxXQUFXLFFBQVEsS0FBSyxPQUFPLE1BQU0sV0FBVyxRQUFRLE1BQU0sUUFBUSxVQUFVLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLFVBQVUsU0FBUyxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLE1BQU0sVUFBVSxRQUFRLEtBQUssT0FBTyxNQUFNLFlBQVksUUFBUSxLQUFLLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsTUFBTSxRQUFRLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sYUFBYSxPQUFPLE1BQU0sUUFBUSxVQUFVLFdBQVcsVUFBVSxVQUFVLFNBQVMsUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFVBQVUsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLE1BQU0sVUFBVSxRQUFRLEtBQUssUUFBUSxVQUFVLFVBQVUsUUFBUSxPQUFPLEtBQUssVUFBVSxXQUFXLFFBQVEsS0FBSyxPQUFPLEtBQUssV0FBVyxRQUFRLE1BQU0sUUFBUSxXQUFXLFNBQVMsUUFBUSxXQUFXLFdBQVcsVUFBVSxVQUFVLFNBQVMsUUFBUSxXQUFXLFNBQVMsUUFBUSxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsU0FBUyxRQUFRLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxVQUFVLFNBQVMsUUFBUSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsUUFBUSxRQUFRLFdBQVcsU0FBUyxRQUFRLFVBQVUsU0FBUyxRQUFRLFVBQVUsUUFBUSxRQUFRLFVBQVUsV0FBVyxTQUFTLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sTUFBTSxVQUFVLFFBQVEsS0FBSyxRQUFRLFdBQVcsVUFBVSxXQUFXLFdBQVcsUUFBUSxRQUFRLFdBQVcsV0FBVyxVQUFVLFVBQVUsUUFBUSxRQUFRLFVBQVUsUUFBUSxRQUFRLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxVQUFVLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxVQUFVLFNBQVMsUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFFBQVEsT0FBTyxPQUFPLFdBQVcsUUFBUSxLQUFLLFFBQVEsVUFBVSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsVUFBVSxRQUFRLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxLQUFLLFFBQVEsVUFBVSxXQUFXLFdBQVcsU0FBUyxRQUFRLFVBQVUsV0FBVyxRQUFRLFFBQVEsV0FBVyxRQUFRLE9BQU8sT0FBTyxXQUFXLFFBQVEsS0FBSyxRQUFRLFdBQVcsUUFBUSxRQUFRLFVBQVUsVUFBVSxRQUFRLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxTQUFTLFFBQVEsV0FBVyxRQUFRLFFBQVEsV0FBVyxVQUFVLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxVQUFVLFNBQVMsUUFBUSxVQUFVLFdBQVcsU0FBUyxRQUFRLFlBQVksWUFBWSxXQUFXLFlBQVksUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxRQUFRLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxTQUFTLFFBQVEsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsU0FBUyxRQUFRLFdBQVcsUUFBUSxRQUFRLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFFBQVEsUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsU0FBUyxRQUFRLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxPQUFPLFdBQVcsUUFBUSxLQUFLLFFBQVEsV0FBVyxRQUFRLFFBQVEsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLE9BQU8sVUFBVSxRQUFRLEtBQUssUUFBUSxVQUFVLFFBQVEsT0FBTyxNQUFNLFdBQVcsV0FBVyxRQUFRLEtBQUssUUFBUSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxLQUFLLFdBQVcsV0FBVyxXQUFXLFFBQVEsS0FBSyxRQUFRLFdBQVcsVUFBVSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsS0FBSyxRQUFRLFdBQVcsUUFBUSxPQUFPLE9BQU8sV0FBVyxVQUFVLFFBQVEsS0FBSyxPQUFPLE9BQU8sV0FBVyxRQUFRLEtBQUssT0FBTyxPQUFPLFVBQVUsUUFBUSxLQUFLLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssUUFBUSxVQUFVLFdBQVcsUUFBUSxPQUFPLE9BQU8sV0FBVyxRQUFRLEtBQUssT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLE1BQU0sUUFBUSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxTQUFTLFFBQVEsVUFBVSxXQUFXLFNBQVMsT0FBTyxPQUFPLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxLQUFLLE9BQU8sT0FBTyxXQUFXLFFBQVEsS0FBSyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLEtBQUssT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLEtBQUssT0FBTyxPQUFPLFdBQVcsUUFBUSxLQUFLLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxNQUFNLFFBQVEsV0FBVyxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsU0FBUyxVQUFVLFVBQVUsV0FBVyxXQUFXLHVDQUF1QywyQkFBMkIsT0FBTyxnQ0FBZ0MsY0FBYyw2QkFBNkIscUJBQXFCLFNBQVMsWUFBWSw4QkFBOEIscUJBQXFCLFNBQVMsWUFBWSw4QkFBOEIscUJBQXFCLFNBQVMsT0FBTyxnQkFBZ0Isc0RBQXNELE9BQU8saUNBQWlDLGNBQWMsOEJBQThCLHFCQUFxQixTQUFTLGFBQWEsOEJBQThCLHFCQUFxQixTQUFTLFlBQVksNkJBQTZCLHFCQUFxQixTQUFTLE9BQU8saUJBQWlCLHVEQUF1RCxPQUFPLDJEQUEyRCx5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsdUJBQXVCLHFFQUFxRSw0QkFBNEIsbUJBQW1CLEtBQUsscUJBQXFCLCtEQUErRCxrQkFBa0Isb0JBQW9CLHdCQUF3QixtQkFBbUIsS0FBSyxlQUFlLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQix1QkFBdUIsS0FBSyxrQkFBa0IseUJBQXlCLHFCQUFxQix1QkFBdUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkNBQTZDLHFCQUFxQixLQUFLLCtCQUErQixnQkFBZ0Isa0JBQWtCLG1CQUFtQiwwQkFBMEIsS0FBSywrQkFBK0IsZ0JBQWdCLGtCQUFrQixtQkFBbUIsNEJBQTRCLDhCQUE4QixLQUFLLCtCQUErQixnQkFBZ0IsbUJBQW1CLG9CQUFvQiw0QkFBNEIsS0FBSywrQkFBK0IsZ0JBQWdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QixLQUFLLCtCQUErQixnQkFBZ0Isa0JBQWtCLG1CQUFtQiwwQkFBMEIsS0FBSywrQkFBK0IsZ0JBQWdCLG1CQUFtQixvQkFBb0IsNEJBQTRCLEtBQUssd0JBQXdCLFVBQVUsc0RBQXNELG1CQUFtQixPQUFPLFlBQVksOENBQThDLG1CQUFtQixPQUFPLEtBQUssd0VBQXdFLG9EQUFvRCx1Q0FBdUMseUJBQXlCLDhCQUE4Qiw2QkFBNkIsd0NBQXdDLHVEQUF1RCxTQUFTLHNCQUFzQix3Q0FBd0Msc0RBQXNELFNBQVMsc0JBQXNCLDBCQUEwQixrQ0FBa0MseUJBQXlCLHdCQUF3QixpQ0FBaUMsK0JBQStCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGdDQUFnQyxTQUFTLDRCQUE0QiwrQ0FBK0MsdUJBQXVCLFNBQVMsS0FBSyxvTEFBb0wsV0FBVyx5Q0FBeUMsT0FBTyw2REFBNkQsb0VBQW9FLGtEQUFrRCxtREFBbUQsNkNBQTZDLDhEQUE4RCxnRUFBZ0Usb0VBQW9FLGdFQUFnRSw4REFBOEQsdUVBQXVFLG9EQUFvRCxlQUFlLCtCQUErQixrQ0FBa0Msc0JBQXNCLEtBQUssZ0NBQWdDLCtCQUErQixLQUFLLGNBQWMsMkJBQTJCLHVCQUF1QixvQkFBb0Isa0JBQWtCLG1CQUFtQiwyQkFBMkIsd0JBQXdCLDZCQUE2QixTQUFTLEtBQUssZ0JBQWdCLHlCQUF5QixrQkFBa0IsbUJBQW1CLEtBQUssY0FBYyxtQ0FBbUMsS0FBSyxZQUFZLHlCQUF5QixtQkFBbUIsa0JBQWtCLDJCQUEyQixLQUFLLHNDQUFzQyx3REFBd0QsMEJBQTBCLGdDQUFnQyxLQUFLLGdDQUFnQyxrQkFBa0IsZ0NBQWdDLEtBQUssc0NBQXNDLDBCQUEwQix1REFBdUQsMkNBQTJDLEtBQUssd0JBQXdCLGlCQUFpQiw4QkFBOEIsa0NBQWtDLHlDQUF5Qyw2REFBNkQseUJBQXlCLHFCQUFxQixrQ0FBa0Msa0NBQWtDLGtDQUFrQyxvREFBb0QsMENBQTBDLHFCQUFxQiw2QkFBNkIsS0FBSyxhQUFhLHFCQUFxQix5QkFBeUIsZ0JBQWdCLGlCQUFpQixrQkFBa0IscUJBQXFCLHNCQUFzQiwwQkFBMEIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG9CQUFvQixRQUFRLG9DQUFvQyxvQkFBb0IsUUFBUSxvQ0FBb0MsaUNBQWlDLFFBQVEsT0FBTyxLQUFLLHNDQUFzQyw2QkFBNkIsdUJBQXVCLHVCQUF1QixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQywrQkFBK0IsdUNBQXVDLDhCQUE4QixpQ0FBaUMsV0FBVyxTQUFTLGVBQWUsZ0NBQWdDLG1DQUFtQywyQ0FBMkMsOEJBQThCLGlDQUFpQyxXQUFXLFNBQVMsZUFBZSxnQ0FBZ0MsK0JBQStCLFNBQVMsZUFBZSxnQ0FBZ0MsMkNBQTJDLDhCQUE4QixXQUFXLFNBQVMsZUFBZSxnQ0FBZ0MsU0FBUyxlQUFlLG1DQUFtQywyQ0FBMkMsaUNBQWlDLFdBQVcsU0FBUyxlQUFlLCtCQUErQixTQUFTLE9BQU8sbUNBQW1DLHNCQUFzQix1QkFBdUIseUNBQXlDLFNBQVMsd0JBQXdCLGtDQUFrQyxTQUFTLHdCQUF3Qiw4QkFBOEIsU0FBUyxPQUFPLHFFQUFxRSx3QkFBd0IsdUJBQXVCLHVCQUF1Qix3QkFBd0IscUNBQXFDLHNGQUFzRixpREFBaUQsaURBQWlELGlEQUFpRCw2REFBNkQsMkRBQTJELDZCQUE2QixpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QixhQUFhLFNBQVMsMENBQTBDLGlDQUFpQyxXQUFXLEVBQUUseUJBQXlCLGFBQWEsU0FBUyx1Q0FBdUMsaUNBQWlDLFFBQVEsRUFBRSx5QkFBeUIsYUFBYSxTQUFTLCtDQUErQyxpQ0FBaUMsUUFBUSxFQUFFLHlCQUF5QixhQUFhLFNBQVMsZ0RBQWdELHlCQUF5QixTQUFTLEVBQUUsdUJBQXVCLGFBQWEsU0FBUyxLQUFLLHVGQUF1Rix1QkFBdUIsa0NBQWtDLHFDQUFxQyxvQ0FBb0Msd0JBQXdCLHdCQUF3QixPQUFPLEtBQUsscUNBQXFDLGtCQUFrQixLQUFLLEVBQUUsdUJBQXVCLDJCQUEyQixrQkFBa0Isb0NBQW9DLG1DQUFtQyx3QkFBd0IsU0FBUyxPQUFPLEtBQUssd0JBQXdCLDZnQkFBNmdCLDBCQUEwQixzQ0FBc0MsMEJBQTBCLG9DQUFvQyw2Q0FBNkMsU0FBUyw2Q0FBNkMsS0FBSywyQkFBMkIsb0NBQW9DLHFDQUFxQyxTQUFTLDZDQUE2QyxLQUFLLDhCQUE4QixzQkFBc0IsK0JBQStCLDRDQUE0QyxxREFBcUQsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLHdHQUF3RyxrQ0FBa0Msa0NBQWtDLDZCQUE2Qix1QkFBdUIsNkNBQTZDLG9FQUFvRSxtQ0FBbUMscUNBQXFDLGlCQUFpQixhQUFhLHFEQUFxRCxvRUFBb0UsbUNBQW1DLHFDQUFxQyxpQkFBaUIsYUFBYSxrREFBa0Qsb0VBQW9FLG1DQUFtQyxxQ0FBcUMsaUJBQWlCLGFBQWEsdURBQXVELG9FQUFvRSxtQ0FBbUMscUNBQXFDLGlCQUFpQixhQUFhLEtBQUsseUVBQXlFLElBQUksSUFBSSxJQUFJLG1CQUFtQiwyQ0FBMkMsd0NBQXdDLDBCQUEwQiwyRUFBMkUsMEJBQTBCLEVBQUUsb0NBQW9DLGlCQUFpQixFQUFFLEdBQUcsZUFBZSwrQkFBK0IsNEJBQTRCLHVCQUF1QixpQkFBaUIscUNBQXFDLGtDQUFrQyw2QkFBNkIsS0FBSyxHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLG1CQUFtQiw4QkFBOEIsNEJBQTRCLDRCQUE0QixPQUFPLEtBQUssdUJBQXVCLGVBQWUsb0JBQW9CLHVCQUF1QixvQkFBb0IsT0FBTyxtQkFBbUIsb0JBQW9CLE9BQU8sS0FBSyxvQkFBb0IseUJBQXlCLHFCQUFxQiw4QkFBOEIsU0FBUyxPQUFPLEtBQUssR0FBRyxnQkFBZ0IsdUJBQXVCLFlBQVksR0FBRyxnQkFBZ0IsdUJBQXVCLFlBQVksb0JBQW9CLGlFQUFpRSxpQkFBaUIseUJBQXlCLGtCQUFrQixtREFBbUQsZ0RBQWdELDJDQUEyQyxLQUFLLHlCQUF5Qix5QkFBeUIsNEJBQTRCLEtBQUssbUJBQW1CLG9DQUFvQyxpQ0FBaUMsNEJBQTRCLEtBQUssR0FBRyxrQkFBa0IsdUJBQXVCLEVBQUUsaUJBQWlCLHFDQUFxQyxrQ0FBa0MsNkJBQTZCLGlCQUFpQixvQkFBb0IsWUFBWSxFQUFFLEdBQUcsV0FBVyxrQ0FBa0MsK0JBQStCLDBCQUEwQixHQUFHLFlBQVksa0JBQWtCLEVBQUUsd0JBQXdCLG9CQUFvQixnQkFBZ0IsRUFBRSxvQkFBb0IsWUFBWSxvQkFBb0IsRUFBRSxpQkFBaUIsZUFBZSwrQkFBK0IsZUFBZSxHQUFHLDZCQUE2QixlQUFlLDZCQUE2QixnQkFBZ0IsR0FBRyxpRUFBaUUsd0JBQXdCLGlCQUFpQiw0QkFBNEIsS0FBSyxHQUFHLDJEQUEyRCxnQkFBZ0IsYUFBYSxjQUFjLFlBQVksYUFBYSxxQkFBcUIsb0JBQW9CLHlCQUF5QixzQkFBc0IsdUJBQXVCLEtBQUssVUFBVSx3Q0FBd0MsbUNBQW1DLE9BQU8sS0FBSyxTQUFTLEVBQUUsZ0NBQWdDLE9BQU8sS0FBSyxTQUFTLEVBQUUsMkJBQTJCLE9BQU8sS0FBSyxTQUFTLEVBQUUseUJBQXlCLGVBQWUsZUFBZSxvQkFBb0IsdUJBQXVCLG9CQUFvQixPQUFPLGFBQWEsK0JBQStCLHFDQUFxQyxPQUFPLEVBQUUsa0NBQWtDLE9BQU8sRUFBRSw2QkFBNkIsT0FBTyxFQUFFLHdCQUF3QixvQkFBb0IsT0FBTyxLQUFLLEdBQUcsU0FBUywyQkFBMkIsMEJBQTBCLDJCQUEyQixvQ0FBb0MsaUNBQWlDLFNBQVMsS0FBSyxZQUFZLDJCQUEyQiwyQkFBMkIsS0FBSyxZQUFZLDJCQUEyQiwyQkFBMkIsS0FBSyxZQUFZLG1DQUFtQyxLQUFLLG9CQUFvQixzQ0FBc0MsT0FBTyxZQUFZLG9DQUFvQyxLQUFLLGVBQWUseUJBQXlCLHFCQUFxQixxQkFBcUIsMkJBQTJCLFNBQVMsS0FBSywwQkFBMEIsZ0NBQWdDLDBCQUEwQiwyQkFBMkIseUNBQXlDLGtCQUFrQiwyQkFBMkIsaUNBQWlDLHlCQUF5QixrQ0FBa0MseUJBQXlCLGtEQUFrRCxTQUFTLEtBQUssdUNBQXVDLHNDQUFzQyw4QkFBOEIsK0NBQStDLEtBQUssNkVBQTZFLDZCQUE2Qiw0QkFBNEIsbUNBQW1DLFNBQVMsMkNBQTJDLHFCQUFxQixTQUFTLHlDQUF5QyxvQ0FBb0MsU0FBUyxPQUFPLEtBQUsseUJBQXlCLG1EQUFtRCxvQkFBb0IsdUJBQXVCLG9CQUFvQixvQkFBb0IsZ0NBQWdDLDBDQUEwQyxrQ0FBa0MsbUNBQW1DLDZCQUE2QixTQUFTLE9BQU8sS0FBSyxjQUFjLHNDQUFzQyx3QkFBd0IsNkJBQTZCLCtCQUErQixrQ0FBa0MsV0FBVyxTQUFTLDZDQUE2Qyw2QkFBNkIsbUJBQW1CLG9CQUFvQiwyQ0FBMkMsU0FBUywyQkFBMkIsaURBQWlELFNBQVMsNkJBQTZCLDRDQUE0QyxrQ0FBa0MscURBQXFELDhCQUE4QixXQUFXLFNBQVMsT0FBTyxLQUFLLDJCQUEyQiwrQ0FBK0Msa0NBQWtDLGlEQUFpRCxTQUFTLEtBQUsseUZBQXlGLDJCQUEyQixzQkFBc0Isd0JBQXdCLDBCQUEwQixpQkFBaUIsK0JBQStCLHFCQUFxQixzQkFBc0IsMEJBQTBCLDRCQUE0Qiw2Q0FBNkMsU0FBUyxLQUFLLGtHQUFrRyxrQ0FBa0MsMkJBQTJCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHdCQUF3QiwyQ0FBMkMscUNBQXFDLG9DQUFvQyxzQkFBc0IsS0FBSywwREFBMEQsNkNBQTZDLHlCQUF5Qiw4QkFBOEIsMkNBQTJDLDJCQUEyQiwwQ0FBMEMsdUJBQXVCLGlDQUFpQyxxQkFBcUIsU0FBUyxPQUFPLHNDQUFzQyx5Q0FBeUMsT0FBTyxtQkFBbUIsMkJBQTJCLHVCQUF1QixzQkFBc0Isb0JBQW9CLGtDQUFrQyxtQkFBbUIsNkJBQTZCLGlCQUFpQixnQkFBZ0IsT0FBTyxLQUFLLDZCQUE2Qix1Q0FBdUMsS0FBSyxxQkFBcUIsNkNBQTZDLGVBQWUsd0NBQXdDLHVCQUF1Qix5QkFBeUIsdUJBQXVCLFdBQVcsU0FBUyxvQ0FBb0MsbUJBQW1CLFNBQVMsT0FBTyxtQkFBbUIsc0JBQXNCLE9BQU8sS0FBSyxpQ0FBaUMsNkNBQTZDLCtCQUErQiw4QkFBOEIsMkNBQTJDLDJCQUEyQiwwQ0FBMEMsa0RBQWtELGlDQUFpQyxxQkFBcUIsU0FBUyxPQUFPLHNDQUFzQyx5Q0FBeUMsU0FBUyxtQkFBbUIsMkJBQTJCLHVCQUF1QixzQkFBc0Isb0JBQW9CLDZEQUE2RCxtQkFBbUIsNkJBQTZCLGlCQUFpQixnQkFBZ0IsT0FBTyxLQUFLLHNCQUFzQixxQkFBcUIsc0JBQXNCLHNCQUFzQiw4QkFBOEIsaUNBQWlDLHVDQUF1QywwQ0FBMEMsK0NBQStDLDRDQUE0Qyw2QkFBNkIsaUJBQWlCLGFBQWEsU0FBUyw4QkFBOEIsNkJBQTZCLHlCQUF5QixrQ0FBa0Msc0NBQXNDLHNCQUFzQiw4QkFBOEIsY0FBYyxTQUFTLEtBQUssOEJBQThCLDJCQUEyQiw4REFBOEQsK0JBQStCLHFDQUFxQywyQ0FBMkMscUJBQXFCLG9CQUFvQixvQkFBb0IsS0FBSyw2QkFBNkIsMkJBQTJCLHdCQUF3Qix1QkFBdUIsK0JBQStCLHVCQUF1Qiw2QkFBNkIsMkNBQTJDLHlCQUF5QiwrQ0FBK0MsbUNBQW1DLHNDQUFzQyxxQ0FBcUMsMEJBQTBCLGdDQUFnQyw0QkFBNEIsMEJBQTBCLCtCQUErQix1QkFBdUIsd0NBQXdDLGdDQUFnQyxxQkFBcUIsd0JBQXdCLHNDQUFzQyxrQ0FBa0MsZUFBZSxhQUFhLFNBQVMsd0NBQXdDLDRCQUE0QixpQ0FBaUMseUJBQXlCLG9CQUFvQiw0QkFBNEIsNEJBQTRCLGlDQUFpQyx5QkFBeUIsU0FBUyxxQ0FBcUMseUJBQXlCLDBCQUEwQix1Q0FBdUMsU0FBUyxLQUFLLG1CQUFtQiwyQkFBMkIsa0NBQWtDLDhDQUE4Qyw2QkFBNkIsb0RBQW9ELHdCQUF3Qix3QkFBd0IsNkJBQTZCLHVCQUF1QixTQUFTLGtCQUFrQixpQ0FBaUMsMkZBQTJGLFNBQVMsaUJBQWlCLGlDQUFpQyx5Q0FBeUMscUVBQXFFLG1CQUFtQixpQkFBaUIsc0JBQXNCLFNBQVMsT0FBTyxtQkFBbUIsc0JBQXNCLDJCQUEyQix1QkFBdUIsK0JBQStCLDBCQUEwQix3QkFBd0IsdUJBQXVCLHNCQUFzQiwwQkFBMEIsMkNBQTJDLGtDQUFrQyxTQUFTLGFBQWEsZUFBZSwrQkFBK0IsNkJBQTZCLDJDQUEyQywyQ0FBMkMsbUNBQW1DLHNDQUFzQyxxQ0FBcUMsS0FBSyxpQ0FBaUMsaUJBQWlCLHlCQUF5QiwwQkFBMEIsMkNBQTJDLDhCQUE4QixTQUFTLEtBQUssMEJBQTBCLHdCQUF3QixLQUFLLHlCQUF5QixzQkFBc0Isd0JBQXdCLGdDQUFnQyxzQkFBc0IseUJBQXlCLG1CQUFtQixvQ0FBb0MsbUNBQW1DLGdDQUFnQyxTQUFTLG9DQUFvQyxhQUFhLEtBQUssK0JBQStCLDRCQUE0Qiw2QkFBNkIseUJBQXlCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLG9DQUFvQyw2QkFBNkIsU0FBUyxvQ0FBb0MsZ0NBQWdDLFNBQVMscUNBQXFDLGdDQUFnQyxTQUFTLEtBQUssdUJBQXVCLDZCQUE2QixxQ0FBcUMsbUNBQW1DLFNBQVMscUNBQXFDLG1DQUFtQyxTQUFTLEtBQUssOEJBQThCLHNCQUFzQiwrQkFBK0IsOEJBQThCLHlCQUF5QixtQkFBbUIsMkJBQTJCLFNBQVMsZ0JBQWdCLDBDQUEwQyx3Q0FBd0MsOENBQThDLGFBQWEsU0FBUyx1QkFBdUIsMEJBQTBCLFNBQVMsS0FBSyw4QkFBOEIsMkJBQTJCLHNCQUFzQiwrQkFBK0IscUVBQXFFLHFDQUFxQyx5Q0FBeUMsK0JBQStCLDhDQUE4Qyx1QkFBdUIscUJBQXFCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLDJDQUEyQyw4QkFBOEIsYUFBYSx1Q0FBdUMsc0NBQXNDLGFBQWEsd0NBQXdDLDJCQUEyQix5QkFBeUIsNkJBQTZCLDJCQUEyQixhQUFhLFNBQVMsS0FBSyxpQ0FBaUMseUNBQXlDLG9DQUFvQyw2Q0FBNkMsU0FBUyxLQUFLLGtCQUFrQixvQkFBb0IsZ0NBQWdDLG9CQUFvQix3QkFBd0IsS0FBSyw2QkFBNkIsK0JBQStCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLFNBQVMsNkJBQTZCLDBCQUEwQix3Q0FBd0MsK0JBQStCLGFBQWEsU0FBUyxzQkFBc0IsNEJBQTRCLG1DQUFtQyx3Q0FBd0MsMEJBQTBCLGtDQUFrQyxhQUFhLFNBQVMsMkJBQTJCLG9DQUFvQyx1Q0FBdUMsYUFBYSxTQUFTLEtBQUssbWtCQUFta0IsMEJBQTBCLEtBQUssYUFBYSw4QkFBOEIsNEJBQTRCLG1CQUFtQixxQkFBcUIsS0FBSyxvQkFBb0IsMkJBQTJCLFNBQVMsc0JBQXNCLCtCQUErQiwyQkFBMkIseUJBQXlCLDRCQUE0QixTQUFTLEtBQUssdUJBQXVCLGtCQUFrQixtQkFBbUIseUJBQXlCLGdCQUFnQiw2QkFBNkIsb0JBQW9CLHFCQUFxQixvQ0FBb0Msc0JBQXNCLDRCQUE0QixvQ0FBb0MscUJBQXFCLHFCQUFxQiwwQkFBMEIsU0FBUyxzQkFBc0IsNEJBQTRCLGlCQUFpQixLQUFLLHNCQUFzQix5QkFBeUIsbUJBQW1CLHNDQUFzQywwQkFBMEIsd0JBQXdCLHFCQUFxQixzQ0FBc0MsU0FBUyxLQUFLLGtCQUFrQixzQkFBc0IsS0FBSyxpQkFBaUIsbUNBQW1DLDBCQUEwQixTQUFTLCtCQUErQiwwQkFBMEIsMkNBQTJDLFNBQVMsS0FBSyxpdkJBQWl2Qiw0QkFBNEIsZ0JBQWdCLDhCQUE4QixpQ0FBaUMsYUFBYSxTQUFTLDJCQUEyQixtQkFBbUIsOEJBQThCLGFBQWEsU0FBUyxnQ0FBZ0Msa0NBQWtDLGlCQUFpQiwyQkFBMkIsNkJBQTZCLHdDQUF3Qyw2Q0FBNkMsK0JBQStCLGlCQUFpQixhQUFhLFNBQVMsc0JBQXNCLCtCQUErQiwwQkFBMEIsZ0NBQWdDLDJDQUEyQyxTQUFTLDhCQUE4QixrQ0FBa0MsK0JBQStCLG1CQUFtQixxQkFBcUIsU0FBUyxvQ0FBb0MsMEJBQTBCLGtDQUFrQyxpQ0FBaUMsYUFBYSxTQUFTLHNDQUFzQywwQkFBMEIsMkNBQTJDLDRCQUE0QixtQ0FBbUMsc0RBQXNELHVCQUF1QiwrQkFBK0IsaUJBQWlCLGFBQWEsU0FBUyw2QkFBNkIsK0JBQStCLFNBQVMscUJBQXFCLCtCQUErQixnREFBZ0QscUNBQXFDLGFBQWEsU0FBUyw0QkFBNEIsMEJBQTBCLDRCQUE0QiwyQ0FBMkMsK0JBQStCLDRCQUE0QixtQ0FBbUMsYUFBYSw2QkFBNkIsMkJBQTJCLGFBQWEsaUNBQWlDLDJCQUEyQixhQUFhLFNBQVMsb0JBQW9CLHdDQUF3QywyQkFBMkIsa0NBQWtDLGFBQWEsc0NBQXNDLDhCQUE4QiwrQ0FBK0MsbUNBQW1DLGFBQWEsU0FBUyxLQUFLLCtDQUErQyw0Q0FBNEMsK0JBQStCLHdDQUF3QyxpQ0FBaUMsYUFBYSxTQUFTLDRCQUE0QixnQkFBZ0IscUNBQXFDLFNBQVMsK0JBQStCLDZCQUE2Qix5QkFBeUIsNEJBQTRCLG9CQUFvQixpQ0FBaUMsYUFBYSxTQUFTLDZCQUE2QiwwQkFBMEIsMkNBQTJDLDJDQUEyQyxpQ0FBaUMsU0FBUyxvQ0FBb0MsMEJBQTBCLDJDQUEyQyxTQUFTLGlDQUFpQyw0QkFBNEIsOEJBQThCLFNBQVMsb0NBQW9DLDJCQUEyQix3REFBd0QsU0FBUyxLQUFLLHdRQUF3USxnQkFBZ0IsNENBQTRDLFNBQVMsa0JBQWtCLDJDQUEyQyx5QkFBeUIsdUJBQXVCLCtCQUErQixhQUFhLFNBQVMsa0JBQWtCLCtCQUErQixTQUFTLG1CQUFtQiw2QkFBNkIsOENBQThDLGdDQUFnQywwQkFBMEIsU0FBUyxLQUFLLG1EQUFtRCx3QkFBd0IsMkJBQTJCLEtBQUsseUJBQXlCLHVCQUF1QixvREFBb0QsZ0JBQWdCLDZCQUE2Qiw0QkFBNEIsK0JBQStCLFNBQVMsa0JBQWtCLDZCQUE2QiwyQ0FBMkMsMEJBQTBCLDJDQUEyQyw2Q0FBNkMsOENBQThDLCtCQUErQiwrQkFBK0IsYUFBYSw2QkFBNkIsZ0NBQWdDLGFBQWEsV0FBVywyRUFBMkUsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsNkNBQTZDLCtCQUErQixzQ0FBc0MseUJBQXlCLDZCQUE2QiwwQ0FBMEMsdURBQXVELGlDQUFpQyxxREFBcUQsZ0NBQWdDLDhCQUE4Qix1Q0FBdUMsa0NBQWtDLHNDQUFzQyxnQ0FBZ0MsZ0NBQWdDLCtCQUErQiw0QkFBNEIsaURBQWlELGlDQUFpQyxpQkFBaUIsYUFBYSx5QkFBeUIsMEJBQTBCLHVDQUF1QyxrQ0FBa0Msc0NBQXNDLGdDQUFnQyxnQ0FBZ0MsK0JBQStCLDRCQUE0QixpREFBaUQsaUNBQWlDLGlCQUFpQixhQUFhLFdBQVcsNkpBQTZKLDRCQUE0QiwwQkFBMEIsbUNBQW1DLDhCQUE4QixrQ0FBa0MsNEJBQTRCLDRCQUE0QiwyQkFBMkIsd0JBQXdCLDZDQUE2Qyw2QkFBNkIsYUFBYSxXQUFXLGlFQUFpRSwwQkFBMEIsOEJBQThCLFdBQVcsdUJBQXVCLDJCQUEyQixXQUFXLEtBQUssdUJBQXVCLHlCQUF5Qix3QkFBd0IsMkJBQTJCLGtDQUFrQyw2QkFBNkIsT0FBTyw0QkFBNEIsdUNBQXVDLE9BQU8sMkJBQTJCLHVCQUF1Qix3QkFBd0IsZUFBZSwwQkFBMEIsb0JBQW9CLGtDQUFrQyw2Q0FBNkMsc0JBQXNCLHFDQUFxQyxvQ0FBb0MsMEJBQTBCLFNBQVMsOEJBQThCLHVCQUF1QixzQ0FBc0Msc0NBQXNDLDBDQUEwQyxZQUFZLFNBQVMsT0FBTyxvQkFBb0IsbUJBQW1CLHdCQUF3QixpQkFBaUIsbUJBQW1CLG9CQUFvQixrQkFBa0IsNkNBQTZDLG9DQUFvQyxxQkFBcUIsMERBQTBELE9BQU8sNEZBQTRGLG1CQUFtQixtREFBbUQsNkNBQTZDLHFDQUFxQyxTQUFTLE9BQU8sMEJBQTBCLDJCQUEyQix1QkFBdUIsb0JBQW9CLHlCQUF5Qiw2QkFBNkIsd0JBQXdCLDBDQUEwQyxzQkFBc0IsK0JBQStCLFdBQVcsU0FBUyx5QkFBeUIsNEJBQTRCLDBDQUEwQywrQkFBK0IsMEJBQTBCLFdBQVcsU0FBUyxpQ0FBaUMsa0NBQWtDLDZCQUE2QixXQUFXLFNBQVMsNkJBQTZCLHNDQUFzQywwQkFBMEIsV0FBVyxTQUFTLHdDQUF3Qyx3QkFBd0IsNkJBQTZCLDZCQUE2QixvQkFBb0IseUJBQXlCLHdCQUF3QixTQUFTLE9BQU8scUJBQXFCLHNCQUFzQix1Q0FBdUMsdUJBQXVCLGtDQUFrQyxnQ0FBZ0MsV0FBVyxTQUFTLG9DQUFvQyx3QkFBd0Isb0NBQW9DLFNBQVMsT0FBTyxLQUFLLHFCQUFxQix5QkFBeUIsZ0JBQWdCLGNBQWMsa0JBQWtCLHFCQUFxQixtQkFBbUIsS0FBSywyQkFBMkIsb0JBQW9CLG9DQUFvQyxLQUFLLGlEQUFpRCxrQ0FBa0MscUJBQXFCLCtCQUErQixTQUFTLGlDQUFpQywwQkFBMEIsNEJBQTRCLG9DQUFvQyxtQ0FBbUMsYUFBYSxXQUFXLFNBQVMscUJBQXFCLDZCQUE2QixpQkFBaUIsa0JBQWtCLDBCQUEwQixTQUFTLDBCQUEwQix5REFBeUQsNkJBQTZCLFNBQVMsMkJBQTJCLHlEQUF5RCw2QkFBNkIsU0FBUyxpQ0FBaUMsbUNBQW1DLFNBQVMseUJBQXlCLHdCQUF3Qix5Q0FBeUMsU0FBUyxPQUFPLEtBQUssWUFBWSw0QkFBNEIsb0JBQW9CLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsbUNBQW1DLG1DQUFtQyxhQUFhLFNBQVMsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0NBQXdDLDJDQUEyQyw4QkFBOEIsb0NBQW9DLGdDQUFnQyxTQUFTLG1FQUFtRSx3QkFBd0IsOEJBQThCLG9DQUFvQyxnQ0FBZ0MsU0FBUyxLQUFLLG1CQUFtQjtBQUN4dzJGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDYjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFbmYsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDL0JhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQzRGO0FBQzVGLFlBQXNJOztBQUV0STs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx5SEFBTzs7OztBQUl4QixpRUFBZSxnSUFBYyxNQUFNLEU7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7QUFDK0I7QUFDeEI7QUFDUDtBQUNBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQSxNQUFNO0FBQ04sQzs7Ozs7Ozs7Ozs7Ozs7O0FDUjJEO0FBQzNELGVBQWUsMERBQWdCO0FBQy9CO0FBQ0EsV0FBVyxzREFBUSxhQUFhLHVCQUF1QjtBQUN2RCxLQUFLO0FBQ0w7QUFDQSxXQUFXLHNEQUFRLGFBQWEsMkJBQTJCO0FBQzNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BtRDs7QUFFNUM7QUFDUDtBQUNBLHVGQUF1Riw0REFBYTtBQUNwRztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFTztBQUNQO0FBQ0Esa0JBQWtCLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnBDO0FBQ0E7QUFDQSxpQztBQUN1QztBQUNRO0FBQ0k7O0FBRTVDO0FBQ1A7QUFDQSxhQUFhLG9EQUFPO0FBQ3BCLG9CQUFvQiw0REFBVztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0Esb0M7QUFDQSxzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsY0FBYyxnRUFBYTs7QUFFM0I7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2hDTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNGTyxrRTs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0NBQW9DOztBQUVsRDtBQUNBLGNBQWMsb0NBQW9DOztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7OztBQ3JCTywwQzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNQO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLG1DQUFtQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7OztBQzFCTztBQUNQO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUEsUUFBUSxZQUFZO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ087QUFDUCxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNMTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNGTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDTE87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHVDO0FBQ1E7QUFDSTs7QUFFNUM7QUFDUCxZQUFZLGNBQWM7QUFDMUIsaUNBQWlDLGNBQWM7O0FBRS9DO0FBQ0EsYUFBYSxvREFBTztBQUNwQixvQkFBb0IsNERBQVc7QUFDL0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLGdFQUFhOztBQUUzQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQk87QUFDUDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeUQ7O0FBRXpELGVBQWUsa0VBQWdCO0FBQy9CLHdCQUF3QixtQ0FBbUMsRUFBRTtBQUM3RCx3QkFBd0IsdUNBQXVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSnhEO0FBQ1Asb0NBQW9DLDJCQUEyQjtBQUMvRCxDOzs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQSx3QztBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSE87QUFDUDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCO0FBQ0Esb0M7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnVDO0FBQ1E7QUFDSTs7QUFFNUM7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLG9EQUFPO0FBQ3BCLG9CQUFvQiw0REFBVztBQUMvQjtBQUNBO0FBQ0EsNkNBQTZDLGFBQWEsbUJBQW1CO0FBQzdFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYyxnRUFBYTs7QUFFM0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ00sdUNBQXVDLGdCQUFnQixTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y5RDtBQUNBO0FBQ3VDO0FBQ1E7QUFDSTs7QUFFNUM7QUFDUDtBQUNBO0FBQ0EsYUFBYSxvREFBTztBQUNwQixvQkFBb0IsNERBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYyxnRUFBYTs7QUFFM0I7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2xDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDs7QUFFdEM7QUFDUCxTQUFTLDBEQUFVO0FBQ25COztBQUVBO0FBQ0EsMEJBQTBCLEtBQUs7QUFDL0IsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDK0I7QUFDeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixDOzs7Ozs7Ozs7Ozs7Ozs7QUNSMkQ7QUFDM0Qsa0JBQWtCLDBEQUFnQjtBQUNsQztBQUNBLFVBQVUsc0RBQVEsYUFBYSwwQkFBMEI7QUFDekQsS0FBSztBQUNMO0FBQ0EsVUFBVSxzREFBUSxZQUFZLDhDQUE4QztBQUM1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbUQ7O0FBRTVDO0FBQ1A7QUFDQSxrRUFBa0UsNERBQWE7QUFDL0U7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1A2Qzs7QUFFdEM7QUFDUDtBQUNBO0FBQ0EsSUFBSSxxRUFBeUI7QUFDN0I7QUFDQTtBQUNBLElBQUksbUVBQXVCO0FBQzNCO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVjZDOztBQUV0QztBQUNQLFNBQVMsMERBQVU7QUFDbkIsb0VBQW9FLFFBQVE7O0FBRTVFLDBCQUEwQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDWDZDOztBQUV0QztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IscUVBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxRUFBeUI7QUFDbkQsSUFBSSxrRUFBc0I7QUFDMUI7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQSxTQUFTLDZCQUE2QixFQUFFO0FBQ3hDO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ0xPO0FBQ1Asb0NBQW9DLHVCQUF1QjtBQUMzRCxDOzs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDs7QUFFQSxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDO0FBQ0E7QUFDTTtBQUNzQjtBQUNKO0FBQ1Y7QUFDWjtBQUN3QjtBQUNFO0FBQ0Y7QUFDWjtBQUNNO0FBQ1E7QUFDbEI7QUFDa0I7QUFDcEI7QUFDRTtBQUNBO0FBQ007QUFDUjtBQUNBO0FBQ0U7QUFDTTtBQUNZO0FBQ1o7QUFDQTtBQUNKO0FBQ1E7QUFDSTtBQUNGO0FBQ1Y7QUFDTTtBQUNaO0FBQ1U7O0FBRWhEO0FBQ1AsWUFBWSwwREFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZUFBZTs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpSEFBaUgsNkJBQTZCLEVBQUU7QUFDaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsZ0ZBQWlCLHFCQUFxQiw0RUFBZSxtQkFBbUIsc0RBQUk7QUFDNUcsNkNBQTZDLGdGQUFpQixzQkFBc0IsNEVBQWUsb0JBQW9CLDhFQUFnQjtBQUN2SSxrQ0FBa0MsZ0ZBQWlCLHNCQUFzQiw0RUFBZSxvQkFBb0IsZ0ZBQWlCO0FBQzdILHNDQUFzQyxnRkFBaUIsc0JBQXNCLDRFQUFlLG9CQUFvQix5RUFBYTtBQUM3SCw0Q0FBNEMsZ0ZBQWlCLHNCQUFzQiw0RUFBZSxvQkFBb0IsNkVBQWU7QUFDckksZ0RBQWdELGdGQUFpQix1QkFBdUIsNEVBQWUscUJBQXFCLHlFQUFhO0FBQ3pJLDZDQUE2QyxnRkFBaUIsdUJBQXVCLDRFQUFlLHFCQUFxQix5RUFBYTtBQUN0SSwrQ0FBK0MsZ0ZBQWlCLHVCQUF1Qiw0RUFBZSxxQkFBcUIseUVBQWE7QUFDeEksNENBQTRDLGdGQUFpQix1QkFBdUIsNEVBQWUscUJBQXFCLHlFQUFhO0FBQ3JJLDBDQUEwQyxnRkFBaUIsc0JBQXNCLDRFQUFlLG9CQUFvQiwyRUFBYztBQUNsSSx5Q0FBeUMsZ0ZBQWlCLHNCQUFzQiw0RUFBZSxvQkFBb0IsMkVBQWM7O0FBRWpJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxpQ0FBaUMsNENBQTRDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQU07QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRCxvQ0FBb0Msa0JBQWtCO0FBQ3RELG1DQUFtQyxrQkFBa0I7QUFDckQ7O0FBRUE7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFEO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCOzs7QUFHMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEMsaUJBQWlCLHFDQUFxQzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhFQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4RkFBOEY7QUFDM0gsU0FBUztBQUNUO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5Qyx5REFBeUQsVUFBVTtBQUNuRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQU07QUFDekI7QUFDQTtBQUNBLGdDQUFnQyxrRUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AseUJBQXlCLHVDQUF1QztBQUNoRSw2QkFBNkIsNkJBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0JBQWtCLEVBQUU7QUFDOUMsMEJBQTBCLGtCQUFrQjtBQUM1Qzs7QUFFQTtBQUNBLG1CQUFtQiw2Q0FBNkM7O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixvRUFBb0U7QUFDckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFdBQVc7O0FBRS9CLG1CQUFtQixpQkFBaUI7QUFDcEMsbUJBQW1CLGlCQUFpQjs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELG9CQUFvQjs7QUFFdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsb0RBQW9ELHdCQUF3Qjs7QUFFNUU7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWU7QUFDdkU7QUFDQTs7QUFFQSx3QkFBd0IsYUFBYTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjs7QUFFdkM7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0JBQStCO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0QsNkJBQTZCO0FBQ2pGLGtFQUFrRSw2QkFBNkI7O0FBRS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQSw0REFBNEQ7QUFDNUQsNERBQTREO0FBQzVELEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBLHNFQUFzRSw2Q0FBNkM7QUFDbkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLGlDQUFpQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMENBQTBDLHlCQUF5QjtBQUNuRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDZCQUE2Qjs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBLDZGQUE2RjtBQUM3Rjs7QUFFQTtBQUNBLDJGQUEyRjtBQUMzRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBLG9CQUFvQix5Q0FBeUM7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDZEQUFPO0FBQ1gsTUFBTSwrREFBUTtBQUNkLHFCQUFxQixpQ0FBaUM7QUFDdEQsdUNBQXVDLENBQUMsK0RBQVEsc0JBQXNCO0FBQ3RFLE1BQU0sK0RBQVE7QUFDZDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQSxRQUFRLCtEQUFRO0FBQ2hCLFFBQVEscUVBQVc7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLFVBQVUsK0RBQVE7QUFDbEIsVUFBVSxxRUFBVztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDZEQUFPO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFTO0FBQ3JCLFlBQVksK0RBQVE7O0FBRXBCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLE1BQU0sb0RBQUcsWUFBWSxpQkFBaUIsaUZBQWlCLG9CQUFvQixxQkFBcUIsRUFBRSxFQUFFLEVBQUU7O0FBRXRHO0FBQ0Esb0NBQW9DLDZFQUE2RTs7QUFFakgsbURBQW1ELG9EQUFHLFlBQVksaUJBQWlCLGlGQUFpQix1Q0FBdUMsRUFBRTs7QUFFN0ksS0FBSztBQUNMO0FBQ0EscUJBQXFCLDhCQUE4Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0QsT0FBTzs7QUFFUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QyxpQ0FBaUM7QUFDakM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDhCQUE4Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsT0FBTztBQUN6RTtBQUNBO0FBQ0EsUUFBUSwrREFBUTtBQUNoQixRQUFRLHFFQUFXO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVUsd0dBQXdHLEdBQUcsaUZBQWlCO0FBQzlJLFFBQVEsbUVBQVUsb0NBQW9DLEdBQUcsaUZBQWlCO0FBQzFFLE9BQU87QUFDUCxRQUFRLDZEQUFPO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQVUsb0NBQW9DLGlGQUFpQjtBQUN2RTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxtRUFBVSxvQ0FBb0MsaUZBQWlCOztBQUVyRTtBQUNBO0FBQ0EsNkhBQTZIO0FBQzdILGlDQUFpQywwQ0FBMEM7QUFDM0UsUUFBUSxtRUFBVSw0QkFBNEIsaUZBQWlCO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQTRDO0FBQ3ZFO0FBQ0E7QUFDQSxpQ0FBaUMsMENBQTBDO0FBQzNFLGdDQUFnQyx5Q0FBeUM7QUFDekU7QUFDQSxnQkFBZ0IsQ0FBQyxtRUFBVSw2Q0FBNkMsaUZBQWlCLFNBQVM7O0FBRWxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9DQUFvQzs7QUFFdkQ7QUFDQSxnQkFBZ0IsQ0FBQyxtRUFBVSw2Q0FBNkMsaUZBQWlCLFNBQVM7QUFDbEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCw0Q0FBNEM7QUFDOUY7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCw0RkFBNEY7QUFDN0k7O0FBRUE7QUFDQTtBQUNBLDJGQUEyRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaURBQWlEO0FBQ3BGLGtDQUFrQyxnREFBZ0Q7QUFDbEY7QUFDQSx1QkFBdUIsMENBQTBDLGlCQUFpQixFQUFFOztBQUVwRjtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FLFlBQVk7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQVEsa0JBQWtCLG1CQUFtQjtBQUNyRCxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGlFQUFTLGtCQUFrQix3QkFBd0I7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxDQUFDLGlFQUFTLHlCQUF5QjtBQUNwRSx3Q0FBd0MsQ0FBQyxpRUFBUyw2QkFBNkI7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFRLGdCQUFnQixvQ0FBb0M7QUFDcEU7QUFDQSxRQUFRLDZEQUFPO0FBQ2YsVUFBVSwrREFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTOztBQUVUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLG1FQUFVLHNEQUFzRCxpRkFBaUI7QUFDekY7O0FBRUEsTUFBTSwrREFBUSw2QkFBNkIsNkRBQTZEO0FBQ3hHLE1BQU0scUVBQVc7QUFDakIsTUFBTSwrREFBUTs7QUFFZDtBQUNBLE1BQU0saUVBQVM7QUFDZjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLCtEQUFRO0FBQ2hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxRQUFRLCtEQUFRO0FBQ2hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxRQUFRLCtEQUFRLGNBQWMseUJBQXlCO0FBQ3ZELFFBQVEsK0RBQVEsY0FBYyx5QkFBeUI7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQixPQUFPO0FBQ1AsUUFBUSxpRUFBUztBQUNqQixRQUFRLGlFQUFTO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFTO0FBQ2Y7O0FBRUEsZ0JBQWdCLENBQUMsaUVBQVMsdURBQXVEO0FBQ2pGLG9CQUFvQixDQUFDLGlFQUFTLHdCQUF3QjtBQUN0RCxvQkFBb0IsQ0FBQyxpRUFBUywyQkFBMkI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxNQUFNLGlFQUFTLE9BQU8sbUJBQW1CO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUJBQXFCLGdCQUFnQjtBQUM1Qzs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUIsRUFBRSxtQkFBbUIsZ0JBQWdCOztBQUV4RTtBQUNBLDZCQUE2QixvQ0FBb0M7QUFDakUsdUNBQXVDLGdCQUFnQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7O0FBRXBEO0FBQ0EsSUFBSSx1RUFBWSxPQUFPLG1CQUFtQjs7QUFFMUM7QUFDQSxvQkFBb0IsQ0FBQyx1RUFBWSwyQkFBMkI7QUFDNUQsNEJBQTRCLENBQUMsdUVBQVksb0NBQW9DO0FBQzdFLHVCQUF1QixDQUFDLHVFQUFZLDBCQUEwQjs7QUFFOUQ7QUFDQSxJQUFJLHVFQUFZO0FBQ2hCLElBQUksdUVBQVk7QUFDaEIseUJBQXlCLENBQUMsdUVBQVksa0JBQWtCLHdCQUF3QixFQUFFO0FBQ2xGLG1CQUFtQiw4QkFBOEI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1RUFBWTtBQUNsQjtBQUNBLGdCQUFnQixDQUFDLHVFQUFZLHlCQUF5QjtBQUN0RCxvQkFBb0IsQ0FBQyx1RUFBWSx3QkFBd0I7O0FBRXpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSwwa0RBQTBrRCxxQkFBcUIsbUJBQW1CLEVBQUUsRUFBRTs7QUFFdG5EO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBRyxZQUFZLDBCQUEwQixFQUFFO0FBQy9DOztBQUVBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsNkJBQTZCLHNDQUFzQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCLEVBQUU7QUFDakUsc0JBQXNCLDRDQUE0QztBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLDBCQUEwQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hELG9CQUFvQix3REFBd0Q7O0FBRTVFO0FBQ0E7QUFDQSxRQUFRLGlFQUFTO0FBQ2pCLFFBQVEsdUVBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFFQUFXO0FBQ3JCLFNBQVM7QUFDVCwyQkFBMkIsQ0FBQyxxRUFBVyxhQUFhO0FBQ3BELDJCQUEyQixDQUFDLHFFQUFXLGFBQWE7QUFDcEQ7QUFDQSxPQUFPO0FBQ1A7QUFDQSxVQUFVLHFFQUFXO0FBQ3JCLFNBQVM7QUFDVCwyQkFBMkIsQ0FBQyxxRUFBVyxhQUFhO0FBQ3BELDJCQUEyQixDQUFDLHFFQUFXLGFBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQVc7QUFDbkI7QUFDQSxPQUFPO0FBQ1AsUUFBUSxxRUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQVM7QUFDakIsUUFBUSx1RUFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFTO0FBQ2pCLFFBQVEsdUVBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLENBQUMscUVBQVcsaUJBQWlCO0FBQzFELGdEQUFnRCxpQkFBaUI7QUFDakUsT0FBTztBQUNQLDZCQUE2QixDQUFDLHFFQUFXLGlCQUFpQjtBQUMxRCx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQixRQUFRLHVFQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQVM7QUFDakIsUUFBUSx1RUFBWTtBQUNwQjs7QUFFQTtBQUNBLGlFQUFpRSwrQkFBK0I7O0FBRWhHO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdEQUFnRCwrQkFBK0I7QUFDL0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLHFCQUFxQjtBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLCtCQUErQjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUseUVBQWEsUUFBUSxpRkFBaUI7QUFDaEQsVUFBVSxtRUFBVSw2Q0FBNkMsaUZBQWlCO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsZ0JBQWdCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwwQ0FBMEM7QUFDOUQ7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qiw4QkFBOEIscUJBQXFCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNERBQTRELGdCQUFnQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxxQkFBcUI7QUFDekUsV0FBVztBQUNYLG9EQUFvRCxxQkFBcUI7QUFDekU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esc0NBQXNDLENBQUMscUVBQVcsaUJBQWlCO0FBQ25FLCtCQUErQixDQUFDLHFFQUFXLGVBQWU7QUFDMUQ7QUFDQTtBQUNBLFFBQVEscUVBQVc7QUFDbkIsT0FBTztBQUNQLHlCQUF5QixDQUFDLHFFQUFXLGFBQWE7QUFDbEQseUJBQXlCLENBQUMscUVBQVcsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsQ0FBQyxxRUFBVyxpQkFBaUI7QUFDbEUsOEJBQThCLENBQUMscUVBQVcsZUFBZTtBQUN6RDtBQUNBO0FBQ0EsUUFBUSxxRUFBVztBQUNuQixPQUFPO0FBQ1AseUJBQXlCLENBQUMscUVBQVcsYUFBYTtBQUNsRCx5QkFBeUIsQ0FBQyxxRUFBVyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFROztBQUV6QjtBQUNBLHNCQUFzQixtQ0FBbUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLHVCQUF1QixDQUFDLCtEQUFRLHFCQUFxQjtBQUNyRCxRQUFRLCtEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFFBQVE7O0FBRTFCO0FBQ0E7QUFDQSwrQkFBK0IsZ0NBQWdDOztBQUUvRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQyx1QkFBdUIsQ0FBQyxxRUFBVyxxQkFBcUI7QUFDeEQsUUFBUSxxRUFBVztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixRQUFROztBQUUzQjtBQUNBO0FBQ0EsSUFBSSxxRUFBVztBQUNmO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkMsdUJBQXVCLENBQUMscUVBQVcsZ0JBQWdCO0FBQ25ELFFBQVEscUVBQVc7QUFDbkI7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxDQUFDLHFFQUFXLDBCQUEwQjs7QUFFekU7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0EsUUFBUSxxRUFBVztBQUNuQixRQUFRLHFFQUFXO0FBQ25CLFFBQVEscUVBQVc7QUFDbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkMsdUJBQXVCLENBQUMscUVBQVcsZ0JBQWdCO0FBQ25ELFFBQVEscUVBQVc7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLG1DQUFtQztBQUNqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isb0NBQW9DO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsV0FBVztBQUNoRix3Q0FBd0MsU0FBUztBQUNqRDtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLCtEQUFRO0FBQ3JCO0FBQ0E7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFLFVBQVUsaUVBQVM7O0FBRW5CLFVBQVUsaUVBQVM7O0FBRW5CO0FBQ0Esb0JBQW9CLDZEQUFPOztBQUUzQjtBQUNBLHVCQUF1Qiw2REFBTztBQUM5Qix1QkFBdUIscUJBQXFCOztBQUU1QyxVQUFVLCtEQUFRO0FBQ2xCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQVE7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrREFBUTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtEQUFRO0FBQ1osSUFBSSxxRUFBVztBQUNmLElBQUksdUVBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7O0FBRTVDO0FBQ0EsTUFBTSw2REFBTyxrRUFBa0UsZ0JBQWdCLEVBQUU7QUFDakc7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBRyxZQUFZLGlEQUFpRCxFQUFFO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTs7QUFFcEM7QUFDQTtBQUNBLHNDQUFzQyxtQkFBbUIsRUFBRTtBQUMzRCxVQUFVLCtEQUFRLDBCQUEwQix1QkFBdUI7QUFDbkUsS0FBSzs7QUFFTDtBQUNBLHVCQUF1QixhQUFhOztBQUVwQztBQUNBLElBQUksb0RBQUcsWUFBWSwyQkFBMkIsRUFBRTtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0ZBQWtGLE9BQU87QUFDekY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLG9DQUFvQztBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDZEQUFPO0FBQ1g7QUFDQSxjQUFjLGdFQUFnRTtBQUM5RTtBQUNBLG9DQUFvQyxpRUFBaUU7QUFDckcsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw2REFBTztBQUNYO0FBQ0E7QUFDQSxZQUFZLDZEQUFPO0FBQ25CLFVBQVUscUVBQVc7QUFDckIsVUFBVSwrREFBUTtBQUNsQjtBQUNBO0FBQ0EsT0FBTztBQUNQLGFBQWEsNkRBQU87QUFDcEIsVUFBVSwrREFBUTtBQUNsQjtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVUscUVBQVc7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwrREFBUTs7QUFFaEI7QUFDQSxRQUFRLCtEQUFRO0FBQ2hCLFFBQVEscUVBQVc7QUFDbkIsT0FBTztBQUNQO0FBQ0EsUUFBUSwrREFBUTtBQUNoQixRQUFRLHFFQUFXO0FBQ25COztBQUVBO0FBQ0EsTUFBTSxxRUFBVztBQUNqQjs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw2REFBTztBQUNiLFFBQVEscUVBQVc7QUFDbkIsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsK0RBQVE7QUFDaEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLHFFQUFXOztBQUVuQixRQUFRLCtEQUFRLGNBQWMsNkRBQTZEO0FBQzNGLFFBQVEscUVBQVc7QUFDbkIsUUFBUSwrREFBUTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsb0NBQW9DO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixhQUFhOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZOztBQUVqQztBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGFBQWE7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QyxPQUFPO0FBQ1A7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsb0NBQW9DOztBQUUvRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0NBQWdDOztBQUVoRCx3QkFBd0IsT0FBTztBQUMvQjs7QUFFQTtBQUNBLG1CQUFtQixtREFBbUQ7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQVc7QUFDakIsTUFBTSwrREFBUTs7QUFFZCxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUVBQVMsY0FBYyxtQkFBbUI7O0FBRW5FLFNBQVM7QUFDVDtBQUNBLFVBQVUscUVBQVc7QUFDckI7O0FBRUEsMEJBQTBCLDhCQUE4QjtBQUN4RCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1RUFBWTtBQUNwQixRQUFRLGlFQUFTOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsaUVBQVMsY0FBYyxtQkFBbUI7QUFDcEc7QUFDQSxHQUFHOztBQUVIO0FBQ0EscUNBQXFDLGVBQWU7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCOztBQUV2QztBQUNBLHdFQUF3RSxnQkFBZ0I7O0FBRXhGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscUVBQVc7QUFDckIsVUFBVSwrREFBUTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsb0NBQW9DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUNBQXVDLFFBQVEsRUFBRSxPQUFPLG1CQUFtQjtBQUMzRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsOENBQThDLHFDQUFxQzs7QUFFbkY7QUFDQTtBQUNBLG1CQUFtQixrRUFBa0U7O0FBRXJGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IscUJBQXFCO0FBQ3BELCtCQUErQixxQkFBcUI7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUSxFQUFFLE9BQU8sbUJBQW1CO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRGQUE0Riw0QkFBNEI7O0FBRXhIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUSxFQUFFLE9BQU8sbUJBQW1CO0FBQ3pFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsNkRBQU8sdUJBQXVCLDRCQUE0QjtBQUNqRyxRQUFRLDZEQUFPO0FBQ2YseUNBQXlDLDZEQUFPO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEMsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQVEsa0JBQWtCLHNCQUFzQjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQStDO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQWdEO0FBQ3pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQU8sMkJBQTJCLFFBQVE7O0FBRW5EO0FBQ0E7QUFDQSwwQkFBMEIsNkRBQU87O0FBRWpDO0FBQ0E7QUFDQSwyQkFBMkIsa0NBQWtDO0FBQzdELE9BQU87QUFDUCxtQ0FBbUMsa0NBQWtDO0FBQ3JFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlGQUFpQixDQUFDLCtEQUFRO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUSxFQUFFLE9BQU8sbUJBQW1CO0FBQ3pFOztBQUVBLGdDQUFnQyxxQkFBcUI7O0FBRXJEO0FBQ0E7QUFDQSxNQUFNLG9EQUFHO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLFlBQVksb0RBQUcsWUFBWSxjQUFjLEVBQUUsRUFBRTtBQUNyRSxPQUFPO0FBQ1AsNENBQTRDLG9EQUFvRDtBQUNoRyxvQ0FBb0Msc0JBQXNCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQUc7QUFDUCxtQkFBbUIsWUFBWSxvREFBRyxZQUFZLGNBQWMsRUFBRSxFQUFFOztBQUVoRSx3Q0FBd0Msb0RBQW9EO0FBQzVGO0FBQ0EsOENBQThDLHNCQUFzQjs7QUFFcEU7QUFDQSxxQkFBcUIsa0VBQWtFO0FBQ3ZGLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBRztBQUNYO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlFQUFTLFVBQVU7QUFDN0I7QUFDQSxZQUFZLHVFQUFZLFVBQVUsc0JBQXNCO0FBQ3hELFlBQVk7QUFDWjs7QUFFQTtBQUNBLHFCQUFxQixvREFBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsOERBQThELFlBQVk7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELHVCQUF1QjtBQUN6RSxxQkFBcUIsNkJBQTZCO0FBQ2xELGlDQUFpQyxvQkFBb0I7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFROztBQUUxQztBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFXOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlFQUFXO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBTTtBQUN2QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3c0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1QztBQUNBO0FBQ007QUFDc0I7QUFDSjtBQUNWO0FBQ1o7QUFDd0I7QUFDRTtBQUNGO0FBQ1o7QUFDTTtBQUNRO0FBQ2xCO0FBQ2tCO0FBQ3BCO0FBQ0U7QUFDQTtBQUNNO0FBQ1I7QUFDQTtBQUNFO0FBQ007QUFDWTtBQUNaO0FBQ0E7QUFDSjtBQUNRO0FBQ0k7QUFDRjtBQUNWO0FBQ007QUFDWjtBQUNVOztBQUVoRDtBQUNQLFlBQVksMERBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWU7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILDZCQUE2QixFQUFFO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLGdGQUFpQixxQkFBcUIsNEVBQWUsbUJBQW1CLHNEQUFJO0FBQzVHLDZDQUE2QyxnRkFBaUIsc0JBQXNCLDRFQUFlLG9CQUFvQiw4RUFBZ0I7QUFDdkksa0NBQWtDLGdGQUFpQixzQkFBc0IsNEVBQWUsb0JBQW9CLGdGQUFpQjtBQUM3SCxzQ0FBc0MsZ0ZBQWlCLHNCQUFzQiw0RUFBZSxvQkFBb0IseUVBQWE7QUFDN0gsNENBQTRDLGdGQUFpQixzQkFBc0IsNEVBQWUsb0JBQW9CLDZFQUFlO0FBQ3JJLGdEQUFnRCxnRkFBaUIsdUJBQXVCLDRFQUFlLHFCQUFxQix5RUFBYTtBQUN6SSw2Q0FBNkMsZ0ZBQWlCLHVCQUF1Qiw0RUFBZSxxQkFBcUIseUVBQWE7QUFDdEksK0NBQStDLGdGQUFpQix1QkFBdUIsNEVBQWUscUJBQXFCLHlFQUFhO0FBQ3hJLDRDQUE0QyxnRkFBaUIsdUJBQXVCLDRFQUFlLHFCQUFxQix5RUFBYTtBQUNySSwwQ0FBMEMsZ0ZBQWlCLHNCQUFzQiw0RUFBZSxvQkFBb0IsMkVBQWM7QUFDbEkseUNBQXlDLGdGQUFpQixzQkFBc0IsNEVBQWUsb0JBQW9CLDJFQUFjOztBQUVqSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsaUNBQWlDLDRDQUE0QztBQUM3RTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFNO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQkFBbUI7QUFDbkQsb0NBQW9DLGtCQUFrQjtBQUN0RCxtQ0FBbUMsa0JBQWtCO0FBQ3JEOztBQUVBO0FBQ0EsaUNBQWlDLHlCQUF5QjtBQUMxRDtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3Qjs7O0FBRzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLGlCQUFpQixxQ0FBcUM7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4RUFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsOEZBQThGO0FBQzNILFNBQVM7QUFDVDtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUMseURBQXlELFVBQVU7QUFDbkU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFNO0FBQ3pCO0FBQ0E7QUFDQSxnQ0FBZ0Msa0VBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHlCQUF5Qix1Q0FBdUM7QUFDaEUsNkJBQTZCLDZCQUE2QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtCQUFrQixFQUFFO0FBQzlDLDBCQUEwQixrQkFBa0I7QUFDNUM7O0FBRUE7QUFDQSxtQkFBbUIsNkNBQTZDOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsb0VBQW9FO0FBQ3JGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixXQUFXOztBQUUvQixtQkFBbUIsaUJBQWlCO0FBQ3BDLG1CQUFtQixpQkFBaUI7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxvQkFBb0I7O0FBRXRFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG9EQUFvRCx3QkFBd0I7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxlQUFlO0FBQ3ZFO0FBQ0E7O0FBRUEsd0JBQXdCLGFBQWE7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7O0FBRXZDO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtCQUErQjtBQUN4RTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9ELDZCQUE2QjtBQUNqRixrRUFBa0UsNkJBQTZCOztBQUUvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0EsNERBQTREO0FBQzVELDREQUE0RDtBQUM1RCxLQUFLO0FBQ0w7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQSxzRUFBc0UsNkNBQTZDO0FBQ25IO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBDQUEwQyx5QkFBeUI7QUFDbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQSw2RkFBNkY7QUFDN0Y7O0FBRUE7QUFDQSwyRkFBMkY7QUFDM0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsd0JBQXdCO0FBQ3REO0FBQ0E7QUFDQSxvQkFBb0IseUNBQXlDO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw2REFBTztBQUNYLE1BQU0sK0RBQVE7QUFDZCxxQkFBcUIsaUNBQWlDO0FBQ3RELHVDQUF1QyxDQUFDLCtEQUFRLHNCQUFzQjtBQUN0RSxNQUFNLCtEQUFRO0FBQ2Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0EsUUFBUSwrREFBUTtBQUNoQixRQUFRLHFFQUFXO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxVQUFVLCtEQUFRO0FBQ2xCLFVBQVUscUVBQVc7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSw2REFBTztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBUztBQUNyQixZQUFZLCtEQUFROztBQUVwQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxNQUFNLG9EQUFHLFlBQVksaUJBQWlCLGlGQUFpQixvQkFBb0IscUJBQXFCLEVBQUUsRUFBRSxFQUFFOztBQUV0RztBQUNBLG9DQUFvQyw2RUFBNkU7O0FBRWpILG1EQUFtRCxvREFBRyxZQUFZLGlCQUFpQixpRkFBaUIsdUNBQXVDLEVBQUU7O0FBRTdJLEtBQUs7QUFDTDtBQUNBLHFCQUFxQiw4QkFBOEI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkJBQTJCO0FBQzNELE9BQU87O0FBRVAsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUMsaUNBQWlDO0FBQ2pDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw4QkFBOEI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLE9BQU87QUFDekU7QUFDQTtBQUNBLFFBQVEsK0RBQVE7QUFDaEIsUUFBUSxxRUFBVztBQUNuQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFVLHdHQUF3RyxHQUFHLGlGQUFpQjtBQUM5SSxRQUFRLG1FQUFVLG9DQUFvQyxHQUFHLGlGQUFpQjtBQUMxRSxPQUFPO0FBQ1AsUUFBUSw2REFBTztBQUNmO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFVLG9DQUFvQyxpRkFBaUI7QUFDdkU7O0FBRUE7QUFDQTtBQUNBLE1BQU0sbUVBQVUsb0NBQW9DLGlGQUFpQjs7QUFFckU7QUFDQTtBQUNBLDZIQUE2SDtBQUM3SCxpQ0FBaUMsMENBQTBDO0FBQzNFLFFBQVEsbUVBQVUsNEJBQTRCLGlGQUFpQjtBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUE0QztBQUN2RTtBQUNBO0FBQ0EsaUNBQWlDLDBDQUEwQztBQUMzRSxnQ0FBZ0MseUNBQXlDO0FBQ3pFO0FBQ0EsZ0JBQWdCLENBQUMsbUVBQVUsNkNBQTZDLGlGQUFpQixTQUFTOztBQUVsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixvQ0FBb0M7O0FBRXZEO0FBQ0EsZ0JBQWdCLENBQUMsbUVBQVUsNkNBQTZDLGlGQUFpQixTQUFTO0FBQ2xHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsNENBQTRDO0FBQzlGOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsNEZBQTRGO0FBQzdJOztBQUVBO0FBQ0E7QUFDQSwyRkFBMkY7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlEQUFpRDtBQUNwRixrQ0FBa0MsZ0RBQWdEO0FBQ2xGO0FBQ0EsdUJBQXVCLDBDQUEwQyxpQkFBaUIsRUFBRTs7QUFFcEY7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxZQUFZO0FBQy9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFRLGtCQUFrQixtQkFBbUI7QUFDckQsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUyxrQkFBa0Isd0JBQXdCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsQ0FBQyxpRUFBUyx5QkFBeUI7QUFDcEUsd0NBQXdDLENBQUMsaUVBQVMsNkJBQTZCO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrREFBUSxnQkFBZ0Isb0NBQW9DO0FBQ3BFO0FBQ0EsUUFBUSw2REFBTztBQUNmLFVBQVUsK0RBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtRUFBVSxzREFBc0QsaUZBQWlCO0FBQ3pGOztBQUVBLE1BQU0sK0RBQVEsNkJBQTZCLDZEQUE2RDtBQUN4RyxNQUFNLHFFQUFXO0FBQ2pCLE1BQU0sK0RBQVE7O0FBRWQ7QUFDQSxNQUFNLGlFQUFTO0FBQ2Y7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrREFBUTtBQUNoQjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsUUFBUSwrREFBUTtBQUNoQjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsUUFBUSwrREFBUSxjQUFjLHlCQUF5QjtBQUN2RCxRQUFRLCtEQUFRLGNBQWMseUJBQXlCO0FBQ3ZEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVEsaUVBQVM7QUFDakIsT0FBTztBQUNQLFFBQVEsaUVBQVM7QUFDakIsUUFBUSxpRUFBUztBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpRUFBUztBQUNmOztBQUVBLGdCQUFnQixDQUFDLGlFQUFTLHVEQUF1RDtBQUNqRixvQkFBb0IsQ0FBQyxpRUFBUyx3QkFBd0I7QUFDdEQsb0JBQW9CLENBQUMsaUVBQVMsMkJBQTJCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsTUFBTSxpRUFBUyxPQUFPLG1CQUFtQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFCQUFxQixnQkFBZ0I7QUFDNUM7O0FBRUE7QUFDQSxrQkFBa0IsaUJBQWlCLEVBQUUsbUJBQW1CLGdCQUFnQjs7QUFFeEU7QUFDQSw2QkFBNkIsb0NBQW9DO0FBQ2pFLHVDQUF1QyxnQkFBZ0I7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCOztBQUVwRDtBQUNBLElBQUksdUVBQVksT0FBTyxtQkFBbUI7O0FBRTFDO0FBQ0Esb0JBQW9CLENBQUMsdUVBQVksMkJBQTJCO0FBQzVELDRCQUE0QixDQUFDLHVFQUFZLG9DQUFvQztBQUM3RSx1QkFBdUIsQ0FBQyx1RUFBWSwwQkFBMEI7O0FBRTlEO0FBQ0EsSUFBSSx1RUFBWTtBQUNoQixJQUFJLHVFQUFZO0FBQ2hCLHlCQUF5QixDQUFDLHVFQUFZLGtCQUFrQix3QkFBd0IsRUFBRTtBQUNsRixtQkFBbUIsOEJBQThCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUVBQVk7QUFDbEI7QUFDQSxnQkFBZ0IsQ0FBQyx1RUFBWSx5QkFBeUI7QUFDdEQsb0JBQW9CLENBQUMsdUVBQVksd0JBQXdCOztBQUV6RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsMGtEQUEwa0QscUJBQXFCLG1CQUFtQixFQUFFLEVBQUU7O0FBRXRuRDtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQUcsWUFBWSwwQkFBMEIsRUFBRTtBQUMvQzs7QUFFQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLDZCQUE2QixzQ0FBc0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtCQUErQixFQUFFO0FBQ2pFLHNCQUFzQiw0Q0FBNEM7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QywwQkFBMEIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRCxvQkFBb0Isd0RBQXdEOztBQUU1RTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQixRQUFRLHVFQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxRUFBVztBQUNyQixTQUFTO0FBQ1QsMkJBQTJCLENBQUMscUVBQVcsYUFBYTtBQUNwRCwyQkFBMkIsQ0FBQyxxRUFBVyxhQUFhO0FBQ3BEO0FBQ0EsT0FBTztBQUNQO0FBQ0EsVUFBVSxxRUFBVztBQUNyQixTQUFTO0FBQ1QsMkJBQTJCLENBQUMscUVBQVcsYUFBYTtBQUNwRCwyQkFBMkIsQ0FBQyxxRUFBVyxhQUFhO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFXO0FBQ25CO0FBQ0EsT0FBTztBQUNQLFFBQVEscUVBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFTO0FBQ2pCLFFBQVEsdUVBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUztBQUNqQixRQUFRLHVFQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixDQUFDLHFFQUFXLGlCQUFpQjtBQUMxRCxnREFBZ0QsaUJBQWlCO0FBQ2pFLE9BQU87QUFDUCw2QkFBNkIsQ0FBQyxxRUFBVyxpQkFBaUI7QUFDMUQsd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQVM7QUFDakIsUUFBUSx1RUFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFTO0FBQ2pCLFFBQVEsdUVBQVk7QUFDcEI7O0FBRUE7QUFDQSxpRUFBaUUsK0JBQStCOztBQUVoRztBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnREFBZ0QsK0JBQStCO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCQUF3QixxQkFBcUI7QUFDN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQywrQkFBK0I7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHlFQUFhLFFBQVEsaUZBQWlCO0FBQ2hELFVBQVUsbUVBQVUsNkNBQTZDLGlGQUFpQjtBQUNsRjtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGdCQUFnQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMENBQTBDO0FBQzlEOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDREQUE0RCxnQkFBZ0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QscUJBQXFCO0FBQ3pFLFdBQVc7QUFDWCxvREFBb0QscUJBQXFCO0FBQ3pFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHNDQUFzQyxDQUFDLHFFQUFXLGlCQUFpQjtBQUNuRSwrQkFBK0IsQ0FBQyxxRUFBVyxlQUFlO0FBQzFEO0FBQ0E7QUFDQSxRQUFRLHFFQUFXO0FBQ25CLE9BQU87QUFDUCx5QkFBeUIsQ0FBQyxxRUFBVyxhQUFhO0FBQ2xELHlCQUF5QixDQUFDLHFFQUFXLGFBQWE7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLENBQUMscUVBQVcsaUJBQWlCO0FBQ2xFLDhCQUE4QixDQUFDLHFFQUFXLGVBQWU7QUFDekQ7QUFDQTtBQUNBLFFBQVEscUVBQVc7QUFDbkIsT0FBTztBQUNQLHlCQUF5QixDQUFDLHFFQUFXLGFBQWE7QUFDbEQseUJBQXlCLENBQUMscUVBQVcsYUFBYTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUTs7QUFFekI7QUFDQSxzQkFBc0IsbUNBQW1DOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQyx1QkFBdUIsQ0FBQywrREFBUSxxQkFBcUI7QUFDckQsUUFBUSwrREFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixRQUFROztBQUUxQjtBQUNBO0FBQ0EsK0JBQStCLGdDQUFnQzs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkMsdUJBQXVCLENBQUMscUVBQVcscUJBQXFCO0FBQ3hELFFBQVEscUVBQVc7QUFDbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsUUFBUTs7QUFFM0I7QUFDQTtBQUNBLElBQUkscUVBQVc7QUFDZjtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLHVCQUF1QixDQUFDLHFFQUFXLGdCQUFnQjtBQUNuRCxRQUFRLHFFQUFXO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsQ0FBQyxxRUFBVywwQkFBMEI7O0FBRXpFO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBLFFBQVEscUVBQVc7QUFDbkIsUUFBUSxxRUFBVztBQUNuQixRQUFRLHFFQUFXO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLHVCQUF1QixDQUFDLHFFQUFXLGdCQUFnQjtBQUNuRCxRQUFRLHFFQUFXO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQVE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxtQ0FBbUM7QUFDakY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLFdBQVc7QUFDaEYsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSwrREFBUTtBQUNyQjtBQUNBO0FBQ0EsNkNBQTZDLHFCQUFxQjtBQUNsRSxVQUFVLGlFQUFTOztBQUVuQixVQUFVLGlFQUFTOztBQUVuQjtBQUNBLG9CQUFvQiw2REFBTzs7QUFFM0I7QUFDQSx1QkFBdUIsNkRBQU87QUFDOUIsdUJBQXVCLHFCQUFxQjs7QUFFNUMsVUFBVSwrREFBUTtBQUNsQjtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtEQUFRO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLElBQUksK0RBQVE7QUFDWjtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrREFBUTtBQUNaLElBQUkscUVBQVc7QUFDZixJQUFJLHVFQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCOztBQUU1QztBQUNBLE1BQU0sNkRBQU8sa0VBQWtFLGdCQUFnQixFQUFFO0FBQ2pHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQUcsWUFBWSxpREFBaUQsRUFBRTtBQUN0RTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7O0FBRXBDO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1CLEVBQUU7QUFDM0QsVUFBVSwrREFBUSwwQkFBMEIsdUJBQXVCO0FBQ25FLEtBQUs7O0FBRUw7QUFDQSx1QkFBdUIsYUFBYTs7QUFFcEM7QUFDQSxJQUFJLG9EQUFHLFlBQVksMkJBQTJCLEVBQUU7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRixPQUFPO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxvQ0FBb0M7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw2REFBTztBQUNYO0FBQ0EsY0FBYyxnRUFBZ0U7QUFDOUU7QUFDQSxvQ0FBb0MsaUVBQWlFO0FBQ3JHLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNkRBQU87QUFDWDtBQUNBO0FBQ0EsWUFBWSw2REFBTztBQUNuQixVQUFVLHFFQUFXO0FBQ3JCLFVBQVUsK0RBQVE7QUFDbEI7QUFDQTtBQUNBLE9BQU87QUFDUCxhQUFhLDZEQUFPO0FBQ3BCLFVBQVUsK0RBQVE7QUFDbEI7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVLHFFQUFXO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLFFBQVEsK0RBQVE7O0FBRWhCO0FBQ0EsUUFBUSwrREFBUTtBQUNoQixRQUFRLHFFQUFXO0FBQ25CLE9BQU87QUFDUDtBQUNBLFFBQVEsK0RBQVE7QUFDaEIsUUFBUSxxRUFBVztBQUNuQjs7QUFFQTtBQUNBLE1BQU0scUVBQVc7QUFDakI7O0FBRUE7QUFDQTtBQUNBLE1BQU0sNkRBQU87QUFDYixRQUFRLHFFQUFXO0FBQ25CLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLCtEQUFRO0FBQ2hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxxRUFBVzs7QUFFbkIsUUFBUSwrREFBUSxjQUFjLDZEQUE2RDtBQUMzRixRQUFRLHFFQUFXO0FBQ25CLFFBQVEsK0RBQVE7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxRQUFROztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLG9DQUFvQztBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsYUFBYTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTs7QUFFakM7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixhQUFhOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUMsT0FBTztBQUNQO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG9DQUFvQzs7QUFFL0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvQ0FBb0M7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGdDQUFnQzs7QUFFaEQsd0JBQXdCLE9BQU87QUFDL0I7O0FBRUE7QUFDQSxtQkFBbUIsbURBQW1EOztBQUV0RTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFFQUFXO0FBQ2pCLE1BQU0sK0RBQVE7O0FBRWQsa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUFTLGNBQWMsbUJBQW1COztBQUVuRSxTQUFTO0FBQ1Q7QUFDQSxVQUFVLHFFQUFXO0FBQ3JCOztBQUVBLDBCQUEwQiw4QkFBOEI7QUFDeEQsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdUVBQVk7QUFDcEIsUUFBUSxpRUFBUzs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBELGlFQUFTLGNBQWMsbUJBQW1CO0FBQ3BHO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHFDQUFxQyxlQUFlOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjs7QUFFdkM7QUFDQSx3RUFBd0UsZ0JBQWdCOztBQUV4RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFFQUFXO0FBQ3JCLFVBQVUsK0RBQVE7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG9DQUFvQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVDQUF1QyxRQUFRLEVBQUUsT0FBTyxtQkFBbUI7QUFDM0U7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLDhDQUE4QyxxQ0FBcUM7O0FBRW5GO0FBQ0E7QUFDQSxtQkFBbUIsa0VBQWtFOztBQUVyRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRCwrQkFBK0IscUJBQXFCO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVEsRUFBRSxPQUFPLG1CQUFtQjtBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0RkFBNEYsNEJBQTRCOztBQUV4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVEsRUFBRSxPQUFPLG1CQUFtQjtBQUN6RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLDZEQUFPLHVCQUF1Qiw0QkFBNEI7QUFDakcsUUFBUSw2REFBTztBQUNmLHlDQUF5Qyw2REFBTztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtEQUFRLGtCQUFrQixzQkFBc0I7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUErQztBQUN4RTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFnRDtBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZEQUFPLDJCQUEyQixRQUFROztBQUVuRDtBQUNBO0FBQ0EsMEJBQTBCLDZEQUFPOztBQUVqQztBQUNBO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RCxPQUFPO0FBQ1AsbUNBQW1DLGtDQUFrQztBQUNyRSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxpRkFBaUIsQ0FBQywrREFBUTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVEsRUFBRSxPQUFPLG1CQUFtQjtBQUN6RTs7QUFFQSxnQ0FBZ0MscUJBQXFCOztBQUVyRDtBQUNBO0FBQ0EsTUFBTSxvREFBRztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixZQUFZLG9EQUFHLFlBQVksY0FBYyxFQUFFLEVBQUU7QUFDckUsT0FBTztBQUNQLDRDQUE0QyxvREFBb0Q7QUFDaEcsb0NBQW9DLHNCQUFzQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFHO0FBQ1AsbUJBQW1CLFlBQVksb0RBQUcsWUFBWSxjQUFjLEVBQUUsRUFBRTs7QUFFaEUsd0NBQXdDLG9EQUFvRDtBQUM1RjtBQUNBLDhDQUE4QyxzQkFBc0I7O0FBRXBFO0FBQ0EscUJBQXFCLGtFQUFrRTtBQUN2RixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQUc7QUFDWDtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpRUFBUyxVQUFVO0FBQzdCO0FBQ0EsWUFBWSx1RUFBWSxVQUFVLHNCQUFzQjtBQUN4RCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxxQkFBcUIsb0RBQUc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCx1QkFBdUI7QUFDekUscUJBQXFCLDZCQUE2QjtBQUNsRCxpQ0FBaUMsb0JBQW9CO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBVzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpRUFBVztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQU07QUFDdkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzc0ZPLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUU3QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV6RCxJQUFHLENBQUMsT0FBTyxZQUFZLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUksSUFBSSxDQUFDLEVBQUU7UUFFbEUsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFFMUMsSUFBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFFLHVCQUF1QjtnQkFDNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsT0FBTztvQkFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsQ0FBQzthQUNKO2lCQUNJLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBUyxPQUFPO29CQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksV0FBbUI7UUFFdkIsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtZQUM1QixXQUFXLEdBQUcsU0FBUztTQUN4QjthQUFNO1lBQ0wsV0FBVyxHQUFHLFFBQVE7U0FDdkI7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFDLEdBQUcsRUFBRTtZQUVwQyxJQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLFdBQVcsS0FBSyxRQUFRLEVBQUU7Z0JBQ3ZELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBUyxPQUFPO29CQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFFaEMsV0FBVyxHQUFHLFNBQVM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO2dCQUUvRCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsT0FBTztvQkFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRWhDLFdBQVcsR0FBRyxRQUFRO2dCQUN4QixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO0tBQ0g7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5RE0sTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBRTNCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztJQUUxRSxJQUFHLENBQUMsT0FBTyxTQUFTLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSSxJQUFJLENBQUMsRUFBRTtRQUV6SCxJQUFJLFdBQW1CO1FBRXZCLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7WUFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDakMsV0FBVyxHQUFHLFNBQVM7U0FDeEI7YUFBTTtZQUNMLFdBQVcsR0FBRyxRQUFRO1NBQ3ZCO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFFbkMsSUFBRyxNQUFNLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxXQUFXLEtBQUssUUFBUSxFQUFFO2dCQUNyRCxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFDakMsV0FBVyxHQUFHLFNBQVM7YUFDMUI7aUJBQU0sSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO2dCQUM3RCxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFDakMsV0FBVyxHQUFHLFFBQVE7YUFDekI7UUFDTCxDQUFDLENBQUM7S0FDTDtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QndGO0FBRXpGLE1BQU0sV0FBVyxHQUFHLENBQUMsU0FBaUIsRUFBRSxRQUEwQixFQUFFLEVBQUU7SUFFckUsTUFBTSxjQUFjLEdBQXVCO1FBQ3pDLFNBQVMsRUFBRSxRQUFRO1FBQ25CLEtBQUssRUFBRSxHQUFHO1FBQ1YsU0FBUyxFQUFFLElBQUk7UUFDZixXQUFXLEVBQUUsUUFBUTtRQUNyQixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBRSxJQUFJO0tBQ2hCO0lBRUQsUUFBUSxTQUFTLEVBQUU7UUFHakIsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUVmLHVDQUNLLGNBQWMsS0FDakIsaUJBQWlCLEVBQUUsV0FBVyxFQUM5QixlQUFlLEVBQUUsSUFBSSxFQUNyQixNQUFNLEVBQUUsQ0FBQyxFQUNULEtBQUssRUFBRSxDQUFDLEVBQ1IsT0FBTyxFQUFFLENBQUMsSUFDWDtTQUNGO0tBQ0Y7QUFDRixDQUFDO0FBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxVQUFlLEVBQUUsWUFBcUIsRUFBRSxFQUFFO0lBRTdELDBDQUEwQztJQUMxQyxJQUFJLE9BQU8sVUFBVSxDQUFDLGlCQUFpQixLQUFLLFFBQVEsRUFBRTtRQUNwRCxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTlFLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUN6QixVQUFVLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDO1NBQzdDO0tBQ0Y7QUFDRixDQUFDO0FBRU0sTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQzdCLE1BQU0sZ0JBQWdCLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEYsSUFBSSxjQUFrQztJQUV0QyxJQUFJLGdCQUFnQixLQUFLLElBQUksRUFBRTtRQUM3QixJQUFJLHFCQUFxQixHQUF1QixXQUFXLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQ3pGLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBQztRQUNuRCxjQUFjLEdBQUcsZ0VBQUcsQ0FBQyxxQkFBcUIsQ0FBQztLQUM1QztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BETSxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7SUFFMUIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRTlELElBQUcsQ0FBQyxPQUFPLFVBQVUsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSSxJQUFJLENBQUMsRUFBRTtRQUU1RCxNQUFNLFFBQVEsR0FBK0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sU0FBUyxHQUErQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdkYsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUVuQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBa0IsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMzQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUM5QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRW5CLElBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFFL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQW9CLEVBQUUsS0FBSyxFQUFFLEVBQUU7d0JBRTlDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDaEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO29CQUM5QyxDQUFDLENBQUM7b0JBRUYsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO29CQUN4QyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7aUJBQzlCO2dCQUdGLDJFQUEyRTtnQkFFMUUsMkNBQTJDO2dCQUMzQyx5Q0FBeUM7Z0JBQ3pDLG1GQUFtRjtnQkFFbkYsc0ZBQXNGO2dCQUN0RixtQ0FBbUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7S0FDTDtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pDTSxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7SUFFMUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFekQsU0FBUyxlQUFlO1FBQ3BCLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCxJQUFHLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUksSUFBSSxDQUFDLEVBQUU7UUFFcEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztLQUN0RDtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1oyQjtBQUN3QjtBQUNHO0FBQ1I7QUFFdUM7QUFDVjtBQUVEO0FBQ1I7QUFDUTtBQUkxRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO0lBQ3JELHVGQUFZLEVBQUU7SUFDZCwrRUFBVSxFQUFFO0lBQ1osdUZBQVMsRUFBRTtJQUNYLG1HQUFVLEVBQUU7SUFDWix5RkFBUyxFQUFFO0FBQ2YsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2JsdXNoLXZpc3VhbC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3BlcmZ1bWUtcHJvZHVjdC5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGFzLWZhZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDElIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmZhZGUtaW4ge1xcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgOTklIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uZmFkZS1vdXQge1xcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAyMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLm92ZXJsYXktYXJlYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDIwJSwgI2JhMzgyZiwgIzg5NDJhOCk7XFxuICBtaXgtYmxlbmQtbW9kZTogY29sb3I7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5hbmltYXRpb24tYXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmJveC1hcmVhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ib3gtYXJlYSBsaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQ6ICNiYTM4MmY7XFxuICBhbmltYXRpb246IGFuaW1hdGUgMjBzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGJvdHRvbTogLTE1MHB4O1xcbn1cXG5cXG4uYm94LWFyZWEgbGk6bnRoLWNoaWxkKDEpIHtcXG4gIGxlZnQ6IDg2JTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG59XFxuXFxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCgyKSB7XFxuICBsZWZ0OiAxMiU7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xcbn1cXG5cXG4uYm94LWFyZWEgbGk6bnRoLWNoaWxkKDMpIHtcXG4gIGxlZnQ6IDcwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBhbmltYXRpb24tZGVsYXk6IDUuNXM7XFxufVxcblxcbi5ib3gtYXJlYSBsaTpudGgtY2hpbGQoNCkge1xcbiAgbGVmdDogNDIlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcXG59XFxuXFxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCg1KSB7XFxuICBsZWZ0OiA2NSU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxufVxcblxcbi5ib3gtYXJlYSBsaTpudGgtY2hpbGQoNikge1xcbiAgbGVmdDogMTUlO1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxMTBweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogMy41cztcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAwcHgpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5hbmltU3RhdGUge1xcbiAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gMnMgZWFzZS1vdXQ7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uYW5pbVN0YXRlOmhvdmVyLCAuYW5pbVN0YXRlOmZvY3VzIHtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5hbmltU3RhdGU6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4uYW5pbVN0YXRlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuLmFuaW1TdGF0ZTpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMS40KSBzY2FsZVkoMS42KTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbmJvZHkubm9zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxudWwsIG9sIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmctdG9wOiA0LjVlbTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWMwYzA7XFxufVxcblxcbi5uby1zcGFjaW5nIHtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLnNlY3Rpb25fX2lubmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnNlY3Rpb25fX2lubmVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA0MGVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuc2VjdGlvbl9faW5uZXIge1xcbiAgICB3aWR0aDogNThlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6OTNlbSkge1xcbiAgLnNlY3Rpb25fX2lubmVyIHtcXG4gICAgd2lkdGg6IDkwZW07XFxuICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA2OS4zNzVyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmNvbnRhaW5lci0tcGFsbCB7XFxuICBwYWRkaW5nLXRvcDogNC4zNzVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmNvbnRhaW5lci0tcGFsbCB7XFxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci0tcHkge1xcbiAgcGFkZGluZy10b3A6IDQuMzc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuY29udGFpbmVyLS1weSB7XFxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci0tcHgge1xcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxufVxcbi5jb250YWluZXItLXB0IHtcXG4gIHBhZGRpbmctdG9wOiA0LjM3NXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmNvbnRhaW5lci0tcHQge1xcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci0tcHIge1xcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbn1cXG4uY29udGFpbmVyLS1wYiB7XFxuICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5jb250YWluZXItLXBiIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxuICB9XFxufVxcbi5jb250YWluZXItLXBsIHtcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbn1cXG5cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZmxleC1qYy1zYiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mbGV4LWpjLWMge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mbGV4LWFpLWMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnNlY3Rpb24tZmxleCB7XFxuICAgIG1hcmdpbi1yaWdodDogLTEuNWVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTEuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5jb2wtLTEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5jb2wtLTEge1xcbiAgICBwYWRkaW5nOiAwIDEuNWVtO1xcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcXG4gIH1cXG59XFxuXFxuLmNvbC0tMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLmNvbC0tMiB7XFxuICAgIHBhZGRpbmc6IDAgMS41ZW07XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NjY3JTtcXG4gIH1cXG59XFxuXFxuLmNvbC0tMyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLmNvbC0tMyB7XFxuICAgIHBhZGRpbmc6IDAgMS41ZW07XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxufVxcblxcbi5jb2wtLTQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5jb2wtLTQge1xcbiAgICBwYWRkaW5nOiAwIDEuNWVtO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XFxuICB9XFxufVxcblxcbi5jb2wtLTUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5jb2wtLTUge1xcbiAgICBwYWRkaW5nOiAwIDEuNWVtO1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjY2NyU7XFxuICB9XFxufVxcblxcbi5jb2wtLTYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5jb2wtLTYge1xcbiAgICBwYWRkaW5nOiAwIDEuNWVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG4uY29sLS03IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAuY29sLS03IHtcXG4gICAgcGFkZGluZzogMCAxLjVlbTtcXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xcbiAgfVxcbn1cXG5cXG4uY29sLS04IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAuY29sLS04IHtcXG4gICAgcGFkZGluZzogMCAxLjVlbTtcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY2NjclO1xcbiAgfVxcbn1cXG5cXG4uY29sLS05IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAuY29sLS05IHtcXG4gICAgcGFkZGluZzogMCAxLjVlbTtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG59XFxuXFxuLmNvbC0tMTAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5jb2wtLTEwIHtcXG4gICAgcGFkZGluZzogMCAxLjVlbTtcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzMzMlO1xcbiAgfVxcbn1cXG5cXG4uY29sLS0xMSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLmNvbC0tMTEge1xcbiAgICBwYWRkaW5nOiAwIDEuNWVtO1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XFxuICB9XFxufVxcblxcbi5jb2wtLTEyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAuY29sLS0xMiB7XFxuICAgIHBhZGRpbmc6IDAgMS41ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uaGlkZS1mb3ItbW9iaWxlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhpZGUtZm9yLW1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4uaGlkZS1mb3ItZGVza3RvcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhpZGUtZm9yLWRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXItd3JhcHBlci0tZml4IC5sb2dvX19pbm5lciAuaGlkZS1mb3ItZGVza3RvcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwid2dodFxcXCIgNDAwLCBcXFwid2R0aFxcXCIgMTAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIHtcXG4gICoge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcbn1cXG5cXG4udG5zLW91dGVyIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG59XFxuLnRucy1vdXRlciBbaGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi50bnMtb3V0ZXIgW2FyaWEtY29udHJvbHNdLCAudG5zLW91dGVyIFtkYXRhLWFjdGlvbl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG5zLXNsaWRlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xcbn1cXG4udG5zLXNsaWRlciA+IC50bnMtaXRlbSB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udG5zLWhvcml6b250YWwudG5zLXN1YnBpeGVsIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi50bnMtaG9yaXpvbnRhbC50bnMtc3VicGl4ZWwgPiAudG5zLWl0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxufVxcbi50bnMtaG9yaXpvbnRhbC50bnMtbm8tc3VicGl4ZWw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4udG5zLWhvcml6b250YWwudG5zLW5vLXN1YnBpeGVsID4gLnRucy1pdGVtIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4udG5zLWhvcml6b250YWwudG5zLWNhcm91c2VsLnRucy1uby1zdWJwaXhlbCA+IC50bnMtaXRlbSB7XFxuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xcbn1cXG5cXG4udG5zLW5vLWNhbGMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnRucy1nYWxsZXJ5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDA7XFxuICBtaW4taGVpZ2h0OiAxcHg7XFxufVxcbi50bnMtZ2FsbGVyeSA+IC50bnMtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzLCBvcGFjaXR5IDBzO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIG9wYWNpdHkgMHM7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIG9wYWNpdHkgMHM7XFxufVxcbi50bnMtZ2FsbGVyeSA+IC50bnMtc2xpZGUtYWN0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuLnRucy1nYWxsZXJ5ID4gLnRucy1tb3Zpbmcge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcXG59XFxuXFxuLnRucy1hdXRvd2lkdGgge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG5zLWxhenktaW1nIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnM7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnM7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcbi50bnMtbGF6eS1pbWcudG5zLWNvbXBsZXRlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50bnMtYWgge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMHM7XFxuICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwcztcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwcztcXG59XFxuXFxuLnRucy1vdmgge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRucy12aXN1YWxseS1oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTEwMDAwZW07XFxufVxcblxcbi50bnMtdHJhbnNwYXJlbnQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnRucy1mYWRlSW4ge1xcbiAgb3BhY2l0eTogMTtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLnRucy1ub3JtYWwsIC50bnMtZmFkZU91dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi50bnMtdnBmaXgge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnRucy12cGZpeCA+IGRpdiwgLnRucy12cGZpeCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRucy10LXN1YnAyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDMxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRucy10LWN0IHtcXG4gIHdpZHRoOiAyMzMzLjMzMzMzMzMzMzMlO1xcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlICogNzAgLyAzKTtcXG4gIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAqIDcwIC8gMyk7XFxuICB3aWR0aDogY2FsYygxMDAlICogNzAgLyAzKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4udG5zLXQtY3Q6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4udG5zLXQtY3QgPiBkaXYge1xcbiAgd2lkdGg6IDEuNDI4NTcxNDI4NiU7XFxuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLyA3MCk7XFxuICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLyA3MCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC8gNzApO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi4xMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDcwMCwgXFxcIndkdGhcXFwiIDEwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiB7XFxuICBoMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4zNzVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDcwMCwgXFxcIndkdGhcXFwiIDEwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiB7XFxuICBoMyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJpbWFyeV9fYnV0dG9uIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxuICBib3gtc2hhZG93OiAwIDhweCA4cHggLTEwcHggIzAwMDtcXG59XFxuLnByaW1hcnlfX2J1dHRvbiBhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC41ZW0gMi41ZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5wcmltYXJ5X19idXR0b24gYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5wcmltYXJ5X19idXR0b24tLXRyYW5zcGFyZW50IHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjdkO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IDBweCAjMDAwMDAwOGM7XFxufVxcblxcbi5oZWFkZXIub3BlbiAuaGVhZGVyX190b2dnbGUgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuLmhlYWRlci5vcGVuIC5oZWFkZXJfX3RvZ2dsZSA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5oZWFkZXIub3BlbiAuaGVhZGVyX190b2dnbGUgPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLmhlYWRlcl9fdG9nZ2xlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlcl9fdG9nZ2xlID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNnB4O1xcbiAgaGVpZ2h0OiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDNweCAxcHg7XFxufVxcbi5oZWFkZXJfX3RvZ2dsZSA+IHNwYW46bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmxvZ29fX2lubmVyIC5pY29uLS1sb2dvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDMlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcbn1cXG4ubG9nbyAuaWNvbi0tbG9nbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMi4xODc1ZW07XFxuICBoZWlnaHQ6IDIuMTg3NWVtO1xcbiAgbWluLXdpZHRoOiAyLjE4NzVlbTtcXG59XFxuLmxvZ28gLmljb24tLWxvZ28gc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDIuMTg3NWVtO1xcbiAgaGVpZ2h0OiAyLjE4NzVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAubG9nbyAuaWNvbi0tbG9nby1icmFuZCAjbG9nby1sb2dvLFxcbi5sb2dvIC5pY29uLS1sb2dvLWJyYW5kICNsb2dvLWJyYW5kIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTUuNjI1ZW07XFxuICAgIGhlaWdodDogMTUuNjI1ZW07XFxuICAgIG1pbi13aWR0aDogMTUuNjI1ZW07XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgfVxcbiAgLmxvZ28gLmljb24tLWxvZ28tYnJhbmQgI2xvZ28tbG9nbyBzdmcsXFxuLmxvZ28gLmljb24tLWxvZ28tYnJhbmQgI2xvZ28tYnJhbmQgc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogMTUuNjI1ZW07XFxuICAgIGhlaWdodDogMTUuNjI1ZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcbn1cXG5cXG4uYnJhbmQtYm94X19pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTUuNjI1ZW07XFxuICBoZWlnaHQ6IDE1LjYyNWVtO1xcbiAgbWluLXdpZHRoOiAxNS42MjVlbTtcXG59XFxuLmJyYW5kLWJveF9faW5uZXIgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDE1LjYyNWVtO1xcbiAgaGVpZ2h0OiAxNS42MjVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuYnJhbmQtYm94X19pbm5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIxLjg3NWVtO1xcbiAgICBoZWlnaHQ6IDIxLjg3NWVtO1xcbiAgICBtaW4td2lkdGg6IDIxLjg3NWVtO1xcbiAgfVxcbiAgLmJyYW5kLWJveF9faW5uZXIgc3ZnIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogMjEuODc1ZW07XFxuICAgIGhlaWdodDogMjEuODc1ZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgfVxcbn1cXG5cXG4ubmF2YmFyLWxpbmtzLFxcbi5nZW5kZXItbmF2X19saW5rIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjg3NWVtO1xcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwid2dodFxcXCIgNDAwLCBcXFwid2R0aFxcXCIgMTAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgNTBtcyBlYXNlLWluLW91dDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuQG1lZGlhIHNjcmVlbiB7XFxuICAubmF2YmFyLWxpbmtzLFxcbi5nZW5kZXItbmF2X19saW5rIGEge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcbn1cXG4ubmF2YmFyLWxpbmtzOmhvdmVyLCAubmF2YmFyLWxpbmtzOmFjdGl2ZSwgLm5hdmJhci1saW5rczpmb2N1cyxcXG4uZ2VuZGVyLW5hdl9fbGluayBhOmhvdmVyLFxcbi5nZW5kZXItbmF2X19saW5rIGE6YWN0aXZlLFxcbi5nZW5kZXItbmF2X19saW5rIGE6Zm9jdXMge1xcbiAgY29sb3I6ICM4MDgwODA7XFxufVxcbi5uYXZiYXItbGlua3M6aG92ZXI6OmJlZm9yZSwgLm5hdmJhci1saW5rczpob3Zlcjo6YWZ0ZXIsIC5uYXZiYXItbGlua3M6YWN0aXZlOjpiZWZvcmUsIC5uYXZiYXItbGlua3M6YWN0aXZlOjphZnRlciwgLm5hdmJhci1saW5rczpmb2N1czo6YmVmb3JlLCAubmF2YmFyLWxpbmtzOmZvY3VzOjphZnRlcixcXG4uZ2VuZGVyLW5hdl9fbGluayBhOmhvdmVyOjpiZWZvcmUsXFxuLmdlbmRlci1uYXZfX2xpbmsgYTpob3Zlcjo6YWZ0ZXIsXFxuLmdlbmRlci1uYXZfX2xpbmsgYTphY3RpdmU6OmJlZm9yZSxcXG4uZ2VuZGVyLW5hdl9fbGluayBhOmFjdGl2ZTo6YWZ0ZXIsXFxuLmdlbmRlci1uYXZfX2xpbmsgYTpmb2N1czo6YmVmb3JlLFxcbi5nZW5kZXItbmF2X19saW5rIGE6Zm9jdXM6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5uYXZiYXItbGlua3MsXFxuLmdlbmRlci1uYXZfX2xpbmsgYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJ3ZHRoXFxcIiAxMDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLm5hdmJhci1saW5rcyxcXG4uZ2VuZGVyLW5hdl9fbGluayBhIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG59XFxuLm5hdmJhci1saW5rczphZnRlcixcXG4uZ2VuZGVyLW5hdl9fbGluayBhOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGEwYTA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uZ2VuZGVyLW5hdl9fbGluayBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwid2dodFxcXCIgNDAwLCBcXFwid2R0aFxcXCIgMTAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIHtcXG4gIC5nZW5kZXItbmF2X19saW5rIGEge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcbn1cXG5cXG4uaWNvbi0tbGluayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMS4yNWVtO1xcbiAgaGVpZ2h0OiAxLjI1ZW07XFxuICBtaW4td2lkdGg6IDEuMjVlbTtcXG59XFxuLmljb24tLWxpbmsgc3ZnIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG4gIGhlaWdodDogMS4yNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5pY29uLS1saW5rIHN2Zzpob3ZlciwgLmljb24tLWxpbmsgc3ZnOmFjdGl2ZSwgLmljb24tLWxpbmsgc3ZnOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmljb24tLWxpbmsgc3ZnOmhvdmVyOjpiZWZvcmUsIC5pY29uLS1saW5rIHN2ZzphY3RpdmU6OmJlZm9yZSwgLmljb24tLWxpbmsgc3ZnOmZvY3VzOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmljb24tLWxpbmsgc3ZnIHtcXG4gICAgdG9wOiAzNSU7XFxuICB9XFxufVxcbi5pY29uLS1saW5rOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZXRhbWVudV9fbGlzdC0taXRlbSBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45Mzc1ZW07XFxuICBmb250LXdlaWdodDogaW5pdGlhbDtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJ3ZHRoXFxcIiAxMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBjb2xvciA1MG1zIGVhc2UtaW4tb3V0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIHtcXG4gIC5tZXRhbWVudV9fbGlzdC0taXRlbSBhIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG59XFxuLm1ldGFtZW51X19saXN0LS1pdGVtIGE6aG92ZXIsIC5tZXRhbWVudV9fbGlzdC0taXRlbSBhOmFjdGl2ZSwgLm1ldGFtZW51X19saXN0LS1pdGVtIGE6Zm9jdXMge1xcbiAgY29sb3I6ICNiZmJmYmY7XFxufVxcbi5tZXRhbWVudV9fbGlzdC0taXRlbSBhOmhvdmVyOjpiZWZvcmUsIC5tZXRhbWVudV9fbGlzdC0taXRlbSBhOmhvdmVyOjphZnRlciwgLm1ldGFtZW51X19saXN0LS1pdGVtIGE6YWN0aXZlOjpiZWZvcmUsIC5tZXRhbWVudV9fbGlzdC0taXRlbSBhOmFjdGl2ZTo6YWZ0ZXIsIC5tZXRhbWVudV9fbGlzdC0taXRlbSBhOmZvY3VzOjpiZWZvcmUsIC5tZXRhbWVudV9fbGlzdC0taXRlbSBhOmZvY3VzOjphZnRlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAubWV0YW1lbnVfX2xpc3QtLWl0ZW0gYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjkzNzVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDQwMCwgXFxcIndkdGhcXFwiIDEwMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAubWV0YW1lbnVfX2xpc3QtLWl0ZW0gYSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxufVxcbi5tZXRhbWVudV9fbGlzdC0taXRlbSBhOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uaGVyb19fdGVhc2VyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhlcm9fX3RlYXNlciAuc2VjdGlvbl9faW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMi41ZW0gMS41ZW0gMTBlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhlcm9fX3RlYXNlciAuc2VjdGlvbl9faW5uZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG4uaGVyb19fdGVhc2VyIC5wcmltYXJ5X19idXR0b24ge1xcbiAgbWluLXdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhlcm9fX3RlYXNlciAucHJpbWFyeV9fYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB9XFxufVxcblxcbi5oZXJvX190ZWFzZXItLWltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uY2FyZF9fdGVhc2VyLS1nbGFzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTIuNWVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgcGFkZGluZzogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxLjVlbTtcXG4gIGJveC1zaGFkb3c6IDAgMThweCA5NXB4IC00M3B4ICMwMDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2FyZF9fdGVhc2VyLS1nbGFzIC5jYXJkX19pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuY2FyZF9fdGVhc2VyLS1nbGFzIC5jYXJkX19pbm5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuY2FyZF9fdGVhc2VyLS1nbGFzIC5jYXJkX19pbm5lciBoMSwgLmNhcmRfX3RlYXNlci0tZ2xhcyAuY2FyZF9faW5uZXIgaDMge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmNhcmRfX3RlYXNlci0tZ2xhcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAyMS44NzVlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMi41ZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMS41ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjkzZW0pIHtcXG4gIC5jYXJkX190ZWFzZXItLWdsYXMge1xcbiAgICB3aWR0aDogMzEuMjVlbTtcXG4gICAgaGVpZ2h0OiAxOC43NWVtO1xcbiAgICBwYWRkaW5nOiAxLjVlbSAzZW07XFxuICB9XFxufVxcblxcbi5ob2xkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaG9sZGVyOmJlZm9yZSwgLmhvbGRlcjphZnRlciB7XFxuICBhbmltYXRpb246IG9yYml0IDVzIGxpbmVhciBpbmZpbml0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG4uaG9sZGVyOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGNvcmFsO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCByZ2JhKDIwNywgMTA5LCAxMDksIDAuODk3KSwgI2ZmYWE5Yyk7XFxufVxcbi5ob2xkZXI6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMi41cztcXG4gIGJhY2tncm91bmQ6ICNiMWIxYjE7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodG8gdG9wIGxlZnQsICM1YTVhNWEsICNiZWJlYmUpO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLm1haW4taGVhZGxpbmUge1xcbiAgbWFyZ2luOiAzZW0gMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4taGVhZGxpbmU6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDEwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvdHRvbTogLTIwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuLmdsYXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbiAgYm94LXNoYWRvdzogMCAxOHB4IDk1cHggLTQzcHggIzAwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbn1cXG5cXG4ucHJvZHVjdC13YXJlbmtvcmItbGluayBzdmcge1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1JSwgMTklKTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLnByb2R1Y3QtYXJ0aWNsZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9kdWN0c19fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5wcm9kdWN0c19fbGlzdCB7XFxuICAgIG1hcmdpbi1yaWdodDogLTEuNWVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTEuNWVtO1xcbiAgfVxcbn1cXG4ucHJvZHVjdHNfX2xpc3QtLWl0ZW0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJS8xKTtcXG4gIG1hcmdpbi1ib3R0b206IDUuNWVtO1xcbiAgcGFkZGluZzogMCAxLjVlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG4gIG1hcmdpbi10b3A6IDVlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnByb2R1Y3RzX19saXN0LS1pdGVtIHtcXG4gICAgbWF4LXdpZHRoOiAzMGVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAucHJvZHVjdHNfX2xpc3QtLWl0ZW0ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlLzIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo5M2VtKSB7XFxuICAucHJvZHVjdHNfX2xpc3QtLWl0ZW0ge1xcbiAgICB3aWR0aDogY2FsYygxMDAlLzMpO1xcbiAgfVxcbn1cXG5cXG4ucHJvZHVjdC1jYXJkIHtcXG4gIHBhZGRpbmc6IDFlbSAxZW0gMWVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAucHJvZHVjdC1jYXJkIHtcXG4gICAgcGFkZGluZzogMi41ZW0gM2VtIDJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLnByb2R1Y3QtY2FyZCB7XFxuICAgIHBhZGRpbmc6IDIuNWVtIDJlbSAyZW07XFxuICB9XFxufVxcblxcbi5wcm9kdWN0LWNhcmRfX2lubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4ucHJvZHVjdC1jYXJkX19pbm5lciBoNCwgLnByb2R1Y3QtY2FyZF9faW5uZXIgcCB7XFxuICBtYXJnaW46IDAuMmVtIDA7XFxufVxcbi5wcm9kdWN0LWNhcmRfX2lubmVyIGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDcwMCwgXFxcIndkdGhcXFwiIDEwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiB7XFxuICAucHJvZHVjdC1jYXJkX19pbm5lciBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5wcm9kdWN0LWNhcmRfX2lubmVyIGg0IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNjI1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJ3Z2h0XFxcIiA3MDAsIFxcXCJ3ZHRoXFxcIiAxMDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnByb2R1Y3QtY2FyZF9faW5uZXIgaDQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcbn1cXG4ucHJvZHVjdC1jYXJkX19pbm5lciAucHJpY2V0YWcge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG59XFxuXFxuLnByb2R1Y3QtYXJ0aWNsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9kdWN0LWFydGljbGU6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB0b3A6IC0zNnB4O1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDE0ZW07XFxuICB3aWR0aDogNmVtO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOjE5LjMxMjVlbSkge1xcbiAgLnByb2R1Y3QtYXJ0aWNsZTo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDoyMy43NWVtKSB7XFxuICAucHJvZHVjdC1hcnRpY2xlOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnByb2R1Y3QtYXJ0aWNsZTo6YWZ0ZXIge1xcbiAgICB0b3A6IC00MnB4O1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxOGVtO1xcbiAgICB3aWR0aDogOGVtO1xcbiAgfVxcbn1cXG5cXG4ucHJvZHVjdC13YXJlbmtvcmItbGluayB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuNjI1ZW07XFxuICBmb250LXdlaWdodDogaW5pdGlhbDtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJ3ZHRoXFxcIiAxMDA7XFxufVxcbkBtZWRpYSBzY3JlZW4ge1xcbiAgLnByb2R1Y3Qtd2FyZW5rb3JiLWxpbmsge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAucHJvZHVjdC13YXJlbmtvcmItbGluayB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjkzNzVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDQwMCwgXFxcIndkdGhcXFwiIDEwMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAucHJvZHVjdC13YXJlbmtvcmItbGluayB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxufVxcblxcbi5zcGVyYXRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDEuNWVtIDA7XFxufVxcblxcbi5wcm9kdWN0LWRldGFpbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wcm9kdWN0LWRldGFpbCAucHJpbWFyeV9fYnV0dG9uIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2R1Y3QtZGV0YWlsIC5zZWN0aW9uX19pbm5lciB7XFxuICBtYXJnaW46IDEuNWVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo0NWVtKSB7XFxuICAucHJvZHVjdC1kZXRhaWwgLnNlY3Rpb25fX2lubmVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxufVxcbi5wcm9kdWN0LWRldGFpbCAucHJvZHVjdCB7XFxuICBtYXgtd2lkdGg6IDI1ZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnByb2R1Y3QtZGV0YWlsIC5wcm9kdWN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnByb2R1Y3QtZGV0YWlsIC5wcm9kdWN0LWNhcmQge1xcbiAgICBwYWRkaW5nOiAyLjVlbSAyZW0gMmVtO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmltZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgd2lkdGg6IDllbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm15LXNsaWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zbGlkZXItaXRlbSB7XFxuICBwYWRkaW5nOiAxLjVyZW0gMC43NXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNsaWRlci1pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRyb2xzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLmNvbnRyb2xzOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5jb250cm9scyBsaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXh0LCAucHJldiB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcXG4gIG1hcmdpbjogMCAyZW07XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcbi5uZXh0IDphY3RpdmUsIC5wcmV2IDphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi50bnMtbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG9wcGluZ1N1bSAuc2hvcHBpbmdTdW1fX3dyYXBwZXIge1xcbiAgbWFyZ2luOiA1ZW0gMDtcXG59XFxuLnNob3BwaW5nU3VtIC5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaG9wcGluZy1jYXJ0IC5wcm9kdWN0LXRpdGxlIGgzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uc2hvcHBpbmctY2FydCAuY29sdW1uLWxhYmVsIGxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5wcm9kdWN0LWltYWdlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnNob3BwaW5nLWNhcnQgLnByb2R1Y3QtaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiA1ZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLnNob3BwaW5nLWNhcnQgLnByb2R1Y3QtaW1hZ2UgaW1nIHtcXG4gICAgd2lkdGg6IDdlbTtcXG4gIH1cXG59XFxuLnNob3BwaW5nLWNhcnQgLnByb2R1Y3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA0ZW0gMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5wcm9kdWN0LXJlbW92YWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5pbWFnZS1kZXRhaWxfX3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnNob3BwaW5nLWNhcnQgLmltYWdlLWRldGFpbF9fd3JhcHBlciAucHJvZHVjdC1kZXRhaWxzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5xdWFudGl0eS1wcmljZV9fd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG4uc2hvcHBpbmctY2FydCAucXVhbnRpdHktcHJpY2VfX3dyYXBwZXIgLnByb2R1Y3QtcXVhbnRpdHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uc2hvcHBpbmctY2FydCAucXVhbnRpdHktcHJpY2VfX3dyYXBwZXIgLnByb2R1Y3QtcXVhbnRpdHkgaW5wdXQge1xcbiAgd2lkdGg6IDIwJTtcXG59XFxuLnNob3BwaW5nLWNhcnQgLnRvdGFsX193cmFwcGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuLnNob3BwaW5nLWNhcnQgLmNvdXBvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5zaG9wcGluZy1jYXJ0IC5jb3Vwb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB9XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5jb3Vwb25fX2lubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5jb3Vwb25fX2lubmVyIC5sYWJlbC1jb3Vwb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5jb3Vwb25fX2lubmVyIC5pbnB1dC10ZXh0IHtcXG4gIHdpZHRoOiA0NSU7XFxufVxcbi5zaG9wcGluZy1jYXJ0IC5jb3Vwb25fX2lubmVyIC5wcmltYXJ5X19idXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NDVlbSkge1xcbiAgLnNob3BwaW5nLWNhcnQgLnRvdGFsIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB9XFxufVxcbi5zaG9wcGluZy1jYXJ0IC50b3RhbCAudG90YWxzLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmRlbGl2ZXJ5X193cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcXG59XFxuLmRlbGl2ZXJ5X193cmFwcGVyIC5kZWxpdmVyeS1jdXN0b21lcmluZm9ybWF0aW9ucyB7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjQ1ZW0pIHtcXG4gIC5kZWxpdmVyeV9fd3JhcHBlciAuZGVsaXZlcnktY3VzdG9tZXJpbmZvcm1hdGlvbnMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgfVxcbn1cXG4uZGVsaXZlcnlfX3dyYXBwZXIgaDQge1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbn1cXG4uZGVsaXZlcnlfX3dyYXBwZXIgLmRlbGl2ZXJfX2lubmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLmRlbGl2ZXJ5X193cmFwcGVyIC5kZWxpdmVyX19pbm5lciBoMyB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uZGVsaXZlcnlfX3dyYXBwZXIgLmxhYmVsX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcbi5kZWxpdmVyeV9fd3JhcHBlciAuaW1hZ2UtZGV0YWlsX193cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kZWxpdmVyeV9fd3JhcHBlciAucHJvZHVjdC1saW5lLXByaWNlIHtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uZGVsaXZlcnlfX3dyYXBwZXIgLmltYWdlLWRldGFpbF9fd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XFxufVxcblxcbi5kZWxpdmVyeS1jdXN0b21lcmluZm9ybWF0aW9ucyBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbSAhaW1wb3J0YW50O1xcbn1cXG4uZGVsaXZlcnktY3VzdG9tZXJpbmZvcm1hdGlvbnMgZmllbGRzZXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uZGVsaXZlcnktY3VzdG9tZXJpbmZvcm1hdGlvbnMgZmllbGRzZXQgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5kZWxpdmVyeS1jdXN0b21lcmluZm9ybWF0aW9ucyAucm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuLmRlbGl2ZXJ5LWN1c3RvbWVyaW5mb3JtYXRpb25zIGlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI1MjUyNTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbi5wcm9kdWN0LWRlc2NyaXB0aW9uc19fd3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiA3ZW07XFxuICBtYXJnaW4tYm90dG9tOiA4ZW07XFxufVxcblxcbi50YWJzX19jb250YWluZXIge1xcbiAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cXG4gIC8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cXG4gIC8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCB0YWJsaW5rIGNsYXNzICovXFxuICAvKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cXG59XFxuLnRhYnNfX2NvbnRhaW5lciAudGFiTGlua3Mge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjMxMjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDQwMCwgXFxcIndkdGhcXFwiIDEwMDtcXG59XFxuQG1lZGlhIHNjcmVlbiB7XFxuICAudGFic19fY29udGFpbmVyIC50YWJMaW5rcyB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxufVxcbi50YWJzX19jb250YWluZXIgaDQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDBlbTtcXG59XFxuLnRhYnNfX2NvbnRhaW5lciAudGFiIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuLnRhYnNfX2NvbnRhaW5lciAudGFiIDpudGgtY2hpbGQoMSkge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi50YWJzX19jb250YWluZXIgLnRhYiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi50YWJzX19jb250YWluZXIgLnRhYiBidXR0b24ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMCAxZW07XFxuICBwYWRkaW5nOiAwIDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4wNjI1ZW07XFxuICBmb250LXdlaWdodDogaW5pdGlhbDtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJ3ZHRoXFxcIiAxMDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuMmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuMmVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIHtcXG4gIC50YWJzX19jb250YWluZXIgLnRhYiBidXR0b24ge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcbn1cXG4udGFic19fY29udGFpbmVyIC50YWIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4udGFic19fY29udGFpbmVyIC50YWIgYnV0dG9uOmhvdmVyOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMCU7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLnRhYnNfX2NvbnRhaW5lciAudGFiIGJ1dHRvbjpmb2N1czo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGhlaWdodDogNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDAlO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi50YWJzX19jb250YWluZXIgLnRhYiBidXR0b24uYWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi50YWJzX19jb250YWluZXIgLnRhYiBidXR0b24uYWN0aXZlOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMCU7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuLnRhYnNfX2NvbnRhaW5lciAudGFiQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxufVxcbi50YWJzX19jb250YWluZXIgLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiA4ZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMThlbTtcXG4gIH1cXG59XFxuLmhlYWRlciAuaGVhZGVyX193cmFwcGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAtMTFweCAzMHB4IDBweCBibGFjaztcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDUwMG1zO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBibG9jaztcXG4gIH1cXG59XFxuLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLmhlYWRlcl9fd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXIgLmhlYWRlci13cmFwcGVyIC5oZWFkZXJfX3dyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAyLjVlbSAyLjVlbSAxMGVtO1xcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuMnMgZWFzZTtcXG4gIH1cXG59XFxuLmhlYWRlciAub3ZlcmxheSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA4ZW07XFxuICByaWdodDogMHB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxuICBvcGFjaXR5OiAwLjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcbkBzdXBwb3J0cyAoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pKSB7XFxuICAuaGVhZGVyIC5vdmVybGF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJlbSk7XFxuICB9XFxufVxcbi5oZWFkZXIgLmhlYWRlcl9fbGlua3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwZW07XFxufVxcbi5oZWFkZXIgLmhlYWRlcl9fbGlua3MgLm1haW4tbmF2X19saW5rIHtcXG4gIG1hcmdpbjogMmVtIDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXIgLmhlYWRlcl9fbGlua3MgLm1haW4tbmF2X19saW5rIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XFxuICB9XFxufVxcbi5oZWFkZXIgLmhlYWRlcl9fbGlua3MgOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMS41ZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXIgLmhlYWRlcl9fbGlua3MgOmxhc3QtY2hpbGQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXIgLmhlYWRlcl9fbGlua3MgLnNob3BwaW5nY2FyZC0tbGluayB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXIgLmhlYWRlcl9fbGlua3MgLm1haW4tbmF2X19saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhlYWRlciAuaGVhZGVyX19saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcbn1cXG4uaGVhZGVyIC5tYWluLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuaGVhZGVyIC5tYWluLW5hdiAuaGFzLWZhZGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuaGVhZGVyIC5tYWluLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB9XFxufVxcblxcbi5nZW5kZXItbmF2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4uZ2VuZGVyLW5hdl9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXItd3JhcHBlci0tZml4IC5oZWFkZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRlbTtcXG4gIH1cXG4gIC5oZWFkZXItd3JhcHBlci0tZml4IC5oZWFkZXItd3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkgYW5kIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhlYWRlci13cmFwcGVyLS1maXggLmhlYWRlci13cmFwcGVyIC5oZWFkZXJfX3dyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAxLjVlbSAyLjVlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhlYWRlci13cmFwcGVyLS1maXggLmxvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuaGVhZGVyLXdyYXBwZXItLWZpeCAjbG9nby1sb2dvIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAxMDBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XFxuICAuaGVhZGVyLXdyYXBwZXItLWZpeCAjbG9nby1icmFuZCB7XFxuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQgMTAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6NjEuMjVlbSkge1xcbiAgLmhlYWRlci13cmFwcGVyLS1maXggLmljb24tLWxvZ28tYnJhbmQge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcXG4gIC5oZWFkZXItd3JhcHBlci0tZml4IC5tYWluLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kOiAjMTcxNzE3O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwLjYyNWVtO1xcbn1cXG4uZm9vdGVyIC5tZXRhbWVudV9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mb290ZXIgLm1ldGFtZW51X19saXN0LS1pdGVtIHtcXG4gIG1pbi13aWR0aDogMzMuMzMzJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvb3RlciAuYnJhbmQtYm94IHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyIC5tZXRhbWVudV9fc29jaWFsbWVkaWEsXFxuLmZvb3RlciAubWV0YW1lbnVfX2luZm9ybWF0aW9uIHtcXG4gIGhlaWdodDogMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9oZWxwZXJzL2dsb2JhbHMvX2FuaW1hdGlvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9oZWxwZXJzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvaGVscGVycy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9oZWxwZXJzL2dsb2JhbHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL2hlbHBlcnMvZ3JpZC9fc3BhY2luZ3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9oZWxwZXJzL2dyaWQvX3NlY3Rpb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvaGVscGVycy9ncmlkL19icmVha3BvaW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL2hlbHBlcnMvZ3JpZC9fZ3V0dGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvaGVscGVycy9ncmlkL19jb2xzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvaGVscGVycy9fYWxsSGVscGVycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL2hlbHBlcnMvdHlwb2dyYXBoeS9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvaGVscGVycy90eXBvZ3JhcGh5L19mb250RmFtaWx5LnNjc3NcIixcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9hdG9tcy9oZWFkbGluZXMvX2hlYWRsaW5lcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL2F0b21zL2J1dHRvbnMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9hdG9tcy9idXR0b25zL19idXJnZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9hdG9tcy9saW5rcy9fbG9nb2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL2hlbHBlcnMvZ2xvYmFscy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvYXRvbXMvbGlua3MvX2xpbmsuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9tb2xlY3VsZXMvX2NhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1jYXJkL19wcm9kdWN0LWNhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1kZXRhaWwvX3Byb2R1Y3QtZGV0YWlsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Nob3BwaW5nU3Vtcy9fc2hvcHBpbmdTdW1zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtZGV0YWlsL190YWJzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvb3JnYW5pc21zL0hlYWRlci9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvb3JnYW5pc21zL0Zvb3Rlci9fZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBQTtBQ0VKOztBRENFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFVBQUE7RUNFSjtFREFFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDRUo7RURBRTtJQUNFLG1C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QkFBQTtFQUNBLG1CQUFBO0F6Qnl5RFI7QXlCdHlESTs7RUFFSSxXQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QXpCdXlEUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGFzLWZhZGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgZmFkZS1pbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDElIHtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLmZhZGUtaW4ge1xcclxcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMjAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgZmFkZS1vdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgOTklIHtcXHJcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuZmFkZS1vdXQge1xcclxcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDIwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8vIEJhY2tncm91bmQgYW5pbWF0aW9uc1xcclxcblxcclxcbi5vdmVybGF5LWFyZWEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDIwJSwgI2JhMzgyZiwgIzg5NDJhOCk7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogY29sb3I7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcbi5hbmltYXRpb24tYXJlYSB7XFxyXFxuXFx0Ly9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzg5NDJhOCwgI2JhMzgyZik7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uYm94LWFyZWEge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmJveC1hcmVhIGxpIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRoZWlnaHQ6IDI1cHg7XFxyXFxuXFx0YmFja2dyb3VuZDogI2JhMzgyZjtcXHJcXG5cXHRhbmltYXRpb246IGFuaW1hdGUgMjBzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG5cXHRib3R0b206IC0xNTBweDtcXHJcXG59XFxyXFxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCgxKSB7XFxyXFxuXFx0bGVmdDogODYlO1xcclxcblxcdHdpZHRoOiA4MHB4O1xcclxcblxcdGhlaWdodDogODBweDtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IDBzO1xcclxcbn1cXHJcXG4uYm94LWFyZWEgbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHRsZWZ0OiAxMiU7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogMS41cztcXHJcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IDEwcztcXHJcXG59XFxyXFxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuXFx0bGVmdDogNzAlO1xcclxcblxcdHdpZHRoOiAxMDBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogNS41cztcXHJcXG59XFxyXFxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuXFx0bGVmdDogNDIlO1xcclxcblxcdHdpZHRoOiAxNTBweDtcXHJcXG5cXHRoZWlnaHQ6IDE1MHB4O1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogMHM7XFxyXFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XFxyXFxufVxcclxcbi5ib3gtYXJlYSBsaTpudGgtY2hpbGQoNSkge1xcclxcblxcdGxlZnQ6IDY1JTtcXHJcXG5cXHR3aWR0aDogNDBweDtcXHJcXG5cXHRoZWlnaHQ6IDQwcHg7XFxyXFxuXFx0YW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG59XFxyXFxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCg2KSB7XFxyXFxuXFx0bGVmdDogMTUlO1xcclxcblxcdHdpZHRoOiAxMTBweDtcXHJcXG5cXHRoZWlnaHQ6IDExMHB4O1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogMy41cztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXHJcXG5cXHQwJSB7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTAwcHgpIHJvdGF0ZSgzNjBkZWcpO1xcclxcblxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0fVxcclxcblxcdDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xcclxcblxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vL0hvdmVyLCBBY3RpdmUsIEZvY3VzIGZvciBidXR0b25zIGFuZCBjYXJkc1xcclxcblxcclxcbi5hbmltU3RhdGUge1xcclxcbiAgICBcXHJcXG4gICAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gMnMgZWFzZS1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG5cXHJcXG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS40KSBzY2FsZVkoMS42KTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XCIsXCIvLyBUaGlzIGlzIGFuIGVtcHR5IHNjc3MgZmlsZSBmb3IgeW91ciBjdXN0b20gc3R5bGVzIC0gUGxlYXNlIGFkZCB5b3VyIHN1cGVyIGR1cGVyIGF3ZXNvbWUgbWVnYSBkZXNpZ24gc3R5bGVzIGhlcmVcXHJcXG5cXHJcXG4vL2hlbHBlcnNcXHJcXG5AaW1wb3J0IFxcXCJjb21wb25lbnRzL2hlbHBlcnMvYWxsSGVscGVyc1xcXCI7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoMTYsIHJlZ3VsYXIpOyAgXFxyXFxufVxcclxcblxcclxcbkBpbXBvcnQgXFxcIm5vZGVfbW9kdWxlcy90aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXJcXFwiO1xcclxcblxcclxcbi8vYXRvbXNcXHJcXG5AaW1wb3J0IFxcXCJjb21wb25lbnRzL2F0b21zL2hlYWRsaW5lcy9oZWFkbGluZXNcXFwiOyBcXHJcXG5AaW1wb3J0IFxcXCJjb21wb25lbnRzL2F0b21zL2J1dHRvbnMvYnV0dG9uc1xcXCI7IFxcclxcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvYXRvbXMvbGlua3MvbG9nb2hlYWRlclxcXCI7IFxcclxcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvYXRvbXMvbGlua3MvbGlua1xcXCI7IFxcclxcblxcclxcbi8vbW9sZWN1bGVzXFxyXFxuQGltcG9ydCBcXFwiY29tcG9uZW50cy9tb2xlY3VsZXMvY2FyZFxcXCI7IFxcclxcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmRcXFwiOyBcXHJcXG5AaW1wb3J0IFxcXCJjb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbFxcXCI7IFxcclxcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvbW9sZWN1bGVzL3Nob3BwaW5nU3Vtcy9zaG9wcGluZ1N1bXNcXFwiOyBcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJjb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWRldGFpbC90YWJzXFxcIjsgXFxyXFxuXFxyXFxuLy9vcmdhbmlzbXNcXHJcXG5AaW1wb3J0IFxcXCJjb21wb25lbnRzL29yZ2FuaXNtcy9IZWFkZXIvaGVhZGVyXFxcIjsgXFxyXFxuQGltcG9ydCBcXFwiY29tcG9uZW50cy9vcmdhbmlzbXMvRm9vdGVyL2Zvb3RlclxcXCI7IFxcclxcblxcclxcblwiLFwiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxyXFxuXFxyXFxuICAgICYubm9zY3JvbGwge1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG51bCwgb2wge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogJGJyYW5kLWhlaWdodDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xcclxcbntcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhclxcclxcbntcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxcclxcbntcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxOTIsIDE5Mik7XFxyXFxufVxcclxcblxcclxcblwiLFwiJHdoaXRlOiAjZmZmO1xcclxcbiRibGFjazogIzAwMDtcXHJcXG5cXHJcXG4kcHJpbWFyeV9fY29sb3I6IGdyYXk7XFxyXFxuJHByaW1hcnlfX2NvbG9yLS1kYXJrZW46IGdyYXk7XFxyXFxuJHByaW1hcnlfX2NvbG9yLS1zdHJvbmctZGFya2VuOiBncmF5O1xcclxcblxcclxcbi8vcGFyZsO8bSBmYXJiZW5cXHJcXG5cIixcIiRiYXNlLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcXHJcXG4kYnJhbmQtaGVpZ2h0OiA0LjVlbTtcIixcIiRzcGFjaW5nLXhzOiBidSgpOyAvLyA9PT0gMTJweFxcclxcbiRzcGFjaW5nLXM6IGJ1KDIpOyAvLyA9PT0gMjRweFxcclxcbiRzcGFjaW5nLW06IGJ1KDQpOyAvLyA9PT0gNDhweFxcclxcbiRzcGFjaW5nLWw6IGJ1KDYpOyAvLyA9PT0gNzJweFxcclxcblxcclxcbiRzcGFjaW5nLXdyYXBwZXItLW06ICRzcGFjaW5nLW07XFxyXFxuJHNwYWNpbmctd3JhcHBlci0tbDogJHNwYWNpbmctbSAqIDEuNTtcXHJcXG5cXHJcXG4ubm8tc3BhY2luZyB7XFxyXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcclxcbn1cIixcIi5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiBcXHJcXG4gICZfX2lubmVyIHtcXHJcXG4gICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgbWFyZ2luOiAwO1xcclxcbiAgIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAgQGluY2x1ZGUgbWVkaWEodGFibGV0KSB7IFxcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDQwZW07XFxyXFxuICAgfVxcclxcbiBcXHJcXG4gICBAaW5jbHVkZSBtZWRpYShsYXB0b3ApIHtcXHJcXG4gICAgd2lkdGg6IDU4ZW07XFxyXFxuICAgfVxcclxcblxcclxcbiAgIEBpbmNsdWRlIG1lZGlhKGRlc2t0b3ApIHtcXHJcXG4gICAgd2lkdGg6ICRzY3JlZW4tbC1jb250ZW50O1xcclxcbiAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLy8gU3BhY2luZ1xcclxcbi5jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDY5LjM3NXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBcXHJcXG4gICAgJi0tcGFsbCB7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDQuMzc1cmVtO1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICBcXHJcXG4gICAgICBAaW5jbHVkZSBtZWRpYShsYXB0b3Ape1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDZyZW07XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi0tcHkge1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiA0LjM3NXJlbTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XFxyXFxuICAgICAgXFxyXFxuICAgICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKXtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cmVtO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYtLXB4IHtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJi0tcHQge1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiA0LjM3NXJlbTtcXHJcXG4gICAgICBcXHJcXG4gICAgICBAaW5jbHVkZSBtZWRpYShsYXB0b3Ape1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDZyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYtLXByIHtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJi0tcGIge1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0LjM3NXJlbTtcXHJcXG4gICAgICBcXHJcXG4gICAgICBAaW5jbHVkZSBtZWRpYShsYXB0b3Ape1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYtLXBsIHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvLyBGbGV4Ym94XFxyXFxuICAuZmxleCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBcXHJcXG4gICAgJi1qYy1zYiB7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAmLWpjLWMge1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAmLWFpLWMge1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcblwiLFwiLy8gbWVkaWEgYnJlYWtwb2ludHM6IG1pbi13aWR0aFxcclxcbiRzY3JlZW4teHhzOiBlbSgzMDkpO1xcclxcbiRzY3JlZW4teHM6IGVtKDM4MCk7XFxyXFxuJHNjcmVlbi1zOiBlbSg3MjApO1xcclxcbiRzY3JlZW4tbTogZW0oOTgwKTtcXHJcXG4kc2NyZWVuLWw6IGVtKDE0NDApO1xcclxcblxcclxcbiRzY3JlZW4tbC1jb250ZW50OiAkc2NyZWVuLWw7XFxyXFxuXFxyXFxuLy9tZWRpYSBxdWVyeTogbWluLXdpZHRoXFxyXFxuJG1pbi1waG9uZTogXFxcIihtYXgtd2lkdGg6XFxcIiArICRzY3JlZW4teHhzICsgXFxcIilcXFwiO1xcclxcbiRwaG9uZTogXFxcIihtaW4td2lkdGg6XFxcIiArICRzY3JlZW4teHMgKyBcXFwiKVxcXCI7XFxyXFxuJHRhYmxldDogXFxcIihtaW4td2lkdGg6XFxcIiArICRzY3JlZW4tcyArIFxcXCIpXFxcIjtcXHJcXG4kbGFwdG9wOiBcXFwiKG1pbi13aWR0aDpcXFwiICsgJHNjcmVlbi1tICsgXFxcIilcXFwiO1xcclxcbiRkZXNrdG9wOiBcXFwiKG1pbi13aWR0aDpcXFwiICsgKCRzY3JlZW4tbCArIGVtKDQ4KSkgKyBcXFwiKVxcXCI7XFxyXFxuXFxyXFxuLy8gbWl4aW4gYnJlYWtwb2ludHNcXHJcXG5cXHJcXG5AbWl4aW4gbWVkaWEgKCRtZWRpYSkge1xcclxcbiAgICBAaWYgJG1lZGlhID09IHBob25lIHtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgQG1lZGlhICN7JHBob25lfSB7XFxyXFxuICAgICAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGVsc2UgaWYgJG1lZGlhID09IG1pbi1waG9uZSB7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIEBtZWRpYSAjeyRtaW4tcGhvbmV9IHtcXHJcXG4gICAgICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0IHtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgQG1lZGlhICN7JHRhYmxldH0ge1xcclxcbiAgICAgICAgICAgIEBjb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgQG1lZGlhICN7JGxhcHRvcH0ge1xcclxcbiAgICAgICAgICAgIEBjb250ZW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgI3skZGVza3RvcH0ge1xcclxcbiAgICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIixcIi8vIGRlZmF1bHQgZ3JpZCB3aXRoIGd1dHRlclxcclxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcbiRndXR0ZXItd2lkdGg6IGJ1KC41KTtcXHJcXG5cXHJcXG4uc2VjdGlvbi1mbGV4IHtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhKHRhYmxldCkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0kZ3V0dGVyLXdpZHRoO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLSRndXR0ZXItd2lkdGg7ICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AZWFjaCAkY29sLCAkdmFsdWUgaW4gJGNvbHMge1xcclxcblxcclxcbiAgLmNvbC0tI3skY29sfSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEodGFibGV0KSB7XFxyXFxuICAgICAgcGFkZGluZzogMCAkZ3V0dGVyLXdpZHRoO1xcclxcbiAgICAgIHdpZHRoOiAkdmFsdWU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlICdzYXNzOm1hdGgnO1xcclxcblxcclxcbiRjb2xzOiAoXFxyXFxuICAgIFxcXCIxXFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDEsXFxyXFxuICAgIFxcXCIyXFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDIsXFxyXFxuICAgIFxcXCIzXFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDMsXFxyXFxuICAgIFxcXCI0XFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDQsXFxyXFxuICAgIFxcXCI1XFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDUsXFxyXFxuICAgIFxcXCI2XFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDYsXFxyXFxuICAgIFxcXCI3XFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDcsXFxyXFxuICAgIFxcXCI4XFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDgsXFxyXFxuICAgIFxcXCI5XFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDksXFxyXFxuICAgIFxcXCIxMFxcXCI6ICBtYXRoLmRpdigxMDAlLCAxMikgKiAxMCxcXHJcXG4gICAgXFxcIjExXFxcIjogIG1hdGguZGl2KDEwMCUsIDEyKSAqIDExLFxcclxcbiAgICBcXFwiMTJcXFwiOiAgbWF0aC5kaXYoMTAwJSwgMTIpICogMTJcXHJcXG4pXCIsXCJAaW1wb3J0IFxcXCJnbG9iYWxzL2dsb2JhbHNcXFwiO1xcclxcbkBpbXBvcnQgXFxcImdyaWQvZ3JpZFxcXCI7XFxyXFxuQGltcG9ydCBcXFwidHlwb2dyYXBoeS90eXBvZ3JhcGh5XFxcIjtcXHJcXG5cXHJcXG4uaGlkZS1mb3ItbW9iaWxlIHtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS1mb3ItZGVza3RvcCB7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXdyYXBwZXItLWZpeCB7XFxyXFxuICAgIC5sb2dvX19pbm5lciB7XFxyXFxuICAgICAgICAuaGlkZS1mb3ItZGVza3RvcCB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKSB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIi8vIGRlZmF1bHQgdHlwbyBtaXhpbnNcXHJcXG5cXHJcXG5AbWl4aW4gdHlwb2dyYXBoeSgkZm9udC1zaXplLCAkZm9udC12YXJpYXRpb24sICRmb250LXN0eWxlOiBub25lKSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuICAgIGZvbnQtc2l6ZTogZW0oJGZvbnQtc2l6ZSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcclxcbiAgICBkaXJlY3Rpb246IGx0cjtcXHJcXG5cXHJcXG4gICAgICAgIEBpZiAkZm9udC12YXJpYXRpb24gPT0gdGhpbiB7XFxyXFxuICAgICAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJ3Z2h0XFxcIiAyNTAsIFxcXCJ3ZHRoXFxcIiAxMDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgQGVsc2UgaWYgJGZvbnQtdmFyaWF0aW9uID09IHJlZ3VsYXIge1xcclxcbiAgICAgICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwid2dodFxcXCIgNDAwLCBcXFwid2R0aFxcXCIgMTAwO1xcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4ge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIEBlbHNlIGlmICRmb250LXZhcmlhdGlvbiA9PSBib2xkIHtcXHJcXG4gICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDcwMCwgXFxcIndkdGhcXFwiIDEwMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBAZWxzZSBpZiAkZm9udC12YXJpYXRpb24gPT0gZXh0cmFCb2xkIHtcXHJcXG4gICAgICAgICAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIndnaHRcXFwiIDgwMCwgXFxcIndkdGhcXFwiIDEwMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxufVwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcblwiLFwiLy8gVmVyc2lvbjogMi45LjNcXG5cXG4udG5zLW91dGVyIHtcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgLy8gcmVtb3ZlIHBhZGRpbmc6IGNsaWVudFdpZHRoID0gd2lkdGggKyBwYWRkaW5nICgwKSA9IHdpZHRoXFxuICBbaGlkZGVuXSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgW2FyaWEtY29udHJvbHNdLCBbZGF0YS1hY3Rpb25dIHsgY3Vyc29yOiBwb2ludGVyOyB9XFxufVxcbi50bnMtc2xpZGVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDBzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMHM7XFxuICA+IC50bnMtaXRlbSB7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbn1cXG5cXG4udG5zLWhvcml6b250YWwge1xcbiAgJi50bnMtc3VicGl4ZWwge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICA+IC50bnMtaXRlbSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgfVxcbiAgfVxcbiAgJi50bnMtbm8tc3VicGl4ZWwge1xcbiAgICAmOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgICBjbGVhcjogYm90aDtcXG4gICAgfVxcbiAgICA+IC50bnMtaXRlbSB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgIH1cXG4gIH1cXG4gICYudG5zLWNhcm91c2VsIHtcXG4gICAgJi50bnMtbm8tc3VicGl4ZWwge1xcbiAgICAgID4gLnRucy1pdGVtIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcbi50bnMtbm8tY2FsYyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAwO1xcbn1cXG4udG5zLWdhbGxlcnkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMDtcXG4gIG1pbi1oZWlnaHQ6IDFweDsgLy8gbWFrZSBzdXJlIHNsaWRlciBjb250YWluZXIgaXMgdmlzaWJsZVxcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcXG4gID4gLnRucy1pdGVtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIG9wYWNpdHkgMHM7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzLCBvcGFjaXR5IDBzO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIG9wYWNpdHkgMHM7XFxuICB9XFxuICA+IC50bnMtc2xpZGUtYWN0aXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB9XFxuICA+IC50bnMtbW92aW5nIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxuICB9XFxufVxcbi50bnMtYXV0b3dpZHRoIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuLnRucy1sYXp5LWltZyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC42cztcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgJi50bnMtY29tcGxldGUgeyBvcGFjaXR5OiAxOyB9XFxufVxcbi50bnMtYWgge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMHM7XFxuICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwcztcXG4gIHRyYW5zaXRpb246IGhlaWdodCAwcztcXG59XFxuLnRucy1vdmggeyBvdmVyZmxvdzogaGlkZGVuOyB9XFxuLnRucy12aXN1YWxseS1oaWRkZW4geyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IC0xMDAwMGVtOyB9XFxuLnRucy10cmFuc3BhcmVudCB7IG9wYWNpdHk6IDA7IHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi50bnMtZmFkZUluIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcXG4gIHotaW5kZXg6IDA7XFxufVxcbi50bnMtbm9ybWFsLCAudG5zLWZhZGVPdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5cXG4vLyAqKiogRml4IGEgdmlld3BvcnQgaXNzdWUgaW4gaW5pdGlhbGl6YXRpb25cXG4udG5zLXZwZml4IHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICA+IGRpdiwgPiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG59XFxuXFxuLy8gKioqIERldGVjdGluZyBicm93c2VyIGNhcGFiaWxpdHkgKioqXFxuJHdpZHRoOiAzMTBweDtcXG4kaGVpZ2h0OiAxMHB4O1xcbiRjb3VudDogNzA7XFxuJHBlcnBhZ2U6IDM7XFxuXFxuLnRucy10IHtcXG4gICYtc3VicDIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6ICR3aWR0aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuICAmLWN0IHtcXG4gICAgd2lkdGg6ICgxMDAlICogJGNvdW50IC8gJHBlcnBhZ2UpO1xcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgKiAjeyRjb3VudH0gLyAjeyRwZXJwYWdlfSk7XFxuICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAqICN7JGNvdW50fSAvICN7JHBlcnBhZ2V9KTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAqICN7JGNvdW50fSAvICN7JHBlcnBhZ2V9KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgJjphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgZGlzcGxheTogdGFibGU7XFxuICAgICAgY2xlYXI6IGJvdGg7XFxuICAgIH1cXG4gICAgPiBkaXYge1xcbiAgICAgIHdpZHRoOiAoMTAwJSAvICRjb3VudCk7XFxuICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC8gI3skY291bnR9KTtcXG4gICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLyAjeyRjb3VudH0pO1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAjeyRjb3VudH0pO1xcbiAgICAgIGhlaWdodDogJGhlaWdodDtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcImgxIHtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMjgpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYSh0YWJsZXQpIHtcXHJcXG4gICAgICAgIC8vZm9udC1zaXplOiByZW0oMzIpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMjgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMjQpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogcmVtKDIwKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KDM0LCBib2xkKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBAaW5jbHVkZSB0eXBvZ3JhcGh5KDIyLCBib2xkKTtcXHJcXG59XFxyXFxuXCIsXCJidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnlfX2J1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNWVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDhweCA4cHggLTEwcHggIzAwMDtcXHJcXG4gICBcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDIuNWVtO1xcclxcbiAgICAgICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnlfX2J1dHRvbi0tdHJhbnNwYXJlbnQge1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjdkO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggMHB4ICMwMDAwMDA4YztcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCBcXFwiLi9idXJnZXJcXFwiXCIsXCIgICAgLy8gSGFtYnVyZ2VyIE9wZW4gU3R5bGVzXFxyXFxuLmhlYWRlci5vcGVuIHtcXHJcXG4gIFxcclxcbiAgLmhlYWRlcl9fdG9nZ2xlIHtcXHJcXG4gICAgPiBzcGFuOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgICAgICAgXFxyXFxuICAgID4gc3BhbjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgICAgICAgXFxyXFxuICAgID4gc3BhbjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX3RvZ2dsZSB7IC8vIE1vYmlsZSBNZW51IFRvZ2dsZVxcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgXFxyXFxuICA+IHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDI2cHg7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzcHggMXB4O1xcclxcbiAgICBcXHJcXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpe1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5sb2dvIHtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIFxcclxcbiAgICAmX19pbm5lciB7XFxyXFxuICBcXHJcXG4gICAgICAuaWNvbi0tbG9nbyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBAaW5jbHVkZSBtZWRpYSAobGFwdG9wKSB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogNDMlO1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5pY29uLS1sb2dvIHtcXHJcXG4gICAgICBAaW5jbHVkZSBzdmctaWNvbi1zaXplKGVtKDM1KSwgZW0oMzUpKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgLmljb24tLWxvZ28tYnJhbmQge1xcclxcblxcclxcbiAgICAjbG9nby1sb2dvLFxcclxcbiAgICAjbG9nby1icmFuZCB7XFxyXFxuICAgICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBzdmctaWNvbi1zaXplKGVtKDI1MCksIGVtKDI1MCkpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGluaGVyaXQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5icmFuZC1ib3hfX2lubmVyIHtcXHJcXG4gIEBpbmNsdWRlIHN2Zy1pY29uLXNpemUoZW0oMjUwKSwgZW0oMjUwKSk7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYShsYXB0b3ApIHtcXHJcXG4gICAgQGluY2x1ZGUgc3ZnLWljb24tc2l6ZShlbSgzNTApLCBlbSgzNTApKTsgIFxcclxcbiAgfVxcclxcbn1cIixcIi8vIHN2ZyBpY29uIHNpemUgYW5kIGl0cyBwYXJlbnRcXHJcXG5cXHJcXG5AbWl4aW4gc3ZnLWljb24tc2l6ZSgkd2lkdGgsICRoZWlnaHQ6ICR3aWR0aCkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAkd2lkdGg7XFxyXFxuICAgIGhlaWdodDogJGhlaWdodDtcXHJcXG4gICAgbWluLXdpZHRoOiAkd2lkdGg7XFxyXFxuXFxyXFxuICAgIHN2ZyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAkd2lkdGg7XFxyXFxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBzdmcgaWNvbiBzaXplIGFuZCBpdHMgcGFyZW50XFxyXFxuXFxyXFxuQG1peGluIGltZy1zdmctaWNvbi1zaXplKCR3aWR0aCwgJGhlaWdodDogJHdpZHRoKSB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6ICR3aWR0aDtcXHJcXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIixcIi5uYXZiYXItbGlua3MsXFxyXFxuLmdlbmRlci1uYXZfX2xpbmsgYSB7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoMzAsIHJlZ3VsYXIpO1xcclxcblxcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgNTBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBcXHJcXG4gICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6ICM4MDgwODA7XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhKFxcXCJsYXB0b3BcXFwiKSB7XFxyXFxuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoMjAsIHJlZ3VsYXIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZGVyLW5hdl9fbGluayBhIHtcXHJcXG4gIEBpbmNsdWRlIHR5cG9ncmFwaHkoMjAsIHJlZ3VsYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi0tbGluayB7XFxyXFxuICBAaW5jbHVkZSBzdmctaWNvbi1zaXplKGVtKDIwKSwgZW0oMjApKTtcXHJcXG5cXHJcXG4gIHN2ZyB7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuXFxyXFxuICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcbiAgICAgIHRvcDogMzUlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1ldGFtZW51X19saXN0LS1pdGVtIGEge1xcclxcblxcclxcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KDE1LCByZWd1bGFyKTsgIFxcclxcbiAgICBcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgXFxyXFxuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yOiB3aGl0ZSwgJGFtb3VudDogMjUpO1xcclxcblxcclxcbiAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYShcXFwibGFwdG9wXFxcIikge1xcclxcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KDE1LCByZWd1bGFyKTsgIFxcclxcbiAgfVxcclxcblxcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvcjogd2hpdGUsICRhbW91bnQ6IDI1KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5oZXJvX190ZWFzZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIC5zZWN0aW9uIHtcXHJcXG4gICAgICAgICZfX2lubmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVlbSAxLjVlbSAxMGVtO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBtZWRpYShsYXB0b3ApIHtcXHJcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmltYXJ5X19idXR0b24ge1xcclxcblxcclxcbiAgICAgIG1pbi13aWR0aDogMzAlO1xcclxcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcbiAgICAgICAgbWluLXdpZHRoOiBub25lIWltcG9ydGFudDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyAgIFxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fdGVhc2VyLS1pbWFnZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fzc2V0cy9pbWFnZXMvYmx1c2gtdmlzdWFsLnBuZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRfX3RlYXNlci0tZ2xhcyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiBlbSgyMDApO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMS41ZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE4cHggOTVweCAtNDNweCAjMDAwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAuY2FyZF9faW5uZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bzsgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaDEsIGgzIHtcXHJcXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKSB7XFxyXFxuXFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIHdpZHRoOiBlbSgzNTApO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAyLjVlbTtcXHJcXG4gICAgICBcXHJcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgcGFkZGluZzogMS41ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEoZGVza3RvcCkge1xcclxcbiAgICAgIHdpZHRoOiBlbSg1MDApO1xcclxcbiAgICAgIGhlaWdodDogZW0oMzAwKTtcXHJcXG4gICAgICBcXHJcXG4gICAgICBwYWRkaW5nOiAxLjVlbSAzZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuICAuaG9sZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAmOmJlZm9yZSxcXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgYW5pbWF0aW9uOiBvcmJpdCA1cyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsIHJnYmEoMjA3LCAxMDksIDEwOSwgMC44OTcpLCAjZmZhYTljKTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0yLjVzO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxNzcsIDE3NywgMTc3KTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodG8gdG9wIGxlZnQsICM1YTVhNWEsICNiZWJlYmUpO1xcclxcbiAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgfVxcclxcbiAgfVwiLFwiLm1haW4taGVhZGxpbmUge1xcclxcbiAgICBtYXJnaW46IDNlbSAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIGJvdHRvbTogLTIwcHg7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XFxyXFxuXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZ2xhcyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE4cHggOTVweCAtNDNweCAjMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXdhcmVua29yYi1saW5rIHtcXHJcXG5cXHJcXG4gICAgc3ZnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxLjJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMS4yZW07XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNSUsIDE5JSk7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1hcnRpY2xlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdHNfX2xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYSh0YWJsZXQpIHsgIFxcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMS41ZW07XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogLTEuNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcblxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0c19fbGlzdC0taXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUvMSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUuNWVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDEuNWVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDI0ZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDVlbTtcXHJcXG4gICAgbWF4LXdpZHRoOjI0ZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhKHRhYmxldCkge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMGVtOztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYShsYXB0b3ApIHtcXHJcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUvMik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEoZGVza3RvcCkge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkIHtcXHJcXG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhICh0YWJsZXQpIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIuNWVtIDNlbSAyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEgKGxhcHRvcCkge1xcclxcbiAgICAgICAgcGFkZGluZzogMi41ZW0gMmVtIDJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkX19pbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG5cXHJcXG4gICAgLy93aWR0aDogNjUlO1xcclxcblxcclxcbiAgICBoNCwgcCB7XFxyXFxuICAgICAgICBtYXJnaW46IC4yZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoNCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KDE4LCBib2xkKTtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKHRhYmxldCkge1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoMjYsIGJvbGQpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcmljZXRhZyB7XFxyXFxuICAgICAgICBtYXJnaW46IDFlbSAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9kdWN0LWFydGljbGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvaW1hZ2VzL3BlcmZ1bWUtcHJvZHVjdC5wbmdcXFwiKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuIFxcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgLTMyJSk7XFxyXFxuICAgICAgICB0b3A6IC0zNnB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE0ZW07XFxyXFxuICAgICAgICB3aWR0aDogNmVtO1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBtZWRpYShtaW4tcGhvbmUpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEocGhvbmUpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBtZWRpYSh0YWJsZXQpIHtcXHJcXG4gICAgICAgICAgICB0b3A6IC00MnB4O1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMThlbTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogOGVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXdhcmVua29yYi1saW5rIHtcXHJcXG4gICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgxMCwgcmVndWxhcik7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhKHRhYmxldCkge1xcclxcbiAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgxNSwgcmVndWxhcik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIuc3BlcmF0ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBtYXJnaW46IDEuNWVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9kdWN0LWRldGFpbCB7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgLnByaW1hcnlfX2J1dHRvbiB7XFxyXFxuICAgICAgICBtYXJnaW46IDFlbSAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY3Rpb25fX2lubmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMS41ZW07XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBtZWRpYSh0YWJsZXQpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDI1ZW07ICAgICAgICBcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEgKHRhYmxldCl7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0LWNhcmQge1xcclxcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEgKHRhYmxldCl7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMi41ZW0gMmVtIDJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipTTElERVIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLy8vLy8vLy8vXFxyXFxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqU0xJREVSKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vLy8vLy8vL1xcclxcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlNMSURFUioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovLy8vLy8vLy9cXHJcXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipTTElERVIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLy8vLy8vLy8vXFxyXFxuXFxyXFxuLnNsaWRlci1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICB3aWR0aDogOWVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5teS1zbGlkZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWl0ZW0ge1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gLjc1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIFxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udHJvbHMge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGxlZnQ6IDA7ICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTsgICAgXFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTUwJSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcblxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbGk6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgICAgICAgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5leHQsIC5wcmV2IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgd2lkdGg6IDJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMCAyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXHJcXG5cXHJcXG4gICAgOmFjdGl2ZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiByZWQhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50bnMtbmF2IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XCIsXCIuc2hvcHBpbmdTdW0ge1xcclxcblxcclxcbiAgICAuc2hvcHBpbmdTdW1fX3dyYXBwZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiA1ZW0gMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipXQVJFTktPUkIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipXQVJFTktPUkIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipXQVJFTktPUkIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipXQVJFTktPUkIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipXQVJFTktPUkIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcblxcclxcbi5zaG9wcGluZy1jYXJ0IHtcXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtdGl0bGUge1xcclxcbiAgICAgICAgaDMge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29sdW1uLWxhYmVsIHtcXHJcXG4gICAgICAgIGxhYmVsIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucHJvZHVjdC1pbWFnZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA1ZW07XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhIChsYXB0b3ApIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDdlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3Qge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgbWFyZ2luOiA0ZW0gMDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3QtcmVtb3ZhbCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW1hZ2UtZGV0YWlsX193cmFwcGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgICAgICAucHJvZHVjdC1kZXRhaWxzIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5xdWFudGl0eS1wcmljZV9fd3JhcHBlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xcclxcblxcclxcbiAgICAgICAgLnByb2R1Y3QtcXVhbnRpdHkge1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b3RhbF9fd3JhcHBlciB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvdXBvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKHRhYmxldCkgeyAgXFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb3Vwb25fX2lubmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgICAubGFiZWwtY291cG9uIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW5wdXQtdGV4dCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcmltYXJ5X19idXR0b257XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG90YWwge1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEodGFibGV0KSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgLnRvdGFscy1pdGVtIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy9MaWVmZXJ1bmdcXHJcXG5cXHJcXG4uZGVsaXZlcnlfX3dyYXBwZXIge1xcclxcblxcclxcbiAgICAuZGVsaXZlcnktY3VzdG9tZXJpbmZvcm1hdGlvbnMge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEodGFibGV0KSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuXFxyXFxuICAgIGg0IHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XFxyXFxuXFxyXFxuICAgIC5kZWxpdmVyX19pbm5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFxyXFxuICAgICAgICBoMyB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubGFiZWxfX3dyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbWFnZS1kZXRhaWxfX3dyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvZHVjdC1saW5lLXByaWNlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbWFnZS1kZXRhaWxfX3dyYXBwZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMWVtIDA7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMvL1xcclxcbi8vRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMvL1xcclxcbi8vRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMvL1xcclxcbi8vRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMgRk9STVMvL1xcclxcblxcclxcbi5kZWxpdmVyeS1jdXN0b21lcmluZm9ybWF0aW9ucyB7XFxyXFxuXFxyXFxuICAgIGg0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgZmllbGRzZXQge1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICBsYWJlbCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJvdyB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzNywgMzcsIDM3KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAuNWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblwiLFwiICAgIFxcclxcbi5wcm9kdWN0LWRlc2NyaXB0aW9uc19fd3JhcHBlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFic19fY29udGFpbmVye1xcclxcblxcclxcbiAgICAudGFiTGlua3Mge1xcclxcbiAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSg1LCByZWd1bGFyKVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGg0IHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYiB7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG5cXHJcXG4gICAgICAgIDpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cXHJcXG4gICAgICAudGFiIGJ1dHRvbiB7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMWVtO1xcclxcbiAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgxNywgcmVndWxhcik7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuMmVtO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS4yZW07XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBib3R0b206IDAlO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcclxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBib3R0b206IDAlO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcclxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXFxyXFxuICBcXHJcXG5cXHJcXG4gICAgICAvKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xcclxcbiAgICAgIC50YWIgYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuXFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMCU7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA1MCUpO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXFxyXFxuICAgICAgLnRhYkNvbnRlbnQgIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmFjdGl2ZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB9XFxyXFxufSAgIFxcclxcbiAgICBcIixcIi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7IFxcclxcbiAgcGFkZGluZy1ib3R0b206IDhlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMThlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJfX3dyYXBwZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IC0xMXB4IDMwcHggMHB4IGJsYWNrO1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDUwMG1zO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYShsYXB0b3ApIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlcl9fd3JhcHBlciB7XFxyXFxuICAgICAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcbiAgICAgICAgcGFkZGluZzogMi41ZW0gMi41ZW0gMTBlbTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC4ycyBlYXNlOyBcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vdmVybGF5IHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDhlbTtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigyZW0pKSkge1xcclxcbiAgICAub3ZlcmxheSAge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxyXFxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMmVtKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcl9fbGlua3Mge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBlbTtcXHJcXG5cXHJcXG4gICAgLm1haW4tbmF2X19saW5rIHtcXHJcXG4gICAgICBtYXJnaW46IDJlbSAwO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFxcXCJsYXB0b3BcXFwiKSB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMS41ZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBtZWRpYShcXFwibGFwdG9wXFxcIikge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNob3BwaW5nY2FyZC0tbGluayB7XFxyXFxuICAgICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNWVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWFpbi1uYXZfX2xpc3Qge1xcclxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFxcXCJsYXB0b3BcXFwiKSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYShcXFwibGFwdG9wXFxcIikge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAuaGFzLWZhZGUge1xcclxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEobGFwdG9wKSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5nZW5kZXItbmF2IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VuZGVyLW5hdl9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi8vIEhFQURFUiBGSVhFRFxcclxcbi5oZWFkZXItd3JhcHBlci0tZml4IHtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhKGxhcHRvcCkge1xcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTRlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmhlYWRlci13cmFwcGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgLmhlYWRlcl9fd3JhcHBlciB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBtZWRpYShsYXB0b3ApIHtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMS41ZW0gMi41ZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmxvZ28ge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAjbG9nby1sb2dvIHtcXHJcXG4gICAgICBhbmltYXRpb246IGZhZGUtb3V0IDEwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgICNsb2dvLWJyYW5kIHtcXHJcXG4gICAgICBhbmltYXRpb246IGZhZGUtb3V0IDEwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcclxcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgIC5pY29uLS1sb2dvLWJyYW5kIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAubWFpbi1uYXYge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiLmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxNzE3MTc7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGVtKDY1MCk7XFxyXFxuXFxyXFxuICAgIC5tZXRhbWVudV9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICAmLS1pdGVtIHtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMzLjMzMyU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icmFuZC1ib3gge1xcclxcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1ldGFtZW51X19zb2NpYWxtZWRpYSxcXHJcXG4gICAgLm1ldGFtZW51X19pbmZvcm1hdGlvbiB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwJTtcXHJcXG5cXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIGNyb3NzIGJyb3dzZXJzIGFkZFJ1bGUgbWV0aG9kXG5pbXBvcnQgeyByYWYgfSBmcm9tICcuL3JhZi5qcyc7XG5leHBvcnQgZnVuY3Rpb24gYWRkQ1NTUnVsZShzaGVldCwgc2VsZWN0b3IsIHJ1bGVzLCBpbmRleCkge1xuICAvLyByZXR1cm4gcmFmKGZ1bmN0aW9uKCkge1xuICAgICdpbnNlcnRSdWxlJyBpbiBzaGVldCA/XG4gICAgICBzaGVldC5pbnNlcnRSdWxlKHNlbGVjdG9yICsgJ3snICsgcnVsZXMgKyAnfScsIGluZGV4KSA6XG4gICAgICBzaGVldC5hZGRSdWxlKHNlbGVjdG9yLCBydWxlcywgaW5kZXgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBjbGFzc0xpc3RTdXBwb3J0LCBoYXNDbGFzcyB9IGZyb20gJy4vaGFzQ2xhc3MuanMnO1xudmFyIGFkZENsYXNzID0gY2xhc3NMaXN0U3VwcG9ydCA/XG4gICAgZnVuY3Rpb24gKGVsLCBzdHIpIHtcbiAgICAgIGlmICghaGFzQ2xhc3MoZWwsICBzdHIpKSB7IGVsLmNsYXNzTGlzdC5hZGQoc3RyKTsgfVxuICAgIH0gOlxuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7XG4gICAgICBpZiAoIWhhc0NsYXNzKGVsLCAgc3RyKSkgeyBlbC5jbGFzc05hbWUgKz0gJyAnICsgc3RyOyB9XG4gICAgfTtcblxuZXhwb3J0IHsgYWRkQ2xhc3MgfTsiLCJpbXBvcnQgeyBwYXNzaXZlT3B0aW9uIH0gZnJvbSAnLi9wYXNzaXZlT3B0aW9uLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50cyhlbCwgb2JqLCBwcmV2ZW50U2Nyb2xsaW5nKSB7XG4gIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgdmFyIG9wdGlvbiA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnXS5pbmRleE9mKHByb3ApID49IDAgJiYgIXByZXZlbnRTY3JvbGxpbmcgPyBwYXNzaXZlT3B0aW9uIDogZmFsc2U7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihwcm9wLCBvYmpbcHJvcF0sIG9wdGlvbik7XG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gYXJyYXlGcm9tTm9kZUxpc3QgKG5sKSB7XG4gIHZhciBhcnIgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBubC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBhcnIucHVzaChubFtpXSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn0iLCJ2YXIgd2luID0gd2luZG93O1xuXG5leHBvcnQgdmFyIGNhZiA9IHdpbi5jYW5jZWxBbmltYXRpb25GcmFtZVxuICB8fCB3aW4ubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgfHwgZnVuY3Rpb24oaWQpeyBjbGVhclRpbWVvdXQoaWQpOyB9O1xuIiwiLy8gZ2V0IGNzcy1jYWxjIFxuLy8gQHJldHVybiAtIGZhbHNlIHwgY2FsYyB8IC13ZWJraXQtY2FsYyB8IC1tb3otY2FsY1xuLy8gQHVzYWdlIC0gdmFyIGNhbGMgPSBnZXRDYWxjKCk7IFxuaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsIFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksIFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB0cnkge1xuICAgIHZhciBzdHIgPSAnKDEwcHggKiAxMCknLFxuICAgICAgICB2YWxzID0gWydjYWxjJyArIHN0ciwgJy1tb3otY2FsYycgKyBzdHIsICctd2Via2l0LWNhbGMnICsgc3RyXSxcbiAgICAgICAgdmFsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB2YWwgPSB2YWxzW2ldO1xuICAgICAgZGl2LnN0eWxlLndpZHRoID0gdmFsO1xuICAgICAgaWYgKGRpdi5vZmZzZXRXaWR0aCA9PT0gMTAwKSB7IFxuICAgICAgICByZXN1bHQgPSB2YWwucmVwbGFjZShzdHIsICcnKTsgXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge31cbiAgXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU3RvcmFnZVZhbHVlICh2YWx1ZSkge1xuICByZXR1cm4gWyd0cnVlJywgJ2ZhbHNlJ10uaW5kZXhPZih2YWx1ZSkgPj0gMCA/IEpTT04ucGFyc2UodmFsdWUpIDogdmFsdWU7XG59IiwiZXhwb3J0IHZhciBjbGFzc0xpc3RTdXBwb3J0ID0gJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnXycpOyIsIi8vIGNyZWF0ZSBhbmQgYXBwZW5kIHN0eWxlIHNoZWV0XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldCAobWVkaWEsIG5vbmNlKSB7XG4gIC8vIENyZWF0ZSB0aGUgPHN0eWxlPiB0YWdcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dC9jc3NcIik7XG5cbiAgLy8gQWRkIGEgbWVkaWEgKGFuZC9vciBtZWRpYSBxdWVyeSkgaGVyZSBpZiB5b3UnZCBsaWtlIVxuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBcInNjcmVlblwiKVxuICAvLyBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBcIm9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTAyNHB4KVwiKVxuICBpZiAobWVkaWEpIHsgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpOyB9XG5cbiAgLy8gQWRkIG5vbmNlIGF0dHJpYnV0ZSBmb3IgQ29udGVudCBTZWN1cml0eSBQb2xpY3lcbiAgaWYgKG5vbmNlKSB7IHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTsgfVxuXG4gIC8vIFdlYktpdCBoYWNrIDooXG4gIC8vIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKTtcblxuICAvLyBBZGQgdGhlIDxzdHlsZT4gZWxlbWVudCB0byB0aGUgcGFnZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIHJldHVybiBzdHlsZS5zaGVldCA/IHN0eWxlLnNoZWV0IDogc3R5bGUuc3R5bGVTaGVldDtcbn07IiwiZXhwb3J0IHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsImV4cG9ydCBmdW5jdGlvbiBFdmVudHMoKSB7XG4gIHJldHVybiB7XG4gICAgdG9waWNzOiB7fSxcbiAgICBvbjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgIHRoaXMudG9waWNzW2V2ZW50TmFtZV0gPSB0aGlzLnRvcGljc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIG9mZjogZnVuY3Rpb24oZXZlbnROYW1lLCBmbikge1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRvcGljc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgICB0aGlzLnRvcGljc1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZW1pdDogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgZGF0YS50eXBlID0gZXZlbnROYW1lO1xuICAgICAgaWYgKHRoaXMudG9waWNzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy50b3BpY3NbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgZm4oZGF0YSwgZXZlbnROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJleHBvcnQgZnVuY3Rpb24gZXh0ZW5kKCkge1xuICB2YXIgb2JqLCBuYW1lLCBjb3B5LFxuICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuICAgICAgaSA9IDEsXG4gICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKG9iaiA9IGFyZ3VtZW50c1tpXSkgIT09IG51bGwpIHtcbiAgICAgIGZvciAobmFtZSBpbiBvYmopIHtcbiAgICAgICAgY29weSA9IG9ialtuYW1lXTtcblxuICAgICAgICBpZiAodGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsIi8vIGh0dHBzOi8vdG9kZG1vdHRvLmNvbS9kaXRjaC10aGUtYXJyYXktZm9yZWFjaC1jYWxsLW5vZGVsaXN0LWhhY2svXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaCAoYXJyLCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2FsbGJhY2suY2FsbChzY29wZSwgYXJyW2ldLCBpKTtcbiAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRBdHRyKGVsLCBhdHRyKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoYXR0cik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBib2R5ID0gZG9jLmJvZHk7XG5cbiAgaWYgKCFib2R5KSB7XG4gICAgYm9keSA9IGRvYy5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgYm9keS5mYWtlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBib2R5O1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkge1xuICB2YXIgcnVsZSA9ICgnaW5zZXJ0UnVsZScgaW4gc2hlZXQpID8gc2hlZXQuY3NzUnVsZXMgOiBzaGVldC5ydWxlcztcbiAgcmV0dXJuIHJ1bGUubGVuZ3RoO1xufSIsIi8vIGdldCB0cmFuc2l0aW9uZW5kLCBhbmltYXRpb25lbmQgYmFzZWQgb24gdHJhbnNpdGlvbkR1cmF0aW9uXG4vLyBAcHJvcGluOiBzdHJpbmdcbi8vIEBwcm9wT3V0OiBzdHJpbmcsIGZpcnN0LWxldHRlciB1cHBlcmNhc2Vcbi8vIFVzYWdlOiBnZXRFbmRQcm9wZXJ0eSgnV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uJywgJ1RyYW5zaXRpb24nKSA9PiB3ZWJraXRUcmFuc2l0aW9uRW5kXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW5kUHJvcGVydHkocHJvcEluLCBwcm9wT3V0KSB7XG4gIHZhciBlbmRQcm9wID0gZmFsc2U7XG4gIGlmICgvXldlYmtpdC8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICd3ZWJraXQnICsgcHJvcE91dCArICdFbmQnO1xuICB9IGVsc2UgaWYgKC9eTy8udGVzdChwcm9wSW4pKSB7XG4gICAgZW5kUHJvcCA9ICdvJyArIHByb3BPdXQgKyAnRW5kJztcbiAgfSBlbHNlIGlmIChwcm9wSW4pIHtcbiAgICBlbmRQcm9wID0gcHJvcE91dC50b0xvd2VyQ2FzZSgpICsgJ2VuZCc7XG4gIH1cbiAgcmV0dXJuIGVuZFByb3A7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNsaWRlSWQoKSB7XG4gIHZhciBpZCA9IHdpbmRvdy50bnNJZDtcbiAgd2luZG93LnRuc0lkID0gIWlkID8gMSA6IGlkICsgMTtcbiAgXG4gIHJldHVybiAndG5zJyArIHdpbmRvdy50bnNJZDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hEaXJlY3Rpb24oYW5nbGUsIHJhbmdlKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBmYWxzZSxcbiAgICAgIGdhcCA9IE1hdGguYWJzKDkwIC0gTWF0aC5hYnMoYW5nbGUpKTtcbiAgICAgIFxuICBpZiAoZ2FwID49IDkwIC0gcmFuZ2UpIHtcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH0gZWxzZSBpZiAoZ2FwIDw9IHJhbmdlKSB7XG4gICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb247XG59IiwiaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXMzRFRyYW5zZm9ybXModGYpe1xuICBpZiAoIXRmKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7IHJldHVybiBmYWxzZTsgfVxuICBcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keSA9IGdldEJvZHkoKSxcbiAgICAgIGRvY092ZXJmbG93ID0gc2V0RmFrZUJvZHkoYm9keSksXG4gICAgICBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICBoYXMzZCxcbiAgICAgIGNzc1RGID0gdGYubGVuZ3RoID4gOSA/ICctJyArIHRmLnNsaWNlKDAsIC05KS50b0xvd2VyQ2FzZSgpICsgJy0nIDogJyc7XG5cbiAgY3NzVEYgKz0gJ3RyYW5zZm9ybSc7XG5cbiAgLy8gQWRkIGl0IHRvIHRoZSBib2R5IHRvIGdldCB0aGUgY29tcHV0ZWQgc3R5bGVcbiAgYm9keS5pbnNlcnRCZWZvcmUoZWwsIG51bGwpO1xuXG4gIGVsLnN0eWxlW3RmXSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xuICBoYXMzZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1RGKTtcblxuICBib2R5LmZha2UgPyByZXNldEZha2VCb2R5KGJvZHksIGRvY092ZXJmbG93KSA6IGVsLnJlbW92ZSgpO1xuXG4gIHJldHVybiAoaGFzM2QgIT09IHVuZGVmaW5lZCAmJiBoYXMzZC5sZW5ndGggPiAwICYmIGhhczNkICE9PSBcIm5vbmVcIik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQXR0cihlbCwgYXR0cikge1xuICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKGF0dHIpO1xufSIsImltcG9ydCB7IGNsYXNzTGlzdFN1cHBvcnQgfSBmcm9tICcuL2NsYXNzTGlzdFN1cHBvcnQuanMnO1xuXG52YXIgaGFzQ2xhc3MgPSBjbGFzc0xpc3RTdXBwb3J0ID9cbiAgICBmdW5jdGlvbiAoZWwsIHN0cikgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0cik7IH0gOlxuICAgIGZ1bmN0aW9uIChlbCwgc3RyKSB7IHJldHVybiBlbC5jbGFzc05hbWUuaW5kZXhPZihzdHIpID49IDA7IH07XG5cbmV4cG9ydCB7IGNsYXNzTGlzdFN1cHBvcnQsIGhhc0NsYXNzIH07IiwiZXhwb3J0IGZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsLCBmb3JjZUhpZGUpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgeyBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUxpc3QoZWwpIHtcbiAgLy8gT25seSBOb2RlTGlzdCBoYXMgdGhlIFwiaXRlbSgpXCIgZnVuY3Rpb25cbiAgcmV0dXJuIHR5cGVvZiBlbC5pdGVtICE9PSBcInVuZGVmaW5lZFwiOyBcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZGlzcGxheSAhPT0gJ25vbmUnO1xufSIsImV4cG9ydCBmdW5jdGlvbiBqc1RyYW5zZm9ybShlbGVtZW50LCBhdHRyLCBwcmVmaXgsIHBvc3RmaXgsIHRvLCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHRpY2sgPSBNYXRoLm1pbihkdXJhdGlvbiwgMTApLFxuICAgICAgdW5pdCA9ICh0by5pbmRleE9mKCclJykgPj0gMCkgPyAnJScgOiAncHgnLFxuICAgICAgdG8gPSB0by5yZXBsYWNlKHVuaXQsICcnKSxcbiAgICAgIGZyb20gPSBOdW1iZXIoZWxlbWVudC5zdHlsZVthdHRyXS5yZXBsYWNlKHByZWZpeCwgJycpLnJlcGxhY2UocG9zdGZpeCwgJycpLnJlcGxhY2UodW5pdCwgJycpKSxcbiAgICAgIHBvc2l0aW9uVGljayA9ICh0byAtIGZyb20pIC8gZHVyYXRpb24gKiB0aWNrLFxuICAgICAgcnVubmluZztcblxuICBzZXRUaW1lb3V0KG1vdmVFbGVtZW50LCB0aWNrKTtcbiAgZnVuY3Rpb24gbW92ZUVsZW1lbnQoKSB7XG4gICAgZHVyYXRpb24gLT0gdGljaztcbiAgICBmcm9tICs9IHBvc2l0aW9uVGljaztcbiAgICBlbGVtZW50LnN0eWxlW2F0dHJdID0gcHJlZml4ICsgZnJvbSArIHVuaXQgKyBwb3N0Zml4O1xuICAgIGlmIChkdXJhdGlvbiA+IDApIHsgXG4gICAgICBzZXRUaW1lb3V0KG1vdmVFbGVtZW50LCB0aWNrKTsgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYXF1ZXJ5U3VwcG9ydCAoKSB7XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSB8fCB3aW5kb3cubXNNYXRjaE1lZGlhKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIHZhciBkb2MgPSBkb2N1bWVudCxcbiAgICAgIGJvZHkgPSBnZXRCb2R5KCksXG4gICAgICBkb2NPdmVyZmxvdyA9IHNldEZha2VCb2R5KGJvZHkpLFxuICAgICAgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSxcbiAgICAgIHJ1bGUgPSAnQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDoxcHgpey50bnMtbXEtdGVzdHtwb3NpdGlvbjphYnNvbHV0ZX19JyxcbiAgICAgIHBvc2l0aW9uO1xuXG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICBkaXYuY2xhc3NOYW1lID0gJ3Rucy1tcS10ZXN0JztcblxuICBib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICB9XG5cbiAgcG9zaXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdikucG9zaXRpb24gOiBkaXYuY3VycmVudFN0eWxlWydwb3NpdGlvbiddO1xuXG4gIGJvZHkuZmFrZSA/IHJlc2V0RmFrZUJvZHkoYm9keSwgZG9jT3ZlcmZsb3cpIDogZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiO1xufVxuIiwiLy8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxudmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xudHJ5IHtcbiAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLCBudWxsLCBvcHRzKTtcbn0gY2F0Y2ggKGUpIHt9XG5leHBvcnQgdmFyIHBhc3NpdmVPcHRpb24gPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlOyIsIi8vIGdldCBzdWJwaXhlbCBzdXBwb3J0IHZhbHVlXG4vLyBAcmV0dXJuIC0gYm9vbGVhblxuaW1wb3J0IHsgZ2V0Qm9keSB9IGZyb20gJy4vZ2V0Qm9keS5qcyc7XG5pbXBvcnQgeyBzZXRGYWtlQm9keSB9IGZyb20gJy4vc2V0RmFrZUJvZHkuanMnO1xuaW1wb3J0IHsgcmVzZXRGYWtlQm9keSB9IGZyb20gJy4vcmVzZXRGYWtlQm9keS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50YWdlTGF5b3V0KCkge1xuICAvLyBjaGVjayBzdWJwaXhlbCBsYXlvdXQgc3VwcG9ydGluZ1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBib2R5ID0gZ2V0Qm9keSgpLFxuICAgICAgZG9jT3ZlcmZsb3cgPSBzZXRGYWtlQm9keShib2R5KSxcbiAgICAgIHdyYXBwZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBvdXRlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIHN0ciA9ICcnLFxuICAgICAgY291bnQgPSA3MCxcbiAgICAgIHBlclBhZ2UgPSAzLFxuICAgICAgc3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgd3JhcHBlci5jbGFzc05hbWUgPSBcInRucy10LXN1YnAyXCI7XG4gIG91dGVyLmNsYXNzTmFtZSA9IFwidG5zLXQtY3RcIjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBzdHIgKz0gJzxkaXY+PC9kaXY+JztcbiAgfVxuXG4gIG91dGVyLmlubmVySFRNTCA9IHN0cjtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChvdXRlcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgc3VwcG9ydGVkID0gTWF0aC5hYnMod3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gb3V0ZXIuY2hpbGRyZW5bY291bnQgLSBwZXJQYWdlXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSA8IDI7XG5cbiAgYm9keS5mYWtlID8gcmVzZXRGYWtlQm9keShib2R5LCBkb2NPdmVyZmxvdykgOiB3cmFwcGVyLnJlbW92ZSgpO1xuXG4gIHJldHVybiBzdXBwb3J0ZWQ7XG59IiwidmFyIHdpbiA9IHdpbmRvdztcblxuZXhwb3J0IHZhciByYWYgPSB3aW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gIHx8IHdpbi53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgd2luLm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB8fCB3aW4ubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgfHwgZnVuY3Rpb24oY2IpIHsgcmV0dXJuIHNldFRpbWVvdXQoY2IsIDE2KTsgfTtcbiIsImltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tIFwiLi9pc05vZGVMaXN0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRycyhlbHMsIGF0dHJzKSB7XG4gIGVscyA9IChpc05vZGVMaXN0KGVscykgfHwgZWxzIGluc3RhbmNlb2YgQXJyYXkpID8gZWxzIDogW2Vsc107XG4gIGF0dHJzID0gKGF0dHJzIGluc3RhbmNlb2YgQXJyYXkpID8gYXR0cnMgOiBbYXR0cnNdO1xuXG4gIHZhciBhdHRyTGVuZ3RoID0gYXR0cnMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gZWxzLmxlbmd0aDsgaS0tOykge1xuICAgIGZvciAodmFyIGogPSBhdHRyTGVuZ3RoOyBqLS07KSB7XG4gICAgICBlbHNbaV0ucmVtb3ZlQXR0cmlidXRlKGF0dHJzW2pdKTtcbiAgICB9XG4gIH1cbn0iLCIvLyBjcm9zcyBicm93c2VycyBhZGRSdWxlIG1ldGhvZFxuaW1wb3J0IHsgcmFmIH0gZnJvbSAnLi9yYWYuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNTU1J1bGUoc2hlZXQsIGluZGV4KSB7XG4gIC8vIHJldHVybiByYWYoZnVuY3Rpb24oKSB7XG4gICAgJ2RlbGV0ZVJ1bGUnIGluIHNoZWV0ID9cbiAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpIDpcbiAgICAgIHNoZWV0LnJlbW92ZVJ1bGUoaW5kZXgpO1xuICAvLyB9KTtcbn0iLCJpbXBvcnQgeyBjbGFzc0xpc3RTdXBwb3J0LCBoYXNDbGFzcyB9IGZyb20gJy4vaGFzQ2xhc3MuanMnO1xudmFyIHJlbW92ZUNsYXNzID0gY2xhc3NMaXN0U3VwcG9ydCA/XG4gICAgZnVuY3Rpb24gKGVsLCBzdHIpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhlbCwgIHN0cikpIHsgZWwuY2xhc3NMaXN0LnJlbW92ZShzdHIpOyB9XG4gICAgfSA6XG4gICAgZnVuY3Rpb24gKGVsLCBzdHIpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhlbCwgc3RyKSkgeyBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShzdHIsICcnKTsgfVxuICAgIH07XG5cbmV4cG9ydCB7IHJlbW92ZUNsYXNzIH07IiwiaW1wb3J0IHsgcGFzc2l2ZU9wdGlvbiB9IGZyb20gJy4vcGFzc2l2ZU9wdGlvbi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudHMoZWwsIG9iaikge1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIHZhciBvcHRpb24gPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJ10uaW5kZXhPZihwcm9wKSA+PSAwID8gcGFzc2l2ZU9wdGlvbiA6IGZhbHNlO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIocHJvcCwgb2JqW3Byb3BdLCBvcHRpb24pO1xuICB9XG59IiwiaW1wb3J0IHsgZG9jRWxlbWVudCB9IGZyb20gJy4vZG9jRWxlbWVudC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZha2VCb2R5IChib2R5LCBkb2NPdmVyZmxvdykge1xuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5yZW1vdmUoKTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgLy8gVHJpZ2dlciBsYXlvdXQgc28ga2luZXRpYyBzY3JvbGxpbmcgaXNuJ3QgZGlzYWJsZWQgaW4gaU9TNitcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxufSIsImltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tIFwiLi9pc05vZGVMaXN0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRycyhlbHMsIGF0dHJzKSB7XG4gIGVscyA9IChpc05vZGVMaXN0KGVscykgfHwgZWxzIGluc3RhbmNlb2YgQXJyYXkpID8gZWxzIDogW2Vsc107XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXR0cnMpICE9PSAnW29iamVjdCBPYmplY3RdJykgeyByZXR1cm47IH1cblxuICBmb3IgKHZhciBpID0gZWxzLmxlbmd0aDsgaS0tOykge1xuICAgIGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICBlbHNbaV0uc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZG9jRWxlbWVudCB9IGZyb20gJy4vZG9jRWxlbWVudC5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGYWtlQm9keSAoYm9keSkge1xuICB2YXIgZG9jT3ZlcmZsb3cgPSAnJztcbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICAvL2F2b2lkIGNyYXNoaW5nIElFOCwgaWYgYmFja2dyb3VuZCBpbWFnZSBpcyB1c2VkXG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgLy9TYWZhcmkgNS4xMy81LjEuNCBPU1ggc3RvcHMgbG9hZGluZyBpZiA6Oi13ZWJraXQtc2Nyb2xsYmFyIGlzIHVzZWQgYW5kIHNjcm9sbGJhcnMgYXJlIHZpc2libGVcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gIH1cblxuICByZXR1cm4gZG9jT3ZlcmZsb3c7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShzdG9yYWdlLCBrZXksIHZhbHVlLCBhY2Nlc3MpIHtcbiAgaWYgKGFjY2Vzcykge1xuICAgIHRyeSB7IHN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTsgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsLCBmb3JjZUhpZGUpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgeyBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7IH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUgKHksIHgpIHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCkgKiAoMTgwIC8gTWF0aC5QSSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHdoaWNoUHJvcGVydHkocHJvcHMpe1xuICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBhcnIgPSBbcHJvcHNdLFxuICAgICAgICBQcm9wcyA9IHByb3BzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcHMuc3Vic3RyKDEpLFxuICAgICAgICBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdtcycsICdPJ107XG4gICAgICAgIFxuICAgIHByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24ocHJlZml4KSB7XG4gICAgICBpZiAocHJlZml4ICE9PSAnbXMnIHx8IHByb3BzID09PSAndHJhbnNmb3JtJykge1xuICAgICAgICBhcnIucHVzaChwcmVmaXggKyBQcm9wcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9wcyA9IGFycjtcbiAgfVxuXG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50JyksXG4gICAgICBsZW4gPSBwcm9wcy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKyl7XG4gICAgdmFyIHByb3AgPSBwcm9wc1tpXTtcbiAgICBpZiggZWwuc3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCApeyByZXR1cm4gcHJvcDsgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlOyAvLyBleHBsaWNpdCBmb3IgaWU5LVxufVxuIiwiLy8gT2JqZWN0LmtleXNcbmlmICghT2JqZWN0LmtleXMpIHtcbiAgT2JqZWN0LmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gb2JqZWN0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbmFtZSkpIHtcbiAgICAgICAga2V5cy5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfTtcbn1cblxuLy8gQ2hpbGROb2RlLnJlbW92ZVxuaWYoIShcInJlbW92ZVwiIGluIEVsZW1lbnQucHJvdG90eXBlKSl7XG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9O1xufVxuXG5pbXBvcnQgeyByYWYgfSBmcm9tICcuL2hlbHBlcnMvcmFmLmpzJztcbmltcG9ydCB7IGNhZiB9IGZyb20gJy4vaGVscGVycy9jYWYuanMnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi9oZWxwZXJzL2V4dGVuZC5qcyc7XG5pbXBvcnQgeyBjaGVja1N0b3JhZ2VWYWx1ZSB9IGZyb20gJy4vaGVscGVycy9jaGVja1N0b3JhZ2VWYWx1ZS5qcyc7XG5pbXBvcnQgeyBzZXRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2hlbHBlcnMvc2V0TG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB7IGdldFNsaWRlSWQgfSBmcm9tICcuL2hlbHBlcnMvZ2V0U2xpZGVJZC5qcyc7XG5pbXBvcnQgeyBjYWxjIH0gZnJvbSAnLi9oZWxwZXJzL2NhbGMuanMnO1xuaW1wb3J0IHsgcGVyY2VudGFnZUxheW91dCB9IGZyb20gJy4vaGVscGVycy9wZXJjZW50YWdlTGF5b3V0LmpzJztcbmltcG9ydCB7IG1lZGlhcXVlcnlTdXBwb3J0IH0gZnJvbSAnLi9oZWxwZXJzL21lZGlhcXVlcnlTdXBwb3J0LmpzJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlU2hlZXQgfSBmcm9tICcuL2hlbHBlcnMvY3JlYXRlU3R5bGVTaGVldC5qcyc7XG5pbXBvcnQgeyBhZGRDU1NSdWxlIH0gZnJvbSAnLi9oZWxwZXJzL2FkZENTU1J1bGUuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQ1NTUnVsZSB9IGZyb20gJy4vaGVscGVycy9yZW1vdmVDU1NSdWxlLmpzJztcbmltcG9ydCB7IGdldENzc1J1bGVzTGVuZ3RoIH0gZnJvbSAnLi9oZWxwZXJzL2dldENzc1J1bGVzTGVuZ3RoLmpzJztcbmltcG9ydCB7IHRvRGVncmVlIH0gZnJvbSAnLi9oZWxwZXJzL3RvRGVncmVlLmpzJztcbmltcG9ydCB7IGdldFRvdWNoRGlyZWN0aW9uIH0gZnJvbSAnLi9oZWxwZXJzL2dldFRvdWNoRGlyZWN0aW9uLmpzJztcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuL2hlbHBlcnMvZm9yRWFjaC5qcyc7XG5pbXBvcnQgeyBoYXNDbGFzcyB9IGZyb20gJy4vaGVscGVycy9oYXNDbGFzcy5qcyc7XG5pbXBvcnQgeyBhZGRDbGFzcyB9IGZyb20gJy4vaGVscGVycy9hZGRDbGFzcy5qcyc7XG5pbXBvcnQgeyByZW1vdmVDbGFzcyB9IGZyb20gJy4vaGVscGVycy9yZW1vdmVDbGFzcy5qcyc7XG5pbXBvcnQgeyBoYXNBdHRyIH0gZnJvbSAnLi9oZWxwZXJzL2hhc0F0dHIuanMnO1xuaW1wb3J0IHsgZ2V0QXR0ciB9IGZyb20gJy4vaGVscGVycy9nZXRBdHRyLmpzJztcbmltcG9ydCB7IHNldEF0dHJzIH0gZnJvbSAnLi9oZWxwZXJzL3NldEF0dHJzLmpzJztcbmltcG9ydCB7IHJlbW92ZUF0dHJzIH0gZnJvbSAnLi9oZWxwZXJzL3JlbW92ZUF0dHJzLmpzJztcbmltcG9ydCB7IGFycmF5RnJvbU5vZGVMaXN0IH0gZnJvbSAnLi9oZWxwZXJzL2FycmF5RnJvbU5vZGVMaXN0LmpzJztcbmltcG9ydCB7IGhpZGVFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzL2hpZGVFbGVtZW50LmpzJztcbmltcG9ydCB7IHNob3dFbGVtZW50IH0gZnJvbSAnLi9oZWxwZXJzL3Nob3dFbGVtZW50LmpzJztcbmltcG9ydCB7IGlzVmlzaWJsZSB9IGZyb20gJy4vaGVscGVycy9pc1Zpc2libGUuanMnO1xuaW1wb3J0IHsgd2hpY2hQcm9wZXJ0eSB9IGZyb20gJy4vaGVscGVycy93aGljaFByb3BlcnR5LmpzJztcbmltcG9ydCB7IGhhczNEVHJhbnNmb3JtcyB9IGZyb20gJy4vaGVscGVycy9oYXMzRFRyYW5zZm9ybXMuanMnO1xuaW1wb3J0IHsgZ2V0RW5kUHJvcGVydHkgfSBmcm9tICcuL2hlbHBlcnMvZ2V0RW5kUHJvcGVydHkuanMnO1xuaW1wb3J0IHsgYWRkRXZlbnRzIH0gZnJvbSAnLi9oZWxwZXJzL2FkZEV2ZW50cy5qcyc7XG5pbXBvcnQgeyByZW1vdmVFdmVudHMgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlRXZlbnRzLmpzJztcbmltcG9ydCB7IEV2ZW50cyB9IGZyb20gJy4vaGVscGVycy9ldmVudHMuanMnO1xuaW1wb3J0IHsganNUcmFuc2Zvcm0gfSBmcm9tICcuL2hlbHBlcnMvanNUcmFuc2Zvcm0uanMnO1xuXG5leHBvcnQgdmFyIHRucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgY29udGFpbmVyOiAnLnNsaWRlcicsXG4gICAgbW9kZTogJ2Nhcm91c2VsJyxcbiAgICBheGlzOiAnaG9yaXpvbnRhbCcsXG4gICAgaXRlbXM6IDEsXG4gICAgZ3V0dGVyOiAwLFxuICAgIGVkZ2VQYWRkaW5nOiAwLFxuICAgIGZpeGVkV2lkdGg6IGZhbHNlLFxuICAgIGF1dG9XaWR0aDogZmFsc2UsXG4gICAgdmlld3BvcnRNYXg6IGZhbHNlLFxuICAgIHNsaWRlQnk6IDEsXG4gICAgY2VudGVyOiBmYWxzZSxcbiAgICBjb250cm9sczogdHJ1ZSxcbiAgICBjb250cm9sc1Bvc2l0aW9uOiAndG9wJyxcbiAgICBjb250cm9sc1RleHQ6IFsncHJldicsICduZXh0J10sXG4gICAgY29udHJvbHNDb250YWluZXI6IGZhbHNlLFxuICAgIHByZXZCdXR0b246IGZhbHNlLFxuICAgIG5leHRCdXR0b246IGZhbHNlLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBuYXZQb3NpdGlvbjogJ3RvcCcsXG4gICAgbmF2Q29udGFpbmVyOiBmYWxzZSxcbiAgICBuYXZBc1RodW1ibmFpbHM6IGZhbHNlLFxuICAgIGFycm93S2V5czogZmFsc2UsXG4gICAgc3BlZWQ6IDMwMCxcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgYXV0b3BsYXlQb3NpdGlvbjogJ3RvcCcsXG4gICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuICAgIGF1dG9wbGF5RGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgYXV0b3BsYXlUZXh0OiBbJ3N0YXJ0JywgJ3N0b3AnXSxcbiAgICBhdXRvcGxheUhvdmVyUGF1c2U6IGZhbHNlLFxuICAgIGF1dG9wbGF5QnV0dG9uOiBmYWxzZSxcbiAgICBhdXRvcGxheUJ1dHRvbk91dHB1dDogdHJ1ZSxcbiAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5OiB0cnVlLFxuICAgIGFuaW1hdGVJbjogJ3Rucy1mYWRlSW4nLFxuICAgIGFuaW1hdGVPdXQ6ICd0bnMtZmFkZU91dCcsXG4gICAgYW5pbWF0ZU5vcm1hbDogJ3Rucy1ub3JtYWwnLFxuICAgIGFuaW1hdGVEZWxheTogZmFsc2UsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICByZXdpbmQ6IGZhbHNlLFxuICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IGZhbHNlLFxuICAgIGxhenlsb2FkOiBmYWxzZSxcbiAgICBsYXp5bG9hZFNlbGVjdG9yOiAnLnRucy1sYXp5LWltZycsXG4gICAgdG91Y2g6IHRydWUsXG4gICAgbW91c2VEcmFnOiBmYWxzZSxcbiAgICBzd2lwZUFuZ2xlOiAxNSxcbiAgICBuZXN0ZWQ6IGZhbHNlLFxuICAgIHByZXZlbnRBY3Rpb25XaGVuUnVubmluZzogZmFsc2UsXG4gICAgcHJldmVudFNjcm9sbE9uVG91Y2g6IGZhbHNlLFxuICAgIGZyZWV6YWJsZTogdHJ1ZSxcbiAgICBvbkluaXQ6IGZhbHNlLFxuICAgIHVzZUxvY2FsU3RvcmFnZTogdHJ1ZSxcbiAgICBub25jZTogZmFsc2VcbiAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgd2luID0gd2luZG93LFxuICAgICAgS0VZUyA9IHtcbiAgICAgICAgRU5URVI6IDEzLFxuICAgICAgICBTUEFDRTogMzIsXG4gICAgICAgIExFRlQ6IDM3LFxuICAgICAgICBSSUdIVDogMzlcbiAgICAgIH0sXG4gICAgICB0bnNTdG9yYWdlID0ge30sXG4gICAgICBsb2NhbFN0b3JhZ2VBY2Nlc3MgPSBvcHRpb25zLnVzZUxvY2FsU3RvcmFnZTtcblxuICBpZiAobG9jYWxTdG9yYWdlQWNjZXNzKSB7XG4gICAgLy8gY2hlY2sgYnJvd3NlciB2ZXJzaW9uIGFuZCBsb2NhbCBzdG9yYWdlIGFjY2Vzc1xuICAgIHZhciBicm93c2VySW5mbyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIHVpZCA9IG5ldyBEYXRlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRuc1N0b3JhZ2UgPSB3aW4ubG9jYWxTdG9yYWdlO1xuICAgICAgaWYgKHRuc1N0b3JhZ2UpIHtcbiAgICAgICAgdG5zU3RvcmFnZS5zZXRJdGVtKHVpZCwgdWlkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlQWNjZXNzID0gdG5zU3RvcmFnZS5nZXRJdGVtKHVpZCkgPT0gdWlkO1xuICAgICAgICB0bnNTdG9yYWdlLnJlbW92ZUl0ZW0odWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2VBY2Nlc3MpIHsgdG5zU3RvcmFnZSA9IHt9OyB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VBY2Nlc3MgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlQWNjZXNzKSB7XG4gICAgICAvLyByZW1vdmUgc3RvcmFnZSB3aGVuIGJyb3dzZXIgdmVyc2lvbiBjaGFuZ2VzXG4gICAgICBpZiAodG5zU3RvcmFnZVsndG5zQXBwJ10gJiYgdG5zU3RvcmFnZVsndG5zQXBwJ10gIT09IGJyb3dzZXJJbmZvKSB7XG4gICAgICAgIFsndEMnLCAndFBMJywgJ3RNUScsICd0VGYnLCAndDNEJywgJ3RURHUnLCAndFREZScsICd0QUR1JywgJ3RBRGUnLCAndFRFJywgJ3RBRSddLmZvckVhY2goZnVuY3Rpb24oaXRlbSkgeyB0bnNTdG9yYWdlLnJlbW92ZUl0ZW0oaXRlbSk7IH0pO1xuICAgICAgfVxuICAgICAgLy8gdXBkYXRlIGJyb3dzZXJJbmZvXG4gICAgICBsb2NhbFN0b3JhZ2VbJ3Ruc0FwcCddID0gYnJvd3NlckluZm87XG4gICAgfVxuICB9XG5cbiAgdmFyIENBTEMgPSB0bnNTdG9yYWdlWyd0QyddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEMnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RDJywgY2FsYygpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgUEVSQ0VOVEFHRUxBWU9VVCA9IHRuc1N0b3JhZ2VbJ3RQTCddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFBMJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0UEwnLCBwZXJjZW50YWdlTGF5b3V0KCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBDU1NNUSA9IHRuc1N0b3JhZ2VbJ3RNUSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndE1RJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0TVEnLCBtZWRpYXF1ZXJ5U3VwcG9ydCgpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgVFJBTlNGT1JNID0gdG5zU3RvcmFnZVsndFRmJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VGYnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RUZicsIHdoaWNoUHJvcGVydHkoJ3RyYW5zZm9ybScpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgSEFTM0RUUkFOU0ZPUk1TID0gdG5zU3RvcmFnZVsndDNEJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0M0QnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3QzRCcsIGhhczNEVHJhbnNmb3JtcyhUUkFOU0ZPUk0pLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgVFJBTlNJVElPTkRVUkFUSU9OID0gdG5zU3RvcmFnZVsndFREdSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFREdSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFREdScsIHdoaWNoUHJvcGVydHkoJ3RyYW5zaXRpb25EdXJhdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgVFJBTlNJVElPTkRFTEFZID0gdG5zU3RvcmFnZVsndFREZSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndFREZSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFREZScsIHdoaWNoUHJvcGVydHkoJ3RyYW5zaXRpb25EZWxheScpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgQU5JTUFUSU9ORFVSQVRJT04gPSB0bnNTdG9yYWdlWyd0QUR1J10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QUR1J10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0QUR1Jywgd2hpY2hQcm9wZXJ0eSgnYW5pbWF0aW9uRHVyYXRpb24nKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIEFOSU1BVElPTkRFTEFZID0gdG5zU3RvcmFnZVsndEFEZSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEFEZSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndEFEZScsIHdoaWNoUHJvcGVydHkoJ2FuaW1hdGlvbkRlbGF5JyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0lUSU9ORU5EID0gdG5zU3RvcmFnZVsndFRFJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VEUnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RURScsIGdldEVuZFByb3BlcnR5KFRSQU5TSVRJT05EVVJBVElPTiwgJ1RyYW5zaXRpb24nKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIEFOSU1BVElPTkVORCA9IHRuc1N0b3JhZ2VbJ3RBRSddID8gY2hlY2tTdG9yYWdlVmFsdWUodG5zU3RvcmFnZVsndEFFJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0QUUnLCBnZXRFbmRQcm9wZXJ0eShBTklNQVRJT05EVVJBVElPTiwgJ0FuaW1hdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpO1xuXG4gIC8vIGdldCBlbGVtZW50IG5vZGVzIGZyb20gc2VsZWN0b3JzXG4gIHZhciBzdXBwb3J0Q29uc29sZVdhcm4gPSB3aW4uY29uc29sZSAmJiB0eXBlb2Ygd2luLmNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiLFxuICAgICAgdG5zTGlzdCA9IFsnY29udGFpbmVyJywgJ2NvbnRyb2xzQ29udGFpbmVyJywgJ3ByZXZCdXR0b24nLCAnbmV4dEJ1dHRvbicsICduYXZDb250YWluZXInLCAnYXV0b3BsYXlCdXR0b24nXSxcbiAgICAgIG9wdGlvbnNFbGVtZW50cyA9IHt9O1xuXG4gIHRuc0xpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zW2l0ZW1dID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHN0ciA9IG9wdGlvbnNbaXRlbV0sXG4gICAgICAgICAgZWwgPSBkb2MucXVlcnlTZWxlY3RvcihzdHIpO1xuICAgICAgb3B0aW9uc0VsZW1lbnRzW2l0ZW1dID0gc3RyO1xuXG4gICAgICBpZiAoZWwgJiYgZWwubm9kZU5hbWUpIHtcbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IGVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ0NhblxcJ3QgZmluZCcsIG9wdGlvbnNbaXRlbV0pOyB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIG1ha2Ugc3VyZSBhdCBsZWFzdCAxIHNsaWRlXG4gIGlmIChvcHRpb25zLmNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPCAxKSB7XG4gICAgaWYgKHN1cHBvcnRDb25zb2xlV2FybikgeyBjb25zb2xlLndhcm4oJ05vIHNsaWRlcyBmb3VuZCBpbicsIG9wdGlvbnMuY29udGFpbmVyKTsgfVxuICAgIHJldHVybjtcbiAgIH1cblxuICAvLyB1cGRhdGUgb3B0aW9uc1xuICB2YXIgcmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSxcbiAgICAgIG5lc3RlZCA9IG9wdGlvbnMubmVzdGVkLFxuICAgICAgY2Fyb3VzZWwgPSBvcHRpb25zLm1vZGUgPT09ICdjYXJvdXNlbCcgPyB0cnVlIDogZmFsc2U7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAvLyBhcHBseSByZXNwb25zaXZlWzBdIHRvIG9wdGlvbnMgYW5kIHJlbW92ZSBpdFxuICAgIGlmICgwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgIG9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywgcmVzcG9uc2l2ZVswXSk7XG4gICAgICBkZWxldGUgcmVzcG9uc2l2ZVswXTtcbiAgICB9XG5cbiAgICB2YXIgcmVzcG9uc2l2ZVRlbSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiByZXNwb25zaXZlKSB7XG4gICAgICB2YXIgdmFsID0gcmVzcG9uc2l2ZVtrZXldO1xuICAgICAgLy8gdXBkYXRlIHJlc3BvbnNpdmVcbiAgICAgIC8vIGZyb206IDMwMDogMlxuICAgICAgLy8gdG86XG4gICAgICAvLyAgIDMwMDoge1xuICAgICAgLy8gICAgIGl0ZW1zOiAyXG4gICAgICAvLyAgIH1cbiAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICdudW1iZXInID8ge2l0ZW1zOiB2YWx9IDogdmFsO1xuICAgICAgcmVzcG9uc2l2ZVRlbVtrZXldID0gdmFsO1xuICAgIH1cbiAgICByZXNwb25zaXZlID0gcmVzcG9uc2l2ZVRlbTtcbiAgICByZXNwb25zaXZlVGVtID0gbnVsbDtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBvcHRpb25zXG4gIGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMgKG9iaikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3NsaWRlQnknKSB7IG9ialtrZXldID0gJ3BhZ2UnOyB9XG4gICAgICAgIGlmIChrZXkgPT09ICdlZGdlUGFkZGluZycpIHsgb2JqW2tleV0gPSBmYWxzZTsgfVxuICAgICAgICBpZiAoa2V5ID09PSAnYXV0b0hlaWdodCcpIHsgb2JqW2tleV0gPSBmYWxzZTsgfVxuICAgICAgfVxuXG4gICAgICAvLyB1cGRhdGUgcmVzcG9uc2l2ZSBvcHRpb25zXG4gICAgICBpZiAoa2V5ID09PSAncmVzcG9uc2l2ZScpIHsgdXBkYXRlT3B0aW9ucyhvYmpba2V5XSk7IH1cbiAgICB9XG4gIH1cbiAgaWYgKCFjYXJvdXNlbCkgeyB1cGRhdGVPcHRpb25zKG9wdGlvbnMpOyB9XG5cblxuICAvLyA9PT0gZGVmaW5lIGFuZCBzZXQgdmFyaWFibGVzID09PVxuICBpZiAoIWNhcm91c2VsKSB7XG4gICAgb3B0aW9ucy5heGlzID0gJ2hvcml6b250YWwnO1xuICAgIG9wdGlvbnMuc2xpZGVCeSA9ICdwYWdlJztcbiAgICBvcHRpb25zLmVkZ2VQYWRkaW5nID0gZmFsc2U7XG5cbiAgICB2YXIgYW5pbWF0ZUluID0gb3B0aW9ucy5hbmltYXRlSW4sXG4gICAgICAgIGFuaW1hdGVPdXQgPSBvcHRpb25zLmFuaW1hdGVPdXQsXG4gICAgICAgIGFuaW1hdGVEZWxheSA9IG9wdGlvbnMuYW5pbWF0ZURlbGF5LFxuICAgICAgICBhbmltYXRlTm9ybWFsID0gb3B0aW9ucy5hbmltYXRlTm9ybWFsO1xuICB9XG5cbiAgdmFyIGhvcml6b250YWwgPSBvcHRpb25zLmF4aXMgPT09ICdob3Jpem9udGFsJyA/IHRydWUgOiBmYWxzZSxcbiAgICAgIG91dGVyV3JhcHBlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGlubmVyV3JhcHBlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIG1pZGRsZVdyYXBwZXIsXG4gICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lclBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnROb2RlLFxuICAgICAgY29udGFpbmVySFRNTCA9IGNvbnRhaW5lci5vdXRlckhUTUwsXG4gICAgICBzbGlkZUl0ZW1zID0gY29udGFpbmVyLmNoaWxkcmVuLFxuICAgICAgc2xpZGVDb3VudCA9IHNsaWRlSXRlbXMubGVuZ3RoLFxuICAgICAgYnJlYWtwb2ludFpvbmUsXG4gICAgICB3aW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCksXG4gICAgICBpc09uID0gZmFsc2U7XG4gIGlmIChyZXNwb25zaXZlKSB7IHNldEJyZWFrcG9pbnRab25lKCk7IH1cbiAgaWYgKGNhcm91c2VsKSB7IGNvbnRhaW5lci5jbGFzc05hbWUgKz0gJyB0bnMtdnBmaXgnOyB9XG5cbiAgLy8gZml4ZWRXaWR0aDogdmlld3BvcnQgPiByaWdodEJvdW5kYXJ5ID4gaW5kZXhNYXhcbiAgdmFyIGF1dG9XaWR0aCA9IG9wdGlvbnMuYXV0b1dpZHRoLFxuICAgICAgZml4ZWRXaWR0aCA9IGdldE9wdGlvbignZml4ZWRXaWR0aCcpLFxuICAgICAgZWRnZVBhZGRpbmcgPSBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJyksXG4gICAgICBndXR0ZXIgPSBnZXRPcHRpb24oJ2d1dHRlcicpLFxuICAgICAgdmlld3BvcnQgPSBnZXRWaWV3cG9ydFdpZHRoKCksXG4gICAgICBjZW50ZXIgPSBnZXRPcHRpb24oJ2NlbnRlcicpLFxuICAgICAgaXRlbXMgPSAhYXV0b1dpZHRoID8gTWF0aC5mbG9vcihnZXRPcHRpb24oJ2l0ZW1zJykpIDogMSxcbiAgICAgIHNsaWRlQnkgPSBnZXRPcHRpb24oJ3NsaWRlQnknKSxcbiAgICAgIHZpZXdwb3J0TWF4ID0gb3B0aW9ucy52aWV3cG9ydE1heCB8fCBvcHRpb25zLmZpeGVkV2lkdGhWaWV3cG9ydFdpZHRoLFxuICAgICAgYXJyb3dLZXlzID0gZ2V0T3B0aW9uKCdhcnJvd0tleXMnKSxcbiAgICAgIHNwZWVkID0gZ2V0T3B0aW9uKCdzcGVlZCcpLFxuICAgICAgcmV3aW5kID0gb3B0aW9ucy5yZXdpbmQsXG4gICAgICBsb29wID0gcmV3aW5kID8gZmFsc2UgOiBvcHRpb25zLmxvb3AsXG4gICAgICBhdXRvSGVpZ2h0ID0gZ2V0T3B0aW9uKCdhdXRvSGVpZ2h0JyksXG4gICAgICBjb250cm9scyA9IGdldE9wdGlvbignY29udHJvbHMnKSxcbiAgICAgIGNvbnRyb2xzVGV4dCA9IGdldE9wdGlvbignY29udHJvbHNUZXh0JyksXG4gICAgICBuYXYgPSBnZXRPcHRpb24oJ25hdicpLFxuICAgICAgdG91Y2ggPSBnZXRPcHRpb24oJ3RvdWNoJyksXG4gICAgICBtb3VzZURyYWcgPSBnZXRPcHRpb24oJ21vdXNlRHJhZycpLFxuICAgICAgYXV0b3BsYXkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5JyksXG4gICAgICBhdXRvcGxheVRpbWVvdXQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGltZW91dCcpLFxuICAgICAgYXV0b3BsYXlUZXh0ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVRleHQnKSxcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZSA9IGdldE9wdGlvbignYXV0b3BsYXlIb3ZlclBhdXNlJyksXG4gICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5JyksXG4gICAgICBzaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQobnVsbCwgZ2V0T3B0aW9uKCdub25jZScpKSxcbiAgICAgIGxhenlsb2FkID0gb3B0aW9ucy5sYXp5bG9hZCxcbiAgICAgIGxhenlsb2FkU2VsZWN0b3IgPSBvcHRpb25zLmxhenlsb2FkU2VsZWN0b3IsXG4gICAgICBzbGlkZVBvc2l0aW9ucywgLy8gY29sbGVjdGlvbiBvZiBzbGlkZSBwb3NpdGlvbnNcbiAgICAgIHNsaWRlSXRlbXNPdXQgPSBbXSxcbiAgICAgIGNsb25lQ291bnQgPSBsb29wID8gZ2V0Q2xvbmVDb3VudEZvckxvb3AoKSA6IDAsXG4gICAgICBzbGlkZUNvdW50TmV3ID0gIWNhcm91c2VsID8gc2xpZGVDb3VudCArIGNsb25lQ291bnQgOiBzbGlkZUNvdW50ICsgY2xvbmVDb3VudCAqIDIsXG4gICAgICBoYXNSaWdodERlYWRab25lID0gKGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSAmJiAhbG9vcCA/IHRydWUgOiBmYWxzZSxcbiAgICAgIHJpZ2h0Qm91bmRhcnkgPSBmaXhlZFdpZHRoID8gZ2V0UmlnaHRCb3VuZGFyeSgpIDogbnVsbCxcbiAgICAgIHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtID0gKCFjYXJvdXNlbCB8fCAhbG9vcCkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAvLyB0cmFuc2Zvcm1cbiAgICAgIHRyYW5zZm9ybUF0dHIgPSBob3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCcsXG4gICAgICB0cmFuc2Zvcm1QcmVmaXggPSAnJyxcbiAgICAgIHRyYW5zZm9ybVBvc3RmaXggPSAnJyxcbiAgICAgIC8vIGluZGV4XG4gICAgICBnZXRJbmRleE1heCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gY2VudGVyICYmICFsb29wID8gc2xpZGVDb3VudCAtIDEgOiBNYXRoLmNlaWwoLSByaWdodEJvdW5kYXJ5IC8gKGZpeGVkV2lkdGggKyBndXR0ZXIpKTsgfTtcbiAgICAgICAgfSBlbHNlIGlmIChhdXRvV2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlQ291bnROZXc7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoc2xpZGVQb3NpdGlvbnNbaV0gPj0gLSByaWdodEJvdW5kYXJ5KSB7IHJldHVybiBpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoY2VudGVyICYmIGNhcm91c2VsICYmICFsb29wKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBsb29wIHx8IGNhcm91c2VsID8gTWF0aC5tYXgoMCwgc2xpZGVDb3VudE5ldyAtIE1hdGguY2VpbChpdGVtcykpIDogc2xpZGVDb3VudE5ldyAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICAgIGluZGV4ID0gZ2V0U3RhcnRJbmRleChnZXRPcHRpb24oJ3N0YXJ0SW5kZXgnKSksXG4gICAgICBpbmRleENhY2hlZCA9IGluZGV4LFxuICAgICAgZGlzcGxheUluZGV4ID0gZ2V0Q3VycmVudFNsaWRlKCksXG4gICAgICBpbmRleE1pbiA9IDAsXG4gICAgICBpbmRleE1heCA9ICFhdXRvV2lkdGggPyBnZXRJbmRleE1heCgpIDogbnVsbCxcbiAgICAgIC8vIHJlc2l6ZVxuICAgICAgcmVzaXplVGltZXIsXG4gICAgICBwcmV2ZW50QWN0aW9uV2hlblJ1bm5pbmcgPSBvcHRpb25zLnByZXZlbnRBY3Rpb25XaGVuUnVubmluZyxcbiAgICAgIHN3aXBlQW5nbGUgPSBvcHRpb25zLnN3aXBlQW5nbGUsXG4gICAgICBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgPSBzd2lwZUFuZ2xlID8gJz8nIDogdHJ1ZSxcbiAgICAgIHJ1bm5pbmcgPSBmYWxzZSxcbiAgICAgIG9uSW5pdCA9IG9wdGlvbnMub25Jbml0LFxuICAgICAgZXZlbnRzID0gbmV3IEV2ZW50cygpLFxuICAgICAgLy8gaWQsIGNsYXNzXG4gICAgICBuZXdDb250YWluZXJDbGFzc2VzID0gJyB0bnMtc2xpZGVyIHRucy0nICsgb3B0aW9ucy5tb2RlLFxuICAgICAgc2xpZGVJZCA9IGNvbnRhaW5lci5pZCB8fCBnZXRTbGlkZUlkKCksXG4gICAgICBkaXNhYmxlID0gZ2V0T3B0aW9uKCdkaXNhYmxlJyksXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgZnJlZXphYmxlID0gb3B0aW9ucy5mcmVlemFibGUsXG4gICAgICBmcmVlemUgPSBmcmVlemFibGUgJiYgIWF1dG9XaWR0aCA/IGdldEZyZWV6ZSgpIDogZmFsc2UsXG4gICAgICBmcm96ZW4gPSBmYWxzZSxcbiAgICAgIGNvbnRyb2xzRXZlbnRzID0ge1xuICAgICAgICAnY2xpY2snOiBvbkNvbnRyb2xzQ2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25Db250cm9sc0tleWRvd25cbiAgICAgIH0sXG4gICAgICBuYXZFdmVudHMgPSB7XG4gICAgICAgICdjbGljayc6IG9uTmF2Q2xpY2ssXG4gICAgICAgICdrZXlkb3duJzogb25OYXZLZXlkb3duXG4gICAgICB9LFxuICAgICAgaG92ZXJFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZW92ZXInOiBtb3VzZW92ZXJQYXVzZSxcbiAgICAgICAgJ21vdXNlb3V0JzogbW91c2VvdXRSZXN0YXJ0XG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eUV2ZW50ID0geyd2aXNpYmlsaXR5Y2hhbmdlJzogb25WaXNpYmlsaXR5Q2hhbmdlfSxcbiAgICAgIGRvY21lbnRLZXlkb3duRXZlbnQgPSB7J2tleWRvd24nOiBvbkRvY3VtZW50S2V5ZG93bn0sXG4gICAgICB0b3VjaEV2ZW50cyA9IHtcbiAgICAgICAgJ3RvdWNoc3RhcnQnOiBvblBhblN0YXJ0LFxuICAgICAgICAndG91Y2htb3ZlJzogb25QYW5Nb3ZlLFxuICAgICAgICAndG91Y2hlbmQnOiBvblBhbkVuZCxcbiAgICAgICAgJ3RvdWNoY2FuY2VsJzogb25QYW5FbmRcbiAgICAgIH0sIGRyYWdFdmVudHMgPSB7XG4gICAgICAgICdtb3VzZWRvd24nOiBvblBhblN0YXJ0LFxuICAgICAgICAnbW91c2Vtb3ZlJzogb25QYW5Nb3ZlLFxuICAgICAgICAnbW91c2V1cCc6IG9uUGFuRW5kLFxuICAgICAgICAnbW91c2VsZWF2ZSc6IG9uUGFuRW5kXG4gICAgICB9LFxuICAgICAgaGFzQ29udHJvbHMgPSBoYXNPcHRpb24oJ2NvbnRyb2xzJyksXG4gICAgICBoYXNOYXYgPSBoYXNPcHRpb24oJ25hdicpLFxuICAgICAgbmF2QXNUaHVtYm5haWxzID0gYXV0b1dpZHRoID8gdHJ1ZSA6IG9wdGlvbnMubmF2QXNUaHVtYm5haWxzLFxuICAgICAgaGFzQXV0b3BsYXkgPSBoYXNPcHRpb24oJ2F1dG9wbGF5JyksXG4gICAgICBoYXNUb3VjaCA9IGhhc09wdGlvbigndG91Y2gnKSxcbiAgICAgIGhhc01vdXNlRHJhZyA9IGhhc09wdGlvbignbW91c2VEcmFnJyksXG4gICAgICBzbGlkZUFjdGl2ZUNsYXNzID0gJ3Rucy1zbGlkZS1hY3RpdmUnLFxuICAgICAgc2xpZGVDbG9uZWRDbGFzcyA9ICd0bnMtc2xpZGUtY2xvbmVkJyxcbiAgICAgIGltZ0NvbXBsZXRlQ2xhc3MgPSAndG5zLWNvbXBsZXRlJyxcbiAgICAgIGltZ0V2ZW50cyA9IHtcbiAgICAgICAgJ2xvYWQnOiBvbkltZ0xvYWRlZCxcbiAgICAgICAgJ2Vycm9yJzogb25JbWdGYWlsZWRcbiAgICAgIH0sXG4gICAgICBpbWdzQ29tcGxldGUsXG4gICAgICBsaXZlcmVnaW9uQ3VycmVudCxcbiAgICAgIHByZXZlbnRTY3JvbGwgPSBvcHRpb25zLnByZXZlbnRTY3JvbGxPblRvdWNoID09PSAnZm9yY2UnID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIC8vIGNvbnRyb2xzXG4gIGlmIChoYXNDb250cm9scykge1xuICAgIHZhciBjb250cm9sc0NvbnRhaW5lciA9IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIsXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVySFRNTCA9IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIgPyBvcHRpb25zLmNvbnRyb2xzQ29udGFpbmVyLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBwcmV2QnV0dG9uID0gb3B0aW9ucy5wcmV2QnV0dG9uLFxuICAgICAgICBuZXh0QnV0dG9uID0gb3B0aW9ucy5uZXh0QnV0dG9uLFxuICAgICAgICBwcmV2QnV0dG9uSFRNTCA9IG9wdGlvbnMucHJldkJ1dHRvbiA/IG9wdGlvbnMucHJldkJ1dHRvbi5vdXRlckhUTUwgOiAnJyxcbiAgICAgICAgbmV4dEJ1dHRvbkhUTUwgPSBvcHRpb25zLm5leHRCdXR0b24gPyBvcHRpb25zLm5leHRCdXR0b24ub3V0ZXJIVE1MIDogJycsXG4gICAgICAgIHByZXZJc0J1dHRvbixcbiAgICAgICAgbmV4dElzQnV0dG9uO1xuICB9XG5cbiAgLy8gbmF2XG4gIGlmIChoYXNOYXYpIHtcbiAgICB2YXIgbmF2Q29udGFpbmVyID0gb3B0aW9ucy5uYXZDb250YWluZXIsXG4gICAgICAgIG5hdkNvbnRhaW5lckhUTUwgPSBvcHRpb25zLm5hdkNvbnRhaW5lciA/IG9wdGlvbnMubmF2Q29udGFpbmVyLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBuYXZJdGVtcyxcbiAgICAgICAgcGFnZXMgPSBhdXRvV2lkdGggPyBzbGlkZUNvdW50IDogZ2V0UGFnZXMoKSxcbiAgICAgICAgcGFnZXNDYWNoZWQgPSAwLFxuICAgICAgICBuYXZDbGlja2VkID0gLTEsXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnROYXZJbmRleCgpLFxuICAgICAgICBuYXZDdXJyZW50SW5kZXhDYWNoZWQgPSBuYXZDdXJyZW50SW5kZXgsXG4gICAgICAgIG5hdkFjdGl2ZUNsYXNzID0gJ3Rucy1uYXYtYWN0aXZlJyxcbiAgICAgICAgbmF2U3RyID0gJ0Nhcm91c2VsIFBhZ2UgJyxcbiAgICAgICAgbmF2U3RyQ3VycmVudCA9ICcgKEN1cnJlbnQgU2xpZGUpJztcbiAgfVxuXG4gIC8vIGF1dG9wbGF5XG4gIGlmIChoYXNBdXRvcGxheSkge1xuICAgIHZhciBhdXRvcGxheURpcmVjdGlvbiA9IG9wdGlvbnMuYXV0b3BsYXlEaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IDEgOiAtMSxcbiAgICAgICAgYXV0b3BsYXlCdXR0b24gPSBvcHRpb25zLmF1dG9wbGF5QnV0dG9uLFxuICAgICAgICBhdXRvcGxheUJ1dHRvbkhUTUwgPSBvcHRpb25zLmF1dG9wbGF5QnV0dG9uID8gb3B0aW9ucy5hdXRvcGxheUJ1dHRvbi5vdXRlckhUTUwgOiAnJyxcbiAgICAgICAgYXV0b3BsYXlIdG1sU3RyaW5ncyA9IFsnPHNwYW4gY2xhc3M9XFwndG5zLXZpc3VhbGx5LWhpZGRlblxcJz4nLCAnIGFuaW1hdGlvbjwvc3Bhbj4nXSxcbiAgICAgICAgYXV0b3BsYXlUaW1lcixcbiAgICAgICAgYW5pbWF0aW5nLFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2VkLFxuICAgICAgICBhdXRvcGxheVVzZXJQYXVzZWQsXG4gICAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZDtcbiAgfVxuXG4gIGlmIChoYXNUb3VjaCB8fCBoYXNNb3VzZURyYWcpIHtcbiAgICB2YXIgaW5pdFBvc2l0aW9uID0ge30sXG4gICAgICAgIGxhc3RQb3NpdGlvbiA9IHt9LFxuICAgICAgICB0cmFuc2xhdGVJbml0LFxuICAgICAgICBkaXNYLFxuICAgICAgICBkaXNZLFxuICAgICAgICBwYW5TdGFydCA9IGZhbHNlLFxuICAgICAgICByYWZJbmRleCxcbiAgICAgICAgZ2V0RGlzdCA9IGhvcml6b250YWwgP1xuICAgICAgICAgIGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEueCAtIGIueDsgfSA6XG4gICAgICAgICAgZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYS55IC0gYi55OyB9O1xuICB9XG5cbiAgLy8gZGlzYWJsZSBzbGlkZXIgd2hlbiBzbGlkZWNvdW50IDw9IGl0ZW1zXG4gIGlmICghYXV0b1dpZHRoKSB7IHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlIHx8IGZyZWV6ZSk7IH1cblxuICBpZiAoVFJBTlNGT1JNKSB7XG4gICAgdHJhbnNmb3JtQXR0ciA9IFRSQU5TRk9STTtcbiAgICB0cmFuc2Zvcm1QcmVmaXggPSAndHJhbnNsYXRlJztcblxuICAgIGlmIChIQVMzRFRSQU5TRk9STVMpIHtcbiAgICAgIHRyYW5zZm9ybVByZWZpeCArPSBob3Jpem9udGFsID8gJzNkKCcgOiAnM2QoMHB4LCAnO1xuICAgICAgdHJhbnNmb3JtUG9zdGZpeCA9IGhvcml6b250YWwgPyAnLCAwcHgsIDBweCknIDogJywgMHB4KSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybVByZWZpeCArPSBob3Jpem9udGFsID8gJ1goJyA6ICdZKCc7XG4gICAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gJyknO1xuICAgIH1cblxuICB9XG5cbiAgaWYgKGNhcm91c2VsKSB7IGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2UoJ3Rucy12cGZpeCcsICcnKTsgfVxuICBpbml0U3RydWN0dXJlKCk7XG4gIGluaXRTaGVldCgpO1xuICBpbml0U2xpZGVyVHJhbnNmb3JtKCk7XG5cbiAgLy8gPT09IENPTU1PTiBGVU5DVElPTlMgPT09IC8vXG4gIGZ1bmN0aW9uIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZSAoY29uZGl0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgY29udHJvbHMgPSBuYXYgPSB0b3VjaCA9IG1vdXNlRHJhZyA9IGFycm93S2V5cyA9IGF1dG9wbGF5ID0gYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZSAoKSB7XG4gICAgdmFyIHRlbSA9IGNhcm91c2VsID8gaW5kZXggLSBjbG9uZUNvdW50IDogaW5kZXg7XG4gICAgd2hpbGUgKHRlbSA8IDApIHsgdGVtICs9IHNsaWRlQ291bnQ7IH1cbiAgICByZXR1cm4gdGVtJXNsaWRlQ291bnQgKyAxO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RhcnRJbmRleCAoaW5kKSB7XG4gICAgaW5kID0gaW5kID8gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9vcCA/IHNsaWRlQ291bnQgLSAxIDogc2xpZGVDb3VudCAtIGl0ZW1zLCBpbmQpKSA6IDA7XG4gICAgcmV0dXJuIGNhcm91c2VsID8gaW5kICsgY2xvbmVDb3VudCA6IGluZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFic0luZGV4IChpKSB7XG4gICAgaWYgKGkgPT0gbnVsbCkgeyBpID0gaW5kZXg7IH1cblxuICAgIGlmIChjYXJvdXNlbCkgeyBpIC09IGNsb25lQ291bnQ7IH1cbiAgICB3aGlsZSAoaSA8IDApIHsgaSArPSBzbGlkZUNvdW50OyB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihpJXNsaWRlQ291bnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudE5hdkluZGV4ICgpIHtcbiAgICB2YXIgYWJzSW5kZXggPSBnZXRBYnNJbmRleCgpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICByZXN1bHQgPSBuYXZBc1RodW1ibmFpbHMgPyBhYnNJbmRleCA6XG4gICAgICBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCA/IE1hdGguY2VpbCgoYWJzSW5kZXggKyAxKSAqIHBhZ2VzIC8gc2xpZGVDb3VudCAtIDEpIDpcbiAgICAgICAgICBNYXRoLmZsb29yKGFic0luZGV4IC8gaXRlbXMpO1xuXG4gICAgLy8gc2V0IGFjdGl2ZSBuYXYgdG8gdGhlIGxhc3Qgb25lIHdoZW4gcmVhY2hlcyB0aGUgcmlnaHQgZWRnZVxuICAgIGlmICghbG9vcCAmJiBjYXJvdXNlbCAmJiBpbmRleCA9PT0gaW5kZXhNYXgpIHsgcmVzdWx0ID0gcGFnZXMgLSAxOyB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXRlbXNNYXggKCkge1xuICAgIC8vIGZpeGVkV2lkdGggb3IgYXV0b1dpZHRoIHdoaWxlIHZpZXdwb3J0TWF4IGlzIG5vdCBhdmFpbGFibGVcbiAgICBpZiAoYXV0b1dpZHRoIHx8IChmaXhlZFdpZHRoICYmICF2aWV3cG9ydE1heCkpIHtcbiAgICAgIHJldHVybiBzbGlkZUNvdW50IC0gMTtcbiAgICAvLyBtb3N0IGNhc2VzXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdHIgPSBmaXhlZFdpZHRoID8gJ2ZpeGVkV2lkdGgnIDogJ2l0ZW1zJyxcbiAgICAgICAgICBhcnIgPSBbXTtcblxuICAgICAgaWYgKGZpeGVkV2lkdGggfHwgb3B0aW9uc1tzdHJdIDwgc2xpZGVDb3VudCkgeyBhcnIucHVzaChvcHRpb25zW3N0cl0pOyB9XG5cbiAgICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgICAgICB2YXIgdGVtID0gcmVzcG9uc2l2ZVticF1bc3RyXTtcbiAgICAgICAgICBpZiAodGVtICYmIChmaXhlZFdpZHRoIHx8IHRlbSA8IHNsaWRlQ291bnQpKSB7IGFyci5wdXNoKHRlbSk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFyci5sZW5ndGgpIHsgYXJyLnB1c2goMCk7IH1cblxuICAgICAgcmV0dXJuIE1hdGguY2VpbChmaXhlZFdpZHRoID8gdmlld3BvcnRNYXggLyBNYXRoLm1pbi5hcHBseShudWxsLCBhcnIpIDogTWF0aC5tYXguYXBwbHkobnVsbCwgYXJyKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xvbmVDb3VudEZvckxvb3AgKCkge1xuICAgIHZhciBpdGVtc01heCA9IGdldEl0ZW1zTWF4KCksXG4gICAgICAgIHJlc3VsdCA9IGNhcm91c2VsID8gTWF0aC5jZWlsKChpdGVtc01heCAqIDUgLSBzbGlkZUNvdW50KS8yKSA6IChpdGVtc01heCAqIDQgLSBzbGlkZUNvdW50KTtcbiAgICByZXN1bHQgPSBNYXRoLm1heChpdGVtc01heCwgcmVzdWx0KTtcblxuICAgIHJldHVybiBoYXNPcHRpb24oJ2VkZ2VQYWRkaW5nJykgPyByZXN1bHQgKyAxIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93V2lkdGggKCkge1xuICAgIHJldHVybiB3aW4uaW5uZXJXaWR0aCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvYy5ib2R5LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5zZXJ0UG9zaXRpb24gKHBvcykge1xuICAgIHJldHVybiBwb3MgPT09ICd0b3AnID8gJ2FmdGVyYmVnaW4nIDogJ2JlZm9yZWVuZCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGllbnRXaWR0aCAoZWwpIHtcbiAgICBpZiAoZWwgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICB2YXIgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCByZWN0LCB3aWR0aDtcbiAgICBlbC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJlY3QgPSBkaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgd2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICAgIGRpdi5yZW1vdmUoKTtcbiAgICByZXR1cm4gd2lkdGggfHwgZ2V0Q2xpZW50V2lkdGgoZWwucGFyZW50Tm9kZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaWV3cG9ydFdpZHRoICgpIHtcbiAgICB2YXIgZ2FwID0gZWRnZVBhZGRpbmcgPyBlZGdlUGFkZGluZyAqIDIgLSBndXR0ZXIgOiAwO1xuICAgIHJldHVybiBnZXRDbGllbnRXaWR0aChjb250YWluZXJQYXJlbnQpIC0gZ2FwO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzT3B0aW9uIChpdGVtKSB7XG4gICAgaWYgKG9wdGlvbnNbaXRlbV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzcG9uc2l2ZSkge1xuICAgICAgICBmb3IgKHZhciBicCBpbiByZXNwb25zaXZlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNpdmVbYnBdW2l0ZW1dKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBnZXQgb3B0aW9uOlxuICAvLyBmaXhlZCB3aWR0aDogdmlld3BvcnQsIGZpeGVkV2lkdGgsIGd1dHRlciA9PiBpdGVtc1xuICAvLyBvdGhlcnM6IHdpbmRvdyB3aWR0aCA9PiBhbGwgdmFyaWFibGVzXG4gIC8vIGFsbDogaXRlbXMgPT4gc2xpZGVCeVxuICBmdW5jdGlvbiBnZXRPcHRpb24gKGl0ZW0sIHd3KSB7XG4gICAgaWYgKHd3ID09IG51bGwpIHsgd3cgPSB3aW5kb3dXaWR0aDsgfVxuXG4gICAgaWYgKGl0ZW0gPT09ICdpdGVtcycgJiYgZml4ZWRXaWR0aCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHZpZXdwb3J0ICsgZ3V0dGVyKSAvIChmaXhlZFdpZHRoICsgZ3V0dGVyKSkgfHwgMTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0ID0gb3B0aW9uc1tpdGVtXTtcblxuICAgICAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgICAgZm9yICh2YXIgYnAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgICAgIC8vIGJwOiBjb252ZXJ0IHN0cmluZyB0byBudW1iZXJcbiAgICAgICAgICBpZiAod3cgPj0gcGFyc2VJbnQoYnApKSB7XG4gICAgICAgICAgICBpZiAoaXRlbSBpbiByZXNwb25zaXZlW2JwXSkgeyByZXN1bHQgPSByZXNwb25zaXZlW2JwXVtpdGVtXTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbSA9PT0gJ3NsaWRlQnknICYmIHJlc3VsdCA9PT0gJ3BhZ2UnKSB7IHJlc3VsdCA9IGdldE9wdGlvbignaXRlbXMnKTsgfVxuICAgICAgaWYgKCFjYXJvdXNlbCAmJiAoaXRlbSA9PT0gJ3NsaWRlQnknIHx8IGl0ZW0gPT09ICdpdGVtcycpKSB7IHJlc3VsdCA9IE1hdGguZmxvb3IocmVzdWx0KTsgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNsaWRlTWFyZ2luTGVmdCAoaSkge1xuICAgIHJldHVybiBDQUxDID9cbiAgICAgIENBTEMgKyAnKCcgKyBpICogMTAwICsgJyUgLyAnICsgc2xpZGVDb3VudE5ldyArICcpJyA6XG4gICAgICBpICogMTAwIC8gc2xpZGVDb3VudE5ldyArICclJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElubmVyV3JhcHBlclN0eWxlcyAoZWRnZVBhZGRpbmdUZW0sIGd1dHRlclRlbSwgZml4ZWRXaWR0aFRlbSwgc3BlZWRUZW0sIGF1dG9IZWlnaHRCUCkge1xuICAgIHZhciBzdHIgPSAnJztcblxuICAgIGlmIChlZGdlUGFkZGluZ1RlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZ2FwID0gZWRnZVBhZGRpbmdUZW07XG4gICAgICBpZiAoZ3V0dGVyVGVtKSB7IGdhcCAtPSBndXR0ZXJUZW07IH1cbiAgICAgIHN0ciA9IGhvcml6b250YWwgP1xuICAgICAgICAnbWFyZ2luOiAwICcgKyBnYXAgKyAncHggMCAnICsgZWRnZVBhZGRpbmdUZW0gKyAncHg7JyA6XG4gICAgICAgICdtYXJnaW46ICcgKyBlZGdlUGFkZGluZ1RlbSArICdweCAwICcgKyBnYXAgKyAncHggMDsnO1xuICAgIH0gZWxzZSBpZiAoZ3V0dGVyVGVtICYmICFmaXhlZFdpZHRoVGVtKSB7XG4gICAgICB2YXIgZ3V0dGVyVGVtVW5pdCA9ICctJyArIGd1dHRlclRlbSArICdweCcsXG4gICAgICAgICAgZGlyID0gaG9yaXpvbnRhbCA/IGd1dHRlclRlbVVuaXQgKyAnIDAgMCcgOiAnMCAnICsgZ3V0dGVyVGVtVW5pdCArICcgMCc7XG4gICAgICBzdHIgPSAnbWFyZ2luOiAwICcgKyBkaXIgKyAnOydcbiAgICB9XG5cbiAgICBpZiAoIWNhcm91c2VsICYmIGF1dG9IZWlnaHRCUCAmJiBUUkFOU0lUSU9ORFVSQVRJT04gJiYgc3BlZWRUZW0pIHsgc3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkVGVtKTsgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250YWluZXJXaWR0aCAoZml4ZWRXaWR0aFRlbSwgZ3V0dGVyVGVtLCBpdGVtc1RlbSkge1xuICAgIGlmIChmaXhlZFdpZHRoVGVtKSB7XG4gICAgICByZXR1cm4gKGZpeGVkV2lkdGhUZW0gKyBndXR0ZXJUZW0pICogc2xpZGVDb3VudE5ldyArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDQUxDID9cbiAgICAgICAgQ0FMQyArICcoJyArIHNsaWRlQ291bnROZXcgKiAxMDAgKyAnJSAvICcgKyBpdGVtc1RlbSArICcpJyA6XG4gICAgICAgIHNsaWRlQ291bnROZXcgKiAxMDAgLyBpdGVtc1RlbSArICclJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbGlkZVdpZHRoU3R5bGUgKGZpeGVkV2lkdGhUZW0sIGd1dHRlclRlbSwgaXRlbXNUZW0pIHtcbiAgICB2YXIgd2lkdGg7XG5cbiAgICBpZiAoZml4ZWRXaWR0aFRlbSkge1xuICAgICAgd2lkdGggPSAoZml4ZWRXaWR0aFRlbSArIGd1dHRlclRlbSkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNhcm91c2VsKSB7IGl0ZW1zVGVtID0gTWF0aC5mbG9vcihpdGVtc1RlbSk7IH1cbiAgICAgIHZhciBkaXZpZGVuZCA9IGNhcm91c2VsID8gc2xpZGVDb3VudE5ldyA6IGl0ZW1zVGVtO1xuICAgICAgd2lkdGggPSBDQUxDID9cbiAgICAgICAgQ0FMQyArICcoMTAwJSAvICcgKyBkaXZpZGVuZCArICcpJyA6XG4gICAgICAgIDEwMCAvIGRpdmlkZW5kICsgJyUnO1xuICAgIH1cblxuICAgIHdpZHRoID0gJ3dpZHRoOicgKyB3aWR0aDtcblxuICAgIC8vIGlubmVyIHNsaWRlcjogb3ZlcndyaXRlIG91dGVyIHNsaWRlciBzdHlsZXNcbiAgICByZXR1cm4gbmVzdGVkICE9PSAnaW5uZXInID8gd2lkdGggKyAnOycgOiB3aWR0aCArICcgIWltcG9ydGFudDsnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVHdXR0ZXJTdHlsZSAoZ3V0dGVyVGVtKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgLy8gZ3V0dGVyIG1heWJlIGludGVyZ2VyIHx8IDBcbiAgICAvLyBzbyBjYW4ndCB1c2UgJ2lmIChndXR0ZXIpJ1xuICAgIGlmIChndXR0ZXJUZW0gIT09IGZhbHNlKSB7XG4gICAgICB2YXIgcHJvcCA9IGhvcml6b250YWwgPyAncGFkZGluZy0nIDogJ21hcmdpbi0nLFxuICAgICAgICAgIGRpciA9IGhvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gICAgICBzdHIgPSBwcm9wICsgIGRpciArICc6ICcgKyBndXR0ZXJUZW0gKyAncHg7JztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q1NTUHJlZml4IChuYW1lLCBudW0pIHtcbiAgICB2YXIgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggLSBudW0pLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHByZWZpeCkgeyBwcmVmaXggPSAnLScgKyBwcmVmaXggKyAnLSc7IH1cblxuICAgIHJldHVybiBwcmVmaXg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZSAoc3BlZWQpIHtcbiAgICByZXR1cm4gZ2V0Q1NTUHJlZml4KFRSQU5TSVRJT05EVVJBVElPTiwgMTgpICsgJ3RyYW5zaXRpb24tZHVyYXRpb246JyArIHNwZWVkIC8gMTAwMCArICdzOyc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBbmltYXRpb25EdXJhdGlvblN0eWxlIChzcGVlZCkge1xuICAgIHJldHVybiBnZXRDU1NQcmVmaXgoQU5JTUFUSU9ORFVSQVRJT04sIDE3KSArICdhbmltYXRpb24tZHVyYXRpb246JyArIHNwZWVkIC8gMTAwMCArICdzOyc7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U3RydWN0dXJlICgpIHtcbiAgICB2YXIgY2xhc3NPdXRlciA9ICd0bnMtb3V0ZXInLFxuICAgICAgICBjbGFzc0lubmVyID0gJ3Rucy1pbm5lcicsXG4gICAgICAgIGhhc0d1dHRlciA9IGhhc09wdGlvbignZ3V0dGVyJyk7XG5cbiAgICBvdXRlcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NPdXRlcjtcbiAgICBpbm5lcldyYXBwZXIuY2xhc3NOYW1lID0gY2xhc3NJbm5lcjtcbiAgICBvdXRlcldyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1vdyc7XG4gICAgaW5uZXJXcmFwcGVyLmlkID0gc2xpZGVJZCArICctaXcnO1xuXG4gICAgLy8gc2V0IGNvbnRhaW5lciBwcm9wZXJ0aWVzXG4gICAgaWYgKGNvbnRhaW5lci5pZCA9PT0gJycpIHsgY29udGFpbmVyLmlkID0gc2xpZGVJZDsgfVxuICAgIG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gUEVSQ0VOVEFHRUxBWU9VVCB8fCBhdXRvV2lkdGggPyAnIHRucy1zdWJwaXhlbCcgOiAnIHRucy1uby1zdWJwaXhlbCc7XG4gICAgbmV3Q29udGFpbmVyQ2xhc3NlcyArPSBDQUxDID8gJyB0bnMtY2FsYycgOiAnIHRucy1uby1jYWxjJztcbiAgICBpZiAoYXV0b1dpZHRoKSB7IG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gJyB0bnMtYXV0b3dpZHRoJzsgfVxuICAgIG5ld0NvbnRhaW5lckNsYXNzZXMgKz0gJyB0bnMtJyArIG9wdGlvbnMuYXhpcztcbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IG5ld0NvbnRhaW5lckNsYXNzZXM7XG5cbiAgICAvLyBhZGQgY29uc3RyYWluIGxheWVyIGZvciBjYXJvdXNlbFxuICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgbWlkZGxlV3JhcHBlciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1pZGRsZVdyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1tdyc7XG4gICAgICBtaWRkbGVXcmFwcGVyLmNsYXNzTmFtZSA9ICd0bnMtb3ZoJztcblxuICAgICAgb3V0ZXJXcmFwcGVyLmFwcGVuZENoaWxkKG1pZGRsZVdyYXBwZXIpO1xuICAgICAgbWlkZGxlV3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcldyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgdmFyIHdwID0gbWlkZGxlV3JhcHBlciA/IG1pZGRsZVdyYXBwZXIgOiBpbm5lcldyYXBwZXI7XG4gICAgICB3cC5jbGFzc05hbWUgKz0gJyB0bnMtYWgnO1xuICAgIH1cblxuICAgIGNvbnRhaW5lclBhcmVudC5pbnNlcnRCZWZvcmUob3V0ZXJXcmFwcGVyLCBjb250YWluZXIpO1xuICAgIGlubmVyV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gYWRkIGlkLCBjbGFzcywgYXJpYSBhdHRyaWJ1dGVzXG4gICAgLy8gYmVmb3JlIGNsb25lIHNsaWRlc1xuICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgYWRkQ2xhc3MoaXRlbSwgJ3Rucy1pdGVtJyk7XG4gICAgICBpZiAoIWl0ZW0uaWQpIHsgaXRlbS5pZCA9IHNsaWRlSWQgKyAnLWl0ZW0nICsgaTsgfVxuICAgICAgaWYgKCFjYXJvdXNlbCAmJiBhbmltYXRlTm9ybWFsKSB7IGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpOyB9XG4gICAgICBzZXRBdHRycyhpdGVtLCB7XG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyAjIyBjbG9uZSBzbGlkZXNcbiAgICAvLyBjYXJvdXNlbDogbiArIHNsaWRlcyArIG5cbiAgICAvLyBnYWxsZXJ5OiAgICAgIHNsaWRlcyArIG5cbiAgICBpZiAoY2xvbmVDb3VudCkge1xuICAgICAgdmFyIGZyYWdtZW50QmVmb3JlID0gZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICBmcmFnbWVudEFmdGVyID0gZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgdmFyIG51bSA9IGolc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGNsb25lRmlyc3QgPSBzbGlkZUl0ZW1zW251bV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBhZGRDbGFzcyhjbG9uZUZpcnN0LCBzbGlkZUNsb25lZENsYXNzKTtcbiAgICAgICAgcmVtb3ZlQXR0cnMoY2xvbmVGaXJzdCwgJ2lkJyk7XG4gICAgICAgIGZyYWdtZW50QWZ0ZXIuaW5zZXJ0QmVmb3JlKGNsb25lRmlyc3QsIGZyYWdtZW50QWZ0ZXIuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgICAgdmFyIGNsb25lTGFzdCA9IHNsaWRlSXRlbXNbc2xpZGVDb3VudCAtIDEgLSBudW1dLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICBhZGRDbGFzcyhjbG9uZUxhc3QsIHNsaWRlQ2xvbmVkQ2xhc3MpO1xuICAgICAgICAgIHJlbW92ZUF0dHJzKGNsb25lTGFzdCwgJ2lkJyk7XG4gICAgICAgICAgZnJhZ21lbnRCZWZvcmUuYXBwZW5kQ2hpbGQoY2xvbmVMYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGZyYWdtZW50QmVmb3JlLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnRBZnRlcik7XG4gICAgICBzbGlkZUl0ZW1zID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNsaWRlclRyYW5zZm9ybSAoKSB7XG4gICAgLy8gIyMgaW1hZ2VzIGxvYWRlZC9mYWlsZWRcbiAgICBpZiAoaGFzT3B0aW9uKCdhdXRvSGVpZ2h0JykgfHwgYXV0b1dpZHRoIHx8ICFob3Jpem9udGFsKSB7XG4gICAgICB2YXIgaW1ncyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcblxuICAgICAgLy8gYWRkIGltZyBsb2FkIGV2ZW50IGxpc3RlbmVyXG4gICAgICBmb3JFYWNoKGltZ3MsIGZ1bmN0aW9uKGltZykge1xuICAgICAgICB2YXIgc3JjID0gaW1nLnNyYztcblxuICAgICAgICBpZiAoIWxhenlsb2FkKSB7XG4gICAgICAgICAgLy8gbm90IGRhdGEgaW1nXG4gICAgICAgICAgaWYgKHNyYyAmJiBzcmMuaW5kZXhPZignZGF0YTppbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgaW1nLnNyYyA9ICcnO1xuICAgICAgICAgICAgYWRkRXZlbnRzKGltZywgaW1nRXZlbnRzKTtcbiAgICAgICAgICAgIGFkZENsYXNzKGltZywgJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgICAvLyBkYXRhIGltZ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWdMb2FkZWQoaW1nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgaW1nc0NvbXBsZXRlXG4gICAgICByYWYoZnVuY3Rpb24oKXsgaW1nc0xvYWRlZENoZWNrKGFycmF5RnJvbU5vZGVMaXN0KGltZ3MpLCBmdW5jdGlvbigpIHsgaW1nc0NvbXBsZXRlID0gdHJ1ZTsgfSk7IH0pO1xuXG4gICAgICAvLyByZXNldCBpbWdzIGZvciBhdXRvIGhlaWdodDogY2hlY2sgdmlzaWJsZSBpbWdzIG9ubHlcbiAgICAgIGlmIChoYXNPcHRpb24oJ2F1dG9IZWlnaHQnKSkgeyBpbWdzID0gZ2V0SW1hZ2VBcnJheShpbmRleCwgTWF0aC5taW4oaW5kZXggKyBpdGVtcyAtIDEsIHNsaWRlQ291bnROZXcgLSAxKSk7IH1cblxuICAgICAgbGF6eWxvYWQgPyBpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjaygpIDogcmFmKGZ1bmN0aW9uKCl7IGltZ3NMb2FkZWRDaGVjayhhcnJheUZyb21Ob2RlTGlzdChpbWdzKSwgaW5pdFNsaWRlclRyYW5zZm9ybVN0eWxlQ2hlY2spOyB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgY29udGFpbmVyIHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgICAgaWYgKGNhcm91c2VsKSB7IGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7IH1cblxuICAgICAgLy8gdXBkYXRlIHNsaWRlciB0b29scyBhbmQgZXZlbnRzXG4gICAgICBpbml0VG9vbHMoKTtcbiAgICAgIGluaXRFdmVudHMoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjayAoKSB7XG4gICAgaWYgKGF1dG9XaWR0aCAmJiBzbGlkZUNvdW50ID4gMSkge1xuICAgICAgLy8gY2hlY2sgc3R5bGVzIGFwcGxpY2F0aW9uXG4gICAgICB2YXIgbnVtID0gbG9vcCA/IGluZGV4IDogc2xpZGVDb3VudCAtIDE7XG5cbiAgICAgIChmdW5jdGlvbiBzdHlsZXNBcHBsaWNhdGlvbkNoZWNrKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHNsaWRlSXRlbXNbbnVtXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB2YXIgcmlnaHQgPSBzbGlkZUl0ZW1zW251bSAtIDFdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0O1xuXG4gICAgICAgIChNYXRoLmFicyhsZWZ0IC0gcmlnaHQpIDw9IDEpID9cbiAgICAgICAgICBpbml0U2xpZGVyVHJhbnNmb3JtQ29yZSgpIDpcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IHN0eWxlc0FwcGxpY2F0aW9uQ2hlY2soKSB9LCAxNik7XG4gICAgICB9KSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRTbGlkZXJUcmFuc2Zvcm1Db3JlKCk7XG4gICAgfVxuICB9XG5cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtQ29yZSAoKSB7XG4gICAgLy8gcnVuIEZuKClzIHdoaWNoIGFyZSByZWx5IG9uIGltYWdlIGxvYWRpbmdcbiAgICBpZiAoIWhvcml6b250YWwgfHwgYXV0b1dpZHRoKSB7XG4gICAgICBzZXRTbGlkZVBvc2l0aW9ucygpO1xuXG4gICAgICBpZiAoYXV0b1dpZHRoKSB7XG4gICAgICAgIHJpZ2h0Qm91bmRhcnkgPSBnZXRSaWdodEJvdW5kYXJ5KCk7XG4gICAgICAgIGlmIChmcmVlemFibGUpIHsgZnJlZXplID0gZ2V0RnJlZXplKCk7IH1cbiAgICAgICAgaW5kZXhNYXggPSBnZXRJbmRleE1heCgpOyAvLyA8PSBzbGlkZVBvc2l0aW9ucywgcmlnaHRCb3VuZGFyeSA8PVxuICAgICAgICByZXNldFZhcmlibGVzV2hlbkRpc2FibGUoZGlzYWJsZSB8fCBmcmVlemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ29udGVudFdyYXBwZXJIZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXQgY29udGFpbmVyIHRyYW5zZm9ybSBwcm9wZXJ0eVxuICAgIGlmIChjYXJvdXNlbCkgeyBkb0NvbnRhaW5lclRyYW5zZm9ybVNpbGVudCgpOyB9XG5cbiAgICAvLyB1cGRhdGUgc2xpZGVyIHRvb2xzIGFuZCBldmVudHNcbiAgICBpbml0VG9vbHMoKTtcbiAgICBpbml0RXZlbnRzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2hlZXQgKCkge1xuICAgIC8vIGdhbGxlcnk6XG4gICAgLy8gc2V0IGFuaW1hdGlvbiBjbGFzc2VzIGFuZCBsZWZ0IHZhbHVlIGZvciBnYWxsZXJ5IHNsaWRlclxuICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgIGZvciAodmFyIGkgPSBpbmRleCwgbCA9IGluZGV4ICsgTWF0aC5taW4oc2xpZGVDb3VudCwgaXRlbXMpOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZUluKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gIyMjIyBMQVlPVVRcblxuICAgIC8vICMjIElOTElORS1CTE9DSyBWUyBGTE9BVFxuXG4gICAgLy8gIyMgUGVyY2VudGFnZUxheW91dDpcbiAgICAvLyBzbGlkZXM6IGlubGluZS1ibG9ja1xuICAgIC8vIHJlbW92ZSBibGFuayBzcGFjZSBiZXR3ZWVuIHNsaWRlcyBieSBzZXQgZm9udC1zaXplOiAwXG5cbiAgICAvLyAjIyBOb24gUGVyY2VudGFnZUxheW91dDpcbiAgICAvLyBzbGlkZXM6IGZsb2F0XG4gICAgLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMDAlXG4gICAgLy8gICAgICAgICBtYXJnaW4tbGVmdDogflxuXG4gICAgLy8gUmVzb3VyY2U6IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzE0N3VwMjQ1d3dUWGVRWXZlM0JSU0FENG9WY3ZRbXVHc0Z0ZUpPZUE1eE5RL2VkaXQ/dXNwPXNoYXJpbmdcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgaWYgKFBFUkNFTlRBR0VMQVlPVVQgfHwgYXV0b1dpZHRoKSB7XG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgJ2ZvbnQtc2l6ZTonICsgd2luLmdldENvbXB1dGVkU3R5bGUoc2xpZGVJdGVtc1swXSkuZm9udFNpemUgKyAnOycsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQsICdmb250LXNpemU6MDsnLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfSBlbHNlIGlmIChjYXJvdXNlbCkge1xuICAgICAgICBmb3JFYWNoKHNsaWRlSXRlbXMsIGZ1bmN0aW9uIChzbGlkZSwgaSkge1xuICAgICAgICAgIHNsaWRlLnN0eWxlLm1hcmdpbkxlZnQgPSBnZXRTbGlkZU1hcmdpbkxlZnQoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gIyMgQkFTSUMgU1RZTEVTXG4gICAgaWYgKENTU01RKSB7XG4gICAgICAvLyBtaWRkbGUgd3JhcHBlciBzdHlsZVxuICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikge1xuICAgICAgICB2YXIgc3RyID0gbWlkZGxlV3JhcHBlciAmJiBvcHRpb25zLmF1dG9IZWlnaHQgPyBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShvcHRpb25zLnNwZWVkKSA6ICcnO1xuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJy1tdycsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHlsZXNcbiAgICAgIHN0ciA9IGdldElubmVyV3JhcHBlclN0eWxlcyhvcHRpb25zLmVkZ2VQYWRkaW5nLCBvcHRpb25zLmd1dHRlciwgb3B0aW9ucy5maXhlZFdpZHRoLCBvcHRpb25zLnNwZWVkLCBvcHRpb25zLmF1dG9IZWlnaHQpO1xuICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICctaXcnLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG5cbiAgICAgIC8vIGNvbnRhaW5lciBzdHlsZXNcbiAgICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgICBzdHIgPSBob3Jpem9udGFsICYmICFhdXRvV2lkdGggPyAnd2lkdGg6JyArIGdldENvbnRhaW5lcldpZHRoKG9wdGlvbnMuZml4ZWRXaWR0aCwgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuaXRlbXMpICsgJzsnIDogJyc7XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkKTsgfVxuICAgICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNsaWRlIHN0eWxlc1xuICAgICAgc3RyID0gaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoID8gZ2V0U2xpZGVXaWR0aFN0eWxlKG9wdGlvbnMuZml4ZWRXaWR0aCwgb3B0aW9ucy5ndXR0ZXIsIG9wdGlvbnMuaXRlbXMpIDogJyc7XG4gICAgICBpZiAob3B0aW9ucy5ndXR0ZXIpIHsgc3RyICs9IGdldFNsaWRlR3V0dGVyU3R5bGUob3B0aW9ucy5ndXR0ZXIpOyB9XG4gICAgICAvLyBzZXQgZ2FsbGVyeSBpdGVtcyB0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICBpZiAoIWNhcm91c2VsKSB7XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkKTsgfVxuICAgICAgICBpZiAoQU5JTUFUSU9ORFVSQVRJT04pIHsgc3RyICs9IGdldEFuaW1hdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWQpOyB9XG4gICAgICB9XG4gICAgICBpZiAoc3RyKSB7IGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpOyB9XG5cbiAgICAvLyBub24gQ1NTIG1lZGlhcXVlcmllczogSUU4XG4gICAgLy8gIyMgdXBkYXRlIGlubmVyIHdyYXBwZXIsIGNvbnRhaW5lciwgc2xpZGVzIGlmIG5lZWRlZFxuICAgIC8vIHNldCBpbmxpbmUgc3R5bGVzIGZvciBpbm5lciB3cmFwcGVyICYgY29udGFpbmVyXG4gICAgLy8gaW5zZXJ0IHN0eWxlc2hlZXQgKG9uZSBsaW5lKSBmb3Igc2xpZGVzIG9ubHkgKHNpbmNlIHNsaWRlcyBhcmUgbWFueSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbWlkZGxlIHdyYXBwZXIgc3R5bGVzXG4gICAgICB1cGRhdGVfY2Fyb3VzZWxfdHJhbnNpdGlvbl9kdXJhdGlvbigpO1xuXG4gICAgICAvLyBpbm5lciB3cmFwcGVyIHN0eWxlc1xuICAgICAgaW5uZXJXcmFwcGVyLnN0eWxlLmNzc1RleHQgPSBnZXRJbm5lcldyYXBwZXJTdHlsZXMoZWRnZVBhZGRpbmcsIGd1dHRlciwgZml4ZWRXaWR0aCwgYXV0b0hlaWdodCk7XG5cbiAgICAgIC8vIGNvbnRhaW5lciBzdHlsZXNcbiAgICAgIGlmIChjYXJvdXNlbCAmJiBob3Jpem9udGFsICYmICFhdXRvV2lkdGgpIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gZ2V0Q29udGFpbmVyV2lkdGgoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNsaWRlIHN0eWxlc1xuICAgICAgdmFyIHN0ciA9IGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCA/IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKSA6ICcnO1xuICAgICAgaWYgKGd1dHRlcikgeyBzdHIgKz0gZ2V0U2xpZGVHdXR0ZXJTdHlsZShndXR0ZXIpOyB9XG5cbiAgICAgIC8vIGFwcGVuZCB0byB0aGUgbGFzdCBsaW5lXG4gICAgICBpZiAoc3RyKSB7IGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpOyB9XG4gICAgfVxuXG4gICAgLy8gIyMgTUVESUFRVUVSSUVTXG4gICAgaWYgKHJlc3BvbnNpdmUgJiYgQ1NTTVEpIHtcbiAgICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgICAgLy8gYnA6IGNvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxuICAgICAgICBicCA9IHBhcnNlSW50KGJwKTtcblxuICAgICAgICB2YXIgb3B0cyA9IHJlc3BvbnNpdmVbYnBdLFxuICAgICAgICAgICAgc3RyID0gJycsXG4gICAgICAgICAgICBtaWRkbGVXcmFwcGVyU3RyID0gJycsXG4gICAgICAgICAgICBpbm5lcldyYXBwZXJTdHIgPSAnJyxcbiAgICAgICAgICAgIGNvbnRhaW5lclN0ciA9ICcnLFxuICAgICAgICAgICAgc2xpZGVTdHIgPSAnJyxcbiAgICAgICAgICAgIGl0ZW1zQlAgPSAhYXV0b1dpZHRoID8gZ2V0T3B0aW9uKCdpdGVtcycsIGJwKSA6IG51bGwsXG4gICAgICAgICAgICBmaXhlZFdpZHRoQlAgPSBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnLCBicCksXG4gICAgICAgICAgICBzcGVlZEJQID0gZ2V0T3B0aW9uKCdzcGVlZCcsIGJwKSxcbiAgICAgICAgICAgIGVkZ2VQYWRkaW5nQlAgPSBnZXRPcHRpb24oJ2VkZ2VQYWRkaW5nJywgYnApLFxuICAgICAgICAgICAgYXV0b0hlaWdodEJQID0gZ2V0T3B0aW9uKCdhdXRvSGVpZ2h0JywgYnApLFxuICAgICAgICAgICAgZ3V0dGVyQlAgPSBnZXRPcHRpb24oJ2d1dHRlcicsIGJwKTtcblxuICAgICAgICAvLyBtaWRkbGUgd3JhcHBlciBzdHJpbmdcbiAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTiAmJiBtaWRkbGVXcmFwcGVyICYmIGdldE9wdGlvbignYXV0b0hlaWdodCcsIGJwKSAmJiAnc3BlZWQnIGluIG9wdHMpIHtcbiAgICAgICAgICBtaWRkbGVXcmFwcGVyU3RyID0gJyMnICsgc2xpZGVJZCArICctbXd7JyArIGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkQlApICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHJpbmdcbiAgICAgICAgaWYgKCdlZGdlUGFkZGluZycgaW4gb3B0cyB8fCAnZ3V0dGVyJyBpbiBvcHRzKSB7XG4gICAgICAgICAgaW5uZXJXcmFwcGVyU3RyID0gJyMnICsgc2xpZGVJZCArICctaXd7JyArIGdldElubmVyV3JhcHBlclN0eWxlcyhlZGdlUGFkZGluZ0JQLCBndXR0ZXJCUCwgZml4ZWRXaWR0aEJQLCBzcGVlZEJQLCBhdXRvSGVpZ2h0QlApICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29udGFpbmVyIHN0cmluZ1xuICAgICAgICBpZiAoY2Fyb3VzZWwgJiYgaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoICYmICgnZml4ZWRXaWR0aCcgaW4gb3B0cyB8fCAnaXRlbXMnIGluIG9wdHMgfHwgKGZpeGVkV2lkdGggJiYgJ2d1dHRlcicgaW4gb3B0cykpKSB7XG4gICAgICAgICAgY29udGFpbmVyU3RyID0gJ3dpZHRoOicgKyBnZXRDb250YWluZXJXaWR0aChmaXhlZFdpZHRoQlAsIGd1dHRlckJQLCBpdGVtc0JQKSArICc7JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OICYmICdzcGVlZCcgaW4gb3B0cykge1xuICAgICAgICAgIGNvbnRhaW5lclN0ciArPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25TdHlsZShzcGVlZEJQKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGFpbmVyU3RyKSB7XG4gICAgICAgICAgY29udGFpbmVyU3RyID0gJyMnICsgc2xpZGVJZCArICd7JyArIGNvbnRhaW5lclN0ciArICd9JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNsaWRlIHN0cmluZ1xuICAgICAgICBpZiAoJ2ZpeGVkV2lkdGgnIGluIG9wdHMgfHwgKGZpeGVkV2lkdGggJiYgJ2d1dHRlcicgaW4gb3B0cykgfHwgIWNhcm91c2VsICYmICdpdGVtcycgaW4gb3B0cykge1xuICAgICAgICAgIHNsaWRlU3RyICs9IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoQlAsIGd1dHRlckJQLCBpdGVtc0JQKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2d1dHRlcicgaW4gb3B0cykge1xuICAgICAgICAgIHNsaWRlU3RyICs9IGdldFNsaWRlR3V0dGVyU3R5bGUoZ3V0dGVyQlApO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBnYWxsZXJ5IGl0ZW1zIHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgaWYgKCFjYXJvdXNlbCAmJiAnc3BlZWQnIGluIG9wdHMpIHtcbiAgICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OKSB7IHNsaWRlU3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkQlApOyB9XG4gICAgICAgICAgaWYgKEFOSU1BVElPTkRVUkFUSU9OKSB7IHNsaWRlU3RyICs9IGdldEFuaW1hdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWRCUCk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2xpZGVTdHIpIHsgc2xpZGVTdHIgPSAnIycgKyBzbGlkZUlkICsgJyA+IC50bnMtaXRlbXsnICsgc2xpZGVTdHIgKyAnfSc7IH1cblxuICAgICAgICAvLyBhZGQgdXBcbiAgICAgICAgc3RyID0gbWlkZGxlV3JhcHBlclN0ciArIGlubmVyV3JhcHBlclN0ciArIGNvbnRhaW5lclN0ciArIHNsaWRlU3RyO1xuXG4gICAgICAgIGlmIChzdHIpIHtcbiAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKCdAbWVkaWEgKG1pbi13aWR0aDogJyArIGJwIC8gMTYgKyAnZW0pIHsnICsgc3RyICsgJ30nLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFRvb2xzICgpIHtcbiAgICAvLyA9PSBzbGlkZXMgPT1cbiAgICB1cGRhdGVTbGlkZVN0YXR1cygpO1xuXG4gICAgLy8gPT0gbGl2ZSByZWdpb24gPT1cbiAgICBvdXRlcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxkaXYgY2xhc3M9XCJ0bnMtbGl2ZXJlZ2lvbiB0bnMtdmlzdWFsbHktaGlkZGVuXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCI+c2xpZGUgPHNwYW4gY2xhc3M9XCJjdXJyZW50XCI+JyArIGdldExpdmVSZWdpb25TdHIoKSArICc8L3NwYW4+ICBvZiAnICsgc2xpZGVDb3VudCArICc8L2Rpdj4nKTtcbiAgICBsaXZlcmVnaW9uQ3VycmVudCA9IG91dGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcudG5zLWxpdmVyZWdpb24gLmN1cnJlbnQnKTtcblxuICAgIC8vID09IGF1dG9wbGF5SW5pdCA9PVxuICAgIGlmIChoYXNBdXRvcGxheSkge1xuICAgICAgdmFyIHR4dCA9IGF1dG9wbGF5ID8gJ3N0b3AnIDogJ3N0YXJ0JztcbiAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikge1xuICAgICAgICBzZXRBdHRycyhhdXRvcGxheUJ1dHRvbiwgeydkYXRhLWFjdGlvbic6IHR4dH0pO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmF1dG9wbGF5QnV0dG9uT3V0cHV0KSB7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoZ2V0SW5zZXJ0UG9zaXRpb24ob3B0aW9ucy5hdXRvcGxheVBvc2l0aW9uKSwgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtYWN0aW9uPVwiJyArIHR4dCArICdcIj4nICsgYXV0b3BsYXlIdG1sU3RyaW5nc1swXSArIHR4dCArIGF1dG9wbGF5SHRtbFN0cmluZ3NbMV0gKyBhdXRvcGxheVRleHRbMF0gKyAnPC9idXR0b24+Jyk7XG4gICAgICAgIGF1dG9wbGF5QnV0dG9uID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbl0nKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGV2ZW50XG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHtcbiAgICAgICAgYWRkRXZlbnRzKGF1dG9wbGF5QnV0dG9uLCB7J2NsaWNrJzogdG9nZ2xlQXV0b3BsYXl9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgIHN0YXJ0QXV0b3BsYXkoKTtcbiAgICAgICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZSkgeyBhZGRFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7IH1cbiAgICAgICAgaWYgKGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgdmlzaWJpbGl0eUV2ZW50KTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vID09IG5hdkluaXQgPT1cbiAgICBpZiAoaGFzTmF2KSB7XG4gICAgICB2YXIgaW5pdEluZGV4ID0gIWNhcm91c2VsID8gMCA6IGNsb25lQ291bnQ7XG4gICAgICAvLyBjdXN0b21pemVkIG5hdlxuICAgICAgLy8gd2lsbCBub3QgaGlkZSB0aGUgbmF2cyBpbiBjYXNlIHRoZXkncmUgdGh1bWJuYWlsc1xuICAgICAgaWYgKG5hdkNvbnRhaW5lcikge1xuICAgICAgICBzZXRBdHRycyhuYXZDb250YWluZXIsIHsnYXJpYS1sYWJlbCc6ICdDYXJvdXNlbCBQYWdpbmF0aW9uJ30pO1xuICAgICAgICBuYXZJdGVtcyA9IG5hdkNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgZm9yRWFjaChuYXZJdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgICAgIHNldEF0dHJzKGl0ZW0sIHtcbiAgICAgICAgICAgICdkYXRhLW5hdic6IGksXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiBuYXZTdHIgKyAoaSArIDEpLFxuICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBzbGlkZUlkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gZ2VuZXJhdGVkIG5hdlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5hdkh0bWwgPSAnJyxcbiAgICAgICAgICAgIGhpZGRlblN0ciA9IG5hdkFzVGh1bWJuYWlscyA/ICcnIDogJ3N0eWxlPVwiZGlzcGxheTpub25lXCInO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlQ291bnQ7IGkrKykge1xuICAgICAgICAgIC8vIGhpZGUgbmF2IGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgICBuYXZIdG1sICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLW5hdj1cIicgKyBpICsnXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtY29udHJvbHM9XCInICsgc2xpZGVJZCArICdcIiAnICsgaGlkZGVuU3RyICsgJyBhcmlhLWxhYmVsPVwiJyArIG5hdlN0ciArIChpICsgMSkgKydcIj48L2J1dHRvbj4nO1xuICAgICAgICB9XG4gICAgICAgIG5hdkh0bWwgPSAnPGRpdiBjbGFzcz1cInRucy1uYXZcIiBhcmlhLWxhYmVsPVwiQ2Fyb3VzZWwgUGFnaW5hdGlvblwiPicgKyBuYXZIdG1sICsgJzwvZGl2Pic7XG4gICAgICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoZ2V0SW5zZXJ0UG9zaXRpb24ob3B0aW9ucy5uYXZQb3NpdGlvbiksIG5hdkh0bWwpO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lciA9IG91dGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcudG5zLW5hdicpO1xuICAgICAgICBuYXZJdGVtcyA9IG5hdkNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlTmF2VmlzaWJpbGl0eSgpO1xuXG4gICAgICAvLyBhZGQgdHJhbnNpdGlvblxuICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikge1xuICAgICAgICB2YXIgcHJlZml4ID0gVFJBTlNJVElPTkRVUkFUSU9OLnN1YnN0cmluZygwLCBUUkFOU0lUSU9ORFVSQVRJT04ubGVuZ3RoIC0gMTgpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBzdHIgPSAndHJhbnNpdGlvbjogYWxsICcgKyBzcGVlZCAvIDEwMDAgKyAncyc7XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgIHN0ciA9ICctJyArIHByZWZpeCArICctJyArIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICdbYXJpYS1jb250cm9sc149JyArIHNsaWRlSWQgKyAnLWl0ZW1dJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfVxuXG4gICAgICBzZXRBdHRycyhuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdLCB7J2FyaWEtbGFiZWwnOiBuYXZTdHIgKyAobmF2Q3VycmVudEluZGV4ICsgMSkgKyBuYXZTdHJDdXJyZW50fSk7XG4gICAgICByZW1vdmVBdHRycyhuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdLCAndGFiaW5kZXgnKTtcbiAgICAgIGFkZENsYXNzKG5hdkl0ZW1zW25hdkN1cnJlbnRJbmRleF0sIG5hdkFjdGl2ZUNsYXNzKTtcblxuICAgICAgLy8gYWRkIGV2ZW50c1xuICAgICAgYWRkRXZlbnRzKG5hdkNvbnRhaW5lciwgbmF2RXZlbnRzKTtcbiAgICB9XG5cblxuXG4gICAgLy8gPT0gY29udHJvbHNJbml0ID09XG4gICAgaWYgKGhhc0NvbnRyb2xzKSB7XG4gICAgICBpZiAoIWNvbnRyb2xzQ29udGFpbmVyICYmICghcHJldkJ1dHRvbiB8fCAhbmV4dEJ1dHRvbikpIHtcbiAgICAgICAgb3V0ZXJXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChnZXRJbnNlcnRQb3NpdGlvbihvcHRpb25zLmNvbnRyb2xzUG9zaXRpb24pLCAnPGRpdiBjbGFzcz1cInRucy1jb250cm9sc1wiIGFyaWEtbGFiZWw9XCJDYXJvdXNlbCBOYXZpZ2F0aW9uXCIgdGFiaW5kZXg9XCIwXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1jb250cm9scz1cInByZXZcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1jb250cm9scz1cIicgKyBzbGlkZUlkICsnXCI+JyArIGNvbnRyb2xzVGV4dFswXSArICc8L2J1dHRvbj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWNvbnRyb2xzPVwibmV4dFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHNsaWRlSWQgKydcIj4nICsgY29udHJvbHNUZXh0WzFdICsgJzwvYnV0dG9uPjwvZGl2PicpO1xuXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy50bnMtY29udHJvbHMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwcmV2QnV0dG9uIHx8ICFuZXh0QnV0dG9uKSB7XG4gICAgICAgIHByZXZCdXR0b24gPSBjb250cm9sc0NvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgICAgICAgbmV4dEJ1dHRvbiA9IGNvbnRyb2xzQ29udGFpbmVyLmNoaWxkcmVuWzFdO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBzZXRBdHRycyhjb250cm9sc0NvbnRhaW5lciwge1xuICAgICAgICAgICdhcmlhLWxhYmVsJzogJ0Nhcm91c2VsIE5hdmlnYXRpb24nLFxuICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY29udHJvbHNDb250YWluZXIgfHwgKG9wdGlvbnMucHJldkJ1dHRvbiAmJiBvcHRpb25zLm5leHRCdXR0b24pKSB7XG4gICAgICAgIHNldEF0dHJzKFtwcmV2QnV0dG9uLCBuZXh0QnV0dG9uXSwge1xuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogc2xpZGVJZCxcbiAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY29udHJvbHNDb250YWluZXIgfHwgKG9wdGlvbnMucHJldkJ1dHRvbiAmJiBvcHRpb25zLm5leHRCdXR0b24pKSB7XG4gICAgICAgIHNldEF0dHJzKHByZXZCdXR0b24sIHsnZGF0YS1jb250cm9scycgOiAncHJldid9KTtcbiAgICAgICAgc2V0QXR0cnMobmV4dEJ1dHRvbiwgeydkYXRhLWNvbnRyb2xzJyA6ICduZXh0J30pO1xuICAgICAgfVxuXG4gICAgICBwcmV2SXNCdXR0b24gPSBpc0J1dHRvbihwcmV2QnV0dG9uKTtcbiAgICAgIG5leHRJc0J1dHRvbiA9IGlzQnV0dG9uKG5leHRCdXR0b24pO1xuXG4gICAgICB1cGRhdGVDb250cm9sc1N0YXR1cygpO1xuXG4gICAgICAvLyBhZGQgZXZlbnRzXG4gICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgYWRkRXZlbnRzKGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0V2ZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRFdmVudHMocHJldkJ1dHRvbiwgY29udHJvbHNFdmVudHMpO1xuICAgICAgICBhZGRFdmVudHMobmV4dEJ1dHRvbiwgY29udHJvbHNFdmVudHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhpZGUgdG9vbHMgaWYgbmVlZGVkXG4gICAgZGlzYWJsZVVJKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RXZlbnRzICgpIHtcbiAgICAvLyBhZGQgZXZlbnRzXG4gICAgaWYgKGNhcm91c2VsICYmIFRSQU5TSVRJT05FTkQpIHtcbiAgICAgIHZhciBldmUgPSB7fTtcbiAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGV2ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdWNoKSB7IGFkZEV2ZW50cyhjb250YWluZXIsIHRvdWNoRXZlbnRzLCBvcHRpb25zLnByZXZlbnRTY3JvbGxPblRvdWNoKTsgfVxuICAgIGlmIChtb3VzZURyYWcpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cyk7IH1cbiAgICBpZiAoYXJyb3dLZXlzKSB7IGFkZEV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpOyB9XG5cbiAgICBpZiAobmVzdGVkID09PSAnaW5uZXInKSB7XG4gICAgICBldmVudHMub24oJ291dGVyUmVzaXplZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzaXplVGFza3MoKTtcbiAgICAgICAgZXZlbnRzLmVtaXQoJ2lubmVyTG9hZGVkJywgaW5mbygpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2l2ZSB8fCBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCB8fCBhdXRvSGVpZ2h0IHx8ICFob3Jpem9udGFsKSB7XG4gICAgICBhZGRFdmVudHMod2luLCB7J3Jlc2l6ZSc6IG9uUmVzaXplfSk7XG4gICAgfVxuXG4gICAgaWYgKGF1dG9IZWlnaHQpIHtcbiAgICAgIGlmIChuZXN0ZWQgPT09ICdvdXRlcicpIHtcbiAgICAgICAgZXZlbnRzLm9uKCdpbm5lckxvYWRlZCcsIGRvQXV0b0hlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKCFkaXNhYmxlKSB7IGRvQXV0b0hlaWdodCgpOyB9XG4gICAgfVxuXG4gICAgZG9MYXp5TG9hZCgpO1xuICAgIGlmIChkaXNhYmxlKSB7IGRpc2FibGVTbGlkZXIoKTsgfSBlbHNlIGlmIChmcmVlemUpIHsgZnJlZXplU2xpZGVyKCk7IH1cblxuICAgIGV2ZW50cy5vbignaW5kZXhDaGFuZ2VkJywgYWRkaXRpb25hbFVwZGF0ZXMpO1xuICAgIGlmIChuZXN0ZWQgPT09ICdpbm5lcicpIHsgZXZlbnRzLmVtaXQoJ2lubmVyTG9hZGVkJywgaW5mbygpKTsgfVxuICAgIGlmICh0eXBlb2Ygb25Jbml0ID09PSAnZnVuY3Rpb24nKSB7IG9uSW5pdChpbmZvKCkpOyB9XG4gICAgaXNPbiA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICAvLyBzaGVldFxuICAgIHNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBpZiAoc2hlZXQub3duZXJOb2RlKSB7IHNoZWV0Lm93bmVyTm9kZS5yZW1vdmUoKTsgfVxuXG4gICAgLy8gcmVtb3ZlIHdpbiBldmVudCBsaXN0ZW5lcnNcbiAgICByZW1vdmVFdmVudHMod2luLCB7J3Jlc2l6ZSc6IG9uUmVzaXplfSk7XG5cbiAgICAvLyBhcnJvd0tleXMsIGNvbnRyb2xzLCBuYXZcbiAgICBpZiAoYXJyb3dLZXlzKSB7IHJlbW92ZUV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpOyB9XG4gICAgaWYgKGNvbnRyb2xzQ29udGFpbmVyKSB7IHJlbW92ZUV2ZW50cyhjb250cm9sc0NvbnRhaW5lciwgY29udHJvbHNFdmVudHMpOyB9XG4gICAgaWYgKG5hdkNvbnRhaW5lcikgeyByZW1vdmVFdmVudHMobmF2Q29udGFpbmVyLCBuYXZFdmVudHMpOyB9XG5cbiAgICAvLyBhdXRvcGxheVxuICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKTtcbiAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCB2aXNpYmlsaXR5RXZlbnQpO1xuICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyByZW1vdmVFdmVudHMoYXV0b3BsYXlCdXR0b24sIHsnY2xpY2snOiB0b2dnbGVBdXRvcGxheX0pOyB9XG4gICAgaWYgKGF1dG9wbGF5KSB7IGNsZWFySW50ZXJ2YWwoYXV0b3BsYXlUaW1lcik7IH1cblxuICAgIC8vIGNvbnRhaW5lclxuICAgIGlmIChjYXJvdXNlbCAmJiBUUkFOU0lUSU9ORU5EKSB7XG4gICAgICB2YXIgZXZlID0ge307XG4gICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBvblRyYW5zaXRpb25FbmQ7XG4gICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBldmUpO1xuICAgIH1cbiAgICBpZiAodG91Y2gpIHsgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpOyB9XG4gICAgaWYgKG1vdXNlRHJhZykgeyByZW1vdmVFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTsgfVxuXG4gICAgLy8gY2FjaGUgT2JqZWN0IHZhbHVlcyBpbiBvcHRpb25zICYmIHJlc2V0IEhUTUxcbiAgICB2YXIgaHRtbExpc3QgPSBbY29udGFpbmVySFRNTCwgY29udHJvbHNDb250YWluZXJIVE1MLCBwcmV2QnV0dG9uSFRNTCwgbmV4dEJ1dHRvbkhUTUwsIG5hdkNvbnRhaW5lckhUTUwsIGF1dG9wbGF5QnV0dG9uSFRNTF07XG5cbiAgICB0bnNMaXN0LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgdmFyIGVsID0gaXRlbSA9PT0gJ2NvbnRhaW5lcicgPyBvdXRlcldyYXBwZXIgOiBvcHRpb25zW2l0ZW1dO1xuXG4gICAgICBpZiAodHlwZW9mIGVsID09PSAnb2JqZWN0JyAmJiBlbCkge1xuICAgICAgICB2YXIgcHJldkVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZyA/IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgOiBmYWxzZSxcbiAgICAgICAgICAgIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgZWwub3V0ZXJIVE1MID0gaHRtbExpc3RbaV07XG4gICAgICAgIG9wdGlvbnNbaXRlbV0gPSBwcmV2RWwgPyBwcmV2RWwubmV4dEVsZW1lbnRTaWJsaW5nIDogcGFyZW50RWwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIHJlc2V0IHZhcmlhYmxlc1xuICAgIHRuc0xpc3QgPSBhbmltYXRlSW4gPSBhbmltYXRlT3V0ID0gYW5pbWF0ZURlbGF5ID0gYW5pbWF0ZU5vcm1hbCA9IGhvcml6b250YWwgPSBvdXRlcldyYXBwZXIgPSBpbm5lcldyYXBwZXIgPSBjb250YWluZXIgPSBjb250YWluZXJQYXJlbnQgPSBjb250YWluZXJIVE1MID0gc2xpZGVJdGVtcyA9IHNsaWRlQ291bnQgPSBicmVha3BvaW50Wm9uZSA9IHdpbmRvd1dpZHRoID0gYXV0b1dpZHRoID0gZml4ZWRXaWR0aCA9IGVkZ2VQYWRkaW5nID0gZ3V0dGVyID0gdmlld3BvcnQgPSBpdGVtcyA9IHNsaWRlQnkgPSB2aWV3cG9ydE1heCA9IGFycm93S2V5cyA9IHNwZWVkID0gcmV3aW5kID0gbG9vcCA9IGF1dG9IZWlnaHQgPSBzaGVldCA9IGxhenlsb2FkID0gc2xpZGVQb3NpdGlvbnMgPSBzbGlkZUl0ZW1zT3V0ID0gY2xvbmVDb3VudCA9IHNsaWRlQ291bnROZXcgPSBoYXNSaWdodERlYWRab25lID0gcmlnaHRCb3VuZGFyeSA9IHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtID0gdHJhbnNmb3JtQXR0ciA9IHRyYW5zZm9ybVByZWZpeCA9IHRyYW5zZm9ybVBvc3RmaXggPSBnZXRJbmRleE1heCA9IGluZGV4ID0gaW5kZXhDYWNoZWQgPSBpbmRleE1pbiA9IGluZGV4TWF4ID0gcmVzaXplVGltZXIgPSBzd2lwZUFuZ2xlID0gbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gcnVubmluZyA9IG9uSW5pdCA9IGV2ZW50cyA9IG5ld0NvbnRhaW5lckNsYXNzZXMgPSBzbGlkZUlkID0gZGlzYWJsZSA9IGRpc2FibGVkID0gZnJlZXphYmxlID0gZnJlZXplID0gZnJvemVuID0gY29udHJvbHNFdmVudHMgPSBuYXZFdmVudHMgPSBob3ZlckV2ZW50cyA9IHZpc2liaWxpdHlFdmVudCA9IGRvY21lbnRLZXlkb3duRXZlbnQgPSB0b3VjaEV2ZW50cyA9IGRyYWdFdmVudHMgPSBoYXNDb250cm9scyA9IGhhc05hdiA9IG5hdkFzVGh1bWJuYWlscyA9IGhhc0F1dG9wbGF5ID0gaGFzVG91Y2ggPSBoYXNNb3VzZURyYWcgPSBzbGlkZUFjdGl2ZUNsYXNzID0gaW1nQ29tcGxldGVDbGFzcyA9IGltZ0V2ZW50cyA9IGltZ3NDb21wbGV0ZSA9IGNvbnRyb2xzID0gY29udHJvbHNUZXh0ID0gY29udHJvbHNDb250YWluZXIgPSBjb250cm9sc0NvbnRhaW5lckhUTUwgPSBwcmV2QnV0dG9uID0gbmV4dEJ1dHRvbiA9IHByZXZJc0J1dHRvbiA9IG5leHRJc0J1dHRvbiA9IG5hdiA9IG5hdkNvbnRhaW5lciA9IG5hdkNvbnRhaW5lckhUTUwgPSBuYXZJdGVtcyA9IHBhZ2VzID0gcGFnZXNDYWNoZWQgPSBuYXZDbGlja2VkID0gbmF2Q3VycmVudEluZGV4ID0gbmF2Q3VycmVudEluZGV4Q2FjaGVkID0gbmF2QWN0aXZlQ2xhc3MgPSBuYXZTdHIgPSBuYXZTdHJDdXJyZW50ID0gYXV0b3BsYXkgPSBhdXRvcGxheVRpbWVvdXQgPSBhdXRvcGxheURpcmVjdGlvbiA9IGF1dG9wbGF5VGV4dCA9IGF1dG9wbGF5SG92ZXJQYXVzZSA9IGF1dG9wbGF5QnV0dG9uID0gYXV0b3BsYXlCdXR0b25IVE1MID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGF1dG9wbGF5SHRtbFN0cmluZ3MgPSBhdXRvcGxheVRpbWVyID0gYW5pbWF0aW5nID0gYXV0b3BsYXlIb3ZlclBhdXNlZCA9IGF1dG9wbGF5VXNlclBhdXNlZCA9IGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCA9IGluaXRQb3NpdGlvbiA9IGxhc3RQb3NpdGlvbiA9IHRyYW5zbGF0ZUluaXQgPSBkaXNYID0gZGlzWSA9IHBhblN0YXJ0ID0gcmFmSW5kZXggPSBnZXREaXN0ID0gdG91Y2ggPSBtb3VzZURyYWcgPSBudWxsO1xuICAgIC8vIGNoZWNrIHZhcmlhYmxlc1xuICAgIC8vIFthbmltYXRlSW4sIGFuaW1hdGVPdXQsIGFuaW1hdGVEZWxheSwgYW5pbWF0ZU5vcm1hbCwgaG9yaXpvbnRhbCwgb3V0ZXJXcmFwcGVyLCBpbm5lcldyYXBwZXIsIGNvbnRhaW5lciwgY29udGFpbmVyUGFyZW50LCBjb250YWluZXJIVE1MLCBzbGlkZUl0ZW1zLCBzbGlkZUNvdW50LCBicmVha3BvaW50Wm9uZSwgd2luZG93V2lkdGgsIGF1dG9XaWR0aCwgZml4ZWRXaWR0aCwgZWRnZVBhZGRpbmcsIGd1dHRlciwgdmlld3BvcnQsIGl0ZW1zLCBzbGlkZUJ5LCB2aWV3cG9ydE1heCwgYXJyb3dLZXlzLCBzcGVlZCwgcmV3aW5kLCBsb29wLCBhdXRvSGVpZ2h0LCBzaGVldCwgbGF6eWxvYWQsIHNsaWRlUG9zaXRpb25zLCBzbGlkZUl0ZW1zT3V0LCBjbG9uZUNvdW50LCBzbGlkZUNvdW50TmV3LCBoYXNSaWdodERlYWRab25lLCByaWdodEJvdW5kYXJ5LCB1cGRhdGVJbmRleEJlZm9yZVRyYW5zZm9ybSwgdHJhbnNmb3JtQXR0ciwgdHJhbnNmb3JtUHJlZml4LCB0cmFuc2Zvcm1Qb3N0Zml4LCBnZXRJbmRleE1heCwgaW5kZXgsIGluZGV4Q2FjaGVkLCBpbmRleE1pbiwgaW5kZXhNYXgsIHJlc2l6ZVRpbWVyLCBzd2lwZUFuZ2xlLCBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQsIHJ1bm5pbmcsIG9uSW5pdCwgZXZlbnRzLCBuZXdDb250YWluZXJDbGFzc2VzLCBzbGlkZUlkLCBkaXNhYmxlLCBkaXNhYmxlZCwgZnJlZXphYmxlLCBmcmVlemUsIGZyb3plbiwgY29udHJvbHNFdmVudHMsIG5hdkV2ZW50cywgaG92ZXJFdmVudHMsIHZpc2liaWxpdHlFdmVudCwgZG9jbWVudEtleWRvd25FdmVudCwgdG91Y2hFdmVudHMsIGRyYWdFdmVudHMsIGhhc0NvbnRyb2xzLCBoYXNOYXYsIG5hdkFzVGh1bWJuYWlscywgaGFzQXV0b3BsYXksIGhhc1RvdWNoLCBoYXNNb3VzZURyYWcsIHNsaWRlQWN0aXZlQ2xhc3MsIGltZ0NvbXBsZXRlQ2xhc3MsIGltZ0V2ZW50cywgaW1nc0NvbXBsZXRlLCBjb250cm9scywgY29udHJvbHNUZXh0LCBjb250cm9sc0NvbnRhaW5lciwgY29udHJvbHNDb250YWluZXJIVE1MLCBwcmV2QnV0dG9uLCBuZXh0QnV0dG9uLCBwcmV2SXNCdXR0b24sIG5leHRJc0J1dHRvbiwgbmF2LCBuYXZDb250YWluZXIsIG5hdkNvbnRhaW5lckhUTUwsIG5hdkl0ZW1zLCBwYWdlcywgcGFnZXNDYWNoZWQsIG5hdkNsaWNrZWQsIG5hdkN1cnJlbnRJbmRleCwgbmF2Q3VycmVudEluZGV4Q2FjaGVkLCBuYXZBY3RpdmVDbGFzcywgbmF2U3RyLCBuYXZTdHJDdXJyZW50LCBhdXRvcGxheSwgYXV0b3BsYXlUaW1lb3V0LCBhdXRvcGxheURpcmVjdGlvbiwgYXV0b3BsYXlUZXh0LCBhdXRvcGxheUhvdmVyUGF1c2UsIGF1dG9wbGF5QnV0dG9uLCBhdXRvcGxheUJ1dHRvbkhUTUwsIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHksIGF1dG9wbGF5SHRtbFN0cmluZ3MsIGF1dG9wbGF5VGltZXIsIGFuaW1hdGluZywgYXV0b3BsYXlIb3ZlclBhdXNlZCwgYXV0b3BsYXlVc2VyUGF1c2VkLCBhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQsIGluaXRQb3NpdGlvbiwgbGFzdFBvc2l0aW9uLCB0cmFuc2xhdGVJbml0LCBkaXNYLCBkaXNZLCBwYW5TdGFydCwgcmFmSW5kZXgsIGdldERpc3QsIHRvdWNoLCBtb3VzZURyYWcgXS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHsgaWYgKGl0ZW0gIT09IG51bGwpIHsgY29uc29sZS5sb2coaXRlbSk7IH0gfSk7XG5cbiAgICBmb3IgKHZhciBhIGluIHRoaXMpIHtcbiAgICAgIGlmIChhICE9PSAncmVidWlsZCcpIHsgdGhpc1thXSA9IG51bGw7IH1cbiAgICB9XG4gICAgaXNPbiA9IGZhbHNlO1xuICB9XG5cbi8vID09PSBPTiBSRVNJWkUgPT09XG4gIC8vIHJlc3BvbnNpdmUgfHwgZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGggfHwgIWhvcml6b250YWxcbiAgZnVuY3Rpb24gb25SZXNpemUgKGUpIHtcbiAgICByYWYoZnVuY3Rpb24oKXsgcmVzaXplVGFza3MoZ2V0RXZlbnQoZSkpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVRhc2tzIChlKSB7XG4gICAgaWYgKCFpc09uKSB7IHJldHVybjsgfVxuICAgIGlmIChuZXN0ZWQgPT09ICdvdXRlcicpIHsgZXZlbnRzLmVtaXQoJ291dGVyUmVzaXplZCcsIGluZm8oZSkpOyB9XG4gICAgd2luZG93V2lkdGggPSBnZXRXaW5kb3dXaWR0aCgpO1xuICAgIHZhciBicENoYW5nZWQsXG4gICAgICAgIGJyZWFrcG9pbnRab25lVGVtID0gYnJlYWtwb2ludFpvbmUsXG4gICAgICAgIG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSBmYWxzZTtcblxuICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICBzZXRCcmVha3BvaW50Wm9uZSgpO1xuICAgICAgYnBDaGFuZ2VkID0gYnJlYWtwb2ludFpvbmVUZW0gIT09IGJyZWFrcG9pbnRab25lO1xuICAgICAgLy8gaWYgKGhhc1JpZ2h0RGVhZFpvbmUpIHsgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IHRydWU7IH0gLy8gKj9cbiAgICAgIGlmIChicENoYW5nZWQpIHsgZXZlbnRzLmVtaXQoJ25ld0JyZWFrcG9pbnRTdGFydCcsIGluZm8oZSkpOyB9XG4gICAgfVxuXG4gICAgdmFyIGluZENoYW5nZWQsXG4gICAgICAgIGl0ZW1zQ2hhbmdlZCxcbiAgICAgICAgaXRlbXNUZW0gPSBpdGVtcyxcbiAgICAgICAgZGlzYWJsZVRlbSA9IGRpc2FibGUsXG4gICAgICAgIGZyZWV6ZVRlbSA9IGZyZWV6ZSxcbiAgICAgICAgYXJyb3dLZXlzVGVtID0gYXJyb3dLZXlzLFxuICAgICAgICBjb250cm9sc1RlbSA9IGNvbnRyb2xzLFxuICAgICAgICBuYXZUZW0gPSBuYXYsXG4gICAgICAgIHRvdWNoVGVtID0gdG91Y2gsXG4gICAgICAgIG1vdXNlRHJhZ1RlbSA9IG1vdXNlRHJhZyxcbiAgICAgICAgYXV0b3BsYXlUZW0gPSBhdXRvcGxheSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlVGVtID0gYXV0b3BsYXlIb3ZlclBhdXNlLFxuICAgICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5VGVtID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSxcbiAgICAgICAgaW5kZXhUZW0gPSBpbmRleDtcblxuICAgIGlmIChicENoYW5nZWQpIHtcbiAgICAgIHZhciBmaXhlZFdpZHRoVGVtID0gZml4ZWRXaWR0aCxcbiAgICAgICAgICBhdXRvSGVpZ2h0VGVtID0gYXV0b0hlaWdodCxcbiAgICAgICAgICBjb250cm9sc1RleHRUZW0gPSBjb250cm9sc1RleHQsXG4gICAgICAgICAgY2VudGVyVGVtID0gY2VudGVyLFxuICAgICAgICAgIGF1dG9wbGF5VGV4dFRlbSA9IGF1dG9wbGF5VGV4dDtcblxuICAgICAgaWYgKCFDU1NNUSkge1xuICAgICAgICB2YXIgZ3V0dGVyVGVtID0gZ3V0dGVyLFxuICAgICAgICAgICAgZWRnZVBhZGRpbmdUZW0gPSBlZGdlUGFkZGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgb3B0aW9uOlxuICAgIC8vIGZpeGVkIHdpZHRoOiB2aWV3cG9ydCwgZml4ZWRXaWR0aCwgZ3V0dGVyID0+IGl0ZW1zXG4gICAgLy8gb3RoZXJzOiB3aW5kb3cgd2lkdGggPT4gYWxsIHZhcmlhYmxlc1xuICAgIC8vIGFsbDogaXRlbXMgPT4gc2xpZGVCeVxuICAgIGFycm93S2V5cyA9IGdldE9wdGlvbignYXJyb3dLZXlzJyk7XG4gICAgY29udHJvbHMgPSBnZXRPcHRpb24oJ2NvbnRyb2xzJyk7XG4gICAgbmF2ID0gZ2V0T3B0aW9uKCduYXYnKTtcbiAgICB0b3VjaCA9IGdldE9wdGlvbigndG91Y2gnKTtcbiAgICBjZW50ZXIgPSBnZXRPcHRpb24oJ2NlbnRlcicpO1xuICAgIG1vdXNlRHJhZyA9IGdldE9wdGlvbignbW91c2VEcmFnJyk7XG4gICAgYXV0b3BsYXkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5Jyk7XG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlID0gZ2V0T3B0aW9uKCdhdXRvcGxheUhvdmVyUGF1c2UnKTtcbiAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5Jyk7XG5cbiAgICBpZiAoYnBDaGFuZ2VkKSB7XG4gICAgICBkaXNhYmxlID0gZ2V0T3B0aW9uKCdkaXNhYmxlJyk7XG4gICAgICBmaXhlZFdpZHRoID0gZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJyk7XG4gICAgICBzcGVlZCA9IGdldE9wdGlvbignc3BlZWQnKTtcbiAgICAgIGF1dG9IZWlnaHQgPSBnZXRPcHRpb24oJ2F1dG9IZWlnaHQnKTtcbiAgICAgIGNvbnRyb2xzVGV4dCA9IGdldE9wdGlvbignY29udHJvbHNUZXh0Jyk7XG4gICAgICBhdXRvcGxheVRleHQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGV4dCcpO1xuICAgICAgYXV0b3BsYXlUaW1lb3V0ID0gZ2V0T3B0aW9uKCdhdXRvcGxheVRpbWVvdXQnKTtcblxuICAgICAgaWYgKCFDU1NNUSkge1xuICAgICAgICBlZGdlUGFkZGluZyA9IGdldE9wdGlvbignZWRnZVBhZGRpbmcnKTtcbiAgICAgICAgZ3V0dGVyID0gZ2V0T3B0aW9uKCdndXR0ZXInKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXBkYXRlIG9wdGlvbnNcbiAgICByZXNldFZhcmlibGVzV2hlbkRpc2FibGUoZGlzYWJsZSk7XG5cbiAgICB2aWV3cG9ydCA9IGdldFZpZXdwb3J0V2lkdGgoKTsgLy8gPD0gZWRnZVBhZGRpbmcsIGd1dHRlclxuICAgIGlmICgoIWhvcml6b250YWwgfHwgYXV0b1dpZHRoKSAmJiAhZGlzYWJsZSkge1xuICAgICAgc2V0U2xpZGVQb3NpdGlvbnMoKTtcbiAgICAgIGlmICghaG9yaXpvbnRhbCkge1xuICAgICAgICB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCgpOyAvLyA8PSBzZXRTbGlkZVBvc2l0aW9uc1xuICAgICAgICBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSB7XG4gICAgICByaWdodEJvdW5kYXJ5ID0gZ2V0UmlnaHRCb3VuZGFyeSgpOyAvLyBhdXRvV2lkdGg6IDw9IHZpZXdwb3J0LCBzbGlkZVBvc2l0aW9ucywgZ3V0dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXhlZFdpZHRoOiA8PSB2aWV3cG9ydCwgZml4ZWRXaWR0aCwgZ3V0dGVyXG4gICAgICBpbmRleE1heCA9IGdldEluZGV4TWF4KCk7IC8vIGF1dG9XaWR0aDogPD0gcmlnaHRCb3VuZGFyeSwgc2xpZGVQb3NpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZml4ZWRXaWR0aDogPD0gcmlnaHRCb3VuZGFyeSwgZml4ZWRXaWR0aCwgZ3V0dGVyXG4gICAgfVxuXG4gICAgaWYgKGJwQ2hhbmdlZCB8fCBmaXhlZFdpZHRoKSB7XG4gICAgICBpdGVtcyA9IGdldE9wdGlvbignaXRlbXMnKTtcbiAgICAgIHNsaWRlQnkgPSBnZXRPcHRpb24oJ3NsaWRlQnknKTtcbiAgICAgIGl0ZW1zQ2hhbmdlZCA9IGl0ZW1zICE9PSBpdGVtc1RlbTtcblxuICAgICAgaWYgKGl0ZW1zQ2hhbmdlZCkge1xuICAgICAgICBpZiAoIWZpeGVkV2lkdGggJiYgIWF1dG9XaWR0aCkgeyBpbmRleE1heCA9IGdldEluZGV4TWF4KCk7IH0gLy8gPD0gaXRlbXNcbiAgICAgICAgLy8gY2hlY2sgaW5kZXggYmVmb3JlIHRyYW5zZm9ybSBpbiBjYXNlXG4gICAgICAgIC8vIHNsaWRlciByZWFjaCB0aGUgcmlnaHQgZWRnZSB0aGVuIGl0ZW1zIGJlY29tZSBiaWdnZXJcbiAgICAgICAgdXBkYXRlSW5kZXgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYnBDaGFuZ2VkKSB7XG4gICAgICBpZiAoZGlzYWJsZSAhPT0gZGlzYWJsZVRlbSkge1xuICAgICAgICBpZiAoZGlzYWJsZSkge1xuICAgICAgICAgIGRpc2FibGVTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmFibGVTbGlkZXIoKTsgLy8gPD0gc2xpZGVQb3NpdGlvbnMsIHJpZ2h0Qm91bmRhcnksIGluZGV4TWF4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJlZXphYmxlICYmIChicENoYW5nZWQgfHwgZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpKSB7XG4gICAgICBmcmVlemUgPSBnZXRGcmVlemUoKTsgLy8gPD0gYXV0b1dpZHRoOiBzbGlkZVBvc2l0aW9ucywgZ3V0dGVyLCB2aWV3cG9ydCwgcmlnaHRCb3VuZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDw9IGZpeGVkV2lkdGg6IGZpeGVkV2lkdGgsIGd1dHRlciwgcmlnaHRCb3VuZGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDw9IG90aGVyczogaXRlbXNcblxuICAgICAgaWYgKGZyZWV6ZSAhPT0gZnJlZXplVGVtKSB7XG4gICAgICAgIGlmIChmcmVlemUpIHtcbiAgICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybShnZXRDb250YWluZXJUcmFuc2Zvcm1WYWx1ZShnZXRTdGFydEluZGV4KDApKSk7XG4gICAgICAgICAgZnJlZXplU2xpZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdW5mcmVlemVTbGlkZXIoKTtcbiAgICAgICAgICBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlIHx8IGZyZWV6ZSk7IC8vIGNvbnRyb2xzLCBuYXYsIHRvdWNoLCBtb3VzZURyYWcsIGFycm93S2V5cywgYXV0b3BsYXksIGF1dG9wbGF5SG92ZXJQYXVzZSwgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eVxuICAgIGlmICghYXV0b3BsYXkpIHsgYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSA9IGZhbHNlOyB9XG5cbiAgICBpZiAoYXJyb3dLZXlzICE9PSBhcnJvd0tleXNUZW0pIHtcbiAgICAgIGFycm93S2V5cyA/XG4gICAgICAgIGFkZEV2ZW50cyhkb2MsIGRvY21lbnRLZXlkb3duRXZlbnQpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7XG4gICAgfVxuICAgIGlmIChjb250cm9scyAhPT0gY29udHJvbHNUZW0pIHtcbiAgICAgIGlmIChjb250cm9scykge1xuICAgICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgc2hvd0VsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBzaG93RWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgICBoaWRlRWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgaGlkZUVsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBoaWRlRWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXYgIT09IG5hdlRlbSkge1xuICAgICAgaWYgKG5hdikge1xuICAgICAgICBzaG93RWxlbWVudChuYXZDb250YWluZXIpO1xuICAgICAgICB1cGRhdGVOYXZWaXNpYmlsaXR5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlRWxlbWVudChuYXZDb250YWluZXIpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0b3VjaCAhPT0gdG91Y2hUZW0pIHtcbiAgICAgIHRvdWNoID9cbiAgICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMsIG9wdGlvbnMucHJldmVudFNjcm9sbE9uVG91Y2gpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMpO1xuICAgIH1cbiAgICBpZiAobW91c2VEcmFnICE9PSBtb3VzZURyYWdUZW0pIHtcbiAgICAgIG1vdXNlRHJhZyA/XG4gICAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cyk7XG4gICAgfVxuICAgIGlmIChhdXRvcGxheSAhPT0gYXV0b3BsYXlUZW0pIHtcbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgc2hvd0VsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgICAgIGlmICghYW5pbWF0aW5nICYmICFhdXRvcGxheVVzZXJQYXVzZWQpIHsgc3RhcnRBdXRvcGxheSgpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgaGlkZUVsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHsgc3RvcEF1dG9wbGF5KCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZSAhPT0gYXV0b3BsYXlIb3ZlclBhdXNlVGVtKSB7XG4gICAgICBhdXRvcGxheUhvdmVyUGF1c2UgP1xuICAgICAgICBhZGRFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cykgOlxuICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBob3ZlckV2ZW50cyk7XG4gICAgfVxuICAgIGlmIChhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ICE9PSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5VGVtKSB7XG4gICAgICBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID9cbiAgICAgICAgYWRkRXZlbnRzKGRvYywgdmlzaWJpbGl0eUV2ZW50KSA6XG4gICAgICAgIHJlbW92ZUV2ZW50cyhkb2MsIHZpc2liaWxpdHlFdmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGJwQ2hhbmdlZCkge1xuICAgICAgaWYgKGZpeGVkV2lkdGggIT09IGZpeGVkV2lkdGhUZW0gfHwgY2VudGVyICE9PSBjZW50ZXJUZW0pIHsgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IHRydWU7IH1cblxuICAgICAgaWYgKGF1dG9IZWlnaHQgIT09IGF1dG9IZWlnaHRUZW0pIHtcbiAgICAgICAgaWYgKCFhdXRvSGVpZ2h0KSB7IGlubmVyV3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnJzsgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udHJvbHMgJiYgY29udHJvbHNUZXh0ICE9PSBjb250cm9sc1RleHRUZW0pIHtcbiAgICAgICAgcHJldkJ1dHRvbi5pbm5lckhUTUwgPSBjb250cm9sc1RleHRbMF07XG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gY29udHJvbHNUZXh0WzFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXV0b3BsYXlCdXR0b24gJiYgYXV0b3BsYXlUZXh0ICE9PSBhdXRvcGxheVRleHRUZW0pIHtcbiAgICAgICAgdmFyIGkgPSBhdXRvcGxheSA/IDEgOiAwLFxuICAgICAgICAgICAgaHRtbCA9IGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCxcbiAgICAgICAgICAgIGxlbiA9IGh0bWwubGVuZ3RoIC0gYXV0b3BsYXlUZXh0VGVtW2ldLmxlbmd0aDtcbiAgICAgICAgaWYgKGh0bWwuc3Vic3RyaW5nKGxlbikgPT09IGF1dG9wbGF5VGV4dFRlbVtpXSkge1xuICAgICAgICAgIGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCA9IGh0bWwuc3Vic3RyaW5nKDAsIGxlbikgKyBhdXRvcGxheVRleHRbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNlbnRlciAmJiAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpKSB7IG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlOyB9XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlZCB8fCBmaXhlZFdpZHRoICYmICFhdXRvV2lkdGgpIHtcbiAgICAgIHBhZ2VzID0gZ2V0UGFnZXMoKTtcbiAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICBpbmRDaGFuZ2VkID0gaW5kZXggIT09IGluZGV4VGVtO1xuICAgIGlmIChpbmRDaGFuZ2VkKSB7XG4gICAgICBldmVudHMuZW1pdCgnaW5kZXhDaGFuZ2VkJywgaW5mbygpKTtcbiAgICAgIG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXRlbXNDaGFuZ2VkKSB7XG4gICAgICBpZiAoIWluZENoYW5nZWQpIHsgYWRkaXRpb25hbFVwZGF0ZXMoKTsgfVxuICAgIH0gZWxzZSBpZiAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpIHtcbiAgICAgIGRvTGF6eUxvYWQoKTtcbiAgICAgIHVwZGF0ZVNsaWRlU3RhdHVzKCk7XG4gICAgICB1cGRhdGVMaXZlUmVnaW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1zQ2hhbmdlZCAmJiAhY2Fyb3VzZWwpIHsgdXBkYXRlR2FsbGVyeVNsaWRlUG9zaXRpb25zKCk7IH1cblxuICAgIGlmICghZGlzYWJsZSAmJiAhZnJlZXplKSB7XG4gICAgICAvLyBub24tbWVkaWFxdWVyaWVzOiBJRThcbiAgICAgIGlmIChicENoYW5nZWQgJiYgIUNTU01RKSB7XG4gICAgICAgIC8vIG1pZGRsZSB3cmFwcGVyIHN0eWxlc1xuXG4gICAgICAgIC8vIGlubmVyIHdyYXBwZXIgc3R5bGVzXG4gICAgICAgIGlmIChlZGdlUGFkZGluZyAhPT0gZWRnZVBhZGRpbmdUZW0gfHwgZ3V0dGVyICE9PSBndXR0ZXJUZW0pIHtcbiAgICAgICAgICBpbm5lcldyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGdldElubmVyV3JhcHBlclN0eWxlcyhlZGdlUGFkZGluZywgZ3V0dGVyLCBmaXhlZFdpZHRoLCBzcGVlZCwgYXV0b0hlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgIC8vIGNvbnRhaW5lciBzdHlsZXNcbiAgICAgICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IGdldENvbnRhaW5lcldpZHRoKGZpeGVkV2lkdGgsIGd1dHRlciwgaXRlbXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHNsaWRlIHN0eWxlc1xuICAgICAgICAgIHZhciBzdHIgPSBnZXRTbGlkZVdpZHRoU3R5bGUoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcykgK1xuICAgICAgICAgICAgICAgICAgICBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlcik7XG5cbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGxhc3QgbGluZSBhbmRcbiAgICAgICAgICAvLyBhZGQgbmV3IHN0eWxlc1xuICAgICAgICAgIHJlbW92ZUNTU1J1bGUoc2hlZXQsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSAtIDEpO1xuICAgICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVtJywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGF1dG8gaGVpZ2h0XG4gICAgICBpZiAoYXV0b0hlaWdodCkgeyBkb0F1dG9IZWlnaHQoKTsgfVxuXG4gICAgICBpZiAobmVlZENvbnRhaW5lclRyYW5zZm9ybSkge1xuICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybVNpbGVudCgpO1xuICAgICAgICBpbmRleENhY2hlZCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChicENoYW5nZWQpIHsgZXZlbnRzLmVtaXQoJ25ld0JyZWFrcG9pbnRFbmQnLCBpbmZvKGUpKTsgfVxuICB9XG5cblxuXG5cblxuICAvLyA9PT0gSU5JVElBTElaQVRJT04gRlVOQ1RJT05TID09PSAvL1xuICBmdW5jdGlvbiBnZXRGcmVlemUgKCkge1xuICAgIGlmICghZml4ZWRXaWR0aCAmJiAhYXV0b1dpZHRoKSB7XG4gICAgICB2YXIgYSA9IGNlbnRlciA/IGl0ZW1zIC0gKGl0ZW1zIC0gMSkgLyAyIDogaXRlbXM7XG4gICAgICByZXR1cm4gIHNsaWRlQ291bnQgPD0gYTtcbiAgICB9XG5cbiAgICB2YXIgd2lkdGggPSBmaXhlZFdpZHRoID8gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogc2xpZGVDb3VudCA6IHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnRdLFxuICAgICAgICB2cCA9IGVkZ2VQYWRkaW5nID8gdmlld3BvcnQgKyBlZGdlUGFkZGluZyAqIDIgOiB2aWV3cG9ydCArIGd1dHRlcjtcblxuICAgIGlmIChjZW50ZXIpIHtcbiAgICAgIHZwIC09IGZpeGVkV2lkdGggPyAodmlld3BvcnQgLSBmaXhlZFdpZHRoKSAvIDIgOiAodmlld3BvcnQgLSAoc2xpZGVQb3NpdGlvbnNbaW5kZXggKyAxXSAtIHNsaWRlUG9zaXRpb25zW2luZGV4XSAtIGd1dHRlcikpIC8gMjtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGggPD0gdnA7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRCcmVha3BvaW50Wm9uZSAoKSB7XG4gICAgYnJlYWtwb2ludFpvbmUgPSAwO1xuICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgIGJwID0gcGFyc2VJbnQoYnApOyAvLyBjb252ZXJ0IHN0cmluZyB0byBudW1iZXJcbiAgICAgIGlmICh3aW5kb3dXaWR0aCA+PSBicCkgeyBicmVha3BvaW50Wm9uZSA9IGJwOyB9XG4gICAgfVxuICB9XG5cbiAgLy8gKHNsaWRlQnksIGluZGV4TWluLCBpbmRleE1heCkgPT4gaW5kZXhcbiAgdmFyIHVwZGF0ZUluZGV4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9vcCA/XG4gICAgICBjYXJvdXNlbCA/XG4gICAgICAgIC8vIGxvb3AgKyBjYXJvdXNlbFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGxlZnRFZGdlID0gaW5kZXhNaW4sXG4gICAgICAgICAgICAgIHJpZ2h0RWRnZSA9IGluZGV4TWF4O1xuXG4gICAgICAgICAgbGVmdEVkZ2UgKz0gc2xpZGVCeTtcbiAgICAgICAgICByaWdodEVkZ2UgLT0gc2xpZGVCeTtcblxuICAgICAgICAgIC8vIGFkanVzdCBlZGdlcyB3aGVuIGhhcyBlZGdlIHBhZGRpbmdzXG4gICAgICAgICAgLy8gb3IgZml4ZWQtd2lkdGggc2xpZGVyIHdpdGggZXh0cmEgc3BhY2Ugb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICAgIGxlZnRFZGdlICs9IDE7XG4gICAgICAgICAgICByaWdodEVkZ2UgLT0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgICAgIGlmICgodmlld3BvcnQgKyBndXR0ZXIpJShmaXhlZFdpZHRoICsgZ3V0dGVyKSkgeyByaWdodEVkZ2UgLT0gMTsgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjbG9uZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiByaWdodEVkZ2UpIHtcbiAgICAgICAgICAgICAgaW5kZXggLT0gc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCBsZWZ0RWRnZSkge1xuICAgICAgICAgICAgICBpbmRleCArPSBzbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSA6XG4gICAgICAgIC8vIGxvb3AgKyBnYWxsZXJ5XG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChpbmRleCA+IGluZGV4TWF4KSB7XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPj0gaW5kZXhNaW4gKyBzbGlkZUNvdW50KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgaW5kZXhNaW4pIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8PSBpbmRleE1heCAtIHNsaWRlQ291bnQpIHsgaW5kZXggKz0gc2xpZGVDb3VudDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSA6XG4gICAgICAvLyBub24tbG9vcFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluZGV4ID0gTWF0aC5tYXgoaW5kZXhNaW4sIE1hdGgubWluKGluZGV4TWF4LCBpbmRleCkpO1xuICAgICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBkaXNhYmxlVUkgKCkge1xuICAgIGlmICghYXV0b3BsYXkgJiYgYXV0b3BsYXlCdXR0b24pIHsgaGlkZUVsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgaWYgKCFuYXYgJiYgbmF2Q29udGFpbmVyKSB7IGhpZGVFbGVtZW50KG5hdkNvbnRhaW5lcik7IH1cbiAgICBpZiAoIWNvbnRyb2xzKSB7XG4gICAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHtcbiAgICAgICAgaGlkZUVsZW1lbnQoY29udHJvbHNDb250YWluZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZXZCdXR0b24pIHsgaGlkZUVsZW1lbnQocHJldkJ1dHRvbik7IH1cbiAgICAgICAgaWYgKG5leHRCdXR0b24pIHsgaGlkZUVsZW1lbnQobmV4dEJ1dHRvbik7IH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVVSSAoKSB7XG4gICAgaWYgKGF1dG9wbGF5ICYmIGF1dG9wbGF5QnV0dG9uKSB7IHNob3dFbGVtZW50KGF1dG9wbGF5QnV0dG9uKTsgfVxuICAgIGlmIChuYXYgJiYgbmF2Q29udGFpbmVyKSB7IHNob3dFbGVtZW50KG5hdkNvbnRhaW5lcik7IH1cbiAgICBpZiAoY29udHJvbHMpIHtcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBzaG93RWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJldkJ1dHRvbikgeyBzaG93RWxlbWVudChwcmV2QnV0dG9uKTsgfVxuICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBzaG93RWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZyZWV6ZVNsaWRlciAoKSB7XG4gICAgaWYgKGZyb3plbikgeyByZXR1cm47IH1cblxuICAgIC8vIHJlbW92ZSBlZGdlIHBhZGRpbmcgZnJvbSBpbm5lciB3cmFwcGVyXG4gICAgaWYgKGVkZ2VQYWRkaW5nKSB7IGlubmVyV3JhcHBlci5zdHlsZS5tYXJnaW4gPSAnMHB4JzsgfVxuXG4gICAgLy8gYWRkIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JztcbiAgICAgIGZvciAodmFyIGkgPSBjbG9uZUNvdW50OyBpLS07KSB7XG4gICAgICAgIGlmIChjYXJvdXNlbCkgeyBhZGRDbGFzcyhzbGlkZUl0ZW1zW2ldLCBzdHIpOyB9XG4gICAgICAgIGFkZENsYXNzKHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGkgLSAxXSwgc3RyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBkaXNhYmxlVUkoKTtcblxuICAgIGZyb3plbiA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB1bmZyZWV6ZVNsaWRlciAoKSB7XG4gICAgaWYgKCFmcm96ZW4pIHsgcmV0dXJuOyB9XG5cbiAgICAvLyByZXN0b3JlIGVkZ2UgcGFkZGluZyBmb3IgaW5uZXIgd3JhcHBlclxuICAgIC8vIGZvciBtb3JkZXJuIGJyb3dzZXJzXG4gICAgaWYgKGVkZ2VQYWRkaW5nICYmIENTU01RKSB7IGlubmVyV3JhcHBlci5zdHlsZS5tYXJnaW4gPSAnJzsgfVxuXG4gICAgLy8gcmVtb3ZlIGNsYXNzIHRucy10cmFuc3BhcmVudCB0byBjbG9uZWQgc2xpZGVzXG4gICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgIHZhciBzdHIgPSAndG5zLXRyYW5zcGFyZW50JztcbiAgICAgIGZvciAodmFyIGkgPSBjbG9uZUNvdW50OyBpLS07KSB7XG4gICAgICAgIGlmIChjYXJvdXNlbCkgeyByZW1vdmVDbGFzcyhzbGlkZUl0ZW1zW2ldLCBzdHIpOyB9XG4gICAgICAgIHJlbW92ZUNsYXNzKHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGkgLSAxXSwgc3RyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBlbmFibGVVSSgpO1xuXG4gICAgZnJvemVuID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyICgpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBzaGVldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZShuZXdDb250YWluZXJDbGFzc2VzLnN1YnN0cmluZygxKSwgJycpO1xuICAgIHJlbW92ZUF0dHJzKGNvbnRhaW5lciwgWydzdHlsZSddKTtcbiAgICBpZiAobG9vcCkge1xuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgaWYgKGNhcm91c2VsKSB7IGhpZGVFbGVtZW50KHNsaWRlSXRlbXNbal0pOyB9XG4gICAgICAgIGhpZGVFbGVtZW50KHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGogLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmVydGljYWwgc2xpZGVyXG4gICAgaWYgKCFob3Jpem9udGFsIHx8ICFjYXJvdXNlbCkgeyByZW1vdmVBdHRycyhpbm5lcldyYXBwZXIsIFsnc3R5bGUnXSk7IH1cblxuICAgIC8vIGdhbGxlcnlcbiAgICBpZiAoIWNhcm91c2VsKSB7XG4gICAgICBmb3IgKHZhciBpID0gaW5kZXgsIGwgPSBpbmRleCArIHNsaWRlQ291bnQ7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuICAgICAgICByZW1vdmVBdHRycyhpdGVtLCBbJ3N0eWxlJ10pO1xuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlSW4pO1xuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBkaXNhYmxlVUkoKTtcblxuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZVNsaWRlciAoKSB7XG4gICAgaWYgKCFkaXNhYmxlZCkgeyByZXR1cm47IH1cblxuICAgIHNoZWV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSArPSBuZXdDb250YWluZXJDbGFzc2VzO1xuICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7XG5cbiAgICBpZiAobG9vcCkge1xuICAgICAgZm9yICh2YXIgaiA9IGNsb25lQ291bnQ7IGotLTspIHtcbiAgICAgICAgaWYgKGNhcm91c2VsKSB7IHNob3dFbGVtZW50KHNsaWRlSXRlbXNbal0pOyB9XG4gICAgICAgIHNob3dFbGVtZW50KHNsaWRlSXRlbXNbc2xpZGVDb3VudE5ldyAtIGogLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2FsbGVyeVxuICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgIGZvciAodmFyIGkgPSBpbmRleCwgbCA9IGluZGV4ICsgc2xpZGVDb3VudDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV0sXG4gICAgICAgICAgICBjbGFzc04gPSBpIDwgaW5kZXggKyBpdGVtcyA/IGFuaW1hdGVJbiA6IGFuaW1hdGVOb3JtYWw7XG4gICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7XG4gICAgICAgIGFkZENsYXNzKGl0ZW0sIGNsYXNzTik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHRvb2xzXG4gICAgZW5hYmxlVUkoKTtcblxuICAgIGRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXZlUmVnaW9uICgpIHtcbiAgICB2YXIgc3RyID0gZ2V0TGl2ZVJlZ2lvblN0cigpO1xuICAgIGlmIChsaXZlcmVnaW9uQ3VycmVudC5pbm5lckhUTUwgIT09IHN0cikgeyBsaXZlcmVnaW9uQ3VycmVudC5pbm5lckhUTUwgPSBzdHI7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpdmVSZWdpb25TdHIgKCkge1xuICAgIHZhciBhcnIgPSBnZXRWaXNpYmxlU2xpZGVSYW5nZSgpLFxuICAgICAgICBzdGFydCA9IGFyclswXSArIDEsXG4gICAgICAgIGVuZCA9IGFyclsxXSArIDE7XG4gICAgcmV0dXJuIHN0YXJ0ID09PSBlbmQgPyBzdGFydCArICcnIDogc3RhcnQgKyAnIHRvICcgKyBlbmQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWaXNpYmxlU2xpZGVSYW5nZSAodmFsKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7IHZhbCA9IGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlKCk7IH1cbiAgICB2YXIgc3RhcnQgPSBpbmRleCwgZW5kLCByYW5nZXN0YXJ0LCByYW5nZWVuZDtcblxuICAgIC8vIGdldCByYW5nZSBzdGFydCwgcmFuZ2UgZW5kIGZvciBhdXRvV2lkdGggYW5kIGZpeGVkV2lkdGhcbiAgICBpZiAoY2VudGVyIHx8IGVkZ2VQYWRkaW5nKSB7XG4gICAgICBpZiAoYXV0b1dpZHRoIHx8IGZpeGVkV2lkdGgpIHtcbiAgICAgICAgcmFuZ2VzdGFydCA9IC0gKHBhcnNlRmxvYXQodmFsKSArIGVkZ2VQYWRkaW5nKTtcbiAgICAgICAgcmFuZ2VlbmQgPSByYW5nZXN0YXJ0ICsgdmlld3BvcnQgKyBlZGdlUGFkZGluZyAqIDI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdXRvV2lkdGgpIHtcbiAgICAgICAgcmFuZ2VzdGFydCA9IHNsaWRlUG9zaXRpb25zW2luZGV4XTtcbiAgICAgICAgcmFuZ2VlbmQgPSByYW5nZXN0YXJ0ICsgdmlld3BvcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHN0YXJ0LCBlbmRcbiAgICAvLyAtIGNoZWNrIGF1dG8gd2lkdGhcbiAgICBpZiAoYXV0b1dpZHRoKSB7XG4gICAgICBzbGlkZVBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50LCBpKSB7XG4gICAgICAgIGlmIChpIDwgc2xpZGVDb3VudE5ldykge1xuICAgICAgICAgIGlmICgoY2VudGVyIHx8IGVkZ2VQYWRkaW5nKSAmJiBwb2ludCA8PSByYW5nZXN0YXJ0ICsgMC41KSB7IHN0YXJ0ID0gaTsgfVxuICAgICAgICAgIGlmIChyYW5nZWVuZCAtIHBvaW50ID49IDAuNSkgeyBlbmQgPSBpOyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgLy8gLSBjaGVjayBwZXJjZW50YWdlIHdpZHRoLCBmaXhlZCB3aWR0aFxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICAgIHZhciBjZWxsID0gZml4ZWRXaWR0aCArIGd1dHRlcjtcbiAgICAgICAgaWYgKGNlbnRlciB8fCBlZGdlUGFkZGluZykge1xuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihyYW5nZXN0YXJ0L2NlbGwpO1xuICAgICAgICAgIGVuZCA9IE1hdGguY2VpbChyYW5nZWVuZC9jZWxsIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBNYXRoLmNlaWwodmlld3BvcnQvY2VsbCkgLSAxO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjZW50ZXIgfHwgZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICB2YXIgYSA9IGl0ZW1zIC0gMTtcbiAgICAgICAgICBpZiAoY2VudGVyKSB7XG4gICAgICAgICAgICBzdGFydCAtPSBhIC8gMjtcbiAgICAgICAgICAgIGVuZCA9IGluZGV4ICsgYSAvIDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCA9IGluZGV4ICsgYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWRnZVBhZGRpbmcpIHtcbiAgICAgICAgICAgIHZhciBiID0gZWRnZVBhZGRpbmcgKiBpdGVtcyAvIHZpZXdwb3J0O1xuICAgICAgICAgICAgc3RhcnQgLT0gYjtcbiAgICAgICAgICAgIGVuZCArPSBiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihzdGFydCk7XG4gICAgICAgICAgZW5kID0gTWF0aC5jZWlsKGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5kID0gc3RhcnQgKyBpdGVtcyAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBNYXRoLm1heChzdGFydCwgMCk7XG4gICAgICBlbmQgPSBNYXRoLm1pbihlbmQsIHNsaWRlQ291bnROZXcgLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9MYXp5TG9hZCAoKSB7XG4gICAgaWYgKGxhenlsb2FkICYmICFkaXNhYmxlKSB7XG4gICAgICB2YXIgYXJnID0gZ2V0VmlzaWJsZVNsaWRlUmFuZ2UoKTtcbiAgICAgIGFyZy5wdXNoKGxhenlsb2FkU2VsZWN0b3IpO1xuXG4gICAgICBnZXRJbWFnZUFycmF5LmFwcGx5KG51bGwsIGFyZykuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGlmICghaGFzQ2xhc3MoaW1nLCBpbWdDb21wbGV0ZUNsYXNzKSkge1xuICAgICAgICAgIC8vIHN0b3AgcHJvcGFnYXRpb24gdHJhbnNpdGlvbmVuZCBldmVudCB0byBjb250YWluZXJcbiAgICAgICAgICB2YXIgZXZlID0ge307XG4gICAgICAgICAgZXZlW1RSQU5TSVRJT05FTkRdID0gZnVuY3Rpb24gKGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfTtcbiAgICAgICAgICBhZGRFdmVudHMoaW1nLCBldmUpO1xuXG4gICAgICAgICAgYWRkRXZlbnRzKGltZywgaW1nRXZlbnRzKTtcblxuICAgICAgICAgIC8vIHVwZGF0ZSBzcmNcbiAgICAgICAgICBpbWcuc3JjID0gZ2V0QXR0cihpbWcsICdkYXRhLXNyYycpO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIHNyY3NldFxuICAgICAgICAgIHZhciBzcmNzZXQgPSBnZXRBdHRyKGltZywgJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgaWYgKHNyY3NldCkgeyBpbWcuc3Jjc2V0ID0gc3Jjc2V0OyB9XG5cbiAgICAgICAgICBhZGRDbGFzcyhpbWcsICdsb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uSW1nTG9hZGVkIChlKSB7XG4gICAgaW1nTG9hZGVkKGdldFRhcmdldChlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkltZ0ZhaWxlZCAoZSkge1xuICAgIGltZ0ZhaWxlZChnZXRUYXJnZXQoZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1nTG9hZGVkIChpbWcpIHtcbiAgICBhZGRDbGFzcyhpbWcsICdsb2FkZWQnKTtcbiAgICBpbWdDb21wbGV0ZWQoaW1nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0ZhaWxlZCAoaW1nKSB7XG4gICAgYWRkQ2xhc3MoaW1nLCAnZmFpbGVkJyk7XG4gICAgaW1nQ29tcGxldGVkKGltZyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWdDb21wbGV0ZWQgKGltZykge1xuICAgIGFkZENsYXNzKGltZywgaW1nQ29tcGxldGVDbGFzcyk7XG4gICAgcmVtb3ZlQ2xhc3MoaW1nLCAnbG9hZGluZycpO1xuICAgIHJlbW92ZUV2ZW50cyhpbWcsIGltZ0V2ZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbWFnZUFycmF5IChzdGFydCwgZW5kLCBpbWdTZWxlY3Rvcikge1xuICAgIHZhciBpbWdzID0gW107XG4gICAgaWYgKCFpbWdTZWxlY3RvcikgeyBpbWdTZWxlY3RvciA9ICdpbWcnOyB9XG5cbiAgICB3aGlsZSAoc3RhcnQgPD0gZW5kKSB7XG4gICAgICBmb3JFYWNoKHNsaWRlSXRlbXNbc3RhcnRdLnF1ZXJ5U2VsZWN0b3JBbGwoaW1nU2VsZWN0b3IpLCBmdW5jdGlvbiAoaW1nKSB7IGltZ3MucHVzaChpbWcpOyB9KTtcbiAgICAgIHN0YXJ0Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltZ3M7XG4gIH1cblxuICAvLyBjaGVjayBpZiBhbGwgdmlzaWJsZSBpbWFnZXMgYXJlIGxvYWRlZFxuICAvLyBhbmQgdXBkYXRlIGNvbnRhaW5lciBoZWlnaHQgaWYgaXQncyBkb25lXG4gIGZ1bmN0aW9uIGRvQXV0b0hlaWdodCAoKSB7XG4gICAgdmFyIGltZ3MgPSBnZXRJbWFnZUFycmF5LmFwcGx5KG51bGwsIGdldFZpc2libGVTbGlkZVJhbmdlKCkpO1xuICAgIHJhZihmdW5jdGlvbigpeyBpbWdzTG9hZGVkQ2hlY2soaW1ncywgdXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0KTsgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWdzTG9hZGVkQ2hlY2sgKGltZ3MsIGNiKSB7XG4gICAgLy8gZXhlY3V0ZSBjYWxsYmFjayBmdW5jdGlvbiBpZiBhbGwgaW1hZ2VzIGFyZSBjb21wbGV0ZVxuICAgIGlmIChpbWdzQ29tcGxldGUpIHsgcmV0dXJuIGNiKCk7IH1cblxuICAgIC8vIGNoZWNrIGltYWdlIGNsYXNzZXNcbiAgICBpbWdzLmZvckVhY2goZnVuY3Rpb24gKGltZywgaW5kZXgpIHtcbiAgICAgIGlmICghbGF6eWxvYWQgJiYgaW1nLmNvbXBsZXRlKSB7IGltZ0NvbXBsZXRlZChpbWcpOyB9IC8vIENoZWNrIGltYWdlLmNvbXBsZXRlXG4gICAgICBpZiAoaGFzQ2xhc3MoaW1nLCBpbWdDb21wbGV0ZUNsYXNzKSkgeyBpbWdzLnNwbGljZShpbmRleCwgMSk7IH1cbiAgICB9KTtcblxuICAgIC8vIGV4ZWN1dGUgY2FsbGJhY2sgZnVuY3Rpb24gaWYgc2VsZWN0ZWQgaW1hZ2VzIGFyZSBhbGwgY29tcGxldGVcbiAgICBpZiAoIWltZ3MubGVuZ3RoKSB7IHJldHVybiBjYigpOyB9XG5cbiAgICAvLyBvdGhlcndpc2UgZXhlY3V0ZSB0aGlzIGZ1bmN0aW9uYSBhZ2FpblxuICAgIHJhZihmdW5jdGlvbigpeyBpbWdzTG9hZGVkQ2hlY2soaW1ncywgY2IpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZGl0aW9uYWxVcGRhdGVzICgpIHtcbiAgICBkb0xhenlMb2FkKCk7XG4gICAgdXBkYXRlU2xpZGVTdGF0dXMoKTtcbiAgICB1cGRhdGVMaXZlUmVnaW9uKCk7XG4gICAgdXBkYXRlQ29udHJvbHNTdGF0dXMoKTtcbiAgICB1cGRhdGVOYXZTdGF0dXMoKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gdXBkYXRlX2Nhcm91c2VsX3RyYW5zaXRpb25fZHVyYXRpb24gKCkge1xuICAgIGlmIChjYXJvdXNlbCAmJiBhdXRvSGVpZ2h0KSB7XG4gICAgICBtaWRkbGVXcmFwcGVyLnN0eWxlW1RSQU5TSVRJT05EVVJBVElPTl0gPSBzcGVlZCAvIDEwMDAgKyAncyc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWF4U2xpZGVIZWlnaHQgKHNsaWRlU3RhcnQsIHNsaWRlUmFuZ2UpIHtcbiAgICB2YXIgaGVpZ2h0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBzbGlkZVN0YXJ0LCBsID0gTWF0aC5taW4oc2xpZGVTdGFydCArIHNsaWRlUmFuZ2UsIHNsaWRlQ291bnROZXcpOyBpIDwgbDsgaSsrKSB7XG4gICAgICBoZWlnaHRzLnB1c2goc2xpZGVJdGVtc1tpXS5vZmZzZXRIZWlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBpbm5lciB3cmFwcGVyIGhlaWdodFxuICAvLyAxLiBnZXQgdGhlIG1heC1oZWlnaHQgb2YgdGhlIHZpc2libGUgc2xpZGVzXG4gIC8vIDIuIHNldCB0cmFuc2l0aW9uRHVyYXRpb24gdG8gc3BlZWRcbiAgLy8gMy4gdXBkYXRlIGlubmVyIHdyYXBwZXIgaGVpZ2h0IHRvIG1heC1oZWlnaHRcbiAgLy8gNC4gc2V0IHRyYW5zaXRpb25EdXJhdGlvbiB0byAwcyBhZnRlciB0cmFuc2l0aW9uIGRvbmVcbiAgZnVuY3Rpb24gdXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0ICgpIHtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gYXV0b0hlaWdodCA/IGdldE1heFNsaWRlSGVpZ2h0KGluZGV4LCBpdGVtcykgOiBnZXRNYXhTbGlkZUhlaWdodChjbG9uZUNvdW50LCBzbGlkZUNvdW50KSxcbiAgICAgICAgd3AgPSBtaWRkbGVXcmFwcGVyID8gbWlkZGxlV3JhcHBlciA6IGlubmVyV3JhcHBlcjtcblxuICAgIGlmICh3cC5zdHlsZS5oZWlnaHQgIT09IG1heEhlaWdodCkgeyB3cC5zdHlsZS5oZWlnaHQgPSBtYXhIZWlnaHQgKyAncHgnOyB9XG4gIH1cblxuICAvLyBnZXQgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBlZGdlIG9mIHRoZSBmaXJzdCBzbGlkZSB0byBlYWNoIHNsaWRlXG4gIC8vIChpbml0KSA9PiBzbGlkZVBvc2l0aW9uc1xuICBmdW5jdGlvbiBzZXRTbGlkZVBvc2l0aW9ucyAoKSB7XG4gICAgc2xpZGVQb3NpdGlvbnMgPSBbMF07XG4gICAgdmFyIGF0dHIgPSBob3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCcsXG4gICAgICAgIGF0dHIyID0gaG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJyxcbiAgICAgICAgYmFzZSA9IHNsaWRlSXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbYXR0cl07XG5cbiAgICBmb3JFYWNoKHNsaWRlSXRlbXMsIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgIC8vIHNraXAgdGhlIGZpcnN0IHNsaWRlXG4gICAgICBpZiAoaSkgeyBzbGlkZVBvc2l0aW9ucy5wdXNoKGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbYXR0cl0gLSBiYXNlKTsgfVxuICAgICAgLy8gYWRkIHRoZSBlbmQgZWRnZVxuICAgICAgaWYgKGkgPT09IHNsaWRlQ291bnROZXcgLSAxKSB7IHNsaWRlUG9zaXRpb25zLnB1c2goaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVthdHRyMl0gLSBiYXNlKTsgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdXBkYXRlIHNsaWRlXG4gIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlU3RhdHVzICgpIHtcbiAgICB2YXIgcmFuZ2UgPSBnZXRWaXNpYmxlU2xpZGVSYW5nZSgpLFxuICAgICAgICBzdGFydCA9IHJhbmdlWzBdLFxuICAgICAgICBlbmQgPSByYW5nZVsxXTtcblxuICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgLy8gc2hvdyBzbGlkZXNcbiAgICAgIGlmIChpID49IHN0YXJ0ICYmIGkgPD0gZW5kKSB7XG4gICAgICAgIGlmIChoYXNBdHRyKGl0ZW0sICdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgcmVtb3ZlQXR0cnMoaXRlbSwgWydhcmlhLWhpZGRlbicsICd0YWJpbmRleCddKTtcbiAgICAgICAgICBhZGRDbGFzcyhpdGVtLCBzbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgLy8gaGlkZSBzbGlkZXNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzQXR0cihpdGVtLCAnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIHNldEF0dHJzKGl0ZW0sIHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBzbGlkZUFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gZ2FsbGVyeTogdXBkYXRlIHNsaWRlIHBvc2l0aW9uXG4gIGZ1bmN0aW9uIHVwZGF0ZUdhbGxlcnlTbGlkZVBvc2l0aW9ucyAoKSB7XG4gICAgdmFyIGwgPSBpbmRleCArIE1hdGgubWluKHNsaWRlQ291bnQsIGl0ZW1zKTtcbiAgICBmb3IgKHZhciBpID0gc2xpZGVDb3VudE5ldzsgaS0tOykge1xuICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuXG4gICAgICBpZiAoaSA+PSBpbmRleCAmJiBpIDwgbCkge1xuICAgICAgICAvLyBhZGQgdHJhbnNpdGlvbnMgdG8gdmlzaWJsZSBzbGlkZXMgd2hlbiBhZGp1c3RpbmcgdGhlaXIgcG9zaXRpb25zXG4gICAgICAgIGFkZENsYXNzKGl0ZW0sICd0bnMtbW92aW5nJyk7XG5cbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZUluKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3R5bGUubGVmdCkge1xuICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSAnJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVJbik7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSBvdXRsZXQgYW5pbWF0aW9uXG4gICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlT3V0KTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmluZyAnLnRucy1tb3ZpbmcnXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsICd0bnMtbW92aW5nJyk7XG4gICAgICB9KTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgLy8gc2V0IHRhYmluZGV4IG9uIE5hdlxuICBmdW5jdGlvbiB1cGRhdGVOYXZTdGF0dXMgKCkge1xuICAgIC8vIGdldCBjdXJyZW50IG5hdlxuICAgIGlmIChuYXYpIHtcbiAgICAgIG5hdkN1cnJlbnRJbmRleCA9IG5hdkNsaWNrZWQgPj0gMCA/IG5hdkNsaWNrZWQgOiBnZXRDdXJyZW50TmF2SW5kZXgoKTtcbiAgICAgIG5hdkNsaWNrZWQgPSAtMTtcblxuICAgICAgaWYgKG5hdkN1cnJlbnRJbmRleCAhPT0gbmF2Q3VycmVudEluZGV4Q2FjaGVkKSB7XG4gICAgICAgIHZhciBuYXZQcmV2ID0gbmF2SXRlbXNbbmF2Q3VycmVudEluZGV4Q2FjaGVkXSxcbiAgICAgICAgICAgIG5hdkN1cnJlbnQgPSBuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhdO1xuXG4gICAgICAgIHNldEF0dHJzKG5hdlByZXYsIHtcbiAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICAgICAgICdhcmlhLWxhYmVsJzogbmF2U3RyICsgKG5hdkN1cnJlbnRJbmRleENhY2hlZCArIDEpXG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVDbGFzcyhuYXZQcmV2LCBuYXZBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgc2V0QXR0cnMobmF2Q3VycmVudCwgeydhcmlhLWxhYmVsJzogbmF2U3RyICsgKG5hdkN1cnJlbnRJbmRleCArIDEpICsgbmF2U3RyQ3VycmVudH0pO1xuICAgICAgICByZW1vdmVBdHRycyhuYXZDdXJyZW50LCAndGFiaW5kZXgnKTtcbiAgICAgICAgYWRkQ2xhc3MobmF2Q3VycmVudCwgbmF2QWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZCA9IG5hdkN1cnJlbnRJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMb3dlckNhc2VOb2RlTmFtZSAoZWwpIHtcbiAgICByZXR1cm4gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQnV0dG9uIChlbCkge1xuICAgIHJldHVybiBnZXRMb3dlckNhc2VOb2RlTmFtZShlbCkgPT09ICdidXR0b24nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBcmlhRGlzYWJsZWQgKGVsKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNFbmFibGVFbGVtZW50IChpc0J1dHRvbiwgZWwsIHZhbCkge1xuICAgIGlmIChpc0J1dHRvbikge1xuICAgICAgZWwuZGlzYWJsZWQgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHZhbC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgJ2Rpc2FibGVkJyB0byB0cnVlIG9uIGNvbnRyb2xzIHdoZW4gcmVhY2ggdGhlIGVkZ2VzXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbnRyb2xzU3RhdHVzICgpIHtcbiAgICBpZiAoIWNvbnRyb2xzIHx8IHJld2luZCB8fCBsb29wKSB7IHJldHVybjsgfVxuXG4gICAgdmFyIHByZXZEaXNhYmxlZCA9IChwcmV2SXNCdXR0b24pID8gcHJldkJ1dHRvbi5kaXNhYmxlZCA6IGlzQXJpYURpc2FibGVkKHByZXZCdXR0b24pLFxuICAgICAgICBuZXh0RGlzYWJsZWQgPSAobmV4dElzQnV0dG9uKSA/IG5leHRCdXR0b24uZGlzYWJsZWQgOiBpc0FyaWFEaXNhYmxlZChuZXh0QnV0dG9uKSxcbiAgICAgICAgZGlzYWJsZVByZXYgPSAoaW5kZXggPD0gaW5kZXhNaW4pID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlTmV4dCA9ICghcmV3aW5kICYmIGluZGV4ID49IGluZGV4TWF4KSA/IHRydWUgOiBmYWxzZTtcblxuICAgIGlmIChkaXNhYmxlUHJldiAmJiAhcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghZGlzYWJsZVByZXYgJiYgcHJldkRpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KHByZXZJc0J1dHRvbiwgcHJldkJ1dHRvbiwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZU5leHQgJiYgIW5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIWRpc2FibGVOZXh0ICYmIG5leHREaXNhYmxlZCkge1xuICAgICAgZGlzRW5hYmxlRWxlbWVudChuZXh0SXNCdXR0b24sIG5leHRCdXR0b24sIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZHVyYXRpb25cbiAgZnVuY3Rpb24gcmVzZXREdXJhdGlvbiAoZWwsIHN0cikge1xuICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgZWwuc3R5bGVbVFJBTlNJVElPTkRVUkFUSU9OXSA9IHN0cjsgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVyV2lkdGggKCkge1xuICAgIHJldHVybiBmaXhlZFdpZHRoID8gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogc2xpZGVDb3VudE5ldyA6IHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnROZXddO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2VudGVyR2FwIChudW0pIHtcbiAgICBpZiAobnVtID09IG51bGwpIHsgbnVtID0gaW5kZXg7IH1cblxuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGd1dHRlciA6IDA7XG4gICAgcmV0dXJuIGF1dG9XaWR0aCA/ICgodmlld3BvcnQgLSBnYXApIC0gKHNsaWRlUG9zaXRpb25zW251bSArIDFdIC0gc2xpZGVQb3NpdGlvbnNbbnVtXSAtIGd1dHRlcikpLzIgOlxuICAgICAgZml4ZWRXaWR0aCA/ICh2aWV3cG9ydCAtIGZpeGVkV2lkdGgpIC8gMiA6XG4gICAgICAgIChpdGVtcyAtIDEpIC8gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJpZ2h0Qm91bmRhcnkgKCkge1xuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGd1dHRlciA6IDAsXG4gICAgICAgIHJlc3VsdCA9ICh2aWV3cG9ydCArIGdhcCkgLSBnZXRTbGlkZXJXaWR0aCgpO1xuXG4gICAgaWYgKGNlbnRlciAmJiAhbG9vcCkge1xuICAgICAgcmVzdWx0ID0gZml4ZWRXaWR0aCA/IC0gKGZpeGVkV2lkdGggKyBndXR0ZXIpICogKHNsaWRlQ291bnROZXcgLSAxKSAtIGdldENlbnRlckdhcCgpIDpcbiAgICAgICAgZ2V0Q2VudGVyR2FwKHNsaWRlQ291bnROZXcgLSAxKSAtIHNsaWRlUG9zaXRpb25zW3NsaWRlQ291bnROZXcgLSAxXTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCA+IDApIHsgcmVzdWx0ID0gMDsgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlIChudW0pIHtcbiAgICBpZiAobnVtID09IG51bGwpIHsgbnVtID0gaW5kZXg7IH1cblxuICAgIHZhciB2YWw7XG4gICAgaWYgKGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCkge1xuICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgdmFsID0gLSAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBudW07XG4gICAgICAgIGlmIChjZW50ZXIpIHsgdmFsICs9IGdldENlbnRlckdhcCgpOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZGVub21pbmF0b3IgPSBUUkFOU0ZPUk0gPyBzbGlkZUNvdW50TmV3IDogaXRlbXM7XG4gICAgICAgIGlmIChjZW50ZXIpIHsgbnVtIC09IGdldENlbnRlckdhcCgpOyB9XG4gICAgICAgIHZhbCA9IC0gbnVtICogMTAwIC8gZGVub21pbmF0b3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IC0gc2xpZGVQb3NpdGlvbnNbbnVtXTtcbiAgICAgIGlmIChjZW50ZXIgJiYgYXV0b1dpZHRoKSB7XG4gICAgICAgIHZhbCArPSBnZXRDZW50ZXJHYXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzUmlnaHREZWFkWm9uZSkgeyB2YWwgPSBNYXRoLm1heCh2YWwsIHJpZ2h0Qm91bmRhcnkpOyB9XG5cbiAgICB2YWwgKz0gKGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCAmJiAhZml4ZWRXaWR0aCkgPyAnJScgOiAncHgnO1xuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50ICh2YWwpIHtcbiAgICByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJzBzJyk7XG4gICAgZG9Db250YWluZXJUcmFuc2Zvcm0odmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ29udGFpbmVyVHJhbnNmb3JtICh2YWwpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHsgdmFsID0gZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUoKTsgfVxuICAgIGNvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1BdHRyXSA9IHRyYW5zZm9ybVByZWZpeCArIHZhbCArIHRyYW5zZm9ybVBvc3RmaXg7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlU2xpZGUgKG51bWJlciwgY2xhc3NPdXQsIGNsYXNzSW4sIGlzT3V0KSB7XG4gICAgdmFyIGwgPSBudW1iZXIgKyBpdGVtcztcbiAgICBpZiAoIWxvb3ApIHsgbCA9IE1hdGgubWluKGwsIHNsaWRlQ291bnROZXcpOyB9XG5cbiAgICBmb3IgKHZhciBpID0gbnVtYmVyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXTtcblxuICAgICAgLy8gc2V0IGl0ZW0gcG9zaXRpb25zXG4gICAgICBpZiAoIWlzT3V0KSB7IGl0ZW0uc3R5bGUubGVmdCA9IChpIC0gaW5kZXgpICogMTAwIC8gaXRlbXMgKyAnJSc7IH1cblxuICAgICAgaWYgKGFuaW1hdGVEZWxheSAmJiBUUkFOU0lUSU9OREVMQVkpIHtcbiAgICAgICAgaXRlbS5zdHlsZVtUUkFOU0lUSU9OREVMQVldID0gaXRlbS5zdHlsZVtBTklNQVRJT05ERUxBWV0gPSBhbmltYXRlRGVsYXkgKiAoaSAtIG51bWJlcikgLyAxMDAwICsgJ3MnO1xuICAgICAgfVxuICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgY2xhc3NPdXQpO1xuICAgICAgYWRkQ2xhc3MoaXRlbSwgY2xhc3NJbik7XG5cbiAgICAgIGlmIChpc091dCkgeyBzbGlkZUl0ZW1zT3V0LnB1c2goaXRlbSk7IH1cbiAgICB9XG4gIH1cblxuICAvLyBtYWtlIHRyYW5zZmVyIGFmdGVyIGNsaWNrL2RyYWc6XG4gIC8vIDEuIGNoYW5nZSAndHJhbnNmb3JtJyBwcm9wZXJ0eSBmb3IgbW9yZGVybiBicm93c2Vyc1xuICAvLyAyLiBjaGFuZ2UgJ2xlZnQnIHByb3BlcnR5IGZvciBsZWdhY3kgYnJvd3NlcnNcbiAgdmFyIHRyYW5zZm9ybUNvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYXJvdXNlbCA/XG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0RHVyYXRpb24oY29udGFpbmVyLCAnJyk7XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04gfHwgIXNwZWVkKSB7XG4gICAgICAgICAgLy8gZm9yIG1vcmRlbiBicm93c2VycyB3aXRoIG5vbi16ZXJvIGR1cmF0aW9uIG9yXG4gICAgICAgICAgLy8gemVybyBkdXJhdGlvbiBmb3IgYWxsIGJyb3dzZXJzXG4gICAgICAgICAgZG9Db250YWluZXJUcmFuc2Zvcm0oKTtcbiAgICAgICAgICAvLyBydW4gZmFsbGJhY2sgZnVuY3Rpb24gbWFudWFsbHlcbiAgICAgICAgICAvLyB3aGVuIGR1cmF0aW9uIGlzIDAgLyBjb250YWluZXIgaXMgaGlkZGVuXG4gICAgICAgICAgaWYgKCFzcGVlZCB8fCAhaXNWaXNpYmxlKGNvbnRhaW5lcikpIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGZvciBvbGQgYnJvd3NlciB3aXRoIG5vbi16ZXJvIGR1cmF0aW9uXG4gICAgICAgICAganNUcmFuc2Zvcm0oY29udGFpbmVyLCB0cmFuc2Zvcm1BdHRyLCB0cmFuc2Zvcm1QcmVmaXgsIHRyYW5zZm9ybVBvc3RmaXgsIGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlKCksIHNwZWVkLCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFob3Jpem9udGFsKSB7IHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7IH1cbiAgICAgIH0gOlxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBzbGlkZUl0ZW1zT3V0ID0gW107XG5cbiAgICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBldmVbQU5JTUFUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgcmVtb3ZlRXZlbnRzKHNsaWRlSXRlbXNbaW5kZXhDYWNoZWRdLCBldmUpO1xuICAgICAgICBhZGRFdmVudHMoc2xpZGVJdGVtc1tpbmRleF0sIGV2ZSk7XG5cbiAgICAgICAgYW5pbWF0ZVNsaWRlKGluZGV4Q2FjaGVkLCBhbmltYXRlSW4sIGFuaW1hdGVPdXQsIHRydWUpO1xuICAgICAgICBhbmltYXRlU2xpZGUoaW5kZXgsIGFuaW1hdGVOb3JtYWwsIGFuaW1hdGVJbik7XG5cbiAgICAgICAgLy8gcnVuIGZhbGxiYWNrIGZ1bmN0aW9uIG1hbnVhbGx5XG4gICAgICAgIC8vIHdoZW4gdHJhbnNpdGlvbiBvciBhbmltYXRpb24gbm90IHN1cHBvcnRlZCAvIGR1cmF0aW9uIGlzIDBcbiAgICAgICAgaWYgKCFUUkFOU0lUSU9ORU5EIHx8ICFBTklNQVRJT05FTkQgfHwgIXNwZWVkIHx8ICFpc1Zpc2libGUoY29udGFpbmVyKSkgeyBvblRyYW5zaXRpb25FbmQoKTsgfVxuICAgICAgfTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiByZW5kZXIgKGUsIHNsaWRlck1vdmVkKSB7XG4gICAgaWYgKHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtKSB7IHVwZGF0ZUluZGV4KCk7IH1cblxuICAgIC8vIHJlbmRlciB3aGVuIHNsaWRlciB3YXMgbW92ZWQgKHRvdWNoIG9yIGRyYWcpIGV2ZW4gdGhvdWdoIGluZGV4IG1heSBub3QgY2hhbmdlXG4gICAgaWYgKGluZGV4ICE9PSBpbmRleENhY2hlZCB8fCBzbGlkZXJNb3ZlZCkge1xuICAgICAgLy8gZXZlbnRzXG4gICAgICBldmVudHMuZW1pdCgnaW5kZXhDaGFuZ2VkJywgaW5mbygpKTtcbiAgICAgIGV2ZW50cy5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnLCBpbmZvKCkpO1xuICAgICAgaWYgKGF1dG9IZWlnaHQpIHsgZG9BdXRvSGVpZ2h0KCk7IH1cblxuICAgICAgLy8gcGF1c2UgYXV0b3BsYXkgd2hlbiBjbGljayBvciBrZXlkb3duIGZyb20gdXNlclxuICAgICAgaWYgKGFuaW1hdGluZyAmJiBlICYmIFsnY2xpY2snLCAna2V5ZG93biddLmluZGV4T2YoZS50eXBlKSA+PSAwKSB7IHN0b3BBdXRvcGxheSgpOyB9XG5cbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgdHJhbnNmb3JtQ29yZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFRyYW5zZmVyIHByZWZpeGVkIHByb3BlcnRpZXMgdG8gdGhlIHNhbWUgZm9ybWF0XG4gICAqIENTUzogLVdlYmtpdC1UcmFuc2Zvcm0gPT4gd2Via2l0dHJhbnNmb3JtXG4gICAqIEpTOiBXZWJraXRUcmFuc2Zvcm0gPT4gd2Via2l0dHJhbnNmb3JtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBwcm9wZXJ0eVxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gc3RyVHJhbnMgKHN0cikge1xuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tL2csICcnKTtcbiAgfVxuXG4gIC8vIEFGVEVSIFRSQU5TRk9STVxuICAvLyBUaGluZ3MgbmVlZCB0byBiZSBkb25lIGFmdGVyIGEgdHJhbnNmZXI6XG4gIC8vIDEuIGNoZWNrIGluZGV4XG4gIC8vIDIuIGFkZCBjbGFzc2VzIHRvIHZpc2libGUgc2xpZGVcbiAgLy8gMy4gZGlzYWJsZSBjb250cm9scyBidXR0b25zIHdoZW4gcmVhY2ggdGhlIGZpcnN0L2xhc3Qgc2xpZGUgaW4gbm9uLWxvb3Agc2xpZGVyXG4gIC8vIDQuIHVwZGF0ZSBuYXYgc3RhdHVzXG4gIC8vIDUuIGxhenlsb2FkIGltYWdlc1xuICAvLyA2LiB1cGRhdGUgY29udGFpbmVyIGhlaWdodFxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQgKGV2ZW50KSB7XG4gICAgLy8gY2hlY2sgcnVubmluZyBvbiBnYWxsZXJ5IG1vZGVcbiAgICAvLyBtYWtlIHN1cmUgdHJhbnRpb25lbmQvYW5pbWF0aW9uZW5kIGV2ZW50cyBydW4gb25seSBvbmNlXG4gICAgaWYgKGNhcm91c2VsIHx8IHJ1bm5pbmcpIHtcbiAgICAgIGV2ZW50cy5lbWl0KCd0cmFuc2l0aW9uRW5kJywgaW5mbyhldmVudCkpO1xuXG4gICAgICBpZiAoIWNhcm91c2VsICYmIHNsaWRlSXRlbXNPdXQubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlSXRlbXNPdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNPdXRbaV07XG4gICAgICAgICAgLy8gc2V0IGl0ZW0gcG9zaXRpb25zXG4gICAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gJyc7XG5cbiAgICAgICAgICBpZiAoQU5JTUFUSU9OREVMQVkgJiYgVFJBTlNJVElPTkRFTEFZKSB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlW0FOSU1BVElPTkRFTEFZXSA9ICcnO1xuICAgICAgICAgICAgaXRlbS5zdHlsZVtUUkFOU0lUSU9OREVMQVldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVPdXQpO1xuICAgICAgICAgIGFkZENsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIHVwZGF0ZSBzbGlkZXMsIG5hdiwgY29udHJvbHMgYWZ0ZXIgY2hlY2tpbmcgLi4uXG4gICAgICAgKiA9PiBsZWdhY3kgYnJvd3NlcnMgd2hvIGRvbid0IHN1cHBvcnQgJ2V2ZW50J1xuICAgICAgICogICAgaGF2ZSB0byBjaGVjayBldmVudCBmaXJzdCwgb3RoZXJ3aXNlIGV2ZW50LnRhcmdldCB3aWxsIGNhdXNlIGFuIGVycm9yXG4gICAgICAgKiA9PiBvciAnZ2FsbGVyeScgbW9kZTpcbiAgICAgICAqICAgKyBldmVudCB0YXJnZXQgaXMgc2xpZGUgaXRlbVxuICAgICAgICogPT4gb3IgJ2Nhcm91c2VsJyBtb2RlOlxuICAgICAgICogICArIGV2ZW50IHRhcmdldCBpcyBjb250YWluZXIsXG4gICAgICAgKiAgICsgZXZlbnQucHJvcGVydHkgaXMgdGhlIHNhbWUgd2l0aCB0cmFuc2Zvcm0gYXR0cmlidXRlXG4gICAgICAgKi9cbiAgICAgIGlmICghZXZlbnQgfHxcbiAgICAgICAgICAhY2Fyb3VzZWwgJiYgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUgPT09IGNvbnRhaW5lciB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCA9PT0gY29udGFpbmVyICYmIHN0clRyYW5zKGV2ZW50LnByb3BlcnR5TmFtZSkgPT09IHN0clRyYW5zKHRyYW5zZm9ybUF0dHIpKSB7XG5cbiAgICAgICAgaWYgKCF1cGRhdGVJbmRleEJlZm9yZVRyYW5zZm9ybSkge1xuICAgICAgICAgIHZhciBpbmRleFRlbSA9IGluZGV4O1xuICAgICAgICAgIHVwZGF0ZUluZGV4KCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSBpbmRleFRlbSkge1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoJ2luZGV4Q2hhbmdlZCcsIGluZm8oKSk7XG5cbiAgICAgICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lc3RlZCA9PT0gJ2lubmVyJykgeyBldmVudHMuZW1pdCgnaW5uZXJMb2FkZWQnLCBpbmZvKCkpOyB9XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgaW5kZXhDYWNoZWQgPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8vICMgQUNUSU9OU1xuICBmdW5jdGlvbiBnb1RvICh0YXJnZXRJbmRleCwgZSkge1xuICAgIGlmIChmcmVlemUpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBwcmV2IHNsaWRlQnlcbiAgICBpZiAodGFyZ2V0SW5kZXggPT09ICdwcmV2Jykge1xuICAgICAgb25Db250cm9sc0NsaWNrKGUsIC0xKTtcblxuICAgIC8vIG5leHQgc2xpZGVCeVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0SW5kZXggPT09ICduZXh0Jykge1xuICAgICAgb25Db250cm9sc0NsaWNrKGUsIDEpO1xuXG4gICAgLy8gZ28gdG8gZXhhY3Qgc2xpZGVcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgICB9XG5cbiAgICAgIHZhciBhYnNJbmRleCA9IGdldEFic0luZGV4KCksXG4gICAgICAgICAgaW5kZXhHYXAgPSAwO1xuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09ICdmaXJzdCcpIHtcbiAgICAgICAgaW5kZXhHYXAgPSAtIGFic0luZGV4O1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gJ2xhc3QnKSB7XG4gICAgICAgIGluZGV4R2FwID0gY2Fyb3VzZWwgPyBzbGlkZUNvdW50IC0gaXRlbXMgLSBhYnNJbmRleCA6IHNsaWRlQ291bnQgLSAxIC0gYWJzSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldEluZGV4ICE9PSAnbnVtYmVyJykgeyB0YXJnZXRJbmRleCA9IHBhcnNlSW50KHRhcmdldEluZGV4KTsgfVxuXG4gICAgICAgIGlmICghaXNOYU4odGFyZ2V0SW5kZXgpKSB7XG4gICAgICAgICAgLy8gZnJvbSBkaXJlY3RseSBjYWxsZWQgZ29UbyBmdW5jdGlvblxuICAgICAgICAgIGlmICghZSkgeyB0YXJnZXRJbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNsaWRlQ291bnQgLSAxLCB0YXJnZXRJbmRleCkpOyB9XG5cbiAgICAgICAgICBpbmRleEdhcCA9IHRhcmdldEluZGV4IC0gYWJzSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZ2FsbGVyeTogbWFrZSBzdXJlIG5ldyBwYWdlIHdvbid0IG92ZXJsYXAgd2l0aCBjdXJyZW50IHBhZ2VcbiAgICAgIGlmICghY2Fyb3VzZWwgJiYgaW5kZXhHYXAgJiYgTWF0aC5hYnMoaW5kZXhHYXApIDwgaXRlbXMpIHtcbiAgICAgICAgdmFyIGZhY3RvciA9IGluZGV4R2FwID4gMCA/IDEgOiAtMTtcbiAgICAgICAgaW5kZXhHYXAgKz0gKGluZGV4ICsgaW5kZXhHYXAgLSBzbGlkZUNvdW50KSA+PSBpbmRleE1pbiA/IHNsaWRlQ291bnQgKiBmYWN0b3IgOiBzbGlkZUNvdW50ICogMiAqIGZhY3RvciAqIC0xO1xuICAgICAgfVxuXG4gICAgICBpbmRleCArPSBpbmRleEdhcDtcblxuICAgICAgLy8gbWFrZSBzdXJlIGluZGV4IGlzIGluIHJhbmdlXG4gICAgICBpZiAoY2Fyb3VzZWwgJiYgbG9vcCkge1xuICAgICAgICBpZiAoaW5kZXggPCBpbmRleE1pbikgeyBpbmRleCArPSBzbGlkZUNvdW50OyB9XG4gICAgICAgIGlmIChpbmRleCA+IGluZGV4TWF4KSB7IGluZGV4IC09IHNsaWRlQ291bnQ7IH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYgaW5kZXggaXMgY2hhbmdlZCwgc3RhcnQgcmVuZGVyaW5nXG4gICAgICBpZiAoZ2V0QWJzSW5kZXgoaW5kZXgpICE9PSBnZXRBYnNJbmRleChpbmRleENhY2hlZCkpIHtcbiAgICAgICAgcmVuZGVyKGUpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLy8gb24gY29udHJvbHMgY2xpY2tcbiAgZnVuY3Rpb24gb25Db250cm9sc0NsaWNrIChlLCBkaXIpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuICAgIHZhciBwYXNzRXZlbnRPYmplY3Q7XG5cbiAgICBpZiAoIWRpcikge1xuICAgICAgZSA9IGdldEV2ZW50KGUpO1xuICAgICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChlKTtcblxuICAgICAgd2hpbGUgKHRhcmdldCAhPT0gY29udHJvbHNDb250YWluZXIgJiYgW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KSA8IDApIHsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7IH1cblxuICAgICAgdmFyIHRhcmdldEluID0gW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgIGlmICh0YXJnZXRJbiA+PSAwKSB7XG4gICAgICAgIHBhc3NFdmVudE9iamVjdCA9IHRydWU7XG4gICAgICAgIGRpciA9IHRhcmdldEluID09PSAwID8gLTEgOiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXdpbmQpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gaW5kZXhNaW4gJiYgZGlyID09PSAtMSkge1xuICAgICAgICBnb1RvKCdsYXN0JywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGluZGV4TWF4ICYmIGRpciA9PT0gMSkge1xuICAgICAgICBnb1RvKCdmaXJzdCcsIGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpcikge1xuICAgICAgaW5kZXggKz0gc2xpZGVCeSAqIGRpcjtcbiAgICAgIGlmIChhdXRvV2lkdGgpIHsgaW5kZXggPSBNYXRoLmZsb29yKGluZGV4KTsgfVxuICAgICAgLy8gcGFzcyBlIHdoZW4gY2xpY2sgY29udHJvbCBidXR0b25zIG9yIGtleWRvd25cbiAgICAgIHJlbmRlcigocGFzc0V2ZW50T2JqZWN0IHx8IChlICYmIGUudHlwZSA9PT0gJ2tleWRvd24nKSkgPyBlIDogbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLy8gb24gbmF2IGNsaWNrXG4gIGZ1bmN0aW9uIG9uTmF2Q2xpY2sgKGUpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuXG4gICAgZSA9IGdldEV2ZW50KGUpO1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoZSksIG5hdkluZGV4O1xuXG4gICAgLy8gZmluZCB0aGUgY2xpY2tlZCBuYXYgaXRlbVxuICAgIHdoaWxlICh0YXJnZXQgIT09IG5hdkNvbnRhaW5lciAmJiAhaGFzQXR0cih0YXJnZXQsICdkYXRhLW5hdicpKSB7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlOyB9XG4gICAgaWYgKGhhc0F0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSkge1xuICAgICAgdmFyIG5hdkluZGV4ID0gbmF2Q2xpY2tlZCA9IE51bWJlcihnZXRBdHRyKHRhcmdldCwgJ2RhdGEtbmF2JykpLFxuICAgICAgICAgIHRhcmdldEluZGV4QmFzZSA9IGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoID8gbmF2SW5kZXggKiBzbGlkZUNvdW50IC8gcGFnZXMgOiBuYXZJbmRleCAqIGl0ZW1zLFxuICAgICAgICAgIHRhcmdldEluZGV4ID0gbmF2QXNUaHVtYm5haWxzID8gbmF2SW5kZXggOiBNYXRoLm1pbihNYXRoLmNlaWwodGFyZ2V0SW5kZXhCYXNlKSwgc2xpZGVDb3VudCAtIDEpO1xuICAgICAgZ29Ubyh0YXJnZXRJbmRleCwgZSk7XG5cbiAgICAgIGlmIChuYXZDdXJyZW50SW5kZXggPT09IG5hdkluZGV4KSB7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHsgc3RvcEF1dG9wbGF5KCk7IH1cbiAgICAgICAgbmF2Q2xpY2tlZCA9IC0xOyAvLyByZXNldCBuYXZDbGlja2VkXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gYXV0b3BsYXkgZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIHNldEF1dG9wbGF5VGltZXIgKCkge1xuICAgIGF1dG9wbGF5VGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2sobnVsbCwgYXV0b3BsYXlEaXJlY3Rpb24pO1xuICAgIH0sIGF1dG9wbGF5VGltZW91dCk7XG5cbiAgICBhbmltYXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcEF1dG9wbGF5VGltZXIgKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoYXV0b3BsYXlUaW1lcik7XG4gICAgYW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBdXRvcGxheUJ1dHRvbiAoYWN0aW9uLCB0eHQpIHtcbiAgICBzZXRBdHRycyhhdXRvcGxheUJ1dHRvbiwgeydkYXRhLWFjdGlvbic6IGFjdGlvbn0pO1xuICAgIGF1dG9wbGF5QnV0dG9uLmlubmVySFRNTCA9IGF1dG9wbGF5SHRtbFN0cmluZ3NbMF0gKyBhY3Rpb24gKyBhdXRvcGxheUh0bWxTdHJpbmdzWzFdICsgdHh0O1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRBdXRvcGxheSAoKSB7XG4gICAgc2V0QXV0b3BsYXlUaW1lcigpO1xuICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyB1cGRhdGVBdXRvcGxheUJ1dHRvbignc3RvcCcsIGF1dG9wbGF5VGV4dFsxXSk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BBdXRvcGxheSAoKSB7XG4gICAgc3RvcEF1dG9wbGF5VGltZXIoKTtcbiAgICBpZiAoYXV0b3BsYXlCdXR0b24pIHsgdXBkYXRlQXV0b3BsYXlCdXR0b24oJ3N0YXJ0JywgYXV0b3BsYXlUZXh0WzBdKTsgfVxuICB9XG5cbiAgLy8gcHJvZ3JhbWFpdGNhbGx5IHBsYXkvcGF1c2UgdGhlIHNsaWRlclxuICBmdW5jdGlvbiBwbGF5ICgpIHtcbiAgICBpZiAoYXV0b3BsYXkgJiYgIWFuaW1hdGluZykge1xuICAgICAgc3RhcnRBdXRvcGxheSgpO1xuICAgICAgYXV0b3BsYXlVc2VyUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICBzdG9wQXV0b3BsYXkoKTtcbiAgICAgIGF1dG9wbGF5VXNlclBhdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQXV0b3BsYXkgKCkge1xuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgYXV0b3BsYXlVc2VyUGF1c2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRBdXRvcGxheSgpO1xuICAgICAgYXV0b3BsYXlVc2VyUGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlICgpIHtcbiAgICBpZiAoZG9jLmhpZGRlbikge1xuICAgICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgICBzdG9wQXV0b3BsYXlUaW1lcigpO1xuICAgICAgICBhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXV0b3BsYXlWaXNpYmlsaXR5UGF1c2VkKSB7XG4gICAgICBzZXRBdXRvcGxheVRpbWVyKCk7XG4gICAgICBhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZW92ZXJQYXVzZSAoKSB7XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgc3RvcEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3V0UmVzdGFydCAoKSB7XG4gICAgaWYgKGF1dG9wbGF5SG92ZXJQYXVzZWQpIHtcbiAgICAgIHNldEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBrZXlkb3duIGV2ZW50cyBvbiBkb2N1bWVudFxuICBmdW5jdGlvbiBvbkRvY3VtZW50S2V5ZG93biAoZSkge1xuICAgIGUgPSBnZXRFdmVudChlKTtcbiAgICB2YXIga2V5SW5kZXggPSBbS0VZUy5MRUZULCBLRVlTLlJJR0hUXS5pbmRleE9mKGUua2V5Q29kZSk7XG5cbiAgICBpZiAoa2V5SW5kZXggPj0gMCkge1xuICAgICAgb25Db250cm9sc0NsaWNrKGUsIGtleUluZGV4ID09PSAwID8gLTEgOiAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBvbiBrZXkgY29udHJvbFxuICBmdW5jdGlvbiBvbkNvbnRyb2xzS2V5ZG93biAoZSkge1xuICAgIGUgPSBnZXRFdmVudChlKTtcbiAgICB2YXIga2V5SW5kZXggPSBbS0VZUy5MRUZULCBLRVlTLlJJR0hUXS5pbmRleE9mKGUua2V5Q29kZSk7XG5cbiAgICBpZiAoa2V5SW5kZXggPj0gMCkge1xuICAgICAgaWYgKGtleUluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmICghcHJldkJ1dHRvbi5kaXNhYmxlZCkgeyBvbkNvbnRyb2xzQ2xpY2soZSwgLTEpOyB9XG4gICAgICB9IGVsc2UgaWYgKCFuZXh0QnV0dG9uLmRpc2FibGVkKSB7XG4gICAgICAgIG9uQ29udHJvbHNDbGljayhlLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXQgZm9jdXNcbiAgZnVuY3Rpb24gc2V0Rm9jdXMgKGVsKSB7XG4gICAgZWwuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIG9uIGtleSBuYXZcbiAgZnVuY3Rpb24gb25OYXZLZXlkb3duIChlKSB7XG4gICAgZSA9IGdldEV2ZW50KGUpO1xuICAgIHZhciBjdXJFbGVtZW50ID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFoYXNBdHRyKGN1ckVsZW1lbnQsICdkYXRhLW5hdicpKSB7IHJldHVybjsgfVxuXG4gICAgLy8gdmFyIGNvZGUgPSBlLmtleUNvZGUsXG4gICAgdmFyIGtleUluZGV4ID0gW0tFWVMuTEVGVCwgS0VZUy5SSUdIVCwgS0VZUy5FTlRFUiwgS0VZUy5TUEFDRV0uaW5kZXhPZihlLmtleUNvZGUpLFxuICAgICAgICBuYXZJbmRleCA9IE51bWJlcihnZXRBdHRyKGN1ckVsZW1lbnQsICdkYXRhLW5hdicpKTtcblxuICAgIGlmIChrZXlJbmRleCA+PSAwKSB7XG4gICAgICBpZiAoa2V5SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYgKG5hdkluZGV4ID4gMCkgeyBzZXRGb2N1cyhuYXZJdGVtc1tuYXZJbmRleCAtIDFdKTsgfVxuICAgICAgfSBlbHNlIGlmIChrZXlJbmRleCA9PT0gMSkge1xuICAgICAgICBpZiAobmF2SW5kZXggPCBwYWdlcyAtIDEpIHsgc2V0Rm9jdXMobmF2SXRlbXNbbmF2SW5kZXggKyAxXSk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdkNsaWNrZWQgPSBuYXZJbmRleDtcbiAgICAgICAgZ29UbyhuYXZJbmRleCwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RXZlbnQgKGUpIHtcbiAgICBlID0gZSB8fCB3aW4uZXZlbnQ7XG4gICAgcmV0dXJuIGlzVG91Y2hFdmVudChlKSA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRhcmdldCAoZSkge1xuICAgIHJldHVybiBlLnRhcmdldCB8fCB3aW4uZXZlbnQuc3JjRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVG91Y2hFdmVudCAoZSkge1xuICAgIHJldHVybiBlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA+PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJldmVudERlZmF1bHRCZWhhdmlvciAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgKCkge1xuICAgIHJldHVybiBnZXRUb3VjaERpcmVjdGlvbih0b0RlZ3JlZShsYXN0UG9zaXRpb24ueSAtIGluaXRQb3NpdGlvbi55LCBsYXN0UG9zaXRpb24ueCAtIGluaXRQb3NpdGlvbi54KSwgc3dpcGVBbmdsZSkgPT09IG9wdGlvbnMuYXhpcztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFuU3RhcnQgKGUpIHtcbiAgICBpZiAocnVubmluZykge1xuICAgICAgaWYgKHByZXZlbnRBY3Rpb25XaGVuUnVubmluZykgeyByZXR1cm47IH0gZWxzZSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgfVxuXG4gICAgaWYgKGF1dG9wbGF5ICYmIGFuaW1hdGluZykgeyBzdG9wQXV0b3BsYXlUaW1lcigpOyB9XG5cbiAgICBwYW5TdGFydCA9IHRydWU7XG4gICAgaWYgKHJhZkluZGV4KSB7XG4gICAgICBjYWYocmFmSW5kZXgpO1xuICAgICAgcmFmSW5kZXggPSBudWxsO1xuICAgIH1cblxuICAgIHZhciAkID0gZ2V0RXZlbnQoZSk7XG4gICAgZXZlbnRzLmVtaXQoaXNUb3VjaEV2ZW50KGUpID8gJ3RvdWNoU3RhcnQnIDogJ2RyYWdTdGFydCcsIGluZm8oZSkpO1xuXG4gICAgaWYgKCFpc1RvdWNoRXZlbnQoZSkgJiYgWydpbWcnLCAnYSddLmluZGV4T2YoZ2V0TG93ZXJDYXNlTm9kZU5hbWUoZ2V0VGFyZ2V0KGUpKSkgPj0gMCkge1xuICAgICAgcHJldmVudERlZmF1bHRCZWhhdmlvcihlKTtcbiAgICB9XG5cbiAgICBsYXN0UG9zaXRpb24ueCA9IGluaXRQb3NpdGlvbi54ID0gJC5jbGllbnRYO1xuICAgIGxhc3RQb3NpdGlvbi55ID0gaW5pdFBvc2l0aW9uLnkgPSAkLmNsaWVudFk7XG4gICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICB0cmFuc2xhdGVJbml0ID0gcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0ucmVwbGFjZSh0cmFuc2Zvcm1QcmVmaXgsICcnKSk7XG4gICAgICByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJzBzJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25QYW5Nb3ZlIChlKSB7XG4gICAgaWYgKHBhblN0YXJ0KSB7XG4gICAgICB2YXIgJCA9IGdldEV2ZW50KGUpO1xuICAgICAgbGFzdFBvc2l0aW9uLnggPSAkLmNsaWVudFg7XG4gICAgICBsYXN0UG9zaXRpb24ueSA9ICQuY2xpZW50WTtcblxuICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgIGlmICghcmFmSW5kZXgpIHsgcmFmSW5kZXggPSByYWYoZnVuY3Rpb24oKXsgcGFuVXBkYXRlKGUpOyB9KTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9PT0gJz8nKSB7IG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9IGdldE1vdmVEaXJlY3Rpb25FeHBlY3RlZCgpOyB9XG4gICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQpIHsgcHJldmVudFNjcm9sbCA9IHRydWU7IH1cbiAgICAgIH1cblxuICAgICAgaWYgKCh0eXBlb2YgZS5jYW5jZWxhYmxlICE9PSAnYm9vbGVhbicgfHwgZS5jYW5jZWxhYmxlKSAmJiBwcmV2ZW50U2Nyb2xsKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYW5VcGRhdGUgKGUpIHtcbiAgICBpZiAoIW1vdmVEaXJlY3Rpb25FeHBlY3RlZCkge1xuICAgICAgcGFuU3RhcnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FmKHJhZkluZGV4KTtcbiAgICBpZiAocGFuU3RhcnQpIHsgcmFmSW5kZXggPSByYWYoZnVuY3Rpb24oKXsgcGFuVXBkYXRlKGUpOyB9KTsgfVxuXG4gICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9PT0gJz8nKSB7IG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9IGdldE1vdmVEaXJlY3Rpb25FeHBlY3RlZCgpOyB9XG4gICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCkge1xuICAgICAgaWYgKCFwcmV2ZW50U2Nyb2xsICYmIGlzVG91Y2hFdmVudChlKSkgeyBwcmV2ZW50U2Nyb2xsID0gdHJ1ZTsgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZS50eXBlKSB7IGV2ZW50cy5lbWl0KGlzVG91Y2hFdmVudChlKSA/ICd0b3VjaE1vdmUnIDogJ2RyYWdNb3ZlJywgaW5mbyhlKSk7IH1cbiAgICAgIH0gY2F0Y2goZXJyKSB7fVxuXG4gICAgICB2YXIgeCA9IHRyYW5zbGF0ZUluaXQsXG4gICAgICAgICAgZGlzdCA9IGdldERpc3QobGFzdFBvc2l0aW9uLCBpbml0UG9zaXRpb24pO1xuICAgICAgaWYgKCFob3Jpem9udGFsIHx8IGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoKSB7XG4gICAgICAgIHggKz0gZGlzdDtcbiAgICAgICAgeCArPSAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBlcmNlbnRhZ2VYID0gVFJBTlNGT1JNID8gZGlzdCAqIGl0ZW1zICogMTAwIC8gKCh2aWV3cG9ydCArIGd1dHRlcikgKiBzbGlkZUNvdW50TmV3KTogZGlzdCAqIDEwMCAvICh2aWV3cG9ydCArIGd1dHRlcik7XG4gICAgICAgIHggKz0gcGVyY2VudGFnZVg7XG4gICAgICAgIHggKz0gJyUnO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXIuc3R5bGVbdHJhbnNmb3JtQXR0cl0gPSB0cmFuc2Zvcm1QcmVmaXggKyB4ICsgdHJhbnNmb3JtUG9zdGZpeDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBhbkVuZCAoZSkge1xuICAgIGlmIChwYW5TdGFydCkge1xuICAgICAgaWYgKHJhZkluZGV4KSB7XG4gICAgICAgIGNhZihyYWZJbmRleCk7XG4gICAgICAgIHJhZkluZGV4ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChjYXJvdXNlbCkgeyByZXNldER1cmF0aW9uKGNvbnRhaW5lciwgJycpOyB9XG4gICAgICBwYW5TdGFydCA9IGZhbHNlO1xuXG4gICAgICB2YXIgJCA9IGdldEV2ZW50KGUpO1xuICAgICAgbGFzdFBvc2l0aW9uLnggPSAkLmNsaWVudFg7XG4gICAgICBsYXN0UG9zaXRpb24ueSA9ICQuY2xpZW50WTtcbiAgICAgIHZhciBkaXN0ID0gZ2V0RGlzdChsYXN0UG9zaXRpb24sIGluaXRQb3NpdGlvbik7XG5cbiAgICAgIGlmIChNYXRoLmFicyhkaXN0KSkge1xuICAgICAgICAvLyBkcmFnIHZzIGNsaWNrXG4gICAgICAgIGlmICghaXNUb3VjaEV2ZW50KGUpKSB7XG4gICAgICAgICAgLy8gcHJldmVudCBcImNsaWNrXCJcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGUpO1xuICAgICAgICAgIGFkZEV2ZW50cyh0YXJnZXQsIHsnY2xpY2snOiBmdW5jdGlvbiBwcmV2ZW50Q2xpY2sgKGUpIHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0QmVoYXZpb3IoZSk7XG4gICAgICAgICAgICByZW1vdmVFdmVudHModGFyZ2V0LCB7J2NsaWNrJzogcHJldmVudENsaWNrfSk7XG4gICAgICAgICAgfX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgICAgcmFmSW5kZXggPSByYWYoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoKSB7XG4gICAgICAgICAgICAgIHZhciBpbmRleE1vdmVkID0gLSBkaXN0ICogaXRlbXMgLyAodmlld3BvcnQgKyBndXR0ZXIpO1xuICAgICAgICAgICAgICBpbmRleE1vdmVkID0gZGlzdCA+IDAgPyBNYXRoLmZsb29yKGluZGV4TW92ZWQpIDogTWF0aC5jZWlsKGluZGV4TW92ZWQpO1xuICAgICAgICAgICAgICBpbmRleCArPSBpbmRleE1vdmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG1vdmVkID0gLSAodHJhbnNsYXRlSW5pdCArIGRpc3QpO1xuICAgICAgICAgICAgICBpZiAobW92ZWQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaW5kZXhNaW47XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZWQgPj0gc2xpZGVQb3NpdGlvbnNbc2xpZGVDb3VudE5ldyAtIDFdKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleE1heDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBzbGlkZUNvdW50TmV3ICYmIG1vdmVkID49IHNsaWRlUG9zaXRpb25zW2ldKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICBpZiAobW92ZWQgPiBzbGlkZVBvc2l0aW9uc1tpXSAmJiBkaXN0IDwgMCkgeyBpbmRleCArPSAxOyB9XG4gICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbmRlcihlLCBkaXN0KTtcbiAgICAgICAgICAgIGV2ZW50cy5lbWl0KGlzVG91Y2hFdmVudChlKSA/ICd0b3VjaEVuZCcgOiAnZHJhZ0VuZCcsIGluZm8oZSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQpIHtcbiAgICAgICAgICAgIG9uQ29udHJvbHNDbGljayhlLCBkaXN0ID4gMCA/IC0xIDogMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXRcbiAgICBpZiAob3B0aW9ucy5wcmV2ZW50U2Nyb2xsT25Ub3VjaCA9PT0gJ2F1dG8nKSB7IHByZXZlbnRTY3JvbGwgPSBmYWxzZTsgfVxuICAgIGlmIChzd2lwZUFuZ2xlKSB7IG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9ICc/JzsgfVxuICAgIGlmIChhdXRvcGxheSAmJiAhYW5pbWF0aW5nKSB7IHNldEF1dG9wbGF5VGltZXIoKTsgfVxuICB9XG5cbiAgLy8gPT09IFJFU0laRSBGVU5DVElPTlMgPT09IC8vXG4gIC8vIChzbGlkZVBvc2l0aW9ucywgaW5kZXgsIGl0ZW1zKSA9PiB2ZXJ0aWNhbF9jb25lbnRXcmFwcGVyLmhlaWdodFxuICBmdW5jdGlvbiB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCAoKSB7XG4gICAgdmFyIHdwID0gbWlkZGxlV3JhcHBlciA/IG1pZGRsZVdyYXBwZXIgOiBpbm5lcldyYXBwZXI7XG4gICAgd3Auc3R5bGUuaGVpZ2h0ID0gc2xpZGVQb3NpdGlvbnNbaW5kZXggKyBpdGVtc10gLSBzbGlkZVBvc2l0aW9uc1tpbmRleF0gKyAncHgnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFnZXMgKCkge1xuICAgIHZhciByb3VnaCA9IGZpeGVkV2lkdGggPyAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBzbGlkZUNvdW50IC8gdmlld3BvcnQgOiBzbGlkZUNvdW50IC8gaXRlbXM7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGguY2VpbChyb3VnaCksIHNsaWRlQ291bnQpO1xuICB9XG5cbiAgLypcbiAgICogMS4gdXBkYXRlIHZpc2libGUgbmF2IGl0ZW1zIGxpc3RcbiAgICogMi4gYWRkIFwiaGlkZGVuXCIgYXR0cmlidXRlcyB0byBwcmV2aW91cyB2aXNpYmxlIG5hdiBpdGVtc1xuICAgKiAzLiByZW1vdmUgXCJoaWRkZW5cIiBhdHRydWJ1dGVzIHRvIG5ldyB2aXNpYmxlIG5hdiBpdGVtc1xuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlTmF2VmlzaWJpbGl0eSAoKSB7XG4gICAgaWYgKCFuYXYgfHwgbmF2QXNUaHVtYm5haWxzKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKHBhZ2VzICE9PSBwYWdlc0NhY2hlZCkge1xuICAgICAgdmFyIG1pbiA9IHBhZ2VzQ2FjaGVkLFxuICAgICAgICAgIG1heCA9IHBhZ2VzLFxuICAgICAgICAgIGZuID0gc2hvd0VsZW1lbnQ7XG5cbiAgICAgIGlmIChwYWdlc0NhY2hlZCA+IHBhZ2VzKSB7XG4gICAgICAgIG1pbiA9IHBhZ2VzO1xuICAgICAgICBtYXggPSBwYWdlc0NhY2hlZDtcbiAgICAgICAgZm4gPSBoaWRlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG1pbiA8IG1heCkge1xuICAgICAgICBmbihuYXZJdGVtc1ttaW5dKTtcbiAgICAgICAgbWluKys7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhY2hlIHBhZ2VzXG4gICAgICBwYWdlc0NhY2hlZCA9IHBhZ2VzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluZm8gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBzbGlkZUl0ZW1zOiBzbGlkZUl0ZW1zLFxuICAgICAgbmF2Q29udGFpbmVyOiBuYXZDb250YWluZXIsXG4gICAgICBuYXZJdGVtczogbmF2SXRlbXMsXG4gICAgICBjb250cm9sc0NvbnRhaW5lcjogY29udHJvbHNDb250YWluZXIsXG4gICAgICBoYXNDb250cm9sczogaGFzQ29udHJvbHMsXG4gICAgICBwcmV2QnV0dG9uOiBwcmV2QnV0dG9uLFxuICAgICAgbmV4dEJ1dHRvbjogbmV4dEJ1dHRvbixcbiAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgIHNsaWRlQnk6IHNsaWRlQnksXG4gICAgICBjbG9uZUNvdW50OiBjbG9uZUNvdW50LFxuICAgICAgc2xpZGVDb3VudDogc2xpZGVDb3VudCxcbiAgICAgIHNsaWRlQ291bnROZXc6IHNsaWRlQ291bnROZXcsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBpbmRleENhY2hlZDogaW5kZXhDYWNoZWQsXG4gICAgICBkaXNwbGF5SW5kZXg6IGdldEN1cnJlbnRTbGlkZSgpLFxuICAgICAgbmF2Q3VycmVudEluZGV4OiBuYXZDdXJyZW50SW5kZXgsXG4gICAgICBuYXZDdXJyZW50SW5kZXhDYWNoZWQ6IG5hdkN1cnJlbnRJbmRleENhY2hlZCxcbiAgICAgIHBhZ2VzOiBwYWdlcyxcbiAgICAgIHBhZ2VzQ2FjaGVkOiBwYWdlc0NhY2hlZCxcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIGlzT246IGlzT24sXG4gICAgICBldmVudDogZSB8fCB7fSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnMi45LjMnLFxuICAgIGdldEluZm86IGluZm8sXG4gICAgZXZlbnRzOiBldmVudHMsXG4gICAgZ29UbzogZ29UbyxcbiAgICBwbGF5OiBwbGF5LFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICBpc09uOiBpc09uLFxuICAgIHVwZGF0ZVNsaWRlckhlaWdodDogdXBkYXRlSW5uZXJXcmFwcGVySGVpZ2h0LFxuICAgIHJlZnJlc2g6IGluaXRTbGlkZXJUcmFuc2Zvcm0sXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZWJ1aWxkOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0bnMoZXh0ZW5kKG9wdGlvbnMsIG9wdGlvbnNFbGVtZW50cykpO1xuICAgIH1cbiAgfTtcbn07XG4iLCIvLyBPYmplY3Qua2V5c1xuaWYgKCFPYmplY3Qua2V5cykge1xuICBPYmplY3Qua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBuYW1lKSkge1xuICAgICAgICBrZXlzLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9O1xufVxuXG4vLyBDaGlsZE5vZGUucmVtb3ZlXG5pZighKFwicmVtb3ZlXCIgaW4gRWxlbWVudC5wcm90b3R5cGUpKXtcbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKXtcbiAgICBpZih0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbmltcG9ydCB7IHJhZiB9IGZyb20gJy4vaGVscGVycy9yYWYuanMnO1xuaW1wb3J0IHsgY2FmIH0gZnJvbSAnLi9oZWxwZXJzL2NhZi5qcyc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL2hlbHBlcnMvZXh0ZW5kLmpzJztcbmltcG9ydCB7IGNoZWNrU3RvcmFnZVZhbHVlIH0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrU3RvcmFnZVZhbHVlLmpzJztcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gJy4vaGVscGVycy9zZXRMb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgZ2V0U2xpZGVJZCB9IGZyb20gJy4vaGVscGVycy9nZXRTbGlkZUlkLmpzJztcbmltcG9ydCB7IGNhbGMgfSBmcm9tICcuL2hlbHBlcnMvY2FsYy5qcyc7XG5pbXBvcnQgeyBwZXJjZW50YWdlTGF5b3V0IH0gZnJvbSAnLi9oZWxwZXJzL3BlcmNlbnRhZ2VMYXlvdXQuanMnO1xuaW1wb3J0IHsgbWVkaWFxdWVyeVN1cHBvcnQgfSBmcm9tICcuL2hlbHBlcnMvbWVkaWFxdWVyeVN1cHBvcnQuanMnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVTaGVldCB9IGZyb20gJy4vaGVscGVycy9jcmVhdGVTdHlsZVNoZWV0LmpzJztcbmltcG9ydCB7IGFkZENTU1J1bGUgfSBmcm9tICcuL2hlbHBlcnMvYWRkQ1NTUnVsZS5qcyc7XG5pbXBvcnQgeyByZW1vdmVDU1NSdWxlIH0gZnJvbSAnLi9oZWxwZXJzL3JlbW92ZUNTU1J1bGUuanMnO1xuaW1wb3J0IHsgZ2V0Q3NzUnVsZXNMZW5ndGggfSBmcm9tICcuL2hlbHBlcnMvZ2V0Q3NzUnVsZXNMZW5ndGguanMnO1xuaW1wb3J0IHsgdG9EZWdyZWUgfSBmcm9tICcuL2hlbHBlcnMvdG9EZWdyZWUuanMnO1xuaW1wb3J0IHsgZ2V0VG91Y2hEaXJlY3Rpb24gfSBmcm9tICcuL2hlbHBlcnMvZ2V0VG91Y2hEaXJlY3Rpb24uanMnO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vaGVscGVycy9mb3JFYWNoLmpzJztcbmltcG9ydCB7IGhhc0NsYXNzIH0gZnJvbSAnLi9oZWxwZXJzL2hhc0NsYXNzLmpzJztcbmltcG9ydCB7IGFkZENsYXNzIH0gZnJvbSAnLi9oZWxwZXJzL2FkZENsYXNzLmpzJztcbmltcG9ydCB7IHJlbW92ZUNsYXNzIH0gZnJvbSAnLi9oZWxwZXJzL3JlbW92ZUNsYXNzLmpzJztcbmltcG9ydCB7IGhhc0F0dHIgfSBmcm9tICcuL2hlbHBlcnMvaGFzQXR0ci5qcyc7XG5pbXBvcnQgeyBnZXRBdHRyIH0gZnJvbSAnLi9oZWxwZXJzL2dldEF0dHIuanMnO1xuaW1wb3J0IHsgc2V0QXR0cnMgfSBmcm9tICcuL2hlbHBlcnMvc2V0QXR0cnMuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQXR0cnMgfSBmcm9tICcuL2hlbHBlcnMvcmVtb3ZlQXR0cnMuanMnO1xuaW1wb3J0IHsgYXJyYXlGcm9tTm9kZUxpc3QgfSBmcm9tICcuL2hlbHBlcnMvYXJyYXlGcm9tTm9kZUxpc3QuanMnO1xuaW1wb3J0IHsgaGlkZUVsZW1lbnQgfSBmcm9tICcuL2hlbHBlcnMvaGlkZUVsZW1lbnQuanMnO1xuaW1wb3J0IHsgc2hvd0VsZW1lbnQgfSBmcm9tICcuL2hlbHBlcnMvc2hvd0VsZW1lbnQuanMnO1xuaW1wb3J0IHsgaXNWaXNpYmxlIH0gZnJvbSAnLi9oZWxwZXJzL2lzVmlzaWJsZS5qcyc7XG5pbXBvcnQgeyB3aGljaFByb3BlcnR5IH0gZnJvbSAnLi9oZWxwZXJzL3doaWNoUHJvcGVydHkuanMnO1xuaW1wb3J0IHsgaGFzM0RUcmFuc2Zvcm1zIH0gZnJvbSAnLi9oZWxwZXJzL2hhczNEVHJhbnNmb3Jtcy5qcyc7XG5pbXBvcnQgeyBnZXRFbmRQcm9wZXJ0eSB9IGZyb20gJy4vaGVscGVycy9nZXRFbmRQcm9wZXJ0eS5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudHMgfSBmcm9tICcuL2hlbHBlcnMvYWRkRXZlbnRzLmpzJztcbmltcG9ydCB7IHJlbW92ZUV2ZW50cyB9IGZyb20gJy4vaGVscGVycy9yZW1vdmVFdmVudHMuanMnO1xuaW1wb3J0IHsgRXZlbnRzIH0gZnJvbSAnLi9oZWxwZXJzL2V2ZW50cy5qcyc7XG5pbXBvcnQgeyBqc1RyYW5zZm9ybSB9IGZyb20gJy4vaGVscGVycy9qc1RyYW5zZm9ybS5qcyc7XG5cbmV4cG9ydCB2YXIgdG5zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBvcHRpb25zID0gZXh0ZW5kKHtcbiAgICBjb250YWluZXI6ICcuc2xpZGVyJyxcbiAgICBtb2RlOiAnY2Fyb3VzZWwnLFxuICAgIGF4aXM6ICdob3Jpem9udGFsJyxcbiAgICBpdGVtczogMSxcbiAgICBndXR0ZXI6IDAsXG4gICAgZWRnZVBhZGRpbmc6IDAsXG4gICAgZml4ZWRXaWR0aDogZmFsc2UsXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcbiAgICB2aWV3cG9ydE1heDogZmFsc2UsXG4gICAgc2xpZGVCeTogMSxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgIGNvbnRyb2xzUG9zaXRpb246ICd0b3AnLFxuICAgIGNvbnRyb2xzVGV4dDogWydwcmV2JywgJ25leHQnXSxcbiAgICBjb250cm9sc0NvbnRhaW5lcjogZmFsc2UsXG4gICAgcHJldkJ1dHRvbjogZmFsc2UsXG4gICAgbmV4dEJ1dHRvbjogZmFsc2UsXG4gICAgbmF2OiB0cnVlLFxuICAgIG5hdlBvc2l0aW9uOiAndG9wJyxcbiAgICBuYXZDb250YWluZXI6IGZhbHNlLFxuICAgIG5hdkFzVGh1bWJuYWlsczogZmFsc2UsXG4gICAgYXJyb3dLZXlzOiBmYWxzZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICBhdXRvcGxheVBvc2l0aW9uOiAndG9wJyxcbiAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG4gICAgYXV0b3BsYXlEaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICBhdXRvcGxheVRleHQ6IFsnc3RhcnQnLCAnc3RvcCddLFxuICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogZmFsc2UsXG4gICAgYXV0b3BsYXlCdXR0b246IGZhbHNlLFxuICAgIGF1dG9wbGF5QnV0dG9uT3V0cHV0OiB0cnVlLFxuICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHk6IHRydWUsXG4gICAgYW5pbWF0ZUluOiAndG5zLWZhZGVJbicsXG4gICAgYW5pbWF0ZU91dDogJ3Rucy1mYWRlT3V0JyxcbiAgICBhbmltYXRlTm9ybWFsOiAndG5zLW5vcm1hbCcsXG4gICAgYW5pbWF0ZURlbGF5OiBmYWxzZSxcbiAgICBsb29wOiB0cnVlLFxuICAgIHJld2luZDogZmFsc2UsXG4gICAgYXV0b0hlaWdodDogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZTogZmFsc2UsXG4gICAgbGF6eWxvYWQ6IGZhbHNlLFxuICAgIGxhenlsb2FkU2VsZWN0b3I6ICcudG5zLWxhenktaW1nJyxcbiAgICB0b3VjaDogdHJ1ZSxcbiAgICBtb3VzZURyYWc6IGZhbHNlLFxuICAgIHN3aXBlQW5nbGU6IDE1LFxuICAgIG5lc3RlZDogZmFsc2UsXG4gICAgcHJldmVudEFjdGlvbldoZW5SdW5uaW5nOiBmYWxzZSxcbiAgICBwcmV2ZW50U2Nyb2xsT25Ub3VjaDogZmFsc2UsXG4gICAgZnJlZXphYmxlOiB0cnVlLFxuICAgIG9uSW5pdDogZmFsc2UsXG4gICAgdXNlTG9jYWxTdG9yYWdlOiB0cnVlLFxuICAgIG5vbmNlOiBmYWxzZVxuICB9LCBvcHRpb25zIHx8IHt9KTtcblxuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICB3aW4gPSB3aW5kb3csXG4gICAgICBLRVlTID0ge1xuICAgICAgICBFTlRFUjogMTMsXG4gICAgICAgIFNQQUNFOiAzMixcbiAgICAgICAgTEVGVDogMzcsXG4gICAgICAgIFJJR0hUOiAzOVxuICAgICAgfSxcbiAgICAgIHRuc1N0b3JhZ2UgPSB7fSxcbiAgICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IG9wdGlvbnMudXNlTG9jYWxTdG9yYWdlO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2VBY2Nlc3MpIHtcbiAgICAvLyBjaGVjayBicm93c2VyIHZlcnNpb24gYW5kIGxvY2FsIHN0b3JhZ2UgYWNjZXNzXG4gICAgdmFyIGJyb3dzZXJJbmZvID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICB2YXIgdWlkID0gbmV3IERhdGU7XG5cbiAgICB0cnkge1xuICAgICAgdG5zU3RvcmFnZSA9IHdpbi5sb2NhbFN0b3JhZ2U7XG4gICAgICBpZiAodG5zU3RvcmFnZSkge1xuICAgICAgICB0bnNTdG9yYWdlLnNldEl0ZW0odWlkLCB1aWQpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VBY2Nlc3MgPSB0bnNTdG9yYWdlLmdldEl0ZW0odWlkKSA9PSB1aWQ7XG4gICAgICAgIHRuc1N0b3JhZ2UucmVtb3ZlSXRlbSh1aWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlQWNjZXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZUFjY2VzcykgeyB0bnNTdG9yYWdlID0ge307IH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUFjY2VzcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChsb2NhbFN0b3JhZ2VBY2Nlc3MpIHtcbiAgICAgIC8vIHJlbW92ZSBzdG9yYWdlIHdoZW4gYnJvd3NlciB2ZXJzaW9uIGNoYW5nZXNcbiAgICAgIGlmICh0bnNTdG9yYWdlWyd0bnNBcHAnXSAmJiB0bnNTdG9yYWdlWyd0bnNBcHAnXSAhPT0gYnJvd3NlckluZm8pIHtcbiAgICAgICAgWyd0QycsICd0UEwnLCAndE1RJywgJ3RUZicsICd0M0QnLCAndFREdScsICd0VERlJywgJ3RBRHUnLCAndEFEZScsICd0VEUnLCAndEFFJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7IHRuc1N0b3JhZ2UucmVtb3ZlSXRlbShpdGVtKTsgfSk7XG4gICAgICB9XG4gICAgICAvLyB1cGRhdGUgYnJvd3NlckluZm9cbiAgICAgIGxvY2FsU3RvcmFnZVsndG5zQXBwJ10gPSBicm93c2VySW5mbztcbiAgICB9XG4gIH1cblxuICB2YXIgQ0FMQyA9IHRuc1N0b3JhZ2VbJ3RDJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QyddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndEMnLCBjYWxjKCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBQRVJDRU5UQUdFTEFZT1VUID0gdG5zU3RvcmFnZVsndFBMJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0UEwnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RQTCcsIHBlcmNlbnRhZ2VMYXlvdXQoKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIENTU01RID0gdG5zU3RvcmFnZVsndE1RJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0TVEnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RNUScsIG1lZGlhcXVlcnlTdXBwb3J0KCksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0ZPUk0gPSB0bnNTdG9yYWdlWyd0VGYnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RUZiddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFRmJywgd2hpY2hQcm9wZXJ0eSgndHJhbnNmb3JtJyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBIQVMzRFRSQU5TRk9STVMgPSB0bnNTdG9yYWdlWyd0M0QnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3QzRCddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndDNEJywgaGFzM0RUcmFuc2Zvcm1zKFRSQU5TRk9STSksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0lUSU9ORFVSQVRJT04gPSB0bnNTdG9yYWdlWyd0VER1J10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VER1J10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0VER1Jywgd2hpY2hQcm9wZXJ0eSgndHJhbnNpdGlvbkR1cmF0aW9uJyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBUUkFOU0lUSU9OREVMQVkgPSB0bnNTdG9yYWdlWyd0VERlJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0VERlJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0VERlJywgd2hpY2hQcm9wZXJ0eSgndHJhbnNpdGlvbkRlbGF5JyksIGxvY2FsU3RvcmFnZUFjY2VzcyksXG4gICAgICBBTklNQVRJT05EVVJBVElPTiA9IHRuc1N0b3JhZ2VbJ3RBRHUnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RBRHUnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RBRHUnLCB3aGljaFByb3BlcnR5KCdhbmltYXRpb25EdXJhdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgQU5JTUFUSU9OREVMQVkgPSB0bnNTdG9yYWdlWyd0QURlJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QURlJ10pIDogc2V0TG9jYWxTdG9yYWdlKHRuc1N0b3JhZ2UsICd0QURlJywgd2hpY2hQcm9wZXJ0eSgnYW5pbWF0aW9uRGVsYXknKSwgbG9jYWxTdG9yYWdlQWNjZXNzKSxcbiAgICAgIFRSQU5TSVRJT05FTkQgPSB0bnNTdG9yYWdlWyd0VEUnXSA/IGNoZWNrU3RvcmFnZVZhbHVlKHRuc1N0b3JhZ2VbJ3RURSddKSA6IHNldExvY2FsU3RvcmFnZSh0bnNTdG9yYWdlLCAndFRFJywgZ2V0RW5kUHJvcGVydHkoVFJBTlNJVElPTkRVUkFUSU9OLCAnVHJhbnNpdGlvbicpLCBsb2NhbFN0b3JhZ2VBY2Nlc3MpLFxuICAgICAgQU5JTUFUSU9ORU5EID0gdG5zU3RvcmFnZVsndEFFJ10gPyBjaGVja1N0b3JhZ2VWYWx1ZSh0bnNTdG9yYWdlWyd0QUUnXSkgOiBzZXRMb2NhbFN0b3JhZ2UodG5zU3RvcmFnZSwgJ3RBRScsIGdldEVuZFByb3BlcnR5KEFOSU1BVElPTkRVUkFUSU9OLCAnQW5pbWF0aW9uJyksIGxvY2FsU3RvcmFnZUFjY2Vzcyk7XG5cbiAgLy8gZ2V0IGVsZW1lbnQgbm9kZXMgZnJvbSBzZWxlY3RvcnNcbiAgdmFyIHN1cHBvcnRDb25zb2xlV2FybiA9IHdpbi5jb25zb2xlICYmIHR5cGVvZiB3aW4uY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIsXG4gICAgICB0bnNMaXN0ID0gWydjb250YWluZXInLCAnY29udHJvbHNDb250YWluZXInLCAncHJldkJ1dHRvbicsICduZXh0QnV0dG9uJywgJ25hdkNvbnRhaW5lcicsICdhdXRvcGxheUJ1dHRvbiddLFxuICAgICAgb3B0aW9uc0VsZW1lbnRzID0ge307XG5cbiAgdG5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNbaXRlbV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyID0gb3B0aW9uc1tpdGVtXSxcbiAgICAgICAgICBlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHN0cik7XG4gICAgICBvcHRpb25zRWxlbWVudHNbaXRlbV0gPSBzdHI7XG5cbiAgICAgIGlmIChlbCAmJiBlbC5ub2RlTmFtZSkge1xuICAgICAgICBvcHRpb25zW2l0ZW1dID0gZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3VwcG9ydENvbnNvbGVXYXJuKSB7IGNvbnNvbGUud2FybignQ2FuXFwndCBmaW5kJywgb3B0aW9uc1tpdGVtXSk7IH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gbWFrZSBzdXJlIGF0IGxlYXN0IDEgc2xpZGVcbiAgaWYgKG9wdGlvbnMuY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA8IDEpIHtcbiAgICBpZiAoc3VwcG9ydENvbnNvbGVXYXJuKSB7IGNvbnNvbGUud2FybignTm8gc2xpZGVzIGZvdW5kIGluJywgb3B0aW9ucy5jb250YWluZXIpOyB9XG4gICAgcmV0dXJuO1xuICAgfVxuXG4gIC8vIHVwZGF0ZSBvcHRpb25zXG4gIHZhciByZXNwb25zaXZlID0gb3B0aW9ucy5yZXNwb25zaXZlLFxuICAgICAgbmVzdGVkID0gb3B0aW9ucy5uZXN0ZWQsXG4gICAgICBjYXJvdXNlbCA9IG9wdGlvbnMubW9kZSA9PT0gJ2Nhcm91c2VsJyA/IHRydWUgOiBmYWxzZTtcblxuICBpZiAocmVzcG9uc2l2ZSkge1xuICAgIC8vIGFwcGx5IHJlc3BvbnNpdmVbMF0gdG8gb3B0aW9ucyBhbmQgcmVtb3ZlIGl0XG4gICAgaWYgKDAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgb3B0aW9ucyA9IGV4dGVuZChvcHRpb25zLCByZXNwb25zaXZlWzBdKTtcbiAgICAgIGRlbGV0ZSByZXNwb25zaXZlWzBdO1xuICAgIH1cblxuICAgIHZhciByZXNwb25zaXZlVGVtID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHJlc3BvbnNpdmUpIHtcbiAgICAgIHZhciB2YWwgPSByZXNwb25zaXZlW2tleV07XG4gICAgICAvLyB1cGRhdGUgcmVzcG9uc2l2ZVxuICAgICAgLy8gZnJvbTogMzAwOiAyXG4gICAgICAvLyB0bzpcbiAgICAgIC8vICAgMzAwOiB7XG4gICAgICAvLyAgICAgaXRlbXM6IDJcbiAgICAgIC8vICAgfVxuICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyB7aXRlbXM6IHZhbH0gOiB2YWw7XG4gICAgICByZXNwb25zaXZlVGVtW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJlc3BvbnNpdmUgPSByZXNwb25zaXZlVGVtO1xuICAgIHJlc3BvbnNpdmVUZW0gPSBudWxsO1xuICB9XG5cbiAgLy8gdXBkYXRlIG9wdGlvbnNcbiAgZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyAob2JqKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKCFjYXJvdXNlbCkge1xuICAgICAgICBpZiAoa2V5ID09PSAnc2xpZGVCeScpIHsgb2JqW2tleV0gPSAncGFnZSc7IH1cbiAgICAgICAgaWYgKGtleSA9PT0gJ2VkZ2VQYWRkaW5nJykgeyBvYmpba2V5XSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChrZXkgPT09ICdhdXRvSGVpZ2h0JykgeyBvYmpba2V5XSA9IGZhbHNlOyB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSByZXNwb25zaXZlIG9wdGlvbnNcbiAgICAgIGlmIChrZXkgPT09ICdyZXNwb25zaXZlJykgeyB1cGRhdGVPcHRpb25zKG9ialtrZXldKTsgfVxuICAgIH1cbiAgfVxuICBpZiAoIWNhcm91c2VsKSB7IHVwZGF0ZU9wdGlvbnMob3B0aW9ucyk7IH1cblxuXG4gIC8vID09PSBkZWZpbmUgYW5kIHNldCB2YXJpYWJsZXMgPT09XG4gIGlmICghY2Fyb3VzZWwpIHtcbiAgICBvcHRpb25zLmF4aXMgPSAnaG9yaXpvbnRhbCc7XG4gICAgb3B0aW9ucy5zbGlkZUJ5ID0gJ3BhZ2UnO1xuICAgIG9wdGlvbnMuZWRnZVBhZGRpbmcgPSBmYWxzZTtcblxuICAgIHZhciBhbmltYXRlSW4gPSBvcHRpb25zLmFuaW1hdGVJbixcbiAgICAgICAgYW5pbWF0ZU91dCA9IG9wdGlvbnMuYW5pbWF0ZU91dCxcbiAgICAgICAgYW5pbWF0ZURlbGF5ID0gb3B0aW9ucy5hbmltYXRlRGVsYXksXG4gICAgICAgIGFuaW1hdGVOb3JtYWwgPSBvcHRpb25zLmFuaW1hdGVOb3JtYWw7XG4gIH1cblxuICB2YXIgaG9yaXpvbnRhbCA9IG9wdGlvbnMuYXhpcyA9PT0gJ2hvcml6b250YWwnID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgb3V0ZXJXcmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgaW5uZXJXcmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgbWlkZGxlV3JhcHBlcixcbiAgICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyLFxuICAgICAgY29udGFpbmVyUGFyZW50ID0gY29udGFpbmVyLnBhcmVudE5vZGUsXG4gICAgICBjb250YWluZXJIVE1MID0gY29udGFpbmVyLm91dGVySFRNTCxcbiAgICAgIHNsaWRlSXRlbXMgPSBjb250YWluZXIuY2hpbGRyZW4sXG4gICAgICBzbGlkZUNvdW50ID0gc2xpZGVJdGVtcy5sZW5ndGgsXG4gICAgICBicmVha3BvaW50Wm9uZSxcbiAgICAgIHdpbmRvd1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKSxcbiAgICAgIGlzT24gPSBmYWxzZTtcbiAgaWYgKHJlc3BvbnNpdmUpIHsgc2V0QnJlYWtwb2ludFpvbmUoKTsgfVxuICBpZiAoY2Fyb3VzZWwpIHsgY29udGFpbmVyLmNsYXNzTmFtZSArPSAnIHRucy12cGZpeCc7IH1cblxuICAvLyBmaXhlZFdpZHRoOiB2aWV3cG9ydCA+IHJpZ2h0Qm91bmRhcnkgPiBpbmRleE1heFxuICB2YXIgYXV0b1dpZHRoID0gb3B0aW9ucy5hdXRvV2lkdGgsXG4gICAgICBmaXhlZFdpZHRoID0gZ2V0T3B0aW9uKCdmaXhlZFdpZHRoJyksXG4gICAgICBlZGdlUGFkZGluZyA9IGdldE9wdGlvbignZWRnZVBhZGRpbmcnKSxcbiAgICAgIGd1dHRlciA9IGdldE9wdGlvbignZ3V0dGVyJyksXG4gICAgICB2aWV3cG9ydCA9IGdldFZpZXdwb3J0V2lkdGgoKSxcbiAgICAgIGNlbnRlciA9IGdldE9wdGlvbignY2VudGVyJyksXG4gICAgICBpdGVtcyA9ICFhdXRvV2lkdGggPyBNYXRoLmZsb29yKGdldE9wdGlvbignaXRlbXMnKSkgOiAxLFxuICAgICAgc2xpZGVCeSA9IGdldE9wdGlvbignc2xpZGVCeScpLFxuICAgICAgdmlld3BvcnRNYXggPSBvcHRpb25zLnZpZXdwb3J0TWF4IHx8IG9wdGlvbnMuZml4ZWRXaWR0aFZpZXdwb3J0V2lkdGgsXG4gICAgICBhcnJvd0tleXMgPSBnZXRPcHRpb24oJ2Fycm93S2V5cycpLFxuICAgICAgc3BlZWQgPSBnZXRPcHRpb24oJ3NwZWVkJyksXG4gICAgICByZXdpbmQgPSBvcHRpb25zLnJld2luZCxcbiAgICAgIGxvb3AgPSByZXdpbmQgPyBmYWxzZSA6IG9wdGlvbnMubG9vcCxcbiAgICAgIGF1dG9IZWlnaHQgPSBnZXRPcHRpb24oJ2F1dG9IZWlnaHQnKSxcbiAgICAgIGNvbnRyb2xzID0gZ2V0T3B0aW9uKCdjb250cm9scycpLFxuICAgICAgY29udHJvbHNUZXh0ID0gZ2V0T3B0aW9uKCdjb250cm9sc1RleHQnKSxcbiAgICAgIG5hdiA9IGdldE9wdGlvbignbmF2JyksXG4gICAgICB0b3VjaCA9IGdldE9wdGlvbigndG91Y2gnKSxcbiAgICAgIG1vdXNlRHJhZyA9IGdldE9wdGlvbignbW91c2VEcmFnJyksXG4gICAgICBhdXRvcGxheSA9IGdldE9wdGlvbignYXV0b3BsYXknKSxcbiAgICAgIGF1dG9wbGF5VGltZW91dCA9IGdldE9wdGlvbignYXV0b3BsYXlUaW1lb3V0JyksXG4gICAgICBhdXRvcGxheVRleHQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGV4dCcpLFxuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlID0gZ2V0T3B0aW9uKCdhdXRvcGxheUhvdmVyUGF1c2UnKSxcbiAgICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5UmVzZXRPblZpc2liaWxpdHknKSxcbiAgICAgIHNoZWV0ID0gY3JlYXRlU3R5bGVTaGVldChudWxsLCBnZXRPcHRpb24oJ25vbmNlJykpLFxuICAgICAgbGF6eWxvYWQgPSBvcHRpb25zLmxhenlsb2FkLFxuICAgICAgbGF6eWxvYWRTZWxlY3RvciA9IG9wdGlvbnMubGF6eWxvYWRTZWxlY3RvcixcbiAgICAgIHNsaWRlUG9zaXRpb25zLCAvLyBjb2xsZWN0aW9uIG9mIHNsaWRlIHBvc2l0aW9uc1xuICAgICAgc2xpZGVJdGVtc091dCA9IFtdLFxuICAgICAgY2xvbmVDb3VudCA9IGxvb3AgPyBnZXRDbG9uZUNvdW50Rm9yTG9vcCgpIDogMCxcbiAgICAgIHNsaWRlQ291bnROZXcgPSAhY2Fyb3VzZWwgPyBzbGlkZUNvdW50ICsgY2xvbmVDb3VudCA6IHNsaWRlQ291bnQgKyBjbG9uZUNvdW50ICogMixcbiAgICAgIGhhc1JpZ2h0RGVhZFpvbmUgPSAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpICYmICFsb29wID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgcmlnaHRCb3VuZGFyeSA9IGZpeGVkV2lkdGggPyBnZXRSaWdodEJvdW5kYXJ5KCkgOiBudWxsLFxuICAgICAgdXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0gPSAoIWNhcm91c2VsIHx8ICFsb29wKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgIC8vIHRyYW5zZm9ybVxuICAgICAgdHJhbnNmb3JtQXR0ciA9IGhvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJyxcbiAgICAgIHRyYW5zZm9ybVByZWZpeCA9ICcnLFxuICAgICAgdHJhbnNmb3JtUG9zdGZpeCA9ICcnLFxuICAgICAgLy8gaW5kZXhcbiAgICAgIGdldEluZGV4TWF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBjZW50ZXIgJiYgIWxvb3AgPyBzbGlkZUNvdW50IC0gMSA6IE1hdGguY2VpbCgtIHJpZ2h0Qm91bmRhcnkgLyAoZml4ZWRXaWR0aCArIGd1dHRlcikpOyB9O1xuICAgICAgICB9IGVsc2UgaWYgKGF1dG9XaWR0aCkge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVDb3VudE5ldzsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZVBvc2l0aW9uc1tpXSA+PSAtIHJpZ2h0Qm91bmRhcnkpIHsgcmV0dXJuIGk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjZW50ZXIgJiYgY2Fyb3VzZWwgJiYgIWxvb3ApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlQ291bnQgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxvb3AgfHwgY2Fyb3VzZWwgPyBNYXRoLm1heCgwLCBzbGlkZUNvdW50TmV3IC0gTWF0aC5jZWlsKGl0ZW1zKSkgOiBzbGlkZUNvdW50TmV3IC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KSgpLFxuICAgICAgaW5kZXggPSBnZXRTdGFydEluZGV4KGdldE9wdGlvbignc3RhcnRJbmRleCcpKSxcbiAgICAgIGluZGV4Q2FjaGVkID0gaW5kZXgsXG4gICAgICBkaXNwbGF5SW5kZXggPSBnZXRDdXJyZW50U2xpZGUoKSxcbiAgICAgIGluZGV4TWluID0gMCxcbiAgICAgIGluZGV4TWF4ID0gIWF1dG9XaWR0aCA/IGdldEluZGV4TWF4KCkgOiBudWxsLFxuICAgICAgLy8gcmVzaXplXG4gICAgICByZXNpemVUaW1lcixcbiAgICAgIHByZXZlbnRBY3Rpb25XaGVuUnVubmluZyA9IG9wdGlvbnMucHJldmVudEFjdGlvbldoZW5SdW5uaW5nLFxuICAgICAgc3dpcGVBbmdsZSA9IG9wdGlvbnMuc3dpcGVBbmdsZSxcbiAgICAgIG1vdmVEaXJlY3Rpb25FeHBlY3RlZCA9IHN3aXBlQW5nbGUgPyAnPycgOiB0cnVlLFxuICAgICAgcnVubmluZyA9IGZhbHNlLFxuICAgICAgb25Jbml0ID0gb3B0aW9ucy5vbkluaXQsXG4gICAgICBldmVudHMgPSBuZXcgRXZlbnRzKCksXG4gICAgICAvLyBpZCwgY2xhc3NcbiAgICAgIG5ld0NvbnRhaW5lckNsYXNzZXMgPSAnIHRucy1zbGlkZXIgdG5zLScgKyBvcHRpb25zLm1vZGUsXG4gICAgICBzbGlkZUlkID0gY29udGFpbmVyLmlkIHx8IGdldFNsaWRlSWQoKSxcbiAgICAgIGRpc2FibGUgPSBnZXRPcHRpb24oJ2Rpc2FibGUnKSxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBmcmVlemFibGUgPSBvcHRpb25zLmZyZWV6YWJsZSxcbiAgICAgIGZyZWV6ZSA9IGZyZWV6YWJsZSAmJiAhYXV0b1dpZHRoID8gZ2V0RnJlZXplKCkgOiBmYWxzZSxcbiAgICAgIGZyb3plbiA9IGZhbHNlLFxuICAgICAgY29udHJvbHNFdmVudHMgPSB7XG4gICAgICAgICdjbGljayc6IG9uQ29udHJvbHNDbGljayxcbiAgICAgICAgJ2tleWRvd24nOiBvbkNvbnRyb2xzS2V5ZG93blxuICAgICAgfSxcbiAgICAgIG5hdkV2ZW50cyA9IHtcbiAgICAgICAgJ2NsaWNrJzogb25OYXZDbGljayxcbiAgICAgICAgJ2tleWRvd24nOiBvbk5hdktleWRvd25cbiAgICAgIH0sXG4gICAgICBob3ZlckV2ZW50cyA9IHtcbiAgICAgICAgJ21vdXNlb3Zlcic6IG1vdXNlb3ZlclBhdXNlLFxuICAgICAgICAnbW91c2VvdXQnOiBtb3VzZW91dFJlc3RhcnRcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5RXZlbnQgPSB7J3Zpc2liaWxpdHljaGFuZ2UnOiBvblZpc2liaWxpdHlDaGFuZ2V9LFxuICAgICAgZG9jbWVudEtleWRvd25FdmVudCA9IHsna2V5ZG93bic6IG9uRG9jdW1lbnRLZXlkb3dufSxcbiAgICAgIHRvdWNoRXZlbnRzID0ge1xuICAgICAgICAndG91Y2hzdGFydCc6IG9uUGFuU3RhcnQsXG4gICAgICAgICd0b3VjaG1vdmUnOiBvblBhbk1vdmUsXG4gICAgICAgICd0b3VjaGVuZCc6IG9uUGFuRW5kLFxuICAgICAgICAndG91Y2hjYW5jZWwnOiBvblBhbkVuZFxuICAgICAgfSwgZHJhZ0V2ZW50cyA9IHtcbiAgICAgICAgJ21vdXNlZG93bic6IG9uUGFuU3RhcnQsXG4gICAgICAgICdtb3VzZW1vdmUnOiBvblBhbk1vdmUsXG4gICAgICAgICdtb3VzZXVwJzogb25QYW5FbmQsXG4gICAgICAgICdtb3VzZWxlYXZlJzogb25QYW5FbmRcbiAgICAgIH0sXG4gICAgICBoYXNDb250cm9scyA9IGhhc09wdGlvbignY29udHJvbHMnKSxcbiAgICAgIGhhc05hdiA9IGhhc09wdGlvbignbmF2JyksXG4gICAgICBuYXZBc1RodW1ibmFpbHMgPSBhdXRvV2lkdGggPyB0cnVlIDogb3B0aW9ucy5uYXZBc1RodW1ibmFpbHMsXG4gICAgICBoYXNBdXRvcGxheSA9IGhhc09wdGlvbignYXV0b3BsYXknKSxcbiAgICAgIGhhc1RvdWNoID0gaGFzT3B0aW9uKCd0b3VjaCcpLFxuICAgICAgaGFzTW91c2VEcmFnID0gaGFzT3B0aW9uKCdtb3VzZURyYWcnKSxcbiAgICAgIHNsaWRlQWN0aXZlQ2xhc3MgPSAndG5zLXNsaWRlLWFjdGl2ZScsXG4gICAgICBzbGlkZUNsb25lZENsYXNzID0gJ3Rucy1zbGlkZS1jbG9uZWQnLFxuICAgICAgaW1nQ29tcGxldGVDbGFzcyA9ICd0bnMtY29tcGxldGUnLFxuICAgICAgaW1nRXZlbnRzID0ge1xuICAgICAgICAnbG9hZCc6IG9uSW1nTG9hZGVkLFxuICAgICAgICAnZXJyb3InOiBvbkltZ0ZhaWxlZFxuICAgICAgfSxcbiAgICAgIGltZ3NDb21wbGV0ZSxcbiAgICAgIGxpdmVyZWdpb25DdXJyZW50LFxuICAgICAgcHJldmVudFNjcm9sbCA9IG9wdGlvbnMucHJldmVudFNjcm9sbE9uVG91Y2ggPT09ICdmb3JjZScgPyB0cnVlIDogZmFsc2U7XG5cbiAgLy8gY29udHJvbHNcbiAgaWYgKGhhc0NvbnRyb2xzKSB7XG4gICAgdmFyIGNvbnRyb2xzQ29udGFpbmVyID0gb3B0aW9ucy5jb250cm9sc0NvbnRhaW5lcixcbiAgICAgICAgY29udHJvbHNDb250YWluZXJIVE1MID0gb3B0aW9ucy5jb250cm9sc0NvbnRhaW5lciA/IG9wdGlvbnMuY29udHJvbHNDb250YWluZXIub3V0ZXJIVE1MIDogJycsXG4gICAgICAgIHByZXZCdXR0b24gPSBvcHRpb25zLnByZXZCdXR0b24sXG4gICAgICAgIG5leHRCdXR0b24gPSBvcHRpb25zLm5leHRCdXR0b24sXG4gICAgICAgIHByZXZCdXR0b25IVE1MID0gb3B0aW9ucy5wcmV2QnV0dG9uID8gb3B0aW9ucy5wcmV2QnV0dG9uLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBuZXh0QnV0dG9uSFRNTCA9IG9wdGlvbnMubmV4dEJ1dHRvbiA/IG9wdGlvbnMubmV4dEJ1dHRvbi5vdXRlckhUTUwgOiAnJyxcbiAgICAgICAgcHJldklzQnV0dG9uLFxuICAgICAgICBuZXh0SXNCdXR0b247XG4gIH1cblxuICAvLyBuYXZcbiAgaWYgKGhhc05hdikge1xuICAgIHZhciBuYXZDb250YWluZXIgPSBvcHRpb25zLm5hdkNvbnRhaW5lcixcbiAgICAgICAgbmF2Q29udGFpbmVySFRNTCA9IG9wdGlvbnMubmF2Q29udGFpbmVyID8gb3B0aW9ucy5uYXZDb250YWluZXIub3V0ZXJIVE1MIDogJycsXG4gICAgICAgIG5hdkl0ZW1zLFxuICAgICAgICBwYWdlcyA9IGF1dG9XaWR0aCA/IHNsaWRlQ291bnQgOiBnZXRQYWdlcygpLFxuICAgICAgICBwYWdlc0NhY2hlZCA9IDAsXG4gICAgICAgIG5hdkNsaWNrZWQgPSAtMSxcbiAgICAgICAgbmF2Q3VycmVudEluZGV4ID0gZ2V0Q3VycmVudE5hdkluZGV4KCksXG4gICAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZCA9IG5hdkN1cnJlbnRJbmRleCxcbiAgICAgICAgbmF2QWN0aXZlQ2xhc3MgPSAndG5zLW5hdi1hY3RpdmUnLFxuICAgICAgICBuYXZTdHIgPSAnQ2Fyb3VzZWwgUGFnZSAnLFxuICAgICAgICBuYXZTdHJDdXJyZW50ID0gJyAoQ3VycmVudCBTbGlkZSknO1xuICB9XG5cbiAgLy8gYXV0b3BsYXlcbiAgaWYgKGhhc0F1dG9wbGF5KSB7XG4gICAgdmFyIGF1dG9wbGF5RGlyZWN0aW9uID0gb3B0aW9ucy5hdXRvcGxheURpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gMSA6IC0xLFxuICAgICAgICBhdXRvcGxheUJ1dHRvbiA9IG9wdGlvbnMuYXV0b3BsYXlCdXR0b24sXG4gICAgICAgIGF1dG9wbGF5QnV0dG9uSFRNTCA9IG9wdGlvbnMuYXV0b3BsYXlCdXR0b24gPyBvcHRpb25zLmF1dG9wbGF5QnV0dG9uLm91dGVySFRNTCA6ICcnLFxuICAgICAgICBhdXRvcGxheUh0bWxTdHJpbmdzID0gWyc8c3BhbiBjbGFzcz1cXCd0bnMtdmlzdWFsbHktaGlkZGVuXFwnPicsICcgYW5pbWF0aW9uPC9zcGFuPiddLFxuICAgICAgICBhdXRvcGxheVRpbWVyLFxuICAgICAgICBhbmltYXRpbmcsXG4gICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZWQsXG4gICAgICAgIGF1dG9wbGF5VXNlclBhdXNlZCxcbiAgICAgICAgYXV0b3BsYXlWaXNpYmlsaXR5UGF1c2VkO1xuICB9XG5cbiAgaWYgKGhhc1RvdWNoIHx8IGhhc01vdXNlRHJhZykge1xuICAgIHZhciBpbml0UG9zaXRpb24gPSB7fSxcbiAgICAgICAgbGFzdFBvc2l0aW9uID0ge30sXG4gICAgICAgIHRyYW5zbGF0ZUluaXQsXG4gICAgICAgIGRpc1gsXG4gICAgICAgIGRpc1ksXG4gICAgICAgIHBhblN0YXJ0ID0gZmFsc2UsXG4gICAgICAgIHJhZkluZGV4LFxuICAgICAgICBnZXREaXN0ID0gaG9yaXpvbnRhbCA/XG4gICAgICAgICAgZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYS54IC0gYi54OyB9IDpcbiAgICAgICAgICBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhLnkgLSBiLnk7IH07XG4gIH1cblxuICAvLyBkaXNhYmxlIHNsaWRlciB3aGVuIHNsaWRlY291bnQgPD0gaXRlbXNcbiAgaWYgKCFhdXRvV2lkdGgpIHsgcmVzZXRWYXJpYmxlc1doZW5EaXNhYmxlKGRpc2FibGUgfHwgZnJlZXplKTsgfVxuXG4gIGlmIChUUkFOU0ZPUk0pIHtcbiAgICB0cmFuc2Zvcm1BdHRyID0gVFJBTlNGT1JNO1xuICAgIHRyYW5zZm9ybVByZWZpeCA9ICd0cmFuc2xhdGUnO1xuXG4gICAgaWYgKEhBUzNEVFJBTlNGT1JNUykge1xuICAgICAgdHJhbnNmb3JtUHJlZml4ICs9IGhvcml6b250YWwgPyAnM2QoJyA6ICczZCgwcHgsICc7XG4gICAgICB0cmFuc2Zvcm1Qb3N0Zml4ID0gaG9yaXpvbnRhbCA/ICcsIDBweCwgMHB4KScgOiAnLCAwcHgpJztcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtUHJlZml4ICs9IGhvcml6b250YWwgPyAnWCgnIDogJ1koJztcbiAgICAgIHRyYW5zZm9ybVBvc3RmaXggPSAnKSc7XG4gICAgfVxuXG4gIH1cblxuICBpZiAoY2Fyb3VzZWwpIHsgY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZSgndG5zLXZwZml4JywgJycpOyB9XG4gIGluaXRTdHJ1Y3R1cmUoKTtcbiAgaW5pdFNoZWV0KCk7XG4gIGluaXRTbGlkZXJUcmFuc2Zvcm0oKTtcblxuICAvLyA9PT0gQ09NTU9OIEZVTkNUSU9OUyA9PT0gLy9cbiAgZnVuY3Rpb24gcmVzZXRWYXJpYmxlc1doZW5EaXNhYmxlIChjb25kaXRpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICBjb250cm9scyA9IG5hdiA9IHRvdWNoID0gbW91c2VEcmFnID0gYXJyb3dLZXlzID0gYXV0b3BsYXkgPSBhdXRvcGxheUhvdmVyUGF1c2UgPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFNsaWRlICgpIHtcbiAgICB2YXIgdGVtID0gY2Fyb3VzZWwgPyBpbmRleCAtIGNsb25lQ291bnQgOiBpbmRleDtcbiAgICB3aGlsZSAodGVtIDwgMCkgeyB0ZW0gKz0gc2xpZGVDb3VudDsgfVxuICAgIHJldHVybiB0ZW0lc2xpZGVDb3VudCArIDE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTdGFydEluZGV4IChpbmQpIHtcbiAgICBpbmQgPSBpbmQgPyBNYXRoLm1heCgwLCBNYXRoLm1pbihsb29wID8gc2xpZGVDb3VudCAtIDEgOiBzbGlkZUNvdW50IC0gaXRlbXMsIGluZCkpIDogMDtcbiAgICByZXR1cm4gY2Fyb3VzZWwgPyBpbmQgKyBjbG9uZUNvdW50IDogaW5kO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWJzSW5kZXggKGkpIHtcbiAgICBpZiAoaSA9PSBudWxsKSB7IGkgPSBpbmRleDsgfVxuXG4gICAgaWYgKGNhcm91c2VsKSB7IGkgLT0gY2xvbmVDb3VudDsgfVxuICAgIHdoaWxlIChpIDwgMCkgeyBpICs9IHNsaWRlQ291bnQ7IH1cblxuICAgIHJldHVybiBNYXRoLmZsb29yKGklc2xpZGVDb3VudCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TmF2SW5kZXggKCkge1xuICAgIHZhciBhYnNJbmRleCA9IGdldEFic0luZGV4KCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIHJlc3VsdCA9IG5hdkFzVGh1bWJuYWlscyA/IGFic0luZGV4IDpcbiAgICAgIGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoID8gTWF0aC5jZWlsKChhYnNJbmRleCArIDEpICogcGFnZXMgLyBzbGlkZUNvdW50IC0gMSkgOlxuICAgICAgICAgIE1hdGguZmxvb3IoYWJzSW5kZXggLyBpdGVtcyk7XG5cbiAgICAvLyBzZXQgYWN0aXZlIG5hdiB0byB0aGUgbGFzdCBvbmUgd2hlbiByZWFjaGVzIHRoZSByaWdodCBlZGdlXG4gICAgaWYgKCFsb29wICYmIGNhcm91c2VsICYmIGluZGV4ID09PSBpbmRleE1heCkgeyByZXN1bHQgPSBwYWdlcyAtIDE7IH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVtc01heCAoKSB7XG4gICAgLy8gZml4ZWRXaWR0aCBvciBhdXRvV2lkdGggd2hpbGUgdmlld3BvcnRNYXggaXMgbm90IGF2YWlsYWJsZVxuICAgIGlmIChhdXRvV2lkdGggfHwgKGZpeGVkV2lkdGggJiYgIXZpZXdwb3J0TWF4KSkge1xuICAgICAgcmV0dXJuIHNsaWRlQ291bnQgLSAxO1xuICAgIC8vIG1vc3QgY2FzZXNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0ciA9IGZpeGVkV2lkdGggPyAnZml4ZWRXaWR0aCcgOiAnaXRlbXMnLFxuICAgICAgICAgIGFyciA9IFtdO1xuXG4gICAgICBpZiAoZml4ZWRXaWR0aCB8fCBvcHRpb25zW3N0cl0gPCBzbGlkZUNvdW50KSB7IGFyci5wdXNoKG9wdGlvbnNbc3RyXSk7IH1cblxuICAgICAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgICAgZm9yICh2YXIgYnAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgICAgIHZhciB0ZW0gPSByZXNwb25zaXZlW2JwXVtzdHJdO1xuICAgICAgICAgIGlmICh0ZW0gJiYgKGZpeGVkV2lkdGggfHwgdGVtIDwgc2xpZGVDb3VudCkpIHsgYXJyLnB1c2godGVtKTsgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYXJyLmxlbmd0aCkgeyBhcnIucHVzaCgwKTsgfVxuXG4gICAgICByZXR1cm4gTWF0aC5jZWlsKGZpeGVkV2lkdGggPyB2aWV3cG9ydE1heCAvIE1hdGgubWluLmFwcGx5KG51bGwsIGFycikgOiBNYXRoLm1heC5hcHBseShudWxsLCBhcnIpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbG9uZUNvdW50Rm9yTG9vcCAoKSB7XG4gICAgdmFyIGl0ZW1zTWF4ID0gZ2V0SXRlbXNNYXgoKSxcbiAgICAgICAgcmVzdWx0ID0gY2Fyb3VzZWwgPyBNYXRoLmNlaWwoKGl0ZW1zTWF4ICogNSAtIHNsaWRlQ291bnQpLzIpIDogKGl0ZW1zTWF4ICogNCAtIHNsaWRlQ291bnQpO1xuICAgIHJlc3VsdCA9IE1hdGgubWF4KGl0ZW1zTWF4LCByZXN1bHQpO1xuXG4gICAgcmV0dXJuIGhhc09wdGlvbignZWRnZVBhZGRpbmcnKSA/IHJlc3VsdCArIDEgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3dXaWR0aCAoKSB7XG4gICAgcmV0dXJuIHdpbi5pbm5lcldpZHRoIHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jLmJvZHkuY2xpZW50V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbnNlcnRQb3NpdGlvbiAocG9zKSB7XG4gICAgcmV0dXJuIHBvcyA9PT0gJ3RvcCcgPyAnYWZ0ZXJiZWdpbicgOiAnYmVmb3JlZW5kJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsaWVudFdpZHRoIChlbCkge1xuICAgIGlmIChlbCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIHZhciBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksIHJlY3QsIHdpZHRoO1xuICAgIGVsLmFwcGVuZENoaWxkKGRpdik7XG4gICAgcmVjdCA9IGRpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB3aWR0aCA9IHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG4gICAgZGl2LnJlbW92ZSgpO1xuICAgIHJldHVybiB3aWR0aCB8fCBnZXRDbGllbnRXaWR0aChlbC5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpZXdwb3J0V2lkdGggKCkge1xuICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZyA/IGVkZ2VQYWRkaW5nICogMiAtIGd1dHRlciA6IDA7XG4gICAgcmV0dXJuIGdldENsaWVudFdpZHRoKGNvbnRhaW5lclBhcmVudCkgLSBnYXA7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNPcHRpb24gKGl0ZW0pIHtcbiAgICBpZiAob3B0aW9uc1tpdGVtXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXNwb25zaXZlKSB7XG4gICAgICAgIGZvciAodmFyIGJwIGluIHJlc3BvbnNpdmUpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2l2ZVticF1baXRlbV0pIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldCBvcHRpb246XG4gIC8vIGZpeGVkIHdpZHRoOiB2aWV3cG9ydCwgZml4ZWRXaWR0aCwgZ3V0dGVyID0+IGl0ZW1zXG4gIC8vIG90aGVyczogd2luZG93IHdpZHRoID0+IGFsbCB2YXJpYWJsZXNcbiAgLy8gYWxsOiBpdGVtcyA9PiBzbGlkZUJ5XG4gIGZ1bmN0aW9uIGdldE9wdGlvbiAoaXRlbSwgd3cpIHtcbiAgICBpZiAod3cgPT0gbnVsbCkgeyB3dyA9IHdpbmRvd1dpZHRoOyB9XG5cbiAgICBpZiAoaXRlbSA9PT0gJ2l0ZW1zJyAmJiBmaXhlZFdpZHRoKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodmlld3BvcnQgKyBndXR0ZXIpIC8gKGZpeGVkV2lkdGggKyBndXR0ZXIpKSB8fCAxO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSBvcHRpb25zW2l0ZW1dO1xuXG4gICAgICBpZiAocmVzcG9uc2l2ZSkge1xuICAgICAgICBmb3IgKHZhciBicCBpbiByZXNwb25zaXZlKSB7XG4gICAgICAgICAgLy8gYnA6IGNvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxuICAgICAgICAgIGlmICh3dyA+PSBwYXJzZUludChicCkpIHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluIHJlc3BvbnNpdmVbYnBdKSB7IHJlc3VsdCA9IHJlc3BvbnNpdmVbYnBdW2l0ZW1dOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtID09PSAnc2xpZGVCeScgJiYgcmVzdWx0ID09PSAncGFnZScpIHsgcmVzdWx0ID0gZ2V0T3B0aW9uKCdpdGVtcycpOyB9XG4gICAgICBpZiAoIWNhcm91c2VsICYmIChpdGVtID09PSAnc2xpZGVCeScgfHwgaXRlbSA9PT0gJ2l0ZW1zJykpIHsgcmVzdWx0ID0gTWF0aC5mbG9vcihyZXN1bHQpOyB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVNYXJnaW5MZWZ0IChpKSB7XG4gICAgcmV0dXJuIENBTEMgP1xuICAgICAgQ0FMQyArICcoJyArIGkgKiAxMDAgKyAnJSAvICcgKyBzbGlkZUNvdW50TmV3ICsgJyknIDpcbiAgICAgIGkgKiAxMDAgLyBzbGlkZUNvdW50TmV3ICsgJyUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzIChlZGdlUGFkZGluZ1RlbSwgZ3V0dGVyVGVtLCBmaXhlZFdpZHRoVGVtLCBzcGVlZFRlbSwgYXV0b0hlaWdodEJQKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuXG4gICAgaWYgKGVkZ2VQYWRkaW5nVGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBnYXAgPSBlZGdlUGFkZGluZ1RlbTtcbiAgICAgIGlmIChndXR0ZXJUZW0pIHsgZ2FwIC09IGd1dHRlclRlbTsgfVxuICAgICAgc3RyID0gaG9yaXpvbnRhbCA/XG4gICAgICAgICdtYXJnaW46IDAgJyArIGdhcCArICdweCAwICcgKyBlZGdlUGFkZGluZ1RlbSArICdweDsnIDpcbiAgICAgICAgJ21hcmdpbjogJyArIGVkZ2VQYWRkaW5nVGVtICsgJ3B4IDAgJyArIGdhcCArICdweCAwOyc7XG4gICAgfSBlbHNlIGlmIChndXR0ZXJUZW0gJiYgIWZpeGVkV2lkdGhUZW0pIHtcbiAgICAgIHZhciBndXR0ZXJUZW1Vbml0ID0gJy0nICsgZ3V0dGVyVGVtICsgJ3B4JyxcbiAgICAgICAgICBkaXIgPSBob3Jpem9udGFsID8gZ3V0dGVyVGVtVW5pdCArICcgMCAwJyA6ICcwICcgKyBndXR0ZXJUZW1Vbml0ICsgJyAwJztcbiAgICAgIHN0ciA9ICdtYXJnaW46IDAgJyArIGRpciArICc7J1xuICAgIH1cblxuICAgIGlmICghY2Fyb3VzZWwgJiYgYXV0b0hlaWdodEJQICYmIFRSQU5TSVRJT05EVVJBVElPTiAmJiBzcGVlZFRlbSkgeyBzdHIgKz0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWRUZW0pOyB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRhaW5lcldpZHRoIChmaXhlZFdpZHRoVGVtLCBndXR0ZXJUZW0sIGl0ZW1zVGVtKSB7XG4gICAgaWYgKGZpeGVkV2lkdGhUZW0pIHtcbiAgICAgIHJldHVybiAoZml4ZWRXaWR0aFRlbSArIGd1dHRlclRlbSkgKiBzbGlkZUNvdW50TmV3ICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIENBTEMgP1xuICAgICAgICBDQUxDICsgJygnICsgc2xpZGVDb3VudE5ldyAqIDEwMCArICclIC8gJyArIGl0ZW1zVGVtICsgJyknIDpcbiAgICAgICAgc2xpZGVDb3VudE5ldyAqIDEwMCAvIGl0ZW1zVGVtICsgJyUnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNsaWRlV2lkdGhTdHlsZSAoZml4ZWRXaWR0aFRlbSwgZ3V0dGVyVGVtLCBpdGVtc1RlbSkge1xuICAgIHZhciB3aWR0aDtcblxuICAgIGlmIChmaXhlZFdpZHRoVGVtKSB7XG4gICAgICB3aWR0aCA9IChmaXhlZFdpZHRoVGVtICsgZ3V0dGVyVGVtKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2Fyb3VzZWwpIHsgaXRlbXNUZW0gPSBNYXRoLmZsb29yKGl0ZW1zVGVtKTsgfVxuICAgICAgdmFyIGRpdmlkZW5kID0gY2Fyb3VzZWwgPyBzbGlkZUNvdW50TmV3IDogaXRlbXNUZW07XG4gICAgICB3aWR0aCA9IENBTEMgP1xuICAgICAgICBDQUxDICsgJygxMDAlIC8gJyArIGRpdmlkZW5kICsgJyknIDpcbiAgICAgICAgMTAwIC8gZGl2aWRlbmQgKyAnJSc7XG4gICAgfVxuXG4gICAgd2lkdGggPSAnd2lkdGg6JyArIHdpZHRoO1xuXG4gICAgLy8gaW5uZXIgc2xpZGVyOiBvdmVyd3JpdGUgb3V0ZXIgc2xpZGVyIHN0eWxlc1xuICAgIHJldHVybiBuZXN0ZWQgIT09ICdpbm5lcicgPyB3aWR0aCArICc7JyA6IHdpZHRoICsgJyAhaW1wb3J0YW50Oyc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbGlkZUd1dHRlclN0eWxlIChndXR0ZXJUZW0pIHtcbiAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAvLyBndXR0ZXIgbWF5YmUgaW50ZXJnZXIgfHwgMFxuICAgIC8vIHNvIGNhbid0IHVzZSAnaWYgKGd1dHRlciknXG4gICAgaWYgKGd1dHRlclRlbSAhPT0gZmFsc2UpIHtcbiAgICAgIHZhciBwcm9wID0gaG9yaXpvbnRhbCA/ICdwYWRkaW5nLScgOiAnbWFyZ2luLScsXG4gICAgICAgICAgZGlyID0gaG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgICAgIHN0ciA9IHByb3AgKyAgZGlyICsgJzogJyArIGd1dHRlclRlbSArICdweDsnO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDU1NQcmVmaXggKG5hbWUsIG51bSkge1xuICAgIHZhciBwcmVmaXggPSBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCAtIG51bSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAocHJlZml4KSB7IHByZWZpeCA9ICctJyArIHByZWZpeCArICctJzsgfVxuXG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlIChzcGVlZCkge1xuICAgIHJldHVybiBnZXRDU1NQcmVmaXgoVFJBTlNJVElPTkRVUkFUSU9OLCAxOCkgKyAndHJhbnNpdGlvbi1kdXJhdGlvbjonICsgc3BlZWQgLyAxMDAwICsgJ3M7JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFuaW1hdGlvbkR1cmF0aW9uU3R5bGUgKHNwZWVkKSB7XG4gICAgcmV0dXJuIGdldENTU1ByZWZpeChBTklNQVRJT05EVVJBVElPTiwgMTcpICsgJ2FuaW1hdGlvbi1kdXJhdGlvbjonICsgc3BlZWQgLyAxMDAwICsgJ3M7JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTdHJ1Y3R1cmUgKCkge1xuICAgIHZhciBjbGFzc091dGVyID0gJ3Rucy1vdXRlcicsXG4gICAgICAgIGNsYXNzSW5uZXIgPSAndG5zLWlubmVyJyxcbiAgICAgICAgaGFzR3V0dGVyID0gaGFzT3B0aW9uKCdndXR0ZXInKTtcblxuICAgIG91dGVyV3JhcHBlci5jbGFzc05hbWUgPSBjbGFzc091dGVyO1xuICAgIGlubmVyV3JhcHBlci5jbGFzc05hbWUgPSBjbGFzc0lubmVyO1xuICAgIG91dGVyV3JhcHBlci5pZCA9IHNsaWRlSWQgKyAnLW93JztcbiAgICBpbm5lcldyYXBwZXIuaWQgPSBzbGlkZUlkICsgJy1pdyc7XG5cbiAgICAvLyBzZXQgY29udGFpbmVyIHByb3BlcnRpZXNcbiAgICBpZiAoY29udGFpbmVyLmlkID09PSAnJykgeyBjb250YWluZXIuaWQgPSBzbGlkZUlkOyB9XG4gICAgbmV3Q29udGFpbmVyQ2xhc3NlcyArPSBQRVJDRU5UQUdFTEFZT1VUIHx8IGF1dG9XaWR0aCA/ICcgdG5zLXN1YnBpeGVsJyA6ICcgdG5zLW5vLXN1YnBpeGVsJztcbiAgICBuZXdDb250YWluZXJDbGFzc2VzICs9IENBTEMgPyAnIHRucy1jYWxjJyA6ICcgdG5zLW5vLWNhbGMnO1xuICAgIGlmIChhdXRvV2lkdGgpIHsgbmV3Q29udGFpbmVyQ2xhc3NlcyArPSAnIHRucy1hdXRvd2lkdGgnOyB9XG4gICAgbmV3Q29udGFpbmVyQ2xhc3NlcyArPSAnIHRucy0nICsgb3B0aW9ucy5heGlzO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gbmV3Q29udGFpbmVyQ2xhc3NlcztcblxuICAgIC8vIGFkZCBjb25zdHJhaW4gbGF5ZXIgZm9yIGNhcm91c2VsXG4gICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICBtaWRkbGVXcmFwcGVyID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWlkZGxlV3JhcHBlci5pZCA9IHNsaWRlSWQgKyAnLW13JztcbiAgICAgIG1pZGRsZVdyYXBwZXIuY2xhc3NOYW1lID0gJ3Rucy1vdmgnO1xuXG4gICAgICBvdXRlcldyYXBwZXIuYXBwZW5kQ2hpbGQobWlkZGxlV3JhcHBlcik7XG4gICAgICBtaWRkbGVXcmFwcGVyLmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dGVyV3JhcHBlci5hcHBlbmRDaGlsZChpbm5lcldyYXBwZXIpO1xuICAgIH1cblxuICAgIGlmIChhdXRvSGVpZ2h0KSB7XG4gICAgICB2YXIgd3AgPSBtaWRkbGVXcmFwcGVyID8gbWlkZGxlV3JhcHBlciA6IGlubmVyV3JhcHBlcjtcbiAgICAgIHdwLmNsYXNzTmFtZSArPSAnIHRucy1haCc7XG4gICAgfVxuXG4gICAgY29udGFpbmVyUGFyZW50Lmluc2VydEJlZm9yZShvdXRlcldyYXBwZXIsIGNvbnRhaW5lcik7XG4gICAgaW5uZXJXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAvLyBhZGQgaWQsIGNsYXNzLCBhcmlhIGF0dHJpYnV0ZXNcbiAgICAvLyBiZWZvcmUgY2xvbmUgc2xpZGVzXG4gICAgZm9yRWFjaChzbGlkZUl0ZW1zLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICBhZGRDbGFzcyhpdGVtLCAndG5zLWl0ZW0nKTtcbiAgICAgIGlmICghaXRlbS5pZCkgeyBpdGVtLmlkID0gc2xpZGVJZCArICctaXRlbScgKyBpOyB9XG4gICAgICBpZiAoIWNhcm91c2VsICYmIGFuaW1hdGVOb3JtYWwpIHsgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7IH1cbiAgICAgIHNldEF0dHJzKGl0ZW0sIHtcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vICMjIGNsb25lIHNsaWRlc1xuICAgIC8vIGNhcm91c2VsOiBuICsgc2xpZGVzICsgblxuICAgIC8vIGdhbGxlcnk6ICAgICAgc2xpZGVzICsgblxuICAgIGlmIChjbG9uZUNvdW50KSB7XG4gICAgICB2YXIgZnJhZ21lbnRCZWZvcmUgPSBkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgIGZyYWdtZW50QWZ0ZXIgPSBkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICBmb3IgKHZhciBqID0gY2xvbmVDb3VudDsgai0tOykge1xuICAgICAgICB2YXIgbnVtID0gaiVzbGlkZUNvdW50LFxuICAgICAgICAgICAgY2xvbmVGaXJzdCA9IHNsaWRlSXRlbXNbbnVtXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGFkZENsYXNzKGNsb25lRmlyc3QsIHNsaWRlQ2xvbmVkQ2xhc3MpO1xuICAgICAgICByZW1vdmVBdHRycyhjbG9uZUZpcnN0LCAnaWQnKTtcbiAgICAgICAgZnJhZ21lbnRBZnRlci5pbnNlcnRCZWZvcmUoY2xvbmVGaXJzdCwgZnJhZ21lbnRBZnRlci5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgICB2YXIgY2xvbmVMYXN0ID0gc2xpZGVJdGVtc1tzbGlkZUNvdW50IC0gMSAtIG51bV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgIGFkZENsYXNzKGNsb25lTGFzdCwgc2xpZGVDbG9uZWRDbGFzcyk7XG4gICAgICAgICAgcmVtb3ZlQXR0cnMoY2xvbmVMYXN0LCAnaWQnKTtcbiAgICAgICAgICBmcmFnbWVudEJlZm9yZS5hcHBlbmRDaGlsZChjbG9uZUxhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZnJhZ21lbnRCZWZvcmUsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudEFmdGVyKTtcbiAgICAgIHNsaWRlSXRlbXMgPSBjb250YWluZXIuY2hpbGRyZW47XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2xpZGVyVHJhbnNmb3JtICgpIHtcbiAgICAvLyAjIyBpbWFnZXMgbG9hZGVkL2ZhaWxlZFxuICAgIGlmIChoYXNPcHRpb24oJ2F1dG9IZWlnaHQnKSB8fCBhdXRvV2lkdGggfHwgIWhvcml6b250YWwpIHtcbiAgICAgIHZhciBpbWdzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xuXG4gICAgICAvLyBhZGQgaW1nIGxvYWQgZXZlbnQgbGlzdGVuZXJcbiAgICAgIGZvckVhY2goaW1ncywgZnVuY3Rpb24oaW1nKSB7XG4gICAgICAgIHZhciBzcmMgPSBpbWcuc3JjO1xuXG4gICAgICAgIGlmICghbGF6eWxvYWQpIHtcbiAgICAgICAgICAvLyBub3QgZGF0YSBpbWdcbiAgICAgICAgICBpZiAoc3JjICYmIHNyYy5pbmRleE9mKCdkYXRhOmltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gJyc7XG4gICAgICAgICAgICBhZGRFdmVudHMoaW1nLCBpbWdFdmVudHMpO1xuICAgICAgICAgICAgYWRkQ2xhc3MoaW1nLCAnbG9hZGluZycpO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICAgIC8vIGRhdGEgaW1nXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltZ0xvYWRlZChpbWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBpbWdzQ29tcGxldGVcbiAgICAgIHJhZihmdW5jdGlvbigpeyBpbWdzTG9hZGVkQ2hlY2soYXJyYXlGcm9tTm9kZUxpc3QoaW1ncyksIGZ1bmN0aW9uKCkgeyBpbWdzQ29tcGxldGUgPSB0cnVlOyB9KTsgfSk7XG5cbiAgICAgIC8vIHJlc2V0IGltZ3MgZm9yIGF1dG8gaGVpZ2h0OiBjaGVjayB2aXNpYmxlIGltZ3Mgb25seVxuICAgICAgaWYgKGhhc09wdGlvbignYXV0b0hlaWdodCcpKSB7IGltZ3MgPSBnZXRJbWFnZUFycmF5KGluZGV4LCBNYXRoLm1pbihpbmRleCArIGl0ZW1zIC0gMSwgc2xpZGVDb3VudE5ldyAtIDEpKTsgfVxuXG4gICAgICBsYXp5bG9hZCA/IGluaXRTbGlkZXJUcmFuc2Zvcm1TdHlsZUNoZWNrKCkgOiByYWYoZnVuY3Rpb24oKXsgaW1nc0xvYWRlZENoZWNrKGFycmF5RnJvbU5vZGVMaXN0KGltZ3MpLCBpbml0U2xpZGVyVHJhbnNmb3JtU3R5bGVDaGVjayk7IH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBjb250YWluZXIgdHJhbnNmb3JtIHByb3BlcnR5XG4gICAgICBpZiAoY2Fyb3VzZWwpIHsgZG9Db250YWluZXJUcmFuc2Zvcm1TaWxlbnQoKTsgfVxuXG4gICAgICAvLyB1cGRhdGUgc2xpZGVyIHRvb2xzIGFuZCBldmVudHNcbiAgICAgIGluaXRUb29scygpO1xuICAgICAgaW5pdEV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJUcmFuc2Zvcm1TdHlsZUNoZWNrICgpIHtcbiAgICBpZiAoYXV0b1dpZHRoICYmIHNsaWRlQ291bnQgPiAxKSB7XG4gICAgICAvLyBjaGVjayBzdHlsZXMgYXBwbGljYXRpb25cbiAgICAgIHZhciBudW0gPSBsb29wID8gaW5kZXggOiBzbGlkZUNvdW50IC0gMTtcblxuICAgICAgKGZ1bmN0aW9uIHN0eWxlc0FwcGxpY2F0aW9uQ2hlY2soKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gc2xpZGVJdGVtc1tudW1dLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIHZhciByaWdodCA9IHNsaWRlSXRlbXNbbnVtIC0gMV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQ7XG5cbiAgICAgICAgKE1hdGguYWJzKGxlZnQgLSByaWdodCkgPD0gMSkgP1xuICAgICAgICAgIGluaXRTbGlkZXJUcmFuc2Zvcm1Db3JlKCkgOlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgc3R5bGVzQXBwbGljYXRpb25DaGVjaygpIH0sIDE2KTtcbiAgICAgIH0pKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdFNsaWRlclRyYW5zZm9ybUNvcmUoKTtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGluaXRTbGlkZXJUcmFuc2Zvcm1Db3JlICgpIHtcbiAgICAvLyBydW4gRm4oKXMgd2hpY2ggYXJlIHJlbHkgb24gaW1hZ2UgbG9hZGluZ1xuICAgIGlmICghaG9yaXpvbnRhbCB8fCBhdXRvV2lkdGgpIHtcbiAgICAgIHNldFNsaWRlUG9zaXRpb25zKCk7XG5cbiAgICAgIGlmIChhdXRvV2lkdGgpIHtcbiAgICAgICAgcmlnaHRCb3VuZGFyeSA9IGdldFJpZ2h0Qm91bmRhcnkoKTtcbiAgICAgICAgaWYgKGZyZWV6YWJsZSkgeyBmcmVlemUgPSBnZXRGcmVlemUoKTsgfVxuICAgICAgICBpbmRleE1heCA9IGdldEluZGV4TWF4KCk7IC8vIDw9IHNsaWRlUG9zaXRpb25zLCByaWdodEJvdW5kYXJ5IDw9XG4gICAgICAgIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlIHx8IGZyZWV6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVDb250ZW50V3JhcHBlckhlaWdodCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCBjb250YWluZXIgdHJhbnNmb3JtIHByb3BlcnR5XG4gICAgaWYgKGNhcm91c2VsKSB7IGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7IH1cblxuICAgIC8vIHVwZGF0ZSBzbGlkZXIgdG9vbHMgYW5kIGV2ZW50c1xuICAgIGluaXRUb29scygpO1xuICAgIGluaXRFdmVudHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTaGVldCAoKSB7XG4gICAgLy8gZ2FsbGVyeTpcbiAgICAvLyBzZXQgYW5pbWF0aW9uIGNsYXNzZXMgYW5kIGxlZnQgdmFsdWUgZm9yIGdhbGxlcnkgc2xpZGVyXG4gICAgaWYgKCFjYXJvdXNlbCkge1xuICAgICAgZm9yICh2YXIgaSA9IGluZGV4LCBsID0gaW5kZXggKyBNYXRoLm1pbihzbGlkZUNvdW50LCBpdGVtcyk7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSAoaSAtIGluZGV4KSAqIDEwMCAvIGl0ZW1zICsgJyUnO1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBhbmltYXRlSW4pO1xuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjIyMjIExBWU9VVFxuXG4gICAgLy8gIyMgSU5MSU5FLUJMT0NLIFZTIEZMT0FUXG5cbiAgICAvLyAjIyBQZXJjZW50YWdlTGF5b3V0OlxuICAgIC8vIHNsaWRlczogaW5saW5lLWJsb2NrXG4gICAgLy8gcmVtb3ZlIGJsYW5rIHNwYWNlIGJldHdlZW4gc2xpZGVzIGJ5IHNldCBmb250LXNpemU6IDBcblxuICAgIC8vICMjIE5vbiBQZXJjZW50YWdlTGF5b3V0OlxuICAgIC8vIHNsaWRlczogZmxvYXRcbiAgICAvLyAgICAgICAgIG1hcmdpbi1yaWdodDogLTEwMCVcbiAgICAvLyAgICAgICAgIG1hcmdpbi1sZWZ0OiB+XG5cbiAgICAvLyBSZXNvdXJjZTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvMTQ3dXAyNDV3d1RYZVFZdmUzQlJTQUQ0b1ZjdlFtdUdzRnRlSk9lQTV4TlEvZWRpdD91c3A9c2hhcmluZ1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBpZiAoUEVSQ0VOVEFHRUxBWU9VVCB8fCBhdXRvV2lkdGgpIHtcbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCAnZm9udC1zaXplOicgKyB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZUl0ZW1zWzBdKS5mb250U2l6ZSArICc7JywgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCwgJ2ZvbnQtc2l6ZTowOycsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9IGVsc2UgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24gKHNsaWRlLCBpKSB7XG4gICAgICAgICAgc2xpZGUuc3R5bGUubWFyZ2luTGVmdCA9IGdldFNsaWRlTWFyZ2luTGVmdChpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyAjIyBCQVNJQyBTVFlMRVNcbiAgICBpZiAoQ1NTTVEpIHtcbiAgICAgIC8vIG1pZGRsZSB3cmFwcGVyIHN0eWxlXG4gICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OKSB7XG4gICAgICAgIHZhciBzdHIgPSBtaWRkbGVXcmFwcGVyICYmIG9wdGlvbnMuYXV0b0hlaWdodCA/IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKG9wdGlvbnMuc3BlZWQpIDogJyc7XG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQgKyAnLW13Jywgc3RyLCBnZXRDc3NSdWxlc0xlbmd0aChzaGVldCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBpbm5lciB3cmFwcGVyIHN0eWxlc1xuICAgICAgc3RyID0gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKG9wdGlvbnMuZWRnZVBhZGRpbmcsIG9wdGlvbnMuZ3V0dGVyLCBvcHRpb25zLmZpeGVkV2lkdGgsIG9wdGlvbnMuc3BlZWQsIG9wdGlvbnMuYXV0b0hlaWdodCk7XG4gICAgICBhZGRDU1NSdWxlKHNoZWV0LCAnIycgKyBzbGlkZUlkICsgJy1pdycsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcblxuICAgICAgLy8gY29udGFpbmVyIHN0eWxlc1xuICAgICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICAgIHN0ciA9IGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCA/ICd3aWR0aDonICsgZ2V0Q29udGFpbmVyV2lkdGgob3B0aW9ucy5maXhlZFdpZHRoLCBvcHRpb25zLmd1dHRlciwgb3B0aW9ucy5pdGVtcykgKyAnOycgOiAnJztcbiAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBzdHIgKz0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWQpOyB9XG4gICAgICAgIGFkZENTU1J1bGUoc2hlZXQsICcjJyArIHNsaWRlSWQsIHN0ciwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2xpZGUgc3R5bGVzXG4gICAgICBzdHIgPSBob3Jpem9udGFsICYmICFhdXRvV2lkdGggPyBnZXRTbGlkZVdpZHRoU3R5bGUob3B0aW9ucy5maXhlZFdpZHRoLCBvcHRpb25zLmd1dHRlciwgb3B0aW9ucy5pdGVtcykgOiAnJztcbiAgICAgIGlmIChvcHRpb25zLmd1dHRlcikgeyBzdHIgKz0gZ2V0U2xpZGVHdXR0ZXJTdHlsZShvcHRpb25zLmd1dHRlcik7IH1cbiAgICAgIC8vIHNldCBnYWxsZXJ5IGl0ZW1zIHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBzdHIgKz0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWQpOyB9XG4gICAgICAgIGlmIChBTklNQVRJT05EVVJBVElPTikgeyBzdHIgKz0gZ2V0QW5pbWF0aW9uRHVyYXRpb25TdHlsZShzcGVlZCk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzdHIpIHsgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7IH1cblxuICAgIC8vIG5vbiBDU1MgbWVkaWFxdWVyaWVzOiBJRThcbiAgICAvLyAjIyB1cGRhdGUgaW5uZXIgd3JhcHBlciwgY29udGFpbmVyLCBzbGlkZXMgaWYgbmVlZGVkXG4gICAgLy8gc2V0IGlubGluZSBzdHlsZXMgZm9yIGlubmVyIHdyYXBwZXIgJiBjb250YWluZXJcbiAgICAvLyBpbnNlcnQgc3R5bGVzaGVldCAob25lIGxpbmUpIGZvciBzbGlkZXMgb25seSAoc2luY2Ugc2xpZGVzIGFyZSBtYW55KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtaWRkbGUgd3JhcHBlciBzdHlsZXNcbiAgICAgIHVwZGF0ZV9jYXJvdXNlbF90cmFuc2l0aW9uX2R1cmF0aW9uKCk7XG5cbiAgICAgIC8vIGlubmVyIHdyYXBwZXIgc3R5bGVzXG4gICAgICBpbm5lcldyYXBwZXIuc3R5bGUuY3NzVGV4dCA9IGdldElubmVyV3JhcHBlclN0eWxlcyhlZGdlUGFkZGluZywgZ3V0dGVyLCBmaXhlZFdpZHRoLCBhdXRvSGVpZ2h0KTtcblxuICAgICAgLy8gY29udGFpbmVyIHN0eWxlc1xuICAgICAgaWYgKGNhcm91c2VsICYmIGhvcml6b250YWwgJiYgIWF1dG9XaWR0aCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBnZXRDb250YWluZXJXaWR0aChmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2xpZGUgc3R5bGVzXG4gICAgICB2YXIgc3RyID0gaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoID8gZ2V0U2xpZGVXaWR0aFN0eWxlKGZpeGVkV2lkdGgsIGd1dHRlciwgaXRlbXMpIDogJyc7XG4gICAgICBpZiAoZ3V0dGVyKSB7IHN0ciArPSBnZXRTbGlkZUd1dHRlclN0eWxlKGd1dHRlcik7IH1cblxuICAgICAgLy8gYXBwZW5kIHRvIHRoZSBsYXN0IGxpbmVcbiAgICAgIGlmIChzdHIpIHsgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7IH1cbiAgICB9XG5cbiAgICAvLyAjIyBNRURJQVFVRVJJRVNcbiAgICBpZiAocmVzcG9uc2l2ZSAmJiBDU1NNUSkge1xuICAgICAgZm9yICh2YXIgYnAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgICAvLyBicDogY29udmVydCBzdHJpbmcgdG8gbnVtYmVyXG4gICAgICAgIGJwID0gcGFyc2VJbnQoYnApO1xuXG4gICAgICAgIHZhciBvcHRzID0gcmVzcG9uc2l2ZVticF0sXG4gICAgICAgICAgICBzdHIgPSAnJyxcbiAgICAgICAgICAgIG1pZGRsZVdyYXBwZXJTdHIgPSAnJyxcbiAgICAgICAgICAgIGlubmVyV3JhcHBlclN0ciA9ICcnLFxuICAgICAgICAgICAgY29udGFpbmVyU3RyID0gJycsXG4gICAgICAgICAgICBzbGlkZVN0ciA9ICcnLFxuICAgICAgICAgICAgaXRlbXNCUCA9ICFhdXRvV2lkdGggPyBnZXRPcHRpb24oJ2l0ZW1zJywgYnApIDogbnVsbCxcbiAgICAgICAgICAgIGZpeGVkV2lkdGhCUCA9IGdldE9wdGlvbignZml4ZWRXaWR0aCcsIGJwKSxcbiAgICAgICAgICAgIHNwZWVkQlAgPSBnZXRPcHRpb24oJ3NwZWVkJywgYnApLFxuICAgICAgICAgICAgZWRnZVBhZGRpbmdCUCA9IGdldE9wdGlvbignZWRnZVBhZGRpbmcnLCBicCksXG4gICAgICAgICAgICBhdXRvSGVpZ2h0QlAgPSBnZXRPcHRpb24oJ2F1dG9IZWlnaHQnLCBicCksXG4gICAgICAgICAgICBndXR0ZXJCUCA9IGdldE9wdGlvbignZ3V0dGVyJywgYnApO1xuXG4gICAgICAgIC8vIG1pZGRsZSB3cmFwcGVyIHN0cmluZ1xuICAgICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OICYmIG1pZGRsZVdyYXBwZXIgJiYgZ2V0T3B0aW9uKCdhdXRvSGVpZ2h0JywgYnApICYmICdzcGVlZCcgaW4gb3B0cykge1xuICAgICAgICAgIG1pZGRsZVdyYXBwZXJTdHIgPSAnIycgKyBzbGlkZUlkICsgJy1td3snICsgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWRCUCkgKyAnfSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbm5lciB3cmFwcGVyIHN0cmluZ1xuICAgICAgICBpZiAoJ2VkZ2VQYWRkaW5nJyBpbiBvcHRzIHx8ICdndXR0ZXInIGluIG9wdHMpIHtcbiAgICAgICAgICBpbm5lcldyYXBwZXJTdHIgPSAnIycgKyBzbGlkZUlkICsgJy1pd3snICsgZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKGVkZ2VQYWRkaW5nQlAsIGd1dHRlckJQLCBmaXhlZFdpZHRoQlAsIHNwZWVkQlAsIGF1dG9IZWlnaHRCUCkgKyAnfSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb250YWluZXIgc3RyaW5nXG4gICAgICAgIGlmIChjYXJvdXNlbCAmJiBob3Jpem9udGFsICYmICFhdXRvV2lkdGggJiYgKCdmaXhlZFdpZHRoJyBpbiBvcHRzIHx8ICdpdGVtcycgaW4gb3B0cyB8fCAoZml4ZWRXaWR0aCAmJiAnZ3V0dGVyJyBpbiBvcHRzKSkpIHtcbiAgICAgICAgICBjb250YWluZXJTdHIgPSAnd2lkdGg6JyArIGdldENvbnRhaW5lcldpZHRoKGZpeGVkV2lkdGhCUCwgZ3V0dGVyQlAsIGl0ZW1zQlApICsgJzsnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04gJiYgJ3NwZWVkJyBpbiBvcHRzKSB7XG4gICAgICAgICAgY29udGFpbmVyU3RyICs9IGdldFRyYW5zaXRpb25EdXJhdGlvblN0eWxlKHNwZWVkQlApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250YWluZXJTdHIpIHtcbiAgICAgICAgICBjb250YWluZXJTdHIgPSAnIycgKyBzbGlkZUlkICsgJ3snICsgY29udGFpbmVyU3RyICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2xpZGUgc3RyaW5nXG4gICAgICAgIGlmICgnZml4ZWRXaWR0aCcgaW4gb3B0cyB8fCAoZml4ZWRXaWR0aCAmJiAnZ3V0dGVyJyBpbiBvcHRzKSB8fCAhY2Fyb3VzZWwgJiYgJ2l0ZW1zJyBpbiBvcHRzKSB7XG4gICAgICAgICAgc2xpZGVTdHIgKz0gZ2V0U2xpZGVXaWR0aFN0eWxlKGZpeGVkV2lkdGhCUCwgZ3V0dGVyQlAsIGl0ZW1zQlApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZ3V0dGVyJyBpbiBvcHRzKSB7XG4gICAgICAgICAgc2xpZGVTdHIgKz0gZ2V0U2xpZGVHdXR0ZXJTdHlsZShndXR0ZXJCUCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGdhbGxlcnkgaXRlbXMgdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgICBpZiAoIWNhcm91c2VsICYmICdzcGVlZCcgaW4gb3B0cykge1xuICAgICAgICAgIGlmIChUUkFOU0lUSU9ORFVSQVRJT04pIHsgc2xpZGVTdHIgKz0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUoc3BlZWRCUCk7IH1cbiAgICAgICAgICBpZiAoQU5JTUFUSU9ORFVSQVRJT04pIHsgc2xpZGVTdHIgKz0gZ2V0QW5pbWF0aW9uRHVyYXRpb25TdHlsZShzcGVlZEJQKTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZVN0cikgeyBzbGlkZVN0ciA9ICcjJyArIHNsaWRlSWQgKyAnID4gLnRucy1pdGVteycgKyBzbGlkZVN0ciArICd9JzsgfVxuXG4gICAgICAgIC8vIGFkZCB1cFxuICAgICAgICBzdHIgPSBtaWRkbGVXcmFwcGVyU3RyICsgaW5uZXJXcmFwcGVyU3RyICsgY29udGFpbmVyU3RyICsgc2xpZGVTdHI7XG5cbiAgICAgICAgaWYgKHN0cikge1xuICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoJ0BtZWRpYSAobWluLXdpZHRoOiAnICsgYnAgLyAxNiArICdlbSkgeycgKyBzdHIgKyAnfScsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0VG9vbHMgKCkge1xuICAgIC8vID09IHNsaWRlcyA9PVxuICAgIHVwZGF0ZVNsaWRlU3RhdHVzKCk7XG5cbiAgICAvLyA9PSBsaXZlIHJlZ2lvbiA9PVxuICAgIG91dGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCAnPGRpdiBjbGFzcz1cInRucy1saXZlcmVnaW9uIHRucy12aXN1YWxseS1oaWRkZW5cIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWF0b21pYz1cInRydWVcIj5zbGlkZSA8c3BhbiBjbGFzcz1cImN1cnJlbnRcIj4nICsgZ2V0TGl2ZVJlZ2lvblN0cigpICsgJzwvc3Bhbj4gIG9mICcgKyBzbGlkZUNvdW50ICsgJzwvZGl2PicpO1xuICAgIGxpdmVyZWdpb25DdXJyZW50ID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy50bnMtbGl2ZXJlZ2lvbiAuY3VycmVudCcpO1xuXG4gICAgLy8gPT0gYXV0b3BsYXlJbml0ID09XG4gICAgaWYgKGhhc0F1dG9wbGF5KSB7XG4gICAgICB2YXIgdHh0ID0gYXV0b3BsYXkgPyAnc3RvcCcgOiAnc3RhcnQnO1xuICAgICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7XG4gICAgICAgIHNldEF0dHJzKGF1dG9wbGF5QnV0dG9uLCB7J2RhdGEtYWN0aW9uJzogdHh0fSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuYXV0b3BsYXlCdXR0b25PdXRwdXQpIHtcbiAgICAgICAgb3V0ZXJXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChnZXRJbnNlcnRQb3NpdGlvbihvcHRpb25zLmF1dG9wbGF5UG9zaXRpb24pLCAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1hY3Rpb249XCInICsgdHh0ICsgJ1wiPicgKyBhdXRvcGxheUh0bWxTdHJpbmdzWzBdICsgdHh0ICsgYXV0b3BsYXlIdG1sU3RyaW5nc1sxXSArIGF1dG9wbGF5VGV4dFswXSArICc8L2J1dHRvbj4nKTtcbiAgICAgICAgYXV0b3BsYXlCdXR0b24gPSBvdXRlcldyYXBwZXIucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uXScpO1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgZXZlbnRcbiAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikge1xuICAgICAgICBhZGRFdmVudHMoYXV0b3BsYXlCdXR0b24sIHsnY2xpY2snOiB0b2dnbGVBdXRvcGxheX0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgICAgc3RhcnRBdXRvcGxheSgpO1xuICAgICAgICBpZiAoYXV0b3BsYXlIb3ZlclBhdXNlKSB7IGFkZEV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKTsgfVxuICAgICAgICBpZiAoYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSkgeyBhZGRFdmVudHMoY29udGFpbmVyLCB2aXNpYmlsaXR5RXZlbnQpOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gPT0gbmF2SW5pdCA9PVxuICAgIGlmIChoYXNOYXYpIHtcbiAgICAgIHZhciBpbml0SW5kZXggPSAhY2Fyb3VzZWwgPyAwIDogY2xvbmVDb3VudDtcbiAgICAgIC8vIGN1c3RvbWl6ZWQgbmF2XG4gICAgICAvLyB3aWxsIG5vdCBoaWRlIHRoZSBuYXZzIGluIGNhc2UgdGhleSdyZSB0aHVtYm5haWxzXG4gICAgICBpZiAobmF2Q29udGFpbmVyKSB7XG4gICAgICAgIHNldEF0dHJzKG5hdkNvbnRhaW5lciwgeydhcmlhLWxhYmVsJzogJ0Nhcm91c2VsIFBhZ2luYXRpb24nfSk7XG4gICAgICAgIG5hdkl0ZW1zID0gbmF2Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgICBmb3JFYWNoKG5hdkl0ZW1zLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgICAgc2V0QXR0cnMoaXRlbSwge1xuICAgICAgICAgICAgJ2RhdGEtbmF2JzogaSxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMScsXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IG5hdlN0ciArIChpICsgMSksXG4gICAgICAgICAgICAnYXJpYS1jb250cm9scyc6IHNsaWRlSWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBnZW5lcmF0ZWQgbmF2XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmF2SHRtbCA9ICcnLFxuICAgICAgICAgICAgaGlkZGVuU3RyID0gbmF2QXNUaHVtYm5haWxzID8gJycgOiAnc3R5bGU9XCJkaXNwbGF5Om5vbmVcIic7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgLy8gaGlkZSBuYXYgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAgIG5hdkh0bWwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtbmF2PVwiJyArIGkgKydcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1jb250cm9scz1cIicgKyBzbGlkZUlkICsgJ1wiICcgKyBoaWRkZW5TdHIgKyAnIGFyaWEtbGFiZWw9XCInICsgbmF2U3RyICsgKGkgKyAxKSArJ1wiPjwvYnV0dG9uPic7XG4gICAgICAgIH1cbiAgICAgICAgbmF2SHRtbCA9ICc8ZGl2IGNsYXNzPVwidG5zLW5hdlwiIGFyaWEtbGFiZWw9XCJDYXJvdXNlbCBQYWdpbmF0aW9uXCI+JyArIG5hdkh0bWwgKyAnPC9kaXY+JztcbiAgICAgICAgb3V0ZXJXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChnZXRJbnNlcnRQb3NpdGlvbihvcHRpb25zLm5hdlBvc2l0aW9uKSwgbmF2SHRtbCk7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyID0gb3V0ZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy50bnMtbmF2Jyk7XG4gICAgICAgIG5hdkl0ZW1zID0gbmF2Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVOYXZWaXNpYmlsaXR5KCk7XG5cbiAgICAgIC8vIGFkZCB0cmFuc2l0aW9uXG4gICAgICBpZiAoVFJBTlNJVElPTkRVUkFUSU9OKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBUUkFOU0lUSU9ORFVSQVRJT04uc3Vic3RyaW5nKDAsIFRSQU5TSVRJT05EVVJBVElPTi5sZW5ndGggLSAxOCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIHN0ciA9ICd0cmFuc2l0aW9uOiBhbGwgJyArIHNwZWVkIC8gMTAwMCArICdzJztcblxuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgc3RyID0gJy0nICsgcHJlZml4ICsgJy0nICsgc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJ1thcmlhLWNvbnRyb2xzXj0nICsgc2xpZGVJZCArICctaXRlbV0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICB9XG5cbiAgICAgIHNldEF0dHJzKG5hdkl0ZW1zW25hdkN1cnJlbnRJbmRleF0sIHsnYXJpYS1sYWJlbCc6IG5hdlN0ciArIChuYXZDdXJyZW50SW5kZXggKyAxKSArIG5hdlN0ckN1cnJlbnR9KTtcbiAgICAgIHJlbW92ZUF0dHJzKG5hdkl0ZW1zW25hdkN1cnJlbnRJbmRleF0sICd0YWJpbmRleCcpO1xuICAgICAgYWRkQ2xhc3MobmF2SXRlbXNbbmF2Q3VycmVudEluZGV4XSwgbmF2QWN0aXZlQ2xhc3MpO1xuXG4gICAgICAvLyBhZGQgZXZlbnRzXG4gICAgICBhZGRFdmVudHMobmF2Q29udGFpbmVyLCBuYXZFdmVudHMpO1xuICAgIH1cblxuXG5cbiAgICAvLyA9PSBjb250cm9sc0luaXQgPT1cbiAgICBpZiAoaGFzQ29udHJvbHMpIHtcbiAgICAgIGlmICghY29udHJvbHNDb250YWluZXIgJiYgKCFwcmV2QnV0dG9uIHx8ICFuZXh0QnV0dG9uKSkge1xuICAgICAgICBvdXRlcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKGdldEluc2VydFBvc2l0aW9uKG9wdGlvbnMuY29udHJvbHNQb3NpdGlvbiksICc8ZGl2IGNsYXNzPVwidG5zLWNvbnRyb2xzXCIgYXJpYS1sYWJlbD1cIkNhcm91c2VsIE5hdmlnYXRpb25cIiB0YWJpbmRleD1cIjBcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWNvbnRyb2xzPVwicHJldlwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHNsaWRlSWQgKydcIj4nICsgY29udHJvbHNUZXh0WzBdICsgJzwvYnV0dG9uPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtY29udHJvbHM9XCJuZXh0XCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtY29udHJvbHM9XCInICsgc2xpZGVJZCArJ1wiPicgKyBjb250cm9sc1RleHRbMV0gKyAnPC9idXR0b24+PC9kaXY+Jyk7XG5cbiAgICAgICAgY29udHJvbHNDb250YWluZXIgPSBvdXRlcldyYXBwZXIucXVlcnlTZWxlY3RvcignLnRucy1jb250cm9scycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXByZXZCdXR0b24gfHwgIW5leHRCdXR0b24pIHtcbiAgICAgICAgcHJldkJ1dHRvbiA9IGNvbnRyb2xzQ29udGFpbmVyLmNoaWxkcmVuWzBdO1xuICAgICAgICBuZXh0QnV0dG9uID0gY29udHJvbHNDb250YWluZXIuY2hpbGRyZW5bMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNvbnRyb2xzQ29udGFpbmVyKSB7XG4gICAgICAgIHNldEF0dHJzKGNvbnRyb2xzQ29udGFpbmVyLCB7XG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnQ2Fyb3VzZWwgTmF2aWdhdGlvbicsXG4gICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jb250cm9sc0NvbnRhaW5lciB8fCAob3B0aW9ucy5wcmV2QnV0dG9uICYmIG9wdGlvbnMubmV4dEJ1dHRvbikpIHtcbiAgICAgICAgc2V0QXR0cnMoW3ByZXZCdXR0b24sIG5leHRCdXR0b25dLCB7XG4gICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBzbGlkZUlkLFxuICAgICAgICAgICd0YWJpbmRleCc6ICctMScsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jb250cm9sc0NvbnRhaW5lciB8fCAob3B0aW9ucy5wcmV2QnV0dG9uICYmIG9wdGlvbnMubmV4dEJ1dHRvbikpIHtcbiAgICAgICAgc2V0QXR0cnMocHJldkJ1dHRvbiwgeydkYXRhLWNvbnRyb2xzJyA6ICdwcmV2J30pO1xuICAgICAgICBzZXRBdHRycyhuZXh0QnV0dG9uLCB7J2RhdGEtY29udHJvbHMnIDogJ25leHQnfSk7XG4gICAgICB9XG5cbiAgICAgIHByZXZJc0J1dHRvbiA9IGlzQnV0dG9uKHByZXZCdXR0b24pO1xuICAgICAgbmV4dElzQnV0dG9uID0gaXNCdXR0b24obmV4dEJ1dHRvbik7XG5cbiAgICAgIHVwZGF0ZUNvbnRyb2xzU3RhdHVzKCk7XG5cbiAgICAgIC8vIGFkZCBldmVudHNcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBhZGRFdmVudHMoY29udHJvbHNDb250YWluZXIsIGNvbnRyb2xzRXZlbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZEV2ZW50cyhwcmV2QnV0dG9uLCBjb250cm9sc0V2ZW50cyk7XG4gICAgICAgIGFkZEV2ZW50cyhuZXh0QnV0dG9uLCBjb250cm9sc0V2ZW50cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaGlkZSB0b29scyBpZiBuZWVkZWRcbiAgICBkaXNhYmxlVUkoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRFdmVudHMgKCkge1xuICAgIC8vIGFkZCBldmVudHNcbiAgICBpZiAoY2Fyb3VzZWwgJiYgVFJBTlNJVElPTkVORCkge1xuICAgICAgdmFyIGV2ZSA9IHt9O1xuICAgICAgZXZlW1RSQU5TSVRJT05FTkRdID0gb25UcmFuc2l0aW9uRW5kO1xuICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgZXZlKTtcbiAgICB9XG5cbiAgICBpZiAodG91Y2gpIHsgYWRkRXZlbnRzKGNvbnRhaW5lciwgdG91Y2hFdmVudHMsIG9wdGlvbnMucHJldmVudFNjcm9sbE9uVG91Y2gpOyB9XG4gICAgaWYgKG1vdXNlRHJhZykgeyBhZGRFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTsgfVxuICAgIGlmIChhcnJvd0tleXMpIHsgYWRkRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7IH1cblxuICAgIGlmIChuZXN0ZWQgPT09ICdpbm5lcicpIHtcbiAgICAgIGV2ZW50cy5vbignb3V0ZXJSZXNpemVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNpemVUYXNrcygpO1xuICAgICAgICBldmVudHMuZW1pdCgnaW5uZXJMb2FkZWQnLCBpbmZvKCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChyZXNwb25zaXZlIHx8IGZpeGVkV2lkdGggfHwgYXV0b1dpZHRoIHx8IGF1dG9IZWlnaHQgfHwgIWhvcml6b250YWwpIHtcbiAgICAgIGFkZEV2ZW50cyh3aW4sIHsncmVzaXplJzogb25SZXNpemV9KTtcbiAgICB9XG5cbiAgICBpZiAoYXV0b0hlaWdodCkge1xuICAgICAgaWYgKG5lc3RlZCA9PT0gJ291dGVyJykge1xuICAgICAgICBldmVudHMub24oJ2lubmVyTG9hZGVkJywgZG9BdXRvSGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAoIWRpc2FibGUpIHsgZG9BdXRvSGVpZ2h0KCk7IH1cbiAgICB9XG5cbiAgICBkb0xhenlMb2FkKCk7XG4gICAgaWYgKGRpc2FibGUpIHsgZGlzYWJsZVNsaWRlcigpOyB9IGVsc2UgaWYgKGZyZWV6ZSkgeyBmcmVlemVTbGlkZXIoKTsgfVxuXG4gICAgZXZlbnRzLm9uKCdpbmRleENoYW5nZWQnLCBhZGRpdGlvbmFsVXBkYXRlcyk7XG4gICAgaWYgKG5lc3RlZCA9PT0gJ2lubmVyJykgeyBldmVudHMuZW1pdCgnaW5uZXJMb2FkZWQnLCBpbmZvKCkpOyB9XG4gICAgaWYgKHR5cGVvZiBvbkluaXQgPT09ICdmdW5jdGlvbicpIHsgb25Jbml0KGluZm8oKSk7IH1cbiAgICBpc09uID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIC8vIHNoZWV0XG4gICAgc2hlZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGlmIChzaGVldC5vd25lck5vZGUpIHsgc2hlZXQub3duZXJOb2RlLnJlbW92ZSgpOyB9XG5cbiAgICAvLyByZW1vdmUgd2luIGV2ZW50IGxpc3RlbmVyc1xuICAgIHJlbW92ZUV2ZW50cyh3aW4sIHsncmVzaXplJzogb25SZXNpemV9KTtcblxuICAgIC8vIGFycm93S2V5cywgY29udHJvbHMsIG5hdlxuICAgIGlmIChhcnJvd0tleXMpIHsgcmVtb3ZlRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCk7IH1cbiAgICBpZiAoY29udHJvbHNDb250YWluZXIpIHsgcmVtb3ZlRXZlbnRzKGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0V2ZW50cyk7IH1cbiAgICBpZiAobmF2Q29udGFpbmVyKSB7IHJlbW92ZUV2ZW50cyhuYXZDb250YWluZXIsIG5hdkV2ZW50cyk7IH1cblxuICAgIC8vIGF1dG9wbGF5XG4gICAgcmVtb3ZlRXZlbnRzKGNvbnRhaW5lciwgaG92ZXJFdmVudHMpO1xuICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIHZpc2liaWxpdHlFdmVudCk7XG4gICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7IHJlbW92ZUV2ZW50cyhhdXRvcGxheUJ1dHRvbiwgeydjbGljayc6IHRvZ2dsZUF1dG9wbGF5fSk7IH1cbiAgICBpZiAoYXV0b3BsYXkpIHsgY2xlYXJJbnRlcnZhbChhdXRvcGxheVRpbWVyKTsgfVxuXG4gICAgLy8gY29udGFpbmVyXG4gICAgaWYgKGNhcm91c2VsICYmIFRSQU5TSVRJT05FTkQpIHtcbiAgICAgIHZhciBldmUgPSB7fTtcbiAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IG9uVHJhbnNpdGlvbkVuZDtcbiAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGV2ZSk7XG4gICAgfVxuICAgIGlmICh0b3VjaCkgeyByZW1vdmVFdmVudHMoY29udGFpbmVyLCB0b3VjaEV2ZW50cyk7IH1cbiAgICBpZiAobW91c2VEcmFnKSB7IHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGRyYWdFdmVudHMpOyB9XG5cbiAgICAvLyBjYWNoZSBPYmplY3QgdmFsdWVzIGluIG9wdGlvbnMgJiYgcmVzZXQgSFRNTFxuICAgIHZhciBodG1sTGlzdCA9IFtjb250YWluZXJIVE1MLCBjb250cm9sc0NvbnRhaW5lckhUTUwsIHByZXZCdXR0b25IVE1MLCBuZXh0QnV0dG9uSFRNTCwgbmF2Q29udGFpbmVySFRNTCwgYXV0b3BsYXlCdXR0b25IVE1MXTtcblxuICAgIHRuc0xpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICB2YXIgZWwgPSBpdGVtID09PSAnY29udGFpbmVyJyA/IG91dGVyV3JhcHBlciA6IG9wdGlvbnNbaXRlbV07XG5cbiAgICAgIGlmICh0eXBlb2YgZWwgPT09ICdvYmplY3QnICYmIGVsKSB7XG4gICAgICAgIHZhciBwcmV2RWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nID8gZWwucHJldmlvdXNFbGVtZW50U2libGluZyA6IGZhbHNlLFxuICAgICAgICAgICAgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICBlbC5vdXRlckhUTUwgPSBodG1sTGlzdFtpXTtcbiAgICAgICAgb3B0aW9uc1tpdGVtXSA9IHByZXZFbCA/IHByZXZFbC5uZXh0RWxlbWVudFNpYmxpbmcgOiBwYXJlbnRFbC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy8gcmVzZXQgdmFyaWFibGVzXG4gICAgdG5zTGlzdCA9IGFuaW1hdGVJbiA9IGFuaW1hdGVPdXQgPSBhbmltYXRlRGVsYXkgPSBhbmltYXRlTm9ybWFsID0gaG9yaXpvbnRhbCA9IG91dGVyV3JhcHBlciA9IGlubmVyV3JhcHBlciA9IGNvbnRhaW5lciA9IGNvbnRhaW5lclBhcmVudCA9IGNvbnRhaW5lckhUTUwgPSBzbGlkZUl0ZW1zID0gc2xpZGVDb3VudCA9IGJyZWFrcG9pbnRab25lID0gd2luZG93V2lkdGggPSBhdXRvV2lkdGggPSBmaXhlZFdpZHRoID0gZWRnZVBhZGRpbmcgPSBndXR0ZXIgPSB2aWV3cG9ydCA9IGl0ZW1zID0gc2xpZGVCeSA9IHZpZXdwb3J0TWF4ID0gYXJyb3dLZXlzID0gc3BlZWQgPSByZXdpbmQgPSBsb29wID0gYXV0b0hlaWdodCA9IHNoZWV0ID0gbGF6eWxvYWQgPSBzbGlkZVBvc2l0aW9ucyA9IHNsaWRlSXRlbXNPdXQgPSBjbG9uZUNvdW50ID0gc2xpZGVDb3VudE5ldyA9IGhhc1JpZ2h0RGVhZFpvbmUgPSByaWdodEJvdW5kYXJ5ID0gdXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1BdHRyID0gdHJhbnNmb3JtUHJlZml4ID0gdHJhbnNmb3JtUG9zdGZpeCA9IGdldEluZGV4TWF4ID0gaW5kZXggPSBpbmRleENhY2hlZCA9IGluZGV4TWluID0gaW5kZXhNYXggPSByZXNpemVUaW1lciA9IHN3aXBlQW5nbGUgPSBtb3ZlRGlyZWN0aW9uRXhwZWN0ZWQgPSBydW5uaW5nID0gb25Jbml0ID0gZXZlbnRzID0gbmV3Q29udGFpbmVyQ2xhc3NlcyA9IHNsaWRlSWQgPSBkaXNhYmxlID0gZGlzYWJsZWQgPSBmcmVlemFibGUgPSBmcmVlemUgPSBmcm96ZW4gPSBjb250cm9sc0V2ZW50cyA9IG5hdkV2ZW50cyA9IGhvdmVyRXZlbnRzID0gdmlzaWJpbGl0eUV2ZW50ID0gZG9jbWVudEtleWRvd25FdmVudCA9IHRvdWNoRXZlbnRzID0gZHJhZ0V2ZW50cyA9IGhhc0NvbnRyb2xzID0gaGFzTmF2ID0gbmF2QXNUaHVtYm5haWxzID0gaGFzQXV0b3BsYXkgPSBoYXNUb3VjaCA9IGhhc01vdXNlRHJhZyA9IHNsaWRlQWN0aXZlQ2xhc3MgPSBpbWdDb21wbGV0ZUNsYXNzID0gaW1nRXZlbnRzID0gaW1nc0NvbXBsZXRlID0gY29udHJvbHMgPSBjb250cm9sc1RleHQgPSBjb250cm9sc0NvbnRhaW5lciA9IGNvbnRyb2xzQ29udGFpbmVySFRNTCA9IHByZXZCdXR0b24gPSBuZXh0QnV0dG9uID0gcHJldklzQnV0dG9uID0gbmV4dElzQnV0dG9uID0gbmF2ID0gbmF2Q29udGFpbmVyID0gbmF2Q29udGFpbmVySFRNTCA9IG5hdkl0ZW1zID0gcGFnZXMgPSBwYWdlc0NhY2hlZCA9IG5hdkNsaWNrZWQgPSBuYXZDdXJyZW50SW5kZXggPSBuYXZDdXJyZW50SW5kZXhDYWNoZWQgPSBuYXZBY3RpdmVDbGFzcyA9IG5hdlN0ciA9IG5hdlN0ckN1cnJlbnQgPSBhdXRvcGxheSA9IGF1dG9wbGF5VGltZW91dCA9IGF1dG9wbGF5RGlyZWN0aW9uID0gYXV0b3BsYXlUZXh0ID0gYXV0b3BsYXlIb3ZlclBhdXNlID0gYXV0b3BsYXlCdXR0b24gPSBhdXRvcGxheUJ1dHRvbkhUTUwgPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gYXV0b3BsYXlIdG1sU3RyaW5ncyA9IGF1dG9wbGF5VGltZXIgPSBhbmltYXRpbmcgPSBhdXRvcGxheUhvdmVyUGF1c2VkID0gYXV0b3BsYXlVc2VyUGF1c2VkID0gYXV0b3BsYXlWaXNpYmlsaXR5UGF1c2VkID0gaW5pdFBvc2l0aW9uID0gbGFzdFBvc2l0aW9uID0gdHJhbnNsYXRlSW5pdCA9IGRpc1ggPSBkaXNZID0gcGFuU3RhcnQgPSByYWZJbmRleCA9IGdldERpc3QgPSB0b3VjaCA9IG1vdXNlRHJhZyA9IG51bGw7XG4gICAgLy8gY2hlY2sgdmFyaWFibGVzXG4gICAgLy8gW2FuaW1hdGVJbiwgYW5pbWF0ZU91dCwgYW5pbWF0ZURlbGF5LCBhbmltYXRlTm9ybWFsLCBob3Jpem9udGFsLCBvdXRlcldyYXBwZXIsIGlubmVyV3JhcHBlciwgY29udGFpbmVyLCBjb250YWluZXJQYXJlbnQsIGNvbnRhaW5lckhUTUwsIHNsaWRlSXRlbXMsIHNsaWRlQ291bnQsIGJyZWFrcG9pbnRab25lLCB3aW5kb3dXaWR0aCwgYXV0b1dpZHRoLCBmaXhlZFdpZHRoLCBlZGdlUGFkZGluZywgZ3V0dGVyLCB2aWV3cG9ydCwgaXRlbXMsIHNsaWRlQnksIHZpZXdwb3J0TWF4LCBhcnJvd0tleXMsIHNwZWVkLCByZXdpbmQsIGxvb3AsIGF1dG9IZWlnaHQsIHNoZWV0LCBsYXp5bG9hZCwgc2xpZGVQb3NpdGlvbnMsIHNsaWRlSXRlbXNPdXQsIGNsb25lQ291bnQsIHNsaWRlQ291bnROZXcsIGhhc1JpZ2h0RGVhZFpvbmUsIHJpZ2h0Qm91bmRhcnksIHVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtLCB0cmFuc2Zvcm1BdHRyLCB0cmFuc2Zvcm1QcmVmaXgsIHRyYW5zZm9ybVBvc3RmaXgsIGdldEluZGV4TWF4LCBpbmRleCwgaW5kZXhDYWNoZWQsIGluZGV4TWluLCBpbmRleE1heCwgcmVzaXplVGltZXIsIHN3aXBlQW5nbGUsIG1vdmVEaXJlY3Rpb25FeHBlY3RlZCwgcnVubmluZywgb25Jbml0LCBldmVudHMsIG5ld0NvbnRhaW5lckNsYXNzZXMsIHNsaWRlSWQsIGRpc2FibGUsIGRpc2FibGVkLCBmcmVlemFibGUsIGZyZWV6ZSwgZnJvemVuLCBjb250cm9sc0V2ZW50cywgbmF2RXZlbnRzLCBob3ZlckV2ZW50cywgdmlzaWJpbGl0eUV2ZW50LCBkb2NtZW50S2V5ZG93bkV2ZW50LCB0b3VjaEV2ZW50cywgZHJhZ0V2ZW50cywgaGFzQ29udHJvbHMsIGhhc05hdiwgbmF2QXNUaHVtYm5haWxzLCBoYXNBdXRvcGxheSwgaGFzVG91Y2gsIGhhc01vdXNlRHJhZywgc2xpZGVBY3RpdmVDbGFzcywgaW1nQ29tcGxldGVDbGFzcywgaW1nRXZlbnRzLCBpbWdzQ29tcGxldGUsIGNvbnRyb2xzLCBjb250cm9sc1RleHQsIGNvbnRyb2xzQ29udGFpbmVyLCBjb250cm9sc0NvbnRhaW5lckhUTUwsIHByZXZCdXR0b24sIG5leHRCdXR0b24sIHByZXZJc0J1dHRvbiwgbmV4dElzQnV0dG9uLCBuYXYsIG5hdkNvbnRhaW5lciwgbmF2Q29udGFpbmVySFRNTCwgbmF2SXRlbXMsIHBhZ2VzLCBwYWdlc0NhY2hlZCwgbmF2Q2xpY2tlZCwgbmF2Q3VycmVudEluZGV4LCBuYXZDdXJyZW50SW5kZXhDYWNoZWQsIG5hdkFjdGl2ZUNsYXNzLCBuYXZTdHIsIG5hdlN0ckN1cnJlbnQsIGF1dG9wbGF5LCBhdXRvcGxheVRpbWVvdXQsIGF1dG9wbGF5RGlyZWN0aW9uLCBhdXRvcGxheVRleHQsIGF1dG9wbGF5SG92ZXJQYXVzZSwgYXV0b3BsYXlCdXR0b24sIGF1dG9wbGF5QnV0dG9uSFRNTCwgYXV0b3BsYXlSZXNldE9uVmlzaWJpbGl0eSwgYXV0b3BsYXlIdG1sU3RyaW5ncywgYXV0b3BsYXlUaW1lciwgYW5pbWF0aW5nLCBhdXRvcGxheUhvdmVyUGF1c2VkLCBhdXRvcGxheVVzZXJQYXVzZWQsIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCwgaW5pdFBvc2l0aW9uLCBsYXN0UG9zaXRpb24sIHRyYW5zbGF0ZUluaXQsIGRpc1gsIGRpc1ksIHBhblN0YXJ0LCByYWZJbmRleCwgZ2V0RGlzdCwgdG91Y2gsIG1vdXNlRHJhZyBdLmZvckVhY2goZnVuY3Rpb24oaXRlbSkgeyBpZiAoaXRlbSAhPT0gbnVsbCkgeyBjb25zb2xlLmxvZyhpdGVtKTsgfSB9KTtcblxuICAgIGZvciAodmFyIGEgaW4gdGhpcykge1xuICAgICAgaWYgKGEgIT09ICdyZWJ1aWxkJykgeyB0aGlzW2FdID0gbnVsbDsgfVxuICAgIH1cbiAgICBpc09uID0gZmFsc2U7XG4gIH1cblxuLy8gPT09IE9OIFJFU0laRSA9PT1cbiAgLy8gcmVzcG9uc2l2ZSB8fCBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCB8fCAhaG9yaXpvbnRhbFxuICBmdW5jdGlvbiBvblJlc2l6ZSAoZSkge1xuICAgIHJhZihmdW5jdGlvbigpeyByZXNpemVUYXNrcyhnZXRFdmVudChlKSk7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplVGFza3MgKGUpIHtcbiAgICBpZiAoIWlzT24pIHsgcmV0dXJuOyB9XG4gICAgaWYgKG5lc3RlZCA9PT0gJ291dGVyJykgeyBldmVudHMuZW1pdCgnb3V0ZXJSZXNpemVkJywgaW5mbyhlKSk7IH1cbiAgICB3aW5kb3dXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCk7XG4gICAgdmFyIGJwQ2hhbmdlZCxcbiAgICAgICAgYnJlYWtwb2ludFpvbmVUZW0gPSBicmVha3BvaW50Wm9uZSxcbiAgICAgICAgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IGZhbHNlO1xuXG4gICAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgIHNldEJyZWFrcG9pbnRab25lKCk7XG4gICAgICBicENoYW5nZWQgPSBicmVha3BvaW50Wm9uZVRlbSAhPT0gYnJlYWtwb2ludFpvbmU7XG4gICAgICAvLyBpZiAoaGFzUmlnaHREZWFkWm9uZSkgeyBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTsgfSAvLyAqP1xuICAgICAgaWYgKGJwQ2hhbmdlZCkgeyBldmVudHMuZW1pdCgnbmV3QnJlYWtwb2ludFN0YXJ0JywgaW5mbyhlKSk7IH1cbiAgICB9XG5cbiAgICB2YXIgaW5kQ2hhbmdlZCxcbiAgICAgICAgaXRlbXNDaGFuZ2VkLFxuICAgICAgICBpdGVtc1RlbSA9IGl0ZW1zLFxuICAgICAgICBkaXNhYmxlVGVtID0gZGlzYWJsZSxcbiAgICAgICAgZnJlZXplVGVtID0gZnJlZXplLFxuICAgICAgICBhcnJvd0tleXNUZW0gPSBhcnJvd0tleXMsXG4gICAgICAgIGNvbnRyb2xzVGVtID0gY29udHJvbHMsXG4gICAgICAgIG5hdlRlbSA9IG5hdixcbiAgICAgICAgdG91Y2hUZW0gPSB0b3VjaCxcbiAgICAgICAgbW91c2VEcmFnVGVtID0gbW91c2VEcmFnLFxuICAgICAgICBhdXRvcGxheVRlbSA9IGF1dG9wbGF5LFxuICAgICAgICBhdXRvcGxheUhvdmVyUGF1c2VUZW0gPSBhdXRvcGxheUhvdmVyUGF1c2UsXG4gICAgICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHlUZW0gPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5LFxuICAgICAgICBpbmRleFRlbSA9IGluZGV4O1xuXG4gICAgaWYgKGJwQ2hhbmdlZCkge1xuICAgICAgdmFyIGZpeGVkV2lkdGhUZW0gPSBmaXhlZFdpZHRoLFxuICAgICAgICAgIGF1dG9IZWlnaHRUZW0gPSBhdXRvSGVpZ2h0LFxuICAgICAgICAgIGNvbnRyb2xzVGV4dFRlbSA9IGNvbnRyb2xzVGV4dCxcbiAgICAgICAgICBjZW50ZXJUZW0gPSBjZW50ZXIsXG4gICAgICAgICAgYXV0b3BsYXlUZXh0VGVtID0gYXV0b3BsYXlUZXh0O1xuXG4gICAgICBpZiAoIUNTU01RKSB7XG4gICAgICAgIHZhciBndXR0ZXJUZW0gPSBndXR0ZXIsXG4gICAgICAgICAgICBlZGdlUGFkZGluZ1RlbSA9IGVkZ2VQYWRkaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBvcHRpb246XG4gICAgLy8gZml4ZWQgd2lkdGg6IHZpZXdwb3J0LCBmaXhlZFdpZHRoLCBndXR0ZXIgPT4gaXRlbXNcbiAgICAvLyBvdGhlcnM6IHdpbmRvdyB3aWR0aCA9PiBhbGwgdmFyaWFibGVzXG4gICAgLy8gYWxsOiBpdGVtcyA9PiBzbGlkZUJ5XG4gICAgYXJyb3dLZXlzID0gZ2V0T3B0aW9uKCdhcnJvd0tleXMnKTtcbiAgICBjb250cm9scyA9IGdldE9wdGlvbignY29udHJvbHMnKTtcbiAgICBuYXYgPSBnZXRPcHRpb24oJ25hdicpO1xuICAgIHRvdWNoID0gZ2V0T3B0aW9uKCd0b3VjaCcpO1xuICAgIGNlbnRlciA9IGdldE9wdGlvbignY2VudGVyJyk7XG4gICAgbW91c2VEcmFnID0gZ2V0T3B0aW9uKCdtb3VzZURyYWcnKTtcbiAgICBhdXRvcGxheSA9IGdldE9wdGlvbignYXV0b3BsYXknKTtcbiAgICBhdXRvcGxheUhvdmVyUGF1c2UgPSBnZXRPcHRpb24oJ2F1dG9wbGF5SG92ZXJQYXVzZScpO1xuICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgPSBnZXRPcHRpb24oJ2F1dG9wbGF5UmVzZXRPblZpc2liaWxpdHknKTtcblxuICAgIGlmIChicENoYW5nZWQpIHtcbiAgICAgIGRpc2FibGUgPSBnZXRPcHRpb24oJ2Rpc2FibGUnKTtcbiAgICAgIGZpeGVkV2lkdGggPSBnZXRPcHRpb24oJ2ZpeGVkV2lkdGgnKTtcbiAgICAgIHNwZWVkID0gZ2V0T3B0aW9uKCdzcGVlZCcpO1xuICAgICAgYXV0b0hlaWdodCA9IGdldE9wdGlvbignYXV0b0hlaWdodCcpO1xuICAgICAgY29udHJvbHNUZXh0ID0gZ2V0T3B0aW9uKCdjb250cm9sc1RleHQnKTtcbiAgICAgIGF1dG9wbGF5VGV4dCA9IGdldE9wdGlvbignYXV0b3BsYXlUZXh0Jyk7XG4gICAgICBhdXRvcGxheVRpbWVvdXQgPSBnZXRPcHRpb24oJ2F1dG9wbGF5VGltZW91dCcpO1xuXG4gICAgICBpZiAoIUNTU01RKSB7XG4gICAgICAgIGVkZ2VQYWRkaW5nID0gZ2V0T3B0aW9uKCdlZGdlUGFkZGluZycpO1xuICAgICAgICBndXR0ZXIgPSBnZXRPcHRpb24oJ2d1dHRlcicpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB1cGRhdGUgb3B0aW9uc1xuICAgIHJlc2V0VmFyaWJsZXNXaGVuRGlzYWJsZShkaXNhYmxlKTtcblxuICAgIHZpZXdwb3J0ID0gZ2V0Vmlld3BvcnRXaWR0aCgpOyAvLyA8PSBlZGdlUGFkZGluZywgZ3V0dGVyXG4gICAgaWYgKCghaG9yaXpvbnRhbCB8fCBhdXRvV2lkdGgpICYmICFkaXNhYmxlKSB7XG4gICAgICBzZXRTbGlkZVBvc2l0aW9ucygpO1xuICAgICAgaWYgKCFob3Jpem9udGFsKSB7XG4gICAgICAgIHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0KCk7IC8vIDw9IHNldFNsaWRlUG9zaXRpb25zXG4gICAgICAgIG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpIHtcbiAgICAgIHJpZ2h0Qm91bmRhcnkgPSBnZXRSaWdodEJvdW5kYXJ5KCk7IC8vIGF1dG9XaWR0aDogPD0gdmlld3BvcnQsIHNsaWRlUG9zaXRpb25zLCBndXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpeGVkV2lkdGg6IDw9IHZpZXdwb3J0LCBmaXhlZFdpZHRoLCBndXR0ZXJcbiAgICAgIGluZGV4TWF4ID0gZ2V0SW5kZXhNYXgoKTsgLy8gYXV0b1dpZHRoOiA8PSByaWdodEJvdW5kYXJ5LCBzbGlkZVBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXhlZFdpZHRoOiA8PSByaWdodEJvdW5kYXJ5LCBmaXhlZFdpZHRoLCBndXR0ZXJcbiAgICB9XG5cbiAgICBpZiAoYnBDaGFuZ2VkIHx8IGZpeGVkV2lkdGgpIHtcbiAgICAgIGl0ZW1zID0gZ2V0T3B0aW9uKCdpdGVtcycpO1xuICAgICAgc2xpZGVCeSA9IGdldE9wdGlvbignc2xpZGVCeScpO1xuICAgICAgaXRlbXNDaGFuZ2VkID0gaXRlbXMgIT09IGl0ZW1zVGVtO1xuXG4gICAgICBpZiAoaXRlbXNDaGFuZ2VkKSB7XG4gICAgICAgIGlmICghZml4ZWRXaWR0aCAmJiAhYXV0b1dpZHRoKSB7IGluZGV4TWF4ID0gZ2V0SW5kZXhNYXgoKTsgfSAvLyA8PSBpdGVtc1xuICAgICAgICAvLyBjaGVjayBpbmRleCBiZWZvcmUgdHJhbnNmb3JtIGluIGNhc2VcbiAgICAgICAgLy8gc2xpZGVyIHJlYWNoIHRoZSByaWdodCBlZGdlIHRoZW4gaXRlbXMgYmVjb21lIGJpZ2dlclxuICAgICAgICB1cGRhdGVJbmRleCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChicENoYW5nZWQpIHtcbiAgICAgIGlmIChkaXNhYmxlICE9PSBkaXNhYmxlVGVtKSB7XG4gICAgICAgIGlmIChkaXNhYmxlKSB7XG4gICAgICAgICAgZGlzYWJsZVNsaWRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVuYWJsZVNsaWRlcigpOyAvLyA8PSBzbGlkZVBvc2l0aW9ucywgcmlnaHRCb3VuZGFyeSwgaW5kZXhNYXhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmVlemFibGUgJiYgKGJwQ2hhbmdlZCB8fCBmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCkpIHtcbiAgICAgIGZyZWV6ZSA9IGdldEZyZWV6ZSgpOyAvLyA8PSBhdXRvV2lkdGg6IHNsaWRlUG9zaXRpb25zLCBndXR0ZXIsIHZpZXdwb3J0LCByaWdodEJvdW5kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPD0gZml4ZWRXaWR0aDogZml4ZWRXaWR0aCwgZ3V0dGVyLCByaWdodEJvdW5kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPD0gb3RoZXJzOiBpdGVtc1xuXG4gICAgICBpZiAoZnJlZXplICE9PSBmcmVlemVUZW0pIHtcbiAgICAgICAgaWYgKGZyZWV6ZSkge1xuICAgICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtKGdldENvbnRhaW5lclRyYW5zZm9ybVZhbHVlKGdldFN0YXJ0SW5kZXgoMCkpKTtcbiAgICAgICAgICBmcmVlemVTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmZyZWV6ZVNsaWRlcigpO1xuICAgICAgICAgIG5lZWRDb250YWluZXJUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRWYXJpYmxlc1doZW5EaXNhYmxlKGRpc2FibGUgfHwgZnJlZXplKTsgLy8gY29udHJvbHMsIG5hdiwgdG91Y2gsIG1vdXNlRHJhZywgYXJyb3dLZXlzLCBhdXRvcGxheSwgYXV0b3BsYXlIb3ZlclBhdXNlLCBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5XG4gICAgaWYgKCFhdXRvcGxheSkgeyBhdXRvcGxheUhvdmVyUGF1c2UgPSBhdXRvcGxheVJlc2V0T25WaXNpYmlsaXR5ID0gZmFsc2U7IH1cblxuICAgIGlmIChhcnJvd0tleXMgIT09IGFycm93S2V5c1RlbSkge1xuICAgICAgYXJyb3dLZXlzID9cbiAgICAgICAgYWRkRXZlbnRzKGRvYywgZG9jbWVudEtleWRvd25FdmVudCkgOlxuICAgICAgICByZW1vdmVFdmVudHMoZG9jLCBkb2NtZW50S2V5ZG93bkV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGNvbnRyb2xzICE9PSBjb250cm9sc1RlbSkge1xuICAgICAgaWYgKGNvbnRyb2xzKSB7XG4gICAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICAgIHNob3dFbGVtZW50KGNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJldkJ1dHRvbikgeyBzaG93RWxlbWVudChwcmV2QnV0dG9uKTsgfVxuICAgICAgICAgIGlmIChuZXh0QnV0dG9uKSB7IHNob3dFbGVtZW50KG5leHRCdXR0b24pOyB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICAgIGhpZGVFbGVtZW50KGNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocHJldkJ1dHRvbikgeyBoaWRlRWxlbWVudChwcmV2QnV0dG9uKTsgfVxuICAgICAgICAgIGlmIChuZXh0QnV0dG9uKSB7IGhpZGVFbGVtZW50KG5leHRCdXR0b24pOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hdiAhPT0gbmF2VGVtKSB7XG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIHNob3dFbGVtZW50KG5hdkNvbnRhaW5lcik7XG4gICAgICAgIHVwZGF0ZU5hdlZpc2liaWxpdHkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVFbGVtZW50KG5hdkNvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRvdWNoICE9PSB0b3VjaFRlbSkge1xuICAgICAgdG91Y2ggP1xuICAgICAgICBhZGRFdmVudHMoY29udGFpbmVyLCB0b3VjaEV2ZW50cywgb3B0aW9ucy5wcmV2ZW50U2Nyb2xsT25Ub3VjaCkgOlxuICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCB0b3VjaEV2ZW50cyk7XG4gICAgfVxuICAgIGlmIChtb3VzZURyYWcgIT09IG1vdXNlRHJhZ1RlbSkge1xuICAgICAgbW91c2VEcmFnID9cbiAgICAgICAgYWRkRXZlbnRzKGNvbnRhaW5lciwgZHJhZ0V2ZW50cykgOlxuICAgICAgICByZW1vdmVFdmVudHMoY29udGFpbmVyLCBkcmFnRXZlbnRzKTtcbiAgICB9XG4gICAgaWYgKGF1dG9wbGF5ICE9PSBhdXRvcGxheVRlbSkge1xuICAgICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyBzaG93RWxlbWVudChhdXRvcGxheUJ1dHRvbik7IH1cbiAgICAgICAgaWYgKCFhbmltYXRpbmcgJiYgIWF1dG9wbGF5VXNlclBhdXNlZCkgeyBzdGFydEF1dG9wbGF5KCk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyBoaWRlRWxlbWVudChhdXRvcGxheUJ1dHRvbik7IH1cbiAgICAgICAgaWYgKGFuaW1hdGluZykgeyBzdG9wQXV0b3BsYXkoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXV0b3BsYXlIb3ZlclBhdXNlICE9PSBhdXRvcGxheUhvdmVyUGF1c2VUZW0pIHtcbiAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZSA/XG4gICAgICAgIGFkZEV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKSA6XG4gICAgICAgIHJlbW92ZUV2ZW50cyhjb250YWluZXIsIGhvdmVyRXZlbnRzKTtcbiAgICB9XG4gICAgaWYgKGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgIT09IGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHlUZW0pIHtcbiAgICAgIGF1dG9wbGF5UmVzZXRPblZpc2liaWxpdHkgP1xuICAgICAgICBhZGRFdmVudHMoZG9jLCB2aXNpYmlsaXR5RXZlbnQpIDpcbiAgICAgICAgcmVtb3ZlRXZlbnRzKGRvYywgdmlzaWJpbGl0eUV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoYnBDaGFuZ2VkKSB7XG4gICAgICBpZiAoZml4ZWRXaWR0aCAhPT0gZml4ZWRXaWR0aFRlbSB8fCBjZW50ZXIgIT09IGNlbnRlclRlbSkgeyBuZWVkQ29udGFpbmVyVHJhbnNmb3JtID0gdHJ1ZTsgfVxuXG4gICAgICBpZiAoYXV0b0hlaWdodCAhPT0gYXV0b0hlaWdodFRlbSkge1xuICAgICAgICBpZiAoIWF1dG9IZWlnaHQpIHsgaW5uZXJXcmFwcGVyLnN0eWxlLmhlaWdodCA9ICcnOyB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250cm9scyAmJiBjb250cm9sc1RleHQgIT09IGNvbnRyb2xzVGV4dFRlbSkge1xuICAgICAgICBwcmV2QnV0dG9uLmlubmVySFRNTCA9IGNvbnRyb2xzVGV4dFswXTtcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBjb250cm9sc1RleHRbMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChhdXRvcGxheUJ1dHRvbiAmJiBhdXRvcGxheVRleHQgIT09IGF1dG9wbGF5VGV4dFRlbSkge1xuICAgICAgICB2YXIgaSA9IGF1dG9wbGF5ID8gMSA6IDAsXG4gICAgICAgICAgICBodG1sID0gYXV0b3BsYXlCdXR0b24uaW5uZXJIVE1MLFxuICAgICAgICAgICAgbGVuID0gaHRtbC5sZW5ndGggLSBhdXRvcGxheVRleHRUZW1baV0ubGVuZ3RoO1xuICAgICAgICBpZiAoaHRtbC5zdWJzdHJpbmcobGVuKSA9PT0gYXV0b3BsYXlUZXh0VGVtW2ldKSB7XG4gICAgICAgICAgYXV0b3BsYXlCdXR0b24uaW5uZXJIVE1MID0gaHRtbC5zdWJzdHJpbmcoMCwgbGVuKSArIGF1dG9wbGF5VGV4dFtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2VudGVyICYmIChmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCkpIHsgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IHRydWU7IH1cbiAgICB9XG5cbiAgICBpZiAoaXRlbXNDaGFuZ2VkIHx8IGZpeGVkV2lkdGggJiYgIWF1dG9XaWR0aCkge1xuICAgICAgcGFnZXMgPSBnZXRQYWdlcygpO1xuICAgICAgdXBkYXRlTmF2VmlzaWJpbGl0eSgpO1xuICAgIH1cblxuICAgIGluZENoYW5nZWQgPSBpbmRleCAhPT0gaW5kZXhUZW07XG4gICAgaWYgKGluZENoYW5nZWQpIHtcbiAgICAgIGV2ZW50cy5lbWl0KCdpbmRleENoYW5nZWQnLCBpbmZvKCkpO1xuICAgICAgbmVlZENvbnRhaW5lclRyYW5zZm9ybSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpdGVtc0NoYW5nZWQpIHtcbiAgICAgIGlmICghaW5kQ2hhbmdlZCkgeyBhZGRpdGlvbmFsVXBkYXRlcygpOyB9XG4gICAgfSBlbHNlIGlmIChmaXhlZFdpZHRoIHx8IGF1dG9XaWR0aCkge1xuICAgICAgZG9MYXp5TG9hZCgpO1xuICAgICAgdXBkYXRlU2xpZGVTdGF0dXMoKTtcbiAgICAgIHVwZGF0ZUxpdmVSZWdpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbXNDaGFuZ2VkICYmICFjYXJvdXNlbCkgeyB1cGRhdGVHYWxsZXJ5U2xpZGVQb3NpdGlvbnMoKTsgfVxuXG4gICAgaWYgKCFkaXNhYmxlICYmICFmcmVlemUpIHtcbiAgICAgIC8vIG5vbi1tZWRpYXF1ZXJpZXM6IElFOFxuICAgICAgaWYgKGJwQ2hhbmdlZCAmJiAhQ1NTTVEpIHtcbiAgICAgICAgLy8gbWlkZGxlIHdyYXBwZXIgc3R5bGVzXG5cbiAgICAgICAgLy8gaW5uZXIgd3JhcHBlciBzdHlsZXNcbiAgICAgICAgaWYgKGVkZ2VQYWRkaW5nICE9PSBlZGdlUGFkZGluZ1RlbSB8fCBndXR0ZXIgIT09IGd1dHRlclRlbSkge1xuICAgICAgICAgIGlubmVyV3JhcHBlci5zdHlsZS5jc3NUZXh0ID0gZ2V0SW5uZXJXcmFwcGVyU3R5bGVzKGVkZ2VQYWRkaW5nLCBndXR0ZXIsIGZpeGVkV2lkdGgsIHNwZWVkLCBhdXRvSGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgLy8gY29udGFpbmVyIHN0eWxlc1xuICAgICAgICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gZ2V0Q29udGFpbmVyV2lkdGgoZml4ZWRXaWR0aCwgZ3V0dGVyLCBpdGVtcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gc2xpZGUgc3R5bGVzXG4gICAgICAgICAgdmFyIHN0ciA9IGdldFNsaWRlV2lkdGhTdHlsZShmaXhlZFdpZHRoLCBndXR0ZXIsIGl0ZW1zKSArXG4gICAgICAgICAgICAgICAgICAgIGdldFNsaWRlR3V0dGVyU3R5bGUoZ3V0dGVyKTtcblxuICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGFzdCBsaW5lIGFuZFxuICAgICAgICAgIC8vIGFkZCBuZXcgc3R5bGVzXG4gICAgICAgICAgcmVtb3ZlQ1NTUnVsZShzaGVldCwgZ2V0Q3NzUnVsZXNMZW5ndGgoc2hlZXQpIC0gMSk7XG4gICAgICAgICAgYWRkQ1NTUnVsZShzaGVldCwgJyMnICsgc2xpZGVJZCArICcgPiAudG5zLWl0ZW0nLCBzdHIsIGdldENzc1J1bGVzTGVuZ3RoKHNoZWV0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYXV0byBoZWlnaHRcbiAgICAgIGlmIChhdXRvSGVpZ2h0KSB7IGRvQXV0b0hlaWdodCgpOyB9XG5cbiAgICAgIGlmIChuZWVkQ29udGFpbmVyVHJhbnNmb3JtKSB7XG4gICAgICAgIGRvQ29udGFpbmVyVHJhbnNmb3JtU2lsZW50KCk7XG4gICAgICAgIGluZGV4Q2FjaGVkID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJwQ2hhbmdlZCkgeyBldmVudHMuZW1pdCgnbmV3QnJlYWtwb2ludEVuZCcsIGluZm8oZSkpOyB9XG4gIH1cblxuXG5cblxuXG4gIC8vID09PSBJTklUSUFMSVpBVElPTiBGVU5DVElPTlMgPT09IC8vXG4gIGZ1bmN0aW9uIGdldEZyZWV6ZSAoKSB7XG4gICAgaWYgKCFmaXhlZFdpZHRoICYmICFhdXRvV2lkdGgpIHtcbiAgICAgIHZhciBhID0gY2VudGVyID8gaXRlbXMgLSAoaXRlbXMgLSAxKSAvIDIgOiBpdGVtcztcbiAgICAgIHJldHVybiAgc2xpZGVDb3VudCA8PSBhO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IGZpeGVkV2lkdGggPyAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBzbGlkZUNvdW50IDogc2xpZGVQb3NpdGlvbnNbc2xpZGVDb3VudF0sXG4gICAgICAgIHZwID0gZWRnZVBhZGRpbmcgPyB2aWV3cG9ydCArIGVkZ2VQYWRkaW5nICogMiA6IHZpZXdwb3J0ICsgZ3V0dGVyO1xuXG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgdnAgLT0gZml4ZWRXaWR0aCA/ICh2aWV3cG9ydCAtIGZpeGVkV2lkdGgpIC8gMiA6ICh2aWV3cG9ydCAtIChzbGlkZVBvc2l0aW9uc1tpbmRleCArIDFdIC0gc2xpZGVQb3NpdGlvbnNbaW5kZXhdIC0gZ3V0dGVyKSkgLyAyO1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aCA8PSB2cDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEJyZWFrcG9pbnRab25lICgpIHtcbiAgICBicmVha3BvaW50Wm9uZSA9IDA7XG4gICAgZm9yICh2YXIgYnAgaW4gcmVzcG9uc2l2ZSkge1xuICAgICAgYnAgPSBwYXJzZUludChicCk7IC8vIGNvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxuICAgICAgaWYgKHdpbmRvd1dpZHRoID49IGJwKSB7IGJyZWFrcG9pbnRab25lID0gYnA7IH1cbiAgICB9XG4gIH1cblxuICAvLyAoc2xpZGVCeSwgaW5kZXhNaW4sIGluZGV4TWF4KSA9PiBpbmRleFxuICB2YXIgdXBkYXRlSW5kZXggPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb29wID9cbiAgICAgIGNhcm91c2VsID9cbiAgICAgICAgLy8gbG9vcCArIGNhcm91c2VsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbGVmdEVkZ2UgPSBpbmRleE1pbixcbiAgICAgICAgICAgICAgcmlnaHRFZGdlID0gaW5kZXhNYXg7XG5cbiAgICAgICAgICBsZWZ0RWRnZSArPSBzbGlkZUJ5O1xuICAgICAgICAgIHJpZ2h0RWRnZSAtPSBzbGlkZUJ5O1xuXG4gICAgICAgICAgLy8gYWRqdXN0IGVkZ2VzIHdoZW4gaGFzIGVkZ2UgcGFkZGluZ3NcbiAgICAgICAgICAvLyBvciBmaXhlZC13aWR0aCBzbGlkZXIgd2l0aCBleHRyYSBzcGFjZSBvbiB0aGUgcmlnaHQgc2lkZVxuICAgICAgICAgIGlmIChlZGdlUGFkZGluZykge1xuICAgICAgICAgICAgbGVmdEVkZ2UgKz0gMTtcbiAgICAgICAgICAgIHJpZ2h0RWRnZSAtPSAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZml4ZWRXaWR0aCkge1xuICAgICAgICAgICAgaWYgKCh2aWV3cG9ydCArIGd1dHRlciklKGZpeGVkV2lkdGggKyBndXR0ZXIpKSB7IHJpZ2h0RWRnZSAtPSAxOyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNsb25lQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IHJpZ2h0RWRnZSkge1xuICAgICAgICAgICAgICBpbmRleCAtPSBzbGlkZUNvdW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IGxlZnRFZGdlKSB7XG4gICAgICAgICAgICAgIGluZGV4ICs9IHNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDpcbiAgICAgICAgLy8gbG9vcCArIGdhbGxlcnlcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGluZGV4ID4gaW5kZXhNYXgpIHtcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+PSBpbmRleE1pbiArIHNsaWRlQ291bnQpIHsgaW5kZXggLT0gc2xpZGVDb3VudDsgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCBpbmRleE1pbikge1xuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDw9IGluZGV4TWF4IC0gc2xpZGVDb3VudCkgeyBpbmRleCArPSBzbGlkZUNvdW50OyB9XG4gICAgICAgICAgfVxuICAgICAgICB9IDpcbiAgICAgIC8vIG5vbi1sb29wXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5kZXggPSBNYXRoLm1heChpbmRleE1pbiwgTWF0aC5taW4oaW5kZXhNYXgsIGluZGV4KSk7XG4gICAgICB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGRpc2FibGVVSSAoKSB7XG4gICAgaWYgKCFhdXRvcGxheSAmJiBhdXRvcGxheUJ1dHRvbikgeyBoaWRlRWxlbWVudChhdXRvcGxheUJ1dHRvbik7IH1cbiAgICBpZiAoIW5hdiAmJiBuYXZDb250YWluZXIpIHsgaGlkZUVsZW1lbnQobmF2Q29udGFpbmVyKTsgfVxuICAgIGlmICghY29udHJvbHMpIHtcbiAgICAgIGlmIChjb250cm9sc0NvbnRhaW5lcikge1xuICAgICAgICBoaWRlRWxlbWVudChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJldkJ1dHRvbikgeyBoaWRlRWxlbWVudChwcmV2QnV0dG9uKTsgfVxuICAgICAgICBpZiAobmV4dEJ1dHRvbikgeyBoaWRlRWxlbWVudChuZXh0QnV0dG9uKTsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZVVJICgpIHtcbiAgICBpZiAoYXV0b3BsYXkgJiYgYXV0b3BsYXlCdXR0b24pIHsgc2hvd0VsZW1lbnQoYXV0b3BsYXlCdXR0b24pOyB9XG4gICAgaWYgKG5hdiAmJiBuYXZDb250YWluZXIpIHsgc2hvd0VsZW1lbnQobmF2Q29udGFpbmVyKTsgfVxuICAgIGlmIChjb250cm9scykge1xuICAgICAgaWYgKGNvbnRyb2xzQ29udGFpbmVyKSB7XG4gICAgICAgIHNob3dFbGVtZW50KGNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcmV2QnV0dG9uKSB7IHNob3dFbGVtZW50KHByZXZCdXR0b24pOyB9XG4gICAgICAgIGlmIChuZXh0QnV0dG9uKSB7IHNob3dFbGVtZW50KG5leHRCdXR0b24pOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZnJlZXplU2xpZGVyICgpIHtcbiAgICBpZiAoZnJvemVuKSB7IHJldHVybjsgfVxuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgcGFkZGluZyBmcm9tIGlubmVyIHdyYXBwZXJcbiAgICBpZiAoZWRnZVBhZGRpbmcpIHsgaW5uZXJXcmFwcGVyLnN0eWxlLm1hcmdpbiA9ICcwcHgnOyB9XG5cbiAgICAvLyBhZGQgY2xhc3MgdG5zLXRyYW5zcGFyZW50IHRvIGNsb25lZCBzbGlkZXNcbiAgICBpZiAoY2xvbmVDb3VudCkge1xuICAgICAgdmFyIHN0ciA9ICd0bnMtdHJhbnNwYXJlbnQnO1xuICAgICAgZm9yICh2YXIgaSA9IGNsb25lQ291bnQ7IGktLTspIHtcbiAgICAgICAgaWYgKGNhcm91c2VsKSB7IGFkZENsYXNzKHNsaWRlSXRlbXNbaV0sIHN0cik7IH1cbiAgICAgICAgYWRkQ2xhc3Moc2xpZGVJdGVtc1tzbGlkZUNvdW50TmV3IC0gaSAtIDFdLCBzdHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSB0b29sc1xuICAgIGRpc2FibGVVSSgpO1xuXG4gICAgZnJvemVuID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZnJlZXplU2xpZGVyICgpIHtcbiAgICBpZiAoIWZyb3plbikgeyByZXR1cm47IH1cblxuICAgIC8vIHJlc3RvcmUgZWRnZSBwYWRkaW5nIGZvciBpbm5lciB3cmFwcGVyXG4gICAgLy8gZm9yIG1vcmRlcm4gYnJvd3NlcnNcbiAgICBpZiAoZWRnZVBhZGRpbmcgJiYgQ1NTTVEpIHsgaW5uZXJXcmFwcGVyLnN0eWxlLm1hcmdpbiA9ICcnOyB9XG5cbiAgICAvLyByZW1vdmUgY2xhc3MgdG5zLXRyYW5zcGFyZW50IHRvIGNsb25lZCBzbGlkZXNcbiAgICBpZiAoY2xvbmVDb3VudCkge1xuICAgICAgdmFyIHN0ciA9ICd0bnMtdHJhbnNwYXJlbnQnO1xuICAgICAgZm9yICh2YXIgaSA9IGNsb25lQ291bnQ7IGktLTspIHtcbiAgICAgICAgaWYgKGNhcm91c2VsKSB7IHJlbW92ZUNsYXNzKHNsaWRlSXRlbXNbaV0sIHN0cik7IH1cbiAgICAgICAgcmVtb3ZlQ2xhc3Moc2xpZGVJdGVtc1tzbGlkZUNvdW50TmV3IC0gaSAtIDFdLCBzdHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSB0b29sc1xuICAgIGVuYWJsZVVJKCk7XG5cbiAgICBmcm96ZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGVTbGlkZXIgKCkge1xuICAgIGlmIChkaXNhYmxlZCkgeyByZXR1cm47IH1cblxuICAgIHNoZWV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5yZXBsYWNlKG5ld0NvbnRhaW5lckNsYXNzZXMuc3Vic3RyaW5nKDEpLCAnJyk7XG4gICAgcmVtb3ZlQXR0cnMoY29udGFpbmVyLCBbJ3N0eWxlJ10pO1xuICAgIGlmIChsb29wKSB7XG4gICAgICBmb3IgKHZhciBqID0gY2xvbmVDb3VudDsgai0tOykge1xuICAgICAgICBpZiAoY2Fyb3VzZWwpIHsgaGlkZUVsZW1lbnQoc2xpZGVJdGVtc1tqXSk7IH1cbiAgICAgICAgaGlkZUVsZW1lbnQoc2xpZGVJdGVtc1tzbGlkZUNvdW50TmV3IC0gaiAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2ZXJ0aWNhbCBzbGlkZXJcbiAgICBpZiAoIWhvcml6b250YWwgfHwgIWNhcm91c2VsKSB7IHJlbW92ZUF0dHJzKGlubmVyV3JhcHBlciwgWydzdHlsZSddKTsgfVxuXG4gICAgLy8gZ2FsbGVyeVxuICAgIGlmICghY2Fyb3VzZWwpIHtcbiAgICAgIGZvciAodmFyIGkgPSBpbmRleCwgbCA9IGluZGV4ICsgc2xpZGVDb3VudDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV07XG4gICAgICAgIHJlbW92ZUF0dHJzKGl0ZW0sIFsnc3R5bGUnXSk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVJbik7XG4gICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVOb3JtYWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSB0b29sc1xuICAgIGRpc2FibGVVSSgpO1xuXG4gICAgZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlU2xpZGVyICgpIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7IHJldHVybjsgfVxuXG4gICAgc2hlZXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lICs9IG5ld0NvbnRhaW5lckNsYXNzZXM7XG4gICAgZG9Db250YWluZXJUcmFuc2Zvcm1TaWxlbnQoKTtcblxuICAgIGlmIChsb29wKSB7XG4gICAgICBmb3IgKHZhciBqID0gY2xvbmVDb3VudDsgai0tOykge1xuICAgICAgICBpZiAoY2Fyb3VzZWwpIHsgc2hvd0VsZW1lbnQoc2xpZGVJdGVtc1tqXSk7IH1cbiAgICAgICAgc2hvd0VsZW1lbnQoc2xpZGVJdGVtc1tzbGlkZUNvdW50TmV3IC0gaiAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnYWxsZXJ5XG4gICAgaWYgKCFjYXJvdXNlbCkge1xuICAgICAgZm9yICh2YXIgaSA9IGluZGV4LCBsID0gaW5kZXggKyBzbGlkZUNvdW50OyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc1tpXSxcbiAgICAgICAgICAgIGNsYXNzTiA9IGkgPCBpbmRleCArIGl0ZW1zID8gYW5pbWF0ZUluIDogYW5pbWF0ZU5vcm1hbDtcbiAgICAgICAgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJztcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgY2xhc3NOKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdG9vbHNcbiAgICBlbmFibGVVSSgpO1xuXG4gICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxpdmVSZWdpb24gKCkge1xuICAgIHZhciBzdHIgPSBnZXRMaXZlUmVnaW9uU3RyKCk7XG4gICAgaWYgKGxpdmVyZWdpb25DdXJyZW50LmlubmVySFRNTCAhPT0gc3RyKSB7IGxpdmVyZWdpb25DdXJyZW50LmlubmVySFRNTCA9IHN0cjsgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGl2ZVJlZ2lvblN0ciAoKSB7XG4gICAgdmFyIGFyciA9IGdldFZpc2libGVTbGlkZVJhbmdlKCksXG4gICAgICAgIHN0YXJ0ID0gYXJyWzBdICsgMSxcbiAgICAgICAgZW5kID0gYXJyWzFdICsgMTtcbiAgICByZXR1cm4gc3RhcnQgPT09IGVuZCA/IHN0YXJ0ICsgJycgOiBzdGFydCArICcgdG8gJyArIGVuZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZpc2libGVTbGlkZVJhbmdlICh2YWwpIHtcbiAgICBpZiAodmFsID09IG51bGwpIHsgdmFsID0gZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUoKTsgfVxuICAgIHZhciBzdGFydCA9IGluZGV4LCBlbmQsIHJhbmdlc3RhcnQsIHJhbmdlZW5kO1xuXG4gICAgLy8gZ2V0IHJhbmdlIHN0YXJ0LCByYW5nZSBlbmQgZm9yIGF1dG9XaWR0aCBhbmQgZml4ZWRXaWR0aFxuICAgIGlmIChjZW50ZXIgfHwgZWRnZVBhZGRpbmcpIHtcbiAgICAgIGlmIChhdXRvV2lkdGggfHwgZml4ZWRXaWR0aCkge1xuICAgICAgICByYW5nZXN0YXJ0ID0gLSAocGFyc2VGbG9hdCh2YWwpICsgZWRnZVBhZGRpbmcpO1xuICAgICAgICByYW5nZWVuZCA9IHJhbmdlc3RhcnQgKyB2aWV3cG9ydCArIGVkZ2VQYWRkaW5nICogMjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGF1dG9XaWR0aCkge1xuICAgICAgICByYW5nZXN0YXJ0ID0gc2xpZGVQb3NpdGlvbnNbaW5kZXhdO1xuICAgICAgICByYW5nZWVuZCA9IHJhbmdlc3RhcnQgKyB2aWV3cG9ydDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgc3RhcnQsIGVuZFxuICAgIC8vIC0gY2hlY2sgYXV0byB3aWR0aFxuICAgIGlmIChhdXRvV2lkdGgpIHtcbiAgICAgIHNsaWRlUG9zaXRpb25zLmZvckVhY2goZnVuY3Rpb24ocG9pbnQsIGkpIHtcbiAgICAgICAgaWYgKGkgPCBzbGlkZUNvdW50TmV3KSB7XG4gICAgICAgICAgaWYgKChjZW50ZXIgfHwgZWRnZVBhZGRpbmcpICYmIHBvaW50IDw9IHJhbmdlc3RhcnQgKyAwLjUpIHsgc3RhcnQgPSBpOyB9XG4gICAgICAgICAgaWYgKHJhbmdlZW5kIC0gcG9pbnQgPj0gMC41KSB7IGVuZCA9IGk7IH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAvLyAtIGNoZWNrIHBlcmNlbnRhZ2Ugd2lkdGgsIGZpeGVkIHdpZHRoXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKGZpeGVkV2lkdGgpIHtcbiAgICAgICAgdmFyIGNlbGwgPSBmaXhlZFdpZHRoICsgZ3V0dGVyO1xuICAgICAgICBpZiAoY2VudGVyIHx8IGVkZ2VQYWRkaW5nKSB7XG4gICAgICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHJhbmdlc3RhcnQvY2VsbCk7XG4gICAgICAgICAgZW5kID0gTWF0aC5jZWlsKHJhbmdlZW5kL2NlbGwgLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmQgPSBzdGFydCArIE1hdGguY2VpbCh2aWV3cG9ydC9jZWxsKSAtIDE7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNlbnRlciB8fCBlZGdlUGFkZGluZykge1xuICAgICAgICAgIHZhciBhID0gaXRlbXMgLSAxO1xuICAgICAgICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0IC09IGEgLyAyO1xuICAgICAgICAgICAgZW5kID0gaW5kZXggKyBhIC8gMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kID0gaW5kZXggKyBhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlZGdlUGFkZGluZykge1xuICAgICAgICAgICAgdmFyIGIgPSBlZGdlUGFkZGluZyAqIGl0ZW1zIC8gdmlld3BvcnQ7XG4gICAgICAgICAgICBzdGFydCAtPSBiO1xuICAgICAgICAgICAgZW5kICs9IGI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0KTtcbiAgICAgICAgICBlbmQgPSBNYXRoLmNlaWwoZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbmQgPSBzdGFydCArIGl0ZW1zIC0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGFydCA9IE1hdGgubWF4KHN0YXJ0LCAwKTtcbiAgICAgIGVuZCA9IE1hdGgubWluKGVuZCwgc2xpZGVDb3VudE5ldyAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBbc3RhcnQsIGVuZF07XG4gIH1cblxuICBmdW5jdGlvbiBkb0xhenlMb2FkICgpIHtcbiAgICBpZiAobGF6eWxvYWQgJiYgIWRpc2FibGUpIHtcbiAgICAgIHZhciBhcmcgPSBnZXRWaXNpYmxlU2xpZGVSYW5nZSgpO1xuICAgICAgYXJnLnB1c2gobGF6eWxvYWRTZWxlY3Rvcik7XG5cbiAgICAgIGdldEltYWdlQXJyYXkuYXBwbHkobnVsbCwgYXJnKS5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgaWYgKCFoYXNDbGFzcyhpbWcsIGltZ0NvbXBsZXRlQ2xhc3MpKSB7XG4gICAgICAgICAgLy8gc3RvcCBwcm9wYWdhdGlvbiB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIGNvbnRhaW5lclxuICAgICAgICAgIHZhciBldmUgPSB7fTtcbiAgICAgICAgICBldmVbVFJBTlNJVElPTkVORF0gPSBmdW5jdGlvbiAoZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9O1xuICAgICAgICAgIGFkZEV2ZW50cyhpbWcsIGV2ZSk7XG5cbiAgICAgICAgICBhZGRFdmVudHMoaW1nLCBpbWdFdmVudHMpO1xuXG4gICAgICAgICAgLy8gdXBkYXRlIHNyY1xuICAgICAgICAgIGltZy5zcmMgPSBnZXRBdHRyKGltZywgJ2RhdGEtc3JjJyk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgc3Jjc2V0XG4gICAgICAgICAgdmFyIHNyY3NldCA9IGdldEF0dHIoaW1nLCAnZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICBpZiAoc3Jjc2V0KSB7IGltZy5zcmNzZXQgPSBzcmNzZXQ7IH1cblxuICAgICAgICAgIGFkZENsYXNzKGltZywgJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25JbWdMb2FkZWQgKGUpIHtcbiAgICBpbWdMb2FkZWQoZ2V0VGFyZ2V0KGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uSW1nRmFpbGVkIChlKSB7XG4gICAgaW1nRmFpbGVkKGdldFRhcmdldChlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWdMb2FkZWQgKGltZykge1xuICAgIGFkZENsYXNzKGltZywgJ2xvYWRlZCcpO1xuICAgIGltZ0NvbXBsZXRlZChpbWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW1nRmFpbGVkIChpbWcpIHtcbiAgICBhZGRDbGFzcyhpbWcsICdmYWlsZWQnKTtcbiAgICBpbWdDb21wbGV0ZWQoaW1nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ0NvbXBsZXRlZCAoaW1nKSB7XG4gICAgYWRkQ2xhc3MoaW1nLCBpbWdDb21wbGV0ZUNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyhpbWcsICdsb2FkaW5nJyk7XG4gICAgcmVtb3ZlRXZlbnRzKGltZywgaW1nRXZlbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEltYWdlQXJyYXkgKHN0YXJ0LCBlbmQsIGltZ1NlbGVjdG9yKSB7XG4gICAgdmFyIGltZ3MgPSBbXTtcbiAgICBpZiAoIWltZ1NlbGVjdG9yKSB7IGltZ1NlbGVjdG9yID0gJ2ltZyc7IH1cblxuICAgIHdoaWxlIChzdGFydCA8PSBlbmQpIHtcbiAgICAgIGZvckVhY2goc2xpZGVJdGVtc1tzdGFydF0ucXVlcnlTZWxlY3RvckFsbChpbWdTZWxlY3RvciksIGZ1bmN0aW9uIChpbWcpIHsgaW1ncy5wdXNoKGltZyk7IH0pO1xuICAgICAgc3RhcnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gaW1ncztcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIGFsbCB2aXNpYmxlIGltYWdlcyBhcmUgbG9hZGVkXG4gIC8vIGFuZCB1cGRhdGUgY29udGFpbmVyIGhlaWdodCBpZiBpdCdzIGRvbmVcbiAgZnVuY3Rpb24gZG9BdXRvSGVpZ2h0ICgpIHtcbiAgICB2YXIgaW1ncyA9IGdldEltYWdlQXJyYXkuYXBwbHkobnVsbCwgZ2V0VmlzaWJsZVNsaWRlUmFuZ2UoKSk7XG4gICAgcmFmKGZ1bmN0aW9uKCl7IGltZ3NMb2FkZWRDaGVjayhpbWdzLCB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQpOyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltZ3NMb2FkZWRDaGVjayAoaW1ncywgY2IpIHtcbiAgICAvLyBleGVjdXRlIGNhbGxiYWNrIGZ1bmN0aW9uIGlmIGFsbCBpbWFnZXMgYXJlIGNvbXBsZXRlXG4gICAgaWYgKGltZ3NDb21wbGV0ZSkgeyByZXR1cm4gY2IoKTsgfVxuXG4gICAgLy8gY2hlY2sgaW1hZ2UgY2xhc3Nlc1xuICAgIGltZ3MuZm9yRWFjaChmdW5jdGlvbiAoaW1nLCBpbmRleCkge1xuICAgICAgaWYgKCFsYXp5bG9hZCAmJiBpbWcuY29tcGxldGUpIHsgaW1nQ29tcGxldGVkKGltZyk7IH0gLy8gQ2hlY2sgaW1hZ2UuY29tcGxldGVcbiAgICAgIGlmIChoYXNDbGFzcyhpbWcsIGltZ0NvbXBsZXRlQ2xhc3MpKSB7IGltZ3Muc3BsaWNlKGluZGV4LCAxKTsgfVxuICAgIH0pO1xuXG4gICAgLy8gZXhlY3V0ZSBjYWxsYmFjayBmdW5jdGlvbiBpZiBzZWxlY3RlZCBpbWFnZXMgYXJlIGFsbCBjb21wbGV0ZVxuICAgIGlmICghaW1ncy5sZW5ndGgpIHsgcmV0dXJuIGNiKCk7IH1cblxuICAgIC8vIG90aGVyd2lzZSBleGVjdXRlIHRoaXMgZnVuY3Rpb25hIGFnYWluXG4gICAgcmFmKGZ1bmN0aW9uKCl7IGltZ3NMb2FkZWRDaGVjayhpbWdzLCBjYik7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkaXRpb25hbFVwZGF0ZXMgKCkge1xuICAgIGRvTGF6eUxvYWQoKTtcbiAgICB1cGRhdGVTbGlkZVN0YXR1cygpO1xuICAgIHVwZGF0ZUxpdmVSZWdpb24oKTtcbiAgICB1cGRhdGVDb250cm9sc1N0YXR1cygpO1xuICAgIHVwZGF0ZU5hdlN0YXR1cygpO1xuICB9XG5cblxuICBmdW5jdGlvbiB1cGRhdGVfY2Fyb3VzZWxfdHJhbnNpdGlvbl9kdXJhdGlvbiAoKSB7XG4gICAgaWYgKGNhcm91c2VsICYmIGF1dG9IZWlnaHQpIHtcbiAgICAgIG1pZGRsZVdyYXBwZXIuc3R5bGVbVFJBTlNJVElPTkRVUkFUSU9OXSA9IHNwZWVkIC8gMTAwMCArICdzJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXhTbGlkZUhlaWdodCAoc2xpZGVTdGFydCwgc2xpZGVSYW5nZSkge1xuICAgIHZhciBoZWlnaHRzID0gW107XG4gICAgZm9yICh2YXIgaSA9IHNsaWRlU3RhcnQsIGwgPSBNYXRoLm1pbihzbGlkZVN0YXJ0ICsgc2xpZGVSYW5nZSwgc2xpZGVDb3VudE5ldyk7IGkgPCBsOyBpKyspIHtcbiAgICAgIGhlaWdodHMucHVzaChzbGlkZUl0ZW1zW2ldLm9mZnNldEhlaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xuICB9XG5cbiAgLy8gdXBkYXRlIGlubmVyIHdyYXBwZXIgaGVpZ2h0XG4gIC8vIDEuIGdldCB0aGUgbWF4LWhlaWdodCBvZiB0aGUgdmlzaWJsZSBzbGlkZXNcbiAgLy8gMi4gc2V0IHRyYW5zaXRpb25EdXJhdGlvbiB0byBzcGVlZFxuICAvLyAzLiB1cGRhdGUgaW5uZXIgd3JhcHBlciBoZWlnaHQgdG8gbWF4LWhlaWdodFxuICAvLyA0LiBzZXQgdHJhbnNpdGlvbkR1cmF0aW9uIHRvIDBzIGFmdGVyIHRyYW5zaXRpb24gZG9uZVxuICBmdW5jdGlvbiB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQgKCkge1xuICAgIHZhciBtYXhIZWlnaHQgPSBhdXRvSGVpZ2h0ID8gZ2V0TWF4U2xpZGVIZWlnaHQoaW5kZXgsIGl0ZW1zKSA6IGdldE1heFNsaWRlSGVpZ2h0KGNsb25lQ291bnQsIHNsaWRlQ291bnQpLFxuICAgICAgICB3cCA9IG1pZGRsZVdyYXBwZXIgPyBtaWRkbGVXcmFwcGVyIDogaW5uZXJXcmFwcGVyO1xuXG4gICAgaWYgKHdwLnN0eWxlLmhlaWdodCAhPT0gbWF4SGVpZ2h0KSB7IHdwLnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7IH1cbiAgfVxuXG4gIC8vIGdldCB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wIGVkZ2Ugb2YgdGhlIGZpcnN0IHNsaWRlIHRvIGVhY2ggc2xpZGVcbiAgLy8gKGluaXQpID0+IHNsaWRlUG9zaXRpb25zXG4gIGZ1bmN0aW9uIHNldFNsaWRlUG9zaXRpb25zICgpIHtcbiAgICBzbGlkZVBvc2l0aW9ucyA9IFswXTtcbiAgICB2YXIgYXR0ciA9IGhvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJyxcbiAgICAgICAgYXR0cjIgPSBob3Jpem9udGFsID8gJ3JpZ2h0JyA6ICdib3R0b20nLFxuICAgICAgICBiYXNlID0gc2xpZGVJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVthdHRyXTtcblxuICAgIGZvckVhY2goc2xpZGVJdGVtcywgZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgLy8gc2tpcCB0aGUgZmlyc3Qgc2xpZGVcbiAgICAgIGlmIChpKSB7IHNsaWRlUG9zaXRpb25zLnB1c2goaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVthdHRyXSAtIGJhc2UpOyB9XG4gICAgICAvLyBhZGQgdGhlIGVuZCBlZGdlXG4gICAgICBpZiAoaSA9PT0gc2xpZGVDb3VudE5ldyAtIDEpIHsgc2xpZGVQb3NpdGlvbnMucHVzaChpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2F0dHIyXSAtIGJhc2UpOyB9XG4gICAgfSk7XG4gIH1cblxuICAvLyB1cGRhdGUgc2xpZGVcbiAgZnVuY3Rpb24gdXBkYXRlU2xpZGVTdGF0dXMgKCkge1xuICAgIHZhciByYW5nZSA9IGdldFZpc2libGVTbGlkZVJhbmdlKCksXG4gICAgICAgIHN0YXJ0ID0gcmFuZ2VbMF0sXG4gICAgICAgIGVuZCA9IHJhbmdlWzFdO1xuXG4gICAgZm9yRWFjaChzbGlkZUl0ZW1zLCBmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAvLyBzaG93IHNsaWRlc1xuICAgICAgaWYgKGkgPj0gc3RhcnQgJiYgaSA8PSBlbmQpIHtcbiAgICAgICAgaWYgKGhhc0F0dHIoaXRlbSwgJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICByZW1vdmVBdHRycyhpdGVtLCBbJ2FyaWEtaGlkZGVuJywgJ3RhYmluZGV4J10pO1xuICAgICAgICAgIGFkZENsYXNzKGl0ZW0sIHNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAvLyBoaWRlIHNsaWRlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNBdHRyKGl0ZW0sICdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgc2V0QXR0cnMoaXRlbSwge1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIHNsaWRlQWN0aXZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBnYWxsZXJ5OiB1cGRhdGUgc2xpZGUgcG9zaXRpb25cbiAgZnVuY3Rpb24gdXBkYXRlR2FsbGVyeVNsaWRlUG9zaXRpb25zICgpIHtcbiAgICB2YXIgbCA9IGluZGV4ICsgTWF0aC5taW4oc2xpZGVDb3VudCwgaXRlbXMpO1xuICAgIGZvciAodmFyIGkgPSBzbGlkZUNvdW50TmV3OyBpLS07KSB7XG4gICAgICB2YXIgaXRlbSA9IHNsaWRlSXRlbXNbaV07XG5cbiAgICAgIGlmIChpID49IGluZGV4ICYmIGkgPCBsKSB7XG4gICAgICAgIC8vIGFkZCB0cmFuc2l0aW9ucyB0byB2aXNpYmxlIHNsaWRlcyB3aGVuIGFkanVzdGluZyB0aGVpciBwb3NpdGlvbnNcbiAgICAgICAgYWRkQ2xhc3MoaXRlbSwgJ3Rucy1tb3ZpbmcnKTtcblxuICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSAoaSAtIGluZGV4KSAqIDEwMCAvIGl0ZW1zICsgJyUnO1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBhbmltYXRlSW4pO1xuICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdHlsZS5sZWZ0KSB7XG4gICAgICAgIGl0ZW0uc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBhbmltYXRlTm9ybWFsKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZUluKTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIG91dGxldCBhbmltYXRpb25cbiAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIGFuaW1hdGVPdXQpO1xuICAgIH1cblxuICAgIC8vIHJlbW92aW5nICcudG5zLW1vdmluZydcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZm9yRWFjaChzbGlkZUl0ZW1zLCBmdW5jdGlvbihlbCkge1xuICAgICAgICByZW1vdmVDbGFzcyhlbCwgJ3Rucy1tb3ZpbmcnKTtcbiAgICAgIH0pO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICAvLyBzZXQgdGFiaW5kZXggb24gTmF2XG4gIGZ1bmN0aW9uIHVwZGF0ZU5hdlN0YXR1cyAoKSB7XG4gICAgLy8gZ2V0IGN1cnJlbnQgbmF2XG4gICAgaWYgKG5hdikge1xuICAgICAgbmF2Q3VycmVudEluZGV4ID0gbmF2Q2xpY2tlZCA+PSAwID8gbmF2Q2xpY2tlZCA6IGdldEN1cnJlbnROYXZJbmRleCgpO1xuICAgICAgbmF2Q2xpY2tlZCA9IC0xO1xuXG4gICAgICBpZiAobmF2Q3VycmVudEluZGV4ICE9PSBuYXZDdXJyZW50SW5kZXhDYWNoZWQpIHtcbiAgICAgICAgdmFyIG5hdlByZXYgPSBuYXZJdGVtc1tuYXZDdXJyZW50SW5kZXhDYWNoZWRdLFxuICAgICAgICAgICAgbmF2Q3VycmVudCA9IG5hdkl0ZW1zW25hdkN1cnJlbnRJbmRleF07XG5cbiAgICAgICAgc2V0QXR0cnMobmF2UHJldiwge1xuICAgICAgICAgICd0YWJpbmRleCc6ICctMScsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBuYXZTdHIgKyAobmF2Q3VycmVudEluZGV4Q2FjaGVkICsgMSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZUNsYXNzKG5hdlByZXYsIG5hdkFjdGl2ZUNsYXNzKTtcblxuICAgICAgICBzZXRBdHRycyhuYXZDdXJyZW50LCB7J2FyaWEtbGFiZWwnOiBuYXZTdHIgKyAobmF2Q3VycmVudEluZGV4ICsgMSkgKyBuYXZTdHJDdXJyZW50fSk7XG4gICAgICAgIHJlbW92ZUF0dHJzKG5hdkN1cnJlbnQsICd0YWJpbmRleCcpO1xuICAgICAgICBhZGRDbGFzcyhuYXZDdXJyZW50LCBuYXZBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgbmF2Q3VycmVudEluZGV4Q2FjaGVkID0gbmF2Q3VycmVudEluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExvd2VyQ2FzZU5vZGVOYW1lIChlbCkge1xuICAgIHJldHVybiBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNCdXR0b24gKGVsKSB7XG4gICAgcmV0dXJuIGdldExvd2VyQ2FzZU5vZGVOYW1lKGVsKSA9PT0gJ2J1dHRvbic7XG4gIH1cblxuICBmdW5jdGlvbiBpc0FyaWFEaXNhYmxlZCAoZWwpIHtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc0VuYWJsZUVsZW1lbnQgKGlzQnV0dG9uLCBlbCwgdmFsKSB7XG4gICAgaWYgKGlzQnV0dG9uKSB7XG4gICAgICBlbC5kaXNhYmxlZCA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdmFsLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCAnZGlzYWJsZWQnIHRvIHRydWUgb24gY29udHJvbHMgd2hlbiByZWFjaCB0aGUgZWRnZXNcbiAgZnVuY3Rpb24gdXBkYXRlQ29udHJvbHNTdGF0dXMgKCkge1xuICAgIGlmICghY29udHJvbHMgfHwgcmV3aW5kIHx8IGxvb3ApIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgcHJldkRpc2FibGVkID0gKHByZXZJc0J1dHRvbikgPyBwcmV2QnV0dG9uLmRpc2FibGVkIDogaXNBcmlhRGlzYWJsZWQocHJldkJ1dHRvbiksXG4gICAgICAgIG5leHREaXNhYmxlZCA9IChuZXh0SXNCdXR0b24pID8gbmV4dEJ1dHRvbi5kaXNhYmxlZCA6IGlzQXJpYURpc2FibGVkKG5leHRCdXR0b24pLFxuICAgICAgICBkaXNhYmxlUHJldiA9IChpbmRleCA8PSBpbmRleE1pbikgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVOZXh0ID0gKCFyZXdpbmQgJiYgaW5kZXggPj0gaW5kZXhNYXgpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgaWYgKGRpc2FibGVQcmV2ICYmICFwcmV2RGlzYWJsZWQpIHtcbiAgICAgIGRpc0VuYWJsZUVsZW1lbnQocHJldklzQnV0dG9uLCBwcmV2QnV0dG9uLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKCFkaXNhYmxlUHJldiAmJiBwcmV2RGlzYWJsZWQpIHtcbiAgICAgIGRpc0VuYWJsZUVsZW1lbnQocHJldklzQnV0dG9uLCBwcmV2QnV0dG9uLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChkaXNhYmxlTmV4dCAmJiAhbmV4dERpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KG5leHRJc0J1dHRvbiwgbmV4dEJ1dHRvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghZGlzYWJsZU5leHQgJiYgbmV4dERpc2FibGVkKSB7XG4gICAgICBkaXNFbmFibGVFbGVtZW50KG5leHRJc0J1dHRvbiwgbmV4dEJ1dHRvbiwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBkdXJhdGlvblxuICBmdW5jdGlvbiByZXNldER1cmF0aW9uIChlbCwgc3RyKSB7XG4gICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTikgeyBlbC5zdHlsZVtUUkFOU0lUSU9ORFVSQVRJT05dID0gc3RyOyB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTbGlkZXJXaWR0aCAoKSB7XG4gICAgcmV0dXJuIGZpeGVkV2lkdGggPyAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiBzbGlkZUNvdW50TmV3IDogc2xpZGVQb3NpdGlvbnNbc2xpZGVDb3VudE5ld107XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDZW50ZXJHYXAgKG51bSkge1xuICAgIGlmIChudW0gPT0gbnVsbCkgeyBudW0gPSBpbmRleDsgfVxuXG4gICAgdmFyIGdhcCA9IGVkZ2VQYWRkaW5nID8gZ3V0dGVyIDogMDtcbiAgICByZXR1cm4gYXV0b1dpZHRoID8gKCh2aWV3cG9ydCAtIGdhcCkgLSAoc2xpZGVQb3NpdGlvbnNbbnVtICsgMV0gLSBzbGlkZVBvc2l0aW9uc1tudW1dIC0gZ3V0dGVyKSkvMiA6XG4gICAgICBmaXhlZFdpZHRoID8gKHZpZXdwb3J0IC0gZml4ZWRXaWR0aCkgLyAyIDpcbiAgICAgICAgKGl0ZW1zIC0gMSkgLyAyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmlnaHRCb3VuZGFyeSAoKSB7XG4gICAgdmFyIGdhcCA9IGVkZ2VQYWRkaW5nID8gZ3V0dGVyIDogMCxcbiAgICAgICAgcmVzdWx0ID0gKHZpZXdwb3J0ICsgZ2FwKSAtIGdldFNsaWRlcldpZHRoKCk7XG5cbiAgICBpZiAoY2VudGVyICYmICFsb29wKSB7XG4gICAgICByZXN1bHQgPSBmaXhlZFdpZHRoID8gLSAoZml4ZWRXaWR0aCArIGd1dHRlcikgKiAoc2xpZGVDb3VudE5ldyAtIDEpIC0gZ2V0Q2VudGVyR2FwKCkgOlxuICAgICAgICBnZXRDZW50ZXJHYXAoc2xpZGVDb3VudE5ldyAtIDEpIC0gc2xpZGVQb3NpdGlvbnNbc2xpZGVDb3VudE5ldyAtIDFdO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ID4gMCkgeyByZXN1bHQgPSAwOyB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUgKG51bSkge1xuICAgIGlmIChudW0gPT0gbnVsbCkgeyBudW0gPSBpbmRleDsgfVxuXG4gICAgdmFyIHZhbDtcbiAgICBpZiAoaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoKSB7XG4gICAgICBpZiAoZml4ZWRXaWR0aCkge1xuICAgICAgICB2YWwgPSAtIChmaXhlZFdpZHRoICsgZ3V0dGVyKSAqIG51bTtcbiAgICAgICAgaWYgKGNlbnRlcikgeyB2YWwgKz0gZ2V0Q2VudGVyR2FwKCk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkZW5vbWluYXRvciA9IFRSQU5TRk9STSA/IHNsaWRlQ291bnROZXcgOiBpdGVtcztcbiAgICAgICAgaWYgKGNlbnRlcikgeyBudW0gLT0gZ2V0Q2VudGVyR2FwKCk7IH1cbiAgICAgICAgdmFsID0gLSBudW0gKiAxMDAgLyBkZW5vbWluYXRvcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsID0gLSBzbGlkZVBvc2l0aW9uc1tudW1dO1xuICAgICAgaWYgKGNlbnRlciAmJiBhdXRvV2lkdGgpIHtcbiAgICAgICAgdmFsICs9IGdldENlbnRlckdhcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNSaWdodERlYWRab25lKSB7IHZhbCA9IE1hdGgubWF4KHZhbCwgcmlnaHRCb3VuZGFyeSk7IH1cblxuICAgIHZhbCArPSAoaG9yaXpvbnRhbCAmJiAhYXV0b1dpZHRoICYmICFmaXhlZFdpZHRoKSA/ICclJyA6ICdweCc7XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9Db250YWluZXJUcmFuc2Zvcm1TaWxlbnQgKHZhbCkge1xuICAgIHJlc2V0RHVyYXRpb24oY29udGFpbmVyLCAnMHMnKTtcbiAgICBkb0NvbnRhaW5lclRyYW5zZm9ybSh2YWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9Db250YWluZXJUcmFuc2Zvcm0gKHZhbCkge1xuICAgIGlmICh2YWwgPT0gbnVsbCkgeyB2YWwgPSBnZXRDb250YWluZXJUcmFuc2Zvcm1WYWx1ZSgpOyB9XG4gICAgY29udGFpbmVyLnN0eWxlW3RyYW5zZm9ybUF0dHJdID0gdHJhbnNmb3JtUHJlZml4ICsgdmFsICsgdHJhbnNmb3JtUG9zdGZpeDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFuaW1hdGVTbGlkZSAobnVtYmVyLCBjbGFzc091dCwgY2xhc3NJbiwgaXNPdXQpIHtcbiAgICB2YXIgbCA9IG51bWJlciArIGl0ZW1zO1xuICAgIGlmICghbG9vcCkgeyBsID0gTWF0aC5taW4obCwgc2xpZGVDb3VudE5ldyk7IH1cblxuICAgIGZvciAodmFyIGkgPSBudW1iZXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBzbGlkZUl0ZW1zW2ldO1xuXG4gICAgICAvLyBzZXQgaXRlbSBwb3NpdGlvbnNcbiAgICAgIGlmICghaXNPdXQpIHsgaXRlbS5zdHlsZS5sZWZ0ID0gKGkgLSBpbmRleCkgKiAxMDAgLyBpdGVtcyArICclJzsgfVxuXG4gICAgICBpZiAoYW5pbWF0ZURlbGF5ICYmIFRSQU5TSVRJT05ERUxBWSkge1xuICAgICAgICBpdGVtLnN0eWxlW1RSQU5TSVRJT05ERUxBWV0gPSBpdGVtLnN0eWxlW0FOSU1BVElPTkRFTEFZXSA9IGFuaW1hdGVEZWxheSAqIChpIC0gbnVtYmVyKSAvIDEwMDAgKyAncyc7XG4gICAgICB9XG4gICAgICByZW1vdmVDbGFzcyhpdGVtLCBjbGFzc091dCk7XG4gICAgICBhZGRDbGFzcyhpdGVtLCBjbGFzc0luKTtcblxuICAgICAgaWYgKGlzT3V0KSB7IHNsaWRlSXRlbXNPdXQucHVzaChpdGVtKTsgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG1ha2UgdHJhbnNmZXIgYWZ0ZXIgY2xpY2svZHJhZzpcbiAgLy8gMS4gY2hhbmdlICd0cmFuc2Zvcm0nIHByb3BlcnR5IGZvciBtb3JkZXJuIGJyb3dzZXJzXG4gIC8vIDIuIGNoYW5nZSAnbGVmdCcgcHJvcGVydHkgZm9yIGxlZ2FjeSBicm93c2Vyc1xuICB2YXIgdHJhbnNmb3JtQ29yZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhcm91c2VsID9cbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzZXREdXJhdGlvbihjb250YWluZXIsICcnKTtcbiAgICAgICAgaWYgKFRSQU5TSVRJT05EVVJBVElPTiB8fCAhc3BlZWQpIHtcbiAgICAgICAgICAvLyBmb3IgbW9yZGVuIGJyb3dzZXJzIHdpdGggbm9uLXplcm8gZHVyYXRpb24gb3JcbiAgICAgICAgICAvLyB6ZXJvIGR1cmF0aW9uIGZvciBhbGwgYnJvd3NlcnNcbiAgICAgICAgICBkb0NvbnRhaW5lclRyYW5zZm9ybSgpO1xuICAgICAgICAgIC8vIHJ1biBmYWxsYmFjayBmdW5jdGlvbiBtYW51YWxseVxuICAgICAgICAgIC8vIHdoZW4gZHVyYXRpb24gaXMgMCAvIGNvbnRhaW5lciBpcyBoaWRkZW5cbiAgICAgICAgICBpZiAoIXNwZWVkIHx8ICFpc1Zpc2libGUoY29udGFpbmVyKSkgeyBvblRyYW5zaXRpb25FbmQoKTsgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZm9yIG9sZCBicm93c2VyIHdpdGggbm9uLXplcm8gZHVyYXRpb25cbiAgICAgICAgICBqc1RyYW5zZm9ybShjb250YWluZXIsIHRyYW5zZm9ybUF0dHIsIHRyYW5zZm9ybVByZWZpeCwgdHJhbnNmb3JtUG9zdGZpeCwgZ2V0Q29udGFpbmVyVHJhbnNmb3JtVmFsdWUoKSwgc3BlZWQsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhvcml6b250YWwpIHsgdXBkYXRlQ29udGVudFdyYXBwZXJIZWlnaHQoKTsgfVxuICAgICAgfSA6XG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlSXRlbXNPdXQgPSBbXTtcblxuICAgICAgICB2YXIgZXZlID0ge307XG4gICAgICAgIGV2ZVtUUkFOU0lUSU9ORU5EXSA9IGV2ZVtBTklNQVRJT05FTkRdID0gb25UcmFuc2l0aW9uRW5kO1xuICAgICAgICByZW1vdmVFdmVudHMoc2xpZGVJdGVtc1tpbmRleENhY2hlZF0sIGV2ZSk7XG4gICAgICAgIGFkZEV2ZW50cyhzbGlkZUl0ZW1zW2luZGV4XSwgZXZlKTtcblxuICAgICAgICBhbmltYXRlU2xpZGUoaW5kZXhDYWNoZWQsIGFuaW1hdGVJbiwgYW5pbWF0ZU91dCwgdHJ1ZSk7XG4gICAgICAgIGFuaW1hdGVTbGlkZShpbmRleCwgYW5pbWF0ZU5vcm1hbCwgYW5pbWF0ZUluKTtcblxuICAgICAgICAvLyBydW4gZmFsbGJhY2sgZnVuY3Rpb24gbWFudWFsbHlcbiAgICAgICAgLy8gd2hlbiB0cmFuc2l0aW9uIG9yIGFuaW1hdGlvbiBub3Qgc3VwcG9ydGVkIC8gZHVyYXRpb24gaXMgMFxuICAgICAgICBpZiAoIVRSQU5TSVRJT05FTkQgfHwgIUFOSU1BVElPTkVORCB8fCAhc3BlZWQgfHwgIWlzVmlzaWJsZShjb250YWluZXIpKSB7IG9uVHJhbnNpdGlvbkVuZCgpOyB9XG4gICAgICB9O1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlciAoZSwgc2xpZGVyTW92ZWQpIHtcbiAgICBpZiAodXBkYXRlSW5kZXhCZWZvcmVUcmFuc2Zvcm0pIHsgdXBkYXRlSW5kZXgoKTsgfVxuXG4gICAgLy8gcmVuZGVyIHdoZW4gc2xpZGVyIHdhcyBtb3ZlZCAodG91Y2ggb3IgZHJhZykgZXZlbiB0aG91Z2ggaW5kZXggbWF5IG5vdCBjaGFuZ2VcbiAgICBpZiAoaW5kZXggIT09IGluZGV4Q2FjaGVkIHx8IHNsaWRlck1vdmVkKSB7XG4gICAgICAvLyBldmVudHNcbiAgICAgIGV2ZW50cy5lbWl0KCdpbmRleENoYW5nZWQnLCBpbmZvKCkpO1xuICAgICAgZXZlbnRzLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcsIGluZm8oKSk7XG4gICAgICBpZiAoYXV0b0hlaWdodCkgeyBkb0F1dG9IZWlnaHQoKTsgfVxuXG4gICAgICAvLyBwYXVzZSBhdXRvcGxheSB3aGVuIGNsaWNrIG9yIGtleWRvd24gZnJvbSB1c2VyXG4gICAgICBpZiAoYW5pbWF0aW5nICYmIGUgJiYgWydjbGljaycsICdrZXlkb3duJ10uaW5kZXhPZihlLnR5cGUpID49IDApIHsgc3RvcEF1dG9wbGF5KCk7IH1cblxuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICB0cmFuc2Zvcm1Db3JlKCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogVHJhbnNmZXIgcHJlZml4ZWQgcHJvcGVydGllcyB0byB0aGUgc2FtZSBmb3JtYXRcbiAgICogQ1NTOiAtV2Via2l0LVRyYW5zZm9ybSA9PiB3ZWJraXR0cmFuc2Zvcm1cbiAgICogSlM6IFdlYmtpdFRyYW5zZm9ybSA9PiB3ZWJraXR0cmFuc2Zvcm1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIHByb3BlcnR5XG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBzdHJUcmFucyAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0vZywgJycpO1xuICB9XG5cbiAgLy8gQUZURVIgVFJBTlNGT1JNXG4gIC8vIFRoaW5ncyBuZWVkIHRvIGJlIGRvbmUgYWZ0ZXIgYSB0cmFuc2ZlcjpcbiAgLy8gMS4gY2hlY2sgaW5kZXhcbiAgLy8gMi4gYWRkIGNsYXNzZXMgdG8gdmlzaWJsZSBzbGlkZVxuICAvLyAzLiBkaXNhYmxlIGNvbnRyb2xzIGJ1dHRvbnMgd2hlbiByZWFjaCB0aGUgZmlyc3QvbGFzdCBzbGlkZSBpbiBub24tbG9vcCBzbGlkZXJcbiAgLy8gNC4gdXBkYXRlIG5hdiBzdGF0dXNcbiAgLy8gNS4gbGF6eWxvYWQgaW1hZ2VzXG4gIC8vIDYuIHVwZGF0ZSBjb250YWluZXIgaGVpZ2h0XG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCAoZXZlbnQpIHtcbiAgICAvLyBjaGVjayBydW5uaW5nIG9uIGdhbGxlcnkgbW9kZVxuICAgIC8vIG1ha2Ugc3VyZSB0cmFudGlvbmVuZC9hbmltYXRpb25lbmQgZXZlbnRzIHJ1biBvbmx5IG9uY2VcbiAgICBpZiAoY2Fyb3VzZWwgfHwgcnVubmluZykge1xuICAgICAgZXZlbnRzLmVtaXQoJ3RyYW5zaXRpb25FbmQnLCBpbmZvKGV2ZW50KSk7XG5cbiAgICAgIGlmICghY2Fyb3VzZWwgJiYgc2xpZGVJdGVtc091dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVJdGVtc091dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpdGVtID0gc2xpZGVJdGVtc091dFtpXTtcbiAgICAgICAgICAvLyBzZXQgaXRlbSBwb3NpdGlvbnNcbiAgICAgICAgICBpdGVtLnN0eWxlLmxlZnQgPSAnJztcblxuICAgICAgICAgIGlmIChBTklNQVRJT05ERUxBWSAmJiBUUkFOU0lUSU9OREVMQVkpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGVbQU5JTUFUSU9OREVMQVldID0gJyc7XG4gICAgICAgICAgICBpdGVtLnN0eWxlW1RSQU5TSVRJT05ERUxBWV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgYW5pbWF0ZU91dCk7XG4gICAgICAgICAgYWRkQ2xhc3MoaXRlbSwgYW5pbWF0ZU5vcm1hbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogdXBkYXRlIHNsaWRlcywgbmF2LCBjb250cm9scyBhZnRlciBjaGVja2luZyAuLi5cbiAgICAgICAqID0+IGxlZ2FjeSBicm93c2VycyB3aG8gZG9uJ3Qgc3VwcG9ydCAnZXZlbnQnXG4gICAgICAgKiAgICBoYXZlIHRvIGNoZWNrIGV2ZW50IGZpcnN0LCBvdGhlcndpc2UgZXZlbnQudGFyZ2V0IHdpbGwgY2F1c2UgYW4gZXJyb3JcbiAgICAgICAqID0+IG9yICdnYWxsZXJ5JyBtb2RlOlxuICAgICAgICogICArIGV2ZW50IHRhcmdldCBpcyBzbGlkZSBpdGVtXG4gICAgICAgKiA9PiBvciAnY2Fyb3VzZWwnIG1vZGU6XG4gICAgICAgKiAgICsgZXZlbnQgdGFyZ2V0IGlzIGNvbnRhaW5lcixcbiAgICAgICAqICAgKyBldmVudC5wcm9wZXJ0eSBpcyB0aGUgc2FtZSB3aXRoIHRyYW5zZm9ybSBhdHRyaWJ1dGVcbiAgICAgICAqL1xuICAgICAgaWYgKCFldmVudCB8fFxuICAgICAgICAgICFjYXJvdXNlbCAmJiBldmVudC50YXJnZXQucGFyZW50Tm9kZSA9PT0gY29udGFpbmVyIHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0ID09PSBjb250YWluZXIgJiYgc3RyVHJhbnMoZXZlbnQucHJvcGVydHlOYW1lKSA9PT0gc3RyVHJhbnModHJhbnNmb3JtQXR0cikpIHtcblxuICAgICAgICBpZiAoIXVwZGF0ZUluZGV4QmVmb3JlVHJhbnNmb3JtKSB7XG4gICAgICAgICAgdmFyIGluZGV4VGVtID0gaW5kZXg7XG4gICAgICAgICAgdXBkYXRlSW5kZXgoKTtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IGluZGV4VGVtKSB7XG4gICAgICAgICAgICBldmVudHMuZW1pdCgnaW5kZXhDaGFuZ2VkJywgaW5mbygpKTtcblxuICAgICAgICAgICAgZG9Db250YWluZXJUcmFuc2Zvcm1TaWxlbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVzdGVkID09PSAnaW5uZXInKSB7IGV2ZW50cy5lbWl0KCdpbm5lckxvYWRlZCcsIGluZm8oKSk7IH1cbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICBpbmRleENhY2hlZCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLy8gIyBBQ1RJT05TXG4gIGZ1bmN0aW9uIGdvVG8gKHRhcmdldEluZGV4LCBlKSB7XG4gICAgaWYgKGZyZWV6ZSkgeyByZXR1cm47IH1cblxuICAgIC8vIHByZXYgc2xpZGVCeVxuICAgIGlmICh0YXJnZXRJbmRleCA9PT0gJ3ByZXYnKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgLTEpO1xuXG4gICAgLy8gbmV4dCBzbGlkZUJ5XG4gICAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gJ25leHQnKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2soZSwgMSk7XG5cbiAgICAvLyBnbyB0byBleGFjdCBzbGlkZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICBpZiAocHJldmVudEFjdGlvbldoZW5SdW5uaW5nKSB7IHJldHVybjsgfSBlbHNlIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cbiAgICAgIH1cblxuICAgICAgdmFyIGFic0luZGV4ID0gZ2V0QWJzSW5kZXgoKSxcbiAgICAgICAgICBpbmRleEdhcCA9IDA7XG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICBpbmRleEdhcCA9IC0gYWJzSW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldEluZGV4ID09PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXhHYXAgPSBjYXJvdXNlbCA/IHNsaWRlQ291bnQgLSBpdGVtcyAtIGFic0luZGV4IDogc2xpZGVDb3VudCAtIDEgLSBhYnNJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0SW5kZXggIT09ICdudW1iZXInKSB7IHRhcmdldEluZGV4ID0gcGFyc2VJbnQodGFyZ2V0SW5kZXgpOyB9XG5cbiAgICAgICAgaWYgKCFpc05hTih0YXJnZXRJbmRleCkpIHtcbiAgICAgICAgICAvLyBmcm9tIGRpcmVjdGx5IGNhbGxlZCBnb1RvIGZ1bmN0aW9uXG4gICAgICAgICAgaWYgKCFlKSB7IHRhcmdldEluZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2xpZGVDb3VudCAtIDEsIHRhcmdldEluZGV4KSk7IH1cblxuICAgICAgICAgIGluZGV4R2FwID0gdGFyZ2V0SW5kZXggLSBhYnNJbmRleDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBnYWxsZXJ5OiBtYWtlIHN1cmUgbmV3IHBhZ2Ugd29uJ3Qgb3ZlcmxhcCB3aXRoIGN1cnJlbnQgcGFnZVxuICAgICAgaWYgKCFjYXJvdXNlbCAmJiBpbmRleEdhcCAmJiBNYXRoLmFicyhpbmRleEdhcCkgPCBpdGVtcykge1xuICAgICAgICB2YXIgZmFjdG9yID0gaW5kZXhHYXAgPiAwID8gMSA6IC0xO1xuICAgICAgICBpbmRleEdhcCArPSAoaW5kZXggKyBpbmRleEdhcCAtIHNsaWRlQ291bnQpID49IGluZGV4TWluID8gc2xpZGVDb3VudCAqIGZhY3RvciA6IHNsaWRlQ291bnQgKiAyICogZmFjdG9yICogLTE7XG4gICAgICB9XG5cbiAgICAgIGluZGV4ICs9IGluZGV4R2FwO1xuXG4gICAgICAvLyBtYWtlIHN1cmUgaW5kZXggaXMgaW4gcmFuZ2VcbiAgICAgIGlmIChjYXJvdXNlbCAmJiBsb29wKSB7XG4gICAgICAgIGlmIChpbmRleCA8IGluZGV4TWluKSB7IGluZGV4ICs9IHNsaWRlQ291bnQ7IH1cbiAgICAgICAgaWYgKGluZGV4ID4gaW5kZXhNYXgpIHsgaW5kZXggLT0gc2xpZGVDb3VudDsgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBpbmRleCBpcyBjaGFuZ2VkLCBzdGFydCByZW5kZXJpbmdcbiAgICAgIGlmIChnZXRBYnNJbmRleChpbmRleCkgIT09IGdldEFic0luZGV4KGluZGV4Q2FjaGVkKSkge1xuICAgICAgICByZW5kZXIoZSk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAvLyBvbiBjb250cm9scyBjbGlja1xuICBmdW5jdGlvbiBvbkNvbnRyb2xzQ2xpY2sgKGUsIGRpcikge1xuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICBpZiAocHJldmVudEFjdGlvbldoZW5SdW5uaW5nKSB7IHJldHVybjsgfSBlbHNlIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cbiAgICB9XG4gICAgdmFyIHBhc3NFdmVudE9iamVjdDtcblxuICAgIGlmICghZGlyKSB7XG4gICAgICBlID0gZ2V0RXZlbnQoZSk7XG4gICAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGUpO1xuXG4gICAgICB3aGlsZSAodGFyZ2V0ICE9PSBjb250cm9sc0NvbnRhaW5lciAmJiBbcHJldkJ1dHRvbiwgbmV4dEJ1dHRvbl0uaW5kZXhPZih0YXJnZXQpIDwgMCkgeyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTsgfVxuXG4gICAgICB2YXIgdGFyZ2V0SW4gPSBbcHJldkJ1dHRvbiwgbmV4dEJ1dHRvbl0uaW5kZXhPZih0YXJnZXQpO1xuICAgICAgaWYgKHRhcmdldEluID49IDApIHtcbiAgICAgICAgcGFzc0V2ZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgZGlyID0gdGFyZ2V0SW4gPT09IDAgPyAtMSA6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJld2luZCkge1xuICAgICAgaWYgKGluZGV4ID09PSBpbmRleE1pbiAmJiBkaXIgPT09IC0xKSB7XG4gICAgICAgIGdvVG8oJ2xhc3QnLCBlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gaW5kZXhNYXggJiYgZGlyID09PSAxKSB7XG4gICAgICAgIGdvVG8oJ2ZpcnN0JywgZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyKSB7XG4gICAgICBpbmRleCArPSBzbGlkZUJ5ICogZGlyO1xuICAgICAgaWYgKGF1dG9XaWR0aCkgeyBpbmRleCA9IE1hdGguZmxvb3IoaW5kZXgpOyB9XG4gICAgICAvLyBwYXNzIGUgd2hlbiBjbGljayBjb250cm9sIGJ1dHRvbnMgb3Iga2V5ZG93blxuICAgICAgcmVuZGVyKChwYXNzRXZlbnRPYmplY3QgfHwgKGUgJiYgZS50eXBlID09PSAna2V5ZG93bicpKSA/IGUgOiBudWxsKTtcbiAgICB9XG4gIH1cblxuICAvLyBvbiBuYXYgY2xpY2tcbiAgZnVuY3Rpb24gb25OYXZDbGljayAoZSkge1xuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICBpZiAocHJldmVudEFjdGlvbldoZW5SdW5uaW5nKSB7IHJldHVybjsgfSBlbHNlIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cbiAgICB9XG5cbiAgICBlID0gZ2V0RXZlbnQoZSk7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChlKSwgbmF2SW5kZXg7XG5cbiAgICAvLyBmaW5kIHRoZSBjbGlja2VkIG5hdiBpdGVtXG4gICAgd2hpbGUgKHRhcmdldCAhPT0gbmF2Q29udGFpbmVyICYmICFoYXNBdHRyKHRhcmdldCwgJ2RhdGEtbmF2JykpIHsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7IH1cbiAgICBpZiAoaGFzQXR0cih0YXJnZXQsICdkYXRhLW5hdicpKSB7XG4gICAgICB2YXIgbmF2SW5kZXggPSBuYXZDbGlja2VkID0gTnVtYmVyKGdldEF0dHIodGFyZ2V0LCAnZGF0YS1uYXYnKSksXG4gICAgICAgICAgdGFyZ2V0SW5kZXhCYXNlID0gZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGggPyBuYXZJbmRleCAqIHNsaWRlQ291bnQgLyBwYWdlcyA6IG5hdkluZGV4ICogaXRlbXMsXG4gICAgICAgICAgdGFyZ2V0SW5kZXggPSBuYXZBc1RodW1ibmFpbHMgPyBuYXZJbmRleCA6IE1hdGgubWluKE1hdGguY2VpbCh0YXJnZXRJbmRleEJhc2UpLCBzbGlkZUNvdW50IC0gMSk7XG4gICAgICBnb1RvKHRhcmdldEluZGV4LCBlKTtcblxuICAgICAgaWYgKG5hdkN1cnJlbnRJbmRleCA9PT0gbmF2SW5kZXgpIHtcbiAgICAgICAgaWYgKGFuaW1hdGluZykgeyBzdG9wQXV0b3BsYXkoKTsgfVxuICAgICAgICBuYXZDbGlja2VkID0gLTE7IC8vIHJlc2V0IG5hdkNsaWNrZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBhdXRvcGxheSBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gc2V0QXV0b3BsYXlUaW1lciAoKSB7XG4gICAgYXV0b3BsYXlUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uQ29udHJvbHNDbGljayhudWxsLCBhdXRvcGxheURpcmVjdGlvbik7XG4gICAgfSwgYXV0b3BsYXlUaW1lb3V0KTtcblxuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wQXV0b3BsYXlUaW1lciAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvcGxheVRpbWVyKTtcbiAgICBhbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUF1dG9wbGF5QnV0dG9uIChhY3Rpb24sIHR4dCkge1xuICAgIHNldEF0dHJzKGF1dG9wbGF5QnV0dG9uLCB7J2RhdGEtYWN0aW9uJzogYWN0aW9ufSk7XG4gICAgYXV0b3BsYXlCdXR0b24uaW5uZXJIVE1MID0gYXV0b3BsYXlIdG1sU3RyaW5nc1swXSArIGFjdGlvbiArIGF1dG9wbGF5SHRtbFN0cmluZ3NbMV0gKyB0eHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEF1dG9wbGF5ICgpIHtcbiAgICBzZXRBdXRvcGxheVRpbWVyKCk7XG4gICAgaWYgKGF1dG9wbGF5QnV0dG9uKSB7IHVwZGF0ZUF1dG9wbGF5QnV0dG9uKCdzdG9wJywgYXV0b3BsYXlUZXh0WzFdKTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcEF1dG9wbGF5ICgpIHtcbiAgICBzdG9wQXV0b3BsYXlUaW1lcigpO1xuICAgIGlmIChhdXRvcGxheUJ1dHRvbikgeyB1cGRhdGVBdXRvcGxheUJ1dHRvbignc3RhcnQnLCBhdXRvcGxheVRleHRbMF0pOyB9XG4gIH1cblxuICAvLyBwcm9ncmFtYWl0Y2FsbHkgcGxheS9wYXVzZSB0aGUgc2xpZGVyXG4gIGZ1bmN0aW9uIHBsYXkgKCkge1xuICAgIGlmIChhdXRvcGxheSAmJiAhYW5pbWF0aW5nKSB7XG4gICAgICBzdGFydEF1dG9wbGF5KCk7XG4gICAgICBhdXRvcGxheVVzZXJQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcGF1c2UgKCkge1xuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHN0b3BBdXRvcGxheSgpO1xuICAgICAgYXV0b3BsYXlVc2VyUGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVBdXRvcGxheSAoKSB7XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgc3RvcEF1dG9wbGF5KCk7XG4gICAgICBhdXRvcGxheVVzZXJQYXVzZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEF1dG9wbGF5KCk7XG4gICAgICBhdXRvcGxheVVzZXJQYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UgKCkge1xuICAgIGlmIChkb2MuaGlkZGVuKSB7XG4gICAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICAgIHN0b3BBdXRvcGxheVRpbWVyKCk7XG4gICAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdXRvcGxheVZpc2liaWxpdHlQYXVzZWQpIHtcbiAgICAgIHNldEF1dG9wbGF5VGltZXIoKTtcbiAgICAgIGF1dG9wbGF5VmlzaWJpbGl0eVBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3ZlclBhdXNlICgpIHtcbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICBzdG9wQXV0b3BsYXlUaW1lcigpO1xuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VvdXRSZXN0YXJ0ICgpIHtcbiAgICBpZiAoYXV0b3BsYXlIb3ZlclBhdXNlZCkge1xuICAgICAgc2V0QXV0b3BsYXlUaW1lcigpO1xuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGtleWRvd24gZXZlbnRzIG9uIGRvY3VtZW50XG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlkb3duIChlKSB7XG4gICAgZSA9IGdldEV2ZW50KGUpO1xuICAgIHZhciBrZXlJbmRleCA9IFtLRVlTLkxFRlQsIEtFWVMuUklHSFRdLmluZGV4T2YoZS5rZXlDb2RlKTtcblxuICAgIGlmIChrZXlJbmRleCA+PSAwKSB7XG4gICAgICBvbkNvbnRyb2xzQ2xpY2soZSwga2V5SW5kZXggPT09IDAgPyAtMSA6IDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uIGtleSBjb250cm9sXG4gIGZ1bmN0aW9uIG9uQ29udHJvbHNLZXlkb3duIChlKSB7XG4gICAgZSA9IGdldEV2ZW50KGUpO1xuICAgIHZhciBrZXlJbmRleCA9IFtLRVlTLkxFRlQsIEtFWVMuUklHSFRdLmluZGV4T2YoZS5rZXlDb2RlKTtcblxuICAgIGlmIChrZXlJbmRleCA+PSAwKSB7XG4gICAgICBpZiAoa2V5SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYgKCFwcmV2QnV0dG9uLmRpc2FibGVkKSB7IG9uQ29udHJvbHNDbGljayhlLCAtMSk7IH1cbiAgICAgIH0gZWxzZSBpZiAoIW5leHRCdXR0b24uZGlzYWJsZWQpIHtcbiAgICAgICAgb25Db250cm9sc0NsaWNrKGUsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldCBmb2N1c1xuICBmdW5jdGlvbiBzZXRGb2N1cyAoZWwpIHtcbiAgICBlbC5mb2N1cygpO1xuICB9XG5cbiAgLy8gb24ga2V5IG5hdlxuICBmdW5jdGlvbiBvbk5hdktleWRvd24gKGUpIHtcbiAgICBlID0gZ2V0RXZlbnQoZSk7XG4gICAgdmFyIGN1ckVsZW1lbnQgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoIWhhc0F0dHIoY3VyRWxlbWVudCwgJ2RhdGEtbmF2JykpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyB2YXIgY29kZSA9IGUua2V5Q29kZSxcbiAgICB2YXIga2V5SW5kZXggPSBbS0VZUy5MRUZULCBLRVlTLlJJR0hULCBLRVlTLkVOVEVSLCBLRVlTLlNQQUNFXS5pbmRleE9mKGUua2V5Q29kZSksXG4gICAgICAgIG5hdkluZGV4ID0gTnVtYmVyKGdldEF0dHIoY3VyRWxlbWVudCwgJ2RhdGEtbmF2JykpO1xuXG4gICAgaWYgKGtleUluZGV4ID49IDApIHtcbiAgICAgIGlmIChrZXlJbmRleCA9PT0gMCkge1xuICAgICAgICBpZiAobmF2SW5kZXggPiAwKSB7IHNldEZvY3VzKG5hdkl0ZW1zW25hdkluZGV4IC0gMV0pOyB9XG4gICAgICB9IGVsc2UgaWYgKGtleUluZGV4ID09PSAxKSB7XG4gICAgICAgIGlmIChuYXZJbmRleCA8IHBhZ2VzIC0gMSkgeyBzZXRGb2N1cyhuYXZJdGVtc1tuYXZJbmRleCArIDFdKTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmF2Q2xpY2tlZCA9IG5hdkluZGV4O1xuICAgICAgICBnb1RvKG5hdkluZGV4LCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFdmVudCAoZSkge1xuICAgIGUgPSBlIHx8IHdpbi5ldmVudDtcbiAgICByZXR1cm4gaXNUb3VjaEV2ZW50KGUpID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGU7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VGFyZ2V0IChlKSB7XG4gICAgcmV0dXJuIGUudGFyZ2V0IHx8IHdpbi5ldmVudC5zcmNFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUb3VjaEV2ZW50IChlKSB7XG4gICAgcmV0dXJuIGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID49IDA7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEJlaGF2aW9yIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1vdmVEaXJlY3Rpb25FeHBlY3RlZCAoKSB7XG4gICAgcmV0dXJuIGdldFRvdWNoRGlyZWN0aW9uKHRvRGVncmVlKGxhc3RQb3NpdGlvbi55IC0gaW5pdFBvc2l0aW9uLnksIGxhc3RQb3NpdGlvbi54IC0gaW5pdFBvc2l0aW9uLngpLCBzd2lwZUFuZ2xlKSA9PT0gb3B0aW9ucy5heGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gb25QYW5TdGFydCAoZSkge1xuICAgIGlmIChydW5uaW5nKSB7XG4gICAgICBpZiAocHJldmVudEFjdGlvbldoZW5SdW5uaW5nKSB7IHJldHVybjsgfSBlbHNlIHsgb25UcmFuc2l0aW9uRW5kKCk7IH1cbiAgICB9XG5cbiAgICBpZiAoYXV0b3BsYXkgJiYgYW5pbWF0aW5nKSB7IHN0b3BBdXRvcGxheVRpbWVyKCk7IH1cblxuICAgIHBhblN0YXJ0ID0gdHJ1ZTtcbiAgICBpZiAocmFmSW5kZXgpIHtcbiAgICAgIGNhZihyYWZJbmRleCk7XG4gICAgICByYWZJbmRleCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyICQgPSBnZXRFdmVudChlKTtcbiAgICBldmVudHMuZW1pdChpc1RvdWNoRXZlbnQoZSkgPyAndG91Y2hTdGFydCcgOiAnZHJhZ1N0YXJ0JywgaW5mbyhlKSk7XG5cbiAgICBpZiAoIWlzVG91Y2hFdmVudChlKSAmJiBbJ2ltZycsICdhJ10uaW5kZXhPZihnZXRMb3dlckNhc2VOb2RlTmFtZShnZXRUYXJnZXQoZSkpKSA+PSAwKSB7XG4gICAgICBwcmV2ZW50RGVmYXVsdEJlaGF2aW9yKGUpO1xuICAgIH1cblxuICAgIGxhc3RQb3NpdGlvbi54ID0gaW5pdFBvc2l0aW9uLnggPSAkLmNsaWVudFg7XG4gICAgbGFzdFBvc2l0aW9uLnkgPSBpbml0UG9zaXRpb24ueSA9ICQuY2xpZW50WTtcbiAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgIHRyYW5zbGF0ZUluaXQgPSBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1BdHRyXS5yZXBsYWNlKHRyYW5zZm9ybVByZWZpeCwgJycpKTtcbiAgICAgIHJlc2V0RHVyYXRpb24oY29udGFpbmVyLCAnMHMnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBhbk1vdmUgKGUpIHtcbiAgICBpZiAocGFuU3RhcnQpIHtcbiAgICAgIHZhciAkID0gZ2V0RXZlbnQoZSk7XG4gICAgICBsYXN0UG9zaXRpb24ueCA9ICQuY2xpZW50WDtcbiAgICAgIGxhc3RQb3NpdGlvbi55ID0gJC5jbGllbnRZO1xuXG4gICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgaWYgKCFyYWZJbmRleCkgeyByYWZJbmRleCA9IHJhZihmdW5jdGlvbigpeyBwYW5VcGRhdGUoZSk7IH0pOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobW92ZURpcmVjdGlvbkV4cGVjdGVkID09PSAnPycpIHsgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gZ2V0TW92ZURpcmVjdGlvbkV4cGVjdGVkKCk7IH1cbiAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCkgeyBwcmV2ZW50U2Nyb2xsID0gdHJ1ZTsgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHR5cGVvZiBlLmNhbmNlbGFibGUgIT09ICdib29sZWFuJyB8fCBlLmNhbmNlbGFibGUpICYmIHByZXZlbnRTY3JvbGwpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhblVwZGF0ZSAoZSkge1xuICAgIGlmICghbW92ZURpcmVjdGlvbkV4cGVjdGVkKSB7XG4gICAgICBwYW5TdGFydCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWYocmFmSW5kZXgpO1xuICAgIGlmIChwYW5TdGFydCkgeyByYWZJbmRleCA9IHJhZihmdW5jdGlvbigpeyBwYW5VcGRhdGUoZSk7IH0pOyB9XG5cbiAgICBpZiAobW92ZURpcmVjdGlvbkV4cGVjdGVkID09PSAnPycpIHsgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gZ2V0TW92ZURpcmVjdGlvbkV4cGVjdGVkKCk7IH1cbiAgICBpZiAobW92ZURpcmVjdGlvbkV4cGVjdGVkKSB7XG4gICAgICBpZiAoIXByZXZlbnRTY3JvbGwgJiYgaXNUb3VjaEV2ZW50KGUpKSB7IHByZXZlbnRTY3JvbGwgPSB0cnVlOyB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChlLnR5cGUpIHsgZXZlbnRzLmVtaXQoaXNUb3VjaEV2ZW50KGUpID8gJ3RvdWNoTW92ZScgOiAnZHJhZ01vdmUnLCBpbmZvKGUpKTsgfVxuICAgICAgfSBjYXRjaChlcnIpIHt9XG5cbiAgICAgIHZhciB4ID0gdHJhbnNsYXRlSW5pdCxcbiAgICAgICAgICBkaXN0ID0gZ2V0RGlzdChsYXN0UG9zaXRpb24sIGluaXRQb3NpdGlvbik7XG4gICAgICBpZiAoIWhvcml6b250YWwgfHwgZml4ZWRXaWR0aCB8fCBhdXRvV2lkdGgpIHtcbiAgICAgICAgeCArPSBkaXN0O1xuICAgICAgICB4ICs9ICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGVyY2VudGFnZVggPSBUUkFOU0ZPUk0gPyBkaXN0ICogaXRlbXMgKiAxMDAgLyAoKHZpZXdwb3J0ICsgZ3V0dGVyKSAqIHNsaWRlQ291bnROZXcpOiBkaXN0ICogMTAwIC8gKHZpZXdwb3J0ICsgZ3V0dGVyKTtcbiAgICAgICAgeCArPSBwZXJjZW50YWdlWDtcbiAgICAgICAgeCArPSAnJSc7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5zdHlsZVt0cmFuc2Zvcm1BdHRyXSA9IHRyYW5zZm9ybVByZWZpeCArIHggKyB0cmFuc2Zvcm1Qb3N0Zml4O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFuRW5kIChlKSB7XG4gICAgaWYgKHBhblN0YXJ0KSB7XG4gICAgICBpZiAocmFmSW5kZXgpIHtcbiAgICAgICAgY2FmKHJhZkluZGV4KTtcbiAgICAgICAgcmFmSW5kZXggPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGNhcm91c2VsKSB7IHJlc2V0RHVyYXRpb24oY29udGFpbmVyLCAnJyk7IH1cbiAgICAgIHBhblN0YXJ0ID0gZmFsc2U7XG5cbiAgICAgIHZhciAkID0gZ2V0RXZlbnQoZSk7XG4gICAgICBsYXN0UG9zaXRpb24ueCA9ICQuY2xpZW50WDtcbiAgICAgIGxhc3RQb3NpdGlvbi55ID0gJC5jbGllbnRZO1xuICAgICAgdmFyIGRpc3QgPSBnZXREaXN0KGxhc3RQb3NpdGlvbiwgaW5pdFBvc2l0aW9uKTtcblxuICAgICAgaWYgKE1hdGguYWJzKGRpc3QpKSB7XG4gICAgICAgIC8vIGRyYWcgdnMgY2xpY2tcbiAgICAgICAgaWYgKCFpc1RvdWNoRXZlbnQoZSkpIHtcbiAgICAgICAgICAvLyBwcmV2ZW50IFwiY2xpY2tcIlxuICAgICAgICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoZSk7XG4gICAgICAgICAgYWRkRXZlbnRzKHRhcmdldCwgeydjbGljayc6IGZ1bmN0aW9uIHByZXZlbnRDbGljayAoZSkge1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHRCZWhhdmlvcihlKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50cyh0YXJnZXQsIHsnY2xpY2snOiBwcmV2ZW50Q2xpY2t9KTtcbiAgICAgICAgICB9fSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgICAgICByYWZJbmRleCA9IHJhZihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsICYmICFhdXRvV2lkdGgpIHtcbiAgICAgICAgICAgICAgdmFyIGluZGV4TW92ZWQgPSAtIGRpc3QgKiBpdGVtcyAvICh2aWV3cG9ydCArIGd1dHRlcik7XG4gICAgICAgICAgICAgIGluZGV4TW92ZWQgPSBkaXN0ID4gMCA/IE1hdGguZmxvb3IoaW5kZXhNb3ZlZCkgOiBNYXRoLmNlaWwoaW5kZXhNb3ZlZCk7XG4gICAgICAgICAgICAgIGluZGV4ICs9IGluZGV4TW92ZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgbW92ZWQgPSAtICh0cmFuc2xhdGVJbml0ICsgZGlzdCk7XG4gICAgICAgICAgICAgIGlmIChtb3ZlZCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleE1pbjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlZCA+PSBzbGlkZVBvc2l0aW9uc1tzbGlkZUNvdW50TmV3IC0gMV0pIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGluZGV4TWF4O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNsaWRlQ291bnROZXcgJiYgbW92ZWQgPj0gc2xpZGVQb3NpdGlvbnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgIGlmIChtb3ZlZCA+IHNsaWRlUG9zaXRpb25zW2ldICYmIGRpc3QgPCAwKSB7IGluZGV4ICs9IDE7IH1cbiAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyKGUsIGRpc3QpO1xuICAgICAgICAgICAgZXZlbnRzLmVtaXQoaXNUb3VjaEV2ZW50KGUpID8gJ3RvdWNoRW5kJyA6ICdkcmFnRW5kJywgaW5mbyhlKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG1vdmVEaXJlY3Rpb25FeHBlY3RlZCkge1xuICAgICAgICAgICAgb25Db250cm9sc0NsaWNrKGUsIGRpc3QgPiAwID8gLTEgOiAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNldFxuICAgIGlmIChvcHRpb25zLnByZXZlbnRTY3JvbGxPblRvdWNoID09PSAnYXV0bycpIHsgcHJldmVudFNjcm9sbCA9IGZhbHNlOyB9XG4gICAgaWYgKHN3aXBlQW5nbGUpIHsgbW92ZURpcmVjdGlvbkV4cGVjdGVkID0gJz8nOyB9XG4gICAgaWYgKGF1dG9wbGF5ICYmICFhbmltYXRpbmcpIHsgc2V0QXV0b3BsYXlUaW1lcigpOyB9XG4gIH1cblxuICAvLyA9PT0gUkVTSVpFIEZVTkNUSU9OUyA9PT0gLy9cbiAgLy8gKHNsaWRlUG9zaXRpb25zLCBpbmRleCwgaXRlbXMpID0+IHZlcnRpY2FsX2NvbmVudFdyYXBwZXIuaGVpZ2h0XG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnRXcmFwcGVySGVpZ2h0ICgpIHtcbiAgICB2YXIgd3AgPSBtaWRkbGVXcmFwcGVyID8gbWlkZGxlV3JhcHBlciA6IGlubmVyV3JhcHBlcjtcbiAgICB3cC5zdHlsZS5oZWlnaHQgPSBzbGlkZVBvc2l0aW9uc1tpbmRleCArIGl0ZW1zXSAtIHNsaWRlUG9zaXRpb25zW2luZGV4XSArICdweCc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYWdlcyAoKSB7XG4gICAgdmFyIHJvdWdoID0gZml4ZWRXaWR0aCA/IChmaXhlZFdpZHRoICsgZ3V0dGVyKSAqIHNsaWRlQ291bnQgLyB2aWV3cG9ydCA6IHNsaWRlQ291bnQgLyBpdGVtcztcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5jZWlsKHJvdWdoKSwgc2xpZGVDb3VudCk7XG4gIH1cblxuICAvKlxuICAgKiAxLiB1cGRhdGUgdmlzaWJsZSBuYXYgaXRlbXMgbGlzdFxuICAgKiAyLiBhZGQgXCJoaWRkZW5cIiBhdHRyaWJ1dGVzIHRvIHByZXZpb3VzIHZpc2libGUgbmF2IGl0ZW1zXG4gICAqIDMuIHJlbW92ZSBcImhpZGRlblwiIGF0dHJ1YnV0ZXMgdG8gbmV3IHZpc2libGUgbmF2IGl0ZW1zXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVOYXZWaXNpYmlsaXR5ICgpIHtcbiAgICBpZiAoIW5hdiB8fCBuYXZBc1RodW1ibmFpbHMpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAocGFnZXMgIT09IHBhZ2VzQ2FjaGVkKSB7XG4gICAgICB2YXIgbWluID0gcGFnZXNDYWNoZWQsXG4gICAgICAgICAgbWF4ID0gcGFnZXMsXG4gICAgICAgICAgZm4gPSBzaG93RWxlbWVudDtcblxuICAgICAgaWYgKHBhZ2VzQ2FjaGVkID4gcGFnZXMpIHtcbiAgICAgICAgbWluID0gcGFnZXM7XG4gICAgICAgIG1heCA9IHBhZ2VzQ2FjaGVkO1xuICAgICAgICBmbiA9IGhpZGVFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAobWluIDwgbWF4KSB7XG4gICAgICAgIGZuKG5hdkl0ZW1zW21pbl0pO1xuICAgICAgICBtaW4rKztcbiAgICAgIH1cblxuICAgICAgLy8gY2FjaGUgcGFnZXNcbiAgICAgIHBhZ2VzQ2FjaGVkID0gcGFnZXM7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5mbyAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHNsaWRlSXRlbXM6IHNsaWRlSXRlbXMsXG4gICAgICBuYXZDb250YWluZXI6IG5hdkNvbnRhaW5lcixcbiAgICAgIG5hdkl0ZW1zOiBuYXZJdGVtcyxcbiAgICAgIGNvbnRyb2xzQ29udGFpbmVyOiBjb250cm9sc0NvbnRhaW5lcixcbiAgICAgIGhhc0NvbnRyb2xzOiBoYXNDb250cm9scyxcbiAgICAgIHByZXZCdXR0b246IHByZXZCdXR0b24sXG4gICAgICBuZXh0QnV0dG9uOiBuZXh0QnV0dG9uLFxuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgc2xpZGVCeTogc2xpZGVCeSxcbiAgICAgIGNsb25lQ291bnQ6IGNsb25lQ291bnQsXG4gICAgICBzbGlkZUNvdW50OiBzbGlkZUNvdW50LFxuICAgICAgc2xpZGVDb3VudE5ldzogc2xpZGVDb3VudE5ldyxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGluZGV4Q2FjaGVkOiBpbmRleENhY2hlZCxcbiAgICAgIGRpc3BsYXlJbmRleDogZ2V0Q3VycmVudFNsaWRlKCksXG4gICAgICBuYXZDdXJyZW50SW5kZXg6IG5hdkN1cnJlbnRJbmRleCxcbiAgICAgIG5hdkN1cnJlbnRJbmRleENhY2hlZDogbmF2Q3VycmVudEluZGV4Q2FjaGVkLFxuICAgICAgcGFnZXM6IHBhZ2VzLFxuICAgICAgcGFnZXNDYWNoZWQ6IHBhZ2VzQ2FjaGVkLFxuICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgaXNPbjogaXNPbixcbiAgICAgIGV2ZW50OiBlIHx8IHt9LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICcyLjkuMycsXG4gICAgZ2V0SW5mbzogaW5mbyxcbiAgICBldmVudHM6IGV2ZW50cyxcbiAgICBnb1RvOiBnb1RvLFxuICAgIHBsYXk6IHBsYXksXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGlzT246IGlzT24sXG4gICAgdXBkYXRlU2xpZGVySGVpZ2h0OiB1cGRhdGVJbm5lcldyYXBwZXJIZWlnaHQsXG4gICAgcmVmcmVzaDogaW5pdFNsaWRlclRyYW5zZm9ybSxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHJlYnVpbGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRucyhleHRlbmQob3B0aW9ucywgb3B0aW9uc0VsZW1lbnRzKSk7XG4gICAgfVxuICB9O1xufTtcbiIsIlxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1cmdlclRvZ2dsZSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgYnRuSGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkhhbWJ1cmdlcicpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG4gICAgY29uc3QgZmFkZUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhcy1mYWRlJyk7XHJcbiAgICAgICAgXHJcbiAgICBpZigodHlwZW9mIGJ0bkhhbWJ1cmdlciAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKGJ0bkhhbWJ1cmdlciAhPT1udWxsKSkge1xyXG5cclxuICAgICAgYnRuSGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgaWYoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKXsgLy8gQ2xvc2UgSGFtYnVyZ2VyIE1lbnVcclxuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcclxuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7ICAgIFxyXG4gICAgICAgICAgZmFkZUVsZW1zLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgLy8gT3BlbiBIYW1idXJnZXIgTWVudVxyXG4gICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdub3Njcm9sbCcpO1xyXG4gICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuICAgICAgICAgIGZhZGVFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBsZXQgY3VycmVudFZpZXc6IHN0cmluZ1xyXG4gICAgICBcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk4MCkge1xyXG4gICAgICAgIGN1cnJlbnRWaWV3ID0gXCJkZXNrdG9wXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50VmlldyA9IFwibW9iaWxlXCJcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSA5ODAgJiYgY3VycmVudFZpZXcgPT09IFwibW9iaWxlXCIpIHtcclxuICAgICAgICAgIGZhZGVFbGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xyXG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRWaWV3ID0gXCJkZXNrdG9wXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCA5ODAgJiYgY3VycmVudFZpZXcgPT09IFwiZGVza3RvcFwiKSB7XHJcbiAgXHJcbiAgICAgICAgICBmYWRlRWxlbXMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3VycmVudFZpZXcgPSBcIm1vYmlsZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFJlc2l6ZSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgQ1RBYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW1hcnlfX2J1dHRvbicpO1xyXG4gICAgY29uc3QgdGVhc2VyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190ZWFzZXItLWdsYXMnKTtcclxuICAgIGNvbnN0IG1vYmlsZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX3RlYXNlciAuc2VjdGlvbl9faW5uZXJcIilcclxuICAgICAgICBcclxuICAgIGlmKCh0eXBlb2YgQ1RBYnV0dG9uICE9PSBcInVuZGVmaW5lZFwiKSAmJiAoQ1RBYnV0dG9uICE9PW51bGwpICYmICh0eXBlb2YgdGVhc2VyQ2FyZCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgKHRlYXNlckNhcmQgIT09bnVsbCkpIHtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRWaWV3OiBzdHJpbmdcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk4MCkge1xyXG4gICAgICAgICAgdGVhc2VyQ2FyZC5hcHBlbmRDaGlsZChDVEFidXR0b24pXHJcbiAgICAgICAgICBjdXJyZW50VmlldyA9IFwiZGVza3RvcFwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGN1cnJlbnRWaWV3ID0gXCJtb2JpbGVcIlxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID49IDk4MCAmJiBjdXJyZW50VmlldyA9PT0gXCJtb2JpbGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGVhc2VyQ2FyZC5hcHBlbmRDaGlsZChDVEFidXR0b24pXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VmlldyA9IFwiZGVza3RvcFwiXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPCA5ODAgJiYgY3VycmVudFZpZXcgPT09IFwiZGVza3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVWaWV3LmFwcGVuZENoaWxkKENUQWJ1dHRvbilcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRWaWV3ID0gXCJtb2JpbGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgVGlueVNsaWRlclNldHRpbmdzLCB0bnMsIFRpbnlTbGlkZXJJbnN0YW5jZSB9IGZyb20gJ3Rpbnktc2xpZGVyL3NyYy90aW55LXNsaWRlcidcclxuIFxyXG5jb25zdCBnZXRUaW55VHlwZSA9IChzZXBjaWZpY3M6IHN0cmluZywgY2Fyb3VzZWw6IEhUTUxVTGlzdEVsZW1lbnQpID0+IHtcclxuIFxyXG4gY29uc3QgZ2VuZXJhbE9wdGlvbnM6IFRpbnlTbGlkZXJTZXR0aW5ncyA9IHtcclxuICAgY29udGFpbmVyOiBjYXJvdXNlbCxcclxuICAgc3BlZWQ6IDUwMCxcclxuICAgbW91c2VEcmFnOiB0cnVlLFxyXG4gICBuYXZQb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgIGxhenlsb2FkOiBmYWxzZSxcclxuICAgYXJyb3dLZXlzOiB0cnVlLFxyXG4gfVxyXG4gXHJcbiBzd2l0Y2ggKHNlcGNpZmljcykge1xyXG4gXHJcbiBcclxuICAgY2FzZSAnTW9zdFJlYWQnOiB7XHJcbiBcclxuICAgICByZXR1cm4ge1xyXG4gICAgICAgLi4uZ2VuZXJhbE9wdGlvbnMsXHJcbiAgICAgICBjb250cm9sc0NvbnRhaW5lcjogJy5jb250cm9scycsXHJcbiAgICAgICBuYXZBc1RodW1ibmFpbHM6IHRydWUsXHJcbiAgICAgICBndXR0ZXI6IDAsXHJcbiAgICAgICBpdGVtczogMSxcclxuICAgICAgIHNsaWRlQnk6IDEsXHJcbiAgICAgfVxyXG4gICB9XHJcbiB9XHJcbn1cclxuIFxyXG5jb25zdCBzbGlkZXJOb2RlID0gKHNsaWRlclR5cGU6IGFueSwgc2xpZGVyTW9kdWxlOiBFbGVtZW50KSA9PiB7XHJcbiBcclxuIC8vIGdldCBub2RlIGlmIGNvbnRyb2xzQ29udGFpbmVyIGlzIHN0cmluZ1xyXG4gaWYgKHR5cGVvZiBzbGlkZXJUeXBlLmNvbnRyb2xzQ29udGFpbmVyID09PSAnc3RyaW5nJykge1xyXG4gICBjb25zdCBjb250cm9sc05vZGUgPSBzbGlkZXJNb2R1bGUucXVlcnlTZWxlY3RvcihzbGlkZXJUeXBlLmNvbnRyb2xzQ29udGFpbmVyKTtcclxuIFxyXG4gICBpZiAoY29udHJvbHNOb2RlICE9PSBudWxsKSB7XHJcbiAgICAgc2xpZGVyVHlwZS5jb250cm9sc0NvbnRhaW5lciA9IGNvbnRyb2xzTm9kZTtcclxuICAgfVxyXG4gfVxyXG59XHJcbiBcclxuZXhwb3J0IGNvbnN0IHRpbnlTbGlkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2Fyb3VzZWxNb3N0UmVhZDogSFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1zbGlkZXInKTtcclxuICBsZXQgbW9zdFJlYWRTbGlkZXI6IFRpbnlTbGlkZXJJbnN0YW5jZVxyXG5cclxuICBpZiAoY2Fyb3VzZWxNb3N0UmVhZCAhPT0gbnVsbCkge1xyXG4gICAgbGV0IHNsaWRlck9wdGlvbnNNb3N0UmVhZDogVGlueVNsaWRlclNldHRpbmdzID0gZ2V0VGlueVR5cGUoJ01vc3RSZWFkJywgY2Fyb3VzZWxNb3N0UmVhZClcclxuICAgIHNsaWRlck5vZGUoc2xpZGVyT3B0aW9uc01vc3RSZWFkLCBjYXJvdXNlbE1vc3RSZWFkKVxyXG4gICAgbW9zdFJlYWRTbGlkZXIgPSB0bnMoc2xpZGVyT3B0aW9uc01vc3RSZWFkKVxyXG4gIH1cclxufVxyXG4gXHJcblxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IHRhYlRvZ2dsZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB0YWJjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX19jb250YWluZXJcIik7XHJcblxyXG4gICAgaWYoKHR5cGVvZiB0YWJjb250ZW50ICE9PSBcInVuZGVmaW5lZFwiKSAmJiAodGFiY29udGVudCAhPT1udWxsKSkge1xyXG5cclxuICAgICAgICBjb25zdCB0YWJMaW5rczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYkxpbmtzXCIpO1xyXG4gICAgICAgIGNvbnN0IHRhYlBhbmVsczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYkNvbnRlbnRcIik7XHJcblxyXG4gICAgICAgIHRhYlBhbmVsc1swXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgdGFiTGlua3NbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG5cclxuICAgICAgICB0YWJMaW5rcy5mb3JFYWNoKCh0YWI6SFRNTERpdkVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIXRhYlBhbmVsc1tpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhYlBhbmVscy5mb3JFYWNoKChwYW5lbDpIVE1MRGl2RWxlbWVudCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiTGlua3NbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYlBhbmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzLXBhbmVsLmFjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgcGFyZW50TGlzdEl0ZW0gPSB0YWIucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIC8vcGFyZW50TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc3QgaW5kZXggPSBbLi4ucGFyZW50TGlzdEl0ZW0ucGFyZW50RWxlbWVudC5jaGlsZHJlbl0uaW5kZXhPZihwYXJlbnRMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBwYW5lbCA9IFsuLi50YWJQYW5lbHNdLmZpbHRlcih0YWIgPT4gdGFiLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikgPT0gaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgLy9wYW5lbFswXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCBmaXhIZWFkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci13cmFwcGVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlRml4SGVhZGVyKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gODUpIHtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItd3JhcHBlci0tZml4Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItd3JhcHBlci0tZml4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgaWYoKHR5cGVvZiBoZWFkZXIgIT09IFwidW5kZWZpbmVkXCIpICYmIChoZWFkZXIgIT09bnVsbCkpIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZUZpeEhlYWRlcik7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxyXG5cclxuXHJcbmltcG9ydCBcIi4vc2Nzcy9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9zY3NzL2Fzc2V0cy9pbWFnZXMvYmx1c2gtdmlzdWFsLnBuZ1wiXHJcbmltcG9ydCBcIi4uL3NyYy9zY3NzL2Fzc2V0cy9pbWFnZXMvcGVyZnVtZS1wcm9kdWN0LnBuZ1wiXHJcbmltcG9ydCBcInRpbnktc2xpZGVyL3NyYy90aW55LXNsaWRlci5tb2R1bGUuanNcIlxyXG5cclxuaW1wb3J0IHsgdGlueVNsaWRlciB9IGZyb20gXCIuL3Njc3MvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdHNsaWRlclwiXHJcbmltcG9ydCB7IHRhYlRvZ2dsZSB9IGZyb20gXCIuL3Njc3MvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1kZXRhaWwvdGFic1wiXHJcblxyXG5pbXBvcnQgeyBidXJnZXJUb2dnbGUgfSBmcm9tIFwiLi4vc3JjL3Njc3MvY29tcG9uZW50cy9hdG9tcy9idXR0b25zL2J1cmdlclwiXHJcbmltcG9ydCB7IGNhcmRSZXNpemUgfSBmcm9tIFwiLi4vc3JjL3Njc3MvY29tcG9uZW50cy9tb2xlY3VsZXMvY2FyZFwiXHJcbmltcG9ydCB7IGZpeEhlYWRlciB9IGZyb20gXCIuLi9zcmMvc2Nzcy9jb21wb25lbnRzL29yZ2FuaXNtcy9oZWFkZXIvaGVhZGVyXCJcclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk6IHZvaWQgPT4ge1xyXG4gICAgYnVyZ2VyVG9nZ2xlKClcclxuICAgIGNhcmRSZXNpemUoKVxyXG4gICAgZml4SGVhZGVyKClcclxuICAgIHRpbnlTbGlkZXIoKVxyXG4gICAgdGFiVG9nZ2xlKClcclxufSkiXSwic291cmNlUm9vdCI6IiJ9