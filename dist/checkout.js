'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkout = function Checkout(priceRule) {
  _classCallCheck(this, Checkout);

  this.priceRule = priceRule;
  console.log('price rule: ', this.priceRule);
};

exports.default = Checkout;
;