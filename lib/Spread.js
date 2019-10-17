"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var studentAge = [12, 15, 10, 20];

var addAge = function addAge(array) {
  var validAge = array.filter(function (age) {
    return age < 21;
  });
  return [].concat(studentAge, (0, _toConsumableArray2["default"])(validAge));
};

var _default = addAge;
exports["default"] = _default;