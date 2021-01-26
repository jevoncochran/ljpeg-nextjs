module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/home/ljpeg_placeholder.jpg":
/*!**************************************************!*\
  !*** ./assets/images/home/ljpeg_placeholder.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/ljpeg_placeholder-315107ad84886206685e338f74fcc6e2.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL2hvbWUvbGpwZWdfcGxhY2Vob2xkZXIuanBnPzFiNGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvaW1hZ2VzL2hvbWUvbGpwZWdfcGxhY2Vob2xkZXIuanBnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xqcGVnX3BsYWNlaG9sZGVyLTMxNTEwN2FkODQ4ODYyMDY2ODVlMzM4Zjc0ZmNjNmUyLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/images/home/ljpeg_placeholder.jpg\n");

/***/ }),

/***/ "./components/ComingSoon/index.js":
/*!****************************************!*\
  !*** ./components/ComingSoon/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/ComingSoon.module.scss */ \"./styles/ComingSoon.module.scss\");\n/* harmony import */ var _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sendRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sendRequest */ \"./components/ComingSoon/sendRequest.js\");\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/ljpeg-nextjs/components/ComingSoon/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import ljpegPlaceHolder from \"../../assets/images/home/ljpeg_placeholder.jpg\";\n\n\n\nconst ComingSoon = () => {\n  const {\n    0: inputActive,\n    1: setInputActive\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: request,\n    1: setRequest\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    email: \"\"\n  });\n\n  const handleInputChange = e => {\n    setRequest(_objectSpread(_objectSpread({}, request), {}, {\n      email: e.target.value\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cs,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-img\"],\n      style: {\n        backgroundImage: \"url(\" + `${__webpack_require__(/*! ../../assets/images/home/ljpeg_placeholder.jpg */ \"./assets/images/home/ljpeg_placeholder.jpg\")}` + \")\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-site-title\"],\n      children: \"l.jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-cta-container\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-cta-txt\"],\n        children: \"SITE COMING SOON\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: inputActive ? _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-cta-btn-hide\"] : _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-cta-btn\"],\n        onClick: () => setInputActive(true),\n        children: \"LET ME KNOW WHEN IT DROPS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: _sendRequest__WEBPACK_IMPORTED_MODULE_3__[\"sendRequest\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: inputActive ? _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-cta-input\"] : _styles_ComingSoon_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"cs-cta-input-hide\"],\n          type: \"text\",\n          name: \"email\",\n          placeholder: \"Please enter your email...\",\n          onChange: handleInputChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbWluZ1Nvb24vaW5kZXguanM/OTA3MSJdLCJuYW1lcyI6WyJDb21pbmdTb29uIiwiaW5wdXRBY3RpdmUiLCJzZXRJbnB1dEFjdGl2ZSIsInVzZVN0YXRlIiwicmVxdWVzdCIsInNldFJlcXVlc3QiLCJlbWFpbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwiY3MiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXF1aXJlIiwic2VuZFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUVBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQztBQUNyQ0csU0FBSyxFQUFFO0FBRDhCLEdBQUQsQ0FBdEM7O0FBSUEsUUFBTUMsaUJBQWlCLEdBQUlDLENBQUQsSUFBTztBQUMvQkgsY0FBVSxpQ0FDTEQsT0FESztBQUVSRSxXQUFLLEVBQUVFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUZSLE9BQVY7QUFJRCxHQUxEOztBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxFQUF2QjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFRCxxRUFBTSxDQUFDLFFBQUQsQ0FEbkI7QUFFRSxXQUFLLEVBQUU7QUFDTEUsdUJBQWUsRUFDYixTQUNDLEdBQUVDLG1CQUFPLENBQUMsa0dBQUQsQ0FBbUQsRUFEN0QsR0FFQTtBQUpHO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQUcsZUFBUyxFQUFFSCxxRUFBTSxDQUFDLGVBQUQsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFXRTtBQUFLLGVBQVMsRUFBRUEscUVBQU0sQ0FBQyxrQkFBRCxDQUF0QjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBRUEscUVBQU0sQ0FBQyxZQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxpQkFBUyxFQUNQVixXQUFXLEdBQUdVLHFFQUFNLENBQUMsaUJBQUQsQ0FBVCxHQUErQkEscUVBQU0sQ0FBQyxZQUFELENBRnBEO0FBSUUsZUFBTyxFQUFFLE1BQU1ULGNBQWMsQ0FBQyxJQUFELENBSi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFO0FBQU0sZ0JBQVEsRUFBRWEsd0RBQWhCO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUNQZCxXQUFXLEdBQUdVLHFFQUFNLENBQUMsY0FBRCxDQUFULEdBQTRCQSxxRUFBTSxDQUFDLG1CQUFELENBRmpEO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxjQUFJLEVBQUMsT0FMUDtBQU1FLHFCQUFXLEVBQUMsNEJBTmQ7QUFPRSxrQkFBUSxFQUFFSjtBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFDRCxDQW5ERDs7QUFxRGVQLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21pbmdTb29uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Db21pbmdTb29uLm1vZHVsZS5zY3NzXCI7XG4vLyBpbXBvcnQgbGpwZWdQbGFjZUhvbGRlciBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lL2xqcGVnX3BsYWNlaG9sZGVyLmpwZ1wiO1xuaW1wb3J0IHsgc2VuZFJlcXVlc3QgfSBmcm9tIFwiLi9zZW5kUmVxdWVzdFwiO1xuXG5jb25zdCBDb21pbmdTb29uID0gKCkgPT4ge1xuICBjb25zdCBbaW5wdXRBY3RpdmUsIHNldElucHV0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbcmVxdWVzdCwgc2V0UmVxdWVzdF0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRSZXF1ZXN0KHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICBlbWFpbDogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNzfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJjcy1pbWdcIl19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgYCR7cmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS9sanBlZ19wbGFjZWhvbGRlci5qcGdcIil9YCArXG4gICAgICAgICAgICBcIilcIixcbiAgICAgICAgfX1cbiAgICAgID48L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wiY3Mtc2l0ZS10aXRsZVwiXX0+bC5qcGVnPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImNzLWN0YS1jb250YWluZXJcIl19PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcImNzLWN0YS10eHRcIl19PlNJVEUgQ09NSU5HIFNPT048L3A+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgaW5wdXRBY3RpdmUgPyBzdHlsZXNbXCJjcy1jdGEtYnRuLWhpZGVcIl0gOiBzdHlsZXNbXCJjcy1jdGEtYnRuXCJdXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElucHV0QWN0aXZlKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAgTEVUIE1FIEtOT1cgV0hFTiBJVCBEUk9QU1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kUmVxdWVzdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBpbnB1dEFjdGl2ZSA/IHN0eWxlc1tcImNzLWN0YS1pbnB1dFwiXSA6IHN0eWxlc1tcImNzLWN0YS1pbnB1dC1oaWRlXCJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgZW50ZXIgeW91ciBlbWFpbC4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21pbmdTb29uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComingSoon/index.js\n");

