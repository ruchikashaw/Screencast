webpackHotUpdate("static/development/pages/leaderboard.js",{

/***/ "./components/Leadertable.js":
/*!***********************************!*\
  !*** ./components/Leadertable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedTables; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _Leadertable_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Leadertable.module.css */ "./components/Leadertable.module.css");
/* harmony import */ var _Leadertable_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Leadertable_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/anwesha/Desktop/screencast/components/Leadertable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    head: {
      backgroundColor: "#000033",
      color: "white",
      border: "none"
    },
    body: {
      fontSize: 14,
      color: "white",
      border: "none"
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"]);
var StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "rgba(255,255,255,0.4)"
      },
      '&:nth-of-type(even)': {
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white"
      }
    }
  };
})(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  table: {
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "auto",
    maxWidth: '700px',
    position: "relative"
  }
});
function CustomizedTables() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      RankList = _useState[0],
      setRankList = _useState[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('https://jsonplaceholder.typicode.com/users/0').then(function (response) {
      console.log(RankList);
      setRankList(response.data);
      console.log(RankList);
    });
    console.log(RankList);
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "rtable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Rank"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Player"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Points"))), RankList.length && __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, RankList.map(function (row, index) {
    return __jsx(StyledTableRow, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 15
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }, row.id), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, row.username), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, row.email));
  })), !RankList.length && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, "LOADING......"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Load"))));
}

/***/ })

})
//# sourceMappingURL=leaderboard.js.4cf93398c19c5fbf2b6f.hot-update.js.map