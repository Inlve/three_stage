"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NameForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NameForm, _React$Component);

  function NameForm(props) {
    var _this;

    _classCallCheck(this, NameForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameForm).call(this, props));
    _this.state = {
      value: '',
      show: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NameForm, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value.toUpperCase()
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState({
        show: this.state.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement("label", null, "\u540D\u5B57:", React.createElement("input", {
        type: "text",
        name: "name",
        value: this.state.value,
        onChange: this.handleChange
      })), React.createElement("input", {
        type: "submit",
        value: "\u63D0\u4EA4"
      }), React.createElement("p", null, "\u63D0\u4EA4\u7684\u540D\u5B57:", this.state.show));
    }
  }]);

  return NameForm;
}(React.Component);

var EssayForm =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(EssayForm, _React$Component2);

  function EssayForm(props) {
    var _this2;

    _classCallCheck(this, EssayForm);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(EssayForm).call(this, props));
    _this2.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    };
    _this2.handleChange = _this2.handleChange.bind(_assertThisInitialized(_this2));
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(EssayForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('提交的文章: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement("label", null, "\u6587\u7AE0:", React.createElement("textarea", {
        value: this.state.value,
        onChange: this.handleChange
      })), React.createElement("input", {
        type: "submit",
        value: "\u63D0\u4EA4"
      }));
    }
  }]);

  return EssayForm;
}(React.Component);

var FlavorForm =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(FlavorForm, _React$Component3);

  function FlavorForm(props) {
    var _this3;

    _classCallCheck(this, FlavorForm);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(FlavorForm).call(this, props));
    _this3.state = {
      value: 'coconut'
    };
    _this3.handleChange = _this3.handleChange.bind(_assertThisInitialized(_this3));
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(FlavorForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('你喜欢的风味是: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement("label", null, "\u9009\u62E9\u4F60\u559C\u6B22\u7684\u98CE\u5473:", React.createElement("select", {
        value: this.state.value,
        onChange: this.handleChange
      }, React.createElement("option", {
        value: "\u8461\u8404\u67DA"
      }, "\u8461\u8404\u67DA"), React.createElement("option", {
        value: "\u9178\u6A59"
      }, "\u9178\u6A59"), React.createElement("option", {
        value: "\u6930\u5B50"
      }, "\u6930\u5B50"), React.createElement("option", {
        value: "\u8292\u679C"
      }, "\u8292\u679C"))), React.createElement("input", {
        type: "submit",
        value: "\u63D0\u4EA4"
      }));
    }
  }]);

  return FlavorForm;
}(React.Component);

ReactDOM.render(React.createElement("div", null, React.createElement("p", null, "input,textarea,select\u90FD\u662F\u53D7\u63A7\u7EC4\u4EF6 input:file\u662F\u975E\u53D7\u63A7\u7EC4\u4EF6"), React.createElement(NameForm, null), React.createElement(EssayForm, null), React.createElement(FlavorForm, null)), document.getElementById('root'));
//# sourceMappingURL=form.js.map