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

var FancyBorder =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FancyBorder, _React$Component);

  function FancyBorder() {
    _classCallCheck(this, FancyBorder);

    return _possibleConstructorReturn(this, _getPrototypeOf(FancyBorder).apply(this, arguments));
  }

  _createClass(FancyBorder, [{
    key: "render",
    value: function render() {
      // 通过children  来将子组件传递到渲染结果中
      // 或者可以预留下prop
      return React.createElement("div", {
        className: 'FancyBorder FacnyBorder-' + this.props.color
      }, this.props.children, React.createElement("div", null, this.props.div));
    }
  }]);

  return FancyBorder;
}(React.Component);

var WelcomeDialog =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(WelcomeDialog, _React$Component2);

  function WelcomeDialog() {
    _classCallCheck(this, WelcomeDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(WelcomeDialog).apply(this, arguments));
  }

  _createClass(WelcomeDialog, [{
    key: "render",
    value: function render() {
      return (// <FancyBorder></FancyBorder>中的子组件的内容会被传递到FancyBorder的children中
        React.createElement(FancyBorder, {
          color: "bule",
          div: React.createElement("p", null, "\u8FD9\u662F\u901A\u8FC7\u9884\u7559\u7684div prop\u63D2\u5165\u7684\u5185\u5BB9")
        }, React.createElement("h1", {
          className: "Dialog-title"
        }, "Welcome"), React.createElement("p", {
          className: "Dialog-message"
        }, "Thank you for visiting our spacecraft!"))
      );
    }
  }]);

  return WelcomeDialog;
}(React.Component);

ReactDOM.render(React.createElement(WelcomeDialog, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map