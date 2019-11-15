"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Context可以让我们无需明确地传递给每一个组件,就能将值传递深入到每一个组件
// 为当前的theme创建一个context,light为默认值
var ThemeContext = React.createContext('light');

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      // 使用Provider来讲当前的theme传递给以下的组件树.
      // 无论多深,任何组件都能够读取这个值
      // 在这个例子中,我们将"dark"作为当前的值传递下去
      return React.createElement(ThemeContext.Provider, {
        value: "dark"
      }, React.createElement(Toolbar, {
        theme: "dark"
      }));
    }
  }]);

  return App;
}(React.Component);

var Toolbar =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Toolbar, _React$Component2);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: "render",
    value: function render() {
      // Toolbar组件接受一个额外的"theme"属性,然后传递给ThemedButton组件.
      // 如果应用中每一个单独的但牛都需要知道theme的值,这样会很麻烦
      // 因为必须将这个值层层的传递给所有的组件
      // 而使用了Context就可以避免中间元素传递props
      //  使用了Context之后,不需要像这样:
      // <ThemedButton theme={this.props.theme} />
      // 来指定往下传递theme了
      return React.createElement("div", null, React.createElement(ThemedButton, null));
    }
  }]);

  return Toolbar;
}(React.Component);

var ThemedButton =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ThemedButton, _React$Component3);

  function ThemedButton() {
    _classCallCheck(this, ThemedButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ThemedButton).apply(this, arguments));
  }

  _createClass(ThemedButton, [{
    key: "render",
    // 指定contextType 读取当前的Theme context
    // React会往上找到最近的theme Provider,然后使用他的值
    value: function render() {
      return React.createElement(Button, {
        theme: this.context
      });
    }
  }]);

  return ThemedButton;
}(React.Component);

_defineProperty(ThemedButton, "contextType", ThemeContext);

var Button =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Button, _React$Component4);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.props.theme);
    }
  }]);

  return Button;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
/**
 * 一般来说需要谨慎使用Context
 * 使用的步骤是:
 * 1. React.createContext();生成一个Context对象
 * 2. Context.Provider;订阅Context变化
 * 3. 挂在Class.contextType,使用this.context来读取最近的Context对象上的那个值
 *
 * const MyContext = React.createContext(defaultValue); // defaultValue 一个默认值
 * <MyContext.Provider value = { 某一个值 } />
 * class MyClass extends React.Component{
 *     componentDidMount(){
 *         ket value = this.context;
 *     }
 *     // 或者使用
 *     static contextType = MyContext
 * }
 */
//# sourceMappingURL=index.js.map