/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  ---font-color: #5e5151;\\n  --main-color: hsl(0, 0%, 87%);\\n}\\n\\nhtml {\\n  box-sizing: border-box;\\n  font-size: 100%;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  box-sizing: inherit;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 14px;\\n  font-weight: 400;\\n  background-color: var(--main-color);\\n  margin-block: 40px;\\n}\\n\\nimg {\\n  width: 14px;\\n}\\n\\n.todo-list-placeholder {\\n  width: 80%;\\n  margin-inline: auto;\\n  background: #f8f7f2;\\n  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);\\n}\\n\\n.title-input-container .title-cont,\\n.title-input-container .header-form {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: thin solid #d0c5c5;\\n  padding: 18px;\\n  position: relative;\\n}\\n.title-input-container .title-cont .todo-title,\\n.title-input-container .header-form .todo-title {\\n  font-weight: 400;\\n  color: #494242;\\n}\\n.title-input-container .title-cont .error-msg,\\n.title-input-container .header-form .error-msg {\\n  color: red;\\n  position: absolute;\\n  top: 21px;\\n  right: 163px;\\n  font-weight: 500;\\n}\\n.title-input-container .header-form input {\\n  height: 80%;\\n  width: 100%;\\n  font-size: 18px;\\n  border: none;\\n  background: inherit;\\n  margin-right: 9px;\\n  font-style: italic;\\n  font-weight: 400;\\n  font-family: inherit;\\n  color: var(---font-color);\\n}\\n.title-input-container .header-form input::placeholder {\\n  color: #6a6161;\\n  font-weight: 300;\\n}\\n.title-input-container .header-form input:focus {\\n  outline: none;\\n}\\n.title-input-container .header-form img {\\n  width: 20px;\\n  cursor: pointer;\\n}\\n.title-input-container .header-form img:hover {\\n  border: thin solid #c2baba;\\n  padding: 1px;\\n}\\n\\n.list-item {\\n  display: flex;\\n  border-bottom: thin solid #d0c5c5;\\n  padding: 18px;\\n  list-style-type: none;\\n}\\n.list-item.active {\\n  background-color: #ffffbc;\\n}\\n.list-item .finished-task {\\n  display: none;\\n  width: 20px;\\n  margin-left: -3px;\\n  cursor: pointer;\\n}\\n.list-item .finished-task.active {\\n  display: inline-block;\\n}\\n.list-item input[type=checkbox] {\\n  cursor: pointer;\\n  transition: all 0.2s ease-in-out;\\n  width: 20px;\\n}\\n.list-item label {\\n  margin-left: 14px;\\n  font-size: 16px;\\n  letter-spacing: 0.2px;\\n  color: var(---font-color);\\n}\\n.list-item label.active {\\n  text-decoration: line-through;\\n}\\n.list-item .menu {\\n  display: block;\\n  margin-left: auto;\\n  width: 20px;\\n}\\n.list-item .menu:hover {\\n  cursor: all-scroll;\\n}\\n.list-item .edit-field {\\n  height: 80%;\\n  width: 100%;\\n  font-size: 18px;\\n  border: none;\\n  background: inherit;\\n  margin-right: 9px;\\n  font-weight: 400;\\n  font-family: inherit;\\n  margin-left: 14px;\\n  color: var(---font-color);\\n}\\n.list-item .edit-field:focus {\\n  outline: none;\\n}\\n.list-item .img-delete {\\n  width: 20px;\\n  cursor: pointer;\\n}\\n\\n.clear-all .clear-tasks {\\n  text-align: center;\\n  display: block;\\n  padding-block: 20px;\\n  font-size: 18px;\\n  color: #827676;\\n  text-decoration: none;\\n  background-color: var(--main-color);\\n}\\n.clear-all .clear-tasks:hover {\\n  text-decoration: underline;\\n  color: hsl(0deg, 0%, 0%);\\n}\\n\\n.none {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://y/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://y/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://y/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://y/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _modules_header_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header-input.js */ \"./src/modules/header-input.js\");\n/* harmony import */ var _modules_todo_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo-item.js */ \"./src/modules/todo-item.js\");\n/* harmony import */ var _modules_editable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/editable.js */ \"./src/modules/editable.js\");\n/* harmony import */ var _modules_addTaskToLocal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addTaskToLocal.js */ \"./src/modules/addTaskToLocal.js\");\n/* harmony import */ var _modules_status_update_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/status-update.js */ \"./src/modules/status-update.js\");\n/* harmony import */ var _modules_save_retrieve_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/save-retrieve.js */ \"./src/modules/save-retrieve.js\");\n/* harmony import */ var _modules_reset_indices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/reset-indices.js */ \"./src/modules/reset-indices.js\");\n/* harmony import */ var _modules_formValidation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/formValidation.js */ \"./src/modules/formValidation.js\");\n\n\n\n\n\n\n\n\n\n\nconst todoList = document.querySelector('.todo-list');\n\nconst todoListPlaceHolder = document.querySelector('.todo-list-placeholder');\ntodoListPlaceHolder.prepend((0,_modules_header_input_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\nconst populateList = (list) => {\n  list.forEach((item) => {\n    const { description, id, completed } = item;\n    const listItem = (0,_modules_todo_item_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id, description);\n    if (completed) {\n      listItem.querySelector(`#task${id}`).classList.add('active');\n      listItem.children[0].checked = true;\n    }\n    todoList.appendChild(listItem);\n  });\n};\n\nconst handleOnCheckboxClick = () => {\n  document.querySelectorAll('.checkbox').forEach((checkbox) => {\n    checkbox.addEventListener('change', () => {\n      const checkBoxId = Number(checkbox.id);\n      const label = checkbox.parentElement.children[1];\n\n      if (checkbox.checked) {\n        label.classList.add('active');\n      } else {\n        label.classList.remove('active');\n      }\n      (0,_modules_status_update_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(checkBoxId);\n    });\n  });\n};\n\nconst deleteSingleItem = (deleteIcon, parent) => {\n  deleteIcon.addEventListener('click', () => {\n    parent.parentElement.removeChild(parent);\n    // we also update the local storage accordingly\n    const refId = parent.children[0].id;\n\n    const fromLocalStorage = (0,_modules_save_retrieve_js__WEBPACK_IMPORTED_MODULE_6__.retrieveFromLocal)();\n    (0,_modules_addTaskToLocal_js__WEBPACK_IMPORTED_MODULE_4__.removeItemFromLocal)(+refId);\n    (0,_modules_reset_indices_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fromLocalStorage);\n  });\n};\n\n// update task after being edited\nconst updateEdited = (checkBoxId, input, menuClickEvent) => {\n  let fromLocal = JSON.parse((0,_modules_save_retrieve_js__WEBPACK_IMPORTED_MODULE_6__.retrieveFromLocal)());\n  fromLocal = fromLocal.map((task) => {\n    if (task.id === checkBoxId) {\n      const obj = {\n        ...task,\n        description: input,\n        completed: false,\n      };\n      return obj;\n    }\n    return task;\n  });\n  // we can as well rerender the updated item to the ui\n  document.querySelector('.todo-list').innerHTML = '';\n  populateList(fromLocal);\n  handleOnCheckboxClick();\n  menuClickEvent();\n\n  (0,_modules_save_retrieve_js__WEBPACK_IMPORTED_MODULE_6__.storeToLocal)(fromLocal);\n};\n\n// handles both update and deletion of a single task\nconst handleItemMenuClick = () => {\n  document.querySelectorAll('.menu').forEach((menu) => {\n    menu.addEventListener('click', (e) => {\n      const parent = e.target.parentElement;\n      const valueToEdit = parent.children[1].textContent;\n\n      parent.children[0].setAttribute('disabled', 'true');\n      const checkBoxId = Number(parent.children[0].id);\n\n      parent.removeChild(parent.children[1]);\n      parent.removeChild(parent.children[parent.children.length - 1]);\n\n      const [input, deleteIcon] = (0,_modules_editable_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(valueToEdit);\n      parent.appendChild(input);\n      parent.appendChild(deleteIcon);\n      const end = valueToEdit.length;\n      input.setSelectionRange(end, end);\n      input.focus();\n      parent.classList.add('active');\n\n      // if the user edits the value, update to new value and update local storage\n      let newValue = input.value;\n      input.addEventListener('change', (e) => {\n        e.preventDefault();\n        newValue = input.value;\n      });\n\n      input.addEventListener('keyup', (e) => {\n        if (e.key === 'Enter') {\n          if (newValue) {\n            updateEdited(checkBoxId, newValue, handleItemMenuClick);\n          }\n        }\n      });\n\n      // delete item\n      deleteSingleItem(deleteIcon, parent);\n    });\n  });\n};\n\nconst clearAllCompleted = () => {\n  const fromLocalStorage = (0,_modules_addTaskToLocal_js__WEBPACK_IMPORTED_MODULE_4__.removeCompletedTasksFromLocal)(window.localStorage);\n  if (fromLocalStorage.length > 0) {\n    // we update the ui after after clearing all tasks\n    document.querySelector('.todo-list').innerHTML = '';\n    populateList(fromLocalStorage);\n    handleOnCheckboxClick();\n    handleItemMenuClick();\n\n    // reset the ids of the remaining tasks\n    (0,_modules_reset_indices_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fromLocalStorage);\n  }\n};\n\nconst renderFromLocal = () => {\n  let fromLocalStorage = (0,_modules_save_retrieve_js__WEBPACK_IMPORTED_MODULE_6__.retrieveFromLocal)();\n  if (fromLocalStorage !== null && fromLocalStorage.length) {\n    fromLocalStorage = JSON.parse(fromLocalStorage);\n    // we update the ui after after clearing all tasks\n    document.querySelector('.todo-list').innerHTML = '';\n    populateList(fromLocalStorage);\n    handleOnCheckboxClick();\n    handleItemMenuClick();\n  }\n};\n\nconst createTodo = () => {\n  const create = () => {\n    const todoInput = document.querySelector('#add-list');\n    if (todoInput.value.trim().length === 0) {\n      (0,_modules_formValidation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(todoInput);\n      return;\n    }\n    (0,_modules_addTaskToLocal_js__WEBPACK_IMPORTED_MODULE_4__.addTaskToLocal)(todoInput.value);\n    renderFromLocal();\n    todoInput.value = '';\n  };\n\n  document.querySelector('.header-form').addEventListener('submit', (e) => {\n    e.preventDefault();\n    create();\n  });\n  document.querySelector('.enter-icon').addEventListener('click', () => {\n    create();\n  });\n};\n\nwindow.addEventListener('load', () => {\n  renderFromLocal();\n  createTodo();\n\n  document.querySelector('.clear-tasks').addEventListener('click', () => {\n    clearAllCompleted();\n  });\n});\n\n\n//# sourceURL=webpack://y/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTaskToLocal.js":
/*!***************************************!*\
  !*** ./src/modules/addTaskToLocal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"addTaskToLocal\": () => (/* binding */ addTaskToLocal),\n/* harmony export */   \"createTaskAddToLocal\": () => (/* binding */ createTaskAddToLocal),\n/* harmony export */   \"removeCompletedTasksFromLocal\": () => (/* binding */ removeCompletedTasksFromLocal),\n/* harmony export */   \"removeItemFromLocal\": () => (/* binding */ removeItemFromLocal),\n/* harmony export */   \"removeTaskHelper\": () => (/* binding */ removeTaskHelper)\n/* harmony export */ });\nclass Task {\n  constructor(description, completed, id) {\n    this.description = description;\n    this.completed = completed;\n    this.id = id;\n  }\n}\n\nconst createTaskAddToLocal = (description, local) => {\n  let onLocalStorage = local.getItem('todo-tasks');\n  if (!onLocalStorage) {\n    const task = new Task(description, false, 1);\n    local.setItem('todo-tasks', JSON.stringify([task]));\n  } else {\n    onLocalStorage = JSON.parse(onLocalStorage);\n    const task = new Task(description, false, onLocalStorage.length + 1);\n    local.setItem('todo-tasks', JSON.stringify([...onLocalStorage, task]));\n  }\n};\n\nconst addTaskToLocal = (description) => {\n  createTaskAddToLocal(description, window.localStorage);\n};\n\nconst removeTaskHelper = (id, local) => {\n  let fromLocalStorage = JSON.parse(local.getItem('todo-tasks'));\n  if (fromLocalStorage.length) {\n    fromLocalStorage = fromLocalStorage.filter((task) => {\n      const condition = task.id !== id;\n      return condition;\n    });\n  }\n\n  local.setItem('todo-tasks', JSON.stringify(fromLocalStorage));\n};\n\nconst removeItemFromLocal = (id) => {\n  removeTaskHelper(id, window.localStorage);\n};\n\nconst removeCompletedTasksFromLocal = (local) => {\n  let fromLocalStorage = JSON.parse(local.getItem('todo-tasks'));\n  if (fromLocalStorage.length) {\n    fromLocalStorage = fromLocalStorage.filter(\n      (task) => task.completed === false,\n    );\n    return fromLocalStorage;\n  }\n  return [];\n};\n\n\n\n\n//# sourceURL=webpack://y/./src/modules/addTaskToLocal.js?");

