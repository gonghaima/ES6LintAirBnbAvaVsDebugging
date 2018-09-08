Object.defineProperty(exports, "__esModule", { value: true });let _createClass = function () {function defineProperties(target, props) {for (let i = 0; i < props.length; i++) {let descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();let _product = require('../config/product.json');

var _product2 = _interopRequireDefault(_product);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} return Array.from(arr);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}let
PricingRules = function () {
  function PricingRules() {
    _classCallCheck(this, PricingRules);
    this.productList = JSON.parse(JSON.stringify(_product2.default));
  }
  _createClass(PricingRules, [
    {
      key: 'calc',
      value: function calc(items) {
      /** * cari */
      let cari_num = [].concat(_toConsumableArray(items)).filter((c) => {return c === 'cari';}).length;
      let free_cari_num = Math.floor(cari_num / 3);
        cari_num -= free_cari_num;
      let cari_price = [].concat(_toConsumableArray(this.productList)).filter((c) => {return c.sku === 'cari';})[0].price;

        /** * homi */
      let productListUpdate = [].concat(_toConsumableArray(this.productList));
      let homi_num = [].concat(_toConsumableArray(items)).filter((c) => {return c === 'homi';}).length;
      if (homi_num > 4) {
          productListUpdate = productListUpdate.map(function(c) {
          if (c.sku === 'homi') c.price = 499.99;
            return c;
          });
      }
      let homi_price = [].concat(_toConsumableArray(this.productList)).filter((c) => {return c.sku === 'homi';})[0].price;

        /** * heai */
      let heai_num = [].concat(_toConsumableArray(items)).filter((c) => {return c === 'heai';}).length;
      let heai_price = [].concat(_toConsumableArray(this.productList)).filter((c) => {return c.sku === 'heai';})[0].price;

        /** * homi */
      let peti_num = [].concat(_toConsumableArray(items)).filter((c) => {return c === 'peti';}).length;
      peti_num -= heai_num;
      peti_num = peti_num < 0 ? 0 : peti_num;
      let peti_price = [].concat(_toConsumableArray(this.productList)).filter((c) => {return c.sku === 'peti';})[0].price;

      let total = cari_num * cari_price + homi_num * homi_price + heai_num * heai_price + peti_num * peti_price;

        return total;
      }
    }
  ]);
  return PricingRules;
})();
exports.default = PricingRules;
// # sourceMappingURL=pricingRules.js.map
