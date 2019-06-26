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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Day",
    desc: "Five Seconds",
    file: "005_day",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Week",
    desc: "Ten Seconds",
    file: "010_week",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Month",
    desc: "Twenty Seconds",
    file: "020_month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Year",
    desc: "Forty Seconds",
    file: "040_year",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Decade",
    desc: "One Minute",
    file: "060_decade",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Century",
    desc: "Two Minutes",
    file: "120_century",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "Centuries",
    desc: "Three Minutes",
    file: "180_centuries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "A Millennium",
    desc: "Four Minutes",
    file: "240_millennium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "An Age",
    desc: "Five Minutes",
    file: "300_age",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Player, {
    name: "An Epoch",
    desc: "Six Minutes",
    file: "360_epoch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/images/footer.png",
    srcSet: "static/images/footer2x.png 2x",
    alt: "Footer",
    className: "jsx-606444135" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Music by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/fenixtao",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Christopher Roberts")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Designed for ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://mouseholepress.itch.io/the-artefact",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "The Artefact"), ", by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/mouseholepress",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Jack Harrison")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Inspired by the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://lplade.github.io/skeleton-tomb/",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Skeleton Tomb"), ", by ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://resume.lplade.name",
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Larry Lade")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-606444135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "606444135",
    __self: this
  }, "body{background-color:#3B4252;text-align:center;font-family:'IM Fell French Canon',serif;color:#D8DEE9;}img{width:100%;}.footer{width:30%;}hr{width:50%;border:0;height:2px;background-image:linear-gradient(to right,rgba(76,86,106,0),rgba(76,86,106,0.75),rgba(76,86,106,0));margin:1em auto;}h1{font-size:400%;font-style:italic;margin:0 1em auto;}h2{margin-bottom:0.2em;}h3{font-size:0.9em;}a{color:#EBCB8B;-webkit-text-decoration:none;text-decoration:none;}p{font-size:0.8em;}p.desc{font-style:italic;margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWhhcnJpc29uL0RldmVsb3BtZW50L21vdXNlaG9sZXByZXNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DeUIsQUFHbUMsQUFPYixBQUlELEFBSUEsQUFRSyxBQU1LLEFBSUosQUFJRixBQUtFLEFBSUUsVUFsQ3BCLEFBSVcsQ0FSWCxHQThCdUIsQ0FkSCxDQVVwQixBQVNBLEVBSWUsQ0E5QkYsQ0FhYixLQTdCb0IsS0FpQjhGLENBOEJsSCxFQXZCb0IsVUF2QndCLFFBd0I1QyxhQWFBLG9CQXBDZ0IsY0FDaEIsZ0NBZWtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvamVoYXJyaXNvbi9EZXZlbG9wbWVudC9tb3VzZWhvbGVwcmVzcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBsYXllciA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8aDI+e3Byb3BzLm5hbWV9PC9oMj5cbiAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+e3Byb3BzLmRlc2N9PC9wPlxuICAgIDxhdWRpbyBpZD17cHJvcHMuZmlsZX0gY29udHJvbHM+XG4gICAgICA8c291cmNlIHNyYz17XCJzdGF0aWMvYXVkaW8vXCIgKyBwcm9wcy5maWxlICsgXCIubXAzXCJ9IHR5cGU9XCJhdWRpby9tcGVnXCIvPlxuICAgICAgPHNvdXJjZSBzcmM9e1wic3RhdGljL2F1ZGlvL1wiICsgcHJvcHMuZmlsZSArIFwiLm9nZ1wifSB0eXBlPVwiYXVkaW8vb2dnXCIvPlxuICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGF1ZGlvIHRhZy5cbiAgICA8L2F1ZGlvPlxuICAgIDxociAvPlxuICA8L2Rpdj5cbik7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JTStGZWxsK0ZyZW5jaCtDYW5vbjo0MDAsNDAwaSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Jhbm5lci5wbmdcIiBzcmNTZXQ9XCJzdGF0aWMvaW1hZ2VzL2Jhbm5lcjJ4LnBuZyAyeFwiIGFsdD1cIkhlYWRlclwiIC8+XG4gICAgICA8aHIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgRGF5XCIgZGVzYz1cIkZpdmUgU2Vjb25kc1wiIGZpbGU9XCIwMDVfZGF5XCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkEgV2Vla1wiIGRlc2M9XCJUZW4gU2Vjb25kc1wiIGZpbGU9XCIwMTBfd2Vla1wiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIE1vbnRoXCIgZGVzYz1cIlR3ZW50eSBTZWNvbmRzXCIgZmlsZT1cIjAyMF9tb250aFwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIFllYXJcIiBkZXNjPVwiRm9ydHkgU2Vjb25kc1wiIGZpbGU9XCIwNDBfeWVhclwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBIERlY2FkZVwiIGRlc2M9XCJPbmUgTWludXRlXCIgZmlsZT1cIjA2MF9kZWNhZGVcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBDZW50dXJ5XCIgZGVzYz1cIlR3byBNaW51dGVzXCIgZmlsZT1cIjEyMF9jZW50dXJ5XCIgLz5cbiAgICAgIDxQbGF5ZXIgbmFtZT1cIkNlbnR1cmllc1wiIGRlc2M9XCJUaHJlZSBNaW51dGVzXCIgZmlsZT1cIjE4MF9jZW50dXJpZXNcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQSBNaWxsZW5uaXVtXCIgZGVzYz1cIkZvdXIgTWludXRlc1wiIGZpbGU9XCIyNDBfbWlsbGVubml1bVwiIC8+XG4gICAgICA8UGxheWVyIG5hbWU9XCJBbiBBZ2VcIiBkZXNjPVwiRml2ZSBNaW51dGVzXCIgZmlsZT1cIjMwMF9hZ2VcIiAvPlxuICAgICAgPFBsYXllciBuYW1lPVwiQW4gRXBvY2hcIiBkZXNjPVwiU2l4IE1pbnV0ZXNcIiBmaWxlPVwiMzYwX2Vwb2NoXCIgLz5cblxuICAgICAgPGltZyBjbGFzc05hbWU9XCJmb290ZXJcIiBzcmM9XCJzdGF0aWMvaW1hZ2VzL2Zvb3Rlci5wbmdcIiBzcmNTZXQ9XCJzdGF0aWMvaW1hZ2VzL2Zvb3RlcjJ4LnBuZyAyeFwiIGFsdD1cIkZvb3RlclwiIC8+XG4gICAgICA8cD5NdXNpYyBieSA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9mZW5peHRhb1wiPkNocmlzdG9waGVyIFJvYmVydHM8L2E+PC9wPlxuICAgICAgPHA+RGVzaWduZWQgZm9yIDxhIGhyZWY9XCJodHRwczovL21vdXNlaG9sZXByZXNzLml0Y2guaW8vdGhlLWFydGVmYWN0XCI+VGhlIEFydGVmYWN0PC9hPiwgYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbW91c2Vob2xlcHJlc3NcIj5KYWNrIEhhcnJpc29uPC9hPjwvcD5cbiAgICAgIDxwPkluc3BpcmVkIGJ5IHRoZSA8YSBocmVmPVwiaHR0cDovL2xwbGFkZS5naXRodWIuaW8vc2tlbGV0b24tdG9tYi9cIj5Ta2VsZXRvbiBUb21iPC9hPiwgYnkgPGEgaHJlZj1cImh0dHBzOi8vcmVzdW1lLmxwbGFkZS5uYW1lXCI+TGFycnkgTGFkZTwvYT48L3A+XG5cbiAgICAgIDxiciAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgIFx0YmFja2dyb3VuZC1jb2xvcjogIzNCNDI1MjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJTSBGZWxsIEZyZW5jaCBDYW5vbicsIHNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjRDhERUU5O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cblxuICAgICAgICBociB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDc2LCA4NiwgMTA2LCAwKSwgcmdiYSg3NiwgODYsIDEwNiwgMC43NSksIHJnYmEoNzYsIDg2LCAxMDYsIDApKTtcbiAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDAwJTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbWFyZ2luOiAwIDFlbSBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI0VCQ0I4QjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcC5kZXNjIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeharrison/Development/mouseholepress/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d662fa6ab5069ff93b7c.hot-update.js.map