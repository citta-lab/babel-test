"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Function = _interopRequireDefault(require("./Function"));

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return "(".concat(this.name, ", is of age ").concat(this.age, ")");
  }

  getInMonths() {
    var inMonths = (0, _Function.default)(this.age);
    return "(".concat(this.name, ", is ").concat(inMonths, " months old)");
  }

}

var _default = Student;
exports.default = _default;