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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./dinerBackground.jpg */ "./src/dinerBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    font-family: 'Oxygen', sans-serif;\n}\n\n#content {\n    height: auto;\n    position: relative;\n    display: grid;\n    grid-template-rows: 20vh minmax(85vh, 1fr) 10vh;\n}\n\nheader {\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem;\n    font-size: 3rem;\n    letter-spacing: 1.2px;\n}\n\n#rest-name {\n    font-family: 'Lobster', cursive;\n    color: #f0d734;\n}\n\n#ampersand {\n    font-size: 3rem;\n    margin-left: .8rem;\n}\n\n#rest-sub-heading {\n    font-size: 1.3rem;\n    font-family: 'Lobster', cursive;\n    color: #f0d734;\n    letter-spacing: 2px;\n}\n\n#nav {\n    position: sticky;\n}\n\n#nav-links {\n    color: rgb(255, 255, 255);\n    text-shadow: 1px 1px 1px #00000075;\n    font-weight: 700;\n    letter-spacing: 1px;\n    display: flex;\n    gap: 1.5rem;\n    list-style-type: none;\n    font-size: 1.5rem;\n    padding: 2rem;\n}\n\n.link:hover {\n    color: #f0d734;\n    cursor: pointer;\n}\n\nmain {\n    padding: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.card-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    width: 400px;\n    height: 400px;\n    border-radius: 12px;\n    outline: none;\n    padding: 1.5rem;\n    margin: 0 auto;\n    margin-bottom: 2rem;\n    letter-spacing: .7px;\n    color: white;\n    font-weight: 700;\n    text-align: center;\n    background-color: rgba(32, 44, 44, 0.9);\n}\n\n.about-wrapper {\n    width: 600px;\n    padding: 2rem;\n}\n\n.day-info {\n    display: flex;\n    width: 70%;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.image-wrapper {\n    width: 80%;\n    height: 50%;\n    border: non;\n    border-radius: 12px;\n    overflow: hidden; \n}\n\n.featured-image {\n    width: 100%;\n    height: 100%;\n}\n\n#cta-menu {\n    color: white;\n    font-size: 1.2rem;\n    font-weight: 700;\n    text-shadow: 1px 1px 1px #00000075;\n    background-color: #c5af21;\n    border: none;\n    border-radius: 12px;\n    width: 10rem;\n    height: 3rem;\n    cursor: pointer;\n}\n\n.menu-heading {\n    background-color: rgba(32, 44, 44, 0.9);\n    color: #f0d734;\n    font-weight: 700;\n    font-size: 2.5rem;\n    letter-spacing: 2px;\n    width: 500px;\n    padding: 2rem;\n    margin-bottom: 2rem;\n    border-radius: 12px;\n    text-align: center;\n}\n\n#hours-heading, #phone-heading, #email-heading {\n    color: #f0d734; \n}\n\n#phone-wrapper, #email-wrapper {\n    height: 150px;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    left: 0; \n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n    background-color: rgba(0, 0, 0, 0.7);\n    text-align: center;\n    color: white;\n    font-size: .9rem;\n    font-weight: 700;\n    letter-spacing: 1.2px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,yDAA8C;IAC9C,sBAAsB;IACtB,4BAA4B;IAC5B,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,+CAA+C;AACnD;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,+BAA+B;IAC/B,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,kCAAkC;IAClC,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;IACvC,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,oCAAoC;IACpC,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,qBAAqB;AACzB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url('./dinerBackground.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    font-family: 'Oxygen', sans-serif;\n}\n\n#content {\n    height: auto;\n    position: relative;\n    display: grid;\n    grid-template-rows: 20vh minmax(85vh, 1fr) 10vh;\n}\n\nheader {\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem;\n    font-size: 3rem;\n    letter-spacing: 1.2px;\n}\n\n#rest-name {\n    font-family: 'Lobster', cursive;\n    color: #f0d734;\n}\n\n#ampersand {\n    font-size: 3rem;\n    margin-left: .8rem;\n}\n\n#rest-sub-heading {\n    font-size: 1.3rem;\n    font-family: 'Lobster', cursive;\n    color: #f0d734;\n    letter-spacing: 2px;\n}\n\n#nav {\n    position: sticky;\n}\n\n#nav-links {\n    color: rgb(255, 255, 255);\n    text-shadow: 1px 1px 1px #00000075;\n    font-weight: 700;\n    letter-spacing: 1px;\n    display: flex;\n    gap: 1.5rem;\n    list-style-type: none;\n    font-size: 1.5rem;\n    padding: 2rem;\n}\n\n.link:hover {\n    color: #f0d734;\n    cursor: pointer;\n}\n\nmain {\n    padding: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.card-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    width: 400px;\n    height: 400px;\n    border-radius: 12px;\n    outline: none;\n    padding: 1.5rem;\n    margin: 0 auto;\n    margin-bottom: 2rem;\n    letter-spacing: .7px;\n    color: white;\n    font-weight: 700;\n    text-align: center;\n    background-color: rgba(32, 44, 44, 0.9);\n}\n\n.about-wrapper {\n    width: 600px;\n    padding: 2rem;\n}\n\n.day-info {\n    display: flex;\n    width: 70%;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.image-wrapper {\n    width: 80%;\n    height: 50%;\n    border: non;\n    border-radius: 12px;\n    overflow: hidden; \n}\n\n.featured-image {\n    width: 100%;\n    height: 100%;\n}\n\n#cta-menu {\n    color: white;\n    font-size: 1.2rem;\n    font-weight: 700;\n    text-shadow: 1px 1px 1px #00000075;\n    background-color: #c5af21;\n    border: none;\n    border-radius: 12px;\n    width: 10rem;\n    height: 3rem;\n    cursor: pointer;\n}\n\n.menu-heading {\n    background-color: rgba(32, 44, 44, 0.9);\n    color: #f0d734;\n    font-weight: 700;\n    font-size: 2.5rem;\n    letter-spacing: 2px;\n    width: 500px;\n    padding: 2rem;\n    margin-bottom: 2rem;\n    border-radius: 12px;\n    text-align: center;\n}\n\n#hours-heading, #phone-heading, #email-heading {\n    color: #f0d734; \n}\n\n#phone-wrapper, #email-wrapper {\n    height: 150px;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    left: 0; \n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n    background-color: rgba(0, 0, 0, 0.7);\n    text-align: center;\n    color: white;\n    font-size: .9rem;\n    font-weight: 700;\n    letter-spacing: 1.2px;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// about page loader from clicking tab

const aboutLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    let aboutUsHeading = document.createElement('div');
    aboutUsHeading.classList.add('menu-heading');
    aboutUsHeading.innerText = 'About Us';

    main.appendChild(aboutUsHeading);

    let aboutWrapper = document.createElement('div');
    aboutWrapper.setAttribute('class', 'card-wrapper');
    aboutWrapper.classList.add('about-wrapper');

    let p1 = document.createElement('p');
    p1.setAttribute('id', 'about-p1');
    p1.innerText = `In the heart of Toluca Lake, and a stone's throw from Universal Studios, M&J's is that classic diner full of scrumptious dishes that you are looking for.`;

    let p2 = document.createElement('p');
    p2.setAttribute('id', 'about-p2');
    p2.innerText = `Started in 2014, owners Matt and Jenna decided to create a little slice of nostalgia in their community.  Gathering time-honored recipes, and sometimes putting in their own twist, it is now a mainstay and a must visit if you are in the LA area.`

    let p3 = document.createElement('p');
    p3.setAttribute('id', 'about-p3');
    p3.innerText = `Recently awarded 'sickest baked potato' from Guy Fieri, the baked potato chili bowl is to die for. See you at the counter or booth. No reservations!`;

    aboutWrapper.appendChild(p1);
    aboutWrapper.appendChild(p2);
    aboutWrapper.appendChild(p3);

    main.appendChild(aboutWrapper);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutLoad);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// contact us page loader from clicking tab

const contactUsLoad = function() {
    let hours = [
        {
            day: 'Sunday',
            open: '6am - 10pm'
        },
        {
            day: 'Monday',
            open: 'closed'
        },
        {
            day: 'Tuesday',
            open: '6am - 10pm'
        },
        {
            day: 'Wednesday',
            open: '6am - 10pm'
        },
        {
            day: 'Thursday',
            open: '6am - 10pm'
        },
        {
            day: 'Friday',
            open: '6am - 12am'
        },
        {
            day: 'Saturday',
            open: '6am - 12am'
        }
    ];

    //cache DOM
    let main = document.querySelector('main');

    let contactHeading = document.createElement('div');
    contactHeading.classList.add('menu-heading');
    contactHeading.innerText = `Contact`;

    let hoursWrapper = document.createElement('div');
    hoursWrapper.classList.add('card-wrapper');
    hoursWrapper.setAttribute('id', 'hours-wrapper');

    let hoursHeading = document.createElement('h2');
    hoursHeading.innerText = `Hours`;
    hoursHeading.setAttribute('id', 'hours-heading');

    hoursWrapper.appendChild(hoursHeading);

    hours.forEach(hour => {
        let dayInfo = document.createElement('div');
        dayInfo.classList.add('day-info');
        let day = document.createElement('p');
        day.innerText = `${hour.day}`;
        let open = document.createElement('p');
        open.innerText = `${hour.open}`;

        dayInfo.appendChild(day);
        dayInfo.appendChild(open);

        hoursWrapper.appendChild(dayInfo);
    })

    let phoneWrapper = document.createElement('div');
    phoneWrapper.classList.add('card-wrapper');
    phoneWrapper.setAttribute('id', 'phone-wrapper');
    let phoneHeading = document.createElement('h2');
    phoneHeading.setAttribute('id', 'phone-heading');
    phoneHeading.innerText = `Phone`;
    let phoneNumber = document.createElement('h3');
    phoneNumber.innerText = `(555) 555-5555`;

    phoneWrapper.appendChild(phoneHeading);
    phoneWrapper.appendChild(phoneNumber);

    let emailWrapper = document.createElement('div');
    emailWrapper.classList.add('card-wrapper');
    emailWrapper.setAttribute('id', 'email-wrapper');
    let emailHeading = document.createElement('h2');
    emailHeading.setAttribute('id', 'email-heading');
    emailHeading.innerText = `Email`;
    let emailAddress = document.createElement('h3');
    emailAddress.innerText = `info@m&jsdiner.com`;

    emailWrapper.appendChild(emailHeading);
    emailWrapper.appendChild(emailAddress);

    main.appendChild(contactHeading);
    main.appendChild(hoursWrapper);
    main.appendChild(phoneWrapper);
    main.appendChild(emailWrapper);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUsLoad);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad),
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
// Home page 

// ToDo List
// Add in the location and hours section on the home page
// Add in the social icons in the lower right of the footer

