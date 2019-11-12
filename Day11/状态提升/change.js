"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BoilingVerdict =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BoilingVerdict, _React$Component);

  function BoilingVerdict() {
    _classCallCheck(this, BoilingVerdict);

    return _possibleConstructorReturn(this, _getPrototypeOf(BoilingVerdict).apply(this, arguments));
  }

  _createClass(BoilingVerdict, [{
    key: "render",
    value: function render() {
      if (this.props.celsius >= 100) {
        return React.createElement("p", null, "\u6C34\u4F1A\u6CB8\u817E");
      } else {
        return React.createElement("p", null, "\u6C34\u4E0D\u4F1A\u6CB8\u817E");
      }
    }
  }]);

  return BoilingVerdict;
}(React.Component);

var TemperatureInput =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(TemperatureInput, _React$Component2);

  function TemperatureInput(props) {
    var _this;

    _classCallCheck(this, TemperatureInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemperatureInput).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TemperatureInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      // this.setState({
      //     temperature: e.target.value
      // })
      // 现在需要更新temperature需要来自父组件的onTemperatureChange来更新
      this.props.onTemperatureChange(e.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("fieldset", null, React.createElement("legend", null, "\u8F93\u5165\u6E29\u5EA6(\u5355\u4F4D:", this.props.scale, ")"), React.createElement("input", {
        type: "text",
        value: this.props.temperature,
        onChange: this.handleChange
      }));
    }
  }]);

  return TemperatureInput;
}(React.Component);

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
  var input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    return '';
  }

  var output = convert(input);
  var rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

var Calculator =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Calculator, _React$Component3);

  function Calculator(props) {
    var _this2;

    _classCallCheck(this, Calculator);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Calculator).call(this, props));
    _this2.state = {
      temperature: ''
    };
    _this2.handleCelsiusChange = _this2.handleCelsiusChange.bind(_assertThisInitialized(_this2));
    _this2.handleFahrenheitChange = _this2.handleFahrenheitChange.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Calculator, [{
    key: "handleCelsiusChange",
    value: function handleCelsiusChange(temperature) {
      this.setState({
        scale: 'c',
        temperature: temperature
      });
    }
  }, {
    key: "handleFahrenheitChange",
    value: function handleFahrenheitChange(temperature) {
      this.setState({
        scale: 'f',
        temperature: temperature
      });
    }
  }, {
    key: "render",
    value: function render() {
      var scale = this.state.scale;
      var temperature = this.state.temperature;
      var celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      var fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      return React.createElement("div", null, React.createElement(TemperatureInput, {
        scale: "c",
        temperature: celsius,
        onTemperatureChange: this.handleCelsiusChange
      }), React.createElement(TemperatureInput, {
        scale: "f",
        temperature: fahrenheit,
        onTemperatureChange: this.handleFahrenheitChange
      }), React.createElement(BoilingVerdict, {
        celsius: parseFloat(celsius)
      }));
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));
//# sourceMappingURL=change.js.map