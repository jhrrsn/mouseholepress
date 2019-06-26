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
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jeharrison/Development/mouseholepress/pages/index.js";




var Player = function Player(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
    id: props.name,
    preload: "auto",
    controls: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: "static/audio/" + props.name + ".mp3",
    type: "audio/mpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: "static/audio/" + props.name + ".ogg",
    type: "audio/ogg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), "Your browser does not support the audio tag."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a, {
    active: isActive,
    spinner: true,
    text: "Loading your content...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-4264871346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=IM+Fell+French+Canon:400,400i&display=swap",
    rel: "stylesheet",
    className: "jsx-4264871346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/images/banner.png",
    alt: "The Artefact",
    className: "jsx-4264871346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4264871346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "~~~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4264871346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Sounds of deep, forgotten places to be played as the years drift past."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4264871346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "~~~"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-4264871346",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "A Day",
    name: "005_day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "A Week",
    name: "010_week",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "A Month",
    name: "020_month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "A Year",
    name: "040_year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "A Decade",
    name: "060_decade",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "A Century",
    name: "120_century",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "Centuries",
    name: "180_centuries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "A Millennium",
    name: "240_millennium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "An Age",
    name: "300_age",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    desc: "An Epoch",
    name: "360_epoch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4264871346",
    __self: this
  }, "body{background-color:#EBCB8B;text-align:center;font-family:'IM Fell French Canon',serif;color:#2E3440;}img{width:100%;}hr{width:50%;border:0;height:2px;background-image:linear-gradient(to right,rgba(46,52,64,0),rgba(46,52,64,0.75),rgba(46,52,64,0));margin:1em auto;}h3{font-style:italic;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DeUIsQUFHbUMsQUFPYixBQUlELEFBUU8sVUFQUixDQUpYLE9BWUEsQ0FQYSxNQVpPLEtBYTJGLGFBWm5FLHlDQUM1QixjQUNoQiw2QkFXa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTG9hZGluZ092ZXJsYXkgZnJvbSAncmVhY3QtbG9hZGluZy1vdmVybGF5JztcblxuY29uc3QgUGxheWVyID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj57cHJvcHMuZGVzY308L2gyPlxuICAgIDxhdWRpbyBpZD17cHJvcHMubmFtZX0gcHJlbG9hZD1cImF1dG9cIiBjb250cm9scz5cbiAgICAgIDxzb3VyY2Ugc3JjPXtcInN0YXRpYy9hdWRpby9cIiArIHByb3BzLm5hbWUgKyBcIi5tcDNcIn0gdHlwZT1cImF1ZGlvL21wZWdcIi8+XG4gICAgICA8c291cmNlIHNyYz17XCJzdGF0aWMvYXVkaW8vXCIgKyBwcm9wcy5uYW1lICsgXCIub2dnXCJ9IHR5cGU9XCJhdWRpby9vZ2dcIi8+XG4gICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gdGFnLlxuICAgIDwvYXVkaW8+XG4gICAgPGhyIC8+XG4gIDwvZGl2PlxuKTtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPExvYWRpbmdPdmVybGF5IGFjdGl2ZT17aXNBY3RpdmV9IHNwaW5uZXIgdGV4dD0nTG9hZGluZyB5b3VyIGNvbnRlbnQuLi4nPlxuICAgIDxtYWluPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JTStGZWxsK0ZyZW5jaCtDYW5vbjo0MDAsNDAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Jhbm5lci5wbmdcIiBhbHQ9XCJUaGUgQXJ0ZWZhY3RcIiAvPlxuICAgICAgPGgzPn5+fjwvaDM+XG4gICAgICA8aDM+U291bmRzIG9mIGRlZXAsIGZvcmdvdHRlbiBwbGFjZXMgdG8gYmUgcGxheWVkIGFzIHRoZSB5ZWFycyBkcmlmdCBwYXN0LjwvaDM+XG4gICAgICA8aDM+fn5+PC9oMz5cbiAgICAgIDxociAvPlxuICAgICAgPFBsYXllciBkZXNjPVwiQSBEYXlcIiBuYW1lPVwiMDA1X2RheVwiIC8+XG4gICAgICA8UGxheWVyIGRlc2M9XCJBIFdlZWtcIiBuYW1lPVwiMDEwX3dlZWtcIiAvPlxuICAgICAgPFBsYXllciBkZXNjPVwiQSBNb250aFwiIG5hbWU9XCIwMjBfbW9udGhcIiAvPlxuICAgICAgPFBsYXllciBkZXNjPVwiQSBZZWFyXCIgbmFtZT1cIjA0MF95ZWFyXCIgLz5cbiAgICAgIDxQbGF5ZXIgZGVzYz1cIkEgRGVjYWRlXCIgbmFtZT1cIjA2MF9kZWNhZGVcIiAvPlxuICAgICAgPFBsYXllciBkZXNjPVwiQSBDZW50dXJ5XCIgbmFtZT1cIjEyMF9jZW50dXJ5XCIgLz5cbiAgICAgIDxQbGF5ZXIgZGVzYz1cIkNlbnR1cmllc1wiIG5hbWU9XCIxODBfY2VudHVyaWVzXCIgLz5cbiAgICAgIDxQbGF5ZXIgZGVzYz1cIkEgTWlsbGVubml1bVwiIG5hbWU9XCIyNDBfbWlsbGVubml1bVwiIC8+XG4gICAgICA8UGxheWVyIGRlc2M9XCJBbiBBZ2VcIiBuYW1lPVwiMzAwX2FnZVwiIC8+XG4gICAgICA8UGxheWVyIGRlc2M9XCJBbiBFcG9jaFwiIG5hbWU9XCIzNjBfZXBvY2hcIiAvPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUJDQjhCO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0lNIEZlbGwgRnJlbmNoIENhbm9uJywgc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICMyRTM0NDA7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaHIge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg0NiwgNTIsIDY0LCAwKSwgcmdiYSg0NiwgNTIsIDY0LCAwLjc1KSwgcmdiYSg0NiwgNTIsIDY0LCAwKSk7XG4gICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGgzIHtcbiAgICAgICAgXHRmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICAgPC9Mb2FkaW5nT3ZlcmxheT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeharrison/Development/mouseholepress/pages/index.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.ab867ace29e490814234.hot-update.js.map