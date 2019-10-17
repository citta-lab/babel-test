"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Function = _interopRequireDefault(require("./Function"));

var Student =
/*#__PURE__*/
function () {
  function Student(name, age) {
    (0, _classCallCheck2["default"])(this, Student);
    this.name = name;
    this.age = age;
  }

  (0, _createClass2["default"])(Student, [{
    key: "getDetails",
    value: function getDetails() {
      return "(".concat(this.name, ", is of age ").concat(this.age, ")");
    }
  }, {
    key: "getInMonths",
    value: function getInMonths() {
      var inMonths = (0, _Function["default"])(this.age);
      return "(".concat(this.name, ", is ").concat(inMonths, " months old)");
    }
  }]);
  return Student;
}();

var _default = Student;
exports["default"] = _default;