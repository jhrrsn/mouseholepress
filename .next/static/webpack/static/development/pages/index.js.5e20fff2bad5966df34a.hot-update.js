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
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=IM+Fell+French+Canon:400,400i&display=swap",
    rel: "stylesheet",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/images/banner.png",
    srcSet: "static/images/banner2x.png 2x",
    alt: "Header",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "THE ARTEFACT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Sounds of deep, forgotten places to be played as the years drift past."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-606444135",
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
    className: "jsx-606444135" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Music by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/fenixtao",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Christopher Roberts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Designed for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://mouseholepress.itch.io/the-artefact",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "The Artefact"), ", by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/mouseholepress",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Jack Harrison")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Inspired by the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://lplade.github.io/skeleton-tomb/",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Skeleton Tomb"), ", by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://resume.lplade.name",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Larry Lade")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "606444135",
    __self: this
  }, "body{background-color:#3B4252;text-align:center;font-family:'IM Fell French Canon',serif;color:#D8DEE9;}img{width:100%;}.footer{width:30%;}hr{width:50%;border:0;height:2px;background-image:linear-gradient(to right,rgba(76,86,106,0),rgba(76,86,106,0.75),rgba(76,86,106,0));margin:1em auto;}h1{font-size:400%;font-style:italic;margin:0 1em auto;}h2{margin-bottom:0.2em;}h3{font-size:0.9em;}a{color:#EBCB8B;-webkit-text-decoration:none;text-decoration:none;}p{font-size:0.8em;}p.desc{font-style:italic;margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDeUIsQUFHbUMsQUFPYixBQUlELEFBSUEsQUFRSyxBQU1LLEFBSUosQUFJRixBQUtFLEFBSUUsVUFsQ3BCLEFBSVcsQ0FSWCxHQThCdUIsQ0FkSCxDQVVwQixBQVNBLEVBSWUsQ0E5QkYsQ0FhYixLQTdCb0IsS0FpQjhGLENBOEJsSCxFQXZCb0IsVUF2QndCLFFBd0I1QyxhQWFBLG9CQXBDZ0IsY0FDaEIsZ0NBZWtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvamVoYXJyaXNvbi9EZXZlbG9wbWVudC9tb3VzZWhvbGVwcmVzcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBsYXllciA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8aDI+e3Byb3BzLm5hbWV9PC9oMj5cbiAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+e3Byb3BzLmRlc2N9PC9wPlxuICAgIDxhdWRpbyBpZD17cHJvcHMuZmlsZX0gY29udHJvbHM+XG4gICAgICA8c291cmNlIHNyYz17XCJzdGF0aWMvYXVkaW8vXCIgKyBwcm9wcy5maWxlICsgXCIubXAzXCJ9IHR5cGU9XCJhdWRpby9tcGVnXCIvPlxuICAgICAgPHNvdXJjZSBzcmM9e1wic3RhdGljL2F1ZGlvL1wiICsgcHJvcHMuZmlsZSArIFwiLm9nZ1wifSB0eXBlPVwiYXVkaW8vb2dnXCIvPlxuICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGF1ZGlvIHRhZy5cbiAgICA8L2F1ZGlvPlxuICAgIDxociAvPlxuICA8L2Rpdj5cbik7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JTStGZWxsK0ZyZW5jaCtDYW5vbjo0MDAsNDAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Jhbm5lci5wbmdcIiBzcmNTZXQ9XCJzdGF0aWMvaW1hZ2VzL2Jhbm5lcjJ4LnBuZyAyeFwiIGFsdD1cIkhlYWRlclwiIC8+XG4gICAgICA8aDE+VEhFIEFSVEVGQUNUPC9oMT5cbiAgICAgIDxoMz5Tb3VuZHMgb2YgZGVlcCwgZm9yZ290dGVuIHBsYWNlcyB0byBiZSBwbGF5ZWQgYXMgdGhlIHllYXJzIGRyaWZ0IHBhc3QuPC9oMz5cbiAgICAgIDxociAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBEYXlcIiBkZXNjPVwiRml2ZSBTZWNvbmRzXCIgZmlsZT1cIjAwNV9kYXlcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBXZWVrXCIgZGVzYz1cIlRlbiBTZWNvbmRzXCIgZmlsZT1cIjAxMF93ZWVrXCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgTW9udGhcIiBkZXNjPVwiVHdlbnR5IFNlY29uZHNcIiBmaWxlPVwiMDIwX21vbnRoXCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgWWVhclwiIGRlc2M9XCJGb3J0eSBTZWNvbmRzXCIgZmlsZT1cIjA0MF95ZWFyXCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgRGVjYWRlXCIgZGVzYz1cIk9uZSBNaW51dGVcIiBmaWxlPVwiMDYwX2RlY2FkZVwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIENlbnR1cnlcIiBkZXNjPVwiVHdvIE1pbnV0ZXNcIiBmaWxlPVwiMTIwX2NlbnR1cnlcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQ2VudHVyaWVzXCIgZGVzYz1cIlRocmVlIE1pbnV0ZXNcIiBmaWxlPVwiMTgwX2NlbnR1cmllc1wiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIE1pbGxlbm5pdW1cIiBkZXNjPVwiRm91ciBNaW51dGVzXCIgZmlsZT1cIjI0MF9taWxsZW5uaXVtXCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkFuIEFnZVwiIGRlc2M9XCJGaXZlIE1pbnV0ZXNcIiBmaWxlPVwiMzAwX2FnZVwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBbiBFcG9jaFwiIGRlc2M9XCJTaXggTWludXRlc1wiIGZpbGU9XCIzNjBfZXBvY2hcIiAvPlxuXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3RlclwiIHNyYz1cInN0YXRpYy9pbWFnZXMvZm9vdGVyLnBuZ1wiIHNyY1NldD1cInN0YXRpYy9pbWFnZXMvZm9vdGVyMngucG5nIDJ4XCIgYWx0PVwiRm9vdGVyXCIgLz5cbiAgICAgIDxwPk11c2ljIGJ5IDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Zlbml4dGFvXCI+Q2hyaXN0b3BoZXIgUm9iZXJ0czwvYT48L3A+XG4gICAgICA8cD5EZXNpZ25lZCBmb3IgPGEgaHJlZj1cImh0dHBzOi8vbW91c2Vob2xlcHJlc3MuaXRjaC5pby90aGUtYXJ0ZWZhY3RcIj5UaGUgQXJ0ZWZhY3Q8L2E+LCBieSA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9tb3VzZWhvbGVwcmVzc1wiPkphY2sgSGFycmlzb248L2E+PC9wPlxuICAgICAgPHA+SW5zcGlyZWQgYnkgdGhlIDxhIGhyZWY9XCJodHRwOi8vbHBsYWRlLmdpdGh1Yi5pby9za2VsZXRvbi10b21iL1wiPlNrZWxldG9uIFRvbWI8L2E+LCBieSA8YSBocmVmPVwiaHR0cHM6Ly9yZXN1bWUubHBsYWRlLm5hbWVcIj5MYXJyeSBMYWRlPC9hPjwvcD5cblxuICAgICAgPGJyIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM0I0MjUyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0lNIEZlbGwgRnJlbmNoIENhbm9uJywgc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICNEOERFRTk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNzYsIDg2LCAxMDYsIDApLCByZ2JhKDc2LCA4NiwgMTA2LCAwLjc1KSwgcmdiYSg3NiwgODYsIDEwNiwgMCkpO1xuICAgICAgICAgIG1hcmdpbjogMWVtIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MDAlO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBtYXJnaW46IDAgMWVtIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjRUJDQjhCO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIH1cblxuICAgICAgICBwLmRlc2Mge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeharrison/Development/mouseholepress/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5e20fff2bad5966df34a.hot-update.js.map