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
    className: "desc",
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
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=IM+Fell+French+Canon:400,400i&display=swap",
    rel: "stylesheet",
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/images/banner.png",
    srcSet: "static/images/banner2x.png 2x",
    alt: "Header",
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "THE ARTEFACT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Sounds of deep, forgotten places to be played as the years drift past."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-521686791",
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
    className: "jsx-521686791" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Music by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/fenixtao",
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Christopher Roberts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Designed for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://mouseholepress.itch.io/the-artefact",
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "The Artefact"), " by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/mouseholepress",
    className: "jsx-521686791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Jack Harrison")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "521686791",
    __self: this
  }, "body{background-color:#3B4252;text-align:center;font-family:'IM Fell French Canon',serif;color:#D8DEE9;}img{width:100%;}.footer{width:30%;}hr{width:50%;border:0;height:2px;background-image:linear-gradient(to right,rgba(76,86,106,0),rgba(76,86,106,0.75),rgba(76,86,106,0));margin:1em auto;}h1{font-size:5em;font-style:italic;margin:0 1em auto;}h2{margin-bottom:0.2em;}a{color:#EBCB8B;-webkit-text-decoration:none;text-decoration:none;}p.desc{font-style:italic;font-size:0.8em;margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DeUIsQUFHbUMsQUFPYixBQUlELEFBSUEsQUFRSSxBQU1NLEFBSU4sQUFLSSxVQTFCcEIsQUFJVyxDQVJYLEdBZ0JvQixBQVVHLElBS0wsQ0F0QkwsQ0FhYixLQTdCb0IsS0FpQjhGLEVBTzlGLEVBZUwsU0F0QzZCLElBdUM1QyxHQWZBLGNBU0Esb0JBaENnQixjQUNoQixnQ0Fla0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxheWVyID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj57cHJvcHMubmFtZX08L2gyPlxuICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj57cHJvcHMuZGVzY308L3A+XG4gICAgPGF1ZGlvIGlkPXtwcm9wcy5maWxlfSBjb250cm9scz5cbiAgICAgIDxzb3VyY2Ugc3JjPXtcInN0YXRpYy9hdWRpby9cIiArIHByb3BzLmZpbGUgKyBcIi5tcDNcIn0gdHlwZT1cImF1ZGlvL21wZWdcIi8+XG4gICAgICA8c291cmNlIHNyYz17XCJzdGF0aWMvYXVkaW8vXCIgKyBwcm9wcy5maWxlICsgXCIub2dnXCJ9IHR5cGU9XCJhdWRpby9vZ2dcIi8+XG4gICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gdGFnLlxuICAgIDwvYXVkaW8+XG4gICAgPGhyIC8+XG4gIDwvZGl2PlxuKTtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUlNK0ZlbGwrRnJlbmNoK0Nhbm9uOjQwMCw0MDBpJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICA8aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvYmFubmVyLnBuZ1wiIHNyY1NldD1cInN0YXRpYy9pbWFnZXMvYmFubmVyMngucG5nIDJ4XCIgYWx0PVwiSGVhZGVyXCIgLz5cbiAgICAgIDxoMT5USEUgQVJURUZBQ1Q8L2gxPlxuICAgICAgPGgzPlNvdW5kcyBvZiBkZWVwLCBmb3Jnb3R0ZW4gcGxhY2VzIHRvIGJlIHBsYXllZCBhcyB0aGUgeWVhcnMgZHJpZnQgcGFzdC48L2gzPlxuICAgICAgPGhyIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIERheVwiIGRlc2M9XCJGaXZlIFNlY29uZHNcIiBmaWxlPVwiMDA1X2RheVwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIFdlZWtcIiBkZXNjPVwiVGVuIFNlY29uZHNcIiBmaWxlPVwiMDEwX3dlZWtcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBNb250aFwiIGRlc2M9XCJUd2VudHkgU2Vjb25kc1wiIGZpbGU9XCIwMjBfbW9udGhcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBZZWFyXCIgZGVzYz1cIkZvcnR5IFNlY29uZHNcIiBmaWxlPVwiMDQwX3llYXJcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBEZWNhZGVcIiBkZXNjPVwiT25lIE1pbnV0ZVwiIGZpbGU9XCIwNjBfZGVjYWRlXCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgQ2VudHVyeVwiIGRlc2M9XCJUd28gTWludXRlc1wiIGZpbGU9XCIxMjBfY2VudHVyeVwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJDZW50dXJpZXNcIiBkZXNjPVwiVGhyZWUgTWludXRlc1wiIGZpbGU9XCIxODBfY2VudHVyaWVzXCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgTWlsbGVubml1bVwiIGRlc2M9XCJGb3VyIE1pbnV0ZXNcIiBmaWxlPVwiMjQwX21pbGxlbm5pdW1cIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQW4gQWdlXCIgZGVzYz1cIkZpdmUgTWludXRlc1wiIGZpbGU9XCIzMDBfYWdlXCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkFuIEVwb2NoXCIgZGVzYz1cIlNpeCBNaW51dGVzXCIgZmlsZT1cIjM2MF9lcG9jaFwiIC8+XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVyXCIgc3JjPVwic3RhdGljL2ltYWdlcy9mb290ZXIucG5nXCIgc3JjU2V0PVwic3RhdGljL2ltYWdlcy9mb290ZXIyeC5wbmcgMnhcIiBhbHQ9XCJGb290ZXJcIiAvPlxuICAgICAgPHA+TXVzaWMgYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZmVuaXh0YW9cIj5DaHJpc3RvcGhlciBSb2JlcnRzPC9hPjwvcD5cbiAgICAgIDxwPkRlc2lnbmVkIGZvciA8YSBocmVmPVwiaHR0cHM6Ly9tb3VzZWhvbGVwcmVzcy5pdGNoLmlvL3RoZS1hcnRlZmFjdFwiPlRoZSBBcnRlZmFjdDwvYT4gYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbW91c2Vob2xlcHJlc3NcIj5KYWNrIEhhcnJpc29uPC9hPjwvcD5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogIzNCNDI1MjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJTSBGZWxsIEZyZW5jaCBDYW5vbicsIHNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjRDhERUU5O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cblxuICAgICAgICBociB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDc2LCA4NiwgMTA2LCAwKSwgcmdiYSg3NiwgODYsIDEwNiwgMC43NSksIHJnYmEoNzYsIDg2LCAxMDYsIDApKTtcbiAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBtYXJnaW46IDAgMWVtIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI0VCQ0I4QjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBwLmRlc2Mge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/jeharrison/Development/mouseholepress/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a3b6812ebf54621c6ba4.hot-update.js.map