'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _product = require('../config/product.json');var _product2 = _interopRequireDefault(_product);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var
Checkout = function () {
  function Checkout(priceRules) {_classCallCheck(this, Checkout);
    this.priceRules = priceRules;
    this.productList = JSON.parse(JSON.stringify(_product2.default));
    this.items = [];
  }

  // Getter
  _createClass(Checkout, [{ key: 'scan', value: function scan(




    item) {
      var result = this.items.push(item);
      return result;
    } }, { key: 'total', value: function total()
    {
      // return this.format(this.priceRule.calc(this.items));
      // let total = [...this.priceRules].map(([key,rule])=>rule(this.items, this.productList)).reduce((a,b)=>{a+b},0);
      // let summaryList = [...this.priceRules].map(([key,rule])=>{
      //   return rule(this.items, this.productList);
      // });

      // let summaryList = [...this.priceRules].map(({ rule }) => {
      //   return rule(this.items, this.productList);
      // });

      // let summaryList = Object.entries(this.priceRules).map(([key, rule]) =>{
      //   const func = {rule};
      //   return func(this.items, this.productList);
      //   });

      // let summaryList = Object.entries(this.priceRules).map((key, rule) =>{
      //   const func = {rule};
      //   return func(this.items, this.productList);
      //   });

      var that = this;
      var summaryList = Object.entries(this.priceRules).map(function (_ref) {var _ref2 = _slicedToArray(_ref, 2),key = _ref2[0],applyRule = _ref2[1];
        return applyRule(that.items, that.productList);
      });


      var total = summaryList.reduce(function (a, b) {return a + b;}, 0);

      return this.format(total);
    } }, { key: 'format', value: function format(
    data) {
      if (Math.floor(data) === data) {
        return '$ ' + data + '.00';
      }
      return '$ ' + data;
    } }, { key: 'checkoutName', get: function get() {var rl = this.priceRule;return 'myCheckout Name';} }]);return Checkout;}();exports.default = Checkout;
;
//# sourceMappingURL=checkout.js.map