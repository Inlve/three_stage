"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Account =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Account, _React$Component);

  function Account(props) {
    var _this;

    _classCallCheck(this, Account);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Account).call(this, props));
    _this.state = {
      user: '',
      pwd: ''
    };
    _this.handleChangInput = _this.handleChangInput.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Account, [{
    key: "handleChangInput",
    value: function handleChangInput(e) {
      // 处理多个input元素的时候,我们可以给每个元素添加name属性
      // 并让处理函数根据event.target.name的值来选择执行的操作
      var target = e.target;
      this.setState(_defineProperty({}, target.name, target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", null, React.createElement("label", null, "\u5E10\u53F7:", React.createElement("input", {
        type: "text",
        name: "user",
        onChange: this.handleChangInput
      })), React.createElement("label", null, "\u5BC6\u7801:", React.createElement("input", {
        type: "password",
        name: "pwd",
        onChange: this.handleChangInput
      })), React.createElement("input", {
        type: "text",
        value: "Hi"
      }));
    }
  }]);

  return Account;
}(React.Component);

ReactDOM.render(React.createElement(Account, null), document.getElementById('root'));
//# sourceMappingURL=account.js.map