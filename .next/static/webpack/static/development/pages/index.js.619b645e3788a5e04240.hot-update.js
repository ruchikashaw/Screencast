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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glug.png */ "./glug.png");
/* harmony import */ var _glug_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_glug_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! social-media-icons-react */ "./node_modules/social-media-icons-react/dist/index.js");
/* harmony import */ var social_media_icons_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(social_media_icons_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_GoogleLog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/GoogleLog */ "./components/GoogleLog.js");
/* harmony import */ var _components_FbLog2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FbLog2 */ "./components/FbLog2.js");
/* harmony import */ var _components_Timer2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Timer2 */ "./components/Timer2.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Date.now()),
      Stop = _useState[0],
      setStop = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(Date.now());
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://screencast2020.herokuapp.com/api/leaderboard").then(function (response) {
      console.log(response);
    });
  });
  return __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2094082217",
    __self: this
  }, "div.jsx-2094082217{text-align:center;content-align:center;margin:0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Da0IsQUFHNkIsa0JBQ0cscUJBQ0wsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2dsdWcucG5nXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCB7U29jaWFsTWVkaWFJY29uc1JlYWN0fSBmcm9tICdzb2NpYWwtbWVkaWEtaWNvbnMtcmVhY3QnO1xuaW1wb3J0IEdvb2dsZUxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Hb29nbGVMb2dcIjtcbmltcG9ydCBGYkxvZzIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmJMb2cyXCI7XG5pbXBvcnQgVGltZXIyIGZyb20gXCIuLi9jb21wb25lbnRzL1RpbWVyMlwiXG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXMtanNcIjtcblxuXG5cblxuXG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuXG4gIFxuICBjb25zdCBbU3RvcCwgc2V0U3RvcF0gPSB1c2VTdGF0ZShEYXRlLm5vdygpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKERhdGUubm93KCkpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zY3JlZW5jYXN0MjAyMC5oZXJva3VhcHAuY29tL2FwaS9sZWFkZXJib2FyZFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIFxuICAgICAgfSk7XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb250ZW50LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICB7LyogPFBhcnRpY2xlc1xuICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogNDAsXG4gICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDUwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogW1wiI2NjMDAwMFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjYWEwMDQ0XCIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICBpbmRleDogXCItMTBcIixcbiAgICAgICAgfX1cbiAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHNocmluay10by1maXQ6bm9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0aXRsZT5TY3JlZW5jYXN0IDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cInF1ZXN0aW9uLmNzc1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgPFRpbWVyMiAvPlxuXG5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ25cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCInUnVzc28gT25lJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXN0LWZsaWNrZXJcIj5zY3JlZW48L3NwYW4+Y2FzdHtcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsaWNrZXJcIj4yMDIwIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWhlYWRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgPGgxPkxvZ2luIHRvIHBsYXkgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEdvb2dsZUxvZyAvPlxuICAgICAgICA8RmJMb2cyID48L0ZiTG9nMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgYm90dG9tOiBcIjI1cHhcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17TG9nb31cbiAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjkwcHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIlxuXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IC8+XG5cbiAgICA8L2Rpdj5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/index.js */"), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit:no",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Screencast "), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "question.css",
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }))), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(_components_Timer2__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginTop: "40px",
      marginBottom: "20px",
      fontFamily: "'Russo One', sans-serif"
    },
    className: "jsx-2094082217" + " " + "sign",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2094082217" + " " + "fast-flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "screen"), "cast", " ", __jsx("span", {
    className: "jsx-2094082217" + " " + "flicker",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "2020 ")), __jsx("div", {
    style: {
      marginBottom: "60px"
    },
    className: "jsx-2094082217" + " " + "login-head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Login to play "))), __jsx(_components_GoogleLog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }), __jsx(_components_FbLog2__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      bottom: "25px",
      position: "fixed",
      textAlign: "center"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: _glug_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    style: {
      marginTop: "90px",
      width: "50px"
    },
    className: "jsx-2094082217",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      color: "white"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.619b645e3788a5e04240.hot-update.js.map