/***/ }),

/***/ "./src/modules/editable.js":
/*!*********************************!*\
  !*** ./src/modules/editable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/delete.svg */ \"./src/assets/delete.svg\");\n\n\nconst editableList = (valueToEdit) => {\n  const input = document.createElement('input');\n  input.classList.add('edit-field');\n  input.setAttribute('value', `${valueToEdit}`);\n\n  const img = document.createElement('img');\n  img.classList.add('img-delete');\n  img.setAttribute('alt', 'delete');\n  img.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;\n\n  return [input, img];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editableList);\n\n\n//# sourceURL=webpack://y/./src/modules/editable.js?");

/***/ }),

/***/ "./src/modules/formValidation.js":
/*!***************************************!*\
  !*** ./src/modules/formValidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validateForm = (input) => {\n  const error = document.createElement('p');\n  error.classList.add('error-msg');\n  error.innerText = 'Please fill out this field';\n  input.parentElement.appendChild(error);\n  setTimeout(() => {\n    input.parentElement.removeChild(error);\n  }, 1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateForm);\n\n\n//# sourceURL=webpack://y/./src/modules/formValidation.js?");

/***/ }),

/***/ "./src/modules/header-input.js":
/*!*************************************!*\
  !*** ./src/modules/header-input.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_refresh_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/refresh.svg */ \"./src/assets/refresh.svg\");\n/* harmony import */ var _assets_enter_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/enter.svg */ \"./src/assets/enter.svg\");\n\n\n\nconst createHeaderInput = () => {\n  const titleInputContainer = document.createElement('div');\n  titleInputContainer.classList.add('title-input-container');\n\n  titleInputContainer.innerHTML = `\n        <div class=\"title-cont\">\n          <h2 class=\"todo-title\">Today's To Do</h2>\n          <img src=\"${_assets_refresh_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Refresh\" />\n        </div>\n\n        <form action=\"#\" class=\"header-form\" id=\"form\">\n          <input type=\"text\" id=\"add-list\" placeholder=\"Add your list ...\" />\n          <img src=\"${_assets_enter_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"enter-item\" class=\"enter-icon\" />\n        </form>\n    `;\n\n  return titleInputContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeaderInput);\n\n\n//# sourceURL=webpack://y/./src/modules/header-input.js?");