/***/ }),

/***/ "./components/ComingSoon/sendRequest.js":
/*!**********************************************!*\
  !*** ./components/ComingSoon/sendRequest.js ***!
  \**********************************************/
/*! exports provided: sendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendRequest\", function() { return sendRequest; });\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ \"emailjs-com\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sendRequest = e => {\n  e.preventDefault();\n  emailjs_com__WEBPACK_IMPORTED_MODULE_0___default.a.sendForm(\"service_prf93rj\", \"template_0vr1v5g\", e.target, \"user_MhChswxxKTw1OAvIDV8zY\").then(result => {\n    console.log(result.text);\n  }, error => {\n    console.log(error.text);\n  });\n  e.target.reset();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbWluZ1Nvb24vc2VuZFJlcXVlc3QuanM/NGM2ZCJdLCJuYW1lcyI6WyJzZW5kUmVxdWVzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsanMiLCJzZW5kRm9ybSIsInRhcmdldCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImVycm9yIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxXQUFXLEdBQUlDLENBQUQsSUFBTztBQUM5QkEsR0FBQyxDQUFDQyxjQUFGO0FBRUFDLG9EQUFPLENBQ0pDLFFBREgsQ0FFSSxpQkFGSixFQUdJLGtCQUhKLEVBSUlILENBQUMsQ0FBQ0ksTUFKTixFQUtJLDRCQUxKLEVBT0dDLElBUEgsQ0FRS0MsTUFBRCxJQUFZO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFNLENBQUNHLElBQW5CO0FBQ0QsR0FWTCxFQVdLQyxLQUFELElBQVc7QUFDVEgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEtBQUssQ0FBQ0QsSUFBbEI7QUFDRCxHQWJMO0FBZ0JBVCxHQUFDLENBQUNJLE1BQUYsQ0FBU08sS0FBVDtBQUNELENBcEJJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db21pbmdTb29uL3NlbmRSZXF1ZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVtYWlsanMgZnJvbSBcImVtYWlsanMtY29tXCI7XG5cbmV4cG9ydCBjb25zdCBzZW5kUmVxdWVzdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICBlbWFpbGpzXG4gICAgICAuc2VuZEZvcm0oXG4gICAgICAgIFwic2VydmljZV9wcmY5M3JqXCIsXG4gICAgICAgIFwidGVtcGxhdGVfMHZyMXY1Z1wiLFxuICAgICAgICBlLnRhcmdldCxcbiAgICAgICAgXCJ1c2VyX01oQ2hzd3h4S1R3MU9BdklEVjh6WVwiXG4gICAgICApXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIFxuICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ComingSoon/sendRequest.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/ljpeg-nextjs/components/Layout.js\";\n\n\n\nconst Layout = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-69855011\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        className: \"jsx-69855011\",\n        children: \"LJPEG Photography\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Amatic+SC&family=Euphoria+Script&display=swap\",\n        rel: \"stylesheet\",\n        className: \"jsx-69855011\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), props.children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"69855011\",\n      children: \"*{margin:0;padding:0;box-sizing:border-box;font-family:\\\"Amatic SC\\\",cursive;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXZvbi9Eb2N1bWVudHMvU2lkZSBQcm9qZWN0cy9OZXh0SlMvbGpwZWctbmV4dGpzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNTLEFBR3NCLFNBQ0MsVUFDWSxzQkFDVyxnQ0FDbkMiLCJmaWxlIjoiL1VzZXJzL2pldm9uL0RvY3VtZW50cy9TaWRlIFByb2plY3RzL05leHRKUy9sanBlZy1uZXh0anMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxKUEVHIFBob3RvZ3JhcGh5PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWF0aWMrU0MmZmFtaWx5PUV1cGhvcmlhK1NjcmlwdCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFtYXRpYyBTQ1wiLCBjdXJzaXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\\n/*@ sourceURL=/Users/jevon/Documents/Side Projects/NextJS/ljpeg-nextjs/components/Layout.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN4QixzQkFDRTtBQUFBO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsd0ZBRFA7QUFFRSxXQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFRR0EsS0FBSyxDQUFDQyxRQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBc0JELENBdkJEOztBQXlCZUYscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TEpQRUcgUGhvdG9ncmFwaHk8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtYXRpYytTQyZmYW1pbHk9RXVwaG9yaWErU2NyaXB0JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQW1hdGljIFNDXCIsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ComingSoon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ComingSoon */ \"./components/ComingSoon/index.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/ljpeg-nextjs/pages/index.js\";\n\n\n\n\nconst Home = () => {\n  // const { activateHome } = useContext(PageContext);\n  // useEffect(() => {\n  //   activateHome();\n  // }, [activateHome]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[\"home\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ComingSoon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNqQjtBQUVBO0FBQ0E7QUFDQTtBQUVBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVDLCtEQUFNLENBQUMsTUFBRCxDQUF0QjtBQUFBLDZCQUtFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0FsQkQ7O0FBb0JlRCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbWluZ1Nvb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29taW5nU29vblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHsgYWN0aXZhdGVIb21lIH0gPSB1c2VDb250ZXh0KFBhZ2VDb250ZXh0KTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGFjdGl2YXRlSG9tZSgpO1xuICAvLyB9LCBbYWN0aXZhdGVIb21lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWVcIl19PlxuICAgICAgICB7LyogPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvbWUtaW1nXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtsanBlZ1BsYWNlSG9sZGVyfSlgIH19XG4gICAgICAgID48L2Rpdj4gKi99XG4gICAgICAgIDxDb21pbmdTb29uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/ComingSoon.module.scss":
/*!***************************************!*\
  !*** ./styles/ComingSoon.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cs\": \"ComingSoon_cs__YWMPD\",\n\t\"cs-img\": \"ComingSoon_cs-img__1LMO6\",\n\t\"cs-site-title\": \"ComingSoon_cs-site-title__1z3MP\",\n\t\"cs-cta-container\": \"ComingSoon_cs-cta-container__ruwZv\",\n\t\"cs-cta-txt\": \"ComingSoon_cs-cta-txt__3nZ_A\",\n\t\"cs-cta-btn\": \"ComingSoon_cs-cta-btn__2eBfn\",\n\t\"cs-cta-btn-hide\": \"ComingSoon_cs-cta-btn-hide__26fZx\",\n\t\"cs-cta-input\": \"ComingSoon_cs-cta-input__2Z9fS\",\n\t\"cs-cta-input-hide\": \"ComingSoon_cs-cta-input-hide__2MfGC\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvQ29taW5nU29vbi5tb2R1bGUuc2Nzcz84MWYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Db21pbmdTb29uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY3NcIjogXCJDb21pbmdTb29uX2NzX19ZV01QRFwiLFxuXHRcImNzLWltZ1wiOiBcIkNvbWluZ1Nvb25fY3MtaW1nX18xTE1PNlwiLFxuXHRcImNzLXNpdGUtdGl0bGVcIjogXCJDb21pbmdTb29uX2NzLXNpdGUtdGl0bGVfXzF6M01QXCIsXG5cdFwiY3MtY3RhLWNvbnRhaW5lclwiOiBcIkNvbWluZ1Nvb25fY3MtY3RhLWNvbnRhaW5lcl9fcnV3WnZcIixcblx0XCJjcy1jdGEtdHh0XCI6IFwiQ29taW5nU29vbl9jcy1jdGEtdHh0X18zblpfQVwiLFxuXHRcImNzLWN0YS1idG5cIjogXCJDb21pbmdTb29uX2NzLWN0YS1idG5fXzJlQmZuXCIsXG5cdFwiY3MtY3RhLWJ0bi1oaWRlXCI6IFwiQ29taW5nU29vbl9jcy1jdGEtYnRuLWhpZGVfXzI2Zlp4XCIsXG5cdFwiY3MtY3RhLWlucHV0XCI6IFwiQ29taW5nU29vbl9jcy1jdGEtaW5wdXRfXzJaOWZTXCIsXG5cdFwiY3MtY3RhLWlucHV0LWhpZGVcIjogXCJDb21pbmdTb29uX2NzLWN0YS1pbnB1dC1oaWRlX18yTWZHQ1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/ComingSoon.module.scss\n");

/***/ }),

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"home\": \"Home_home__Crkqx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcz8yMmU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob21lXCI6IFwiSG9tZV9ob21lX19DcmtxeFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.scss\n");

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"emailjs-com\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiPzViYjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZW1haWxqcy1jb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///emailjs-com\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });