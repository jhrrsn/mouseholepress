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
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.desc), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
    id: props.file,
    controls: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: "static/audio/" + props.file + ".mp3",
    type: "audio/mpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: "static/audio/" + props.file + ".ogg",
    type: "audio/ogg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "Your browser does not support the audio tag."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=IM+Fell+French+Canon:400,400i&display=swap",
    rel: "stylesheet",
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/images/banner.png",
    srcSet: "static/images/banner2x.png 2x",
    alt: "Header",
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "THE ARTEFACT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Sounds of deep, forgotten places to be played as the years drift past."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Day",
    desc: "Five Seconds",
    file: "005_day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Week",
    desc: "Ten Seconds",
    file: "010_week",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Month",
    desc: "Twenty Seconds",
    file: "020_month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Year",
    desc: "Forty Seconds",
    file: "040_year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Decade",
    desc: "One Minute",
    file: "060_decade",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Century",
    desc: "Two Minutes",
    file: "120_century",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "Centuries",
    desc: "Three Minutes",
    file: "180_centuries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Millennium",
    desc: "Four Minutes",
    file: "240_millennium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "An Age",
    desc: "Five Minutes",
    file: "300_age",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "An Epoch",
    desc: "Six Minutes",
    file: "360_epoch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/images/footer.png",
    srcSet: "static/images/footer2x.png 2x",
    alt: "Footer",
    className: "jsx-1874071462" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Music by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    className: "jsx-1874071462",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Christopher Roberts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1874071462",
    __self: this
  }, "body{background-color:#3B4252;text-align:center;font-family:'IM Fell French Canon',serif;color:#D8DEE9;}img{width:100%;}.footer{width:30%;}hr{width:50%;border:0;height:2px;background-image:linear-gradient(to right,rgba(76,86,106,0),rgba(76,86,106,0.75),rgba(76,86,106,0));margin:1em auto;}h1{font-size:5em;font-style:italic;margin:0 1em auto;}h2{margin-bottom:0.2em;}p{font-style:italic;font-size:0.8em;margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DeUIsQUFHbUMsQUFPYixBQUlELEFBSUEsQUFRSSxBQU1NLEFBS3ZCLEFBSUEsQUFHcUIsVUE3QnBCLEFBSVcsQ0FSWCxHQWdCb0IsSUFrQkYsQ0F6QkwsQ0FhYixLQTdCb0IsS0FpQjhGLEVBTzlGLEVBa0JMLFNBekM2QixJQTBDNUMsR0FsQkEsa0NBdkJnQixjQUNoQixnQ0Fla0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxheWVyID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj57cHJvcHMubmFtZX08L2gyPlxuICAgIDxwPntwcm9wcy5kZXNjfTwvcD5cbiAgICA8YXVkaW8gaWQ9e3Byb3BzLmZpbGV9IGNvbnRyb2xzPlxuICAgICAgPHNvdXJjZSBzcmM9e1wic3RhdGljL2F1ZGlvL1wiICsgcHJvcHMuZmlsZSArIFwiLm1wM1wifSB0eXBlPVwiYXVkaW8vbXBlZ1wiLz5cbiAgICAgIDxzb3VyY2Ugc3JjPXtcInN0YXRpYy9hdWRpby9cIiArIHByb3BzLmZpbGUgKyBcIi5vZ2dcIn0gdHlwZT1cImF1ZGlvL29nZ1wiLz5cbiAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyB0YWcuXG4gICAgPC9hdWRpbz5cbiAgICA8aHIgLz5cbiAgPC9kaXY+XG4pO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SU0rRmVsbCtGcmVuY2grQ2Fub246NDAwLDQwMGkmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9iYW5uZXIucG5nXCIgc3JjU2V0PVwic3RhdGljL2ltYWdlcy9iYW5uZXIyeC5wbmcgMnhcIiBhbHQ9XCJIZWFkZXJcIiAvPlxuICAgICAgPGgxPlRIRSBBUlRFRkFDVDwvaDE+XG4gICAgICA8aDM+U291bmRzIG9mIGRlZXAsIGZvcmdvdHRlbiBwbGFjZXMgdG8gYmUgcGxheWVkIGFzIHRoZSB5ZWFycyBkcmlmdCBwYXN0LjwvaDM+XG4gICAgICA8aHIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgRGF5XCIgZGVzYz1cIkZpdmUgU2Vjb25kc1wiIGZpbGU9XCIwMDVfZGF5XCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgV2Vla1wiIGRlc2M9XCJUZW4gU2Vjb25kc1wiIGZpbGU9XCIwMTBfd2Vla1wiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIE1vbnRoXCIgZGVzYz1cIlR3ZW50eSBTZWNvbmRzXCIgZmlsZT1cIjAyMF9tb250aFwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIFllYXJcIiBkZXNjPVwiRm9ydHkgU2Vjb25kc1wiIGZpbGU9XCIwNDBfeWVhclwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIERlY2FkZVwiIGRlc2M9XCJPbmUgTWludXRlXCIgZmlsZT1cIjA2MF9kZWNhZGVcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBDZW50dXJ5XCIgZGVzYz1cIlR3byBNaW51dGVzXCIgZmlsZT1cIjEyMF9jZW50dXJ5XCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkNlbnR1cmllc1wiIGRlc2M9XCJUaHJlZSBNaW51dGVzXCIgZmlsZT1cIjE4MF9jZW50dXJpZXNcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBNaWxsZW5uaXVtXCIgZGVzYz1cIkZvdXIgTWludXRlc1wiIGZpbGU9XCIyNDBfbWlsbGVubml1bVwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBbiBBZ2VcIiBkZXNjPVwiRml2ZSBNaW51dGVzXCIgZmlsZT1cIjMwMF9hZ2VcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQW4gRXBvY2hcIiBkZXNjPVwiU2l4IE1pbnV0ZXNcIiBmaWxlPVwiMzYwX2Vwb2NoXCIgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9XCJmb290ZXJcIiBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Zvb3Rlci5wbmdcIiBzcmNTZXQ9XCJzdGF0aWMvaW1hZ2VzL2Zvb3RlcjJ4LnBuZyAyeFwiIGFsdD1cIkZvb3RlclwiIC8+XG4gICAgICA8aDM+TXVzaWMgYnkgPGEgaHJlZj1cIlwiPkNocmlzdG9waGVyIFJvYmVydHM8L2E+PC9oMz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogIzNCNDI1MjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJTSBGZWxsIEZyZW5jaCBDYW5vbicsIHNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjRDhERUU5O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cblxuICAgICAgICBociB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDc2LCA4NiwgMTA2LCAwKSwgcmdiYSg3NiwgODYsIDEwNiwgMC43NSksIHJnYmEoNzYsIDg2LCAxMDYsIDApKTtcbiAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBtYXJnaW46IDAgMWVtIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI0VCQ0I4QjpcbiAgICAgICAgfVxuXG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICNFQkNCOEI6XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeharrison/Development/mouseholepress/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4c8ab31b76b97c362386.hot-update.js.map