/***/ }),

/***/ "./src/modules/reset-indices.js":
/*!**************************************!*\
  !*** ./src/modules/reset-indices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _save_retrieve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-retrieve.js */ \"./src/modules/save-retrieve.js\");\n\n\nconst resetIndices = (fromLocalStorage) => {\n  // reset the ids of the remaining tasks\n  fromLocalStorage = fromLocalStorage.map((task, index) => {\n    const result = {\n      ...task,\n      id: index + 1,\n    };\n    return result;\n  });\n\n  (0,_save_retrieve_js__WEBPACK_IMPORTED_MODULE_0__.storeToLocal)(fromLocalStorage);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resetIndices);\n\n\n//# sourceURL=webpack://y/./src/modules/reset-indices.js?");

/***/ }),

/***/ "./src/modules/save-retrieve.js":
/*!**************************************!*\
  !*** ./src/modules/save-retrieve.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"retrieveFromLocal\": () => (/* binding */ retrieveFromLocal),\n/* harmony export */   \"storeToLocal\": () => (/* binding */ storeToLocal)\n/* harmony export */ });\nconst storeToLocal = (array) => {\n  window.localStorage.setItem('todo-tasks', JSON.stringify(array));\n};\n\nconst retrieveFromLocal = () => {\n  const fromLocal = window.localStorage.getItem('todo-tasks');\n  return fromLocal;\n};\n\n\n\n\n//# sourceURL=webpack://y/./src/modules/save-retrieve.js?");

