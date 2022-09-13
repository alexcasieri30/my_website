/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/odin_projects/todo_list_webpack/assets/index.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/odin_projects/todo_list_webpack/assets/index.scss ***!
  \********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./corduroy.ttf */ \"./src/odin_projects/todo_list_webpack/assets/corduroy.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./roboto.ttf */ \"./src/odin_projects/todo_list_webpack/assets/roboto.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: corduroy;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: roboto;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\nbody {\\n  margin: 0px;\\n  overflow: auto;\\n}\\n\\n.page {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n  width: 100vw;\\n}\\n\\n.header {\\n  margin: 0px;\\n  flex: 0.05;\\n  border: solid 1px black;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n.header .header-elements {\\n  cursor: pointer;\\n  padding: 10px;\\n  flex: 0.333333;\\n  text-align: center;\\n}\\n.header .header-elements:hover {\\n  background-color: gray;\\n}\\n\\n.body {\\n  background-color: rgba(223, 255, 215, 0.8);\\n  flex: 0.9;\\n  display: flex;\\n  flex-direction: row;\\n}\\n.body .projects {\\n  flex: 0.2;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.body .projects .add-new {\\n  flex: 0.15;\\n  display: flex;\\n  justify-content: center;\\n}\\n.body .projects .project-list {\\n  flex: 0.85;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.body .projects .project-list .section1 {\\n  text-align: center;\\n  padding: 0px;\\n  flex: 0.1;\\n}\\n.body .projects .project-list .section1 .project-header {\\n  font-family: corduroy;\\n  margin-top: 20px;\\n  margin-bottom: 15px;\\n  font-size: 20pt;\\n}\\n.body .projects .project-list .section2 {\\n  flex: 0.7;\\n  flex-direction: column;\\n}\\n.body .projects .project-list .section2 .project-title {\\n  font-family: roboto;\\n  text-align: center;\\n  padding: 15px;\\n}\\n.body .projects .project-list .section2 .project-title:hover {\\n  cursor: pointer;\\n  background-color: gray;\\n}\\n.body .projects .project-list .section3 {\\n  flex: 0.2;\\n}\\n.body .note-area {\\n  flex: 0.8;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.body .note-area .filter {\\n  flex: 0.15;\\n  border: solid 1px black;\\n  display: flex;\\n  flex-direction: row;\\n}\\n.body .note-area .filter .filter-options-div {\\n  margin-bottom: 8px;\\n  margin-top: 0px;\\n  margin-left: 8px;\\n  flex: 0.6;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.body .note-area .filter .filter-options-div .filterby {\\n  flex: 0.3;\\n}\\n.body .note-area .filter .filter-options-div .dropdowns {\\n  padding: 0px;\\n  margin: 0px;\\n  flex: 0.7;\\n}\\n.body .note-area .filter .filter-options-div .dropdowns .dropdown {\\n  margin-top: 20px;\\n  margin-bottom: 0px;\\n  margin-left: 30px;\\n  float: left;\\n  width: 100px;\\n  height: 30px;\\n}\\n.body .note-area .filter .filter-options-div .dropdowns #clear-all {\\n  cursor: pointer;\\n  height: 30px;\\n  border-radius: 5px;\\n  border: solid 1px black;\\n}\\n.body .note-area .filter .extra-whitespace {\\n  flex: 0.4;\\n}\\n.body .note-area .noteboard {\\n  flex: 0.85;\\n  border: solid 1px black;\\n  overflow: scroll;\\n}\\n.body .note-area .noteboard .grid {\\n  z-index: 0;\\n  width: 90%;\\n  height: 90%;\\n  margin: 15px;\\n  display: grid;\\n  grid-template-columns: repeat(5, 150px);\\n  grid-template-rows: repeat(8, 150px);\\n  grid-gap: 20px;\\n}\\n\\n.active-note {\\n  overflow: scroll;\\n  border: solid 1px black;\\n  border-radius: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 10px;\\n}\\n.active-note .active-note-title-area {\\n  border: solid 1px black;\\n  flex: 0.2;\\n  display: flex;\\n}\\n.active-note .active-note-title-area .title-area-title {\\n  flex: 0.7;\\n}\\n.active-note .active-note-title-area .title-area-edit {\\n  flex: 0.3;\\n}\\n.active-note .active-note-title-area .title-area-edit #edit {\\n  background-color: white;\\n  border: none;\\n  cursor: pointer;\\n}\\n.active-note .active-note-text {\\n  flex: 0.8;\\n  overflow-y: scroll;\\n  overflow-wrap: break-word;\\n}\\n.active-note .active-note-details {\\n  z-index: 0;\\n  text-align: center;\\n  position: relative;\\n  top: 20px;\\n  background-color: rgba(100, 200, 200, 0.3);\\n}\\n.active-note .active-note-details:hover {\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\\n\\n.center-content {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.new-note-information {\\n  top: 100px;\\n  border-radius: 20px;\\n  position: absolute;\\n  background-color: rgba(220, 220, 120, 0.9);\\n  margin: auto;\\n  height: 500px;\\n  width: 500px;\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);\\n}\\n.new-note-information .new-note-header {\\n  text-align: center;\\n  flex: 0.2;\\n  display: flex;\\n  flex-direction: row;\\n}\\n.new-note-information .new-note-header .new-note-header-text {\\n  margin-left: 30px;\\n  flex: 0.9;\\n}\\n.new-note-information .new-note-header .x-out-image {\\n  cursor: pointer;\\n  margin-top: 10px;\\n  flex: 0.1;\\n}\\n.new-note-information .new-note-body {\\n  flex: 0.7;\\n  margin-top: 40px;\\n  margin-left: 10%;\\n  margin-right: 10%;\\n}\\n.new-note-information .new-note-body .new-note-title {\\n  display: flex;\\n  justify-content: center;\\n}\\n.new-note-information .new-note-body .new-note-title #title {\\n  width: 80%;\\n}\\n.new-note-information .new-note-body .new-note-author-project {\\n  display: flex;\\n  justify-content: center;\\n}\\n.new-note-information .new-note-body .new-note-author-project #author {\\n  margin-right: 13px;\\n}\\n.new-note-information .new-note-body .new-note-author-project #project {\\n  margin-left: 13px;\\n}\\n.new-note-information .new-note-body .new-note-text {\\n  display: flex;\\n  justify-content: center;\\n}\\n.new-note-information .new-note-body #text {\\n  width: 80%;\\n  height: 120px;\\n}\\n.new-note-information .new-note-footer {\\n  flex: 0.1;\\n}\\n.new-note-information .new-note-footer .submit-note-div {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 20px;\\n}\\n.new-note-information .new-note-footer #submit-note {\\n  cursor: pointer;\\n  background-color: rgba(180, 180, 120, 0.9);\\n  width: 100px;\\n  height: 40px;\\n  border-radius: 10px;\\n  border: solid 1px black;\\n  margin-bottom: 10px;\\n}\\n\\n.new-project-information {\\n  top: 100px;\\n  border-radius: 20px;\\n  background-color: rgba(220, 220, 120, 0.9);\\n  position: absolute;\\n  margin: auto;\\n  height: 500px;\\n  width: 500px;\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);\\n}\\n.new-project-information .new-project-header {\\n  text-align: center;\\n  flex: 0.1;\\n  display: flex;\\n  flex-direction: row;\\n}\\n.new-project-information .new-project-header .new-project-header-text {\\n  margin-left: 30px;\\n  flex: 0.9;\\n}\\n.new-project-information .new-project-header .x-out-image {\\n  cursor: pointer;\\n  margin-top: 10px;\\n  flex: 0.1;\\n}\\n.new-project-information .new-project-body {\\n  flex: 0.8;\\n}\\n.new-project-information .new-project-body .new-project-title {\\n  display: flex;\\n  justify-content: center;\\n}\\n.new-project-information .new-project-body .new-project-title #title {\\n  width: 80%;\\n}\\n.new-project-information .new-project-body .new-project-text {\\n  display: flex;\\n  justify-content: center;\\n  height: 70%;\\n}\\n.new-project-information .new-project-body .new-project-text #project-text {\\n  width: 80%;\\n  height: 150px;\\n}\\n.new-project-information .new-project-footer {\\n  flex: 0.1;\\n}\\n.new-project-information .new-project-footer #submit-project {\\n  cursor: pointer;\\n  background-color: rgba(180, 180, 120, 0.9);\\n  width: 100px;\\n  height: 40px;\\n  border-radius: 10px;\\n  border: solid 1px black;\\n}\\n.new-project-information .new-project-footer .submit-project-div {\\n  display: flex;\\n  justify-content: center;\\n  margin-bottom: 10px;\\n}\\n\\n#new-note {\\n  cursor: pointer;\\n  background-color: rgba(102, 204, 255, 0.88);\\n  margin-top: 8%;\\n  margin-right: 8px;\\n  width: 100px;\\n  height: 40px;\\n  border-radius: 10px;\\n  border: solid 1px black;\\n}\\n\\n#new-note:active {\\n  background-color: #6e6ef7;\\n  border: solid 7px #0088cc;\\n}\\n\\n#new-note:focus {\\n  border: solid 3px #0088cc;\\n}\\n\\n#new-project {\\n  cursor: pointer;\\n  background-color: rgba(102, 204, 255, 0.88);\\n  margin-top: 8%;\\n  margin-left: 8px;\\n  width: 100px;\\n  height: 40px;\\n  border-radius: 10px;\\n  border: solid 1px black;\\n}\\n\\n#new-project:active {\\n  background-color: #6e6ef7;\\n  border: solid 7px #0088cc;\\n}\\n\\n#new-project:focus {\\n  border: solid 3px #0088cc;\\n}\\n\\n.x-out-img {\\n  opacity: 1;\\n  background-color: transparent;\\n  height: 20px;\\n  width: 20px;\\n}\\n\\n.popup {\\n  background-color: gray;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.footer {\\n  border: solid 1px black;\\n  flex: 0.05;\\n}\\n\\ntextarea {\\n  resize: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\na:hover {\\n  text-decoration: none;\\n}\\n\\na:visited {\\n  text-decoration: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/assets/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my_website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://my_website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my_website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/assets/index.scss":
