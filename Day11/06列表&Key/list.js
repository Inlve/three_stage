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

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
    _this.renderList = _this.renderList.bind(_assertThisInitialized(_this));
    _this.state = {
      news: ["第一天", "第二天", "第三天"]
    };
    return _this;
  }

  _createClass(List, [{
    key: "renderList",
    value: function renderList(list) {
      return list.map(function (el, index) {
        // 注意要绑定key
        return React.createElement("li", {
          key: index
        }, el);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.news, React.createElement("ul", null, this.renderList(this.state.news)), React.createElement("p", null, "\u5176\u4ED6\u7EC4\u4EF6\u6E32\u67D3:"), React.createElement(ListItem, {
        list: this.state.news
      }));
    }
  }]);

  return List;
}(React.Component);

var ListItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ListItem, _React$Component2);

  function ListItem(props) {
    var _this2;

    _classCallCheck(this, ListItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, props));
    _this2.renderList = _this2.renderList.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ListItem, [{
    key: "renderList",
    value: function renderList() {
      return this.props.list.map(function (el, index) {
        return React.createElement("li", {
          key: index
        }, el);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("ul", null, this.renderList());
    }
  }]);

  return ListItem;
}(React.Component);

ReactDOM.render(React.createElement(List, null), document.getElementById('root'));
//# sourceMappingURL=list.js.map