/***/ }),

/***/ "./src/modules/status-update.js":
/*!**************************************!*\
  !*** ./src/modules/status-update.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst statusUpdate = (currentId) => {\n  let localStorage = JSON.parse(window.localStorage.getItem('todo-tasks'));\n  localStorage = localStorage.map((task) => {\n    if (task.id === currentId) {\n      return {\n        ...task,\n        completed: !task.completed,\n      };\n    }\n    return task;\n  });\n\n  window.localStorage.setItem('todo-tasks', JSON.stringify(localStorage));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusUpdate);\n\n\n//# sourceURL=webpack://y/./src/modules/status-update.js?");

/***/ }),

/***/ "./src/modules/todo-item.js":
/*!**********************************!*\
  !*** ./src/modules/todo-item.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu.svg */ \"./src/assets/menu.svg\");\n\n\nconst createTodoItem = (id, description) => {\n  const li = document.createElement('li');\n  li.classList.add('list-item');\n  li.id = `list${id}`;\n\n  li.innerHTML = `\n       <input type=\"checkbox\" id=\"${id}\" class=\"checkbox\" />\n       <label for=\"#${id}\" id=\"task${id}\">${description}</label>\n       <img class=\"menu\" src=\"${_assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"3-dot menu\" />\n    `;\n  return li;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoItem);\n\n\n//# sourceURL=webpack://y/./src/modules/todo-item.js?");

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"delete.svg\";\n\n//# sourceURL=webpack://y/./src/assets/delete.svg?");

/***/ }),

/***/ "./src/assets/enter.svg":
/*!******************************!*\
  !*** ./src/assets/enter.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"enter.svg\";\n\n//# sourceURL=webpack://y/./src/assets/enter.svg?");

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu.svg\";\n\n//# sourceURL=webpack://y/./src/assets/menu.svg?");

/***/ }),

/***/ "./src/assets/refresh.svg":
/*!********************************!*\
  !*** ./src/assets/refresh.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"refresh.svg\";\n\n//# sourceURL=webpack://y/./src/assets/refresh.svg?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;