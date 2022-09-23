/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-main-bg: #e9ecef;\n    --color-seconday: #2a9d8f;\n    --color-secondary-bg: #e76f51;\n    --color-teritary-bg: #264653;\n  }\n  \n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    background-color: var(--color-main-bg);\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    font-family: 'Poppins', sans-serif;\n  }\n  \n  .nav {\n    background-color: var(--color-secondary-bg);\n    position: fixed;\n    top: 0;\n    padding: 15px 30px;\n    width: 100%;\n    z-index: 2;\n  }\n  .nav__title {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n  }\n  .main {\n    position: relative;\n    height: 100vh;\n    width: 100vw;\n    padding-top: 65px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n  }\n  .main > .left {\n    background-color: var(--color-teritary-bg);\n    padding: 20px 30px;\n  }\n  .main > .left .top {\n    margin-top: 20px;\n    margin-bottom: 40px;\n  }\n  .today {\n    font-size: 18px;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    border-radius: 5px;\n    padding: 5px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .today:hover {\n    background-color: #e76f51;\n  }\n  .project-name {\n    text-transform: uppercase;\n  }\n  .projects-list__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .projects-list__header h3 {\n    font-weight: 300;\n  }\n  .projects-list__header .left {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    padding: 5px;\n  }\n  .projects__icon,\n  .today__icon {\n    cursor: pointer;\n    font-size: 17px;\n  }\n  .main > .projects {\n    color: #444;\n    padding: 20px 30px;\n  }\n  .btn {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    font-family: inherit;\n    cursor: pointer;\n    font-weight: 600;\n  }\n  .btn--add-todo {\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    font-weight: 500;\n    margin-top: 15px;\n  }\n  .btn--add-todo:hover {\n    color: var(--color-seconday);\n  }\n  .project-name {\n    margin-bottom: 10px;\n  }\n  .add-todo-form {\n    width: 400px;\n    margin: auto;\n  }\n  .edit-todo-form {\n    width: 600px;\n  }\n  .add-todo-form label,\n  .edit-todo-form label {\n    font-weight: 500;\n    display: block;\n    margin-bottom: 5px;\n    color: rgb(22, 22, 22);\n  }\n  .add-todo-form input,\n  .add-todo-form textarea,\n  .two-input select,\n  .edit-todo-form input,\n  .edit-todo-form textarea,\n  .edit-input select {\n    width: 100%;\n    padding: 10px 20px;\n    background-color: transparent;\n    outline: none;\n    border: 1px solid var(--color-teritary-bg);\n    border-radius: 5px;\n    font-family: inherit;\n    font-size: 16px;\n  }\n  .add-todo-form textarea,\n  .edit-todo-form textarea {\n    resize: none;\n  }\n  .add-todo-form ul,\n  .edit-todo-form ul {\n    list-style: none;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n  }\n  .add-todo-form .two-input,\n  .edit-todo-form .two-input {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .add-todo-form input::placeholder,\n  .add-todo-form textarea::placeholder {\n    color: rgb(92, 92, 92);\n  }\n  .form__btn-add,\n  .form__btn-cancle,\n  .form__btn-save {\n    padding: 7px 10px;\n    color: white;\n    border-radius: 5px;\n    margin-top: 10px;\n  }\n  .form__btn-add,\n  .form__btn-save {\n    background-color: var(--color-seconday);\n  }\n  .form__btn-cancle {\n    background-color: var(--color-secondary-bg);\n  }\n  .projects__list {\n    list-style: none;\n    padding-left: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n  }\n  .projects__list li {\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    text-transform: capitalize;\n  }\n  \n  .btn-delete-project {\n    display: inline-block;\n    margin-left: auto;\n  }\n  .projects__list li:hover {\n    background-color: #e76f51;\n  }\n  .project__icon {\n    cursor: pointer;\n  }\n  .todo-container {\n    border: 1px solid rgba(192, 192, 192, 0.836);\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n    padding: 10px;\n    margin-bottom: 10px;\n  }\n  \n  .todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 18px;\n  }\n  .todo__title {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n  }\n  .todo__controls {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  .projects-list__container {\n    width: 100%;\n  }\n  .done-icon,\n  .edit-icon,\n  .details-icon,\n  .date-icon {\n    cursor: pointer;\n  }\n  .add-project-form {\n    gap: 5px;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    margin-top: 8px;\n  }\n  .add-project-form input {\n    border-radius: 5px;\n    width: 100%;\n    outline: none;\n    border: 1px solid #eee;\n    color: white;\n    background-color: transparent;\n    padding: 5px 10px;\n    font-family: inherit;\n  }\n  .add-project-form input::placeholder {\n    color: rgb(185, 185, 185);\n  }\n  .btn-add-project {\n    color: white;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #2a9d8f;\n  }\n  \n  .modal {\n    width: 450px;\n    background-color: #e9ecef;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 30px 0;\n    border-radius: 5px;\n    z-index: 3;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n  \n  .overlay {\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.664);\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n  }\n  .todo__description {\n    margin-bottom: 10px;\n  }\n  .todo__description + div {\n    display: flex;\n    gap: 50%;\n  }\n  .todo__details,\n  .todo__edit {\n    margin-top: 10px;\n  }\n  \n  .priority-1 {\n    border-left: 5px solid #f73232;\n  }\n  .priority-2 {\n    border-left: 5px solid #facc15;\n  }\n  .priority-3 {\n    border-left: 5px solid #22c55e;\n  }\n  .hidden {\n    display: none;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-main-bg: #e9ecef;\n    --color-seconday: #2a9d8f;\n    --color-secondary-bg: #e76f51;\n    --color-teritary-bg: #264653;\n  }\n  \n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  \n  body {\n    background-color: var(--color-main-bg);\n    color: white;\n    height: 100vh;\n    width: 100vw;\n    font-family: 'Poppins', sans-serif;\n  }\n  \n  .nav {\n    background-color: var(--color-secondary-bg);\n    position: fixed;\n    top: 0;\n    padding: 15px 30px;\n    width: 100%;\n    z-index: 2;\n  }\n  .nav__title {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n  }\n  .main {\n    position: relative;\n    height: 100vh;\n    width: 100vw;\n    padding-top: 65px;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n  }\n  .main > .left {\n    background-color: var(--color-teritary-bg);\n    padding: 20px 30px;\n  }\n  .main > .left .top {\n    margin-top: 20px;\n    margin-bottom: 40px;\n  }\n  .today {\n    font-size: 18px;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    border-radius: 5px;\n    padding: 5px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .today:hover {\n    background-color: #e76f51;\n  }\n  .project-name {\n    text-transform: uppercase;\n  }\n  .projects-list__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .projects-list__header h3 {\n    font-weight: 300;\n  }\n  .projects-list__header .left {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    padding: 5px;\n  }\n  .projects__icon,\n  .today__icon {\n    cursor: pointer;\n    font-size: 17px;\n  }\n  .main > .projects {\n    color: #444;\n    padding: 20px 30px;\n  }\n  .btn {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    font-family: inherit;\n    cursor: pointer;\n    font-weight: 600;\n  }\n  .btn--add-todo {\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    font-weight: 500;\n    margin-top: 15px;\n  }\n  .btn--add-todo:hover {\n    color: var(--color-seconday);\n  }\n  .project-name {\n    margin-bottom: 10px;\n  }\n  .add-todo-form {\n    width: 400px;\n    margin: auto;\n  }\n  .edit-todo-form {\n    width: 600px;\n  }\n  .add-todo-form label,\n  .edit-todo-form label {\n    font-weight: 500;\n    display: block;\n    margin-bottom: 5px;\n    color: rgb(22, 22, 22);\n  }\n  .add-todo-form input,\n  .add-todo-form textarea,\n  .two-input select,\n  .edit-todo-form input,\n  .edit-todo-form textarea,\n  .edit-input select {\n    width: 100%;\n    padding: 10px 20px;\n    background-color: transparent;\n    outline: none;\n    border: 1px solid var(--color-teritary-bg);\n    border-radius: 5px;\n    font-family: inherit;\n    font-size: 16px;\n  }\n  .add-todo-form textarea,\n  .edit-todo-form textarea {\n    resize: none;\n  }\n  .add-todo-form ul,\n  .edit-todo-form ul {\n    list-style: none;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n  }\n  .add-todo-form .two-input,\n  .edit-todo-form .two-input {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  .add-todo-form input::placeholder,\n  .add-todo-form textarea::placeholder {\n    color: rgb(92, 92, 92);\n  }\n  .form__btn-add,\n  .form__btn-cancle,\n  .form__btn-save {\n    padding: 7px 10px;\n    color: white;\n    border-radius: 5px;\n    margin-top: 10px;\n  }\n  .form__btn-add,\n  .form__btn-save {\n    background-color: var(--color-seconday);\n  }\n  .form__btn-cancle {\n    background-color: var(--color-secondary-bg);\n  }\n  .projects__list {\n    list-style: none;\n    padding-left: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n  }\n  .projects__list li {\n    border-radius: 5px;\n    padding: 5px;\n    cursor: pointer;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    text-transform: capitalize;\n  }\n  \n  .btn-delete-project {\n    display: inline-block;\n    margin-left: auto;\n  }\n  .projects__list li:hover {\n    background-color: #e76f51;\n  }\n  .project__icon {\n    cursor: pointer;\n  }\n  .todo-container {\n    border: 1px solid rgba(192, 192, 192, 0.836);\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n    padding: 10px;\n    margin-bottom: 10px;\n  }\n  \n  .todo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 18px;\n  }\n  .todo__title {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n  }\n  .todo__controls {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  .projects-list__container {\n    width: 100%;\n  }\n  .done-icon,\n  .edit-icon,\n  .details-icon,\n  .date-icon {\n    cursor: pointer;\n  }\n  .add-project-form {\n    gap: 5px;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    margin-top: 8px;\n  }\n  .add-project-form input {\n    border-radius: 5px;\n    width: 100%;\n    outline: none;\n    border: 1px solid #eee;\n    color: white;\n    background-color: transparent;\n    padding: 5px 10px;\n    font-family: inherit;\n  }\n  .add-project-form input::placeholder {\n    color: rgb(185, 185, 185);\n  }\n  .btn-add-project {\n    color: white;\n    padding: 5px;\n    border-radius: 5px;\n    background-color: #2a9d8f;\n  }\n  \n  .modal {\n    width: 450px;\n    background-color: #e9ecef;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 30px 0;\n    border-radius: 5px;\n    z-index: 3;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n  \n  .overlay {\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.664);\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;\n  }\n  .todo__description {\n    margin-bottom: 10px;\n  }\n  .todo__description + div {\n    display: flex;\n    gap: 50%;\n  }\n  .todo__details,\n  .todo__edit {\n    margin-top: 10px;\n  }\n  \n  .priority-1 {\n    border-left: 5px solid #f73232;\n  }\n  .priority-2 {\n    border-left: 5px solid #facc15;\n  }\n  .priority-3 {\n    border-left: 5px solid #22c55e;\n  }\n  .hidden {\n    display: none;\n  }"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
  } // For old IE

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

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });

