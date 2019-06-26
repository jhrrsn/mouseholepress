webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeharrison/Development/mouseholepress/pages/index.js";



var Player = function Player(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
    id: props.name,
    controls: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: "static/audio/" + props.name + ".mp3",
    type: "audio/mpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: "static/audio/" + props.name + ".ogg",
    type: "audio/ogg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), "Your browser does not support the audio tag."));
};

var PlayButton = function PlayButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: "document.getElementById(" + props.name + ").play"(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Play"));
}; //<img src="static/images/banner.png" alt="The Artefact" />


function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-3162327209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "005_day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PlayButton, {
    name: "005_day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3162327209",
    __self: this
  }, "img.jsx-3162327209{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiIvVXNlcnMvamVoYXJyaXNvbi9EZXZlbG9wbWVudC9tb3VzZWhvbGVwcmVzcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgUGxheWVyID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxhdWRpbyBpZD17cHJvcHMubmFtZX0gY29udHJvbHM+XG4gICAgICA8c291cmNlIHNyYz17XCJzdGF0aWMvYXVkaW8vXCIgKyBwcm9wcy5uYW1lICsgXCIubXAzXCJ9IHR5cGU9XCJhdWRpby9tcGVnXCIvPlxuICAgICAgPHNvdXJjZSBzcmM9e1wic3RhdGljL2F1ZGlvL1wiICsgcHJvcHMubmFtZSArIFwiLm9nZ1wifSB0eXBlPVwiYXVkaW8vb2dnXCIvPlxuICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGF1ZGlvIHRhZy5cbiAgICA8L2F1ZGlvPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFBsYXlCdXR0b24gPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiICsgcHJvcHMubmFtZSArIFwiKS5wbGF5XCIoKX0+UGxheTwvYnV0dG9uPlxuICA8L2Rpdj5cbilcblxuLy88aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvYmFubmVyLnBuZ1wiIGFsdD1cIlRoZSBBcnRlZmFjdFwiIC8+XG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cblxuICAgICAgPFBsYXllciBuYW1lPVwiMDA1X2RheVwiIC8+XG4gICAgICA8UGxheUJ1dHRvbiBuYW1lPVwiMDA1X2RheVwiIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/jeharrison/Development/mouseholepress/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.76c9e4062d03917c5b70.hot-update.js.map