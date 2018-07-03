'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Checkout = function () {
  function Checkout(priceRule) {_classCallCheck(this, Checkout);
    this.priceRule = priceRule;
    console.log('price rule: ', this.priceRule);
    this.items = [];
  }

  // Getter
  _createClass(Checkout, [{ key: 'scan', value: function scan(




    item) {
      var result = this.items.push(item);
      return result;
    } }, { key: 'total', value: function total()
    {
      return this.format(this.priceRule.total(this.items));
    } }, { key: 'format', value: function format(
    data) {
      if (Math.floor(data) === data) {
        return '$ ' + data + '.00';
      }
      return '$ ' + data;
    } }, { key: 'checkoutName', get: function get() {var rl = this.priceRule;return 'myCheckout Name';} }]);return Checkout;}();exports.default = Checkout;
;
//# sourceMappingURL=checkout.js.map