function project(name) {
  this.name = name;
  this.todos = [];
}


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });


const storage = (() => {
  const saveTodo = (projectName, todo) => {
    const projectTodos = JSON.parse(localStorage.getItem('projectTodos')) || {};
    if (!projectTodos[projectName]) {
      projectTodos[projectName] = [];
    }
    projectTodos[projectName].push(todo);
    localStorage.setItem('projectTodos', JSON.stringify(projectTodos));
  };
  const deleteTodo = (projectName, index) => {
    const projectTodos = JSON.parse(localStorage.getItem('projectTodos'));
    projectTodos[projectName].splice(index, 1);
    localStorage.setItem('projectTodos', JSON.stringify(projectTodos));
    return {};
  };
  const retriveTodos = projectName => {
    const pTodos = JSON.parse(localStorage.getItem('projectTodos'));
    return pTodos[projectName];
  };

  const saveProject = project => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    if (!projects.some(p => p.name === project.name)) {
      projects.push(project);
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  };
  const deleteProject = index => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  };
  const retriveProjects = () => {
    return JSON.parse(localStorage.getItem('projects'));
  };
  return {
    saveTodo,
    retriveTodos,
    deleteTodo,
    saveProject,
    retriveProjects,
    deleteProject,
  };
})();



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });


function todo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}



/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './todoList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");







