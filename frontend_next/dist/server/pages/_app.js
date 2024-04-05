/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyw0QkFBY0Qsb0RBQWFBO0FBRWpDLGlFQUFlQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmRfbmV4dC8uL2NvbnRleHQvVXNlckNvbnRleHQuanM/ODZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRleHRcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJVc2VyQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/UserContext.js\n");

/***/ }),

/***/ "./context/UserContextProvider.jsx":
/*!*****************************************!*\
  !*** ./context/UserContextProvider.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserContext */ \"./context/UserContext.js\");\n\n\n\n// eslint-disable-next-line react/prop-types\nfunction UserContextProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [token, _setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [notification, _setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _setToken(localStorage.getItem(\"ACCESS_TOKEN\"));\n    }, []);\n    const setToken = (token)=>{\n        _setToken(token);\n        if (token) {\n            localStorage.setItem(\"ACCESS_TOKEN\", token);\n        } else {\n            localStorage.removeItem(\"ACCESS_TOKEN\");\n        }\n    };\n    const setNotification = (message)=>{\n        _setNotification(message);\n        setTimeout(()=>{\n            _setNotification(\"\");\n        }, 5000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            user,\n            setUser,\n            token,\n            setToken,\n            notification,\n            setNotification\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\inventory-app\\\\frontend_next\\\\context\\\\UserContextProvider.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1VzZXJDb250ZXh0UHJvdmlkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUV4Qyw0Q0FBNEM7QUFDNUMsU0FBU0csb0JBQW9CLEVBQUVDLFFBQVEsRUFBRTtJQUNyQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUNPLE9BQU9DLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDcEMsTUFBTSxDQUFDUyxjQUFjQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFbERDLGdEQUFTQSxDQUFDO1FBQ05PLFVBQVVHLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxHQUFHLEVBQUU7SUFFTCxNQUFNQyxXQUFXLENBQUNOO1FBQ2RDLFVBQVVEO1FBQ1YsSUFBSUEsT0FBTztZQUNQSSxhQUFhRyxPQUFPLENBQUMsZ0JBQWdCUDtRQUN6QyxPQUFPO1lBQ0hJLGFBQWFJLFVBQVUsQ0FBQztRQUM1QjtJQUNKO0lBQ0EsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3JCUCxpQkFBaUJPO1FBRWpCQyxXQUFXO1lBQ1BSLGlCQUFpQjtRQUNyQixHQUFHO0lBQ1A7SUFDQSxxQkFDSSw4REFBQ1IsNkRBQW9CO1FBQ2pCa0IsT0FBTztZQUNIZjtZQUNBQztZQUNBQztZQUNBTTtZQUNBSjtZQUNBTztRQUNKO2tCQUVDWjs7Ozs7O0FBR2I7QUFFQSxpRUFBZUQsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmRfbmV4dC8uL2NvbnRleHQvVXNlckNvbnRleHRQcm92aWRlci5qc3g/Y2QzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tIFwiLi9Vc2VyQ29udGV4dFwiO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuZnVuY3Rpb24gVXNlckNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFt0b2tlbiwgX3NldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW25vdGlmaWNhdGlvbiwgX3NldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIF9zZXRUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkFDQ0VTU19UT0tFTlwiKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW4pID0+IHtcclxuICAgICAgICBfc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFDQ0VTU19UT0tFTlwiLCB0b2tlbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJBQ0NFU1NfVE9LRU5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgX3NldE5vdGlmaWNhdGlvbihtZXNzYWdlKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIF9zZXROb3RpZmljYXRpb24oXCJcIik7XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyLFxyXG4gICAgICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbixcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbixcclxuICAgICAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvbixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRleHRQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwiX3NldFRva2VuIiwibm90aWZpY2F0aW9uIiwiX3NldE5vdGlmaWNhdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRUb2tlbiIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwic2V0Tm90aWZpY2F0aW9uIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/UserContextProvider.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_UserContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UserContextProvider */ \"./context/UserContextProvider.jsx\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_UserContextProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\code\\\\inventory-app\\\\frontend_next\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\inventory-app\\\\frontend_next\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDa0M7QUFFaEUsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsb0VBQW1CQTtrQkFDbEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kX25leHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgVXNlckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dC9Vc2VyQ29udGV4dFByb3ZpZGVyXCJcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Vc2VyQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiVXNlckNvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();