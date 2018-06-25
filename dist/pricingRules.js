"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = require("./config/product.json");

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pricingRules = function pricingRules() {
  _classCallCheck(this, pricingRules);

  this.productList = JSON.parse(_product2.default);
};

exports.default = pricingRules;
;