/*!***************************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/assets/index.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/odin_projects/todo_list_webpack/assets/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/assets/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my_website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my_website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my_website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my_website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my_website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my_website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, networkInterfaces, mac, os; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports[\"default\"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://my_website/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/display_functions.js":
/*!******************************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/display_functions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayFunctions\": () => (/* binding */ displayFunctions)\n/* harmony export */ });\n/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ \"./src/odin_projects/todo_list_webpack/objects.js\");\n/* harmony import */ var _assets_x_out_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/x_out.jpg */ \"./src/odin_projects/todo_list_webpack/assets/x_out.jpg\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst displayFunctions = function(){\n    const xout_image = function(){\n        let note_creator = document.querySelector(\".new-note-information\");\n        let project_creator = document.querySelector(\".new-project-information\")\n        note_creator.classList.add(\"hidden\");\n        project_creator.classList.add(\"hidden\");\n        let body = document.querySelector('body');\n        body.classList.remove(\"popup\")\n        let dropdowns = document.querySelectorAll(\".dropdown\");\n        for (let i = 0; i < dropdowns.length; i++){\n            dropdowns[i].classList.remove(\"popup\");\n        }\n    }\n    const new_project_button = function(){\n        let new_project_info = document.querySelector(\".new-project-information\")\n        new_project_info.classList.remove(\"hidden\");\n        let body = document.querySelector('body');\n        body.classList.add(\"popup\")\n        let dropdowns = document.querySelectorAll(\".dropdown\");\n        for (let i = 0; i < dropdowns.length; i++){\n            dropdowns[i].classList.add(\"popup\");\n        }\n    }\n    const create_project_button = function(){\n        let title = document.querySelector(\"#title\").value;\n        let project_name = window.localStorage.getItem(\"project\");\n        if (project_name==null){\n            window.localStorage.setItem(\"project\",JSON.stringify([title]));\n        }else{\n            let projects = JSON.parse(window.localStorage.getItem('project'));\n            console.log(projects);\n            projects.push(title);\n            window.localStorage.setItem(\"project\", JSON.stringify(projects));\n        }\n        let project_container = document.querySelector(\".section2\");\n        let newdiv = document.createElement(\"div\");\n        newdiv.classList.add(\"project-title\");\n        newdiv.innerHTML = title;\n        project_container.appendChild(newdiv);\n\n        let popup = document.querySelector(\".new-project-information\")\n        popup.classList.add(\"hidden\");\n        let body = document.querySelector('body');\n        body.classList.remove(\"popup\")\n        let dropdowns = document.querySelectorAll(\".dropdown\");\n        for (let i = 0; i < dropdowns.length; i++){\n            dropdowns[i].classList.remove(\"popup\");\n        }\n    }\n    const add_note_button = function(){\n        console.log(\"add_note_button started\")\n        let dropdowns = document.querySelectorAll(\".dropdown\");\n        for (let i = 0; i < dropdowns.length; i++){\n            dropdowns[i].classList.add(\"popup\");\n        }\n        let popup = document.querySelector(\".new-note-information\");\n        let body = document.querySelector('body');\n        body.classList.add(\"popup\");\n        popup.classList.remove(\"hidden\");\n        console.log(\"add_note_button finished\");\n    }\n    const edit_button = function(){\n        let oldtextarea = document.getElementById(\"temp-note-text\");\n        if (!oldtextarea){\n            //get inner html first\n            let textarea = document.querySelector('.notetext');\n            let text = textarea.innerHTML;\n            textarea.innerHTML = \"\";\n            let newtextarea = document.createElement('textarea');\n            newtextarea.id=\"temp-note-text\";\n            newtextarea.placeholder=\"Enter note text\";\n            newtextarea.value = text;\n            let note_text = document.querySelector('.notetext');\n            note_text.appendChild(newtextarea);\n        }\n        let oldtitletext = document.getElementById(\"temp-note-title\");\n        if (!oldtitletext){\n            let title_textarea = document.querySelector(\".title-textarea\");\n            let title_innerhtml = title_textarea.innerHTML;\n            title_textarea.innerHTML = \"\";\n            let newtitleinput = document.createElement('input');\n            newtitleinput.id=\"temp-note-title\";\n            newtitleinput.type=\"textarea\";\n            newtitleinput.name=\"note-title\";\n            newtitleinput.placeholder=\"Enter title\";\n            newtitleinput.value = title_innerhtml;\n            let label = document.createElement('label');\n            label.for=\"note-title\";\n            title_textarea.appendChild(label);\n            title_textarea.appendChild(newtitleinput);\n        }\n        let oldauthortext = document.getElementById(\"author\");\n        if (!oldauthortext){\n            let authortextarea = document.querySelector(\".author-text\");\n            let author_innerhtml = authortextarea.innerHTML;\n            authortextarea.innerHTML = \"\";\n            let newauthorinput = document.createElement('input');\n            newauthorinput.type=\"textarea\";\n            newauthorinput.id=\"author\";\n            newauthorinput.name=\"author-input\";\n            newauthorinput.placeholder=\"Enter author\";\n            newauthorinput.value = author_innerhtml;\n            console.log(newauthorinput);\n            authortextarea.appendChild(newauthorinput);\n        }\n\n    }\n    const save_button = function(note){\n        let text = document.getElementById('temp-note-text');\n        let title = document.getElementById('temp-note-title');\n        let author = document.getElementById('author');\n        author.classList.add('hidden');\n        title.classList.add('hidden');\n        text.classList.add(\"hidden\");\n\n        let title_text = title.value;\n        let title_textarea = document.querySelector('.title-textarea');\n        title_textarea.innerHTML = title_text;\n        note.setTitle(title_text);\n        \n        let textarea = document.querySelector('.notetext');\n        textarea.innerHTML = text.value;\n        note.setText(text.value)\n\n        let author_text = author.value;\n        let author_textarea = document.querySelector(\".author-text\");\n        author_textarea.innerHTML = author_text;\n        note.setAuthor(author_text);\n    }\n\n    const create_note = function(title, text, author, id, project){\n        let notes_area = document.querySelector('.grid');\n        console.log(notes_area);\n\n        let newnote = document.createElement('div');\n        newnote.classList.add('active-note');\n        \n        let note_title = document.createElement('div');\n        let note_text = document.createElement('div');\n\n        note_title.classList.add(\"active-note-title\");\n        note_title.innerHTML = title;\n        note_text.classList.add(\"active-note-text\");\n        note_text.innerHTML = text;\n        \n        newnote.appendChild(note_title);\n        newnote.appendChild(note_text);\n        let details_div = document.createElement(\"div\");\n        details_div.classList.add(\"active-note-details\");\n        details_div.innerHTML = \"details\";\n        details_div.onclick = function(event){\n            console.log(\"details clicked\");\n            console.log(event);\n        }\n        newnote.appendChild(details_div);\n        console.log(newnote);\n        notes_area.appendChild(newnote);\n    }\n\n    const submit_button = function(note){\n        let dropdowns = document.querySelectorAll(\".dropdown\");\n        for (let i = 0; i < dropdowns.length; i++){\n            dropdowns[i].classList.remove(\"popup\");\n        }\n\n        let note_text = document.getElementById('text');\n        let note_author = document.getElementById('author');\n        let note_title = document.getElementById('title');\n        let note_project = document.getElementById('project');\n        let note_text_value = note_text.value;\n        let note_author_value = note_author.value;\n        let note_title_value = note_title.value;\n        let note_project_value = note_project.value;\n\n        note_text.value = \"\";\n        note_author.value = \"\";\n        note_project.value = \"\";\n        note_title.value = \"\";\n\n        note.setTitle(note_title_value);\n        note.setAuthor(note_author_value);\n        note.setText(note_text_value);\n        note.setProject(note_project_value);\n        note.setNoteId(uniqid__WEBPACK_IMPORTED_MODULE_2___default()());\n        \n        let popup = document.querySelector(\".new-note-information\");\n        let body = document.querySelector(\"body\");\n        popup.classList.add(\"hidden\");\n        body.classList.remove(\"popup\");\n\n        let title = note.getTitle();\n        let author = note.getAuthor();\n        let text = note.getText();\n        let id = note.getNoteId();\n\n        create_note(title, text, author, id);\n        \n        let storage_note = {};\n        storage_note[\"title\"] = note.getTitle();\n        storage_note[\"text\"] = note.getText();\n        storage_note[\"author\"] = note.getAuthor();\n        storage_note[\"id\"] = note.getNoteId();\n        \n        window.localStorage.setItem('note' + note.getNoteId().toString(), JSON.stringify(storage_note));\n    }\n    const filterAuthor = function(all_notes, author_name){\n        let active_notes = document.querySelectorAll('.active-note');\n        for (let i = 0; i < active_notes.length; i++){\n            active_notes[i].classList.remove(\"hidden\");\n        }\n        if (author_name == \"Author\"){\n            return;\n        }\n        for (let i = 0; i < active_notes.length; i++){\n            let current_element = active_notes[i];\n            let obj_note = all_notes[i];\n            console.log(obj_note);\n            let author = obj_note.getAuthor();\n            if (author != author_name){\n                current_element.classList.add(\"hidden\");\n            }\n        }\n        return;\n    }\n    const clearAll = function(){\n        let grid = document.querySelector('.grid');\n        let active_notes = document.querySelectorAll(\".active-note\");\n        let n = grid.children.length;\n        for (let i = 0; i < n; i++){\n            grid.removeChild(active_notes[i]);\n        }\n        let objects = Object.keys(localStorage);\n        console.log(objects);\n        for (let i = 0; i < Object.keys(objects).length; i++){\n            let key = objects[i];\n            if (key.slice(0, 4) == \"note\"){\n                localStorage.removeItem(key);\n            }\n        }\n    }\n    const filterProject = function(name, notes){\n        let active_notes = document.querySelectorAll('.active-note');\n        for (let i = 0; i < active_notes.length; i++){\n            active_notes[i].classList.remove(\"hidden\");\n        }\n        if (name==\"Show all\"){\n            console.log(notes);\n            return;\n        }\n        for (let i = 0; i < notes.length; i++){\n            console.log(notes[i].getProject());\n            if (notes[i].getProject()!=name){\n                active_notes[i].classList.add(\"hidden\");\n            }\n        }\n    }\n    return { new_project_button, xout_image, create_project_button, add_note_button, clearAll, edit_button, save_button, submit_button, filterAuthor, filterProject, create_note };\n}\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/display_functions.js?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/index.js":
/*!******************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/index.scss */ \"./src/odin_projects/todo_list_webpack/assets/index.scss\");\n/* harmony import */ var _display_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display_functions.js */ \"./src/odin_projects/todo_list_webpack/display_functions.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ \"./src/odin_projects/todo_list_webpack/objects.js\");\n/* harmony import */ var _localstorage_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localstorage_functions.js */ \"./src/odin_projects/todo_list_webpack/localstorage_functions.js\");\n\n\n\n\nconsole.log('hello world');\n\n(0,_localstorage_functions_js__WEBPACK_IMPORTED_MODULE_3__.load_prev_projects)();\n\n//loading previous notes if any\nlet current_id = 0;\nlet objects = (0,_localstorage_functions_js__WEBPACK_IMPORTED_MODULE_3__.load_prev_data)();\nfor (let i = 0; i < Object.keys(objects).length; i++){\n    let key = Object.keys(objects)[i];\n    if (key.slice(0, 4) == \"note\"){\n        let note = objects[key];\n        let project = note.project;\n        let title = note.title; \n        let author = note.author;\n        let text = note.text;\n        let id = note.id;\n        \n        (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().create_note(title, text, author, id, project);\n        _objects__WEBPACK_IMPORTED_MODULE_2__.all_notes.setPreviousNote(title, text, author, id, project);\n        current_id++;\n    }\n}\n//updating current note id;\n_objects__WEBPACK_IMPORTED_MODULE_2__.noteIds.setNoteId(current_id);\n\nlet add_note = document.querySelector(\"#new-note\");\nlet submit_note = document.querySelector('#submit-note');\nlet edit = document.getElementById('edit');\n\nlet authorfilter = document.querySelectorAll('.author-filter-text');\n\nadd_note.onclick = function(){\n    (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().add_note_button();\n    let newnote = new _objects__WEBPACK_IMPORTED_MODULE_2__.note();\n    if (edit){\n        edit.onclick = function(){\n            (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().edit_button();\n        }\n    }\n    submit_note.onclick = function(){\n        (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().submit_button(newnote);\n        _objects__WEBPACK_IMPORTED_MODULE_2__.all_notes.addNote(newnote);\n        _objects__WEBPACK_IMPORTED_MODULE_2__.all_notes.getAllNotes();\n        (0,_localstorage_functions_js__WEBPACK_IMPORTED_MODULE_3__.store_current_data)(newnote);\n    }\n}\n\n\nlet newproject = document.getElementById('new-project')\nnewproject.onclick = function(){\n    ;(0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().new_project_button();\n\n    let create = document.getElementById(\"submit-project\");\n    create.onclick = function(){\n        (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().create_project_button();\n    }\n}\n\nlet authordropdown = document.getElementById('dropdown-author');\nauthordropdown.onchange = function(){\n    var value = authordropdown.selectedIndex;\n    var selected_text = authordropdown.options[value].text;\n    (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().filterAuthor(_objects__WEBPACK_IMPORTED_MODULE_2__.all_notes.getAllNotesList(), selected_text);\n}\n\nlet clearall = document.querySelector(\"#clear-all\")\nclearall.onclick = function(){\n    ;(0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().clearAll();\n}\n\nlet project_container = document.querySelectorAll(\".project-title\");\nconsole.log(project_container);\nfor (let i = 0; i < project_container.length; i++){\n    project_container[i].onclick = function(event){\n\n        let project_name = event.target.innerHTML;\n        let notes = _objects__WEBPACK_IMPORTED_MODULE_2__.all_notes.getAllNotesList();\n        console.log(\"ALL NOTES: \", notes);\n        (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().filterProject(project_name, notes);\n    }\n}\n\nlet x_out = document.querySelectorAll(\"#x-out-image\");\nfor (let i = 0; i < x_out.length; i++){\n    x_out[i].onclick = function(){\n        (0,_display_functions_js__WEBPACK_IMPORTED_MODULE_1__.displayFunctions)().xout_image();\n    }\n}\n\n\n/*\n\nthings to add:\n\n- add details link on bottom of smaller notes\n    - details link contains link to rest of information -- project, author, id, etc.\n- add filtering:\n    - title + time\n- add a viewer option to view the notes in a different format\n    - list format\n*/\n\n\n\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/index.js?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/localstorage_functions.js":
/*!***********************************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/localstorage_functions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load_prev_data\": () => (/* binding */ load_prev_data),\n/* harmony export */   \"load_prev_projects\": () => (/* binding */ load_prev_projects),\n/* harmony export */   \"store_current_data\": () => (/* binding */ store_current_data)\n/* harmony export */ });\nconst load_prev_data = function(){\n    let obj = {};\n    let all_keys = Object.keys(localStorage).reverse();\n    for (let i = 0; i < all_keys.length; i++){\n        let key = all_keys[i];\n        let val = JSON.parse(localStorage.getItem(key));\n        obj[key] = val;\n    }\n    return obj;\n}\n\nconst load_prev_projects = function(){\n    let projects = JSON.parse(window.localStorage.getItem(\"project\"));\n    console.log(\"PROJECTS: \", projects);\n    if (projects != null){\n        let project_header = document.querySelector('.section2');\n        for (let i = 0; i < projects.length; i++){\n            let newdiv = document.createElement('div');\n            newdiv.classList.add(\"project-title\");\n            newdiv.innerHTML = projects[i];\n            project_header.appendChild(newdiv);\n        }\n    }\n}\n\nconst store_current_data = function(note){\n    let title = note.getTitle();\n    let text = note.getText();\n    let author = note.getAuthor();\n    let project = note.getProject();\n    let id = note.getNoteId();\n    let value = {\n                    title: title,\n                    text: text,\n                    author: author,\n                    project: project,\n                }\n    let key = \"note\" + id;\n    window.localStorage.setItem(key, JSON.stringify(value));\n}\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/localstorage_functions.js?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/objects.js":
/*!********************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/objects.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"all_notes\": () => (/* binding */ all_notes),\n/* harmony export */   \"note\": () => (/* binding */ note),\n/* harmony export */   \"noteIds\": () => (/* binding */ noteIds)\n/* harmony export */ });\nclass note{\n    constructor(){\n        this.text = null;\n        this.title = null;\n        this.time = null;\n        this.project = null;\n        this.author = null;\n        this.noteId = noteIds.getNextNoteId();\n    };\n    setText(text){\n        this.text = text;\n    }\n    getText(){\n        return this.text;\n    }\n    setTitle(title){\n        this.title = title;\n    }\n    getTitle(){\n        return this.title;\n    }\n    setTime(time){\n        this.time = time;\n    }\n    getTime(){\n        return this.time;\n    }\n    setAuthor(author){\n        this.author = author;\n    }\n    getAuthor(){\n        return this.author;\n    }\n    setNoteId(id){\n        this.noteId = id;\n    }\n    getNoteId(){\n        return this.noteId;\n    }\n    setProject(proj){\n        this.project = proj;\n    }\n    getProject(){\n        return this.project;\n    }\n}\n\nconst noteIds = (function(currnoteId=null){\n    var noteId = 0;\n    const setNoteId = function(currNoteId){\n        noteId = currNoteId;\n    }\n    const getNextNoteId = function(){\n        noteId++;\n        return noteId;\n    };\n    return { noteId, getNextNoteId, setNoteId };\n})();\n\nconst all_notes = (function(){\n    const notes = new Array();\n    const addNote = function(note){\n        notes.push(note);\n    };\n    const getAllNotes = function(){\n        for (let i = 0; i < notes.length; i++){\n            console.log(notes[i].getTitle(), notes[i].getNoteId());\n        }\n    };\n    const setPreviousNote = function(title, text, author, id, project){\n        let newnote = new note();\n        newnote.setTitle(title);\n        newnote.setAuthor(author);\n        newnote.setText(text);\n        newnote.setNoteId(id);\n        newnote.setProject(project);\n        notes.push(newnote);\n    }\n    const getAllNotesList = function(){\n        let output = new Array();\n        for (let i = 0; i < notes.length; i++){\n            output.push(notes[i]);\n        }\n        console.log(output);\n        return output\n    };\n    const filterByAuthor = function(author){\n        let output = new Array();\n        for (let i = 0; i < notes.length; i++){\n            if (notes[i].getAuthor() == author){\n                output.push(notes[i]);\n            }\n        }\n        return output;\n    };\n    return { addNote, getAllNotes, filterByAuthor, getAllNotesList, setPreviousNote };\n})();\n\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/objects.js?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/assets/corduroy.ttf":
/*!*****************************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/assets/corduroy.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/5b86d0a9bb48d7c5ec26..ttf\";\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/assets/corduroy.ttf?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/assets/roboto.ttf":
/*!***************************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/assets/roboto.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/0eb141b0ad60e21ed02e..ttf\";\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/assets/roboto.ttf?");

/***/ }),

/***/ "./src/odin_projects/todo_list_webpack/assets/x_out.jpg":
/*!**************************************************************!*\
  !*** ./src/odin_projects/todo_list_webpack/assets/x_out.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/38180b55679bc2b67cf8..jpg\";\n\n//# sourceURL=webpack://my_website/./src/odin_projects/todo_list_webpack/assets/x_out.jpg?");

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
/******/ 		__webpack_require__.p = scriptUrl + "../../../";
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
/******/ 			"odin_projects/todo_list_app/output/main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/odin_projects/todo_list_webpack/index.js");
/******/ 	
/******/ })()
;