const pageLoad = function() {

    //cache DOM
    let contentWrapper = document.getElementById('content');

    // header with title
    let header = document.createElement('header');

    let logoWrapper = document.createElement('div');
    logoWrapper.setAttribute('id', 'logo-wrapper');

    let restaurantName = document.createElement('h2');
    restaurantName.setAttribute('id', 'rest-name');
    restaurantName.innerHTML = `M<span id="ampersand">&</span>J's`;

    let restaurantSubHeading = document.createElement('h5');
    restaurantSubHeading.setAttribute('id', 'rest-sub-heading');
    restaurantSubHeading.textContent = `est. 2014`;

    logoWrapper.appendChild(restaurantName);
    logoWrapper.appendChild(restaurantSubHeading);

    // navbar in header
    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    let navLinks = document.createElement('ul');
    navLinks.setAttribute('id', 'nav-links');

    let links = [];
    let linkNames = ['Home', 'Menu', 'About Us', 'Contact'];

    for (let i = 0; i <= 3; i++) {
        let link = document.createElement('li');
        link.classList.add('link');
        link.innerText = linkNames[i];
        links.push(link);
    }

    links.forEach(link => {
        navLinks.appendChild(link);
    })

    nav.appendChild(navLinks);

    header.appendChild(logoWrapper);
    header.appendChild(nav);

    // main is where the tab data will go
    let main = document.createElement('main');
    
    // Featured Card
    let featuredWrapper = document.createElement('div');
    featuredWrapper.setAttribute('class', 'card-wrapper');

    let featuredHeadline = document.createElement('h4');
    featuredHeadline.innerHTML = `Home of the World famous <br>'Baked Potato Chili Bowls'`;

    let featuredImageWrapper = document.createElement('div');
    featuredImageWrapper.setAttribute('class', 'image-wrapper');
    let featuredImage = document.createElement('img');
    featuredImage.setAttribute('class', 'featured-image');
    featuredImage.setAttribute('src', '/src/potato.jpg');
    featuredImage.setAttribute('alt', 'baked potato');

    featuredImageWrapper.appendChild(featuredImage);

    let ctaMenuBtn = document.createElement('button');
    ctaMenuBtn.setAttribute('id', 'cta-menu');
    ctaMenuBtn.innerText = 'Click for Menu';

    featuredWrapper.appendChild(featuredHeadline);
    featuredWrapper.appendChild(featuredImageWrapper);
    featuredWrapper.appendChild(ctaMenuBtn);

    // Append children to main
    main.appendChild(featuredWrapper);

    let footer = document.createElement('footer');
    footer.innerText = `Created by Matt Kissinger`;

    // Append children to #content div
    contentWrapper.appendChild(header);
    contentWrapper.appendChild(main);
    contentWrapper.appendChild(footer);
}

const homeLoad = function() {
    //cache DOM
    let main = document.querySelector('main');

    // Featured Card
    let featuredWrapper = document.createElement('div');
    featuredWrapper.setAttribute('class', 'card-wrapper');

    let featuredHeadline = document.createElement('h4');
    featuredHeadline.innerHTML = `Home of the World famous <br>'Baked Potato Chili Bowls'`;

    let featuredImageWrapper = document.createElement('div');
    featuredImageWrapper.setAttribute('class', 'image-wrapper');
    let featuredImage = document.createElement('img');
    featuredImage.setAttribute('class', 'featured-image');
    featuredImage.setAttribute('src', '/src/potato.jpg');
    featuredImage.setAttribute('alt', 'baked potato');

    featuredImageWrapper.appendChild(featuredImage);

    let ctaMenuBtn = document.createElement('button');
    ctaMenuBtn.setAttribute('id', 'cta-menu');
    ctaMenuBtn.innerText = 'Click for Menu';

    featuredWrapper.appendChild(featuredHeadline);
    featuredWrapper.appendChild(featuredImageWrapper);
    featuredWrapper.appendChild(ctaMenuBtn);

    // Append children to main
    main.appendChild(featuredWrapper);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// menu page loader from clicking tab

const menuItems = [];

function createMenuItem(name, description, price, picture, menuType) {
    return {
        name: name,
        description: description,
        price: price,
        picture: picture,
        menuType: menuType
    }
}

let breakfast1 = createMenuItem('Scramble', 'Classic 2 egg scamble breakfast with side of toast and home fries', '$12', '../src/scramble.jpg', 'breakfast');
let breakfast2 = createMenuItem('Avocado Toast', 'This millenial income destroyer is healthy and nutritious. Toast for $12!! You must be crazy!', '$12', '../src/avocado-toast.jpg', 'breakfast');
let lunch1 = createMenuItem('Pastrami on Rye', `Is there a better sandwich on the planet? I don't think so.`, '$16', '../src/pastrami.jpg', 'lunch');
let lunch2 = createMenuItem('Double Trouble', `Two all-beef patties on a sesame seed bun... If we continue the song we'll have to lawyer up`, `$15`, '../src/burger.jpg', 'lunch');
let dinner1 = createMenuItem('Salmon Steak', `You're going to order salmon from a diner?! Your funeral friend`, '$20', '../src/salmon.jpg', 'dinner');
let dinner2 = createMenuItem('Meatloaf', 'A true American dinner standard. No naps in the booths after the meal please!', '$18', '../src/meatloaf.jpg', 'dinner');

menuItems.push(breakfast1);
menuItems.push(breakfast2);
menuItems.push(lunch1);
menuItems.push(lunch2);
menuItems.push(dinner1);
menuItems.push(dinner2);

const menuLoad = function() {

    //cache DOM
    let main = document.querySelector('main');

    // Breakfast Menu Heading
    let breakfastHeading = document.createElement('div');
    breakfastHeading.classList.add('menu-heading');
    breakfastHeading.innerText = 'Breakfast';

    main.appendChild(breakfastHeading);

    menuItems.forEach(item => {
        if (item.menuType === 'breakfast') {
            menuItemCardCreator(item);
        }
    })

    let lunchHeading = document.createElement('div');
    lunchHeading.classList.add('menu-heading');
    lunchHeading.innerText = 'Lunch';

    main.appendChild(lunchHeading);

    menuItems.forEach(item => {
        if (item.menuType === 'lunch') {
            menuItemCardCreator(item);
        }
    })

    let dinnerHeading = document.createElement('div');
    dinnerHeading.classList.add('menu-heading');
    dinnerHeading.innerText = 'Dinner';

    main.appendChild(dinnerHeading);

    menuItems.forEach(item => {
        if (item.menuType === 'dinner') {
            menuItemCardCreator(item);
        }
    })
}


// method to generate menu item cards from menuItems array
function menuItemCardCreator(object) {
    //Menu Item Cards

    let main = document.querySelector('main');

    let menuItemWrapper = document.createElement('div');
    menuItemWrapper.setAttribute('class', 'card-wrapper');

    let menuItemName = document.createElement('h2');
    menuItemName.innerText = `${object.name}`;

    let menuItemDesc = document.createElement('h4');
    menuItemDesc.innerHTML = `${object.description}`;

    let menuImageWrapper = document.createElement('div');
    menuImageWrapper.setAttribute('class', 'image-wrapper');
    let menuImage = document.createElement('img');
    menuImage.setAttribute('class', 'featured-image');
    menuImage.setAttribute('src', object.picture);

    menuImageWrapper.appendChild(menuImage);

    let menuItemPrice = document.createElement('h2');
    menuItemPrice.innerText = `${object.price}`;

    menuItemWrapper.appendChild(menuItemName);
    menuItemWrapper.appendChild(menuItemDesc);
    menuItemWrapper.appendChild(menuImageWrapper);
    menuItemWrapper.appendChild(menuItemPrice);

    main.appendChild(menuItemWrapper);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);

/***/ }),

