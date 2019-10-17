"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var studentAge = [12, 15, 10, 20];

var addAge = array => {
  var validAge = array.filter(age => age < 21);
  return [...studentAge, ...validAge];
};

var _default = addAge;
exports.default = _default;