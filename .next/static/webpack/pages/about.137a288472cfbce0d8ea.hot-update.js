webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_siteContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/siteContext */ \"./context/siteContext.js\");\n/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Nav.module.scss */ \"./styles/Nav.module.scss\");\n/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/ljpeg-nextjs/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Nav = function Nav() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_siteContext__WEBPACK_IMPORTED_MODULE_3__[\"SiteContext\"]),\n      atHome = _useContext.atHome;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      photoDDActive = _useState[0],\n      setPhotoDDActive = _useState[1];\n\n  var togglePhotoDD = function togglePhotoDD() {\n    setPhotoDDActive(!photoDDActive);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav\"],\n    style: {\n      position: atHome ? \"absolute\" : \"relative\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label-div\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-wrapper\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          onClick: togglePhotoDD,\n          children: \"Photography\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), photoDDActive && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Portraits\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Street\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Travel\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Events\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/about\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"XVhGD4O39r2lZlkFRP5lIhvJ0iU=\");\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJOYXYiLCJ1c2VDb250ZXh0IiwiU2l0ZUNvbnRleHQiLCJhdEhvbWUiLCJ1c2VTdGF0ZSIsInBob3RvRERBY3RpdmUiLCJzZXRQaG90b0REQWN0aXZlIiwidG9nZ2xlUGhvdG9ERCIsInN0eWxlcyIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLG9CQUNHQyx3REFBVSxDQUFDQyxnRUFBRCxDQURiO0FBQUEsTUFDUkMsTUFEUSxlQUNSQSxNQURROztBQUFBLGtCQUcwQkMsc0RBQVEsQ0FBQyxLQUFELENBSGxDO0FBQUEsTUFHVEMsYUFIUztBQUFBLE1BR01DLGdCQUhOOztBQUtoQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJELG9CQUFnQixDQUFDLENBQUNELGFBQUYsQ0FBaEI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFRyw4REFBTSxDQUFDLEtBQUQsQ0FEbkI7QUFFRSxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFTixNQUFNLEdBQUcsVUFBSCxHQUFnQjtBQUQzQixLQUZUO0FBQUEsMkJBTUU7QUFBSyxlQUFTLEVBQUVLLDhEQUFNLENBQUMsZUFBRCxDQUF0QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFFRTtBQUFHLG1CQUFTLEVBQUVBLDhEQUFNLENBQUMsV0FBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsRUFBRUEsOERBQU0sQ0FBQyxzQkFBRCxDQUF0QjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBRUEsOERBQU0sQ0FBQyxXQUFELENBQXBCO0FBQW1DLGlCQUFPLEVBQUVELGFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUdGLGFBQWEsaUJBQ1o7QUFBSyxtQkFBUyxFQUFFRyw4REFBTSxDQUFDLG1CQUFELENBQXRCO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFFQSw4REFBTSxDQUFDLHdCQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFFQSw4REFBTSxDQUFDLHdCQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFFQSw4REFBTSxDQUFDLHdCQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBRyxxQkFBUyxFQUFFQSw4REFBTSxDQUFDLHdCQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQW1CRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFFQSw4REFBTSxDQUFDLFdBQUQsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJGLGVBc0JFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUVBLDhEQUFNLENBQUMsV0FBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBNUNEOztHQUFNUixHOztLQUFBQSxHO0FBOENTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvc2l0ZUNvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXYubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICBjb25zdCB7IGF0SG9tZSB9ID0gdXNlQ29udGV4dChTaXRlQ29udGV4dCk7XG5cbiAgY29uc3QgW3Bob3RvRERBY3RpdmUsIHNldFBob3RvRERBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZVBob3RvREQgPSAoKSA9PiB7XG4gICAgc2V0UGhvdG9EREFjdGl2ZSghcGhvdG9EREFjdGl2ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdlwiXX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBhdEhvbWUgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtbGFiZWwtZGl2XCJdfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICB7LyogdGhpcyBhIHRhZyBuZWVkcyB0byBoYXZlIHRoaXMgYXR0cmlidXRlOiBvbkNsaWNrPXthY3RpdmF0ZUhvbWV9ICovfVxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxhYmVsXCJdfT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtZHJvcGRvd24td3JhcHBlclwiXX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtbGFiZWxcIl19IG9uQ2xpY2s9e3RvZ2dsZVBob3RvRER9PlxuICAgICAgICAgICAgUGhvdG9ncmFwaHlcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAge3Bob3RvRERBY3RpdmUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1kcm9wZG93bi1saXN0XCJdfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtZHJvcGRvd24tbGlzdC1pdGVtXCJdfT5Qb3J0cmFpdHM8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWRyb3Bkb3duLWxpc3QtaXRlbVwiXX0+U3RyZWV0PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1kcm9wZG93bi1saXN0LWl0ZW1cIl19PlRyYXZlbDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtZHJvcGRvd24tbGlzdC1pdGVtXCJdfT5FdmVudHM8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxhYmVsXCJdfT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1sYWJlbFwiXX0+Q29udGFjdDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})