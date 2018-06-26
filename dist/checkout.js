'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Checkout = function () {
  function Checkout(priceRule) {_classCallCheck(this, Checkout);
    this.priceRule = priceRule;
    console.log('price rule: ', this.priceRule);
    this.items = [];
  }

  // Getter
  _createClass(Checkout, [{ key: 'findOutToday', value: function findOutToday()







    {
      return new Date().getDate();
    } }, { key: 'scan', value: function scan(

    item) {
      this.items.push(item);
    } }, { key: 'showItems', value: function showItems()
    {
      return this.items;
    } }, { key: 'checkoutName', get: function get() {return 'myCheckout Name';} }, { key: 'cPriceRule', get: function get() {return this.priceRule;} }]);return Checkout;}();exports.default = Checkout;
;
//# sourceMappingURL=checkout.js.map