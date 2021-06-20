"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", (0, _extends2["default"])({
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M24 24H0V0h24v24z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8
  }));
}

var _default = SvgComponent; //material-ui fiber_manual_record icon https://material.io/resources/icons/?icon=fiber_manual_record&style=baseline
//component generated by svgr https://github.com/gregberge/svgr

exports["default"] = _default;