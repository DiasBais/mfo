webpackHotUpdate_N_E("pages/admin/telegram",{

/***/ "./components/shared/messageDetailed.js":
/*!**********************************************!*\
  !*** ./components/shared/messageDetailed.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults_recomAnswer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defaults/recomAnswer */ "./defaults/recomAnswer.js");


var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\shared\\messageDetailed.js",
    _this = undefined;




var MessageDetail = function MessageDetail(props) {
  var RecomendedBtn = function RecomendedBtn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: _defaults_recomAnswer__WEBPACK_IMPORTED_MODULE_2__["Recommendation"].map(function (r) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          value: r.answer,
          children: r.answer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 23
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 15
    }, _this);
  };

  if (props.msg) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tgmsg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0418\u0418\u041D: ", props.msg.iin]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0418\u043C\u044F: ", props.msg.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", props.msg.question]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          value: props.answer,
          onChange: props.handleChange,
          type: "textarea",
          className: "form-control",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442",
          onKeyPress: function onKeyPress() {
            return props.keypress(event, props.msg.message_id, props.msg.question, props.msg.iin, props.msg.id);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          disabled: true,
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 27
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onClick: function onClick() {
            return props.handleSubmit(props.msg.message_id, props.msg.question, props.msg.iin, props.msg.id);
          },
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "nothing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this);
  }
};

_c = MessageDetail;
/* harmony default export */ __webpack_exports__["default"] = (MessageDetail);

var _c;

$RefreshReg$(_c, "MessageDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIlJlY29tZW5kZWRCdG4iLCJSZWNvbW1lbmRhdGlvbiIsIm1hcCIsInIiLCJhbnN3ZXIiLCJtc2ciLCJpaW4iLCJuYW1lIiwicXVlc3Rpb24iLCJoYW5kbGVDaGFuZ2UiLCJrZXlwcmVzcyIsImV2ZW50IiwibWVzc2FnZV9pZCIsImlkIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUssRUFBSTtBQUUzQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsd0JBQ007QUFBQSxnQkFDS0Msb0VBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFBQyxDQUFDO0FBQUEsNEJBQ2pCO0FBQVEsZUFBSyxFQUFFQSxDQUFDLENBQUNDLE1BQWpCO0FBQUEsb0JBQTBCRCxDQUFDLENBQUNDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRE47QUFPSCxHQVJEOztBQVNBLE1BQUdMLEtBQUssQ0FBQ00sR0FBVCxFQUFjO0FBQ1Ysd0JBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUEsMkNBQVNOLEtBQUssQ0FBQ00sR0FBTixDQUFVQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsMkNBQVNQLEtBQUssQ0FBQ00sR0FBTixDQUFVRSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsNkRBQVlSLEtBQUssQ0FBQ00sR0FBTixDQUFVRyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUtJO0FBQUEsZ0NBQ0k7QUFBVSxlQUFLLEVBQUVULEtBQUssQ0FBQ0ssTUFBdkI7QUFBK0Isa0JBQVEsRUFBRUwsS0FBSyxDQUFDVSxZQUEvQztBQUE2RCxjQUFJLEVBQUMsVUFBbEU7QUFBNkUsbUJBQVMsRUFBQyxjQUF2RjtBQUFzRyxxQkFBVyxFQUFDLDJFQUFsSDtBQUFrSSxvQkFBVSxFQUFFO0FBQUEsbUJBQU1WLEtBQUssQ0FBQ1csUUFBTixDQUFlQyxLQUFmLEVBQXFCWixLQUFLLENBQUNNLEdBQU4sQ0FBVU8sVUFBL0IsRUFBMENiLEtBQUssQ0FBQ00sR0FBTixDQUFVRyxRQUFwRCxFQUE2RFQsS0FBSyxDQUFDTSxHQUFOLENBQVVDLEdBQXZFLEVBQTRFUCxLQUFLLENBQUNNLEdBQU4sQ0FBVVEsRUFBdEYsQ0FBTjtBQUFBO0FBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFS2QsS0FBSyxDQUFDZSxPQUFOLEtBQWtCLElBQWxCLGdCQUNLO0FBQU8sa0JBQVEsTUFBZjtBQUFpQixjQUFJLEVBQUMsUUFBdEI7QUFBK0IsbUJBQU0sOEJBQXJDO0FBQW9FLGVBQUssRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURMLGdCQUVNO0FBQU8saUJBQU8sRUFBRTtBQUFBLG1CQUFLZixLQUFLLENBQUNnQixZQUFOLENBQW1CaEIsS0FBSyxDQUFDTSxHQUFOLENBQVVPLFVBQTdCLEVBQXdDYixLQUFLLENBQUNNLEdBQU4sQ0FBVUcsUUFBbEQsRUFBMkRULEtBQUssQ0FBQ00sR0FBTixDQUFVQyxHQUFyRSxFQUEwRVAsS0FBSyxDQUFDTSxHQUFOLENBQVVRLEVBQXBGLENBQUw7QUFBQSxXQUFoQjtBQUE4RyxjQUFJLEVBQUMsUUFBbkg7QUFBNEgsbUJBQU0sOEJBQWxJO0FBQWlLLGVBQUssRUFBQztBQUF2SztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBaUJILEdBbEJELE1BbUJLO0FBQ0Qsd0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUtIO0FBQ0osQ0FyQ0Q7O0tBQU1mLGE7QUF1Q1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3RlbGVncmFtLjY0ZGU5Mjk4NWZhOTFjNmExNmIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRhdGlvbiB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3JlY29tQW5zd2VyJztcclxuXHJcbmNvbnN0IE1lc3NhZ2VEZXRhaWwgPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgUmVjb21lbmRlZEJ0biA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtSZWNvbW1lbmRhdGlvbi5tYXAocj0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdmFsdWU9e3IuYW5zd2VyfT57ci5hbnN3ZXJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGlmKHByb3BzLm1zZykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0Z21zZyc+XHJcbiAgICAgICAgICAgICAgICA8cD7QmNCY0J06IHtwcm9wcy5tc2cuaWlufTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPtCY0LzRjzoge3Byb3BzLm1zZy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPtCS0L7Qv9GA0L7RgToge3Byb3BzLm1zZy5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogPHA+SUQ6IHtwcm9wcy5tc2cubWVzc2FnZV9pZH08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17cHJvcHMuYW5zd2VyfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSB0eXBlPSd0ZXh0YXJlYScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDQvtGC0LLQtdGCJyBvbktleVByZXNzPXsoKSA9PiBwcm9wcy5rZXlwcmVzcyhldmVudCxwcm9wcy5tc2cubWVzc2FnZV9pZCxwcm9wcy5tc2cucXVlc3Rpb24scHJvcHMubXNnLmlpbiwgcHJvcHMubXNnLmlkKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxpbnB1dCBkaXNhYmxlZCAgdHlwZT0nYnV0dG9uJyBjbGFzcz1cIm10LTMgZC1ibG9jayBidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT0n0J7RgtC/0YDQsNCy0LrQsC4uLicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAgPGlucHV0IG9uQ2xpY2s9eygpPT4gcHJvcHMuaGFuZGxlU3VibWl0KHByb3BzLm1zZy5tZXNzYWdlX2lkLHByb3BzLm1zZy5xdWVzdGlvbixwcm9wcy5tc2cuaWluLCBwcm9wcy5tc2cuaWQpfSB0eXBlPSdidXR0b24nIGNsYXNzPVwibXQtMyBkLWJsb2NrIGJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgbm90aGluZ1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==