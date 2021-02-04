webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_siteContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/siteContext */ \"./context/siteContext.js\");\n/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Nav.module.scss */ \"./styles/Nav.module.scss\");\n/* harmony import */ var _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/jevon/Documents/Side Projects/NextJS/ljpeg-nextjs/components/Nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Nav = function Nav() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_siteContext__WEBPACK_IMPORTED_MODULE_3__[\"SiteContext\"]),\n      atHome = _useContext.atHome;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      photoDDActive = _useState[0],\n      setPhotoDDActive = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav\"],\n    style: {\n      position: atHome ? \"absolute\" : \"relative\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label-div\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-wrapper\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          onClick: function onClick() {\n            return setPhotoDDActive(true);\n          },\n          children: \"Photography\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), photoDDActive && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Portraits\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Street\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Travel\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-dropdown-list-item\"],\n            children: \"Events\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 28\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/about\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/contact\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_Nav_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-label\"],\n          children: \"Contact\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"XVhGD4O39r2lZlkFRP5lIhvJ0iU=\");\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJOYXYiLCJ1c2VDb250ZXh0IiwiU2l0ZUNvbnRleHQiLCJhdEhvbWUiLCJ1c2VTdGF0ZSIsInBob3RvRERBY3RpdmUiLCJzZXRQaG90b0REQWN0aXZlIiwic3R5bGVzIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsb0JBQ0dDLHdEQUFVLENBQUNDLGdFQUFELENBRGI7QUFBQSxNQUNSQyxNQURRLGVBQ1JBLE1BRFE7O0FBQUEsa0JBRzBCQyxzREFBUSxDQUFDLEtBQUQsQ0FIbEM7QUFBQSxNQUdUQyxhQUhTO0FBQUEsTUFHTUMsZ0JBSE47O0FBS2hCLHNCQUNFO0FBQ0UsYUFBUyxFQUFFQyw4REFBTSxDQUFDLEtBQUQsQ0FEbkI7QUFFRSxTQUFLLEVBQUU7QUFDTEMsY0FBUSxFQUFFTCxNQUFNLEdBQUcsVUFBSCxHQUFnQjtBQUQzQixLQUZUO0FBQUEsMkJBTUU7QUFBSyxlQUFTLEVBQUVJLDhEQUFNLENBQUMsZUFBRCxDQUF0QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFFRTtBQUFHLG1CQUFTLEVBQUVBLDhEQUFNLENBQUMsV0FBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsRUFBRUEsOERBQU0sQ0FBQyxzQkFBRCxDQUF0QjtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBRUEsOERBQU0sQ0FBQyxXQUFELENBRG5CO0FBRUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRCxnQkFBZ0IsQ0FBQyxJQUFELENBQXRCO0FBQUEsV0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU9FRCxhQUFhLGlCQUFJO0FBQUssbUJBQVMsRUFBRUUsOERBQU0sQ0FBQyxtQkFBRCxDQUF0QjtBQUFBLGtDQUNmO0FBQUcscUJBQVMsRUFBRUEsOERBQU0sQ0FBQyx3QkFBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZSxlQUVmO0FBQUcscUJBQVMsRUFBRUEsOERBQU0sQ0FBQyx3QkFBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGZSxlQUdmO0FBQUcscUJBQVMsRUFBRUEsOERBQU0sQ0FBQyx3QkFBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIZSxlQUlmO0FBQUcscUJBQVMsRUFBRUEsOERBQU0sQ0FBQyx3QkFBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBK0JFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUVBLDhEQUFNLENBQUMsV0FBRCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQkYsZUFrQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUEsOERBQU0sQ0FBQyxXQUFELENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQ0QsQ0FwREQ7O0dBQU1QLEc7O0tBQUFBLEc7QUFzRFNBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9zaXRlQ29udGV4dFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05hdi5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXRIb21lIH0gPSB1c2VDb250ZXh0KFNpdGVDb250ZXh0KTtcblxuICBjb25zdCBbcGhvdG9EREFjdGl2ZSwgc2V0UGhvdG9EREFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdlwiXX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBhdEhvbWUgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtbGFiZWwtZGl2XCJdfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICB7LyogdGhpcyBhIHRhZyBuZWVkcyB0byBoYXZlIHRoaXMgYXR0cmlidXRlOiBvbkNsaWNrPXthY3RpdmF0ZUhvbWV9ICovfVxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxhYmVsXCJdfT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtZHJvcGRvd24td3JhcHBlclwiXX0+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxhYmVsXCJdfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGhvdG9EREFjdGl2ZSh0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQaG90b2dyYXBoeVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgIHtwaG90b0REQWN0aXZlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtZHJvcGRvd24tbGlzdFwiXX0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1kcm9wZG93bi1saXN0LWl0ZW1cIl19PlBvcnRyYWl0czwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWRyb3Bkb3duLWxpc3QtaXRlbVwiXX0+U3RyZWV0PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtZHJvcGRvd24tbGlzdC1pdGVtXCJdfT5UcmF2ZWw8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1kcm9wZG93bi1saXN0LWl0ZW1cIl19PkV2ZW50czwvcD5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9wb3J0cmFpdHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1sYWJlbFwiXX0+UG9ydHJhaXRzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc3RyZWV0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtbGFiZWxcIl19PlN0cmVldDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3RyYXZlbFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxhYmVsXCJdfT5UcmF2ZWw8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ldmVudHNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1sYWJlbFwiXX0+RXZlbnRzPC9hPlxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXYtbGFiZWxcIl19PkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxhYmVsXCJdfT5Db250YWN0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})