const today = new _project__WEBPACK_IMPORTED_MODULE_0__.project('today');
Object(function webpackMissingModule() { var e = new Error("Cannot find module './todoList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(today);

let currentProject = today;

const ui = (() => {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  // Buttons
  const btnAddTodo = document.querySelector('.btn--add-todo');
  const btnCancle = document.querySelector('.form__btn-cancle');
  const btnAddProject = document.querySelector('.btn--add-project');
  const btnProjectsExpand = document.querySelector('.btn--expand');
  // Lables
  const projectNameEl = document.querySelector('.project-name');
  const todayEl = document.querySelector('.today');
  // Form
  const formAddTodo = document.querySelector('.add-todo-form');
  const fromAddProject = document.querySelector('.add-project-form');
  // Inputs
  const inputTodoTitle = document.querySelector('#todo-title');
  const inputTodoDescription = document.querySelector('#todo-description');
  const inputTodoDate = document.querySelector('#todo-date');
  const inputTodoPriority = document.querySelector('#todo-priority');
  const inputProjectName = document.querySelector('#project__name');
  // Containers
  const projectsTodos = document.querySelector('.projects-todos');
  const projectListContainer = document.querySelector('.projects__list');
  const init = () => {
    projectNameEl.textContent = currentProject.name;
    // Event Listeners
    btnAddTodo.addEventListener('click', showModal);
    btnCancle.addEventListener('click', hideModal);
    btnAddProject.addEventListener('click', () => {
      fromAddProject.classList.toggle('hidden');
    });
    btnProjectsExpand.addEventListener('click', () => {
      projectListContainer.classList.toggle('hidden');
    });
    fromAddProject.addEventListener('submit', addNewProject);
    todayEl.addEventListener('click', () => {
      currentProject = Object(function webpackMissingModule() { var e = new Error("Cannot find module './todoList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('today');
      ShowTodos(currentProject);
    });
    formAddTodo.addEventListener('submit', addNewTodo);
    showProjects();
    ShowTodos(today);
  };

  const showModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  const hideModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  };

  // Add New to-do
  const addNewTodo = e => {
    e.preventDefault();
    const todoTitle = inputTodoTitle.value;
    const todoDescription = inputTodoDescription.value;
    const todoDate = inputTodoDate.value.split('-').reverse().join('/');
    const todoPriority = +inputTodoPriority.value;
    hideModal();
    formAddTodo.reset();
    const todo = new todo(todoTitle, todoDescription, todoDate, todoPriority);
    // currentProject.todos.push(
    //   new to-do(todoTitle, todoDescription, todoDate, todoPriority)
    // );

    // local Stroage
    _storage__WEBPACK_IMPORTED_MODULE_3__.storage.saveTodo(currentProject.name, todo);
    // Save new to-do to local storage
    ShowTodos(currentProject);
  };

  // Edit to-do function
  const editTodo = e => {
    e.preventDefault();
    const todoTitle = document.getElementById('todo-title-ed').value;
    const todoDescription = document.getElementById(
      'todo-description-ed'
    ).value;
    const todoDate = document
      .getElementById('todo-date-ed')
      .value.split('-')
      .reverse()
      .join('/');
    const todoPriority = +document.getElementById('todo-priority-ed').value;
    const index = e.target.parentElement.dataset.index;
    // Delete todo from local Stroage
    const todo = _storage__WEBPACK_IMPORTED_MODULE_3__.storage.deleteTodo(currentProject.name, +index);
    deleteTodoFromUI(index);
    todo.title = todoTitle;
    todo.description = todoDescription;
    todo.dueDate = todoDate;
    todo.priority = todoPriority;
    // Add todo to local storage
    _storage__WEBPACK_IMPORTED_MODULE_3__.storage.saveTodo(currentProject.name, todo);
    e.target.parentElement.classList.toggle('hidden');
    ShowTodos(currentProject);
  };

  // Disaply All Dodos for a project
  const ShowTodos = project => {
    projectNameEl.textContent = project.name;
    // Get all Todos from this projects
    const todos =
      _storage__WEBPACK_IMPORTED_MODULE_3__.storage.retriveTodos(project.name)?.sort(
        (t1, t2) => t2.priority - t1.priority
      ) || [];
    console.log(todos);
    projectsTodos.innerHTML = '';
    for (const [index, todo] of todos.entries()) {
      const html = `<div class="todo-container priority-${
        todo.priority
      }" data-id="${index}">
      <div class="todo">
        <div class="todo__title">
          <i class="fa-regular fa-circle-check done-icon" data-done=${index} title="Done" ></i>
          <span class="todo__text">${todo.title}</span>
        </div>
        <div class="todo__controls">
          <i class="fa-regular fa-pen-to-square edit-icon"  data-edit="${index}" title="Edit Task"></i>
          <i class="fa-solid fa-circle-info details-icon" data-details="${index}" title="Task Details" ></i>
        </div>
      </div>
      <div class="todo__details hidden" data-index="${index}">
        <div class="todo__description">
          <h4>Description</h4>
          <p>
           ${todo.description}
          </p>
        </div>
        <div>
          <div class="todo__date">
            <h4>Date</h4>
            <p>${todo.dueDate}</p>
          </div>
          <div class="todo__priority">
            <h4>Priority</h4>
            <p>Level ${todo.priority}</p>
          </div>
        </div>
      </div>
      <div class="todo__edit hidden" data-index="${index}">
              <form class="edit-todo-form">
                <ul>
                  <li>
                    <label for="todo-title-ed">Task Title</label>
                    <input type="text" id="todo-title-ed"  value="${
                      todo.title
                    }" required />
                  </li>
                  <li>
                    <label for="todo-decription-ed">Task Description</label>
                    <textarea
                      name=""
                      id="todo-description-ed"
                      cols="30"
                      rows="5"
                      required
                    > ${todo.description}</textarea>
                  </li>
                  <li class="two-input">
                    <div>
                      <label for="todo-date-ed">Task Date</label>
                      <input type="date"  id="todo-date-ed" value="${todo.dueDate
                        .split('/')
                        .reverse()
                        .join('-')}" required />
                    </div>
                    <div>
                      <label for="todo-priority-ed">Task Priority</label>
                      <select name="" id="todo-priority-ed" required>
                        <option value="${todo.priority}"  disabled selected>
                        Pirority ${todo.priority} </option>
                        <option value="1">Pirority 1</option>
                        <option value="2">Pirority 2</option>
                        <option value="3">Pirority 3</option>
                      </select>
                    </div>
                  </li>
                </ul>
                <button class="btn form__btn-save" type="submit">Save</button>
              </form>
            </div>
    </div>`;
      projectsTodos.insertAdjacentHTML('afterbegin', html);
    }
    // Deatils Buttons
    projectsTodos.querySelectorAll('.details-icon').forEach(detailsIcon => {
      detailsIcon.addEventListener('click', e => {
        const index = e.target.dataset.details;
        const todoDeatils = [
          ...document.querySelectorAll('.todo__details'),
        ].find(todoDeatils => todoDeatils.dataset.index === index);
        const todoEdit = [...document.querySelectorAll('.todo__edit')].find(
          todoEdit => todoEdit.dataset.index === index
        );
        // hide && show todo details
        todoDeatils.classList.toggle('hidden');
        // hide && show todo Edit
        todoEdit.classList.add('hidden');
      });
    });
    // Done Button
    projectsTodos.querySelectorAll('.done-icon').forEach(doneIcon => {
      doneIcon.addEventListener('click', e => {
        const index = e.target.dataset.done;
        // remove todo from current project
        //currentProject.todos.splice(index, 1);
        _storage__WEBPACK_IMPORTED_MODULE_3__.storage.deleteTodo(currentProject.name, +index);
        deleteTodoFromUI(index);
      });
    });
    // Edit Button
    projectsTodos.querySelectorAll('.edit-icon').forEach(editIcon => {
      editIcon.addEventListener('click', e => {
        const index = e.target.dataset.edit;
        const todoEdit = [...document.querySelectorAll('.todo__edit')].find(
          todoEdit => todoEdit.dataset.index === index
        );
        const todoDeatils = [
          ...document.querySelectorAll('.todo__details'),
        ].find(todoDeatils => todoDeatils.dataset.index === index);
        // hide && show todo details
        todoEdit.classList.toggle('hidden');
        // hide && show todo details
        todoDeatils.classList.add('hidden');
      });
    });
    // Edit Form
    projectsTodos.querySelectorAll('.edit-todo-form').forEach(editForm => {
      editForm.addEventListener('submit', editTodo);
    });
  };

  const deleteTodoFromUI = index => {
    const todoContainer = [
      ...projectsTodos.querySelectorAll('.todo-container'),
    ].find(tc => tc.dataset.id === index);
    // remove todo from current project ui
    projectsTodos.removeChild(todoContainer);
  };

  // Add new project
  const addNewProject = e => {
    e.preventDefault();
    const projectName = inputProjectName.value.toLowerCase();
    if (projectName !== ' ') {
      fromAddProject.classList.toggle('hidden');
      // Create new project
      const project = new project(projectName);
      Object(function webpackMissingModule() { var e = new Error("Cannot find module './todoList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(project);
      showProjects();
      ShowTodos(project);
      e.target.reset();
    }
  };
  // Display All Projects
  const showProjects = () => {
    // Get all Projects From local storage
    const projects = Object(function webpackMissingModule() { var e = new Error("Cannot find module './todoList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())() || [];
    projectListContainer.innerHTML = '';
    for (const [index, project] of projects.entries()) {
      if (project.name === 'today') continue;
      const li = `<li><i class="fa-solid fa-list-check"></i>${project.name}<i class="fa-solid fa-trash btn-delete-project" title="Delete" data-index="${index}"></i></li>`;
      projectListContainer.insertAdjacentHTML('afterbegin', li);
    }
    // showing project's todo
    document.querySelectorAll('.projects__list li').forEach(li => {
      li.addEventListener('click', () => {
        const projectName = li.textContent.toLowerCase();
        currentProject = Object(function webpackMissingModule() { var e = new Error("Cannot find module './todoList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(projectName) || today;
        ShowTodos(currentProject);
      });
    });
    // Delete proejct
    document.querySelectorAll('.btn-delete-project').forEach(delteButton => {
      delteButton.addEventListener('click', e => {
        const index = e.target.dataset.index;
        Object(function webpackMissingModule() { var e = new Error("Cannot find module './todoList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(+index);
        showProjects();
      });
    });
  };

  return { init };
})();



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ "./src/modules/ui.js");





_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.ui.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBYTs7QUFFUTtBQUNnQjs7QUFFckMsbURBQU8sRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItbWFpbi1iZzogI2U5ZWNlZjtcXG4gICAgLS1jb2xvci1zZWNvbmRheTogIzJhOWQ4ZjtcXG4gICAgLS1jb2xvci1zZWNvbmRhcnktYmc6ICNlNzZmNTE7XFxuICAgIC0tY29sb3ItdGVyaXRhcnktYmc6ICMyNjQ2NTM7XFxuICB9XFxuICBcXG4gICoge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICBcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJnKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICB9XFxuICBcXG4gIC5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktYmcpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG4gIC5uYXZfX3RpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZy10b3A6IDY1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIH1cXG4gIC5tYWluID4gLmxlZnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXJpdGFyeS1iZyk7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIH1cXG4gIC5tYWluID4gLmxlZnQgLnRvcCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICB9XFxuICAudG9kYXkge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC50b2RheTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzZmNTE7XFxuICB9XFxuICAucHJvamVjdC1uYW1lIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIH1cXG4gIC5wcm9qZWN0cy1saXN0X19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAucHJvamVjdHMtbGlzdF9faGVhZGVyIGgzIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIH1cXG4gIC5wcm9qZWN0cy1saXN0X19oZWFkZXIgLmxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG4gIC5wcm9qZWN0c19faWNvbixcXG4gIC50b2RheV9faWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgfVxcbiAgLm1haW4gPiAucHJvamVjdHMge1xcbiAgICBjb2xvcjogIzQ0NDtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgfVxcbiAgLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuICAuYnRuLS1hZGQtdG9kbyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICB9XFxuICAuYnRuLS1hZGQtdG9kbzpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRheSk7XFxuICB9XFxuICAucHJvamVjdC1uYW1lIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC5hZGQtdG9kby1mb3JtIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuICAuZWRpdC10b2RvLWZvcm0ge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICB9XFxuICAuYWRkLXRvZG8tZm9ybSBsYWJlbCxcXG4gIC5lZGl0LXRvZG8tZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XFxuICB9XFxuICAuYWRkLXRvZG8tZm9ybSBpbnB1dCxcXG4gIC5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbiAgLnR3by1pbnB1dCBzZWxlY3QsXFxuICAuZWRpdC10b2RvLWZvcm0gaW5wdXQsXFxuICAuZWRpdC10b2RvLWZvcm0gdGV4dGFyZWEsXFxuICAuZWRpdC1pbnB1dCBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGVyaXRhcnktYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxuICAuYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYSxcXG4gIC5lZGl0LXRvZG8tZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gIH1cXG4gIC5hZGQtdG9kby1mb3JtIHVsLFxcbiAgLmVkaXQtdG9kby1mb3JtIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmFkZC10b2RvLWZvcm0gLnR3by1pbnB1dCxcXG4gIC5lZGl0LXRvZG8tZm9ybSAudHdvLWlucHV0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuICAuYWRkLXRvZG8tZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuICAuYWRkLXRvZG8tZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xcbiAgfVxcbiAgLmZvcm1fX2J0bi1hZGQsXFxuICAuZm9ybV9fYnRuLWNhbmNsZSxcXG4gIC5mb3JtX19idG4tc2F2ZSB7XFxuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG4gIC5mb3JtX19idG4tYWRkLFxcbiAgLmZvcm1fX2J0bi1zYXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXkpO1xcbiAgfVxcbiAgLmZvcm1fX2J0bi1jYW5jbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktYmcpO1xcbiAgfVxcbiAgLnByb2plY3RzX19saXN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuICAucHJvamVjdHNfX2xpc3QgbGkge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgfVxcbiAgXFxuICAuYnRuLWRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIH1cXG4gIC5wcm9qZWN0c19fbGlzdCBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzZmNTE7XFxuICB9XFxuICAucHJvamVjdF9faWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC50b2RvLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTkyLCAxOTIsIDE5MiwgMC44MzYpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuICAudG9kb19fdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAudG9kb19fY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuICAucHJvamVjdHMtbGlzdF9fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuZG9uZS1pY29uLFxcbiAgLmVkaXQtaWNvbixcXG4gIC5kZXRhaWxzLWljb24sXFxuICAuZGF0ZS1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICB9XFxuICAuYWRkLXByb2plY3QtZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xcbiAgfVxcbiAgLmJ0bi1hZGQtcHJvamVjdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTlkOGY7XFxuICB9XFxuICBcXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgcGFkZGluZzogMzBweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgfVxcbiAgXFxuICAub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY2NCk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcbiAgLnRvZG9fX2Rlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC50b2RvX19kZXNjcmlwdGlvbiArIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTAlO1xcbiAgfVxcbiAgLnRvZG9fX2RldGFpbHMsXFxuICAudG9kb19fZWRpdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICB9XFxuICBcXG4gIC5wcmlvcml0eS0xIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZjczMjMyO1xcbiAgfVxcbiAgLnByaW9yaXR5LTIge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmYWNjMTU7XFxuICB9XFxuICAucHJpb3JpdHktMyB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzIyYzU1ZTtcXG4gIH1cXG4gIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSwwQ0FBMEM7SUFDMUMsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFD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QVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsUUFBUTtFQUNWO0VBQ0E7O0lBRUUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsYUFBYTtFQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1tYWluLWJnOiAjZTllY2VmO1xcbiAgICAtLWNvbG9yLXNlY29uZGF5OiAjMmE5ZDhmO1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeS1iZzogI2U3NmY1MTtcXG4gICAgLS1jb2xvci10ZXJpdGFyeS1iZzogIzI2NDY1MztcXG4gIH1cXG4gIFxcbiAgKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIH1cXG4gIFxcbiAgLm5hdiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcbiAgLm5hdl9fdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubWFpbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgfVxcbiAgLm1haW4gPiAubGVmdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcml0YXJ5LWJnKTtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgfVxcbiAgLm1haW4gPiAubGVmdCAudG9wIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIH1cXG4gIC50b2RheSB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLnRvZGF5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NmY1MTtcXG4gIH1cXG4gIC5wcm9qZWN0LW5hbWUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgfVxcbiAgLnByb2plY3RzLWxpc3RfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5wcm9qZWN0cy1saXN0X19oZWFkZXIgaDMge1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgfVxcbiAgLnByb2plY3RzLWxpc3RfX2hlYWRlciAubGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLnByb2plY3RzX19pY29uLFxcbiAgLnRvZGF5X19pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICB9XFxuICAubWFpbiA+IC5wcm9qZWN0cyB7XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICB9XFxuICAuYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG4gIC5idG4tLWFkZC10b2RvIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gIH1cXG4gIC5idG4tLWFkZC10b2RvOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGF5KTtcXG4gIH1cXG4gIC5wcm9qZWN0LW5hbWUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLmFkZC10b2RvLWZvcm0ge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG4gIC5lZGl0LXRvZG8tZm9ybSB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gIH1cXG4gIC5hZGQtdG9kby1mb3JtIGxhYmVsLFxcbiAgLmVkaXQtdG9kby1mb3JtIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgY29sb3I6IHJnYigyMiwgMjIsIDIyKTtcXG4gIH1cXG4gIC5hZGQtdG9kby1mb3JtIGlucHV0LFxcbiAgLmFkZC10b2RvLWZvcm0gdGV4dGFyZWEsXFxuICAudHdvLWlucHV0IHNlbGVjdCxcXG4gIC5lZGl0LXRvZG8tZm9ybSBpbnB1dCxcXG4gIC5lZGl0LXRvZG8tZm9ybSB0ZXh0YXJlYSxcXG4gIC5lZGl0LWlucHV0IHNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci10ZXJpdGFyeS1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG4gIC5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbiAgLmVkaXQtdG9kby1mb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgfVxcbiAgLmFkZC10b2RvLWZvcm0gdWwsXFxuICAuZWRpdC10b2RvLWZvcm0gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuYWRkLXRvZG8tZm9ybSAudHdvLWlucHV0LFxcbiAgLmVkaXQtdG9kby1mb3JtIC50d28taW5wdXQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG4gIC5hZGQtdG9kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4gIC5hZGQtdG9kby1mb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XFxuICB9XFxuICAuZm9ybV9fYnRuLWFkZCxcXG4gIC5mb3JtX19idG4tY2FuY2xlLFxcbiAgLmZvcm1fX2J0bi1zYXZlIHtcXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcbiAgLmZvcm1fX2J0bi1hZGQsXFxuICAuZm9ybV9fYnRuLXNhdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRheSk7XFxuICB9XFxuICAuZm9ybV9fYnRuLWNhbmNsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxuICB9XFxuICAucHJvamVjdHNfX2xpc3Qge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG4gIC5wcm9qZWN0c19fbGlzdCBsaSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB9XFxuICBcXG4gIC5idG4tZGVsZXRlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgfVxcbiAgLnByb2plY3RzX19saXN0IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NmY1MTtcXG4gIH1cXG4gIC5wcm9qZWN0X19pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLnRvZG8tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjgzNik7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG4gIC50b2RvX190aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC50b2RvX19jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG4gIC5wcm9qZWN0cy1saXN0X19jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5kb25lLWljb24sXFxuICAuZWRpdC1pY29uLFxcbiAgLmRldGFpbHMtaWNvbixcXG4gIC5kYXRlLWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAuYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICB9XFxuICAuYWRkLXByb2plY3QtZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIH1cXG4gIC5hZGQtcHJvamVjdC1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxuICB9XFxuICAuYnRuLWFkZC1wcm9qZWN0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhOWQ4ZjtcXG4gIH1cXG4gIFxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMztcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICB9XFxuICBcXG4gIC5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjY0KTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuICAudG9kb19fZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLnRvZG9fX2Rlc2NyaXB0aW9uICsgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MCU7XFxuICB9XFxuICAudG9kb19fZGV0YWlscyxcXG4gIC50b2RvX19lZGl0IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLnByaW9yaXR5LTEge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmNzMyMzI7XFxuICB9XFxuICAucHJpb3JpdHktMiB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZhY2MxNTtcXG4gIH1cXG4gIC5wcmlvcml0eS0zIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjJjNTVlO1xcbiAgfVxcbiAgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBwcm9qZWN0KG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy50b2RvcyA9IFtdO1xufVxuZXhwb3J0IHsgcHJvamVjdCB9OyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNhdmVUb2RvID0gKHByb2plY3ROYW1lLCB0b2RvKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdFRvZG9zJykpIHx8IHt9O1xuICAgIGlmICghcHJvamVjdFRvZG9zW3Byb2plY3ROYW1lXSkge1xuICAgICAgcHJvamVjdFRvZG9zW3Byb2plY3ROYW1lXSA9IFtdO1xuICAgIH1cbiAgICBwcm9qZWN0VG9kb3NbcHJvamVjdE5hbWVdLnB1c2godG9kbyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RUb2RvcycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RUb2RvcykpO1xuICB9O1xuICBjb25zdCBkZWxldGVUb2RvID0gKHByb2plY3ROYW1lLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RUb2RvcycpKTtcbiAgICBwcm9qZWN0VG9kb3NbcHJvamVjdE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RUb2RvcycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RUb2RvcykpO1xuICAgIHJldHVybiB7fTtcbiAgfTtcbiAgY29uc3QgcmV0cml2ZVRvZG9zID0gcHJvamVjdE5hbWUgPT4ge1xuICAgIGNvbnN0IHBUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RUb2RvcycpKTtcbiAgICByZXR1cm4gcFRvZG9zW3Byb2plY3ROYW1lXTtcbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdCA9IHByb2plY3QgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XG4gICAgaWYgKCFwcm9qZWN0cy5zb21lKHAgPT4gcC5uYW1lID09PSBwcm9qZWN0Lm5hbWUpKSB7XG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBpbmRleCA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH07XG4gIGNvbnN0IHJldHJpdmVQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgc2F2ZVRvZG8sXG4gICAgcmV0cml2ZVRvZG9zLFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgc2F2ZVByb2plY3QsXG4gICAgcmV0cml2ZVByb2plY3RzLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBzdG9yYWdlIH07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiB0b2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbn1cblxuZXhwb3J0IHsgdG9kbyB9OyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyB0b2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSAnLi90b2RvTGlzdCc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgdG9kYXkgPSBuZXcgcHJvamVjdCgndG9kYXknKTtcbnRvZG9MaXN0LmFkZFByb2plY3QodG9kYXkpO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSB0b2RheTtcblxuY29uc3QgdWkgPSAoKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgLy8gQnV0dG9uc1xuICBjb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tYWRkLXRvZG8nKTtcbiAgY29uc3QgYnRuQ2FuY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J0bi1jYW5jbGUnKTtcbiAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWFkZC1wcm9qZWN0Jyk7XG4gIGNvbnN0IGJ0blByb2plY3RzRXhwYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tZXhwYW5kJyk7XG4gIC8vIExhYmxlc1xuICBjb25zdCBwcm9qZWN0TmFtZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuICBjb25zdCB0b2RheUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIC8vIEZvcm1cbiAgY29uc3QgZm9ybUFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tZm9ybScpO1xuICBjb25zdCBmcm9tQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJyk7XG4gIC8vIElucHV0c1xuICBjb25zdCBpbnB1dFRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG4gIGNvbnN0IGlucHV0VG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgaW5wdXRUb2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRhdGUnKTtcbiAgY29uc3QgaW5wdXRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuICBjb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RfX25hbWUnKTtcbiAgLy8gQ29udGFpbmVyc1xuICBjb25zdCBwcm9qZWN0c1RvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXRvZG9zJyk7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0Jyk7XG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcHJvamVjdE5hbWVFbC50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0Lm5hbWU7XG4gICAgLy8gRXZlbnQgTGlzdGVuZXJzXG4gICAgYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbCk7XG4gICAgYnRuQ2FuY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsKTtcbiAgICBidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZnJvbUFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgYnRuUHJvamVjdHNFeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICBmcm9tQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGROZXdQcm9qZWN0KTtcbiAgICB0b2RheUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3VycmVudFByb2plY3QgPSB0b2RvTGlzdC5nZXRQcm9qZWN0KCd0b2RheScpO1xuICAgICAgU2hvd1RvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcbiAgICBmb3JtQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGROZXdUb2RvKTtcbiAgICBzaG93UHJvamVjdHMoKTtcbiAgICBTaG93VG9kb3ModG9kYXkpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIC8vIEFkZCBOZXcgdG8tZG9cbiAgY29uc3QgYWRkTmV3VG9kbyA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBpbnB1dFRvZG9UaXRsZS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBpbnB1dFRvZG9EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGlucHV0VG9kb0RhdGUudmFsdWUuc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLycpO1xuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9ICtpbnB1dFRvZG9Qcmlvcml0eS52YWx1ZTtcbiAgICBoaWRlTW9kYWwoKTtcbiAgICBmb3JtQWRkVG9kby5yZXNldCgpO1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgdG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSk7XG4gICAgLy8gY3VycmVudFByb2plY3QudG9kb3MucHVzaChcbiAgICAvLyAgIG5ldyB0by1kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSlcbiAgICAvLyApO1xuXG4gICAgLy8gbG9jYWwgU3Ryb2FnZVxuICAgIHN0b3JhZ2Uuc2F2ZVRvZG8oY3VycmVudFByb2plY3QubmFtZSwgdG9kbyk7XG4gICAgLy8gU2F2ZSBuZXcgdG8tZG8gdG8gbG9jYWwgc3RvcmFnZVxuICAgIFNob3dUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH07XG5cbiAgLy8gRWRpdCB0by1kbyBmdW5jdGlvblxuICBjb25zdCBlZGl0VG9kbyA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10aXRsZS1lZCcpLnZhbHVlO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgJ3RvZG8tZGVzY3JpcHRpb24tZWQnXG4gICAgKS52YWx1ZTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGF0ZS1lZCcpXG4gICAgICAudmFsdWUuc3BsaXQoJy0nKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmpvaW4oJy8nKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHktZWQnKS52YWx1ZTtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgICAvLyBEZWxldGUgdG9kbyBmcm9tIGxvY2FsIFN0cm9hZ2VcbiAgICBjb25zdCB0b2RvID0gc3RvcmFnZS5kZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0Lm5hbWUsICtpbmRleCk7XG4gICAgZGVsZXRlVG9kb0Zyb21VSShpbmRleCk7XG4gICAgdG9kby50aXRsZSA9IHRvZG9UaXRsZTtcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIHRvZG8uZHVlRGF0ZSA9IHRvZG9EYXRlO1xuICAgIHRvZG8ucHJpb3JpdHkgPSB0b2RvUHJpb3JpdHk7XG4gICAgLy8gQWRkIHRvZG8gdG8gbG9jYWwgc3RvcmFnZVxuICAgIHN0b3JhZ2Uuc2F2ZVRvZG8oY3VycmVudFByb2plY3QubmFtZSwgdG9kbyk7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBTaG93VG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9O1xuXG4gIC8vIERpc2FwbHkgQWxsIERvZG9zIGZvciBhIHByb2plY3RcbiAgY29uc3QgU2hvd1RvZG9zID0gcHJvamVjdCA9PiB7XG4gICAgcHJvamVjdE5hbWVFbC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAvLyBHZXQgYWxsIFRvZG9zIGZyb20gdGhpcyBwcm9qZWN0c1xuICAgIGNvbnN0IHRvZG9zID1cbiAgICAgIHN0b3JhZ2UucmV0cml2ZVRvZG9zKHByb2plY3QubmFtZSk/LnNvcnQoXG4gICAgICAgICh0MSwgdDIpID0+IHQyLnByaW9yaXR5IC0gdDEucHJpb3JpdHlcbiAgICAgICkgfHwgW107XG4gICAgY29uc29sZS5sb2codG9kb3MpO1xuICAgIHByb2plY3RzVG9kb3MuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIHRvZG9dIG9mIHRvZG9zLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgaHRtbCA9IGA8ZGl2IGNsYXNzPVwidG9kby1jb250YWluZXIgcHJpb3JpdHktJHtcbiAgICAgICAgdG9kby5wcmlvcml0eVxuICAgICAgfVwiIGRhdGEtaWQ9XCIke2luZGV4fVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRvZG9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9fX3RpdGxlXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS1jaGVjayBkb25lLWljb25cIiBkYXRhLWRvbmU9JHtpbmRleH0gdGl0bGU9XCJEb25lXCIgPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG9fX3RleHRcIj4ke3RvZG8udGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG9fX2NvbnRyb2xzXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmUgZWRpdC1pY29uXCIgIGRhdGEtZWRpdD1cIiR7aW5kZXh9XCIgdGl0bGU9XCJFZGl0IFRhc2tcIj48L2k+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mbyBkZXRhaWxzLWljb25cIiBkYXRhLWRldGFpbHM9XCIke2luZGV4fVwiIHRpdGxlPVwiVGFzayBEZXRhaWxzXCIgPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvX19kZXRhaWxzIGhpZGRlblwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kb19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8aDQ+RGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAke3RvZG8uZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kb19fZGF0ZVwiPlxuICAgICAgICAgICAgPGg0PkRhdGU8L2g0PlxuICAgICAgICAgICAgPHA+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvX19wcmlvcml0eVwiPlxuICAgICAgICAgICAgPGg0PlByaW9yaXR5PC9oND5cbiAgICAgICAgICAgIDxwPkxldmVsICR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb19fZWRpdCBoaWRkZW5cIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj5cbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJlZGl0LXRvZG8tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tdGl0bGUtZWRcIj5UYXNrIFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvLXRpdGxlLWVkXCIgIHZhbHVlPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICB0b2RvLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGVjcmlwdGlvbi1lZFwiPlRhc2sgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvZG8tZGVzY3JpcHRpb24tZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgID4gJHt0b2RvLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidHdvLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGF0ZS1lZFwiPlRhc2sgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgIGlkPVwidG9kby1kYXRlLWVkXCIgdmFsdWU9XCIke3RvZG8uZHVlRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCctJyl9XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tcHJpb3JpdHktZWRcIj5UYXNrIFByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cInRvZG8tcHJpb3JpdHktZWRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke3RvZG8ucHJpb3JpdHl9XCIgIGRpc2FibGVkIHNlbGVjdGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGlyb3JpdHkgJHt0b2RvLnByaW9yaXR5fSA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+UGlyb3JpdHkgMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5QaXJvcml0eSAyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPlBpcm9yaXR5IDM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBmb3JtX19idG4tc2F2ZVwiIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgICBwcm9qZWN0c1RvZG9zLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICAgIH1cbiAgICAvLyBEZWF0aWxzIEJ1dHRvbnNcbiAgICBwcm9qZWN0c1RvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXRhaWxzLWljb24nKS5mb3JFYWNoKGRldGFpbHNJY29uID0+IHtcbiAgICAgIGRldGFpbHNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5kZXRhaWxzO1xuICAgICAgICBjb25zdCB0b2RvRGVhdGlscyA9IFtcbiAgICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb19fZGV0YWlscycpLFxuICAgICAgICBdLmZpbmQodG9kb0RlYXRpbHMgPT4gdG9kb0RlYXRpbHMuZGF0YXNldC5pbmRleCA9PT0gaW5kZXgpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb19fZWRpdCcpXS5maW5kKFxuICAgICAgICAgIHRvZG9FZGl0ID0+IHRvZG9FZGl0LmRhdGFzZXQuaW5kZXggPT09IGluZGV4XG4gICAgICAgICk7XG4gICAgICAgIC8vIGhpZGUgJiYgc2hvdyB0b2RvIGRldGFpbHNcbiAgICAgICAgdG9kb0RlYXRpbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIC8vIGhpZGUgJiYgc2hvdyB0b2RvIEVkaXRcbiAgICAgICAgdG9kb0VkaXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBEb25lIEJ1dHRvblxuICAgIHByb2plY3RzVG9kb3MucXVlcnlTZWxlY3RvckFsbCgnLmRvbmUtaWNvbicpLmZvckVhY2goZG9uZUljb24gPT4ge1xuICAgICAgZG9uZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmRvbmU7XG4gICAgICAgIC8vIHJlbW92ZSB0b2RvIGZyb20gY3VycmVudCBwcm9qZWN0XG4gICAgICAgIC8vY3VycmVudFByb2plY3QudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgc3RvcmFnZS5kZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0Lm5hbWUsICtpbmRleCk7XG4gICAgICAgIGRlbGV0ZVRvZG9Gcm9tVUkoaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gRWRpdCBCdXR0b25cbiAgICBwcm9qZWN0c1RvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWljb24nKS5mb3JFYWNoKGVkaXRJY29uID0+IHtcbiAgICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5lZGl0O1xuICAgICAgICBjb25zdCB0b2RvRWRpdCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb19fZWRpdCcpXS5maW5kKFxuICAgICAgICAgIHRvZG9FZGl0ID0+IHRvZG9FZGl0LmRhdGFzZXQuaW5kZXggPT09IGluZGV4XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRvZG9EZWF0aWxzID0gW1xuICAgICAgICAgIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvX19kZXRhaWxzJyksXG4gICAgICAgIF0uZmluZCh0b2RvRGVhdGlscyA9PiB0b2RvRGVhdGlscy5kYXRhc2V0LmluZGV4ID09PSBpbmRleCk7XG4gICAgICAgIC8vIGhpZGUgJiYgc2hvdyB0b2RvIGRldGFpbHNcbiAgICAgICAgdG9kb0VkaXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIC8vIGhpZGUgJiYgc2hvdyB0b2RvIGRldGFpbHNcbiAgICAgICAgdG9kb0RlYXRpbHMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBFZGl0IEZvcm1cbiAgICBwcm9qZWN0c1RvZG9zLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvZG8tZm9ybScpLmZvckVhY2goZWRpdEZvcm0gPT4ge1xuICAgICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZWRpdFRvZG8pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9Gcm9tVUkgPSBpbmRleCA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IFtcbiAgICAgIC4uLnByb2plY3RzVG9kb3MucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGFpbmVyJyksXG4gICAgXS5maW5kKHRjID0+IHRjLmRhdGFzZXQuaWQgPT09IGluZGV4KTtcbiAgICAvLyByZW1vdmUgdG9kbyBmcm9tIGN1cnJlbnQgcHJvamVjdCB1aVxuICAgIHByb2plY3RzVG9kb3MucmVtb3ZlQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gIH07XG5cbiAgLy8gQWRkIG5ldyBwcm9qZWN0XG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dFByb2plY3ROYW1lLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHByb2plY3ROYW1lICE9PSAnICcpIHtcbiAgICAgIGZyb21BZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgLy8gQ3JlYXRlIG5ldyBwcm9qZWN0XG4gICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IHByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHNob3dQcm9qZWN0cygpO1xuICAgICAgU2hvd1RvZG9zKHByb2plY3QpO1xuICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICB9XG4gIH07XG4gIC8vIERpc3BsYXkgQWxsIFByb2plY3RzXG4gIGNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBHZXQgYWxsIFByb2plY3RzIEZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IHByb2plY3RzID0gdG9kb0xpc3QuZ2V0UHJvamVjdHMoKSB8fCBbXTtcbiAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgcHJvamVjdF0gb2YgcHJvamVjdHMuZW50cmllcygpKSB7XG4gICAgICBpZiAocHJvamVjdC5uYW1lID09PSAndG9kYXknKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGxpID0gYDxsaT48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWxpc3QtY2hlY2tcIj48L2k+JHtwcm9qZWN0Lm5hbWV9PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaCBidG4tZGVsZXRlLXByb2plY3RcIiB0aXRsZT1cIkRlbGV0ZVwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiPjwvaT48L2xpPmA7XG4gICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBsaSk7XG4gICAgfVxuICAgIC8vIHNob3dpbmcgcHJvamVjdCdzIHRvZG9cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHNfX2xpc3QgbGknKS5mb3JFYWNoKGxpID0+IHtcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGxpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkgfHwgdG9kYXk7XG4gICAgICAgIFNob3dUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBEZWxldGUgcHJvZWpjdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZGVsZXRlLXByb2plY3QnKS5mb3JFYWNoKGRlbHRlQnV0dG9uID0+IHtcbiAgICAgIGRlbHRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgdG9kb0xpc3QucmVtb3ZlUHJvamVjdCgraW5kZXgpO1xuICAgICAgICBzaG93UHJvamVjdHMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVpIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHVpIH0gZnJvbSAnLi9tb2R1bGVzL3VpLmpzJztcblxudWkuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==