/***/ "./src/dinerBackground.jpg":
/*!*********************************!*\
  !*** ./src/dinerBackground.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ef32d2bbf08ff974fdf.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






let clickedLink = '';

(0,_home__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();



// cache DOM
let main = document.querySelector('main');
const links = document.querySelectorAll('.link');

let menuBtn = document.querySelector('#cta-menu');
menuBtn.addEventListener('click', function() {
    main.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

links.forEach(link => {
    link.addEventListener('click', function() {
        clickedLink = link.innerText;
        main.innerHTML = '';

        switch (clickedLink) {
            case 'Home':
                (0,_home__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();
                let menuBtn = document.querySelector('#cta-menu');
                menuBtn.addEventListener('click', function() {
                main.innerHTML = '';
                (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
                })
                break;
            case 'Menu':
                (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
                break;
            case 'About Us': 
                (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
                break;
            case 'Contact':
                (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
                break;
            default:
                console.log('There must be in error');
        }
    })
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNwQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0EsNEJBQTRCLFVBQVU7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsWUFBWTs7QUFFNUM7QUFDQSxnQ0FBZ0MsbUJBQW1COztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDLGFBQWE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxR2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjRDO0FBQ2Q7QUFDRTtBQUNNO0FBQ2pCOztBQUVyQjs7QUFFQSwrQ0FBUTs7OztBQUlSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpREFBUTtBQUN4QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGdCQUFnQixpREFBUTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLGtEQUFTO0FBQ3pCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZGluZXJCYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCBtaW5tYXgoODV2aCwgMWZyKSAxMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXG59XFxuXFxuI3Jlc3QtbmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZjBkNzM0O1xcbn1cXG5cXG4jYW1wZXJzYW5kIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLjhyZW07XFxufVxcblxcbiNyZXN0LXN1Yi1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiAjZjBkNzM0O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4jbmF2IHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG59XFxuXFxuI25hdi1saW5rcyB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNzU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICAgIGNvbG9yOiAjZjBkNzM0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjdweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDQ0LCA0NCwgMC45KTtcXG59XFxuXFxuLmFib3V0LXdyYXBwZXIge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5kYXktaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5pbWFnZS13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGJvcmRlcjogbm9uO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcXG59XFxuXFxuLmZlYXR1cmVkLWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2N0YS1tZW51IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA3NTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YWYyMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1oZWFkaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgNDQsIDQ0LCAwLjkpO1xcbiAgICBjb2xvcjogI2YwZDczNDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jaG91cnMtaGVhZGluZywgI3Bob25lLWhlYWRpbmcsICNlbWFpbC1oZWFkaW5nIHtcXG4gICAgY29sb3I6ICNmMGQ3MzQ7IFxcbn1cXG5cXG4jcGhvbmUtd3JhcHBlciwgI2VtYWlsLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5REFBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9kaW5lckJhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHZoIG1pbm1heCg4NXZoLCAxZnIpIDEwdmg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcbn1cXG5cXG4jcmVzdC1uYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmMGQ3MzQ7XFxufVxcblxcbiNhbXBlcnNhbmQge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAuOHJlbTtcXG59XFxuXFxuI3Jlc3Qtc3ViLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6ICNmMGQ3MzQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbiNuYXYge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA3NTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saW5rOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmMGQ3MzQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubWFpbiB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAuN3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgNDQsIDQ0LCAwLjkpO1xcbn1cXG5cXG4uYWJvdXQtd3JhcHBlciB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmRheS1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmltYWdlLXdyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYm9yZGVyOiBub247XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxcbn1cXG5cXG4uZmVhdHVyZWQtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY3RhLW1lbnUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDc1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVhZjIxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWhlYWRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCA0NCwgNDQsIDAuOSk7XFxuICAgIGNvbG9yOiAjZjBkNzM0O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNob3Vycy1oZWFkaW5nLCAjcGhvbmUtaGVhZGluZywgI2VtYWlsLWhlYWRpbmcge1xcbiAgICBjb2xvcjogI2YwZDczNDsgXFxufVxcblxcbiNwaG9uZS13cmFwcGVyLCAjZW1haWwtd3JhcHBlciB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBhYm91dCBwYWdlIGxvYWRlciBmcm9tIGNsaWNraW5nIHRhYlxuXG5jb25zdCBhYm91dExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vY2FjaGUgRE9NXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICBsZXQgYWJvdXRVc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgICBhYm91dFVzSGVhZGluZy5pbm5lclRleHQgPSAnQWJvdXQgVXMnO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFVzSGVhZGluZyk7XG5cbiAgICBsZXQgYWJvdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC13cmFwcGVyJyk7XG4gICAgYWJvdXRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXdyYXBwZXInKTtcblxuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXAxJyk7XG4gICAgcDEuaW5uZXJUZXh0ID0gYEluIHRoZSBoZWFydCBvZiBUb2x1Y2EgTGFrZSwgYW5kIGEgc3RvbmUncyB0aHJvdyBmcm9tIFVuaXZlcnNhbCBTdHVkaW9zLCBNJkoncyBpcyB0aGF0IGNsYXNzaWMgZGluZXIgZnVsbCBvZiBzY3J1bXB0aW91cyBkaXNoZXMgdGhhdCB5b3UgYXJlIGxvb2tpbmcgZm9yLmA7XG5cbiAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDIuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1wMicpO1xuICAgIHAyLmlubmVyVGV4dCA9IGBTdGFydGVkIGluIDIwMTQsIG93bmVycyBNYXR0IGFuZCBKZW5uYSBkZWNpZGVkIHRvIGNyZWF0ZSBhIGxpdHRsZSBzbGljZSBvZiBub3N0YWxnaWEgaW4gdGhlaXIgY29tbXVuaXR5LiAgR2F0aGVyaW5nIHRpbWUtaG9ub3JlZCByZWNpcGVzLCBhbmQgc29tZXRpbWVzIHB1dHRpbmcgaW4gdGhlaXIgb3duIHR3aXN0LCBpdCBpcyBub3cgYSBtYWluc3RheSBhbmQgYSBtdXN0IHZpc2l0IGlmIHlvdSBhcmUgaW4gdGhlIExBIGFyZWEuYFxuXG4gICAgbGV0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtcDMnKTtcbiAgICBwMy5pbm5lclRleHQgPSBgUmVjZW50bHkgYXdhcmRlZCAnc2lja2VzdCBiYWtlZCBwb3RhdG8nIGZyb20gR3V5IEZpZXJpLCB0aGUgYmFrZWQgcG90YXRvIGNoaWxpIGJvd2wgaXMgdG8gZGllIGZvci4gU2VlIHlvdSBhdCB0aGUgY291bnRlciBvciBib290aC4gTm8gcmVzZXJ2YXRpb25zIWA7XG5cbiAgICBhYm91dFdyYXBwZXIuYXBwZW5kQ2hpbGQocDEpO1xuICAgIGFib3V0V3JhcHBlci5hcHBlbmRDaGlsZChwMik7XG4gICAgYWJvdXRXcmFwcGVyLmFwcGVuZENoaWxkKHAzKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRXcmFwcGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRMb2FkIiwiLy8gY29udGFjdCB1cyBwYWdlIGxvYWRlciBmcm9tIGNsaWNraW5nIHRhYlxuXG5jb25zdCBjb250YWN0VXNMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGhvdXJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6ICdTdW5kYXknLFxuICAgICAgICAgICAgb3BlbjogJzZhbSAtIDEwcG0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRheTogJ01vbmRheScsXG4gICAgICAgICAgICBvcGVuOiAnY2xvc2VkJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6ICdUdWVzZGF5JyxcbiAgICAgICAgICAgIG9wZW46ICc2YW0gLSAxMHBtJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6ICdXZWRuZXNkYXknLFxuICAgICAgICAgICAgb3BlbjogJzZhbSAtIDEwcG0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRheTogJ1RodXJzZGF5JyxcbiAgICAgICAgICAgIG9wZW46ICc2YW0gLSAxMHBtJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXk6ICdGcmlkYXknLFxuICAgICAgICAgICAgb3BlbjogJzZhbSAtIDEyYW0nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRheTogJ1NhdHVyZGF5JyxcbiAgICAgICAgICAgIG9wZW46ICc2YW0gLSAxMmFtJ1xuICAgICAgICB9XG4gICAgXTtcblxuICAgIC8vY2FjaGUgRE9NXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICBsZXQgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgICBjb250YWN0SGVhZGluZy5pbm5lclRleHQgPSBgQ29udGFjdGA7XG5cbiAgICBsZXQgaG91cnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd3JhcHBlcicpO1xuICAgIGhvdXJzV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLXdyYXBwZXInKTtcblxuICAgIGxldCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvdXJzSGVhZGluZy5pbm5lclRleHQgPSBgSG91cnNgO1xuICAgIGhvdXJzSGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLWhlYWRpbmcnKTtcblxuICAgIGhvdXJzV3JhcHBlci5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuXG4gICAgaG91cnMuZm9yRWFjaChob3VyID0+IHtcbiAgICAgICAgbGV0IGRheUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5SW5mby5jbGFzc0xpc3QuYWRkKCdkYXktaW5mbycpO1xuICAgICAgICBsZXQgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkYXkuaW5uZXJUZXh0ID0gYCR7aG91ci5kYXl9YDtcbiAgICAgICAgbGV0IG9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9wZW4uaW5uZXJUZXh0ID0gYCR7aG91ci5vcGVufWA7XG5cbiAgICAgICAgZGF5SW5mby5hcHBlbmRDaGlsZChkYXkpO1xuICAgICAgICBkYXlJbmZvLmFwcGVuZENoaWxkKG9wZW4pO1xuXG4gICAgICAgIGhvdXJzV3JhcHBlci5hcHBlbmRDaGlsZChkYXlJbmZvKTtcbiAgICB9KVxuXG4gICAgbGV0IHBob25lV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXJkLXdyYXBwZXInKTtcbiAgICBwaG9uZVdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwaG9uZS13cmFwcGVyJyk7XG4gICAgbGV0IHBob25lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVIZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmUtaGVhZGluZycpO1xuICAgIHBob25lSGVhZGluZy5pbm5lclRleHQgPSBgUGhvbmVgO1xuICAgIGxldCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJUZXh0ID0gYCg1NTUpIDU1NS01NTU1YDtcblxuICAgIHBob25lV3JhcHBlci5hcHBlbmRDaGlsZChwaG9uZUhlYWRpbmcpO1xuICAgIHBob25lV3JhcHBlci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgICBsZXQgZW1haWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1haWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd3JhcHBlcicpO1xuICAgIGVtYWlsV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsLXdyYXBwZXInKTtcbiAgICBsZXQgZW1haWxIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbWFpbEhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbC1oZWFkaW5nJyk7XG4gICAgZW1haWxIZWFkaW5nLmlubmVyVGV4dCA9IGBFbWFpbGA7XG4gICAgbGV0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZW1haWxBZGRyZXNzLmlubmVyVGV4dCA9IGBpbmZvQG0manNkaW5lci5jb21gO1xuXG4gICAgZW1haWxXcmFwcGVyLmFwcGVuZENoaWxkKGVtYWlsSGVhZGluZyk7XG4gICAgZW1haWxXcmFwcGVyLmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzcyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvdXJzV3JhcHBlcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwaG9uZVdyYXBwZXIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZW1haWxXcmFwcGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFVzTG9hZCIsIi8vIEhvbWUgcGFnZSBcblxuLy8gVG9EbyBMaXN0XG4vLyBBZGQgaW4gdGhlIGxvY2F0aW9uIGFuZCBob3VycyBzZWN0aW9uIG9uIHRoZSBob21lIHBhZ2Vcbi8vIEFkZCBpbiB0aGUgc29jaWFsIGljb25zIGluIHRoZSBsb3dlciByaWdodCBvZiB0aGUgZm9vdGVyXG5cbmNvbnN0IHBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvL2NhY2hlIERPTVxuICAgIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvLyBoZWFkZXIgd2l0aCB0aXRsZVxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGxldCBsb2dvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nby13cmFwcGVyJyk7XG5cbiAgICBsZXQgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHJlc3RhdXJhbnROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdC1uYW1lJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuaW5uZXJIVE1MID0gYE08c3BhbiBpZD1cImFtcGVyc2FuZFwiPiY8L3NwYW4+SidzYDtcblxuICAgIGxldCByZXN0YXVyYW50U3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgcmVzdGF1cmFudFN1YkhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0LXN1Yi1oZWFkaW5nJyk7XG4gICAgcmVzdGF1cmFudFN1YkhlYWRpbmcudGV4dENvbnRlbnQgPSBgZXN0LiAyMDE0YDtcblxuICAgIGxvZ29XcmFwcGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBsb2dvV3JhcHBlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50U3ViSGVhZGluZyk7XG5cbiAgICAvLyBuYXZiYXIgaW4gaGVhZGVyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xuXG4gICAgbGV0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZMaW5rcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1saW5rcycpO1xuXG4gICAgbGV0IGxpbmtzID0gW107XG4gICAgbGV0IGxpbmtOYW1lcyA9IFsnSG9tZScsICdNZW51JywgJ0Fib3V0IFVzJywgJ0NvbnRhY3QnXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDM7IGkrKykge1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnbGluaycpO1xuICAgICAgICBsaW5rLmlubmVyVGV4dCA9IGxpbmtOYW1lc1tpXTtcbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICB9XG5cbiAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KVxuXG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvV3JhcHBlcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICAvLyBtYWluIGlzIHdoZXJlIHRoZSB0YWIgZGF0YSB3aWxsIGdvXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgXG4gICAgLy8gRmVhdHVyZWQgQ2FyZFxuICAgIGxldCBmZWF0dXJlZFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlZFdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXdyYXBwZXInKTtcblxuICAgIGxldCBmZWF0dXJlZEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmZWF0dXJlZEhlYWRsaW5lLmlubmVySFRNTCA9IGBIb21lIG9mIHRoZSBXb3JsZCBmYW1vdXMgPGJyPidCYWtlZCBQb3RhdG8gQ2hpbGkgQm93bHMnYDtcblxuICAgIGxldCBmZWF0dXJlZEltYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkSW1hZ2VXcmFwcGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1hZ2Utd3JhcHBlcicpO1xuICAgIGxldCBmZWF0dXJlZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZlYXR1cmVkLWltYWdlJyk7XG4gICAgZmVhdHVyZWRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL3BvdGF0by5qcGcnKTtcbiAgICBmZWF0dXJlZEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Jha2VkIHBvdGF0bycpO1xuXG4gICAgZmVhdHVyZWRJbWFnZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWFnZSk7XG5cbiAgICBsZXQgY3RhTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGN0YU1lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjdGEtbWVudScpO1xuICAgIGN0YU1lbnVCdG4uaW5uZXJUZXh0ID0gJ0NsaWNrIGZvciBNZW51JztcblxuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEhlYWRsaW5lKTtcbiAgICBmZWF0dXJlZFdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJbWFnZVdyYXBwZXIpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChjdGFNZW51QnRuKTtcblxuICAgIC8vIEFwcGVuZCBjaGlsZHJlbiB0byBtYWluXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmZWF0dXJlZFdyYXBwZXIpO1xuXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lclRleHQgPSBgQ3JlYXRlZCBieSBNYXR0IEtpc3NpbmdlcmA7XG5cbiAgICAvLyBBcHBlbmQgY2hpbGRyZW4gdG8gI2NvbnRlbnQgZGl2XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5jb25zdCBob21lTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vY2FjaGUgRE9NXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICAvLyBGZWF0dXJlZCBDYXJkXG4gICAgbGV0IGZlYXR1cmVkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtd3JhcHBlcicpO1xuXG4gICAgbGV0IGZlYXR1cmVkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGZlYXR1cmVkSGVhZGxpbmUuaW5uZXJIVE1MID0gYEhvbWUgb2YgdGhlIFdvcmxkIGZhbW91cyA8YnI+J0Jha2VkIFBvdGF0byBDaGlsaSBCb3dscydgO1xuXG4gICAgbGV0IGZlYXR1cmVkSW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZWRJbWFnZVdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWFnZS13cmFwcGVyJyk7XG4gICAgbGV0IGZlYXR1cmVkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmZWF0dXJlZEltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmVhdHVyZWQtaW1hZ2UnKTtcbiAgICBmZWF0dXJlZEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvcG90YXRvLmpwZycpO1xuICAgIGZlYXR1cmVkSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnYmFrZWQgcG90YXRvJyk7XG5cbiAgICBmZWF0dXJlZEltYWdlV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEltYWdlKTtcblxuICAgIGxldCBjdGFNZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3RhTWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2N0YS1tZW51Jyk7XG4gICAgY3RhTWVudUJ0bi5pbm5lclRleHQgPSAnQ2xpY2sgZm9yIE1lbnUnO1xuXG4gICAgZmVhdHVyZWRXcmFwcGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSGVhZGxpbmUpO1xuICAgIGZlYXR1cmVkV3JhcHBlci5hcHBlbmRDaGlsZChmZWF0dXJlZEltYWdlV3JhcHBlcik7XG4gICAgZmVhdHVyZWRXcmFwcGVyLmFwcGVuZENoaWxkKGN0YU1lbnVCdG4pO1xuXG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuIHRvIG1haW5cbiAgICBtYWluLmFwcGVuZENoaWxkKGZlYXR1cmVkV3JhcHBlcik7XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkLCBob21lTG9hZCB9IiwiLy8gbWVudSBwYWdlIGxvYWRlciBmcm9tIGNsaWNraW5nIHRhYlxuXG5jb25zdCBtZW51SXRlbXMgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBwaWN0dXJlLCBtZW51VHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICBwaWN0dXJlOiBwaWN0dXJlLFxuICAgICAgICBtZW51VHlwZTogbWVudVR5cGVcbiAgICB9XG59XG5cbmxldCBicmVha2Zhc3QxID0gY3JlYXRlTWVudUl0ZW0oJ1NjcmFtYmxlJywgJ0NsYXNzaWMgMiBlZ2cgc2NhbWJsZSBicmVha2Zhc3Qgd2l0aCBzaWRlIG9mIHRvYXN0IGFuZCBob21lIGZyaWVzJywgJyQxMicsICcuLi9zcmMvc2NyYW1ibGUuanBnJywgJ2JyZWFrZmFzdCcpO1xubGV0IGJyZWFrZmFzdDIgPSBjcmVhdGVNZW51SXRlbSgnQXZvY2FkbyBUb2FzdCcsICdUaGlzIG1pbGxlbmlhbCBpbmNvbWUgZGVzdHJveWVyIGlzIGhlYWx0aHkgYW5kIG51dHJpdGlvdXMuIFRvYXN0IGZvciAkMTIhISBZb3UgbXVzdCBiZSBjcmF6eSEnLCAnJDEyJywgJy4uL3NyYy9hdm9jYWRvLXRvYXN0LmpwZycsICdicmVha2Zhc3QnKTtcbmxldCBsdW5jaDEgPSBjcmVhdGVNZW51SXRlbSgnUGFzdHJhbWkgb24gUnllJywgYElzIHRoZXJlIGEgYmV0dGVyIHNhbmR3aWNoIG9uIHRoZSBwbGFuZXQ/IEkgZG9uJ3QgdGhpbmsgc28uYCwgJyQxNicsICcuLi9zcmMvcGFzdHJhbWkuanBnJywgJ2x1bmNoJyk7XG5sZXQgbHVuY2gyID0gY3JlYXRlTWVudUl0ZW0oJ0RvdWJsZSBUcm91YmxlJywgYFR3byBhbGwtYmVlZiBwYXR0aWVzIG9uIGEgc2VzYW1lIHNlZWQgYnVuLi4uIElmIHdlIGNvbnRpbnVlIHRoZSBzb25nIHdlJ2xsIGhhdmUgdG8gbGF3eWVyIHVwYCwgYCQxNWAsICcuLi9zcmMvYnVyZ2VyLmpwZycsICdsdW5jaCcpO1xubGV0IGRpbm5lcjEgPSBjcmVhdGVNZW51SXRlbSgnU2FsbW9uIFN0ZWFrJywgYFlvdSdyZSBnb2luZyB0byBvcmRlciBzYWxtb24gZnJvbSBhIGRpbmVyPyEgWW91ciBmdW5lcmFsIGZyaWVuZGAsICckMjAnLCAnLi4vc3JjL3NhbG1vbi5qcGcnLCAnZGlubmVyJyk7XG5sZXQgZGlubmVyMiA9IGNyZWF0ZU1lbnVJdGVtKCdNZWF0bG9hZicsICdBIHRydWUgQW1lcmljYW4gZGlubmVyIHN0YW5kYXJkLiBObyBuYXBzIGluIHRoZSBib290aHMgYWZ0ZXIgdGhlIG1lYWwgcGxlYXNlIScsICckMTgnLCAnLi4vc3JjL21lYXRsb2FmLmpwZycsICdkaW5uZXInKTtcblxubWVudUl0ZW1zLnB1c2goYnJlYWtmYXN0MSk7XG5tZW51SXRlbXMucHVzaChicmVha2Zhc3QyKTtcbm1lbnVJdGVtcy5wdXNoKGx1bmNoMSk7XG5tZW51SXRlbXMucHVzaChsdW5jaDIpO1xubWVudUl0ZW1zLnB1c2goZGlubmVyMSk7XG5tZW51SXRlbXMucHVzaChkaW5uZXIyKTtcblxuY29uc3QgbWVudUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vY2FjaGUgRE9NXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICAvLyBCcmVha2Zhc3QgTWVudSBIZWFkaW5nXG4gICAgbGV0IGJyZWFrZmFzdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBicmVha2Zhc3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICAgIGJyZWFrZmFzdEhlYWRpbmcuaW5uZXJUZXh0ID0gJ0JyZWFrZmFzdCc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGJyZWFrZmFzdEhlYWRpbmcpO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLm1lbnVUeXBlID09PSAnYnJlYWtmYXN0Jykge1xuICAgICAgICAgICAgbWVudUl0ZW1DYXJkQ3JlYXRvcihpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgbHVuY2hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbHVuY2hIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xuICAgIGx1bmNoSGVhZGluZy5pbm5lclRleHQgPSAnTHVuY2gnO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsdW5jaEhlYWRpbmcpO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLm1lbnVUeXBlID09PSAnbHVuY2gnKSB7XG4gICAgICAgICAgICBtZW51SXRlbUNhcmRDcmVhdG9yKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCBkaW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgICBkaW5uZXJIZWFkaW5nLmlubmVyVGV4dCA9ICdEaW5uZXInO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaW5uZXJIZWFkaW5nKTtcblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5tZW51VHlwZSA9PT0gJ2Rpbm5lcicpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtQ2FyZENyZWF0b3IoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbi8vIG1ldGhvZCB0byBnZW5lcmF0ZSBtZW51IGl0ZW0gY2FyZHMgZnJvbSBtZW51SXRlbXMgYXJyYXlcbmZ1bmN0aW9uIG1lbnVJdGVtQ2FyZENyZWF0b3Iob2JqZWN0KSB7XG4gICAgLy9NZW51IEl0ZW0gQ2FyZHNcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgbGV0IG1lbnVJdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtd3JhcHBlcicpO1xuXG4gICAgbGV0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudUl0ZW1OYW1lLmlubmVyVGV4dCA9IGAke29iamVjdC5uYW1lfWA7XG5cbiAgICBsZXQgbWVudUl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBtZW51SXRlbURlc2MuaW5uZXJIVE1MID0gYCR7b2JqZWN0LmRlc2NyaXB0aW9ufWA7XG5cbiAgICBsZXQgbWVudUltYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJbWFnZVdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWFnZS13cmFwcGVyJyk7XG4gICAgbGV0IG1lbnVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVJbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZlYXR1cmVkLWltYWdlJyk7XG4gICAgbWVudUltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgb2JqZWN0LnBpY3R1cmUpO1xuXG4gICAgbWVudUltYWdlV3JhcHBlci5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xuXG4gICAgbGV0IG1lbnVJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVJdGVtUHJpY2UuaW5uZXJUZXh0ID0gYCR7b2JqZWN0LnByaWNlfWA7XG5cbiAgICBtZW51SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcbiAgICBtZW51SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjKTtcbiAgICBtZW51SXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUltYWdlV3JhcHBlcik7XG4gICAgbWVudUl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtUHJpY2UpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbVdyYXBwZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51TG9hZCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgcGFnZUxvYWQsIGhvbWVMb2FkIH0gZnJvbSAnLi9ob21lJztcbmltcG9ydCBtZW51TG9hZCBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGFib3V0TG9hZCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBjb250YWN0VXNMb2FkIGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGNsaWNrZWRMaW5rID0gJyc7XG5cbnBhZ2VMb2FkKCk7XG5cblxuXG4vLyBjYWNoZSBET01cbmxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluaycpO1xuXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdGEtbWVudScpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWVudUxvYWQoKTtcbn0pXG5cbmxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGlja2VkTGluayA9IGxpbmsuaW5uZXJUZXh0O1xuICAgICAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHN3aXRjaCAoY2xpY2tlZExpbmspIHtcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgICAgIGhvbWVMb2FkKCk7XG4gICAgICAgICAgICAgICAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3RhLW1lbnUnKTtcbiAgICAgICAgICAgICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBtZW51TG9hZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgICAgICBtZW51TG9hZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQWJvdXQgVXMnOiBcbiAgICAgICAgICAgICAgICBhYm91dExvYWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NvbnRhY3QnOlxuICAgICAgICAgICAgICAgIGNvbnRhY3RVc0xvYWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIG11c3QgYmUgaW4gZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=